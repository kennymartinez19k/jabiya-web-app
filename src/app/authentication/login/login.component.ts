import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { PopoverController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/authServices/auth.service';
import { LangPopoverComponent } from '../lang-popover/lang-popover.component';
import { SAVED_CREDENTIAL } from 'src/app/util/constants';
import { Output, EventEmitter } from '@angular/core';
import { LANGUAGE, ENVVARIABLE } from 'src/app/util/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public selectedLang = 'Spanish';

  // @Output() languageCreated = new EventEmitter<{ ln: string }>()
  // langSelection() {
  //   this.languageCreated.emit({ ln: this.selectedLang })
  //   console.log("output emit", this.selectedLang);
  //   localStorage.setItem(LANGUAGE, this.selectedLang);
  // }

  languages = [
    { lang: 'Spanish', imagesrc: './././assets/images/Spanish.png' },
    { lang: 'English', imagesrc: './././assets/images/English.png' },
  ];
  signinForm: any;
  showPassword = 'password';
  public loading = false;
  loginClicked = false;
  envVariable = 'Development';
  routeNameUrl = this.router.url

  public languageJson = {
    loginPage: {
      spanish: {
        welcomemsg: 'Entrar a su Cuenta',
        description:
          'Ingrese su correo electrónico y contraseña y presione iniciar sesión para ingresar a su cuenta',
        email: 'Teléfono / Correo electrónico',
        password: 'Contraseña',
        resetPasswordText: '¿Olvidaste tu contraseña?',
        registerAccountText: '¿No tienes una cuenta?',
        registerAccountButtonText: 'Inscríbete',
        loginButtonText: 'Entra a tu cuenta',
        errorMessage: 'Contraseña o nombre de usuario incorrecto',
        remember: 'Recuérdame',
      },
      english: {
        welcomemsg: 'Login to your account',
        description:
          'Enter your email and password and press login to go into your account',
        email: 'Phone Number / Email',
        password: 'Password',
        resetPasswordText: 'Forgot your password?',
        registerAccountText: 'Don’t have an account?',
        registerAccountButtonText: 'Register',
        loginButtonText: 'Login',
        errorMessage: 'Wrong password or username',
        remember: 'Remember Me',
      },
    },
  };
  loginSubscription: Subscription;

  constructor(
    private router: Router,
    public popoverController: PopoverController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public toastController: ToastController
  ) {
    localStorage.setItem(LANGUAGE, this.selectedLang);
    localStorage.setItem(ENVVARIABLE, this.envVariable);
  }
  langSelection(value) {
    const selectedLang = 'Spanish';
    console.log('Register language value', value);
    if (value !== null) {
      localStorage.setItem(LANGUAGE, value);
      console.log('selected value', value);
    } else {
      localStorage.setItem(LANGUAGE, selectedLang);
      console.log('Default language value', value);
    }
  }
  async langPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LangPopoverComponent,
      cssClass: 'lang-popover-css',
      event: ev,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      translucent: true,
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  navigate() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.signinForm = this.intializeLoginForm();
    const savedCredential = JSON.parse(localStorage.getItem(SAVED_CREDENTIAL));
    console.log(savedCredential);
    if (savedCredential !== null) {
      this.signinForm.patchValue(savedCredential);
    }
  }

  intializeLoginForm(): FormGroup {
    return this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  envVariableSelection(varible) {
    this.envVariable = varible.detail.value;
    console.log('varible', varible.detail.value);
    localStorage.setItem(ENVVARIABLE, varible.detail.value);
  }

  login(): void {
    this.loading = true;
    this.loginClicked = true;
    const formValues = this.signinForm.value;
    this.loginSubscription = this.authService.login(formValues).subscribe(
      async (response) => {
        if (formValues.rememberMe) {
          delete formValues.rememberMe;
          localStorage.setItem(SAVED_CREDENTIAL, JSON.stringify(formValues));
        }
        console.log('response', response);
        this.loading = false;
        if (response.result.status_response === '200 OK') {
          this.loginClicked = false;
          // document.cookie = 'session_id=' + response.result.session_id;
          this.navigate();
          await Storage.set({
            key: 'userData',
            value: JSON.stringify(response.result.data),
          });
          this.authService.setUser.next();
        }
      },
      (error: any) => {
        this.loginClicked = false;
        this.loading = false;
        console.error('error', error);
        this.presentToast(
          this.selectedLang === 'Spanish'
            ? this.languageJson.loginPage.spanish.errorMessage
            : this.languageJson.loginPage.english.errorMessage
        );
      }
    );
  }
  loadLang() {
    setTimeout(() => {
      const radios = document.getElementsByClassName('alert-radio-label');
      for (let index = 0; index < radios.length; index++) {
        const singrad = radios[index];
        singrad.innerHTML = singrad.innerHTML.concat(
          '<img src=' +
            this.languages[index].imagesrc +
            ' style="width:24px; position:absolute; right:20px;"/>'
        );
        (singrad as HTMLElement).style.fontSize = '22px';
        (singrad as HTMLElement).style.textTransform = 'uppercase';
      }
    }, 200);
  }
  async presentToast(error) {
    const toast = await this.toastController.create({
      message: error,
      duration: 2000,
    });
    toast.present();
  }

  changePasswordType() {
    this.showPassword = this.showPassword === 'password' ? 'text' : 'password';
  }

  ngOnDestroy() {
    this.unSubscribe(this.loginSubscription);
    this.selectedLang = null;
    this.languages = null;
    this.signinForm = null;
    this.showPassword = null;
    this.loading = null;
    this.languageJson = null;
    this.router = null;
    this.popoverController = null;
    this.formBuilder = null;
    this.authService = null;
    this.toastController = null;
  }

  unSubscribe(subscription: Subscription) {
    if (subscription !== null && subscription !== undefined) {
      subscription.unsubscribe();
    }
  }
}

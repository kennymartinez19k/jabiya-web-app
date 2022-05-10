import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authServices/auth.service';
import {LANGUAGE} from 'src/app/util/constants'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
 public passwordResetForm: any;
public language:any;
public languageJson={
  forgotPage:{
    spanish:{
      recovery:'¿Has olvidado tu contraseña?',
      regemail:' Ingrese su correo electrónico registrado y número de teléfono móvil para recuperar su cuenta contraseña',
      phone:'Número de teléfono',
      send:'Enviar',
      emailcheck:'Consultar su correo electrónico',
      back:'Atrás para iniciar sesión',
      passsent:'Hemos enviado una instrucción de recuperación de contraseña a su correo electrónico'

  },
  english:{
    recovery:'have you forgotten your password?',
    regemail:'Enter your registered email and mobile number to recover your account password',
    phone:'Phone number',
    send: 'send',
    emailcheck :'Check your e-mail',
    back:'Back to login',
    passsent:'We have sent a password recovery instruction to your email'
  }
  }

}
mailSent=false;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public toastController: ToastController,
    public alertController: AlertController) { 
      this.language=localStorage.getItem(LANGUAGE);
    }
  onSubmit(){
    this.mailSent=true;
  }
  ngOnInit() {
    this.passwordResetForm = this.intializepasswordResetForm();
  }

  intializepasswordResetForm(): FormGroup {
    return this.formBuilder.group({
      login: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  reset(): void {
    console.log('value', this.passwordResetForm.value);

    this.authService.forgotPassword(this.passwordResetForm.value).subscribe(
      (response) => {
        console.log('response', response);
        if (response.result === 'Ok') {
          this.checkMail();
        }
      },
      (error: any) => {
        if(this.language === 'Spanish'){
        this.presentToast('Correo electrónico o número de teléfono incorrecto');
        }
        else{
          this.presentToast('Wrong email or phone number');
        }
      }
    );
  }

  navigate() {
    this.router.navigate(['/authentication/login']);
  }

  async presentToast(error) {
    const toast = await this.toastController.create({
      message: error,
      duration: 2000
    });
    toast.present();
  }
  async checkMail() {
    if(this.language === 'Spanish'){
    const alert = await this.alertController.create({
      // cssClass: 'successfull-registration',
      header: 'Consultar su correo electrónico',
      // subHeader: 'Subtitle',
      message: 'Verifique su correo electrónico y siga las instrucciones para restablecer su contraseña',
      buttons: [{ text: 'OK', handler: (d) =>  this.navigate() }]
    });

    await alert.present();}
    else{
      const alert = await this.alertController.create({
        // cssClass: 'successfull-registration',
        header: 'Check your e-mail',
        // subHeader: 'Subtitle',
        message: 'Check your email and follow the instructions to reset your password',
        buttons: [{ text: 'OK', handler: (d) =>  this.navigate() }]
      });
  
      await alert.present();
    }
  }

}

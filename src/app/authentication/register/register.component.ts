/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Subscription } from 'rxjs';
import { JabiyaService } from 'src/app/services/jabiyaService/jabiya.service';
import { EMAIL_PATTERN, NUMBER_ONLY_PATTERN } from 'src/app/util/constants';
import { AuthService } from '../../services/authServices/auth.service';
import { LANGUAGE } from 'src/app/util/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  selectedLang = 'Spanish';
  languages = [
    { lang: 'Spanish', imagesrc: 'assets/images/Spanish.png' },
    { lang: 'English', imagesrc: 'assets/images/English.png' },  
  ];
  public languageJson = {
    regPage: {
      spanish: {
        account: 'Crea una cuenta',
        details: 'Si ya estás registrado, regresar a la pantalla anterior y usa el botón de “Iniciar Sesión”',
        name: 'Nombre',
        fname:' Primer Nombre is required',
        lname:'Apellido',
        lnamereq:'Nombre de la Tienda is required',
        email:'Correo Electrónico',
        emailin:'Correo Electrónico is Invalid',
        emailreq:'Correo Electrónico is required',
        phone:'Teléfono',
        phonereq:'Teléfono is required',
        phonein:'Teléfono is invalid',
        storenamee:'Nombre de la Tienda',
        storenameereq:'Nombre de la Tienda is required',
        code:'Código de la Tienda',
        codereq:'Código de la Tienda is required',
        owner:'Nombre del Dueño',
        ownerreq:'Nombre del Dueño is required',
        direction:'Dirección',
        directionreq:'Dirección is required',
        province:'Provincia',
        provincereq:'Provincia is required',
        town:'Ciudad',
        townreq:'Ciudad is required',
        seller:'Vendedor',
        sellreq:'Vendedor is required',
        storetype:'Tipo de Tienda',
        storetypereq:' Tipo de Tienda is required',
        signup:'Regístrate',
        selprovince:'Seleccionar Provincia',
        selcity:'Seleccionar Ciudad',
        selsector:'Seleccionar Sector',
        selstore:'Seleccionar Tienda'
      },
      english:{
        account: 'Create an account',
        details: 'If you are already registered, return to the previous screen and use the "Login" button',
        name: 'First Name',
        fname:'First name is required',
        lname:'Last name',
        lnamereq:'Last Name is required',
        email:'Email',
        emailin:'Email is invalid',
        emailreq:'Email is required',
        phone:'Telephone',
        phonereq:'Telephone is required',
        phonein:'Telephone is invalid',
        storenamee:'Store name',
        storenameereq:'Store name is required',
        code:'Store code',
        codereq:'Store code is required',
        owner:'Owner Name',
        ownerreq:'Owner Name is required',
        direction:'Direction',
        directionreq:'Direction is required',
        province:'Province',
        provincereq:'Province is required',
        town:'Town',
        townreq: 'Town is required',
        seller:'Seller',
        sellreq:'Seller is required',
        storetype:'Type of store',
        storetypereq: 'Store type is required',
        signup:'Sign up',
        selprovince:'Select Province',
        selcity:'Select city',
        selsector:'Select Sector',
        selstore:'Select Store'
      }
    }
  }
  signupForm: FormGroup;
  localLanguage: any;
  public isSubmitted = false;
  states: any[];
  cities: any[];
  sectors: any[];
  clientTypes: any[];
  getStateSubscription: Subscription;
  getCitySubscription: Subscription;
  getSectorSubscription: Subscription;
  getClientTypeSubscription: Subscription;
  emailVerifySubscription: Subscription;
  permissionSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private jabiyaService: JabiyaService,
  ) {
    this.localLanguage = jabiyaService.language;
   }

  ngOnInit() {
    this.signupForm = this.buildRegistrationForm();
    this.getStates();
    this.getClientTypes();
    this.getCurrentLocation();
  }

  buildRegistrationForm(): FormGroup {
    return this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      phone: ['', [Validators.required, Validators.pattern(NUMBER_ONLY_PATTERN)]],
      company_name: ['', Validators.required],
      company_code: ['', Validators.required],
      type_client_id: ['', Validators.required],
      salesperson: ['', Validators.required],
      sector_id: ['', Validators.required],
      owner_name: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      latitude: [''],
      longitude: [''],
      address_line_1: ['', Validators.required],
      address_line_2: ['', Validators.required]
    });
  }
  langSelection(value) {   
    const selectedLang = 'Spanish';
    console.log('login language value', value);
    if(value !==null){
    localStorage.setItem(LANGUAGE, value);
    console.log('selected value', value);
    }
    else{
      localStorage.setItem(LANGUAGE,selectedLang)
      console.log('Default language value', value);
    }
  }
  getStates(): void {
    this.getStateSubscription =
      this.authService.getStates().subscribe((states: any) => {
        this.states = states.result.data;
      }, error => {
        console.error('State Fetch Failed: ', error);
      });
  }

  getClientTypes(): void {
    this.getClientTypeSubscription =
      this.authService.getClientTypes().subscribe((clientTypes) => {
        this.clientTypes = clientTypes.result.data;
      }, error => {
        console.error('State Fetch Failed: ', error);
      });
  }

  async getCurrentLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    const locCordinates = coordinates.coords;
    this.signupForm.get('latitude').setValue(locCordinates.latitude.toString());
    this.signupForm.get('longitude').setValue(locCordinates.longitude.toString());
  }

  get errorControl() {
    return this.signupForm.controls;
  }

  submit(): void {
    this.isSubmitted = true;
    const formValues = this.signupForm.value;
    delete formValues.city;
    delete formValues.state;
    if (formValues.latitude === '') {
      this.jabiyaService.alertCreater('',
        this.localLanguage.locationPermissionText, this.localLanguage.locationPermissionButton,
        'locationPermission');
      this.permissionSubscription =
        this.jabiyaService.eventTriggerer.subscribe(event => {
          if (event === 'locationPermission') {
            this.getCurrentLocation();
          }
        });
      this.isSubmitted = false;
    } else {
      if (this.signupForm.valid) {
        this.authService.signUp(this.signupForm.value).subscribe(
          (response) => {
            console.log('response', response);
            if (response.result.status_response === '200 OK') {
              this.checkMail();
            }
          },
          (error: any) => {
            console.error('SignUp Error: ', error);
            if (error.error.result.coreError === 2001) {
              if( this.selectedLang === 'Spanish'){
              this.jabiyaService.presentToast(
                // eslint-disable-next-line max-len
                'Error: correo electrónico o teléfono duplicado. Cuenta ya registrada:' +
                ' ingrese un nuevo correo electrónico o vaya directamente a la pantalla de inicio de sesión'
              );}
              else
              this.jabiyaService.presentToast(
                // eslint-disable-next-line max-len
                'Error: Duplicate email or phone. Account already registered.' +
                ' Enter a new email or go directly to the login screen'
              );
            } else {
              this.jabiyaService.presentToast('error');
            }
            this.isSubmitted = false;
          }
        );
      }
    }
    console.log('value', formValues);
  }

  async checkMail() {
    if( this.selectedLang === 'Spanish'){
    this.jabiyaService.alertCreater('Te has registrado exitosamente!',
      'Te enviamos un correo electrónico a tu cuenta. Por favor, ve a tu email, y sigue' +
      ' las instrucciones que tiene, para cambiar tu contraseña temporal.' + '<br/><br/>' +
      'Luego puedes usar tu nueva contraseña para iniciar tu sesión en esta aplicación móvil de Jabiya', 'OK',
      'emailVerify');}
      else{
        this.jabiyaService.alertCreater('You have successfully registered!',
        'We send an email to your account. Please go to your email, and follow' +
        ' The instructions it has, to change your temporary password.' + '<br/><br/>' +
        'Then you can use your new password to log in to this Jabiya mobile app', 'OK',
        'emailVerify');
      }
    this.emailVerifySubscription =
      this.jabiyaService.eventTriggerer.subscribe(event => {
        if (event === 'emailVerify') {
          this.router.navigate(['/home']);
        }
      });
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

  stateSelected(event) {
    const stateId = event.target.value;
    this.getCitySubscription =
      this.authService.getCities(stateId).subscribe((cities: any) => {
        this.cities = cities.result.data;
      }, error => {
        console.error('City Fetch Failed: ', error);
      });
  }

  citySelected(event) {
    const cityId = event.target.value;
    this.getSectorSubscription =
      this.authService.getSectors(cityId).subscribe((sectors: any) => {
        this.sectors = sectors.result.data;
      }, error => {
        console.error('Sector Fetch Failed: ', error);
      });
  }

  ngOnDestroy(): void {
    this.unSubscribe(this.getStateSubscription);
    this.unSubscribe(this.getCitySubscription);
    this.unSubscribe(this.getSectorSubscription);
    this.unSubscribe(this.getClientTypeSubscription);
    this.unSubscribe(this.emailVerifySubscription);
    this.unSubscribe(this.permissionSubscription);
    this.selectedLang = null;
    this.languages = null;
    this.signupForm = null;
    this.localLanguage = null;
    this.isSubmitted = null;
    this.states = null;
    this.cities = null;
    this.sectors = null;
    this.clientTypes = null;

    this.formBuilder = null;
    this.authService = null;
    this.router = null;
    this.jabiyaService = null;
  }

  unSubscribe(subscription: Subscription): void {
    if (subscription !== null && subscription !== undefined) {
      subscription.unsubscribe();
    }
  }
}

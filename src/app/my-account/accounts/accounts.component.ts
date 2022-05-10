import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { AuthService } from '../../services/authServices/auth.service';
import { SAVED_CREDENTIAL } from 'src/app/util/constants';
import {Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LANGUAGE } from 'src/app/util/constants';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  public languageJson = {
    accountPage: {
      spanish: {
        details:'Detalles de la cuenta',
        mail:'correo',
        call:'llamar',
        acc: 'Mi Cuenta',
        code: 'Código de cliente',
        adviser: 'Mi Asesor',
        pinfo: 'Información Personal',
        update: 'Actualizar',
        name: 'Nombre',
        phone: 'Teléfono',
        email:'Correo Electónico',
        pass :'Contraseña',
        help :'¿Necesitas ayuda',
        service:'Accede al Centro de Atención'      
      },    
        english: {
          details:'Account Details',
          mail:'Mail',
        call:'Call',
        acc: 'My Account',
        code: 'Client code',
        adviser: 'My adviser ',
        pinfo: 'Personal Information',
        update: 'Update',
        name: 'Name',
        phone: 'Telephone',
        email:'Email',
        pass :'Password',
        help :'Need help?',
        service:'Access the Service Center'
        }
        }}
  public userDetails: any;
  public userAccount = [];
  public userData = [];
  public savedCredential: any;
  public language:any;
  compName;
  compCode;
  public fullname:any;
  public clientname :any;
  public accountowner:any;
  public userPass: any;
  accountSubscription: Subscription;
  constructor(private authService: AuthService, private route:  ActivatedRoute) { }

  ngOnInit() {
    this.getUserAccount();
    this.language=localStorage.getItem(LANGUAGE);  
  }
  async getUserAccount() {
    const { value } = await Storage.get({ key: 'userData' });
    this.userData = JSON.parse(value);
    this.userDetails = JSON.parse(value);
    this.compName = this.userDetails.company_name;
    this.fullname = this.userDetails.fullname;
    this.clientname = this.userDetails.client;   
    this.accountowner = (this.clientname === undefined? this.fullname: this.clientname)
    console.log('userData', this.compName, this.fullname, this.clientname , this.accountowner);
    this.getAllAccountsUnderUser(this.userDetails.id);
    // this.getUserDetails(this.userDetails.id);
    this.savedCredential = JSON.parse(localStorage.getItem(SAVED_CREDENTIAL));
    this.userPass = this.savedCredential.password.replace(/./g, '*');
   
  }
  getAllAccountsUnderUser(id) {
    this.accountSubscription=this.authService.getAllAccountsUnderUser(id).subscribe(
      (res) => {
        this.userAccount = res.result.data;
        console.log('easy', this.userAccount);
        const variableOne = this.userAccount.filter(itemInArray => itemInArray.company_name === this.compName);
        this.compCode = variableOne[0].company_code
        // console.log('company code', this.compCode);       
      },
      (error: any) => {
        console.error('error', error);
      }
    );
  }
  ngOnDestroy() {
    this.unSubscribe(this.accountSubscription);
    this.userDetails = null;
    this.userAccount = null;
    this.userData = null;
    this.userPass = null;
    this.savedCredential = null;
    this.compCode = null;
    this.compName = null;
    this.authService = null;
    this.fullname = null;
    this.clientname =null;
    this.accountowner=null;
  }
  unSubscribe(subscription: Subscription) {
    if (subscription !== null && subscription !== undefined) {
      subscription.unsubscribe();
    }
  }
}

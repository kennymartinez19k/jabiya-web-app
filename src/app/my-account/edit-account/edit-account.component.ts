import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/authServices/auth.service';
import { Router } from '@angular/router';
import { LANGUAGE } from 'src/app/util/constants';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
})
export class EditAccountComponent implements OnInit, OnDestroy {
  public userData: any;
  public editAccountForm: any;
  public loading = false;
  editAccountSubscription: Subscription;
  getSessionInfoSubscription: Subscription;
  public language:any;
  public var1:any;
  public var2:any;
  public languageJson={
    editPage:{
      spanish :{
        profile : 'Editar perfil',
        fname: 'Primer Nombre',
        lname: 'Apellido',
        email:'Correo Electrónico',
        phone: 'Teléfono',
        update:'Actualización del perfil',
        success:'Éxito'
      },
      english :{
        profile : 'Edit profile',
        fname: 'First name',
        lname: 'Last name',
        email:'Email',
        phone: 'Telephone',
        update:'Profile Update',
        success:'Success'
      }
    }
  }
  constructor(
    public alertController: AlertController,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private authService: AuthService,
    private router: Router
  ) {
    this.language=localStorage.getItem(LANGUAGE);
   }

  ngOnInit() {
    this.getUserAccount();
    this.editAccountForm = this.intializeEditAccountForm();
  }

  async getUserAccount() {
    const { value } = await Storage.get({ key: 'userData' });
    this.userData = await JSON.parse(value);
    console.log('userData', this.userData);
    if(this.userData.client !== undefined){
    const name=this.userData.client;
    const words = name.split(" ");
    console.log("edit split", words)
   this.userData.firstname=this.var1= words[0];
    this.userData.lastname=this.var2= words[1]
    console.log("after edit split", this.userData.firstname,  this.userData.lastname)
    const { phone, email, firstname, lastname } = this.userData;
    this.editAccountForm.patchValue({
      phone,
      email,
      firstname,
      lastname
    });
  }
  else{    
    const { phone, email, firstname, lastname } = this.userData;
    this.editAccountForm.patchValue({
      phone,
      email,
      firstname,
      lastname
    });
  }
  }

  intializeEditAccountForm(): FormGroup {
    return this.formBuilder.group({
      phone: [this.userData?.phone, Validators.required],
      email: [this.userData?.email, Validators.required],
      firstname: [this.userData?.client, Validators.required],
      lastname: [this.userData?.client, Validators.required],
    });
  }

  sendEditAccountDetails(): void {
    this.loading = true;
    const formValues = this.editAccountForm.value;
    this.editAccountSubscription = this.authService.editAccount(formValues, this.userData.id).subscribe(
      async (response) => {
        console.log('response', response);
        // this.loading = false;
        if (response.result.status_response === '200 OK') {
          // this.presentToast('Success');
          this.getSessionInfoSubscription = this.authService.getSessionInfo().subscribe(
            async (res) => {
              console.log('response', response);
              this.loading = false;
              if (res.result.status_response === '200 OK') {
                await Storage.set({
                  key: 'userData',
                  value: JSON.stringify(res.result.data),
                });
                this.router.navigate(['/home']);
                this.presentToast(  this.language === 'Spanish'
                ? this.languageJson.editPage.spanish.success
                : this.languageJson.editPage.english.success);              
              }
            },
            (err: any) => {
              this.loading = false;
              console.error('error1', err);
              if (err.error.result.error.message === 'Error.Session expired') {
                this.router.navigate(['']);
                this.presentToast(  this.language === 'Spanish'
                ? this.languageJson.editPage.spanish.success
                : this.languageJson.editPage.english.success);
              } else {
                this.presentToast('Error!');
              }
            }
          );
        }
      },
      (error: any) => {
        this.loading = false;
        console.error('error2', error);
        this.presentToast('Error!');
      }
    );
  }

  async presentToast(error) {
    const toast = await this.toastController.create({
      message: error,
      duration: 2000,
    });
    toast.present();
  }

  async updateprofile() {
    const alert = await this.alertController.create({
      // cssClass: 'successfull-registration',
      header: this.language === 'Spanish'?'Perfil actualizado con éxito':'Profile Updated Successfully',
      // subHeader: 'Subtitle',
      message: this.language === 'Spanish'?'Your profile has been updated successfully':'',
      buttons: [{ text: 'OK', handler: (d) => console.log('Update Profile') }],
    });

    await alert.present();
  }

  ngOnDestroy() {
    this.unSubscribe(this.editAccountSubscription);
    this.unSubscribe(this.getSessionInfoSubscription);
    this.userData = null;
    this.editAccountForm = null;
    this.loading = null;
    this.router = null;
    this.formBuilder = null;
    this.authService = null;
    this.toastController = null;
    this.alertController = null;
  }

  unSubscribe(subscription: Subscription) {
    if (subscription !== null && subscription !== undefined) {
      subscription.unsubscribe();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LANGUAGE } from 'src/app/util/constants';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public languageJson = {
    settingPage: {
      spanish: {
        config: 'Configuración',
        acc: 'Mi Cuenta',
        connect: 'Conectar una nueva cuenta',
        pass:'Cambiar la contraseña',
        know:'Conócenos',
        term:'Términos y condiciones',
        policy:'Política de datos personales y aviso de privacidad',
        version:'Versión de la aplicación'
      },
      english:{
        config: 'Configuration',
        acc: 'My account',
        connect: 'Connect a new account',
        pass:'Change Password',
        know:'Know us',
        term:'Terms and Conditions',
        policy:'Personal data policy and privacy notice',
        version:'Application version'
      }
    }}
    public language: any;
  constructor(private router: Router) { }
  gotoAddAccount(){
    this.router.navigate(['/settings/addAccount']);
  }
  gotoPass()
  {
    this.router.navigate(['/settings/changePass']);
  }
  ngOnInit() {
    this.language=localStorage.getItem(LANGUAGE);
  }

}

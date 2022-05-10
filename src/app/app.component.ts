import { Component, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { PopoverController} from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/authServices/auth.service';
import { JabiyaService } from './services/jabiyaService/jabiya.service';
import { LANGUAGE } from './util/constants';
import { filter } from 'rxjs/operators';
import { MenuController } from '@ionic/angular';

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {

  widthSize = window.innerWidth;
  showSideBar = this.widthSize > 991

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    console.log(event.target.innerWidth, this.showSideBar )
    event.target.innerWidth > 991 ? this.showSideBar = true : this.showSideBar = false
  }

  name = 'Get Current Url Route Demo';
  currentRoute = {};

  languages = [
    { lang: 'Spanish', imagesrc: './././assets/images/Spanish.png' },
    { lang: 'English', imagesrc: './././assets/images/English.png' },
  ];
  public selectedLang = 'Spanish';
  public appPages = [
    { title: 'Página Principal', icon: 'home-outline', url: 'home' },
    { title: 'Puntos', icon: 'gift-outline', url: 'points' },
    { title: 'Promociones', icon: 'pricetag-outline', url: 'promotions' },
    { title: 'Mi cuenta', icon: 'person-circle-outline', url: 'my-account' },
    // {
    //   title: 'Indicadores de mi negocio',
    //   icon: 'stats-chart-outline',
    //   url: 'home',
    // },
    { title: 'Configuración', icon: 'settings-outline', url: 'settings' },
    {
      title: 'Términos y condiciones',
      icon: 'document-outline',
      url: 'home',
    },
    {
      title: 'Política de privacidad',
      icon: 'book-outline',
      url: 'home',
    },
    { title: 'Cerrar sesión', icon: 'log-out-outline', url: '' },
  ];
  public englishPages = [
    { title: 'Home', icon: 'search-outline', url: 'home' },
    { title: 'Points', icon: 'gift-outline', url: 'points' },
    { title: 'Promotions', icon: 'pricetag-outline', url: 'home' },
    { title: 'My Account', icon: 'person-circle-outline', url: 'my-account' },
    // {
    //   title: 'Indicators of my business',
    //   icon: 'stats-chart-outline',
    //   url: 'home',
    // },
    { title: 'Configuration', icon: 'settings-outline', url: 'settings' },
    {
      title: 'Terms and Conditions',
      icon: 'document-outline',
      url: 'home',
    },
    {
      title: 'Privacy Policy',
      icon: 'book-outline',
      url: 'home',
    },
    { title: 'Sign off', icon: 'log-out-outline', url: '' },
  ];
  public userData: any;
  public showDropdown = false;
  userSubscription: any;
  public language: any;
  public routeNameUrl = this.router.url == '/'
  // public appLangauge: any;

  constructor(
    public authService: AuthService,
    // private router: Router,
    private jabiyaService: JabiyaService,
    private route: ActivatedRoute,
    public popoverController: PopoverController,
    private router: Router,
    public menuCtrl: MenuController

  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(event => 
           {
              this.currentRoute = event;          
              console.log(event, 'isiiss');
           });
    // this.setApplicationlanguage();
    this.getUserData();
    this.userSubscription = authService.setUser.subscribe((sub) => {
      this.getUserData();
    });
    this.createCacheFolder();
    
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

  async createCacheFolder() {
    console.log('createCacheFolder');
    await Filesystem.mkdir({
      directory: Directory.Cache,
      path: `CACHED-IMG`
    });
  }
  // async langPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: LangPopoverComponent,
  //     cssClass: 'lang-popover-css',
  //     event: ev,
  //     backdropDismiss: true,
  //     showBackdrop: true,
  //     mode: 'ios',
  //     translucent: true,
  //   });
  //   await popover.present();
  //   const { role } = await popover.onDidDismiss();
  //   console.log('onDidDismiss resolved with role', role);
  // }
  // setApplicationlanguage() {
  //   const appLangauge = environment.APP_LANGUAGE;
  //   this.jabiyaService.getLangauge(applanguage).subscribe();

  // }

  async getUserData() {
    console.log(localStorage.getItem(LANGUAGE));
    this.language = localStorage.getItem(LANGUAGE);
    this.jabiyaService.getLangauge(this.language).subscribe();
    const { value } = await Storage.get({ key: 'userData' });
    this.userData = JSON.parse(value);
    console.log(
      'getAccountsUnderUser',
      this.authService.getAccountsUnderUser()
    );
  }

  openAndClose() {
    this.showDropdown = !this.showDropdown;
  }

  switchAccount(accountId) {
    this.authService.switchAccountUnderUser(accountId).subscribe(
      async (res) => {
        console.log('switchAccountUnderUser', res);
        if (res.result.status_response === '200 OK') {
          console.log('switchAccountUnderUser', res.result.data);
          this.navigate();
          await Storage.set({
            key: 'userData',
            value: JSON.stringify(res.result.data),
          });
        }
      },
      (error: any) => {
        console.error('error', error);
      }
    );
  }

  navigate() {
    this.routeNameUrl = false
    this.router.navigate(['/home']);
    window.location.reload();
    this.language = localStorage.getItem(LANGUAGE);
  }
  ngOnDestroy() {
    this.language = null;
    // localStorage.removeItem(LANGUAGE);
  }
  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
}

import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { LandingPageService } from '../services/landingPageServices/landing-page.service';
import { NavigationExtras, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../services/cartServices/cart.service';
import { Storage } from '@capacitor/storage';
import { AuthService } from '../services/authServices/auth.service';
import { LANGUAGE } from 'src/app/util/constants';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {
  widthSize = window.innerWidth; 
  @ViewChild('slides',  {static: false}) slides: IonSlides;
 
  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }


  public languageJson = {
    homePage: {
      spanish: {
        titlemsg: 'Orden rápida',
        subtitle: 'Sugerencias basadas en tu orden anterior',
        quickbutton: 'Añadir Todo',
        addbutton: 'Añadir',
        promo: 'Promociones',
        categories: 'Categorías',
        catlist: 'Lista de las categorías de productos disponibles',
        search: 'Buscar productos',
        nextSlide: 'Siguiente',
        prevSlide: 'Anterior'
      },
      english: {
        titlemsg: 'Quick order',
        subtitle: 'Suggestions based on your previous order',
        quickbutton: 'Add all',
        addbutton: 'Add',
        promo: 'Promotions',
        categories: 'Categories',
        catlist: 'List of available product categories',
        search: 'Search for products',
        nextSlide: 'Next',
        prevSlide: 'Prev'

      }
    }
  };
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  sliderContainerOpts = {
    slidesPerView: 'auto',
    zoom: false,
    grabCursor: true,
  };
  public loading = false;
  public categories = [];
  public userData: any;
  public easyOrderProducts = [];
  public banners = [];
  public language: any;
  // public disableCart = true;
  public disableEasyOrderButton = true;
  private resetProducts: any;
  constructor(
    private landingPageService: LandingPageService,
    private router: Router,
    public sanitizer: DomSanitizer,
    public cartService: CartService,
    private authService: AuthService
  ) {
    this.getUserData();
    console.log(localStorage.getItem(LANGUAGE));
    this.language = localStorage.getItem(LANGUAGE);
  }

  ngOnInit() {
    this.getCategories();
    this.getCartDetails();
    this.getEasyOrderDetails();
    this.getAllBanners();
  }

  getAllAccountsUnderUser() {
    this.authService.getAllAccountsUnderUser(this.userData.id).subscribe(
      (res) => {
        console.log('easy', res);
        if (res.result.status_response === '200 OK') {
          console.log('updateAccountsUnderUser', res.result.data);
          this.authService.updateAccountsUnderUser(
            res.result.data
          );
        }
      },
      (error: any) => {
        console.error('error', error);
      }
    );
  }

  getEasyOrderDetails() {
    this.landingPageService.getEasyOrder().subscribe(
      (res) => {
        console.log('easy', res);
        if (res.result.status_response === '200 OK') {
          console.log('easy', res);
          this.easyOrderProducts = res.result.data.products;
          this.disableEasyOrderButton = true;
          this.easyOrderProducts.forEach((element) => {
            console.log('Number', Number(element.order_easy_qty));
            if (Number(element.order_easy_qty) > 0) {
              this.disableEasyOrderButton = false;
            }
          });
          console.log('disableEasyOrderButton', this.disableEasyOrderButton);
          this.resetProducts = JSON.parse(JSON.stringify(this.easyOrderProducts));
          console.log('easyOrderProducts', this.easyOrderProducts);
        }
      },
      (error: any) => {
        console.error('error', error);
      }
    );
  }

  async getUserData() {
    const { value } = await Storage.get({ key: 'userData' });
    this.userData = JSON.parse(value);
    console.log('userData', this.userData);
    this.getAllAccountsUnderUser();
  }
  getCartDetails() {
    this.cartService.getItemsInCart().subscribe(
      (updated) => {
        if (updated.result.status_response === '200 OK') {
          console.log('cart', updated.result.data.order.amount_total);
          this.cartService.updateTotalAmount(
            updated.result.data.order.amount_total
          );
        }
      },
      (error: any) => {
        console.log('error', error);
        if (error.error.result.error.message === 'There are no items in the cart.') {
          this.cartService.updateTotalAmount(0);
        }
      }
    );
  }

  getAllBanners(): void {
    this.loading = true;
    this.landingPageService.getBanners('/main_page').subscribe(
      (response) => {
        console.log('response', response);
        this.loading = false;
        if (response.result.status_response === '200 OK') {
          this.banners = response.result.data;
          console.log('banners', this.banners);
        }
      },
      (error: any) => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }

  getCategories(): void {
    this.loading = true;
    this.landingPageService.getProductCategories().subscribe(
      (response) => {
        console.log('response', response);
        this.loading = false;
        if (response.result.status_response === '200 OK') {
          this.categories = response.result.data.categories;
        }
      },
      (error: any) => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }

  gotoPdtCategory(id, name): void {
    this.loading = true;
    this.landingPageService.getSubProductCategories(id).subscribe(
      (response) => {
        console.log('response', response);
        if (response) {
          this.landingPageService.getProductsByCategories(id).subscribe(
            (res) => {
              console.log('products', res);
              this.loading = false;
              if (res) {
                const navigationExtras: NavigationExtras = {
                  state: {
                    data: response,
                    products: res,
                    categoriName: name,
                  },
                };
                this.router.navigate(['products/products'], navigationExtras);
              }
            },
            (error: any) => {
              this.loading = false;
              console.log('error', error);
            }
          );
        }
      },
      (error: any) => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }

  increaseProductCount(product) {
    const changed = this.cartService.increaseProductCount(product, this.easyOrderProducts);
    if (changed) {
      this.easyOrderProducts = changed;
      console.log('easyOrderProducts', this.easyOrderProducts);
      this.disableEasyOrderButton = true;
      changed.forEach((element) => {
        console.log('Number', Number(element.order_easy_qty));
        if (Number(element.order_easy_qty) > 0) {
          this.disableEasyOrderButton = false;
        }
      });
      console.log('disableEasyOrderButton', this.disableEasyOrderButton);
    }
  }

  decreaseProductCount(product) {
    const changed = this.cartService.decreaseProductCount(product, this.easyOrderProducts);
    if (changed) {
      this.easyOrderProducts = changed;
      console.log('easyOrderProducts', this.easyOrderProducts);
      this.disableEasyOrderButton = true;
      changed.forEach((element) => {
        console.log('Number', Number(element.order_easy_qty));
        if (Number(element.order_easy_qty) > 0) {
          this.disableEasyOrderButton = false;
        }
      });
      console.log('disableEasyOrderButton', this.disableEasyOrderButton);
    }
  }

  async addToCart(product, index) {
    if (product.order_easy_qty > 0) {
      this.loading = true;
      this.cartService.addToCart(product, 'compound').subscribe(
        (res) => {
          this.loading = false;
          if (res) {
            this.easyOrderProducts[index] = JSON.parse(JSON.stringify(this.resetProducts))[index];
          }
        },
        (error: any) => {
          console.log('error', error);
          this.loading = false;
        }
      );

    }
  }

  placeEasyOrder(easyOrderProducts) {
    console.log('easyOrderProducts', easyOrderProducts);
    this.loading = true;
    this.cartService.addEasyOrderToCart(easyOrderProducts).subscribe(
      (res) => {
        this.loading = false;
        if (res.result.status_response === '200 OK') {
          console.log('res', res);
          this.getCartDetails();
        }
      },
      (error: any) => {
        console.error('error', error);
        this.loading = false;
      }
    );
  }
  ngOnDestroy() {
    // this.language = null;
    // localStorage.removeItem('LANGUAGE'); //correct
    // localStorage.removeItem('$$language$$'); //correct
    // localStorage.removeItem(LANGUAGE);
  }
  public position = 10
  public heightScreen = window.innerHeight;
  
}

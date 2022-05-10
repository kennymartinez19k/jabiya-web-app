import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../services/landingPageServices/landing-page.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';
import { CartService } from '../services/cartServices/cart.service';

import { LANGUAGE } from 'src/app/util/constants';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {
  public languageJson = {
    promoPage: {
      spanish: {
        promo: 'Promociones',
        homeButton: 'Continuar Comprando',
        description: 'Promociones: Existen 3 grandes promociones para hacer tu compra más comoda y económica'
      },
      english: {
        promo: 'Promotions',
        homeButton: 'Continue Shopping',
        description: 'Promotions: There are 3 great promotions to make your purchase more comfortable and economical'
      }
    }
  };
  public language: any;
  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  public loading = false;
  public categories = [];
  public banners = [];
  
  constructor(private landingPageService: LandingPageService, 
    public cartService: CartService,
    public sanitizer: DomSanitizer, private router: Router) {
    console.log(localStorage.getItem(LANGUAGE));
    this.language = localStorage.getItem(LANGUAGE);
  }

  ngOnInit() {
    this.getCategories();
    this.getAllBanners();
  }

  getAllBanners(): void {
    this.loading = true;
    this.landingPageService.getBanners('/discounts').subscribe(
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
}

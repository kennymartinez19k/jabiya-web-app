import { Component, OnInit } from '@angular/core';
import { LANGUAGE } from 'src/app/util/constants';
import { CartService } from '../services/cartServices/cart.service';
import { LandingPageService } from '../services/landingPageServices/landing-page.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-points',
  templateUrl: './points.page.html',
  styleUrls: ['./points.page.scss'],
})
export class PointsPage implements OnInit {
  public languageJson = {
    pointsPage: {
      spanish: {
        titlemsg: 'PUNTOS PARA CANJEAR',
        subtitle: 'Puntos disponibles',
        pointsDescription: 'Nota: Tus puntos se acreditan a tu cuenta al pagar las facturas después de entregadas.',
        pointsHistorybutton: 'Ver Historia de Puntos',
        bactToHomeButton: 'Continuar Comprando'
      },
      english: {
        titlemsg: 'POINTS TO EXCHANGE',
        subtitle: 'Available points',
        pointsDescription: 'Your points are credited to your account when you pay your invoices',
        pointsHistorybutton: 'See History',
        bactToHomeButton: 'Continue Shopping'
      }
    }
  };
  public language: any;
  public pointsCount: any;
  public banners = [];
  public loading = false;
  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  constructor(public cartService: CartService, private landingPageService: LandingPageService, public sanitizer: DomSanitizer) {
    this.language = localStorage.getItem(LANGUAGE);
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getPoints();
    this.getAllBanners();
  }

  getPoints() {
    this.loading = true;
    this.cartService.getPointsCount().subscribe(
      (res) => {
        console.log('res', res);
        this.loading = false;
        if (res.result.status_response === '200 OK') {
          this.pointsCount = res.result.data.points;
        }
      },
      (error: any) => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }

  getAllBanners(): void {
    this.loading = true;
    this.landingPageService.getBanners('/points').subscribe(
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
}

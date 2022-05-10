import { Component, OnInit } from '@angular/core';
import { LANGUAGE } from 'src/app/util/constants';
import { CartService } from '../../services/cartServices/cart.service';

import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public languageJson = {
    pointsHistoryPage: {
      spanish: {
        titlemsg: 'Tabla de historial de puntos',
        orderNumber: 'Número de orden',
        date: 'Fecha',
        noOfPoints: 'No. de puntos',
        totalPoints: 'Balance de puntos al día de hoy'
      },
      english: {
        titlemsg: 'Points History Table',
        orderNumber: 'Order Number',
        date: 'Date',
        noOfPoints: 'No. of Points',
        totalPoints: 'Point Balance as of today'
      }
    }
  };
  public language: any;
  public pointsHistoryData: any;
  public partnerPoints: any;
  constructor(public cartService: CartService, private routerOutlet: IonRouterOutlet) {
    this.language = localStorage.getItem(LANGUAGE);
  }

  ngOnInit() {
    this.getPointsHistory();
  }

  goBack() {
    this.routerOutlet.pop();
}

  getPointsHistory() {
    this.cartService.getPointsHistory().subscribe(
      (res) => {
        if (res.result.status_response === '200 OK') {
          this.pointsHistoryData = res.result.data.history;
          this.partnerPoints = res.result.data.partner_loyalty_points
          console.log('pointsHistoryData', this.pointsHistoryData);
        }
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
}

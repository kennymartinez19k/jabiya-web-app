import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cartServices/cart.service';
import { LANGUAGE } from '../util/constants';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  segment: string;
  public language: any;
  public languageJson = {
    accountPage: {
      spanish: {
        acc: 'Mi Cuenta',
        request: 'pedidos',
        bill: 'cuenta',
        invoice: 'facturas',
        credit: 'CRÉDITO ',
      },
      english: {
        acc: 'My accounts',
        request: 'Request',
        bill: 'bill',
        invoice: 'invoice',
        credit: 'Credits',
      }
    }
  }
  constructor(private cartService: CartService) {
    this.segment = 'pedidos';
    this.language = localStorage.getItem(LANGUAGE);
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.target.value);
    this.segment = ev.target.value;
  }
  ngOnInit() {
  }

}

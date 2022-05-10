import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/order.service';
import { JabiyaService } from 'src/app/services/jabiyaService/jabiya.service';
import { LANGUAGE } from 'src/app/util/constants';
import { CartService } from '../../services/cartServices/cart.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  public language:any;
  public languageJson ={
    orderDetailPage:{
    spanish: 
    {
      detail:'Detalles del pedido',
      expdel:'Entrega prevista',     
      orderno:'Número de pedido',
      orderon:'Ordenado el',
      tax:'Impuestos',
      save:'Ahorraste',
      buy:'¿Le gustaría volver a comprar estos productos',
      addall: 'Agregar todos'     
    },
    english:{
      detail:'Order details',
      expdel:'Expected delivery',     
      orderno:'Order number',
      orderon:'Ordered date',
      tax:'Taxes',
      save:'You saved',
      buy:'Would you like to buy these products again?',
      addall:'Add all'
    }
  }
  }

  routeSubscription: Subscription;
  getOrderSubscription: Subscription;
  orderDetails: any;
  deliveryDate: any;
  isLoading = true;
  orderTaxAmount = 0;
  orderSubTotal = 0;
  orderTotal = 0;
  savings = 0;
  orderNumber: any;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private jabiyaService: JabiyaService,
    public cartService: CartService
  ) { this.language=localStorage.getItem(LANGUAGE);}

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.queryParams.subscribe(params => {
      if (params !== null) {
        this.deliveryDate = params.deliveryDate;
        this.getOrderDetails(params.orderId);
      } else {
        this.jabiyaService.presentToast('Order Not Found');
      }
    });
  }

  getOrderDetails(orderId: number) {
    this.getOrderSubscription =
      this.orderService.getOrderDetails(orderId).subscribe((orderInfo: any) => {
        this.orderDetails = orderInfo.result.data;
        this.orderNumber = this.orderDetails.order.name;
        this.orderDetails.order_lines.forEach(order => {
          this.orderSubTotal += Number(order.productPriceSubtotal);
          this.orderTaxAmount += Number(order.productPriceTax);
          this.orderTotal += Number(order.productPriceTotal);
          this.savings += Number(order.oldPrice) - Number(order.price);
        });
        this.isLoading = false;
      }, error => {
        console.error('Order fetch API Error: ' + error);
      });
  }

  ngOnDestroy() {
    this.unSubscribe(this.getOrderSubscription);
    this.unSubscribe(this.routeSubscription);
    this.orderDetails = null;
    this.deliveryDate = null;
    this.isLoading = null;
    this.orderTaxAmount = null;
    this.orderSubTotal = null;
    this.orderTotal = null;
    this.savings = null;
    this.orderNumber = null;

    this.activatedRoute = null;
    this.orderService = null;
    this.jabiyaService = null;
  }

  unSubscribe(subscription: Subscription) {
    if (subscription !== undefined && subscription !== null) {
      subscription.unsubscribe();
    }
  }
}

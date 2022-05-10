import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/order.service';
import { JabiyaService } from 'src/app/services/jabiyaService/jabiya.service';
import { LANGUAGE } from 'src/app/util/constants';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit, OnDestroy {

  public language: any;
  orders = [];
  futureOrders = [];
  weekDays: any[];
  public languageJson = {
    orderPage: {
      spanish:
      {
        delivery: 'Próxima entrega',
        noorder: 'No se encontraron pedidos',
        todaydel: 'Entrega prevista para hoy',
        orderno: 'Número de pedido',
        orderon: 'Ordenado el',
        seedetail: 'ver detalles',
        all: 'Todos Ios pedidos',
        recent: 'Comenzando por la entrega más reciente',
        invoice: 'De factura',
        orderdate: 'Ordernado el',
        exdelivery: 'Entrega prevista'
      },
      english: {
        delivery: 'Next Delivery',
        noorder: 'No Order found',
        todaydel: 'Delivery scheduled for today',
        orderno: 'Order number',
        orderon: 'Order On',
        seedetail: 'See Details',
        all: 'All Orders',
        recent: 'Starting with the most recent installment',
        invoice: 'Invoice',
        orderdate: 'Ordered date',
        exdelivery: 'Expected Delivery'
      }
    }
  };
  getOrdersSubscription: Subscription;

  constructor(
    private jabiyaService: JabiyaService,
    private router: Router,
    private orderService: OrderService) {
    this.weekDays = this.getCurrentWeek();
    this.language = localStorage.getItem(LANGUAGE);
  }

  ngOnInit() {
    const curr = new Date();
    const first = curr.getDate() - curr.getDay();
    const last = first + 6;
    this.getAllOrders([this.jabiyaService.getGeneralFormatDate(new Date(curr.setDate(first))),
    this.jabiyaService.getGeneralFormatDate(new Date(curr.setDate(last)))]);
  }

  getCurrentWeek() {
    const curr = new Date();
    const year = curr.getFullYear();
    const prevMonth = new Date(year, curr.getMonth() - 3, 1);
    const nextMonth = new Date(year, curr.getMonth() + 2, 0);
    return [this.jabiyaService.getGeneralFormatDate(prevMonth),
    this.jabiyaService.getGeneralFormatDate(nextMonth)];
  }

  checkForTodayDeliverable(orders: any[]) {
    const today = new Date();
    return orders.filter(order => order.deliveryDate.getFullYear() === today.getFullYear() &&
      order.deliveryDate.getMonth() === today.getMonth() &&
      order.deliveryDate.getDate() === today.getDate()
    );
  }

  getAllOrders(currentWeek: string[]) {
    this.getOrdersSubscription = this.orderService.getOrders(currentWeek).subscribe((res: any) => {
      const orders = res.result.data.orders;
      this.futureOrders = orders.filter((order: any) => order.deliveryDate === '');
      const deliveryOrders = orders.filter((order: any) => order.deliveryDate !== '');
      deliveryOrders.forEach(order => {
        order.deliveryDate = new Date(order.deliveryDate);
        order.create_date = new Date(order.create_date);
      });
      this.orders = this.checkForTodayDeliverable(deliveryOrders);
      const futureOrders = deliveryOrders.filter(order => !this.orders.includes(order));
      this.futureOrders = this.futureOrders.concat(futureOrders);
      this.dateTranformation(this.orders);
      this.dateTranformation(this.futureOrders);
    }, error => {
      console.error('Fetch Order list API Error: ' + error);
    });
  }

  dateTranformation(values) {
    values.forEach(order => {
      order.deliveryDate = this.jabiyaService.getExpandedDate(order.deliveryDate);
      order.create_date = this.jabiyaService.getExpandedDate(order.create_date);
    });
  }

  gotoOrderDetail(order: any) {
    const navigationExtras = {
      queryParams: {
        orderId: order.id,
        deliveryDate: order.orderedDate
      },
      skipLocationChange: true
    };
    this.router.navigate(['/my-account/orderDetails/'], navigationExtras);
  }

  getValueForDate(dateValue) {
    this.getAllOrders(dateValue);
  }

  ngOnDestroy() {
    this.unSubscribe(this.getOrdersSubscription);
    this.orders = null;
    this.language = null;
    this.futureOrders = null;
    this.weekDays = null;
    this.languageJson = null;

    this.jabiyaService = null;
    this.router = null;
    this.orderService = null;
  }

  unSubscribe(subscription: Subscription) {
    if (subscription !== null && Subscription !== undefined) {
      subscription.unsubscribe();
    }
  }

}

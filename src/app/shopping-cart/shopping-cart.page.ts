/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CartService } from '../services/cartServices/cart.service';
import { LANGUAGE } from '../util/constants';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  public languageJson = {
    shopPage: {
      spanish: {
        yorder: 'Su Orden',
        deladdress: 'Dirección de Entrega',
        total: 'Totales',
        discount: 'Descuentos',
        dcost: 'Costo de Entrega',
        wouttax: 'Precio Total Sin Impuestos',
        tax: 'Impuestos',
        tprice: 'Precio Total',
        deldate: 'Fecha de Entrega',
        free: 'Entrega en su día semanal asignado - Gratis',
        tommrow: 'Entrega pasado mañana',
        over: 'La entrega en 48 horas es gratis para órdenes mayores de',
        ptype: 'Tipo de Pago',
        cdelivery: 'Dinero en Efectivo al Entregar',
        order: 'Ordenar',
        freee: 'Gratis',
        selectDate: 'por favor seleccione la fecha',
        pointsYouGet: 'Puntos que obtienes con este pedido',
        totalCurrentPoints: 'Puntos actuales totales',
        pointsToRedeem: 'Puntos a canjear con este pedido',
        totalPointsAfterOrder: 'Puntos totales después de realizar este pedido'
      },
      english: {
        yorder: 'Your order',
        deladdress: 'Delivery address',
        total: 'Totals',
        discount: 'Discounts',
        dcost: 'Delivery Cost',
        wouttax: 'Total Price Without Tax',
        tax: 'Tax',
        tprice: 'Total price',
        deldate: 'Delivery date',
        free: 'Delivery on your assigned weekly day - Free',
        tommrow: 'Delivery the day after tomorrow',
        over: 'Delivery within 48 hours is free for orders over',
        ptype: 'Payment type',
        cdelivery: 'Cash on Delivery',
        order: 'Order',
        freee: 'free',
        selectDate: 'por favor seleccione la fecha',
        pointsYouGet: 'Points you get with this order',
        totalCurrentPoints: 'Total current points',
        pointsToRedeem: 'Points to redeem with this order',
        totalPointsAfterOrder: 'Total points after placing this order'
      },
    },
  };
  public cartDetails: any;
  public loading = false;
  public disableCart = true;
  orderForm: any;
  orderId: any;
  public language: any;
  public loyaltyPoints: object = {}
  public userData: any;
  public totalPoints = 0;
  public minPoints = 0;
  public maxPoints = 0;
  public pointsToRedeem = 0;
  constructor(
    public cartService: CartService,
    public sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    private router: Router,
    public toastController: ToastController
  ) {
    this.language = localStorage.getItem(LANGUAGE);
  }

  ngOnInit() {
    this.getCartDetails();
    this.orderForm = this.intializeLoginForm();
    this.totalPoints = this.cartService.getPointFromOrder().total_loyalty;
    this.cartService.setLoyaltyPointToReedem(0);
    this.getUserData();
  }

  async getUserData() {
    const { value } = await Storage.get({ key: 'userData' });
    this.userData = JSON.parse(value);
    console.log('this.cartService.getTotalValue()', this.cartService.getTotalValue());
    this.minPoints = this.userData.minimum_number_points;
    this.maxPoints = this.userData.maximum_number_of_points_to_redeem;
  }

  async countChange(event) {
    // event.preventDefault();
    console.log('totle', this.cartService.getTotalValue());
    console.log('error1', event.target.value);
    if (Number(event.target.value) > (this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue())) {
      const alert = await this.alertController.create({
        // cssClass: 'successfull-registration',
        header: 'Error!',
        // subHeader: 'Subtitle',
        message:
          // eslint-disable-next-line max-len
          'Por favor ingrese un valor más bajo.',
        buttons: [
          {
            text: 'OK',
            cssClass: 'primary-solid-btn',
            handler: (d) => this.setPoints,
          },
        ],
      });
      await alert.present();
      this.pointsToRedeem = Math.floor(this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue());
      this.cartService.setLoyaltyPointToReedem(Math.floor(this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue()));
    } else {
      this.cartService.setLoyaltyPointToReedem(event.target.value);
    }
  }

  setPoints() {
    this.pointsToRedeem = Math.floor(this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue());
    this.cartService.setLoyaltyPointToReedem(Math.floor(this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue()));
  }

  intializeLoginForm(): FormGroup {
    return this.formBuilder.group({
      deliveryDate: ['option1', Validators.required],
      quantityBoxToReturn: [2, Validators.required],
      orderId: [this.orderId, Validators.required],
    });
  }

  getCartDetails() {
    this.loading = true;
    this.cartService.getItemsInCart().subscribe(
      (updated) => {
        this.loading = false;
        if (updated.result.status_response === '200 OK') {
          console.log('cart', updated.result.data.order.amount_total);
          this.cartService.updateTotalAmount(
            updated.result.data.order.amount_total
          );
          this.cartDetails = updated.result.data;
          this.disableCart = !(this.cartDetails?.order_lines.length > 0);
          if (updated.result.data.order.amount_total > 5000) {
            console.log('option2', updated.result.data.order.amount_total);
            this.orderForm.value.deliveryDate = 'option2';
          } else {
            if (this.orderForm) {
              this.orderForm.value.deliveryDate = 'option1';
            } else {
              this.orderForm = { value: { deliveryDate: 'option1' } };
            }
          }
        }
      },
      (error: any) => {
        console.log('error', error);
        this.loading = false;
      }
    );
  }

  async addToCart(product, action) {
    this.loading = true;
    console.log('product1', product);
    const payload = JSON.parse(JSON.stringify(product));
    payload.productQuantity =
      action === 'add'
        ? payload.productQuantity + 1
        : action === 'remove'
          ? 0
          : payload.productQuantity - 1;

    this.cartService.addToCart(payload, 'increment').subscribe(
      (updated) => {
        this.loading = false;
        if (updated) {
          console.log('updated cart', updated);
          this.cartDetails = updated.result.data;
          this.disableCart = !(this.cartDetails?.order_lines.length > 0);
          if (updated.result.data.order.amount_total > 5000) {
            console.log('option2', updated.result.data.order.amount_total);
            this.orderForm.value.deliveryDate = 'option2';
          } else {
            if (this.orderForm.value) {
              this.orderForm.value.deliveryDate = 'option1';
            } else {
              this.orderForm = { value: { deliveryDate: 'option1' } };
            }
          }
        }
      },
      (error: any) => {
        console.log('error', error);
        this.loading = false;
      }
    );
  }

  checkDigitCount(data: any) {
    return data < 10 ? '0' : '';
  }

  addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  placeOrder() {
    console.log('orderForm', this.orderForm.value);
    if (this.orderForm.value?.deliveryDate === 'option1') {
      const today = this.addDays(new Date(), 2);
      console.log('today', today);
      const month =
        this.checkDigitCount(today.getMonth() + 1) + (today.getMonth() + 1);
      const day = this.checkDigitCount(today.getDate()) + today.getDate();
      this.orderForm.value.deliveryDate =
        today.getFullYear() + '-' + month + '-' + day;
      console.log('orderForm', this.orderForm.value);
    } else if (this.orderForm.value?.deliveryDate === 'option2') {
      const today = this.addDays(new Date(), 2);
      console.log('today', today);
      const month =
        this.checkDigitCount(today.getMonth() + 1) + (today.getMonth() + 1);
      const day = this.checkDigitCount(today.getDate()) + today.getDate();
      this.orderForm.value.deliveryDate =
        today.getFullYear() + '-' + month + '-' + day;
      console.log('orderForm', this.orderForm.value);
    }
    if (this.orderForm.value.deliveryDate) {
      this.loading = true;
      this.cartService.getItemsInCart().subscribe(
        (updated) => {
          if (updated.result.status_response === '200 OK') {
            this.orderForm.value.orderId = updated.result.data.order.id;
            this.cartService.placeOrder(this.orderForm.value).subscribe(
              (placed) => {
                this.loading = false;
                if (placed.result.status_response === '200 OK') {
                  console.log('placed', placed);
                  this.cartService.updateTotalAmount(0);
                  this.orderPlacedSuccess();
                }
              },
              (error: any) => {
                console.error('error', error);
                this.loading = false;
              }
            );
          }
        },
        (error: any) => {
          console.error('error', error);
          this.loading = false;
        }
      );
    } else {
      this.presentToast(
        this.language === 'Spanish'
          ? this.languageJson.shopPage.spanish.selectDate
          : this.languageJson.shopPage.english.selectDate
      );
    }
  }

  async orderPlacedSuccess() {
    if (this.language === 'Spanish') {
      const alert = await this.alertController.create({
        // cssClass: 'successfull-registration',
        header: 'Gracias por tu Orden!',
        // subHeader: 'Subtitle',
        message:
          // eslint-disable-next-line max-len
          'Te estaremos enviando una notificación cuando ya este próxima a ser entregada.' +
          '<br/><br/>' +
          'Si quieres seguir comprando puedes crear una orden nueva',
        buttons: [
          {
            text: 'OK',
            cssClass: 'primary-solid-btn',
            handler: (d) => this.router.navigate(['/home']),
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        // cssClass: 'successfull-registration',
        header: 'Thank you for your order!',
        // subHeader: 'Subtitle',
        message:
          // eslint-disable-next-line max-len
          'We will be sending you a notification when it is about to be delivered.' +
          '<br/><br/>' +
          'If you want to continue shopping you can create a new order',
        buttons: [
          {
            text: 'OK',
            cssClass: 'primary-solid-btn',
            handler: (d) => this.router.navigate(['/home']),
          },
        ],
      });
      await alert.present();
    }
  }

  async presentToast(error) {
    const toast = await this.toastController.create({
      message: error,
      duration: 4000,
    });
    toast.present();
  }

  async redeemPoints() {
    // TODO: This variable will hold the input from the user. Please change.
    let pointsToRedeem = 12
    let points = this.cartService.getPointFromOrder()
    const alert = await this.alertController.create({
      cssClass: 'redeem-alert ion-text-left',
      message: `
      <ion-grid class="ion-no-padding">
      <ion-row>
      <ion-col size="8" class="ion-text-left point-description size-8">Your Current Points Balance: ` + points.total_loyalty + `</ion-col>
      <ion-row>
     
      <ion-row class="ion-margin-vertical">
      <ion-col class="ion-text-left point-description size-8">Points to redeem with this order: </ion-col>
      <ion-col size="4" class="ion-text-right bold point-description"> 
      <ion-item class="border">
      <ion-input placeholder="" type="email"></ion-input>
    </ion-item></ion-col>
      </ion-row>
      <ion-row>
      <ion-col size="8" class="ion-text-left point-description size-8">No of points left</ion-col>
      <ion-col size="4" class="ion-text-right bold point-description"><b>` + (points.total_loyalty - pointsToRedeem) + `</b></ion-col>
      </ion-row>
      </ion-grid>
      `,
      // 'Total Points : <b>26,000</b> <br>Maximum that can be used : <b>600</b> <br>Points to redeem for this points : <b>8,000</b> <br>No of points left : <b>18,000</b>',

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger-solid-btn',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          cssClass: 'primary-solid-btn',
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.cartService.setLoyaltyPointToReedem(pointsToRedeem)

          },
        },
      ],
    });

    await alert.present();
  }
}

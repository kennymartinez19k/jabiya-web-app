(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["src_app_shopping-cart_shopping-cart_module_ts"],{

/***/ 6202:
/*!***************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartPageRoutingModule": () => (/* binding */ ShoppingCartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart.page */ 9656);




const routes = [
    {
        path: '',
        component: _shopping_cart_page__WEBPACK_IMPORTED_MODULE_0__.ShoppingCartPage
    }
];
let ShoppingCartPageRoutingModule = class ShoppingCartPageRoutingModule {
};
ShoppingCartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShoppingCartPageRoutingModule);



/***/ }),

/***/ 5607:
/*!*******************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartPageModule": () => (/* binding */ ShoppingCartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart-routing.module */ 6202);
/* harmony import */ var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart.page */ 9656);







let ShoppingCartPageModule = class ShoppingCartPageModule {
};
ShoppingCartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShoppingCartPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_shopping_cart_page__WEBPACK_IMPORTED_MODULE_1__.ShoppingCartPage]
    })
], ShoppingCartPageModule);



/***/ }),

/***/ 9656:
/*!*****************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartPage": () => (/* binding */ ShoppingCartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_shopping_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shopping-cart.page.html */ 2927);
/* harmony import */ var _shopping_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart.page.scss */ 2614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cartServices/cart.service */ 1136);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/constants */ 1830);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/storage */ 2755);



/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */








let ShoppingCartPage = class ShoppingCartPage {
    constructor(cartService, sanitizer, formBuilder, alertController, router, toastController) {
        this.cartService = cartService;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.router = router;
        this.toastController = toastController;
        this.languageJson = {
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
        this.loading = false;
        this.disableCart = true;
        this.loyaltyPoints = {};
        this.totalPoints = 0;
        this.minPoints = 0;
        this.maxPoints = 0;
        this.pointsToRedeem = 0;
        this.language = localStorage.getItem(_util_constants__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE);
    }
    ngOnInit() {
        this.getCartDetails();
        this.orderForm = this.intializeLoginForm();
        this.totalPoints = this.cartService.getPointFromOrder().total_loyalty;
        this.cartService.setLoyaltyPointToReedem(0);
        this.getUserData();
    }
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.get({ key: 'userData' });
            this.userData = JSON.parse(value);
            console.log('this.cartService.getTotalValue()', this.cartService.getTotalValue());
            this.minPoints = this.userData.minimum_number_points;
            this.maxPoints = this.userData.maximum_number_of_points_to_redeem;
        });
    }
    countChange(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // event.preventDefault();
            console.log('totle', this.cartService.getTotalValue());
            console.log('error1', event.target.value);
            if (Number(event.target.value) > (this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue())) {
                const alert = yield this.alertController.create({
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
                yield alert.present();
                this.pointsToRedeem = Math.floor(this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue());
                this.cartService.setLoyaltyPointToReedem(Math.floor(this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue()));
            }
            else {
                this.cartService.setLoyaltyPointToReedem(event.target.value);
            }
        });
    }
    setPoints() {
        this.pointsToRedeem = Math.floor(this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue());
        this.cartService.setLoyaltyPointToReedem(Math.floor(this.maxPoints < this.cartService.getTotalValue() ? this.maxPoints : this.cartService.getTotalValue()));
    }
    intializeLoginForm() {
        return this.formBuilder.group({
            deliveryDate: ['option1', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            quantityBoxToReturn: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            orderId: [this.orderId, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    getCartDetails() {
        this.loading = true;
        this.cartService.getItemsInCart().subscribe((updated) => {
            var _a;
            this.loading = false;
            if (updated.result.status_response === '200 OK') {
                console.log('cart', updated.result.data.order.amount_total);
                this.cartService.updateTotalAmount(updated.result.data.order.amount_total);
                this.cartDetails = updated.result.data;
                this.disableCart = !(((_a = this.cartDetails) === null || _a === void 0 ? void 0 : _a.order_lines.length) > 0);
                if (updated.result.data.order.amount_total > 5000) {
                    console.log('option2', updated.result.data.order.amount_total);
                    this.orderForm.value.deliveryDate = 'option2';
                }
                else {
                    if (this.orderForm) {
                        this.orderForm.value.deliveryDate = 'option1';
                    }
                    else {
                        this.orderForm = { value: { deliveryDate: 'option1' } };
                    }
                }
            }
        }, (error) => {
            console.log('error', error);
            this.loading = false;
        });
    }
    addToCart(product, action) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            console.log('product1', product);
            const payload = JSON.parse(JSON.stringify(product));
            payload.productQuantity =
                action === 'add'
                    ? payload.productQuantity + 1
                    : action === 'remove'
                        ? 0
                        : payload.productQuantity - 1;
            this.cartService.addToCart(payload, 'increment').subscribe((updated) => {
                var _a;
                this.loading = false;
                if (updated) {
                    console.log('updated cart', updated);
                    this.cartDetails = updated.result.data;
                    this.disableCart = !(((_a = this.cartDetails) === null || _a === void 0 ? void 0 : _a.order_lines.length) > 0);
                    if (updated.result.data.order.amount_total > 5000) {
                        console.log('option2', updated.result.data.order.amount_total);
                        this.orderForm.value.deliveryDate = 'option2';
                    }
                    else {
                        if (this.orderForm.value) {
                            this.orderForm.value.deliveryDate = 'option1';
                        }
                        else {
                            this.orderForm = { value: { deliveryDate: 'option1' } };
                        }
                    }
                }
            }, (error) => {
                console.log('error', error);
                this.loading = false;
            });
        });
    }
    checkDigitCount(data) {
        return data < 10 ? '0' : '';
    }
    addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    placeOrder() {
        var _a, _b;
        console.log('orderForm', this.orderForm.value);
        if (((_a = this.orderForm.value) === null || _a === void 0 ? void 0 : _a.deliveryDate) === 'option1') {
            const today = this.addDays(new Date(), 2);
            console.log('today', today);
            const month = this.checkDigitCount(today.getMonth() + 1) + (today.getMonth() + 1);
            const day = this.checkDigitCount(today.getDate()) + today.getDate();
            this.orderForm.value.deliveryDate =
                today.getFullYear() + '-' + month + '-' + day;
            console.log('orderForm', this.orderForm.value);
        }
        else if (((_b = this.orderForm.value) === null || _b === void 0 ? void 0 : _b.deliveryDate) === 'option2') {
            const today = this.addDays(new Date(), 2);
            console.log('today', today);
            const month = this.checkDigitCount(today.getMonth() + 1) + (today.getMonth() + 1);
            const day = this.checkDigitCount(today.getDate()) + today.getDate();
            this.orderForm.value.deliveryDate =
                today.getFullYear() + '-' + month + '-' + day;
            console.log('orderForm', this.orderForm.value);
        }
        if (this.orderForm.value.deliveryDate) {
            this.loading = true;
            this.cartService.getItemsInCart().subscribe((updated) => {
                if (updated.result.status_response === '200 OK') {
                    this.orderForm.value.orderId = updated.result.data.order.id;
                    this.cartService.placeOrder(this.orderForm.value).subscribe((placed) => {
                        this.loading = false;
                        if (placed.result.status_response === '200 OK') {
                            console.log('placed', placed);
                            this.cartService.updateTotalAmount(0);
                            this.orderPlacedSuccess();
                        }
                    }, (error) => {
                        console.error('error', error);
                        this.loading = false;
                    });
                }
            }, (error) => {
                console.error('error', error);
                this.loading = false;
            });
        }
        else {
            this.presentToast(this.language === 'Spanish'
                ? this.languageJson.shopPage.spanish.selectDate
                : this.languageJson.shopPage.english.selectDate);
        }
    }
    orderPlacedSuccess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.language === 'Spanish') {
                const alert = yield this.alertController.create({
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
                yield alert.present();
            }
            else {
                const alert = yield this.alertController.create({
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
                yield alert.present();
            }
        });
    }
    presentToast(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: error,
                duration: 4000,
            });
            toast.present();
        });
    }
    redeemPoints() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // TODO: This variable will hold the input from the user. Please change.
            let pointsToRedeem = 12;
            let points = this.cartService.getPointFromOrder();
            const alert = yield this.alertController.create({
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
                            this.cartService.setLoyaltyPointToReedem(pointsToRedeem);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
ShoppingCartPage.ctorParameters = () => [
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
ShoppingCartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-shopping-cart',
        template: _raw_loader_shopping_cart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shopping_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShoppingCartPage);



/***/ }),

/***/ 2614:
/*!*******************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-family: \"Nunito Sans\";\n  font-size: 18px;\n}\n\nion-footer ion-title {\n  padding-inline: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-thumbnail {\n  margin-top: 0px;\n  margin-bottom: 8px;\n  width: 50px;\n  height: 70px;\n  --padding-start: 8px;\n  margin-inline-end: 8px;\n}\n\n.pdt-description {\n  padding-right: 16px;\n}\n\n.redeem-btn {\n  margin: 10px 0px 0px 0px;\n  height: 36px;\n  --border-radius: 4px;\n}\n\n.red-text {\n  color: red;\n}\n\nion-item {\n  border-bottom: 2px solid #ebebeb;\n  --inner-border-width: 0 0 0 0;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #eee;\n}\n\n.del-btn {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  font-size: 20px;\n  height: 2.2em;\n}\n\n.change-btn {\n  height: 1em;\n  font-weight: 600;\n}\n\nion-label {\n  margin: 10px 8px 10px 8px;\n  font-size: 20px;\n}\n\n.pdt-price {\n  margin: 10px 0px !important;\n}\n\n.bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 16px;\n}\n\n.green-text {\n  color: #2fdf75;\n}\n\n.mt-40 {\n  margin-top: 40px;\n}\n\n.min-err-msg {\n  display: block;\n  background-color: #fce795;\n  padding: 10px;\n  text-align: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  margin-left: 18px;\n  margin-right: 18px;\n  color: #ff2c2c;\n  font-weight: 600;\n  border-left: 12px solid #f35f54;\n}\n\n.div-card {\n  border-bottom: 2px solid #ebebeb;\n  background-color: #fff;\n  padding: 0px 8px;\n  width: 100%;\n}\n\n.div-card ion-item {\n  border-bottom: none;\n  --inner-border-width: 0 0 0 0;\n}\n\n.div-card ion-item.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px;\n  padding-inline-end: 0px;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 70px;\n}\n\n.pdt-quantity {\n  bottom: 10px;\n}\n\nion-radio {\n  margin: 0px 2px 0px 0px;\n  font-size: 14px;\n}\n\n.container-shopping-profile {\n  width: 100%;\n}\n\n.items-for-shop {\n  margin: 5px;\n}\n\n@media (min-width: 900px) {\n  .container-shopping-profile {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .list-item-shopping {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n  .item-shopping {\n    width: 50%;\n    margin: 10px;\n  }\n\n  .items-payment {\n    width: 48%;\n    background-color: #fff;\n    margin: 10px;\n  }\n\n  .info-address {\n    width: 100%;\n  }\n\n  .items-for-shop {\n    width: 30%;\n    margin: 10px;\n  }\n\n  .info-addres-item {\n    width: 100%;\n  }\n\n  .border-bottom {\n    border-bottom: 1px solid #eee;\n    margin: 10px;\n    background-color: #fff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBTUY7O0FBSEE7RUFDRSxVQUFBO0FBTUY7O0FBSkE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0FBT0Y7O0FBTEE7RUFDRSw2QkFBQTtBQVFGOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBU0Y7O0FBUEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQVdGOztBQVRBO0VBQ0UsMkJBQUE7QUFZRjs7QUFWQTtFQUNFLDJCQUFBO0FBYUY7O0FBWEE7O0VBRUUsZUFBQTtBQWNGOztBQVpBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBZUY7O0FBYkE7RUFDRSxjQUFBO0FBZ0JGOztBQWRBO0VBQ0UsZ0JBQUE7QUFpQkY7O0FBZkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBa0JGOztBQWhCQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFtQkY7O0FBakJBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQXFCRjs7QUFuQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsWUFBQTtBQXVCRjs7QUFyQkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUF3QkY7O0FBckJBO0VBQ0UsV0FBQTtBQXdCRjs7QUF0QkE7RUFDRSxXQUFBO0FBeUJGOztBQXRCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUF5QkY7O0VBdkJBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsOEJBQUE7RUEwQkY7O0VBeEJBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUEyQkY7O0VBekJBO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtFQTRCRjs7RUExQkE7SUFDRSxXQUFBO0VBNkJGOztFQTNCQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VBOEJGOztFQTVCQTtJQUNFLFdBQUE7RUErQkY7O0VBN0JBO0lBQ0UsNkJBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7RUFnQ0Y7QUFDRiIsImZpbGUiOiJzaG9wcGluZy1jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaW9uLWZvb3RlciBpb24tdGl0bGUge1xyXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxuaW9uLXRodW1ibmFpbCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcclxufVxyXG4ucGR0LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5yZWRlZW0tYnRuIHtcclxuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ucmVkLXRleHQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG59XHJcbi5ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxufVxyXG4uZGVsLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTZweDtcclxuICByaWdodDogLTZweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyLjJlbTtcclxufVxyXG4uY2hhbmdlLWJ0biB7XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMTBweCA4cHggMTBweCA4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5wZHQtcHJpY2Uge1xyXG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbmgzLFxyXG5wIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5ncmVlbi10ZXh0IHtcclxuICBjb2xvcjogIzJmZGY3NTtcclxufVxyXG4ubXQtNDAge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLm1pbi1lcnItbXNnIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlNzk1O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICNmZjJjMmM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItbGVmdDogMTJweCBzb2xpZCAjZjM1ZjU0O1xyXG59XHJcbi5kaXYtY2FyZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmViZWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kaXYtY2FyZCBpb24taXRlbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcclxufVxyXG4uZGl2LWNhcmQgaW9uLWl0ZW0uaXRlbS1uYXRpdmUge1xyXG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4uaW5wdXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuLnBkdC1xdWFudGl0eSB7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG59XHJcbmlvbi1yYWRpbyB7XHJcbiAgbWFyZ2luOiAwcHggMnB4IDBweCAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXNob3BwaW5nLXByb2ZpbGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLml0ZW1zLWZvci1zaG9we1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAuY29udGFpbmVyLXNob3BwaW5nLXByb2ZpbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICAubGlzdC1pdGVtLXNob3BwaW5ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuaXRlbS1zaG9wcGluZ3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIC5pdGVtcy1wYXltZW50e1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIC5pbmZvLWFkZHJlc3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLml0ZW1zLWZvci1zaG9we1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgLmluZm8tYWRkcmVzLWl0ZW17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmJvcmRlci1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 2927:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{language === 'English'? languageJson.shopPage.english.yorder :languageJson.shopPage.spanish.yorder}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [formGroup]=\"orderForm\" >\r\n  <div class=\"container-shopping-profile\">\r\n    <div class=\"info-address\">\r\n      <ion-grid class=\"ion-padding border-bottom info-address-shopping\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-left\">\r\n            <h3 class=\"bold ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.deladdress :languageJson.shopPage.spanish.deladdress}}</h3>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-icon name=\"pin\" color=\"primary\"></ion-icon>\r\n          <ion-col size=\"11\" class=\"ion-text-left\">\r\n            <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{cartDetails?.order?.delivery_address?.full_address}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <ng-container *ngFor=\"let cartItems of cartDetails?.order_lines;let i=index\" class=\"info-addres-item\">\r\n      <ng-container *ngIf=\"cartItems.isRewardLine===false\">\r\n        <ion-item class=\"items-for-shop\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img [src]=\"cartItems.productImage ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n            + cartItems.productImage) : '../../assets/images/pdt1.png' \" />\r\n          </ion-thumbnail>\r\n          <ion-button fill=\"clear\" slot=\"end\" (click)=\"addToCart(cartItems, 'remove')\" color=\"danger\" class=\"del-btn\">\r\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n          </ion-button>\r\n          <ion-label>\r\n            <h6 color=\"tertiary\" class=\"pdt-description\">{{cartItems.productName}}</h6>\r\n            <h3 color=\"secondary\" class=\"pdt-price ion-text-right\">{{cartItems.currencySymbol}} {{cartItems.productPriceSubtotal  | number:'1.0':'en-US' }}</h3>\r\n            <div class=\"pdt-quantity\" slot=\"start\">\r\n              <ion-button (click)=\"addToCart(cartItems, 'sub')\" fill=\"outline\" class=\"add-btn\">\r\n                <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-text class=\"m-8\" color=\"secondary\">{{cartItems.productQuantity}}</ion-text>\r\n              <ion-button (click)=\"addToCart(cartItems, 'add')\" fill=\"outline\" class=\"add-btn\">\r\n                <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ion-grid class=\"ion-padding-horizontal border-bottom ion-padding-bottom\">\r\n      <ion-row>\r\n        <ion-col size=\"8\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.pointsYouGet :languageJson.shopPage.spanish.pointsYouGet}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-text-right\">\r\n          <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">+ {{this.cartService.getPointFromOrder().plus_points}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.totalCurrentPoints :languageJson.shopPage.spanish.totalCurrentPoints}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-text-right\">\r\n          <h3 color=\"success\" class=\"ion-text-right ion-no-margin\">{{this.cartService.getPointFromOrder().total_loyalty}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.pointsToRedeem :languageJson.shopPage.spanish.pointsToRedeem}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-text-right\">\r\n          <ion-item class=\"border\">\r\n            <ion-input [(ngModel)]=\"pointsToRedeem\" [ngModelOptions]=\"{standalone: true}\" type=\"number\" (ionInput)=\"countChange($event)\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.totalPointsAfterOrder :languageJson.shopPage.spanish.totalPointsAfterOrder}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-text-right\">\r\n          <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">{{totalPoints - pointsToRedeem}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"ion-padding-horizontal border-bottom ion-padding-bottom\">\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"ion-text-left\">\r\n          <h2 class=\"pdt-name\">{{language === 'English'? languageJson.shopPage.english.total :languageJson.shopPage.spanish.total}}</h2>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.discount :languageJson.shopPage.spanish.discount}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-right\">\r\n          <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">- {{cartDetails?.order?.currencySymbol}} {{cartDetails?.order?.total_discount}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Discount from Points</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-text-right\">\r\n          <h3 color=\"success\" class=\"ion-text-right red-text ion-no-margin\">- RD$ {{this.cartService.getDiscountFromLoyaltyPoints()}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.dcost :languageJson.shopPage.spanish.dcost}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-right\" *ngIf=\"language === 'Spanish'\"> \r\n          <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">{{this.orderForm.value?.deliveryDate === 'option1' || (this.cartService.getTotal()._value > 5000 && this.orderForm.value?.deliveryDate === 'option2') ? 'Gratis' : 'RD$ 80'}}</h3>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-right\" *ngIf=\"language === 'English'\"> \r\n          <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">{{this.orderForm.value?.deliveryDate === 'option1' || (this.cartService.getTotal()._value > 5000 && this.orderForm.value?.deliveryDate === 'option2') ? 'Free' : 'RD$ 80'}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.wouttax :languageJson.shopPage.spanish.wouttax}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-text-right\">\r\n          <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">- {{cartDetails?.order?.currencySymbol}} {{cartDetails?.order?.amount_untaxed | number:'1.0':'en-US'}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.tax :languageJson.shopPage.spanish.tax}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-right\">\r\n          <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">- {{cartDetails?.order?.currencySymbol}} {{cartDetails?.order?.amount_tax | number:'1.0':'en-US'}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"ion-text-left\">\r\n          <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.tprice :languageJson.shopPage.spanish.tprice}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-right\">\r\n          <h3 color=\"secondary\" class=\"bold ion-text-right ion-no-margin\">{{cartDetails?.order?.currencySymbol}} {{this.orderForm.value?.deliveryDate === 'option1' || (this.cartService.getTotal()._value > 5000 && this.orderForm.value?.deliveryDate === 'option2') ? (this.cartService.getTotal()._value | number:'1.0':'en-US' ) : (this.cartService.getTotal()._value + 80 | number:'1.0':'en-US') }}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"div-card\">\r\n      <div class=\"list-item-shopping\">\r\n        <ion-grid class=\"ion-padding-horizontal border-bottom ion-padding-bottom\">\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-text-left\">\r\n              <h2 class=\"pdt-name\">Points</h2>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"8\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Points you get with this order</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-right\">\r\n              <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">+ {{this.cartService.getPointFromOrder().plus_points}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"8\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Total current points</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-right\">\r\n              <h3 color=\"success\" class=\"ion-text-right ion-no-margin\">{{this.cartService.getPointFromOrder().total_loyalty}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"8\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Points to redeem with this order</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-right\">\r\n              <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">+ 0</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"8\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Total points after placing this order</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-right\">\r\n              <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">+ 0</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"ion-text-right\">\r\n                <ion-button color=\"primary\" fill=\"solid\"\r\n                class=\"w-160 ion-padding-horizonatal ion-margin-horizontal redeem-btn\" (click)=\"redeemPoints()\">\r\n                Redeem\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-grid class=\"ion-padding-horizontal border-bottom ion-padding-bottom \">\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-text-left\">\r\n              <h2 class=\"pdt-name\">{{language === 'English'? languageJson.shopPage.english.total :languageJson.shopPage.spanish.total}}</h2>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.discount :languageJson.shopPage.spanish.discount}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-text-right\">\r\n              <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">- {{cartDetails?.order?.currencySymbol}} {{cartDetails?.order?.total_discount}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"8\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Discount from Points</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-right\">\r\n              <h3 color=\"success\" class=\"ion-text-right red-text ion-no-margin\">- RD$ {{this.cartService.getDiscountFromLoyaltyPoints()}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.dcost :languageJson.shopPage.spanish.dcost}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-text-right\" *ngIf=\"language === 'Spanish'\"> \r\n              <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">{{this.orderForm.value?.deliveryDate === 'option1' || (this.cartService.getTotal()._value > 5000 && this.orderForm.value?.deliveryDate === 'option2') ? 'Gratis' : 'RD$ 80'}}</h3>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-text-right\" *ngIf=\"language === 'English'\"> \r\n              <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">{{this.orderForm.value?.deliveryDate === 'option1' || (this.cartService.getTotal()._value > 5000 && this.orderForm.value?.deliveryDate === 'option2') ? 'Free' : 'RD$ 80'}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"8\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.wouttax :languageJson.shopPage.spanish.wouttax}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-right\">\r\n              <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">- {{cartDetails?.order?.currencySymbol}} {{cartDetails?.order?.amount_untaxed | number:'1.0':'en-US'}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.tax :languageJson.shopPage.spanish.tax}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-text-right\">\r\n              <h3 color=\"success\" class=\"ion-text-right green-text ion-no-margin\">- {{cartDetails?.order?.currencySymbol}} {{cartDetails?.order?.amount_tax | number:'1.0':'en-US'}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.tprice :languageJson.shopPage.spanish.tprice}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-text-right\">\r\n              <h3 color=\"secondary\" class=\"bold ion-text-right ion-no-margin\">{{cartDetails?.order?.currencySymbol}} {{this.orderForm.value?.deliveryDate === 'option1' || (this.cartService.getTotal()._value > 5000 && this.orderForm.value?.deliveryDate === 'option2') ? (this.cartService.getTotal()._value | number:'1.0':'en-US' ) : (this.cartService.getTotal()._value + 80 | number:'1.0':'en-US') }}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      <div class=\"list-item-shopping\">\r\n        <div class=\"div-card items-payment\">\r\n          <ion-radio-group [value]=\"this.orderForm.value.deliveryDate\" formControlName=\"deliveryDate\">\r\n            <ion-list-header>\r\n            <h2 class=\"pdt-name\">{{language === 'English'? languageJson.shopPage.english.deldate :languageJson.shopPage.spanish.deldate}}</h2>\r\n            </ion-list-header>\r\n            <ion-item>\r\n              <ion-label> <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.free :languageJson.shopPage.spanish.free}}</p></ion-label>\r\n              <ion-radio slot=\"start\" color=\"primary\" value=\"option1\"></ion-radio>\r\n            </ion-item>\r\n      \r\n            <ion-item>\r\n              <ion-label><p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.tommrow :languageJson.shopPage.spanish.tommrow}} - {{this.cartService.getTotal()._value > 5000 ? 'Gratis' : 'RD$ 80'}} <br/>({{language === 'English'? languageJson.shopPage.english.over :languageJson.shopPage.spanish.over}} RD$ 5,000)</p></ion-label>\r\n              <ion-radio slot=\"start\" color=\"primary\" value=\"option2\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </div>\r\n        <ion-grid class=\"ion-padding-horizontal ion-padding-bottom items-payment\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"ion-text-left\">\r\n              <h2 class=\"pdt-name\">{{language === 'English'? languageJson.shopPage.english.ptype :languageJson.shopPage.spanish.ptype}}</h2>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-text-left\">\r\n              <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.shopPage.english.cdelivery :languageJson.shopPage.spanish.cdelivery}}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <h3 color=\"secondary\" class=\"bold ion-no-margin ion-text-left\">{{cartDetails?.order?.currencySymbol}} {{this.orderForm.value?.deliveryDate === 'option1' || (this.cartService.getTotal()._value > 5000 && this.orderForm.value?.deliveryDate === 'option2') ? (this.cartService.getTotal()._value | number:'1.0':'en-US') : (this.cartService.getTotal()._value + 80 | number:'1.0':'en-US')}}</h3>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"cartDetails\">\r\n      <ion-button color=\"primary\" fill=\"solid\" expand=\"block\"\r\n        class=\"w-160 ion-padding-horizonatal ion-margin-horizontal\" [disabled]=\"disableCart\" (click)=\"placeOrder()\">\r\n        {{language === 'English'? languageJson.shopPage.english.order :languageJson.shopPage.spanish.order}}\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n<div class=\"loader\" *ngIf=\"loading\" ></div>");

/***/ })

}]);
//# sourceMappingURL=src_app_shopping-cart_shopping-cart_module_ts.js.map
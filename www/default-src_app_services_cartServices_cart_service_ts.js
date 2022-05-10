(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["default-src_app_services_cartServices_cart_service_ts"],{

/***/ 1136:
/*!*******************************************************!*\
  !*** ./src/app/services/cartServices/cart.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9923);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5087);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/util/constants */ 1830);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 2755);

/* eslint-disable @typescript-eslint/naming-convention */







const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let CartService = class CartService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.totalAmount = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
        this.loyalty_point_to_redeem = null;
        this.setInitialCurrentOrder();
    }
    setInitialCurrentOrder() {
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'userData' }).then((result) => {
            const { value } = result;
            let userData = JSON.parse(value);
            this.userData = userData;
            this.discounts = userData.discounts;
            this.loyalty_point_to_redeem = null;
            this.currentOrder = {
                order: {
                    id: undefined,
                    name: undefined,
                    client: undefined,
                    deliveryDate: undefined,
                    create_date: undefined,
                    quantityBoxToReturn: 0,
                    has_invoice: false,
                    amount_untaxed: 0,
                    amount_tax: 0,
                    amount_total: 0,
                    total_discount: 0,
                    delivery_charges: 0,
                    isValidMinProduct: false,
                    minimun_quantity_products: userData["minimun_quantity_products"],
                    currencySymbol: userData["currencySymbol"],
                    currencyUnitLabel: userData["currencyUnitLabel"],
                    currencySubUnitLabel: userData["currencySubUnitLabel"],
                    delivery_address: userData["delivery_address"],
                },
                order_lines: []
            };
        });
    }
    getTotal() {
        return this.totalAmount;
    }
    getTotalValue() {
        return this.totalAmount.value;
    }
    updateTotalAmount(totalAmount) {
        this.totalAmount.next(totalAmount);
    }
    getTax(price, quantity, taxes) {
        price = price * quantity;
        let result = {
            priceWithTax: price,
            priceWithoutTax: price,
            tax: 0
        };
        taxes.forEach(currentTax => {
            let outtax = undefined;
            switch (currentTax.amount_type) {
                case "fixed":
                    outtax = {
                        priceWithTax: price + currentTax.amount,
                        priceWithoutTax: price,
                        tax: currentTax.amount
                    };
                    break;
                case "percent":
                    let percentTax = 0;
                    percentTax = price * currentTax.amount / 100;
                    outtax = {
                        priceWithTax: price + percentTax,
                        priceWithoutTax: price,
                        tax: percentTax
                    };
                    break;
                case "division":
                    let divisionTax = 0;
                    divisionTax = (1 - currentTax.amount / 100) ? price / (1 - currentTax.amount / 100) - price : 0;
                    outtax = {
                        priceWithTax: price + divisionTax,
                        priceWithoutTax: price,
                        tax: divisionTax
                    };
                    break;
                default:
                    return {
                        priceWithTax: price,
                        priceWithoutTax: price,
                        tax: 0
                    };
            }
            result.priceWithTax = outtax.priceWithTax;
            result.priceWithoutTax = outtax.priceWithoutTax;
            result.tax = Math.round((outtax.priceWithTax - outtax.priceWithoutTax) * 100) / 100;
        });
        return result;
    }
    addToCart(product, type = null) {
        product = JSON.parse(JSON.stringify(product));
        product.id = product.id ? product.id : product.productId;
        product.amount = product.amount ? product.amount : product.order_easy_qty ? product.order_easy_qty : product.productQuantity;
        let currentProductIndex = this.currentOrder.order_lines.findIndex((e) => e.productId === product.id);
        if (currentProductIndex >= 0) {
            if (product.amount == 0)
                return this.removeItemFromCart(currentProductIndex);
            else
                return this.updateItemInCart(this.currentOrder.order_lines[currentProductIndex], product.amount);
        }
        else
            return this.addNewItemToCart(product);
    }
    removeItemFromCart(productIndex) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((observer) => {
            this.currentOrder.order_lines.splice(productIndex, 1);
            this.updateOrderInfo();
            observer.next({
                result: {
                    status_response: this.currentOrder ? '200 OK' : '400 BAD REQUEST',
                    data: this.currentOrder
                }
            });
        });
    }
    addNewItemToCart(product) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((observer) => {
            var _a;
            let tax = this.getTax(product.price, product.amount, product.taxes);
            this.currentOrder.order_lines.push({
                line_id: undefined,
                productId: product.id,
                productName: product.name,
                price: product.price,
                oldPrice: (_a = product.old_price) !== null && _a !== void 0 ? _a : product.price,
                productQuantity: product.amount,
                isRewardLine: false,
                productImage: product.image,
                productPriceSubtotal: tax.priceWithoutTax,
                productPriceTax: tax.tax,
                productPriceTotal: tax.priceWithTax,
                qtyAvailableToday: undefined,
                currencySymbol: product.currencySymbol,
                currencyUnitLabel: product.currencyUnitLabel,
                order_line_changes: [],
                currencySubUnitLabel: product.currencySubUnitLabel,
                taxes: product.taxes,
                productCategories: product.productCategories
            });
            this.updateOrderInfo();
            observer.next({
                result: {
                    status_response: this.currentOrder ? '200 OK' : '400 BAD REQUEST',
                    data: this.currentOrder
                }
            });
        });
    }
    updateItemInCart(product, amount) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((observer) => {
            let tax = this.getTax(product.price, amount, product.taxes);
            product.productPriceSubtotal = tax.priceWithoutTax;
            product.productPriceTax = tax.tax;
            product.productPriceTotal = tax.priceWithTax;
            product.productQuantity = amount;
            this.updateOrderInfo();
            observer.next({
                result: {
                    status_response: this.currentOrder ? '200 OK' : '400 BAD REQUEST',
                    data: this.currentOrder
                }
            });
        });
    }
    getDiscounts() {
        return 0;
    }
    updateOrderInfo() {
        this.currentOrder.order.isValidMinProduct = this.currentOrder.order_lines.length >= this.currentOrder.order.minimun_quantity_products,
            this.currentOrder.order.amount_untaxed = 0;
        this.currentOrder.order.amount_tax = 0;
        this.currentOrder.order.amount_total = 0;
        this.currentOrder.order.total_discount = 0;
        this.currentOrder.order.delivery_charges = 0;
        this.currentOrder.order_lines.forEach((orderLine) => {
            this.currentOrder.order.amount_untaxed += orderLine.productPriceSubtotal;
            this.currentOrder.order.amount_tax += orderLine.productPriceTax;
            this.currentOrder.order.amount_total += orderLine.productPriceTotal;
            this.currentOrder.order.total_discount += (orderLine.oldPrice - orderLine.price);
            // TODO: Falta aplicar este campo
            this.currentOrder.order.delivery_charges = 0;
        });
        const discountPoints = this.getDiscountFromLoyaltyPoints();
        if (this.currentOrder.order.amount_total > 0) {
            this.currentOrder.order.amount_untaxed -= discountPoints;
            this.currentOrder.order.amount_total -= discountPoints;
        }
        this.totalAmount.next(this.currentOrder.order.amount_total);
    }
    getItemsInCart() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((observer) => {
            observer.next({
                result: {
                    status_response: this.currentOrder ? '200 OK' : '400 BAD REQUEST',
                    data: this.currentOrder
                }
            });
        });
    }
    getInvoice() {
        const httpOptions = {
            withCredentials: true,
        };
        const params = {};
        return this.httpClient
            .get((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.GET_INVOICE, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            console.log('Invoice from service', res);
            return res;
        }));
    }
    getInvoiceInfo(id) {
        const httpOptions = {
            withCredentials: true,
        };
        return this.httpClient.get((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.GET_INVOICE_INFO + id, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            console.log('Invoice from service', (localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.GET_INVOICE_INFO + id);
            return res;
        }));
    }
    setLoyaltyPointToReedem(points) {
        console.log('points', points);
        this.loyalty_point_to_redeem = points;
        this.updateOrderInfo();
    }
    placeOrder(parameters) {
        this.currentOrder.order.deliveryDate = parameters.deliveryDate;
        this.currentOrder.order.quantityBoxToReturn = parameters.quantityBoxToReturn;
        const httpOptions = {
            withCredentials: true,
        };
        const params = {
            params: {
                json: {
                    products: this.currentOrder.order_lines.map(ol => {
                        return { id: ol.productId, add_qty: ol.productQuantity };
                    }),
                    additonalInfo: {
                        deliveryDate: parameters.deliveryDate,
                        quantityBoxToReturn: parameters.quantityBoxToReturn
                    },
                    orderDetail: this.currentOrder,
                    entered_points: this.loyalty_point_to_redeem
                }
            },
        };
        return this.httpClient
            .post((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.PLACE_ORDER, params, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            if (this.loyalty_point_to_redeem > 0) {
                this.userData.loyaltyPoints -= this.loyalty_point_to_redeem;
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                    key: 'userData',
                    value: JSON.stringify(this.userData),
                }).then((storageResult) => {
                    console.log(storageResult);
                });
            }
            this.setInitialCurrentOrder();
            return res;
        }));
    }
    addEasyOrderToCart(easyOrderProducts) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((observer) => {
            let products = easyOrderProducts.filter((prod) => prod.order_easy_qty > 0);
            products.forEach((product) => {
                this.addToCart(product).toPromise()
                    .then(() => { });
            });
            observer.next({
                result: {
                    status_response: "200 OK"
                }
            });
        });
    }
    increaseProductCount(product, allProductList) {
        let added = false;
        for (const p of allProductList) {
            if (p.id === product.id) {
                let key = 'amount' in p ? 'amount' : 'order_easy_qty';
                p[key] += 1;
                added = true;
                if (added) {
                    this.updateOrderInfo();
                    return allProductList;
                }
                break;
            }
        }
    }
    decreaseProductCount(product, allProductList) {
        let subtracted = false;
        for (const [index, p] of allProductList.entries()) {
            if (p.id === product.id) {
                let key = 'amount' in p ? 'amount' : 'order_easy_qty';
                if (p[key] != 0) {
                    p[key] -= 1;
                    subtracted = true;
                }
                if (subtracted) {
                    this.updateOrderInfo();
                    return allProductList;
                }
            }
        }
    }
    getPointsCount() {
        const httpOptions = {
            withCredentials: true,
        };
        return this.httpClient
            .get((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.POINTS_COUNT, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            console.log('points', res);
            return res;
        }));
    }
    getPointsHistory() {
        const httpOptions = {
            withCredentials: true,
        };
        return this.httpClient
            .get((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.POINTS_HISTORY, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            console.log('history', res);
            return res;
        }));
    }
    getPointFromOrder() {
        let plus_points = 0.0;
        this.currentOrder.order_lines.forEach((line) => {
            line.productCategories.forEach((c) => {
                if (c.minimumAmount > 0) {
                    plus_points += Math.round(line.productPriceSubtotal / c.minimumAmount);
                }
            });
        });
        return {
            plus_points,
            total_loyalty: this.userData.loyaltyPoints
        };
    }
    getDiscountFromLoyaltyPoints() {
        if (this.userData && this.loyalty_point_to_redeem)
            return this.userData.point_redeem_value * this.loyalty_point_to_redeem;
        return 0;
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
CartService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root',
    })
], CartService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_cartServices_cart_service_ts.js.map
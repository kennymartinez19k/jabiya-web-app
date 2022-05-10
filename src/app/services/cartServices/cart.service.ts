/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrl } from 'src/app/util/constants';
import { environment } from 'src/environments/environment';
import { Storage } from '@capacitor/storage';

export interface InTax {
  name: string,
  amount_type: string,
  amount: number,
  price_include: boolean
}

export interface OutTax {
  priceWithoutTax: number,
  tax: number,
  priceWithTax: number
}

export interface DeliveryAddress {
  partner_id: number,
  country: string,
  state: string,
  street: string,
  street2: string,
  zip: string,
  city: string,
  partner_latitude: number,
  partner_longitude: number,
  full_address: string
}

export interface OrderLineChange {
  id: number,
  order_id: number,
  order_line_id: number,
  detail_before_change: string,
  units_before_change: number,
  total_price_before_change: number,
  create_date: string,

}

export interface OrderLine {
  line_id: number,
  productId: number,
  productName: string,
  price: number,
  oldPrice: number,
  productQuantity: number,
  isRewardLine: boolean,
  productImage: string,
  productPriceSubtotal: number,
  productPriceTax: number,
  productPriceTotal: number,
  qtyAvailableToday: number,
  currencySymbol: string,
  currencyUnitLabel: string,
  currencySubUnitLabel: string,
  order_line_changes: Array<OrderLineChange>,
  taxes: Array<InTax>,
  productCategories: Array<ProductCategoryId>
}

export interface ProductCategoryId {
  id: number,
  minimumAmount: number,
}

export interface CurrentOrder {
  order: OrderInfo,
  order_lines: Array<OrderLine>
}

export interface OrderInfo {
  id: number;
  name: string,
  client: string,
  deliveryDate: string,
  create_date: string,
  quantityBoxToReturn: number,
  has_invoice: boolean,
  amount_untaxed: number,
  amount_tax: number,
  amount_total: number,
  currencySymbol: string,
  currencyUnitLabel: string,
  currencySubUnitLabel: string,
  delivery_address: DeliveryAddress,
  total_discount: number,
  delivery_charges: number,
  minimun_quantity_products: number
  isValidMinProduct: boolean
}

export interface Discount {
  productId: number,
  type: string,
  amount: number
}
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private currentOrder: CurrentOrder;
  private userData: any;
  private discounts: Array<Discount>
  private totalAmount = new BehaviorSubject(0);
  private loyalty_point_to_redeem = null

  constructor(private httpClient: HttpClient) {
    this.setInitialCurrentOrder()
  }

  setInitialCurrentOrder() {
    Storage.get({ key: 'userData' }).then((result) => {
      const { value } = result
      let userData = JSON.parse(value);
      this.userData = userData
      this.discounts = userData.discounts
      this.loyalty_point_to_redeem = null
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
      }
    })
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
  getTax(price: number, quantity: number, taxes: Array<InTax>): OutTax {
    price = price * quantity
    let result: OutTax = {
      priceWithTax: price,
      priceWithoutTax: price,
      tax: 0
    }
    taxes.forEach(currentTax => {
      let outtax: OutTax = undefined


      switch (currentTax.amount_type) {
        case "fixed":
          outtax = {
            priceWithTax: price + currentTax.amount,
            priceWithoutTax: price,
            tax: currentTax.amount
          }
          break;
        case "percent":
          let percentTax = 0
          percentTax = price * currentTax.amount / 100
          outtax = {
            priceWithTax: price + percentTax,
            priceWithoutTax: price,
            tax: percentTax
          }
          break;
        case "division":
          let divisionTax = 0
          divisionTax = (1 - currentTax.amount / 100) ? price / (1 - currentTax.amount / 100) - price : 0

          outtax = {
            priceWithTax: price + divisionTax,
            priceWithoutTax: price,
            tax: divisionTax
          }
          break;
        default:
          return {
            priceWithTax: price,
            priceWithoutTax: price,
            tax: 0
          }
      }

      result.priceWithTax = outtax.priceWithTax
      result.priceWithoutTax = outtax.priceWithoutTax
      result.tax = Math.round((outtax.priceWithTax - outtax.priceWithoutTax) * 100) / 100
    });
    return result

  }
  addToCart(product, type = null): Observable<any> {

    product = JSON.parse(JSON.stringify(product));
    product.id = product.id ? product.id : product.productId;
    product.amount = product.amount ? product.amount : product.order_easy_qty ? product.order_easy_qty : product.productQuantity;

    let currentProductIndex = this.currentOrder.order_lines.findIndex((e) => e.productId === product.id)

    if (currentProductIndex >= 0) {
      if (product.amount == 0)
        return this.removeItemFromCart(currentProductIndex);
      else
        return this.updateItemInCart(this.currentOrder.order_lines[currentProductIndex], product.amount)
    }
    else return this.addNewItemToCart(product)
  }

  removeItemFromCart(productIndex) {
    return new Observable((observer) => {
      this.currentOrder.order_lines.splice(productIndex, 1)
      this.updateOrderInfo()
      observer.next({
        result: {
          status_response: this.currentOrder ? '200 OK' : '400 BAD REQUEST',
          data: this.currentOrder
        }
      })
    })
  }
  addNewItemToCart(product) {
    return new Observable((observer) => {
      let tax = this.getTax(product.price, product.amount, product.taxes)
      this.currentOrder.order_lines.push({
        line_id: undefined,
        productId: product.id,
        productName: product.name,
        price: product.price,
        oldPrice: product.old_price ?? product.price,
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
      })
      this.updateOrderInfo()
      observer.next({
        result: {
          status_response: this.currentOrder ? '200 OK' : '400 BAD REQUEST',
          data: this.currentOrder
        }
      });
    })
  }

  updateItemInCart(product, amount) {

    return new Observable((observer) => {
      let tax = this.getTax(product.price, amount, product.taxes)
      product.productPriceSubtotal = tax.priceWithoutTax
      product.productPriceTax = tax.tax
      product.productPriceTotal = tax.priceWithTax
      product.productQuantity = amount

      this.updateOrderInfo()
      observer.next({
        result: {
          status_response: this.currentOrder ? '200 OK' : '400 BAD REQUEST',
          data: this.currentOrder
        }
      });
    })
  }

  getDiscounts() {
    return 0
  }
  updateOrderInfo() {
    this.currentOrder.order.isValidMinProduct = this.currentOrder.order_lines.length >= this.currentOrder.order.minimun_quantity_products,
    this.currentOrder.order.amount_untaxed = 0
    this.currentOrder.order.amount_tax = 0
    this.currentOrder.order.amount_total = 0
    this.currentOrder.order.total_discount = 0
    this.currentOrder.order.delivery_charges = 0


    this.currentOrder.order_lines.forEach((orderLine) => {
      this.currentOrder.order.amount_untaxed += orderLine.productPriceSubtotal
      this.currentOrder.order.amount_tax += orderLine.productPriceTax
      this.currentOrder.order.amount_total += orderLine.productPriceTotal
      this.currentOrder.order.total_discount += (orderLine.oldPrice - orderLine.price)

      // TODO: Falta aplicar este campo
      this.currentOrder.order.delivery_charges = 0
    })
    const discountPoints = this.getDiscountFromLoyaltyPoints()
    if (this.currentOrder.order.amount_total > 0) {
      this.currentOrder.order.amount_untaxed -= discountPoints
      this.currentOrder.order.amount_total -= discountPoints
    }
    this.totalAmount.next(this.currentOrder.order.amount_total);
  }
  getItemsInCart(): Observable<any> {
    return new Observable((observer) => {
      observer.next({
        result: {
          status_response: this.currentOrder ? '200 OK' : '400 BAD REQUEST',
          data: this.currentOrder
        }
      })
    })
  }
  getInvoice() {
    const httpOptions = {
      withCredentials: true,
    };
    const params: any = {};
    return this.httpClient
      .get((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL) + apiUrl.GET_INVOICE, httpOptions)
      .pipe(
        map((res: any) => {
          console.log('Invoice from service', res);
          return res;
        })
      );
  }
  getInvoiceInfo(id): Observable<any> {
    const httpOptions = {
      withCredentials: true,
    };
    return this.httpClient.get((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL) + apiUrl.GET_INVOICE_INFO + id, httpOptions)
      .pipe(
        map((res: any) => {
          console.log('Invoice from service', (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL) + apiUrl.GET_INVOICE_INFO + id);
          return res;
        })
      );
  }

  setLoyaltyPointToReedem (points: number) {
    console.log('points', points);
    this.loyalty_point_to_redeem = points
    this.updateOrderInfo()
  }

  placeOrder(parameters) {
    this.currentOrder.order.deliveryDate = parameters.deliveryDate
    this.currentOrder.order.quantityBoxToReturn = parameters.quantityBoxToReturn

    const httpOptions = {
      withCredentials: true,
    };
    const params = {
      params: {
        json: {
          products: this.currentOrder.order_lines.map(ol => {
            return { id: ol.productId, add_qty: ol.productQuantity }
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
      .post((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL) + apiUrl.PLACE_ORDER, params, httpOptions)
      .pipe(
        map((res: any) => {
          if (this.loyalty_point_to_redeem > 0) {
            this.userData.loyaltyPoints -= this.loyalty_point_to_redeem
            Storage.set({
              key: 'userData',
              value: JSON.stringify(this.userData),
            }).then((storageResult)=> {
              console.log(storageResult)
            })
          }
          this.setInitialCurrentOrder()
          return res;
        })
      );
  }

  addEasyOrderToCart(easyOrderProducts) {
    return new Observable<any>((observer) => {
      let products = easyOrderProducts.filter((prod) => prod.order_easy_qty > 0)
      products.forEach((product) => {
        this.addToCart(product).toPromise()
          .then(() => { })
      })
      observer.next({
        result: {
          status_response: "200 OK"
        }
      });
    })
  }

  increaseProductCount(product, allProductList) {
    let added = false;
    for (const p of allProductList) {
      if (p.id === product.id) {
        let key = 'amount' in p ? 'amount' : 'order_easy_qty'
        p[key] += 1;
        added = true;
        if (added) {
          this.updateOrderInfo()
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
        let key = 'amount' in p ? 'amount' : 'order_easy_qty'
        if (p[key] != 0) {
          p[key] -= 1;
          subtracted = true;
        }
        if (subtracted) {
          this.updateOrderInfo()
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
      .get((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL) + apiUrl.POINTS_COUNT, httpOptions)
      .pipe(
        map((res: any) => {
          console.log('points', res);
          return res;
        })
      );
  }

  getPointsHistory() {
    const httpOptions = {
      withCredentials: true,
    };
    return this.httpClient
      .get((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL) + apiUrl.POINTS_HISTORY, httpOptions)
      .pipe(
        map((res: any) => {
          console.log('history', res);
          return res;
        })
      );
  }

  getPointFromOrder() {
    let plus_points = 0.0
    this.currentOrder.order_lines.forEach((line) => {
      line.productCategories.forEach((c) => {
        if (c.minimumAmount > 0) {
          plus_points += Math.round(line.productPriceSubtotal / c.minimumAmount)
        }
      })
    })

    return {
      plus_points,
      total_loyalty: this.userData.loyaltyPoints
    }
  }

  getDiscountFromLoyaltyPoints() {
    if (this.userData && this.loyalty_point_to_redeem) return this.userData.point_redeem_value * this.loyalty_point_to_redeem
    return 0
  }
}

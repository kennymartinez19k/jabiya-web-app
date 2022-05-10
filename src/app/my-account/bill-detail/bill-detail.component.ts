import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cartServices/cart.service';
import { LANGUAGE } from 'src/app/util/constants';
@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss'],
})
export class BillDetailComponent implements OnInit {
  invoiceDetailRes:any;
  deliveryDate;
  public invoiceLines =[];
  invoiceId;
  getInvoiceSubscription: Subscription;
  orderSubscription: Subscription;
  public language:any;
  public languageJson={
    billDetails:{
      spanish :{
        paid : 'Factura pagada',
        paydate: 'Fecha de pago',
        geninvoice: 'Factura generada',
        export:'Exportar (PDF)',
        Product: 'Producto',
        qty: 'Cant',
        tax:'Impuestos',

      },
      english : {
        paid : 'Invoice Paid',
        paydate: 'Payment Date',
        geninvoice: 'Generated Invoice',
        export:'Export (PDF)',
        Product: 'Product',
        qty: 'Quantity',
        tax:'Taxes',
      }
    }
  }
  constructor(public activatedRoute: ActivatedRoute, public cartService: CartService) { 
    this.language=localStorage.getItem(LANGUAGE);    
  }

  ngOnInit() {
    this.invoiceId = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log('invoiceid you clicked', this.invoiceId);
    this.getInvoiceDetails(this.invoiceId);
    // this.getOrderDetails(this.invoiceId);
  }
  getInvoiceDetails(invoiceID) {
    this.getInvoiceSubscription = this.cartService.getInvoiceInfo(invoiceID).subscribe(data => {
      this.invoiceDetailRes=data.result.data.invoice;
      this.invoiceLines= data.result.data.invoice.lines;
      // console.log("Invoice Details", this.invoiceLines);
    })
  }
  // getOrderDetails(invoiceID)
  // {
  //   this.orderSubscription= this.cartService.getOrderInfo(invoiceID).subscribe(data => {
  //     this.deliveryDate = data.result.data.order;
  //     console.log("Order details", this.deliveryDate);
  //   })
  // }
}

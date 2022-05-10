import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cartServices/cart.service';
import { LANGUAGE } from 'src/app/util/constants';
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  public language:any;
  public invoiceRes= [];
  currentPage: number = 1;
  public languageJson = {
    billPage:{
    spanish:{
      inv:'De factura',
      date:'Fecha'
    },
    english:{
      inv:'Invoice',
      date:'Date'
    }
  }
}
  constructor(private router: Router, public cartService: CartService) { 
    this.language= localStorage.getItem(LANGUAGE);
  }
  gotoBillDetails(id) {
    this.router.navigate(['/my-account/billDetails/'+ id]);
  } 
  ngOnInit() {
    this.getInvoiceDetails();
  }
  getInvoiceDetails() {
    this.cartService.getInvoice().subscribe(
      response => {
        this.invoiceRes = response.result.data.invoices;
        console.log("response from invoice", this.invoiceRes);
      })
  }
}

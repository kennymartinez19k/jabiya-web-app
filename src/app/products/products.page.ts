import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cartServices/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  subCategories: any;
  products: any;
  public categoriName: any;
  constructor(private route: ActivatedRoute, private router: Router, public cartService: CartService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.subCategories = this.router.getCurrentNavigation().extras.state.data.result.data.categories;
        this.products = this.router.getCurrentNavigation().extras.state.products.result.data;
        this.categoriName = this.router.getCurrentNavigation().extras.state.categoriName;
      }
    });
  }

}

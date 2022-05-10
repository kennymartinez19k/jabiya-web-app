import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CartService } from 'src/app/services/cartServices/cart.service';
import { LANGUAGE } from 'src/app/util/constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() subCategories: any;
  public showHead = false;
  @Input() products: any;
  public productTitle: any;
  public productOwn: any;
  public data: any;
  public categoryLength: any;
  public productLength: any;
  public categoryName: any;
  public loading = false;
  private resetProducts: any;
  public showTitle = false;
  public productName: any;
  public language: any;
  public categoriName: any;
  public intervalId: any;
  public languageJson = {
    listPage: {
      spanish: {
        welcomemsg: 'Presidente Regular',
        add: 'Añadir',
        nope: 'Actualmente esta categoría no posee productos'
      },
      english: {
        welcomemsg: 'Regular President',
        add: 'Add',
        nope: 'Currently this category has no products'
      }
    }
  }

  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, private cartService: CartService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/products/productList') {
          this.showHead = true;
          this.showTitle = true;
        } else {
          this.showHead = false;
          this.showTitle = false;
        }
      }
    });
  }

  ngOnInit() {
    this.language = localStorage.getItem(LANGUAGE);
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state.products) {
        this.products = this.router.getCurrentNavigation().extras.state.products.result.data;
        this.resetProducts = JSON.parse(JSON.stringify(this.products));
        // this.productName=this.resetProducts[0].name        
        this.productLength = this.products.length;
        this.categoriName = this.router.getCurrentNavigation().extras.state.categoriName;
        this.productName = this.categoriName;
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.productOwn = this.data;
        this.productTitle = (this.productName !== '' ? this.productName : this.productOwn);
        this.productTitle = this.productName === undefined ? this.productOwn : this.productName;
        this.categoryName = this.router.getCurrentNavigation().extras.state.data.result.data.categories;
        this.categoryLength = this.categoryName.length;
        this.intervalId = setInterval(() => {
          if (this.productLength !== 0 && this.categoryLength !== 0) {
            this.showTitle = false;
          }
          else {
            this.showTitle = true;
          }
        }, 200);
      }
    });
  }

  decreaseProductCount(product) {
    const changed = this.cartService.decreaseProductCount(product, this.products);
    if (changed) {
      this.products = changed;
    }
  }

  increaseProductCount(product) {
    const changed = this.cartService.increaseProductCount(product, this.products);
    if (changed) {
      this.products = changed;
    }
  }

  async addToCart(product, index) {
    if (product.amount > 0) {
      this.loading = true;
      this.cartService.addToCart(product, 'compound').subscribe(
        (res) => {
          this.loading = false;
          if (res) {
            this.products[index] = JSON.parse(JSON.stringify(this.resetProducts))[index];
          }
        },
        (error: any) => {
          console.log('error', error);
          this.loading = false;
        }
      );
    }
  }
  testCart() {
    this.cartService.getItemsInCart().subscribe(
      (res) => {
        console.log('cart', res);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
    this.productTitle = null;
    this.productOwn = null;
    this.data = null;
    this.categoryLength = null;
    this.productLength = null;
    this.categoryName = null;
    this.loading = null;
    this.resetProducts = null;
    this.showTitle = null;
    this.productName = null;
    this.language = null;
    this.categoriName = null;
  }
}

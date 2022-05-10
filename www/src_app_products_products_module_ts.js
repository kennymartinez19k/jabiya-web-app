(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["src_app_products_products_module_ts"],{

/***/ 5065:
/*!*************************************************************************!*\
  !*** ./src/app/products/product-category/product-category.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCategoryComponent": () => (/* binding */ ProductCategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_product_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-category.component.html */ 8862);
/* harmony import */ var _product_category_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-category.component.scss */ 7986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _services_landingPageServices_landing_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/landingPageServices/landing-page.service */ 5558);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/constants */ 1830);








let ProductCategoryComponent = class ProductCategoryComponent {
    constructor(route, router, sanitizer, landingPageService) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.landingPageService = landingPageService;
        this.loading = false;
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE);
    }
    gotoPdtList(id, name) {
        this.loading = true;
        this.landingPageService.getProductsByCategories(id).subscribe((res) => {
            console.log('products', res);
            if (res) {
                this.loading = false;
                const navigationExtras = {
                    state: {
                        data: name,
                        products: res,
                    },
                };
                this.router.navigate(['products/productList'], navigationExtras);
            }
        }, (error) => {
            this.loading = false;
            console.log('error', error);
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                // this.subCategories = this.router.getCurrentNavigation().extras.state.data.result.data.categories;
                // this.products = this.router.getCurrentNavigation().extras.state.products.result.data;
                this.categoriName = this.router.getCurrentNavigation().extras.state.categoriName;
                this.subcategorytitle = this.categoriName;
                console.log('productcategory page categoryname', this.categoriName);
            }
        });
        if (this.subCategories.length === 0) {
            this.subcategorytitle = this.categoriName;
            // this.subcategorytitle = this.language ==='English' ? 'No subcategory': 'Sin subcategoría'
            console.log('sorry', this.subCategories);
        }
        else {
            this.subcategorytitle = this.categoriName;
            // this.subcategorytitle = this.subCategories;
            console.log('subCategories', this.categoriName);
        }
    }
};
ProductCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: _services_landingPageServices_landing_page_service__WEBPACK_IMPORTED_MODULE_2__.LandingPageService }
];
ProductCategoryComponent.propDecorators = {
    subCategories: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ProductCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-product-category',
        template: _raw_loader_product_category_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_category_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductCategoryComponent);



/***/ }),

/***/ 3968:
/*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-list.component.html */ 3315);
/* harmony import */ var _product_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list.component.scss */ 5345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cartServices/cart.service */ 1136);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/constants */ 1830);








let ProductListComponent = class ProductListComponent {
    constructor(sanitizer, route, router, cartService) {
        this.sanitizer = sanitizer;
        this.route = route;
        this.router = router;
        this.cartService = cartService;
        this.showHead = false;
        this.loading = false;
        this.showTitle = false;
        this.languageJson = {
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
        };
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                if (event.url === '/products/productList') {
                    this.showHead = true;
                    this.showTitle = true;
                }
                else {
                    this.showHead = false;
                    this.showTitle = false;
                }
            }
        });
    }
    ngOnInit() {
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE);
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
    addToCart(product, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (product.amount > 0) {
                this.loading = true;
                this.cartService.addToCart(product, 'compound').subscribe((res) => {
                    this.loading = false;
                    if (res) {
                        this.products[index] = JSON.parse(JSON.stringify(this.resetProducts))[index];
                    }
                }, (error) => {
                    console.log('error', error);
                    this.loading = false;
                });
            }
        });
    }
    testCart() {
        this.cartService.getItemsInCart().subscribe((res) => {
            console.log('cart', res);
        }, (error) => {
            console.log('error', error);
        });
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
};
ProductListComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
ProductListComponent.propDecorators = {
    subCategories: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ProductListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product-list',
        template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductListComponent);



/***/ }),

/***/ 4073:
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "ProductsPageRoutingModule": () => (/* binding */ ProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-category/product-category.component */ 5065);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ 3968);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.page */ 6232);






// const routes: Routes = [
//   {
//     path: '',
//     component: ProductsPage
//   }
// ];
const routes = [
    {
        path: 'products',
        component: _products_page__WEBPACK_IMPORTED_MODULE_2__.ProductsPage
    },
    { path: 'productCategory', component: _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_0__.ProductCategoryComponent },
    { path: 'productList', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ 9078:
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageModule": () => (/* binding */ ProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 4073);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page */ 6232);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ 3968);
/* harmony import */ var _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-category/product-category.component */ 5065);









let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_1__.ProductsPage, _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_3__.ProductCategoryComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent]
    })
], ProductsPageModule);



/***/ }),

/***/ 6232:
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": () => (/* binding */ ProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products.page.html */ 5974);
/* harmony import */ var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page.scss */ 7451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cartServices/cart.service */ 1136);






let ProductsPage = class ProductsPage {
    constructor(route, router, cartService) {
        this.route = route;
        this.router = router;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.subCategories = this.router.getCurrentNavigation().extras.state.data.result.data.categories;
                this.products = this.router.getCurrentNavigation().extras.state.products.result.data;
                this.categoriName = this.router.getCurrentNavigation().extras.state.categoriName;
            }
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-products',
        template: _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductsPage);



/***/ }),

/***/ 7986:
/*!***************************************************************************!*\
  !*** ./src/app/products/product-category/product-category.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-thumbnail {\n  width: 80px;\n}\n\nion-title {\n  font-family: \"Nunito Sans\";\n}\n\n.pdt-name {\n  font-weight: 600;\n  white-space: pre-wrap;\n}\n\n.pdt-description {\n  font-weight: 500;\n  white-space: pre-wrap;\n}\n\nion-item {\n  border-bottom: 2px solid #ebebeb;\n  --inner-border-width: 0 0 0 0;\n}\n\n.pdt-header {\n  background-image: linear-gradient(to bottom, #3dc2c4, #36bcbd, #2fb6b6, #28b0b0, #20aaa9);\n  height: 100px;\n  padding: 20px;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.pdt-header-title {\n  color: #ffffff;\n  margin-top: 18px;\n  font-size: 22px;\n  font-weight: 500;\n  margin-left: 20px;\n}\n\n.list-without-category {\n  margin: 0px auto;\n}\n\n.list-item-category {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.item-category {\n  width: 100%;\n  margin: 10px;\n  padding: 5px 0px;\n}\n\n@media (min-width: 600px) {\n  .item-category {\n    width: 45%;\n    cursor: pointer;\n  }\n}\n\n@media (min-width: 900px) {\n  .item-category {\n    width: 30%;\n    margin: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUdGOztBQURBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtBQUlGOztBQUZBO0VBQ0UseUZBQUE7RUFRQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3RkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQURGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VBREY7QUFDRiIsImZpbGUiOiJwcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgLy8gICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xyXG59XHJcbi5wZHQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuLnBkdC1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG59XHJcbi5wZHQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICAjM2RjMmM0LFxyXG4gICAgIzM2YmNiZCxcclxuICAgICMyZmI2YjYsXHJcbiAgICAjMjhiMGIwLFxyXG4gICAgIzIwYWFhOVxyXG4gICk7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IHJnYig1MCA1MCA5MyAvIDI1JSkgMHB4IDJweCA1cHggLTFweCxcclxuICAgIHJnYigwIDAgMCAvIDMwJSkgMHB4IDFweCAzcHggLTFweDtcclxufVxyXG4ucGR0LWhlYWRlci10aXRsZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4ubGlzdC13aXRob3V0LWNhdGVnb3J5e1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmxpc3QtaXRlbS1jYXRlZ29yeXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLml0ZW0tY2F0ZWdvcnl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAuaXRlbS1jYXRlZ29yeXtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC5pdGVtLWNhdGVnb3J5e1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 5345:
/*!*******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-family: \"Nunito Sans\";\n}\n\n.pdt-name {\n  font-weight: 600;\n  white-space: pre-wrap;\n}\n\n.pdt-description {\n  font-weight: 500;\n  white-space: pre-wrap;\n}\n\nion-item {\n  border-bottom: 2px solid #ebebeb;\n  --inner-border-width: 0 0 0 0;\n}\n\n.pdt-header {\n  background-image: linear-gradient(to bottom, #3dc2c4, #36bcbd, #2fb6b6, #28b0b0, #20aaa9);\n  height: 100px;\n  padding: 20px;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.pdt-header-title {\n  color: #ffffff;\n  margin-top: 18px;\n  font-size: 22px;\n  font-weight: 500;\n  margin-left: 20px;\n}\n\nion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n}\n\nion-toolbar {\n  border-radius: 0 0 24px 24px;\n  padding-top: 8px;\n  padding-bottom: 4px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-item {\n  border-bottom: 2px solid #ebebeb;\n  --inner-border-width: 0 0 0 0;\n}\n\n.cart-price {\n  width: auto;\n  border: 0px solid #84ca08;\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: 600;\n  color: #ffffff;\n  font-size: 10px;\n  position: absolute;\n  top: -6px;\n  right: 4px;\n  z-index: 100;\n  background-color: #84ca08;\n}\n\nion-thumbnail {\n  /* margin-top: 10px; */\n  /* margin-bottom: 20px; */\n  width: 80px;\n  height: 130px;\n  --padding-start: 8px;\n  margin-inline-end: 30px;\n}\n\nion-label {\n  margin-top: -44px;\n}\n\n.cart-btn {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  height: 36px;\n  --border-radius: 6px;\n  width: 92%;\n  bottom: 10px;\n  position: absolute;\n}\n\nion-thumbnail img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  min-width: 80px;\n  min-height: 80px;\n}\n\n.list-without-category {\n  margin: 0px auto;\n}\n\n.list-items-prod {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.item-prod {\n  width: 100%;\n  margin: 10px;\n}\n\n@media (min-width: 600px) {\n  .item-prod {\n    width: 45%;\n  }\n\n  .search-bar {\n    display: flex;\n    justify-content: flex-end;\n    margin: 0px 0px 0px auto;\n    width: 40%;\n  }\n}\n\n@media (min-width: 900px) {\n  .item-prod {\n    width: 30%;\n    margin: 20px 10px;\n  }\n\n  .pdt-name {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDBCQUFBO0FBSEY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBREY7O0FBR0E7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0FBQUY7O0FBRUE7RUFDRSx5RkFBQTtFQVFBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdGQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVFBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQUxGOztBQU9BO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0ZBQUE7QUFKRjs7QUFlQTtFQUNFLHFCQUFBO0FBWkY7O0FBY0E7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0FBWEY7O0FBYUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQVZGOztBQVlBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQVRGOztBQVdBO0VBQ0UsaUJBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVNBO0VBQ0UsZ0JBQUE7QUFORjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVNBO0VBQ0U7SUFDRSxVQUFBO0VBTkY7O0VBUUE7SUFDRSxhQUFBO0lBQ0EseUJBQUE7SUFDQSx3QkFBQTtJQUNBLFVBQUE7RUFMRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFMRjs7RUFRQTtJQUNFLGVBQUE7RUFMRjtBQUNGIiwiZmlsZSI6InByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10aXRsZSB7XHJcbi8vICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcclxuLy8gICBmb250LXNpemU6IDE4cHg7XHJcbi8vIH1cclxuaW9uLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xyXG59XHJcbi5wZHQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuLnBkdC1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG59XHJcbi5wZHQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICAjM2RjMmM0LFxyXG4gICAgIzM2YmNiZCxcclxuICAgICMyZmI2YjYsXHJcbiAgICAjMjhiMGIwLFxyXG4gICAgIzIwYWFhOVxyXG4gICk7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IHJnYig1MCA1MCA5MyAvIDI1JSkgMHB4IDJweCA1cHggLTFweCxcclxuICAgIHJnYigwIDAgMCAvIDMwJSkgMHB4IDFweCAzcHggLTFweDtcclxufVxyXG4ucGR0LWhlYWRlci10aXRsZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDEwcHg7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyNHB4IDI0cHg7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYig1MCA1MCA5MyAvIDI1JSkgMHB4IDJweCA1cHggLTFweCxcclxuICAgIHJnYigwIDAgMCAvIDMwJSkgMHB4IDFweCAzcHggLTFweDtcclxufVxyXG4vLyBpb24tdGh1bWJuYWlsIHtcclxuLy8gICBtYXJnaW4tdG9wOiAtNDBweDtcclxuLy8gICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbi8vICAgd2lkdGg6IDgwcHg7XHJcbi8vICAgaGVpZ2h0OiAxMTBweDtcclxuLy8gICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuLy8gICBtYXJnaW4taW5saW5lLWVuZDogMzBweDtcclxuLy8gfVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ViZWJlYjtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcclxufVxyXG4uY2FydC1wcmljZSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzg0Y2EwODtcclxuICBwYWRkaW5nOiAycHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC02cHg7XHJcbiAgcmlnaHQ6IDRweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2EwODtcclxufVxyXG5pb24tdGh1bWJuYWlsIHtcclxuICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xyXG4gIC8qIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMzBweDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IC00NHB4O1xyXG59XHJcblxyXG4uY2FydC1idG4ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICB3aWR0aDogOTIlO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuaW9uLXRodW1ibmFpbCBpbWcge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgbWluLWhlaWdodDogODBweDtcclxufVxyXG4ubGlzdC13aXRob3V0LWNhdGVnb3J5e1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmxpc3QtaXRlbXMtcHJvZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLml0ZW0tcHJvZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAuaXRlbS1wcm9ke1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9XHJcbiAgLnNlYXJjaC1iYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggYXV0bztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC5pdGVtLXByb2R7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcblxyXG4gIH1cclxuICAucGR0LW5hbWV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 7451:
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --background: #fbfbfb;\n}\n\n.header-md::after {\n  background-image: none;\n}\n\nion-content {\n  --background: #f3f3f3;\n  top: -16px;\n}\n\nion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n}\n\nion-toolbar {\n  border-radius: 0 0 24px 24px;\n  padding-top: 8px;\n  padding-bottom: 4px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.cart-price {\n  width: auto;\n  border: 0px solid #84ca08;\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: 600;\n  color: #ffffff;\n  font-size: 10px;\n  position: absolute;\n  top: -6px;\n  right: 4px;\n  z-index: 100;\n  background-color: #84ca08;\n}\n\n.cart-price:after {\n  content: \"\";\n  position: absolute;\n  top: 95%;\n  right: 16px;\n  border-top: 10px solid #333652;\n  border-top-color: inherit;\n  border-left: 10px solid transparent;\n  border-right: 0px solid transparent;\n}\n\n@media (min-width: 600px) {\n  .search-bar {\n    display: flex;\n    justify-content: flex-end;\n    margin: 0px 0px 0px auto;\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RkFBQTtBQUtGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7QUFNRjs7QUFIQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHlCQUFBO0lBQ0Esd0JBQUE7SUFDQSxVQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJwcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2YzZjNmMztcclxuICB0b3A6IC0xNnB4O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI0cHggMjRweDtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiKDUwIDUwIDkzIC8gMjUlKSAwcHggMnB4IDVweCAtMXB4LFxyXG4gICAgcmdiKDAgMCAwIC8gMzAlKSAwcHggMXB4IDNweCAtMXB4O1xyXG59XHJcbi5jYXJ0LXByaWNlIHtcclxuICB3aWR0aDogYXV0bztcclxuICBib3JkZXI6IDBweCBzb2xpZCAjODRjYTA4O1xyXG4gIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTZweDtcclxuICByaWdodDogNHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjYTA4O1xyXG59XHJcbi5jYXJ0LXByaWNlOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDk1JTtcclxuICByaWdodDogMTZweDtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzMzM2NTI7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAuc2VhcmNoLWJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 8862:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-category/product-category.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"dark\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Cervezas</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cart-outline\"></ion-icon>\r\n      </ion-button>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<!-- <ion-content [fullscreen]=\"true\"> -->\r\n  <div class=\"pdt-header\">\r\n    <h1 class=\"pdt-header-title\">{{subcategorytitle}}</h1>\r\n    <!-- <h1 class=\"pdt-header-title\"  *ngIf=\"subCategories.length !== 0\">{{subcategorytitle}}</h1>\r\n    <h1 class=\"pdt-header-title\" *ngIf=\"subCategories.length === 0\">{{subcategorytitle}}</h1> -->\r\n    </div>\r\n  <ion-list class=\"list-item-category\">\r\n    <ng-container *ngFor=\"let subCategorie of subCategories;let i=index\">\r\n\r\n      <ion-item class=\"ion-border-bottom item-category\" (click)=\"gotoPdtList(subCategorie.id,subCategorie.name)\">\r\n         <ion-thumbnail slot=\"start\">\r\n           <img [src]=\"subCategorie.image ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n           + subCategorie.image) : '../../../assets/images/pdt-logo1.png' \">\r\n         </ion-thumbnail>\r\n       <ion-label>\r\n         <p class=\"pdt-description\" color=\"secondary\">{{subCategorie.name}}</p>\r\n       </ion-label>\r\n       </ion-item>\r\n      \r\n     </ng-container>\r\n     \r\n      <div class=\"login-container ion-padding ion-text-center list-without-category\"  *ngIf=\"subCategories.length===0\">\r\n        <div class=\"ion-text-center ion-padding-vertical page-content\">\r\n          <img src=\"../../../assets/images/noproducts.png\" width=\"100px\">\r\n        </div>\r\n        <div class=\"ion-text-center ion-padding\">\r\n          <h2 *ngIf=\"language=== 'Spanish'\" class=\"wel-msg\">Actualmente esta categoría no posee subcategorías.</h2>\r\n          <h2  *ngIf=\"language=== 'English'\"  class=\"wel-msg\">Currently this category has no subcategories.</h2>\r\n        </div>\r\n        <!-- <div class=\"ion-text-center ion-padding\">\r\n          <p class=\"wel-submsg\">Thank you for signing up! Login to check for special offers from us.</p>\r\n        </div> -->\r\n        <!-- <div class=\"ion-text-center ion-padding-vertical\">\r\n          <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" expand=\"block\"\r\n            routerLink=\"../products\">Go back</ion-button>\r\n        </div> -->\r\n      </div>\r\n     <!-- <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <img src=\"../../../assets/images/pdt-logo1.png\">\r\n        </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"pdt-description\" color=\"secondary\">Persidente Regular </p>\r\n      </ion-label>\r\n    </ion-item>\r\n     <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"../../../assets/images/pdt-logo2.png\">\r\n      </ion-thumbnail>\r\n    <ion-label>\r\n      <p class=\"pdt-description\" color=\"secondary\">Corona </p>\r\n    </ion-label>\r\n  </ion-item>\r\n   <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"../../../assets/images/pdt-logo1.png\">\r\n    </ion-thumbnail>\r\n  <ion-label>\r\n    <p class=\"pdt-description\" color=\"secondary\">Persidente Regular </p>\r\n  </ion-label>\r\n</ion-item>\r\n <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"../../../assets/images/pdt-logo2.png\">\r\n  </ion-thumbnail>\r\n<ion-label>\r\n  <p class=\"pdt-description\" color=\"secondary\">Corona </p>\r\n</ion-label>\r\n</ion-item>\r\n <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"../../../assets/images/pdt-logo1.png\">\r\n  </ion-thumbnail>\r\n<ion-label>\r\n  <p class=\"pdt-description\" color=\"secondary\">Persidente Regular </p>\r\n</ion-label>\r\n</ion-item>\r\n <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"../../../assets/images/pdt-logo2.png\">\r\n  </ion-thumbnail>\r\n<ion-label>\r\n  <p class=\"pdt-description\" color=\"secondary\">Corona </p>\r\n</ion-label>\r\n</ion-item>\r\n <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"../../../assets/images/pdt-logo1.png\">\r\n  </ion-thumbnail>\r\n<ion-label>\r\n  <p class=\"pdt-description\" color=\"secondary\">Persidente Regular </p>\r\n</ion-label>\r\n</ion-item>\r\n <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"../../../assets/images/pdt-logo2.png\">\r\n  </ion-thumbnail>\r\n<ion-label>\r\n  <p class=\"pdt-description\" color=\"secondary\">Corona </p>\r\n</ion-label>\r\n</ion-item>  \r\n <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"../../../assets/images/pdt-logo1.png\">\r\n  </ion-thumbnail>\r\n<ion-label>\r\n  <p class=\"pdt-description\" color=\"secondary\">Persidente Regular </p>\r\n</ion-label>\r\n</ion-item>\r\n <ion-item class=\"ion-border-bottom\" (click)=\"gotoPdtList()\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"../../../assets/images/pdt-logo2.png\">\r\n  </ion-thumbnail>\r\n<ion-label>\r\n  <p class=\"pdt-description\" color=\"secondary\">Corona </p>\r\n</ion-label>\r\n</ion-item> -->\r\n  </ion-list>\r\n  <!-- </ion-content> -->\r\n  <div class=\"loader\" *ngIf=\"loading\" ></div>");

/***/ }),

/***/ 3315:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  <ion-header [translucent]=\"true\" *ngIf=\"showHead\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <!-- <ion-title>{{productName}}</ion-title>\r\n    <ion-title *ngIf=\"products.length===0\">{{language ==='English'? languageJson.listPage.english.welcomemsg :languageJson.listPage.spanish.welcomemsg}}</ion-title> -->\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button routerLink=\"/shopping-cart\">\r\n        <ion-icon slot=\"icon-only\" name=\"cart-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text color=\"secondary\" class=\"cart-price\" routerLink=\"/shopping-cart\">\r\n        RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-text>\r\n     </ion-buttons> -->\r\n     <ion-searchbar showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\" class=\"search-bar\"></ion-searchbar>\r\n     <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/shopping-cart\" color=\"primary\" fill=\"solid\" class=\"round-btn\">\r\n        <ion-icon name=\"cart-outline\" class=\"mr-1\"></ion-icon>RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-button>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"pdt-header\" *ngIf=\"showTitle\" >\r\n    <h1 class=\"pdt-header-title\">{{productTitle}}</h1>   \r\n    </div>\r\n<ion-list class=\"list-items-prod\">\r\n  <!-- <ion-list-header>\r\n    <ion-label>\r\n      <h2 class=\"wel-msg\"><b>Featured Products</b></h2>\r\n    </ion-label>\r\n  </ion-list-header> -->\r\n  <ng-container *ngFor=\"let product of products;let i=index\">\r\n    <ion-item class=\"item-prod\">\r\n      <div class=\"pdt-quantity\" slot=\"start\">\r\n        <ion-button fill=\"outline\" class=\"add-btn\" (click)=\"decreaseProductCount(product)\">\r\n          <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n        </ion-button>\r\n        <ion-text class=\"m-8\" color=\"secondary\">{{product.amount}} </ion-text>\r\n        <ion-button fill=\"outline\" class=\"add-btn\" (click)=\"increaseProductCount(product)\">\r\n          <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"product.image ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n        + product.image) : '../../assets/images/pdt1.png' \">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3 class=\"pdt-name\" color=\"secondary\">{{product.name}}</h3>\r\n        <!-- <h3 class=\"pdt-name\" color=\"secondary\">[Descripción Empaque]</h3>\r\n        <p color=\"tertiary\" class=\"pdt-description\">Detalles se incluyen aquí</p> -->\r\n        <h3 color=\"secondary\" class=\"pdt-price\">{{product.currencySymbol}} {{product.price | number:'1.0':'en-US'}}</h3>\r\n        <ion-button fill=\"solid\" class=\"cart-btn\" (click)=\"addToCart(product, i)\">\r\n          {{language ==='English'? languageJson.listPage.english.add :languageJson.listPage.spanish.add}}\r\n        </ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ng-container>\r\n  \r\n    <div class=\"login-container ion-padding ion-text-center list-without-category\"  *ngIf=\"products.length ===0\">\r\n     \r\n      <div class=\"ion-text-center ion-padding-vertical page-content\">\r\n        <img src=\"../../../assets/images/noproducts.png\" width=\"100px\">\r\n      </div>\r\n      <div class=\"ion-text-center ion-padding\">\r\n        <h2 class=\"wel-msg\">{{language ==='English'? languageJson.listPage.english.nope :languageJson.listPage.spanish.nope}}.</h2>      \r\n      </div>\r\n      <!-- <div class=\"ion-text-center ion-padding\">\r\n        <p class=\"wel-submsg\">Thank you for signing up! Login to check for special offers from us.</p>\r\n      </div> -->\r\n      <!-- <div class=\"ion-text-center ion-padding-vertical\">\r\n        <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" expand=\"block\"\r\n          routerLink=\"../products\">Go back</ion-button>\r\n      </div> -->\r\n    </div>\r\n  \r\n  <!-- <ion-item>\r\n    <div class=\"pdt-quantity\" slot=\"start\">\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text class=\"m-8\" color=\"secondary\">2</ion-text>\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"../../assets/images/pdt1.png\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">Lorem ipsum dolor sit amet unde omnis</h3>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">[Descripción Empaque]</h3>\r\n      <p color=\"tertiary\" class=\"pdt-description\">Detalles se incluyen aquí</p>\r\n      <h3 color=\"secondary\" class=\"pdt-price\">$ 45.00</h3>\r\n      <ion-button fill=\"solid\" class=\"cart-btn\">\r\n        Add to cart\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item> -->\r\n  <!-- <ion-item>\r\n    <div class=\"pdt-quantity\" slot=\"start\">\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text class=\"m-8\" color=\"secondary\">2</ion-text>\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"../../assets/images/pdt2.png\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">Lorem ipsum dolor sit amet unde omnis</h3>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">[Descripción Empaque]</h3>\r\n      <p color=\"tertiary\" class=\"pdt-description\">Detalles se incluyen aquí</p>\r\n      <h3 color=\"secondary\" class=\"pdt-price\">$ 100.00</h3>\r\n      <ion-button fill=\"solid\" class=\"cart-btn\">\r\n        Add to cart\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item> -->\r\n  <!-- <ion-item>\r\n    <div class=\"pdt-quantity\" slot=\"start\">\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text class=\"m-8\" color=\"secondary\">2</ion-text>\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"../../assets/images/pdt3.png\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">Lorem ipsum dolor sit amet unde omnis</h3>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">[Descripción Empaque]</h3>\r\n      <p color=\"tertiary\" class=\"pdt-description\">Detalles se incluyen aquí</p>\r\n      <h3 color=\"secondary\" class=\"pdt-price\">$ 85.00</h3>\r\n      <ion-button fill=\"solid\" class=\"cart-btn\">\r\n        Add to cart\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item> -->\r\n  <!-- <ion-item>\r\n    <div class=\"pdt-quantity\" slot=\"start\">\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text class=\"m-8\" color=\"secondary\">2</ion-text>\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"../../assets/images/pdt1.png\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">Lorem ipsum dolor sit amet unde omnis</h3>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">[Descripción Empaque]</h3>\r\n      <p color=\"tertiary\" class=\"pdt-description\">Detalles se incluyen aquí</p>\r\n      <h3 color=\"secondary\" class=\"pdt-price\">$ 45.00</h3>\r\n      <ion-button fill=\"solid\" class=\"cart-btn\">\r\n        Add to cart\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item> -->\r\n  <!-- <ion-item>\r\n    <div class=\"pdt-quantity\" slot=\"start\">\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text class=\"m-8\" color=\"secondary\">2</ion-text>\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"../../assets/images/pdt2.png\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">Lorem ipsum dolor sit amet unde omnis</h3>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">[Descripción Empaque]</h3>\r\n      <p color=\"tertiary\" class=\"pdt-description\">Detalles se incluyen aquí</p>\r\n      <h3 color=\"secondary\" class=\"pdt-price\">$ 100.00</h3>\r\n      <ion-button fill=\"solid\" class=\"cart-btn\">\r\n        Add to cart\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item> -->\r\n  <!-- <ion-item>\r\n    <div class=\"pdt-quantity\" slot=\"start\">\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text class=\"m-8\" color=\"secondary\">2</ion-text>\r\n      <ion-button fill=\"outline\" class=\"add-btn\">\r\n        <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"../../assets/images/pdt3.png\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">Lorem ipsum dolor sit amet unde omnis</h3>\r\n      <h3 class=\"pdt-name\" color=\"secondary\">[Descripción Empaque]</h3>\r\n      <p color=\"tertiary\" class=\"pdt-description\">Detalles se incluyen aquí</p>\r\n      <h3 color=\"secondary\" class=\"pdt-price\">$ 85.00</h3>\r\n      <ion-button fill=\"solid\" class=\"cart-btn\">\r\n        Add to cart\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item> -->\r\n</ion-list>\r\n<!-- </ion-content> -->\r\n<div class=\"loader\" *ngIf=\"loading\" ></div>");

/***/ }),

/***/ 5974:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\" defaultHref=\"home\"></ion-back-button>      \r\n    </ion-buttons>\r\n    <!-- <ion-title>{{categoriName}}</ion-title> -->\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button routerLink=\"/shopping-cart\">\r\n        <ion-icon slot=\"icon-only\" name=\"cart-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text color=\"secondary\" class=\"cart-price\" routerLink=\"/shopping-cart\">\r\n        RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-text>\r\n     </ion-buttons> -->\r\n     <ion-searchbar showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\" class=\"search-bar\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/shopping-cart\" color=\"primary\" fill=\"solid\" class=\"round-btn\">\r\n        <ion-icon name=\"cart-outline\" class=\"mr-1\"></ion-icon>RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-button>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <!-- <app-product-category [subCategories]=\"subCategories\"></app-product-category>\r\n <app-product-list [products]=\"products\"></app-product-list> -->\r\n\r\n  <app-product-category [subCategories]=\"subCategories\" *ngIf='subCategories.length ===0 && products.length>0' hidden></app-product-category>\r\n  <app-product-category [subCategories]=\"subCategories\" *ngIf='subCategories.length ===0 && products.length===0'></app-product-category>\r\n <app-product-category [subCategories]=\"subCategories\" *ngIf='subCategories.length >0'></app-product-category>\r\n <app-product-list [products]=\"products\" *ngIf='products.length===0' hidden></app-product-list>\r\n <app-product-list [products]=\"products\" *ngIf='products.length >0'></app-product-list> \r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_products_products_module_ts.js.map
(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 5089);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 9460);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 4226);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _services_landingPageServices_landing_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/landingPageServices/landing-page.service */ 5558);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cartServices/cart.service */ 1136);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/storage */ 2755);
/* harmony import */ var _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authServices/auth.service */ 1424);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/constants */ 1830);











let HomePage = class HomePage {
    constructor(landingPageService, router, sanitizer, cartService, authService) {
        this.landingPageService = landingPageService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.cartService = cartService;
        this.authService = authService;
        this.widthSize = window.innerWidth;
        this.languageJson = {
            homePage: {
                spanish: {
                    titlemsg: 'Orden rápida',
                    subtitle: 'Sugerencias basadas en tu orden anterior',
                    quickbutton: 'Añadir Todo',
                    addbutton: 'Añadir',
                    promo: 'Promociones',
                    categories: 'Categorías',
                    catlist: 'Lista de las categorías de productos disponibles',
                    search: 'Buscar productos',
                    nextSlide: 'Siguiente',
                    prevSlide: 'Anterior'
                },
                english: {
                    titlemsg: 'Quick order',
                    subtitle: 'Suggestions based on your previous order',
                    quickbutton: 'Add all',
                    addbutton: 'Add',
                    promo: 'Promotions',
                    categories: 'Categories',
                    catlist: 'List of available product categories',
                    search: 'Search for products',
                    nextSlide: 'Next',
                    prevSlide: 'Prev'
                }
            }
        };
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
        };
        this.sliderContainerOpts = {
            slidesPerView: 'auto',
            zoom: false,
            grabCursor: true,
        };
        this.loading = false;
        this.categories = [];
        this.easyOrderProducts = [];
        this.banners = [];
        // public disableCart = true;
        this.disableEasyOrderButton = true;
        this.position = 10;
        this.heightScreen = window.innerHeight;
        this.getUserData();
        console.log(localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_6__.LANGUAGE));
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_6__.LANGUAGE);
    }
    slidePrev() {
        this.slides.slidePrev();
    }
    slideNext() {
        this.slides.slideNext();
    }
    ngOnInit() {
        this.getCategories();
        this.getCartDetails();
        this.getEasyOrderDetails();
        this.getAllBanners();
    }
    getAllAccountsUnderUser() {
        this.authService.getAllAccountsUnderUser(this.userData.id).subscribe((res) => {
            console.log('easy', res);
            if (res.result.status_response === '200 OK') {
                console.log('updateAccountsUnderUser', res.result.data);
                this.authService.updateAccountsUnderUser(res.result.data);
            }
        }, (error) => {
            console.error('error', error);
        });
    }
    getEasyOrderDetails() {
        this.landingPageService.getEasyOrder().subscribe((res) => {
            console.log('easy', res);
            if (res.result.status_response === '200 OK') {
                console.log('easy', res);
                this.easyOrderProducts = res.result.data.products;
                this.disableEasyOrderButton = true;
                this.easyOrderProducts.forEach((element) => {
                    console.log('Number', Number(element.order_easy_qty));
                    if (Number(element.order_easy_qty) > 0) {
                        this.disableEasyOrderButton = false;
                    }
                });
                console.log('disableEasyOrderButton', this.disableEasyOrderButton);
                this.resetProducts = JSON.parse(JSON.stringify(this.easyOrderProducts));
                console.log('easyOrderProducts', this.easyOrderProducts);
            }
        }, (error) => {
            console.error('error', error);
        });
    }
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.get({ key: 'userData' });
            this.userData = JSON.parse(value);
            console.log('userData', this.userData);
            this.getAllAccountsUnderUser();
        });
    }
    getCartDetails() {
        this.cartService.getItemsInCart().subscribe((updated) => {
            if (updated.result.status_response === '200 OK') {
                console.log('cart', updated.result.data.order.amount_total);
                this.cartService.updateTotalAmount(updated.result.data.order.amount_total);
            }
        }, (error) => {
            console.log('error', error);
            if (error.error.result.error.message === 'There are no items in the cart.') {
                this.cartService.updateTotalAmount(0);
            }
        });
    }
    getAllBanners() {
        this.loading = true;
        this.landingPageService.getBanners('/main_page').subscribe((response) => {
            console.log('response', response);
            this.loading = false;
            if (response.result.status_response === '200 OK') {
                this.banners = response.result.data;
                console.log('banners', this.banners);
            }
        }, (error) => {
            this.loading = false;
            console.log('error', error);
        });
    }
    getCategories() {
        this.loading = true;
        this.landingPageService.getProductCategories().subscribe((response) => {
            console.log('response', response);
            this.loading = false;
            if (response.result.status_response === '200 OK') {
                this.categories = response.result.data.categories;
            }
        }, (error) => {
            this.loading = false;
            console.log('error', error);
        });
    }
    gotoPdtCategory(id, name) {
        this.loading = true;
        this.landingPageService.getSubProductCategories(id).subscribe((response) => {
            console.log('response', response);
            if (response) {
                this.landingPageService.getProductsByCategories(id).subscribe((res) => {
                    console.log('products', res);
                    this.loading = false;
                    if (res) {
                        const navigationExtras = {
                            state: {
                                data: response,
                                products: res,
                                categoriName: name,
                            },
                        };
                        this.router.navigate(['products/products'], navigationExtras);
                    }
                }, (error) => {
                    this.loading = false;
                    console.log('error', error);
                });
            }
        }, (error) => {
            this.loading = false;
            console.log('error', error);
        });
    }
    increaseProductCount(product) {
        const changed = this.cartService.increaseProductCount(product, this.easyOrderProducts);
        if (changed) {
            this.easyOrderProducts = changed;
            console.log('easyOrderProducts', this.easyOrderProducts);
            this.disableEasyOrderButton = true;
            changed.forEach((element) => {
                console.log('Number', Number(element.order_easy_qty));
                if (Number(element.order_easy_qty) > 0) {
                    this.disableEasyOrderButton = false;
                }
            });
            console.log('disableEasyOrderButton', this.disableEasyOrderButton);
        }
    }
    decreaseProductCount(product) {
        const changed = this.cartService.decreaseProductCount(product, this.easyOrderProducts);
        if (changed) {
            this.easyOrderProducts = changed;
            console.log('easyOrderProducts', this.easyOrderProducts);
            this.disableEasyOrderButton = true;
            changed.forEach((element) => {
                console.log('Number', Number(element.order_easy_qty));
                if (Number(element.order_easy_qty) > 0) {
                    this.disableEasyOrderButton = false;
                }
            });
            console.log('disableEasyOrderButton', this.disableEasyOrderButton);
        }
    }
    addToCart(product, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (product.order_easy_qty > 0) {
                this.loading = true;
                this.cartService.addToCart(product, 'compound').subscribe((res) => {
                    this.loading = false;
                    if (res) {
                        this.easyOrderProducts[index] = JSON.parse(JSON.stringify(this.resetProducts))[index];
                    }
                }, (error) => {
                    console.log('error', error);
                    this.loading = false;
                });
            }
        });
    }
    placeEasyOrder(easyOrderProducts) {
        console.log('easyOrderProducts', easyOrderProducts);
        this.loading = true;
        this.cartService.addEasyOrderToCart(easyOrderProducts).subscribe((res) => {
            this.loading = false;
            if (res.result.status_response === '200 OK') {
                console.log('res', res);
                this.getCartDetails();
            }
        }, (error) => {
            console.error('error', error);
            this.loading = false;
        });
    }
    ngOnDestroy() {
        // this.language = null;
        // localStorage.removeItem('LANGUAGE'); //correct
        // localStorage.removeItem('$$language$$'); //correct
        // localStorage.removeItem(LANGUAGE);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_landingPageServices_landing_page_service__WEBPACK_IMPORTED_MODULE_2__.LandingPageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer },
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService }
];
HomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['slides', { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-title {\n  font-family: \"Nunito Sans\";\n}\n\nion-header {\n  --background: #fbfbfb;\n}\n\n.header-md::after {\n  background-image: none;\n}\n\nion-content {\n  --background: #f3f3f3;\n  top: -16px;\n}\n\nion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n}\n\nion-toolbar {\n  border-radius: 0 0 24px 24px;\n  padding-top: 8px;\n  padding-bottom: 4px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.cart-price {\n  width: auto;\n  border: 1px solid #84ca08;\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: 600;\n  color: #333652;\n  font-size: 10px;\n  position: absolute;\n  top: 2px;\n  right: 8px;\n  z-index: 100;\n  background-color: transparent;\n}\n\n.cart-price:after {\n  content: \"\";\n  position: absolute;\n  top: 95%;\n  right: 16px;\n  border-top: 0px solid #333652;\n  border-top-color: inherit;\n  border-left: 10px solid transparent;\n  border-right: 0px solid transparent;\n}\n\nion-thumbnail {\n  /* margin-top: 10px; */\n  /* margin-bottom: 20px; */\n  width: 80px;\n  height: 130px;\n  --padding-start: 8px;\n  margin-inline-end: 30px;\n}\n\nion-label {\n  margin-top: -44px;\n}\n\n.cart-btn {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  height: 36px;\n  --border-radius: 6px;\n  width: 92%;\n  bottom: 10px;\n  position: absolute;\n}\n\n.swiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  min-width: 80px;\n  min-height: 80px;\n}\n\n.main-promo {\n  display: flex;\n  justify-content: space-around;\n}\n\n.arrow-slider {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.arrow {\n  margin: 0px 5px;\n  color: #6b6b6b;\n  cursor: pointer;\n}\n\n.arrow-text {\n  font-size: 14px;\n  color: #6b6b6b;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.container-arrow-slider {\n  font-size: 22px;\n  display: flex;\n  align-items: center;\n}\n\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 30px;\n  left: 0;\n  width: 100%;\n}\n\n.slider-container {\n  display: flex;\n}\n\n@media (min-width: 600px) {\n  .search-bar {\n    display: flex;\n    justify-content: flex-end;\n    margin: 0px 0px 0px auto;\n    width: 40%;\n  }\n\n  .item-of-category {\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLDBCQUFBO0FBRUY7O0FBUUE7RUFDRSxxQkFBQTtBQUxGOztBQU9BO0VBQ0Usc0JBQUE7QUFKRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQUhGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUlBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0ZBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0FBQUY7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0UseUJBQUE7RUFJUSxpQkFBQTtBQU9aOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUpBO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0FBUUY7O0FBTkE7RUFDRTtJQUNFLGFBQUE7SUFDQSx5QkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQVNGOztFQVBBO0lBQ0UsZUFBQTtFQVVGO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xyXG59XHJcbi8vIGlvbi10aHVtYm5haWwge1xyXG4vLyAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuLy8gICB3aWR0aDogODBweDtcclxuLy8gICBoZWlnaHQ6IDExMHB4O1xyXG4vLyAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4vLyAgIG1hcmdpbi1pbmxpbmUtZW5kOiAzMHB4O1xyXG4vLyB9XHJcbmlvbi1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gIHRvcDogLTE2cHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMHB4O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMjRweCAyNHB4O1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBib3gtc2hhZG93OiByZ2IoNTAgNTAgOTMgLyAyNSUpIDBweCAycHggNXB4IC0xcHgsXHJcbiAgICByZ2IoMCAwIDAgLyAzMCUpIDBweCAxcHggM3B4IC0xcHg7XHJcbn1cclxuLmNhcnQtcHJpY2Uge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NGNhMDg7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzMzNjUyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgcmlnaHQ6IDhweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmNhcnQtcHJpY2U6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOTUlO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjMzMzNjUyO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLXRodW1ibmFpbCB7XHJcbiAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cclxuICAvKiBtYXJnaW4tYm90dG9tOiAyMHB4OyAqL1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMwcHg7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAtNDRweDtcclxufVxyXG5cclxuLmNhcnQtYnRuIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2lkdGg6IDkyJTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zd2lwZXItc2xpZGUgaW1nIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuLm1haW4tcHJvbW97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uYXJyb3ctc2xpZGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYXJyb3d7XHJcbiAgbWFyZ2luOiAwcHggNXB4O1xyXG4gIGNvbG9yOiAjNmI2YjZiO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYXJyb3ctdGV4dHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM2YjZiNmI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgXHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgXHJcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyBcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IFxyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbn1cclxuLmNvbnRhaW5lci1hcnJvdy1zbGlkZXJ7XHJcbiAgZm9udC1zaXplOiAyMnB4OyBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zbGlkZXItY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAuc2VhcmNoLWJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgLml0ZW0tb2YtY2F0ZWdvcnl7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" auto-hide=\"false\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-searchbar showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\" class=\"search-bar\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"../shopping-cart\" color=\"primary\" fill=\"solid\" class=\"round-btn\">\r\n        <ion-icon name=\"cart-outline\" class=\"mr-1\"></ion-icon>RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-button>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ng-container *ngFor=\"let banner of banners;let i=index\">\r\n      \r\n    <ion-slide>\r\n      <!-- <img [src]=\"banner.image ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n      + banner.image) : '../../assets/images/banner1.png' \"> -->\r\n      <cached-img [src]=\"{imageUrl: banner.image_url, imageHash: banner.image_hash}\" [spinner]=\"false\"></cached-img>\r\n    </ion-slide>\r\n    \r\n    </ng-container>\r\n   \r\n  </ion-slides>\r\n  <div class=\"previous-order-conatiner\">\r\n    <div class=\"ion-padding-horizontal ion-padding-top ion-text-left\">\r\n      <!-- <h2 class=\"wel-msg\">Orden rápida</h2> -->\r\n      <h2 class=\"wel-msg\"> {{language === 'English' ? languageJson.homePage.english.titlemsg : languageJson.homePage.spanish.titlemsg}} </h2>     \r\n      <p class=\"wel-submsg\">{{language === 'English' ? languageJson.homePage.english.subtitle : languageJson.homePage.spanish.subtitle}} </p>\r\n      <!-- <ion-button [disabled]=\"disableEasyOrderButton\" slot=\"end\" fill=\"clear\" (click)=\"placeEasyOrder(easyOrderProducts)\"   class=\"view-btn\" >{{language === 'English' ? languageJson.homePage.english.quickbutton : languageJson.homePage.spanish.quickbutton}}\r\n        <ion-icon slot=\"start\" name=\"add-circle-outline\" style=\"margin-top: -5px;\"></ion-icon>\r\n      </ion-button> -->\r\n      <!-- <ion-button slot=\"end\" fill=\"clear\" (click)=\"placeEasyOrder(easyOrderProducts)\" class=\"view-btn\" *ngIf = \"this.cartService.getTotal()._value != 0\">Añadir Todo\r\n        <ion-icon slot=\"start\" name=\"add-circle-outline\" style=\"margin-top: -5px;\"></ion-icon>\r\n      </ion-button> -->\r\n    </div>\r\n    <div class=\"slider-container\">\r\n      <div class=\"container-arrow-slider\" (click)=\"slidePrev()\" *ngIf=\"easyOrderProducts.length > 0\">\r\n        <ion-icon name=\"chevron-back-outline\" class=\"arrow\"></ion-icon>\r\n      </div>\r\n      <ion-slides [options]=\"sliderContainerOpts\" #slides class=\"m-6\" (ionSlidesDidLoad)=\"slidesLoaded($event)\" pager=\"true\">\r\n        <ng-container *ngFor=\"let easyOrderProduct of easyOrderProducts;let i=index\">\r\n        <ion-slide class=\"pdt-slider\">\r\n          <ion-card class=\"pdt-card\">\r\n            <ion-item>\r\n              <div class=\"pdt-quantity\" slot=\"start\">\r\n                <ion-button fill=\"outline\" class=\"add-btn\" (click)=\"decreaseProductCount(easyOrderProduct)\">\r\n                  <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n                </ion-button>\r\n                <ion-text class=\"m-8\" color=\"primary\">{{easyOrderProduct?.order_easy_qty}}</ion-text>\r\n                <ion-button fill=\"outline\" class=\"add-btn\" (click)=\"increaseProductCount(easyOrderProduct)\">\r\n                  <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n              <ion-thumbnail slot=\"start\">\r\n                <img [src]=\"easyOrderProduct.image ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n                + easyOrderProduct.image) : '../../assets/images/pdt1.png' \">            \r\n              </ion-thumbnail>\r\n              <ion-label>\r\n              <h3 class=\"pdt-name\" color=\"secondary\">{{easyOrderProduct?.name}}</h3>\r\n                <h3 class=\"pdt-name\" color=\"secondary\">\r\n                  <!-- [Descripción Empaque] -->\r\n                </h3>\r\n                <p color=\"tertiary\" class=\"pdt-description\">\r\n                  <!-- Detalles se incluyen aquí -->\r\n                </p>\r\n                <h3 color=\"secondary\" class=\"pdt-price\">{{easyOrderProduct?.currencySymbol}} {{easyOrderProduct?.price | number:'1.0':'en-US'}}</h3>\r\n                <ion-button fill=\"solid\" class=\"cart-btn\" color=\"secondary\" (click)=\"addToCart(easyOrderProduct, i)\">\r\n                  {{language === 'English' ? languageJson.homePage.english.addbutton : languageJson.homePage.spanish.addbutton}}\r\n                </ion-button>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-slide>\r\n        </ng-container>\r\n       \r\n      \r\n        <!-- <ion-slide class=\"pdt-slider\">\r\n          <ion-card class=\"pdt-card\">\r\n            <ion-item>\r\n              <div class=\"pdt-quantity\" slot=\"start\">\r\n                <ion-button fill=\"outline\" class=\"add-btn\">\r\n                  <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n                </ion-button>\r\n                <ion-text class=\"m-8\" color=\"primary\">2</ion-text>\r\n                <ion-button fill=\"outline\" class=\"add-btn\">\r\n                  <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n              <ion-thumbnail slot=\"start\">\r\n                <img src=\"../../assets/images/pdt2.png\">\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                <h3 class=\"pdt-name\" color=\"secondary\">Descripción del Producto</h3>\r\n                <h3 class=\"pdt-name\" color=\"secondary\">[Descripción Empaque]</h3>\r\n                <p color=\"tertiary\" class=\"pdt-description\">Detalles se incluyen aquí</p>\r\n                <h3 color=\"secondary\" class=\"pdt-price\">$ 100.00</h3>\r\n                <ion-button fill=\"solid\" class=\"cart-btn\" color=\"secondary\">\r\n                  Añadir\r\n                </ion-button>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-slide> -->\r\n        <!-- <ion-slide class=\"pdt-slider\">\r\n          <ion-card class=\"pdt-card\">\r\n            <ion-item>\r\n              <div class=\"pdt-quantity\" slot=\"start\">\r\n                <ion-button fill=\"outline\" class=\"add-btn\" color=\"primary\">\r\n                  <ion-icon slot=\"end\" name=\"remove-outline\"></ion-icon>\r\n                </ion-button>\r\n                <ion-text class=\"m-8\" color=\"primary\">2</ion-text>\r\n                <ion-button fill=\"outline\" class=\"add-btn\" color=\"primary\">\r\n                  <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n              <ion-thumbnail slot=\"start\">\r\n                <img src=\"../../assets/images/pdt3.png\">\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                <h3 class=\"pdt-name\" color=\"secondary\">Descripción del Producto</h3>\r\n                <h3 class=\"pdt-name\" color=\"secondary\">[Descripción Empaque]</h3>\r\n                <p color=\"tertiary\" class=\"pdt-description\">Detalles se incluyen aquí</p>\r\n                <h3 color=\"secondary\" class=\"pdt-price\">$ 85.00</h3>\r\n                <ion-button fill=\"solid\" class=\"cart-btn\" color=\"secondary\">\r\n                  Añadir\r\n                </ion-button>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-slide> -->\r\n      </ion-slides>\r\n      <div class=\"container-arrow-slider\" (click)=\"slideNext()\" *ngIf=\"easyOrderProducts.length > 0\">\r\n        <ion-icon name=\"chevron-forward-outline\" class=\"arrow\"></ion-icon>\r\n      </div>\r\n    \r\n    </div>\r\n    \r\n    <!-- <ion-button class=\"ion-margin\" fill=\"solid\" color=\"primary\" expand=\"block\">VER TODO LO SUGERIDO\r\n    </ion-button> -->\r\n  </div>\r\n  <div class=\"categories-conatiner\">\r\n    <div class=\"ion-padding ion-text-left\">\r\n      <h2 class=\"wel-msg\">{{language === 'English' ? languageJson.homePage.english.promo : languageJson.homePage.spanish.promo}}</h2>\r\n      <!-- <p class=\"wel-submsg\">Lista de las categorías de productos disponibles</p> -->\r\n    </div>\r\n    <ion-grid class=\"p-8\">\r\n      <ion-row class=\"ion-no-padding main-promo\">\r\n        <ng-container *ngFor=\"let categorie of categories;let i=index\">\r\n          <ng-container  *ngIf=\"i<=2\">\r\n        <ion-col size=\"4\" size-lg=\"3\" (click)=\"gotoPdtCategory(categorie.id, categorie.name)\" class=\"ion-padding\">\r\n            <img [src]=\"categorie.image ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n            + categorie.image) : '../../assets/images/1.jpg' \"  class=\"cat-card\">\r\n        </ion-col>\r\n        </ng-container>\r\n        </ng-container>\r\n        <!-- <ion-col size=\"4\"  class=\"ion-padding\">\r\n            <img src=\"../../assets/images/promotions.png\" class=\"cat-card\">\r\n        </ion-col>\r\n        <ion-col size=\"4\"  class=\"ion-padding\">\r\n            <img src=\"../../assets/images/promotions.png\" class=\"cat-card\">\r\n        </ion-col> -->\r\n       </ion-row>\r\n       </ion-grid>\r\n    </div>\r\n  <div class=\"previous-order-conatiner\">\r\n    <div class=\"ion-padding-horizontal ion-padding-top ion-text-left\">\r\n      <h2 class=\"wel-msg\">{{language === 'English' ? languageJson.homePage.english.categories : languageJson.homePage.spanish.categories}}</h2>\r\n      <p class=\"wel-submsg\">{{language === 'English' ? languageJson.homePage.english.catlist : languageJson.homePage.spanish.catlist}}</p>\r\n    </div>\r\n    <ion-grid class=\"p-8\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ng-container *ngFor=\"let categorie of categories;let i=index\">\r\n          <ng-container  *ngIf=\"i>2\">\r\n        <ion-col size=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"2\" class=\"ion-padding item-of-category\" (click)=\"gotoPdtCategory(categorie.id, categorie.name)\">\r\n          <!-- <ion-card class=\"ion-no-padding\" (click)=\"gotoPdtCategory(categorie.id, categorie.name)\">\r\n            <ion-card-content class=\"ion-no-padding\"> -->\r\n              <img [src]=\"categorie.image ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n              + categorie.image) : '../../assets/images/1.jpg' \" class=\"cat-card\">\r\n              <!-- <h2 class=\"card-caption\" color=\"secondary\">{{categorie.name}}</h2> -->\r\n            <!-- </ion-card-content>\r\n          </ion-card> -->\r\n        </ion-col>\r\n      </ng-container>\r\n      </ng-container>\r\n        <!-- <ion-col size=\"6\" class=\"p-8\">\r\n          <ion-card class=\"ion-no-padding cat-card\">\r\n            <ion-card-content class=\"ion-no-padding\">\r\n              <img src=\"../../assets/images/promotions.png\">\r\n              <h2 class=\"card-caption\" color=\"secondary\">Promotions</h2>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col> -->\r\n        <!-- <ion-col size=\"6\" class=\"p-8\">\r\n          <ion-card class=\"ion-no-padding cat-card\" (click)=\"gotoPdtCategory()\">\r\n            <ion-card-content class=\"ion-no-padding\">\r\n              <img src=\"../../assets/images/1.jpg\">\r\n              <h2 class=\"card-caption\" color=\"secondary\">Mc.Donells'</h2>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col> -->\r\n        <!-- <ion-col size=\"6\" class=\"p-8\">\r\n          <ion-card class=\"ion-no-padding cat-card\" (click)=\"gotoPdtCategory()\">\r\n            <ion-card-content class=\"ion-no-padding\">\r\n              <img src=\"../../assets/images/2.jpg\">\r\n              <h2 class=\"card-caption\" color=\"secondary\">Jageemeifier</h2>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col> -->\r\n        <!-- <ion-col size=\"6\" class=\"p-8\">\r\n          <ion-card class=\"ion-no-padding cat-card\" (click)=\"gotoPdtCategory()\">\r\n            <ion-card-content class=\"ion-no-padding\">\r\n              <img src=\"../../assets/images/3.jpg\">\r\n              <h2 class=\"card-caption\" color=\"secondary\">Sappaire</h2>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col> -->\r\n        <!-- <ion-col size=\"6\" class=\"p-8\">\r\n          <ion-card class=\"ion-no-padding cat-card\" (click)=\"gotoPdtCategory()\">\r\n            <ion-card-content class=\"ion-no-padding\">\r\n              <img src=\"../../assets/images/4.jpg\">\r\n              <h2 class=\"card-caption\" color=\"secondary\">Hennessy</h2>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col> -->\r\n        <!-- <ion-col size=\"6\" class=\"p-8\">\r\n          <ion-card class=\"ion-no-padding cat-card\" (click)=\"gotoPdtCategory()\">\r\n            <ion-card-content class=\"ion-no-padding\">\r\n              <img src=\"../../assets/images/5.jpg\">\r\n              <h2 class=\"card-caption\" color=\"secondary\">Ksiazece</h2>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col> -->\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n<div class=\"loader\" *ngIf=\"loading\" ></div>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map
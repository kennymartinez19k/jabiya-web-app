(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["src_app_promotions_promotions_module_ts"],{

/***/ 2267:
/*!*********************************************************!*\
  !*** ./src/app/promotions/promotions-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionsPageRoutingModule": () => (/* binding */ PromotionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _promotions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotions.page */ 9320);




const routes = [
    {
        path: '',
        component: _promotions_page__WEBPACK_IMPORTED_MODULE_0__.PromotionsPage
    }
];
let PromotionsPageRoutingModule = class PromotionsPageRoutingModule {
};
PromotionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PromotionsPageRoutingModule);



/***/ }),

/***/ 3594:
/*!*************************************************!*\
  !*** ./src/app/promotions/promotions.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionsPageModule": () => (/* binding */ PromotionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _promotions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotions-routing.module */ 2267);
/* harmony import */ var _promotions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotions.page */ 9320);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 4226);








let PromotionsPageModule = class PromotionsPageModule {
};
PromotionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _promotions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromotionsPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [_promotions_page__WEBPACK_IMPORTED_MODULE_1__.PromotionsPage]
    })
], PromotionsPageModule);



/***/ }),

/***/ 9320:
/*!***********************************************!*\
  !*** ./src/app/promotions/promotions.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionsPage": () => (/* binding */ PromotionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_promotions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./promotions.page.html */ 8839);
/* harmony import */ var _promotions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotions.page.scss */ 3484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _services_landingPageServices_landing_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/landingPageServices/landing-page.service */ 5558);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cartServices/cart.service */ 1136);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/constants */ 1830);









let PromotionsPage = class PromotionsPage {
    constructor(landingPageService, cartService, sanitizer, router) {
        this.landingPageService = landingPageService;
        this.cartService = cartService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.languageJson = {
            promoPage: {
                spanish: {
                    promo: 'Promociones',
                    homeButton: 'Continuar Comprando',
                    description: 'Promociones: Existen 3 grandes promociones para hacer tu compra más comoda y económica'
                },
                english: {
                    promo: 'Promotions',
                    homeButton: 'Continue Shopping',
                    description: 'Promotions: There are 3 great promotions to make your purchase more comfortable and economical'
                }
            }
        };
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
        };
        this.loading = false;
        this.categories = [];
        this.banners = [];
        console.log(localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE));
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE);
    }
    ngOnInit() {
        this.getCategories();
        this.getAllBanners();
    }
    getAllBanners() {
        this.loading = true;
        this.landingPageService.getBanners('/discounts').subscribe((response) => {
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
};
PromotionsPage.ctorParameters = () => [
    { type: _services_landingPageServices_landing_page_service__WEBPACK_IMPORTED_MODULE_2__.LandingPageService },
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
PromotionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-promotions',
        template: _raw_loader_promotions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_promotions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PromotionsPage);



/***/ }),

/***/ 3484:
/*!*************************************************!*\
  !*** ./src/app/promotions/promotions.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".pdt-description {\n  font-weight: 600;\n  white-space: pre-wrap;\n}\n\n@media (min-width: 600px) {\n  .list-items {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n\n  .items {\n    width: 48%;\n    cursor: pointer;\n  }\n\n  .btn-item {\n    margin: 0px 25px 20px auto;\n    width: 28%;\n    max-width: 250px;\n  }\n\n  .search-bar {\n    display: flex;\n    justify-content: flex-end;\n    margin: 0px 0px 0px auto;\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21vdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxlQUFBO0VBQUY7O0VBRUE7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQUNGOztFQUNBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUFFRjs7RUFBQTtJQUNFLGFBQUE7SUFDQSx5QkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoicHJvbW90aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGR0LWRlc2NyaXB0aW9uIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5saXN0LWl0ZW1ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLml0ZW1ze1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmJ0bi1pdGVte1xyXG4gICAgbWFyZ2luOiAwcHggMjVweCAyMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgLnNlYXJjaC1iYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggYXV0bztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ 8839:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promotions/promotions.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-searchbar showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\" class=\"search-bar\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"../shopping-cart\" color=\"primary\" fill=\"solid\" class=\"round-btn\">\r\n        <ion-icon name=\"cart-outline\" class=\"mr-1\"></ion-icon>RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-button>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <h2 class=\"pdt-name ion-margin\">{{language === 'English' ? languageJson.promoPage.english.promo :\r\n    languageJson.promoPage.spanish.promo}}</h2>\r\n    <p class=\"wel-submsg ion-margin\">{{language === 'English' ? languageJson.promoPage.english.description :\r\n      languageJson.promoPage.spanish.description}}</p>\r\n\r\n  <ion-list class=\"list-items\">\r\n    <ng-container *ngFor=\"let categorie of categories;let i=index\">\r\n      <ng-container *ngIf=\"i<=2\">\r\n        <ion-item (click)=\"gotoPdtCategory(categorie.id, categorie.name)\" class=\"items\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img [src]=\"categorie.image ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n            + categorie.image) : '../../assets/images/1.jpg' \">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{categorie.name}}\r\n            </p>\r\n            <p class=\"wel-submsg\">{{categorie.description}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ion-list>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ng-container *ngFor=\"let banner of banners;let i=index\">\r\n    <ion-slide>\r\n      <!-- <img [src]=\"banner.image ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n      + banner.image) : '../../assets/images/banner1.png' \"> -->\r\n      <cached-img [src]=\"{imageUrl: banner.image_url, imageHash: banner.image_hash}\" [spinner]=\"false\"></cached-img>\r\n    </ion-slide>\r\n    </ng-container>\r\n  </ion-slides>\r\n  <ion-button routerLink=\"../home\" size=\"default\" color=\"primary\" expand=\"block\" class=\"ion-margin btn-item\">\r\n    {{language === 'English' ? languageJson.promoPage.english.homeButton : languageJson.promoPage.spanish.homeButton}}\r\n  </ion-button>\r\n</ion-content>\r\n<div class=\"loader\" *ngIf=\"loading\" ></div>");

/***/ })

}]);
//# sourceMappingURL=src_app_promotions_promotions_module_ts.js.map
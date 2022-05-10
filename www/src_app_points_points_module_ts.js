(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["src_app_points_points_module_ts"],{

/***/ 7991:
/*!*****************************************************!*\
  !*** ./src/app/points/history/history.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./history.component.html */ 2900);
/* harmony import */ var _history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.component.scss */ 2280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/constants */ 1830);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cartServices/cart.service */ 1136);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);







let HistoryComponent = class HistoryComponent {
    constructor(cartService, routerOutlet) {
        this.cartService = cartService;
        this.routerOutlet = routerOutlet;
        this.languageJson = {
            pointsHistoryPage: {
                spanish: {
                    titlemsg: 'Tabla de historial de puntos',
                    orderNumber: 'Número de orden',
                    date: 'Fecha',
                    noOfPoints: 'No. de puntos',
                    totalPoints: 'Balance de puntos al día de hoy'
                },
                english: {
                    titlemsg: 'Points History Table',
                    orderNumber: 'Order Number',
                    date: 'Date',
                    noOfPoints: 'No. of Points',
                    totalPoints: 'Point Balance as of today'
                }
            }
        };
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE);
    }
    ngOnInit() {
        this.getPointsHistory();
    }
    goBack() {
        this.routerOutlet.pop();
    }
    getPointsHistory() {
        this.cartService.getPointsHistory().subscribe((res) => {
            if (res.result.status_response === '200 OK') {
                this.pointsHistoryData = res.result.data.history;
                this.partnerPoints = res.result.data.partner_loyalty_points;
                console.log('pointsHistoryData', this.pointsHistoryData);
            }
        }, (error) => {
            console.log('error', error);
        });
    }
};
HistoryComponent.ctorParameters = () => [
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRouterOutlet }
];
HistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-history',
        template: _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_history_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoryComponent);



/***/ }),

/***/ 7928:
/*!*************************************************!*\
  !*** ./src/app/points/points-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsPageRoutingModule": () => (/* binding */ PointsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history/history.component */ 7991);
/* harmony import */ var _points_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points.page */ 8869);






const routes = [
    {
        path: '',
        component: _points_page__WEBPACK_IMPORTED_MODULE_1__.PointsPage,
    },
    { path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_0__.HistoryComponent },
];
let PointsPageRoutingModule = class PointsPageRoutingModule {
};
PointsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_history_history_component__WEBPACK_IMPORTED_MODULE_0__.HistoryComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], PointsPageRoutingModule);



/***/ }),

/***/ 1134:
/*!*****************************************!*\
  !*** ./src/app/points/points.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsPageModule": () => (/* binding */ PointsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _points_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points-routing.module */ 7928);
/* harmony import */ var _points_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points.page */ 8869);







let PointsPageModule = class PointsPageModule {
};
PointsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _points_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointsPageRoutingModule],
        declarations: [_points_page__WEBPACK_IMPORTED_MODULE_1__.PointsPage],
    })
], PointsPageModule);



/***/ }),

/***/ 8869:
/*!***************************************!*\
  !*** ./src/app/points/points.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsPage": () => (/* binding */ PointsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_points_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./points.page.html */ 4820);
/* harmony import */ var _points_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points.page.scss */ 7059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/constants */ 1830);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cartServices/cart.service */ 1136);
/* harmony import */ var _services_landingPageServices_landing_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/landingPageServices/landing-page.service */ 5558);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 3220);








let PointsPage = class PointsPage {
    constructor(cartService, landingPageService, sanitizer) {
        this.cartService = cartService;
        this.landingPageService = landingPageService;
        this.sanitizer = sanitizer;
        this.languageJson = {
            pointsPage: {
                spanish: {
                    titlemsg: 'PUNTOS PARA CANJEAR',
                    subtitle: 'Puntos disponibles',
                    pointsDescription: 'Nota: Tus puntos se acreditan a tu cuenta al pagar las facturas después de entregadas.',
                    pointsHistorybutton: 'Ver Historia de Puntos',
                    bactToHomeButton: 'Continuar Comprando'
                },
                english: {
                    titlemsg: 'POINTS TO EXCHANGE',
                    subtitle: 'Available points',
                    pointsDescription: 'Your points are credited to your account when you pay your invoices',
                    pointsHistorybutton: 'See History',
                    bactToHomeButton: 'Continue Shopping'
                }
            }
        };
        this.banners = [];
        this.loading = false;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
        };
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE);
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getPoints();
        this.getAllBanners();
    }
    getPoints() {
        this.loading = true;
        this.cartService.getPointsCount().subscribe((res) => {
            console.log('res', res);
            this.loading = false;
            if (res.result.status_response === '200 OK') {
                this.pointsCount = res.result.data.points;
            }
        }, (error) => {
            this.loading = false;
            console.log('error', error);
        });
    }
    getAllBanners() {
        this.loading = true;
        this.landingPageService.getBanners('/points').subscribe((response) => {
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
};
PointsPage.ctorParameters = () => [
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _services_landingPageServices_landing_page_service__WEBPACK_IMPORTED_MODULE_4__.LandingPageService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer }
];
PointsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-points',
        template: _raw_loader_points_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_points_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PointsPage);



/***/ }),

/***/ 2280:
/*!*******************************************************!*\
  !*** ./src/app/points/history/history.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".pdt-name {\n  font-weight: 600;\n  white-space: pre-wrap;\n}\n\n.pdt-description {\n  font-weight: 500;\n  white-space: pre-wrap;\n}\n\n.primary-text {\n  color: #39b03e;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.text-underline {\n  text-decoration: underline;\n}\n\nion-title {\n  font-family: \"Nunito Sans\";\n  font-size: 16px;\n  margin-left: -20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-thumbnail {\n  margin-top: 0px;\n  margin-bottom: 8px;\n  width: 50px;\n  height: 70px;\n  --padding-start: 8px;\n  margin-inline-end: 8px;\n}\n\n.pdt-description {\n  padding-right: 16px;\n}\n\nion-item {\n  border-bottom: 2px solid #ebebeb;\n  --inner-border-width: 0 0 0 0;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #eee;\n}\n\n.bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 17px;\n}\n\n.green-text {\n  color: #2fdf75;\n}\n\n.red-text {\n  color: red;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.div-card {\n  border-bottom: 2px solid #ebebeb;\n  background-color: #fff;\n  padding: 0px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsMEJBQUE7QUFLRjs7QUFIQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSkE7RUFDRSxxQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtBQVVGOztBQVJBO0VBQ0UsNkJBQUE7QUFXRjs7QUFSQTtFQUNFLDJCQUFBO0FBV0Y7O0FBVEE7O0VBRUUsZUFBQTtBQVlGOztBQVZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBYUY7O0FBWEE7RUFDRSxjQUFBO0FBY0Y7O0FBWkE7RUFDRSxVQUFBO0FBZUY7O0FBYkE7RUFDRSxzQkFBQTtBQWdCRjs7QUFkQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWlCRiIsImZpbGUiOiJoaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBkdC1uYW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4ucGR0LWRlc2NyaXB0aW9uIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4ucHJpbWFyeS10ZXh0IHtcclxuICBjb2xvcjogIzM5YjAzZTtcclxufVxyXG4ubXQtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnRleHQtdW5kZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcbmlvbi10aHVtYm5haWwge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA4cHg7XHJcbn1cclxuLnBkdC1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmViZWI7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbn1cclxuLmJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbmgzLFxyXG5wIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5ncmVlbi10ZXh0IHtcclxuICBjb2xvcjogIzJmZGY3NTtcclxufVxyXG4ucmVkLXRleHQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmJnLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5kaXYtY2FyZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmViZWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwcHggOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 7059:
/*!*****************************************!*\
  !*** ./src/app/points/points.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".pdt-name {\n  font-weight: 600;\n  white-space: pre-wrap;\n}\n\n.pdt-description {\n  font-weight: 500;\n  white-space: pre-wrap;\n}\n\n.primary-text {\n  color: #39b03e;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.text-underline {\n  text-decoration: underline;\n}\n\n.d-inline {\n  display: flex;\n}\n\n.slider-img {\n  width: 100% !important;\n  padding: 10px;\n}\n\n@media (min-width: 600px) {\n  .img-point {\n    padding: 15px;\n  }\n\n  .btn-item {\n    margin: 0px 25px 20px auto;\n    width: 28%;\n    max-width: 250px;\n  }\n\n  .search-bar {\n    display: flex;\n    justify-content: flex-end;\n    margin: 0px 0px 0px auto;\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsMEJBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7QUFNRjs7QUFKQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQU9GOztBQUhBO0VBQ0M7SUFDRSxhQUFBO0VBTUQ7O0VBSkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQU9GOztFQUxBO0lBQ0UsYUFBQTtJQUNBLHlCQUFBO0lBQ0Esd0JBQUE7SUFDQSxVQUFBO0VBUUY7QUFDRiIsImZpbGUiOiJwb2ludHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBkdC1uYW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4ucGR0LWRlc2NyaXB0aW9uIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4ucHJpbWFyeS10ZXh0IHtcclxuICBjb2xvcjogIzM5YjAzZTtcclxufVxyXG4ubXQtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnRleHQtdW5kZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uZC1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNsaWRlci1pbWd7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAuaW1nLXBvaW50e1xyXG4gICBwYWRkaW5nOiAxNXB4O1xyXG4gfVxyXG4gIC5idG4taXRlbXtcclxuICAgIG1hcmdpbjogMHB4IDI1cHggMjBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIC5zZWFyY2gtYmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IGF1dG87XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ 2900:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/points/history/history.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\" (click)=\"goBack()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{language === 'English' ? languageJson.pointsHistoryPage.english.titlemsg : languageJson.pointsHistoryPage.spanish.titlemsg}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"../shopping-cart\" color=\"primary\" fill=\"solid\" class=\"round-btn\">\r\n        <ion-icon name=\"cart-outline\" class=\"mr-1\"></ion-icon>RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-padding border-bottom\">\r\n      <ion-col size=\"5\" class=\"ion-text-left\">\r\n        <h3 color=\"primary\" class=\"bold ion-no-margin\">{{language === 'English' ? languageJson.pointsHistoryPage.english.orderNumber : languageJson.pointsHistoryPage.spanish.orderNumber}}</h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-left\">\r\n        <h3 color=\"primary\" class=\"bold ion-no-margin\">{{language === 'English' ? languageJson.pointsHistoryPage.english.date : languageJson.pointsHistoryPage.spanish.date}}</h3>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-text-right\">\r\n        <h3 color=\"primary\" class=\"bold ion-no-margin\">{{language === 'English' ? languageJson.pointsHistoryPage.english.noOfPoints : languageJson.pointsHistoryPage.spanish.noOfPoints}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ng-container *ngFor=\"let pointsHistory of pointsHistoryData;let i=index\">\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"5\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">#{{pointsHistory.display_name}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description col-bottom ion-no-margin\">{{pointsHistory.date | date:'MMMM d, y' : '' : language === 'English' ? 'en' : 'es' }}</p>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <p color=\"tertiary\" class=\"pdt-description col-bottom ion-no-margin\">\r\n          <span class=\"{{pointsHistory.transaction_type === 'credit' ? 'green-text': 'red-text'}}\">{{pointsHistory.transaction_type === 'credit' ? '+' + pointsHistory.points : '-' + pointsHistory.points}}</span>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n  <ion-row class=\"ion-padding ion-margin-vertical\">\r\n    <ion-col size=\"6\" class=\"ion-text-left\">\r\n      <h3 color=\"primary\" class=\"bold ion-no-margin\">{{language === 'English' ? languageJson.pointsHistoryPage.english.totalPoints : languageJson.pointsHistoryPage.spanish.totalPoints}}</h3>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"ion-text-right\">\r\n      <h3 color=\"primary\" class=\"bold ion-no-margin\">{{partnerPoints}}</h3>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ }),

/***/ 4820:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/points/points.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-menu-button></ion-menu-button> -->\r\n      <ion-button routerLink=\"../home\" color=\"dark\" fill=\"clear\">\r\n        <ion-icon name=\"home-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\" class=\"search-bar\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"../shopping-cart\" color=\"primary\" fill=\"solid\" class=\"round-btn\">\r\n        <ion-icon name=\"cart-outline\" class=\"mr-1\"></ion-icon>RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding ion-margin-bottom\">\r\n    <h1 class=\"pdt-name\">{{language === 'English' ? languageJson.pointsPage.english.titlemsg : languageJson.pointsPage.spanish.titlemsg}}</h1>\r\n    <div class=\"d-inline\">\r\n    <h6 class=\"pdt-description\" color=\"secondary\">{{language === 'English' ? languageJson.pointsPage.english.subtitle : languageJson.pointsPage.spanish.subtitle}}</h6>\r\n    <h1 class=\"pdt-name primary-text mt-10 ion-margin-horizontal\">{{pointsCount  | number:'1.0':'en-US'}}</h1>\r\n    </div>\r\n    <p class=\"pdt-description\" color=\"secondary\">{{language === 'English' ? languageJson.pointsPage.english.pointsDescription : languageJson.pointsPage.spanish.pointsDescription}}</p>\r\n    <a class=\"pdt-description primary-text text-underline\" routerLink=\"../points/history\">{{language === 'English' ? languageJson.pointsPage.english.pointsHistorybutton : languageJson.pointsPage.spanish.pointsHistorybutton}}</a>\r\n  </div>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\"  class=\"img-point\">\r\n    <ng-container *ngFor=\"let banner of banners;let i=index\">\r\n      <ion-slide class=\"slider-img\">\r\n        <img [src]=\"banner.image ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' \r\n        + banner.image) : '../../assets/images/banner1.png' \">\r\n      </ion-slide>\r\n      </ng-container>\r\n  </ion-slides>\r\n  <ion-button routerLink=\"../home\" size=\"default\" color=\"primary\" expand=\"block\" class=\"ion-margin  btn-item\">\r\n    {{language === 'English' ? languageJson.pointsPage.english.bactToHomeButton : languageJson.pointsPage.spanish.bactToHomeButton}}\r\n  </ion-button>\r\n</ion-content>\r\n<div class=\"loader\" *ngIf=\"loading\" ></div>");

/***/ })

}]);
//# sourceMappingURL=src_app_points_points_module_ts.js.map
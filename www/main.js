(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);



const routes = [
    { path: '', redirectTo: 'authentication', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cartServices_cart_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 2711)).then((m) => m.HomePageModule),
    },
    {
        path: 'authentication',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 9173)).then((m) => m.AuthenticationPageModule),
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cartServices_cart_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 9078)).then((m) => m.ProductsPageModule),
    },
    {
        path: 'shopping-cart',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cartServices_cart_service_ts"), __webpack_require__.e("src_app_shopping-cart_shopping-cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shopping-cart/shopping-cart.module */ 5607)).then((m) => m.ShoppingCartPageModule),
    },
    {
        path: 'my-account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cartServices_cart_service_ts"), __webpack_require__.e("src_app_my-account_my-account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./my-account/my-account.module */ 7226)).then((m) => m.MyAccountPageModule),
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 7187)).then((m) => m.SettingsPageModule),
    },
    {
        path: 'points',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cartServices_cart_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_points_points_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./points/points.module */ 1134)).then((m) => m.PointsPageModule),
    },
    {
        path: 'promotions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cartServices_cart_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_promotions_promotions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./promotions/promotions.module */ 3594)).then(m => m.PromotionsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 2755);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authServices/auth.service */ 1424);
/* harmony import */ var _services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/jabiyaService/jabiya.service */ 596);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/constants */ 1830);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3305);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/filesystem */ 2679);













let AppComponent = class AppComponent {
    // public appLangauge: any;
    constructor(authService, 
    // private router: Router,
    jabiyaService, route, popoverController, router, menuCtrl) {
        this.authService = authService;
        this.jabiyaService = jabiyaService;
        this.route = route;
        this.popoverController = popoverController;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.widthSize = window.innerWidth;
        this.showSideBar = this.widthSize > 991;
        this.name = 'Get Current Url Route Demo';
        this.currentRoute = {};
        this.languages = [
            { lang: 'Spanish', imagesrc: './././assets/images/Spanish.png' },
            { lang: 'English', imagesrc: './././assets/images/English.png' },
        ];
        this.selectedLang = 'Spanish';
        this.appPages = [
            { title: 'Página Principal', icon: 'home-outline', url: 'home' },
            { title: 'Puntos', icon: 'gift-outline', url: 'points' },
            { title: 'Promociones', icon: 'pricetag-outline', url: 'promotions' },
            { title: 'Mi cuenta', icon: 'person-circle-outline', url: 'my-account' },
            // {
            //   title: 'Indicadores de mi negocio',
            //   icon: 'stats-chart-outline',
            //   url: 'home',
            // },
            { title: 'Configuración', icon: 'settings-outline', url: 'settings' },
            {
                title: 'Términos y condiciones',
                icon: 'document-outline',
                url: 'home',
            },
            {
                title: 'Política de privacidad',
                icon: 'book-outline',
                url: 'home',
            },
            { title: 'Cerrar sesión', icon: 'log-out-outline', url: '' },
        ];
        this.englishPages = [
            { title: 'Home', icon: 'search-outline', url: 'home' },
            { title: 'Points', icon: 'gift-outline', url: 'points' },
            { title: 'Promotions', icon: 'pricetag-outline', url: 'home' },
            { title: 'My Account', icon: 'person-circle-outline', url: 'my-account' },
            // {
            //   title: 'Indicators of my business',
            //   icon: 'stats-chart-outline',
            //   url: 'home',
            // },
            { title: 'Configuration', icon: 'settings-outline', url: 'settings' },
            {
                title: 'Terms and Conditions',
                icon: 'document-outline',
                url: 'home',
            },
            {
                title: 'Privacy Policy',
                icon: 'book-outline',
                url: 'home',
            },
            { title: 'Sign off', icon: 'log-out-outline', url: '' },
        ];
        this.showDropdown = false;
        this.routeNameUrl = this.router.url == '/';
        router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd))
            .subscribe(event => {
            this.currentRoute = event;
            console.log(event, 'isiiss');
        });
        // this.setApplicationlanguage();
        this.getUserData();
        this.userSubscription = authService.setUser.subscribe((sub) => {
            this.getUserData();
        });
        this.createCacheFolder();
    }
    onResize(event) {
        event.target.innerWidth;
        console.log(event.target.innerWidth, this.showSideBar);
        event.target.innerWidth > 991 ? this.showSideBar = true : this.showSideBar = false;
    }
    langSelection(value) {
        const selectedLang = 'Spanish';
        console.log('Register language value', value);
        if (value !== null) {
            localStorage.setItem(_util_constants__WEBPACK_IMPORTED_MODULE_5__.LANGUAGE, value);
            console.log('selected value', value);
        }
        else {
            localStorage.setItem(_util_constants__WEBPACK_IMPORTED_MODULE_5__.LANGUAGE, selectedLang);
            console.log('Default language value', value);
        }
    }
    createCacheFolder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('createCacheFolder');
            yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Filesystem.mkdir({
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_6__.Directory.Cache,
                path: `CACHED-IMG`
            });
        });
    }
    // async langPopover(ev: any) {
    //   const popover = await this.popoverController.create({
    //     component: LangPopoverComponent,
    //     cssClass: 'lang-popover-css',
    //     event: ev,
    //     backdropDismiss: true,
    //     showBackdrop: true,
    //     mode: 'ios',
    //     translucent: true,
    //   });
    //   await popover.present();
    //   const { role } = await popover.onDidDismiss();
    //   console.log('onDidDismiss resolved with role', role);
    // }
    // setApplicationlanguage() {
    //   const appLangauge = environment.APP_LANGUAGE;
    //   this.jabiyaService.getLangauge(applanguage).subscribe();
    // }
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(localStorage.getItem(_util_constants__WEBPACK_IMPORTED_MODULE_5__.LANGUAGE));
            this.language = localStorage.getItem(_util_constants__WEBPACK_IMPORTED_MODULE_5__.LANGUAGE);
            this.jabiyaService.getLangauge(this.language).subscribe();
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'userData' });
            this.userData = JSON.parse(value);
            console.log('getAccountsUnderUser', this.authService.getAccountsUnderUser());
        });
    }
    openAndClose() {
        this.showDropdown = !this.showDropdown;
    }
    switchAccount(accountId) {
        this.authService.switchAccountUnderUser(accountId).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('switchAccountUnderUser', res);
            if (res.result.status_response === '200 OK') {
                console.log('switchAccountUnderUser', res.result.data);
                this.navigate();
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                    key: 'userData',
                    value: JSON.stringify(res.result.data),
                });
            }
        }), (error) => {
            console.error('error', error);
        });
    }
    navigate() {
        this.routeNameUrl = false;
        this.router.navigate(['/home']);
        window.location.reload();
        this.language = localStorage.getItem(_util_constants__WEBPACK_IMPORTED_MODULE_5__.LANGUAGE);
    }
    ngOnDestroy() {
        this.language = null;
        // localStorage.removeItem(LANGUAGE);
    }
    openMenu() {
        this.menuCtrl.open();
    }
    closeMenu() {
        this.menuCtrl.close();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_4__.JabiyaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController }
];
AppComponent.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.HostListener, args: ['window:resize', ['$event'],] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-code-input */ 4138);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 7940);
/* harmony import */ var _services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/jabiyaService/jabiya.service */ 596);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es */ 2007);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/ */ 6274);














(0,_angular_common___WEBPACK_IMPORTED_MODULE_5__.registerLocaleData)((_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default()));
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            angular_code_input__WEBPACK_IMPORTED_MODULE_12__.CodeInputModule.forRoot({
                codeLength: 6,
                isCharsCode: true,
                code: 'abcdef',
            }),
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
            _services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_3__.JabiyaService, { provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID, useValue: 'es' }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 1424:
/*!*******************************************************!*\
  !*** ./src/app/services/authServices/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9923);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/util/constants */ 1830);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 4766);

/* eslint-disable max-len */






let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.setUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.accountsUnderUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
    }
    signUp(formValues) {
        const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json',
            // }),
            withCredentials: true
        };
        const params = { jsonrpc: '2.0', params: formValues };
        return this.httpClient
            .post((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_AUTH_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.AUTH_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.SIGNUP, params, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            console.log('res', res);
            return res;
        }));
    }
    addNewAccount(formValues) {
        const httpOptions = {
            withCredentials: true
        };
        const params = { jsonrpc: '2.0', params: formValues };
        return this.httpClient
            .post((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ADD_ACCOUNT, params, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            console.log('res', res);
            return res;
        }));
    }
    login(formValues) {
        const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json',
            // }),
            withCredentials: true
        };
        const params = { jsonrpc: '2.0', params: formValues };
        return this.httpClient
            .post((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_AUTH_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.AUTH_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.LOGIN, params, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            console.log('res', res);
            return res;
        }));
    }
    forgotPassword(formValues) {
        const httpOptions = { withCredentials: true };
        const params = { params: {
                email: formValues.login,
                phone: formValues.phone
            } };
        return this.httpClient
            .post((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.FORGOT_PASSWORD, params, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            console.log('res', res);
            return res;
        }));
    }
    getStates() {
        const url = (localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.STATES;
        return this.httpClient.get(url);
    }
    getCities(stateId) {
        const url = (localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.CITIES + stateId + '/city';
        return this.httpClient.get(url);
    }
    getSectors(cityId) {
        const url = (localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.SECTOR + cityId + '/sector';
        return this.httpClient.get(url);
    }
    getClientTypes() {
        const url = (localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.CLIENT_TYPE;
        return this.httpClient.get(url);
    }
    getAllAccountsUnderUser(userId) {
        const httpOptions = {
            withCredentials: true,
        };
        return this.httpClient
            .get((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.GET_ALL_ACCOUNTS + userId + '/accounts', httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            console.log('res', res);
            return res;
        }));
    }
    switchAccountUnderUser(accountId) {
        const httpOptions = {
            withCredentials: true,
        };
        const params = {};
        return this.httpClient
            .post((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ADD_ACCOUNT + '/' + accountId + '/login', params, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            console.log('res', res);
            return res;
        }));
    }
    getAccountsUnderUser() {
        return this.accountsUnderUser;
    }
    updateAccountsUnderUser(accountsUnderUser) {
        this.accountsUnderUser.next(accountsUnderUser);
    }
    editAccount(formValues, id) {
        const httpOptions = {
            withCredentials: true
        };
        const params = { params: formValues };
        return this.httpClient
            .patch((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.DETAILS_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.GET_ALL_ACCOUNTS + id, params, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            console.log('res', res);
            return res;
        }));
    }
    getSessionInfo() {
        const httpOptions = {
            withCredentials: true,
        };
        return this.httpClient
            .get((localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.ENVVARIABLE) === 'Development' ? src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.DEV_AUTH_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.AUTH_URL) + src_app_util_constants__WEBPACK_IMPORTED_MODULE_0__.apiUrl.SESSION_INFO, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            console.log('res', res);
            return res;
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 596:
/*!**********************************************************!*\
  !*** ./src/app/services/jabiyaService/jabiya.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JabiyaService": () => (/* binding */ JabiyaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8561);






let JabiyaService = class JabiyaService {
    constructor(httpClient, toastController, alertController) {
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.alertController = alertController;
        this.eventTriggerer = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.languageName = '';
        this.engMonth = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
    }
    alertCreater(header, message, text, event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [{
                        text, cssClass: 'primary-solid-btn',
                        handler: (d) => {
                            this.eventTriggerer.next(event);
                        }
                    }],
            });
            yield alert.present();
        });
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
                position: 'middle',
                color: 'danger',
            });
            toast.present();
        });
    }
    getLangauge(language) {
        const languageFilePath = '../../../assets/language.json';
        return this.httpClient.get(languageFilePath)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            const filterLang = res.filter((lang) => lang.language === language);
            if (filterLang.length > 0) {
                this.languageName = language;
                this.language = filterLang[0].values;
            }
            else {
                this.language = res.filter((lang) => lang.language === 'Spanish')[0].values;
                this.languageName = 'Spanish';
            }
            return res;
        }));
    }
    getExpandedDate(date) {
        if (this.checkValid(date)) {
            date = new Date(date);
            const year = date.getFullYear();
            const month = this.engMonth[date.getMonth()];
            const day = date.getDate();
            return `${day} ${month}, ${year}`;
        }
        else {
            return '';
        }
    }
    getGeneralFormatDate(date) {
        date = new Date(date);
        const year = date.getFullYear();
        const month = this.engMonth[date.getMonth()];
        const day = date.getDate();
        return `${month} ${day}, ${year}`;
    }
    checkValid(value) {
        return value !== null && value !== undefined && value !== '' ? true : false;
    }
};
JabiyaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
JabiyaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], JabiyaService);



/***/ }),

/***/ 1830:
/*!***********************************!*\
  !*** ./src/app/util/constants.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SAVED_CREDENTIAL": () => (/* binding */ SAVED_CREDENTIAL),
/* harmony export */   "EMAIL_PATTERN": () => (/* binding */ EMAIL_PATTERN),
/* harmony export */   "NUMBER_ONLY_PATTERN": () => (/* binding */ NUMBER_ONLY_PATTERN),
/* harmony export */   "SPANISH_MONTHS": () => (/* binding */ SPANISH_MONTHS),
/* harmony export */   "LANGUAGE": () => (/* binding */ LANGUAGE),
/* harmony export */   "ENVVARIABLE": () => (/* binding */ ENVVARIABLE),
/* harmony export */   "apiUrl": () => (/* binding */ apiUrl)
/* harmony export */ });
/* eslint-disable @typescript-eslint/naming-convention */
const SAVED_CREDENTIAL = '$$Jabilla_Saved_Credential$$';
const EMAIL_PATTERN = /^\w+([\.\--]?\w+)*@\w+(\-]?\w+)*(\.-]?\w+)*(\.\w{2,3})+$/i;
const NUMBER_ONLY_PATTERN = /^\d+$/;
const SPANISH_MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const LANGUAGE = '$$language$$';
const ENVVARIABLE = '$$envVariable$$';
const apiUrl = {
    /* USER_INFO */
    GET_CATEGORIES: 'category',
    GET_EASY_ORDER: 'order_easy',
    /* USER_INFO */
    LOGIN: 'sign_in',
    FORGOT_PASSWORD: 'password/reset',
    SIGNUP: 'sign_up',
    STATES: 'address/country/61/state',
    CITIES: 'address/state/',
    SECTOR: 'address/city/',
    CLIENT_TYPE: 'client/type',
    GET_ALL_ACCOUNTS: 'user/',
    ADD_ACCOUNT: 'account',
    SESSION_INFO: 'session',
    /* CART */
    ADD_ITEM: 'cart',
    UPDATE_ITEM: 'cart/update',
    GET_CART: 'cart/current_order',
    GET_INVOICE: 'invoice',
    GET_INVOICE_INFO: 'invoice/',
    PLACE_ORDER: 'queue',
    PLACE_EASY_ORDER: 'cart/products',
    POINTS_COUNT: 'points/count',
    POINTS_HISTORY: 'points/history',
    USER_POINTS: 'user/points',
    /* ORDER */
    ORDER: 'order',
    /* GENERAL */
    BANNER: 'banner',
    DEV_AUTH_URL: 'https://Jabiyaerp.flai.com.do/api/auth/',
    DEV_DETAILS_URL: 'https://Jabiyaerp.flai.com.do/api/',
    ENVVARIABLE: '$$envVariable$$'
};


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* eslint-disable @typescript-eslint/naming-convention */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    AUTH_URL: 'prod/',
    DETAILS_URL: 'prod/',
    APP_LANGUAGE: 'spa' // eng for English and spa for Spanish
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		5261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		7221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		3645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		2245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		3482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1227,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		7542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		7618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		2210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		7370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		3652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		5500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		5078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		8958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		4383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		7630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		3752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		1609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		8400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		4397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		3391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		6793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		1695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.bg-palewhite {\n  --background: #fbfbfb;\n}\n\n@media (min-width: 900px) {\n  .aside {\n    box-shadow: 0px 0px 3px #666;\n    z-index: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkY7O0FBTUE7RUFDRSxxQkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFIRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICM2MTZlN2U7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM3Mzg0OWE7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLmJnLXBhbGV3aGl0ZSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpe1xyXG4gIC5hc2lkZXtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4ICM2NjY7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <!-- <ion-menu contentId=\"main-content\" type=\"overlay\" *ngIf=\"userData !== null\"> -->\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\" *ngIf=\"language==='Spanish' && currentRoute?.urlAfterRedirects != '/authentication' && !showSideBar\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-list-header (click)=\"openAndClose()\">\r\n            <!-- <img src=\"../assets/images/icon.png\" style=\"height: 60px;\r\n            margin-left: -12px;\"> -->\r\n            {{userData?.company_name}}\r\n            <!-- Barbaro Bar --> \r\n            <ion-button class=\"pos-rel ion-no-margin\" fill=\"clear\" size=\"small\" color=\"dark\">\r\n              <ion-icon *ngIf=\"!showDropdown\" name=\"chevron-down-outline\"></ion-icon>\r\n              <ion-icon *ngIf=\"showDropdown\" name=\"chevron-up-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-list-header>\r\n          <ng-container *ngIf=\"showDropdown\">\r\n            <ng-container>\r\n              <ion-list>\r\n                <ion-radio-group value=\"{{userData?.company_code}}\">\r\n                  <ion-list-header>\r\n                    <ion-label>Seleccione su cuenta</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item *ngFor=\"let AccountsUnderUser of this.authService.getAccountsUnderUser()._value;let i=index\" (click)=\"switchAccount(AccountsUnderUser.store_account_id)\">\r\n                    <ion-label>{{AccountsUnderUser.company_name}}</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"{{AccountsUnderUser.company_code}}\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n            </ng-container>\r\n          </ng-container>\r\n          <!-- <ion-item class=\"bg-palewhite\">\r\n              <ion-label>\r\n                <p class=\"wel-submsg\">Barbaro Bar3</p>\r\n                </ion-label>\r\n          </ion-item> -->\r\n          <!-- <ion-note>hi@ionicframework.com</ion-note> -->\r\n          <ion-item button (click)=\"testClick()\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"../assets/images/user.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'Spanish'\">Código <b>{{userData?.company_code}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'English'\">Customer code <b>{{userData?.clientId}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'Spanish'\">Vendedor <b>{{userData?.salesperson}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'English'\">Sales person <b>{{userData?.salesperson}}</b></p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\">\r\n              <!-- routerLinkActive=\"selected\" -->\r\n              <ion-icon slot=\"start\" name=\"{{ p.icon }}\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>    \r\n    <ion-menu contentId=\"main-content\" type=\"overlay\"  *ngIf=\"language==='English' && currentRoute?.urlAfterRedirects != '/authentication' && !showSideBar\">\r\n      \r\n      <ion-content >\r\n        <ion-list id=\"inbox-list\"  >\r\n          <ion-list-header (click)=\"openAndClose()\">\r\n            <!-- <img src=\"../assets/images/icon.png\" style=\"height: 60px;\r\n            margin-left: -12px;\"> -->\r\n            {{userData?.company_name}}\r\n            <!-- Barbaro Bar -->\r\n            <ion-button class=\"pos-rel ion-no-margin\" fill=\"clear\" size=\"small\" color=\"dark\">\r\n              <ion-icon *ngIf=\"!showDropdown\" name=\"chevron-down-outline\"></ion-icon>\r\n              <ion-icon *ngIf=\"showDropdown\" name=\"chevron-up-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-list-header>\r\n          <ng-container *ngIf=\"showDropdown\">\r\n            <ng-container *ngFor=\"let AccountsUnderUser of this.authService.getAccountsUnderUser()._value;let i=index\">\r\n              <ion-item class=\"bg-palewhite\" (click)=\"switchAccount(AccountsUnderUser.store_account_id)\">\r\n                <ion-label>\r\n                  <p class=\"wel-submsg\">{{AccountsUnderUser.company_name}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ng-container>\r\n          </ng-container>\r\n          <!-- <ion-item class=\"bg-palewhite\">\r\n              <ion-label>\r\n                <p class=\"wel-submsg\">Barbaro Bar3</p>\r\n                </ion-label>\r\n          </ion-item> -->\r\n          <!-- <ion-note>hi@ionicframework.com</ion-note> -->\r\n          <ion-item button (click)=\"testClick()\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"../assets/images/user.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'Spanish'\">Código <b>{{userData?.clientId}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'English'\">Customer code <b>{{userData?.clientId}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'Spanish'\">Vendedor <b>{{userData?.salesperson}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'English'\">Sales person <b>{{userData?.salesperson}}</b></p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of englishPages; let i = index\">\r\n            <!-- [queryParams]=\"{ ln: language}\" -->\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\">\r\n              <!-- routerLinkActive=\"selected\" -->\r\n              <ion-icon slot=\"start\" name=\"{{ p.icon }}\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n        <!-- <ion-list id=\"labels-list\">\r\n          <ion-list-header>Labels</ion-list-header>\r\n\r\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\r\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\r\n            <ion-label>{{ label }}</ion-label>\r\n          </ion-item>\r\n        </ion-list> -->\r\n      </ion-content>\r\n    </ion-menu>\r\n    <aside class=\"aside\" *ngIf=\"language==='Spanish' && currentRoute?.urlAfterRedirects != '/authentication' && showSideBar\">\r\n      <div>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-list-header (click)=\"openAndClose()\">\r\n            <!-- <img src=\"../assets/images/icon.png\" style=\"height: 60px;\r\n            margin-left: -12px;\"> -->\r\n            {{userData?.company_name}}\r\n            <!-- Barbaro Bar --> \r\n            <ion-button class=\"pos-rel ion-no-margin\" fill=\"clear\" size=\"small\" color=\"dark\">\r\n              <ion-icon *ngIf=\"!showDropdown\" name=\"chevron-down-outline\"></ion-icon>\r\n              <ion-icon *ngIf=\"showDropdown\" name=\"chevron-up-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-list-header>\r\n          <ng-container *ngIf=\"showDropdown\">\r\n            <ng-container *ngFor=\"let AccountsUnderUser of this.authService.getAccountsUnderUser()._value;let i=index\">\r\n          <ion-item class=\"bg-palewhite\" (click)=\"switchAccount(AccountsUnderUser.store_account_id)\">\r\n            <ion-label>\r\n              <p class=\"wel-submsg\">{{AccountsUnderUser.company_name}}</p>\r\n              </ion-label>\r\n              </ion-item>\r\n              </ng-container>\r\n          </ng-container>\r\n              <!-- <ion-item class=\"bg-palewhite\">\r\n              <ion-label>\r\n                <p class=\"wel-submsg\">Barbaro Bar3</p>\r\n                </ion-label>\r\n          </ion-item> -->\r\n          <!-- <ion-note>hi@ionicframework.com</ion-note> -->\r\n          <ion-item button (click)=\"testClick()\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"../assets/images/user.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'Spanish'\">Código <b>{{userData?.clientId}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'English'\">Customer code <b>{{userData?.clientId}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'Spanish'\">Vendedor <b>{{userData?.salesperson}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'English'\">Sales person  <b>{{userData?.salesperson}}</b></p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" >\r\n              <!-- routerLinkActive=\"selected\" -->\r\n              <ion-icon slot=\"start\" name=\"{{ p.icon }}\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </div>\r\n    </aside>\r\n    <aside class=\"aside\" *ngIf=\"language==='English' && currentRoute?.urlAfterRedirects != '/authentication' && showSideBar\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-list-header (click)=\"openAndClose()\">\r\n            <!-- <img src=\"../assets/images/icon.png\" style=\"height: 60px;\r\n            margin-left: -12px;\"> -->\r\n            {{userData?.company_name}}\r\n            <!-- Barbaro Bar --> \r\n            <ion-button class=\"pos-rel ion-no-margin\" fill=\"clear\" size=\"small\" color=\"dark\">\r\n              <ion-icon *ngIf=\"!showDropdown\" name=\"chevron-down-outline\"></ion-icon>\r\n              <ion-icon *ngIf=\"showDropdown\" name=\"chevron-up-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-list-header>\r\n          <ng-container *ngIf=\"showDropdown\">\r\n            <ng-container *ngFor=\"let AccountsUnderUser of this.authService.getAccountsUnderUser()._value;let i=index\">\r\n          <ion-item class=\"bg-palewhite\" (click)=\"switchAccount(AccountsUnderUser.store_account_id)\">\r\n            <ion-label>\r\n              <p class=\"wel-submsg\">{{AccountsUnderUser.company_name}}</p>\r\n              </ion-label>\r\n              </ion-item>\r\n              </ng-container>\r\n          </ng-container>\r\n              <!-- <ion-item class=\"bg-palewhite\">\r\n              <ion-label>\r\n                <p class=\"wel-submsg\">Barbaro Bar3</p>\r\n                </ion-label>\r\n          </ion-item> -->\r\n          <!-- <ion-note>hi@ionicframework.com</ion-note> -->\r\n          <ion-item button (click)=\"testClick()\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"../assets/images/user.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'Spanish'\">Código <b>{{userData?.clientId}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'English'\">Customer code <b>{{userData?.clientId}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'Spanish'\">Vendedor <b>{{userData?.salesperson}}</b></p>\r\n              <p class=\"wel-submsg\" *ngIf=\"language === 'English'\">Sales person  <b>{{userData?.salesperson}}</b></p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" >\r\n              <!-- routerLinkActive=\"selected\" -->\r\n              <ion-icon slot=\"start\" name=\"{{ p.icon }}\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </aside>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
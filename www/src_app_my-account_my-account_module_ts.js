(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["src_app_my-account_my-account_module_ts"],{

/***/ 8318:
/*!***********************************************************!*\
  !*** ./src/app/my-account/accounts/accounts.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsComponent": () => (/* binding */ AccountsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_accounts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accounts.component.html */ 2002);
/* harmony import */ var _accounts_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.component.scss */ 4083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 2755);
/* harmony import */ var _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authServices/auth.service */ 1424);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/constants */ 1830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);









let AccountsComponent = class AccountsComponent {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
        this.languageJson = {
            accountPage: {
                spanish: {
                    details: 'Detalles de la cuenta',
                    mail: 'correo',
                    call: 'llamar',
                    acc: 'Mi Cuenta',
                    code: 'Código de cliente',
                    adviser: 'Mi Asesor',
                    pinfo: 'Información Personal',
                    update: 'Actualizar',
                    name: 'Nombre',
                    phone: 'Teléfono',
                    email: 'Correo Electónico',
                    pass: 'Contraseña',
                    help: '¿Necesitas ayuda',
                    service: 'Accede al Centro de Atención'
                },
                english: {
                    details: 'Account Details',
                    mail: 'Mail',
                    call: 'Call',
                    acc: 'My Account',
                    code: 'Client code',
                    adviser: 'My adviser ',
                    pinfo: 'Personal Information',
                    update: 'Update',
                    name: 'Name',
                    phone: 'Telephone',
                    email: 'Email',
                    pass: 'Password',
                    help: 'Need help?',
                    service: 'Access the Service Center'
                }
            }
        };
        this.userAccount = [];
        this.userData = [];
    }
    ngOnInit() {
        this.getUserAccount();
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE);
    }
    getUserAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'userData' });
            this.userData = JSON.parse(value);
            this.userDetails = JSON.parse(value);
            this.compName = this.userDetails.company_name;
            this.fullname = this.userDetails.fullname;
            this.clientname = this.userDetails.client;
            this.accountowner = (this.clientname === undefined ? this.fullname : this.clientname);
            console.log('userData', this.compName, this.fullname, this.clientname, this.accountowner);
            this.getAllAccountsUnderUser(this.userDetails.id);
            // this.getUserDetails(this.userDetails.id);
            this.savedCredential = JSON.parse(localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.SAVED_CREDENTIAL));
            this.userPass = this.savedCredential.password.replace(/./g, '*');
        });
    }
    getAllAccountsUnderUser(id) {
        this.accountSubscription = this.authService.getAllAccountsUnderUser(id).subscribe((res) => {
            this.userAccount = res.result.data;
            console.log('easy', this.userAccount);
            const variableOne = this.userAccount.filter(itemInArray => itemInArray.company_name === this.compName);
            this.compCode = variableOne[0].company_code;
            // console.log('company code', this.compCode);       
        }, (error) => {
            console.error('error', error);
        });
    }
    ngOnDestroy() {
        this.unSubscribe(this.accountSubscription);
        this.userDetails = null;
        this.userAccount = null;
        this.userData = null;
        this.userPass = null;
        this.savedCredential = null;
        this.compCode = null;
        this.compName = null;
        this.authService = null;
        this.fullname = null;
        this.clientname = null;
        this.accountowner = null;
    }
    unSubscribe(subscription) {
        if (subscription !== null && subscription !== undefined) {
            subscription.unsubscribe();
        }
    }
};
AccountsComponent.ctorParameters = () => [
    { type: _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
AccountsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-accounts',
        template: _raw_loader_accounts_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accounts_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountsComponent);



/***/ }),

/***/ 5093:
/*!*****************************************************************!*\
  !*** ./src/app/my-account/bill-detail/bill-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillDetailComponent": () => (/* binding */ BillDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_bill_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bill-detail.component.html */ 3408);
/* harmony import */ var _bill_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill-detail.component.scss */ 26);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cartServices/cart.service */ 1136);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/constants */ 1830);







let BillDetailComponent = class BillDetailComponent {
    constructor(activatedRoute, cartService) {
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.invoiceLines = [];
        this.languageJson = {
            billDetails: {
                spanish: {
                    paid: 'Factura pagada',
                    paydate: 'Fecha de pago',
                    geninvoice: 'Factura generada',
                    export: 'Exportar (PDF)',
                    Product: 'Producto',
                    qty: 'Cant',
                    tax: 'Impuestos',
                },
                english: {
                    paid: 'Invoice Paid',
                    paydate: 'Payment Date',
                    geninvoice: 'Generated Invoice',
                    export: 'Export (PDF)',
                    Product: 'Product',
                    qty: 'Quantity',
                    tax: 'Taxes',
                }
            }
        };
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE);
    }
    ngOnInit() {
        this.invoiceId = this.activatedRoute.snapshot.paramMap.get('id');
        // console.log('invoiceid you clicked', this.invoiceId);
        this.getInvoiceDetails(this.invoiceId);
        // this.getOrderDetails(this.invoiceId);
    }
    getInvoiceDetails(invoiceID) {
        this.getInvoiceSubscription = this.cartService.getInvoiceInfo(invoiceID).subscribe(data => {
            this.invoiceDetailRes = data.result.data.invoice;
            this.invoiceLines = data.result.data.invoice.lines;
            // console.log("Invoice Details", this.invoiceLines);
        });
    }
};
BillDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
BillDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-bill-detail',
        template: _raw_loader_bill_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bill_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BillDetailComponent);



/***/ }),

/***/ 5865:
/*!*****************************************************!*\
  !*** ./src/app/my-account/bills/bills.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillsComponent": () => (/* binding */ BillsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_bills_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bills.component.html */ 5482);
/* harmony import */ var _bills_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bills.component.scss */ 5551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cartServices/cart.service */ 1136);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/constants */ 1830);







let BillsComponent = class BillsComponent {
    constructor(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.invoiceRes = [];
        this.currentPage = 1;
        this.languageJson = {
            billPage: {
                spanish: {
                    inv: 'De factura',
                    date: 'Fecha'
                },
                english: {
                    inv: 'Invoice',
                    date: 'Date'
                }
            }
        };
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE);
    }
    gotoBillDetails(id) {
        this.router.navigate(['/my-account/billDetails/' + id]);
    }
    ngOnInit() {
        this.getInvoiceDetails();
    }
    getInvoiceDetails() {
        this.cartService.getInvoice().subscribe(response => {
            this.invoiceRes = response.result.data.invoices;
            console.log("response from invoice", this.invoiceRes);
        });
    }
};
BillsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
BillsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-bills',
        template: _raw_loader_bills_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bills_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BillsComponent);



/***/ }),

/***/ 7406:
/*!***********************************************************!*\
  !*** ./src/app/my-account/calendar/calendar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calendar.component.html */ 3465);
/* harmony import */ var _calendar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.component.scss */ 4164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/jabiyaService/jabiya.service */ 596);






let CalendarComponent = class CalendarComponent {
    constructor(jabiyaService) {
        this.jabiyaService = jabiyaService;
        this.passDate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: false
        };
        this.currentWeek = [];
        this.showCalendar = false;
        this.initialSlide = 0;
        this.monthText = '';
        this.activeSlideIndex = 0;
    }
    ngAfterViewInit() {
        this.initializeDate();
    }
    initializeDate() {
        const dates = this.getDates(this.datePeriods[0], this.datePeriods[1]);
        const today = new Date();
        this.currentWeek = new Array();
        const newArray = [];
        startDay: for (let i = 0; i < dates.length; i++) {
            let n = 0;
            if (dates[i].getDay() === 0) {
                for (let k = i; k < dates.length - (dates.length % 7); k++) {
                    newArray[n] = new Array();
                    for (let j = k; j < k + 7 && j < dates.length; j++) {
                        const value = { date: dates[j], disable: false, today: false };
                        const check = value.date;
                        if (today.getDate() === check.getDate() && today.getMonth() === check.getMonth() &&
                            today.getFullYear() === check.getFullYear()) {
                            value.today = true;
                            this.initialSlide = Math.round(j / 7) - 1;
                            this.currentMonth = value.date;
                            this.currMonthChanged();
                        }
                        newArray[n].push(value);
                    }
                    n = n + 1;
                    k = k + 6;
                }
                break startDay;
            }
        }
        this.currentWeek = newArray;
        this.showCalendar = true;
        setTimeout(() => {
            this.subscriptionSlider.slideTo(this.initialSlide);
        }, 100);
    }
    getDates(startDate, stopDate) {
        const dateArray = new Array();
        let currentDate = new Date(startDate);
        const weekEndDate = new Date(stopDate);
        while (currentDate <= weekEndDate) {
            dateArray.push(new Date(currentDate));
            currentDate = this.addDays(new Date(currentDate), 1);
        }
        return dateArray;
    }
    addDays(date, days) {
        date.setDate(date.getDate() + days);
        return date;
    }
    sliderChanges() {
        this.subscriptionSlider.getActiveIndex().then((index) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let foundOne = false;
            loop1: for (let k = 0; k < this.currentWeek[index].length; k++) {
                const week = this.currentWeek[index][k];
                if (week.date.getDate() === 1) {
                    foundOne = true;
                    if (index > this.activeSlideIndex) {
                        if (k > 0) {
                            yield this.changeDateView(k, index, false, true);
                        }
                        else {
                            yield this.changeDateView(k, index, true, false);
                        }
                    }
                    else {
                        yield this.changeDateView(k, index, true, false);
                    }
                    break loop1;
                }
            }
            if (!foundOne) {
                this.currentMonth = this.currentWeek[index][0].date;
                this.currMonthChanged();
                const lastIndex = this.currentWeek[index].length === 7 ? 6 : this.currentWeek[index].length - 1;
                this.passDate.emit([
                    this.jabiyaService.getGeneralFormatDate(this.currentWeek[index][0].date),
                    this.jabiyaService.getGeneralFormatDate(this.currentWeek[index][lastIndex].date)
                ]);
            }
            this.activeSlideIndex = index;
        }));
    }
    changeDateView(onePosition, index, disable, enable) {
        return new Promise((resolve) => {
            let monthChanged = false;
            for (let i = 0; i < onePosition; i++) {
                this.currentWeek[index][i].disable = disable;
                if (!disable && !monthChanged) {
                    monthChanged = true;
                    this.currentMonth = this.currentWeek[index][i].date;
                    this.currMonthChanged();
                }
            }
            for (let i = onePosition; i < this.currentWeek[index].length; i++) {
                this.currentWeek[index][i].disable = enable;
                if (!enable && !monthChanged) {
                    monthChanged = true;
                    this.currentMonth = this.currentWeek[index][i].date;
                    this.currMonthChanged();
                }
            }
            resolve();
        });
    }
    getDateDetails(value, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (value.disable) {
                yield this.setWeek(index);
                const weekValues = JSON.parse(JSON.stringify(this.currentWeek[index]));
                for (let k = 0; k < weekValues.length; k++) {
                    if (weekValues[k].disable) {
                        weekValues.splice(k, 1);
                        k--;
                    }
                }
                this.passDate.emit([
                    this.jabiyaService.getGeneralFormatDate(weekValues[0].date),
                    this.jabiyaService.getGeneralFormatDate(weekValues[weekValues.length - 1].date)
                ]);
            }
        });
    }
    setWeek(index) {
        return new Promise(resolve => {
            for (const val of this.currentWeek[index]) {
                val.disable = !val.disable;
                if (!val.disable) {
                    this.currentMonth = val.date;
                    this.currMonthChanged();
                }
            }
            resolve();
        });
    }
    gotoPrevMonth() {
        const searchDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 0);
        for (let i = 0; i < this.currentWeek.length; i++) {
            for (const weekDay of this.currentWeek[i]) {
                const week = weekDay;
                if (week.date.getDate() === searchDate.getDate() && week.date.getMonth() === searchDate.getMonth() &&
                    week.date.getFullYear() === searchDate.getFullYear()) {
                    this.subscriptionSlider.slideTo(i);
                    this.getDateDetails(week, i);
                    setTimeout(() => {
                        this.getDateDetails(week, i);
                    }, 500);
                }
            }
        }
    }
    gotoNextMonth() {
        const searchDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
        for (let i = 0; i < this.currentWeek.length; i++) {
            for (const weekDay of this.currentWeek[i]) {
                const week = weekDay;
                if (week.date.getDate() === searchDate.getDate() && week.date.getMonth() === searchDate.getMonth() &&
                    week.date.getFullYear() === searchDate.getFullYear()) {
                    this.subscriptionSlider.slideTo(i);
                    this.getDateDetails(week, i);
                    setTimeout(() => {
                        this.getDateDetails(week, i);
                    }, 500);
                }
            }
        }
    }
    currMonthChanged() {
        const year = this.currentMonth.getFullYear();
        const month = this.jabiyaService.language.months[this.currentMonth.getMonth()];
        this.monthText = month + ' ' + year;
    }
    ngOnDestroy() {
        this.passDate.emit(null);
        this.datePeriods = null;
        this.subscriptionSlider = null;
        this.slideOpts = null;
        this.currentWeek = null;
        this.showCalendar = null;
        this.initialSlide = null;
        this.currentMonth = null;
        this.monthText = null;
        this.activeSlideIndex = null;
    }
};
CalendarComponent.ctorParameters = () => [
    { type: src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_2__.JabiyaService }
];
CalendarComponent.propDecorators = {
    subscriptionSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSlides,] }],
    passDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    datePeriods: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CalendarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calendar',
        template: _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calendar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalendarComponent);



/***/ }),

/***/ 573:
/*!*********************************************************!*\
  !*** ./src/app/my-account/credits/credits.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditsComponent": () => (/* binding */ CreditsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_credits_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./credits.component.html */ 9031);
/* harmony import */ var _credits_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credits.component.scss */ 8272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/constants */ 1830);





let CreditsComponent = class CreditsComponent {
    constructor() {
        this.languageJson = {
            creditPage: {
                spanish: {
                    detail: 'Detalles de crédito',
                    tquota: 'Cupo de crédito total',
                    quota: 'Cupo de crédito disponible',
                    currentdebit: 'Deuda actual',
                    debit: 'Deuda en mora',
                    condition: 'Condicion de pa go',
                    credit: 'Crédito',
                },
                english: {
                    detail: 'Credit details',
                    tquota: 'Total credit quota',
                    quota: 'Credit quota available',
                    currentdebit: 'Current debt',
                    debit: 'Delinquent debt',
                    condition: 'Payment condition',
                    credit: 'Credit',
                }
            }
        };
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE);
    }
    ngOnInit() { }
};
CreditsComponent.ctorParameters = () => [];
CreditsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-credits',
        template: _raw_loader_credits_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_credits_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreditsComponent);



/***/ }),

/***/ 5086:
/*!*******************************************************************!*\
  !*** ./src/app/my-account/edit-account/edit-account.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAccountComponent": () => (/* binding */ EditAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_edit_account_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-account.component.html */ 7594);
/* harmony import */ var _edit_account_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account.component.scss */ 1522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 2755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authServices/auth.service */ 1424);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/constants */ 1830);











let EditAccountComponent = class EditAccountComponent {
    constructor(alertController, formBuilder, toastController, authService, router) {
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.languageJson = {
            editPage: {
                spanish: {
                    profile: 'Editar perfil',
                    fname: 'Primer Nombre',
                    lname: 'Apellido',
                    email: 'Correo Electrónico',
                    phone: 'Teléfono',
                    update: 'Actualización del perfil',
                    success: 'Éxito'
                },
                english: {
                    profile: 'Edit profile',
                    fname: 'First name',
                    lname: 'Last name',
                    email: 'Email',
                    phone: 'Telephone',
                    update: 'Profile Update',
                    success: 'Success'
                }
            }
        };
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE);
    }
    ngOnInit() {
        this.getUserAccount();
        this.editAccountForm = this.intializeEditAccountForm();
    }
    getUserAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'userData' });
            this.userData = yield JSON.parse(value);
            console.log('userData', this.userData);
            if (this.userData.client !== undefined) {
                const name = this.userData.client;
                const words = name.split(" ");
                console.log("edit split", words);
                this.userData.firstname = this.var1 = words[0];
                this.userData.lastname = this.var2 = words[1];
                console.log("after edit split", this.userData.firstname, this.userData.lastname);
                const { phone, email, firstname, lastname } = this.userData;
                this.editAccountForm.patchValue({
                    phone,
                    email,
                    firstname,
                    lastname
                });
            }
            else {
                const { phone, email, firstname, lastname } = this.userData;
                this.editAccountForm.patchValue({
                    phone,
                    email,
                    firstname,
                    lastname
                });
            }
        });
    }
    intializeEditAccountForm() {
        var _a, _b, _c, _d;
        return this.formBuilder.group({
            phone: [(_a = this.userData) === null || _a === void 0 ? void 0 : _a.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            email: [(_b = this.userData) === null || _b === void 0 ? void 0 : _b.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            firstname: [(_c = this.userData) === null || _c === void 0 ? void 0 : _c.client, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            lastname: [(_d = this.userData) === null || _d === void 0 ? void 0 : _d.client, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    sendEditAccountDetails() {
        this.loading = true;
        const formValues = this.editAccountForm.value;
        this.editAccountSubscription = this.authService.editAccount(formValues, this.userData.id).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('response', response);
            // this.loading = false;
            if (response.result.status_response === '200 OK') {
                // this.presentToast('Success');
                this.getSessionInfoSubscription = this.authService.getSessionInfo().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('response', response);
                    this.loading = false;
                    if (res.result.status_response === '200 OK') {
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                            key: 'userData',
                            value: JSON.stringify(res.result.data),
                        });
                        this.router.navigate(['/home']);
                        this.presentToast(this.language === 'Spanish'
                            ? this.languageJson.editPage.spanish.success
                            : this.languageJson.editPage.english.success);
                    }
                }), (err) => {
                    this.loading = false;
                    console.error('error1', err);
                    if (err.error.result.error.message === 'Error.Session expired') {
                        this.router.navigate(['']);
                        this.presentToast(this.language === 'Spanish'
                            ? this.languageJson.editPage.spanish.success
                            : this.languageJson.editPage.english.success);
                    }
                    else {
                        this.presentToast('Error!');
                    }
                });
            }
        }), (error) => {
            this.loading = false;
            console.error('error2', error);
            this.presentToast('Error!');
        });
    }
    presentToast(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: error,
                duration: 2000,
            });
            toast.present();
        });
    }
    updateprofile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'successfull-registration',
                header: this.language === 'Spanish' ? 'Perfil actualizado con éxito' : 'Profile Updated Successfully',
                // subHeader: 'Subtitle',
                message: this.language === 'Spanish' ? 'Your profile has been updated successfully' : '',
                buttons: [{ text: 'OK', handler: (d) => console.log('Update Profile') }],
            });
            yield alert.present();
        });
    }
    ngOnDestroy() {
        this.unSubscribe(this.editAccountSubscription);
        this.unSubscribe(this.getSessionInfoSubscription);
        this.userData = null;
        this.editAccountForm = null;
        this.loading = null;
        this.router = null;
        this.formBuilder = null;
        this.authService = null;
        this.toastController = null;
        this.alertController = null;
    }
    unSubscribe(subscription) {
        if (subscription !== null && subscription !== undefined) {
            subscription.unsubscribe();
        }
    }
};
EditAccountComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
EditAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit-account',
        template: _raw_loader_edit_account_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_account_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditAccountComponent);



/***/ }),

/***/ 8258:
/*!*********************************************************!*\
  !*** ./src/app/my-account/my-account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountPageRoutingModule": () => (/* binding */ MyAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts/accounts.component */ 8318);
/* harmony import */ var _bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill-detail/bill-detail.component */ 5093);
/* harmony import */ var _bills_bills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bills/bills.component */ 5865);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar/calendar.component */ 7406);
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credits/credits.component */ 573);
/* harmony import */ var _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-account/edit-account.component */ 5086);
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-account.page */ 4718);
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-detail/order-detail.component */ 6355);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders/orders.component */ 9976);












const routes = [
    {
        path: '',
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_6__.MyAccountPage
    },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__.OrdersComponent },
    { path: 'accounts', component: _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_0__.AccountsComponent },
    { path: 'bills', component: _bills_bills_component__WEBPACK_IMPORTED_MODULE_2__.BillsComponent },
    { path: 'credits', component: _credits_credits_component__WEBPACK_IMPORTED_MODULE_4__.CreditsComponent },
    { path: 'billDetails/:id', component: _bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_1__.BillDetailComponent },
    { path: 'orderDetails', component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_7__.OrderDetailComponent },
    { path: 'editAccount', component: _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_5__.EditAccountComponent },
    { path: 'calendar', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__.CalendarComponent }
];
let MyAccountPageRoutingModule = class MyAccountPageRoutingModule {
};
MyAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    })
], MyAccountPageRoutingModule);



/***/ }),

/***/ 7226:
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountPageModule": () => (/* binding */ MyAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-account-routing.module */ 8258);
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account.page */ 4718);
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts/accounts.component */ 8318);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/orders.component */ 9976);
/* harmony import */ var _bills_bills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bills/bills.component */ 5865);
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credits/credits.component */ 573);
/* harmony import */ var _bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill-detail/bill-detail.component */ 5093);
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-detail/order-detail.component */ 6355);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar/calendar.component */ 7406);
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../order.service */ 4094);
/* harmony import */ var _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-account/edit-account.component */ 5086);
/* harmony import */ var _services_week_day_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/week-day.pipe */ 9751);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ 7940);


















let MyAccountPageModule = class MyAccountPageModule {
};
MyAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule,
            _my_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyAccountPageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule,
        ],
        declarations: [
            _my_account_page__WEBPACK_IMPORTED_MODULE_1__.MyAccountPage,
            _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_2__.AccountsComponent,
            _bills_bills_component__WEBPACK_IMPORTED_MODULE_4__.BillsComponent,
            _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__.OrdersComponent,
            _credits_credits_component__WEBPACK_IMPORTED_MODULE_5__.CreditsComponent,
            _bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_6__.BillDetailComponent,
            _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_7__.OrderDetailComponent,
            _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_10__.EditAccountComponent,
            _services_week_day_pipe__WEBPACK_IMPORTED_MODULE_11__.WeekDayPipe,
            _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__.CalendarComponent
        ],
        providers: [_order_service__WEBPACK_IMPORTED_MODULE_9__.OrderService, _services_week_day_pipe__WEBPACK_IMPORTED_MODULE_11__.WeekDayPipe]
    })
], MyAccountPageModule);



/***/ }),

/***/ 4718:
/*!***********************************************!*\
  !*** ./src/app/my-account/my-account.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountPage": () => (/* binding */ MyAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_my_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-account.page.html */ 7787);
/* harmony import */ var _my_account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account.page.scss */ 9932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cartServices/cart.service */ 1136);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/constants */ 1830);






let MyAccountPage = class MyAccountPage {
    constructor(cartService) {
        this.cartService = cartService;
        this.languageJson = {
            accountPage: {
                spanish: {
                    acc: 'Mi Cuenta',
                    request: 'pedidos',
                    bill: 'cuenta',
                    invoice: 'facturas',
                    credit: 'CRÉDITO ',
                },
                english: {
                    acc: 'My accounts',
                    request: 'Request',
                    bill: 'bill',
                    invoice: 'invoice',
                    credit: 'Credits',
                }
            }
        };
        this.segment = 'pedidos';
        this.language = localStorage.getItem(_util_constants__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE);
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev.target.value);
        this.segment = ev.target.value;
    }
    ngOnInit() {
    }
};
MyAccountPage.ctorParameters = () => [
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
MyAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-my-account',
        template: _raw_loader_my_account_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_account_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyAccountPage);



/***/ }),

/***/ 6355:
/*!*******************************************************************!*\
  !*** ./src/app/my-account/order-detail/order-detail.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailComponent": () => (/* binding */ OrderDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_order_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-detail.component.html */ 7494);
/* harmony import */ var _order_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.component.scss */ 1242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/order.service */ 4094);
/* harmony import */ var src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/jabiyaService/jabiya.service */ 596);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/constants */ 1830);
/* harmony import */ var _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cartServices/cart.service */ 1136);









let OrderDetailComponent = class OrderDetailComponent {
    constructor(orderService, activatedRoute, jabiyaService, cartService) {
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.jabiyaService = jabiyaService;
        this.cartService = cartService;
        this.languageJson = {
            orderDetailPage: {
                spanish: {
                    detail: 'Detalles del pedido',
                    expdel: 'Entrega prevista',
                    orderno: 'Número de pedido',
                    orderon: 'Ordenado el',
                    tax: 'Impuestos',
                    save: 'Ahorraste',
                    buy: '¿Le gustaría volver a comprar estos productos',
                    addall: 'Agregar todos'
                },
                english: {
                    detail: 'Order details',
                    expdel: 'Expected delivery',
                    orderno: 'Order number',
                    orderon: 'Ordered date',
                    tax: 'Taxes',
                    save: 'You saved',
                    buy: 'Would you like to buy these products again?',
                    addall: 'Add all'
                }
            }
        };
        this.isLoading = true;
        this.orderTaxAmount = 0;
        this.orderSubTotal = 0;
        this.orderTotal = 0;
        this.savings = 0;
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE);
    }
    ngOnInit() {
        this.routeSubscription = this.activatedRoute.queryParams.subscribe(params => {
            if (params !== null) {
                this.deliveryDate = params.deliveryDate;
                this.getOrderDetails(params.orderId);
            }
            else {
                this.jabiyaService.presentToast('Order Not Found');
            }
        });
    }
    getOrderDetails(orderId) {
        this.getOrderSubscription =
            this.orderService.getOrderDetails(orderId).subscribe((orderInfo) => {
                this.orderDetails = orderInfo.result.data;
                this.orderNumber = this.orderDetails.order.name;
                this.orderDetails.order_lines.forEach(order => {
                    this.orderSubTotal += Number(order.productPriceSubtotal);
                    this.orderTaxAmount += Number(order.productPriceTax);
                    this.orderTotal += Number(order.productPriceTotal);
                    this.savings += Number(order.oldPrice) - Number(order.price);
                });
                this.isLoading = false;
            }, error => {
                console.error('Order fetch API Error: ' + error);
            });
    }
    ngOnDestroy() {
        this.unSubscribe(this.getOrderSubscription);
        this.unSubscribe(this.routeSubscription);
        this.orderDetails = null;
        this.deliveryDate = null;
        this.isLoading = null;
        this.orderTaxAmount = null;
        this.orderSubTotal = null;
        this.orderTotal = null;
        this.savings = null;
        this.orderNumber = null;
        this.activatedRoute = null;
        this.orderService = null;
        this.jabiyaService = null;
    }
    unSubscribe(subscription) {
        if (subscription !== undefined && subscription !== null) {
            subscription.unsubscribe();
        }
    }
};
OrderDetailComponent.ctorParameters = () => [
    { type: src_app_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_3__.JabiyaService },
    { type: _services_cartServices_cart_service__WEBPACK_IMPORTED_MODULE_5__.CartService }
];
OrderDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-order-detail',
        template: _raw_loader_order_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderDetailComponent);



/***/ }),

/***/ 9976:
/*!*******************************************************!*\
  !*** ./src/app/my-account/orders/orders.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./orders.component.html */ 4691);
/* harmony import */ var _orders_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.component.scss */ 1058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8984);
/* harmony import */ var src_app_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/order.service */ 4094);
/* harmony import */ var src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/jabiyaService/jabiya.service */ 596);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/constants */ 1830);









let OrdersComponent = class OrdersComponent {
    constructor(jabiyaService, router, orderService) {
        this.jabiyaService = jabiyaService;
        this.router = router;
        this.orderService = orderService;
        this.orders = [];
        this.futureOrders = [];
        this.languageJson = {
            orderPage: {
                spanish: {
                    delivery: 'Próxima entrega',
                    noorder: 'No se encontraron pedidos',
                    todaydel: 'Entrega prevista para hoy',
                    orderno: 'Número de pedido',
                    orderon: 'Ordenado el',
                    seedetail: 'ver detalles',
                    all: 'Todos Ios pedidos',
                    recent: 'Comenzando por la entrega más reciente',
                    invoice: 'De factura',
                    orderdate: 'Ordernado el',
                    exdelivery: 'Entrega prevista'
                },
                english: {
                    delivery: 'Next Delivery',
                    noorder: 'No Order found',
                    todaydel: 'Delivery scheduled for today',
                    orderno: 'Order number',
                    orderon: 'Order On',
                    seedetail: 'See Details',
                    all: 'All Orders',
                    recent: 'Starting with the most recent installment',
                    invoice: 'Invoice',
                    orderdate: 'Ordered date',
                    exdelivery: 'Expected Delivery'
                }
            }
        };
        this.weekDays = this.getCurrentWeek();
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE);
    }
    ngOnInit() {
        const curr = new Date();
        const first = curr.getDate() - curr.getDay();
        const last = first + 6;
        this.getAllOrders([this.jabiyaService.getGeneralFormatDate(new Date(curr.setDate(first))),
            this.jabiyaService.getGeneralFormatDate(new Date(curr.setDate(last)))]);
    }
    getCurrentWeek() {
        const curr = new Date();
        const year = curr.getFullYear();
        const prevMonth = new Date(year, curr.getMonth() - 3, 1);
        const nextMonth = new Date(year, curr.getMonth() + 2, 0);
        return [this.jabiyaService.getGeneralFormatDate(prevMonth),
            this.jabiyaService.getGeneralFormatDate(nextMonth)];
    }
    checkForTodayDeliverable(orders) {
        const today = new Date();
        return orders.filter(order => order.deliveryDate.getFullYear() === today.getFullYear() &&
            order.deliveryDate.getMonth() === today.getMonth() &&
            order.deliveryDate.getDate() === today.getDate());
    }
    getAllOrders(currentWeek) {
        this.getOrdersSubscription = this.orderService.getOrders(currentWeek).subscribe((res) => {
            const orders = res.result.data.orders;
            this.futureOrders = orders.filter((order) => order.deliveryDate === '');
            const deliveryOrders = orders.filter((order) => order.deliveryDate !== '');
            deliveryOrders.forEach(order => {
                order.deliveryDate = new Date(order.deliveryDate);
                order.create_date = new Date(order.create_date);
            });
            this.orders = this.checkForTodayDeliverable(deliveryOrders);
            const futureOrders = deliveryOrders.filter(order => !this.orders.includes(order));
            this.futureOrders = this.futureOrders.concat(futureOrders);
            this.dateTranformation(this.orders);
            this.dateTranformation(this.futureOrders);
        }, error => {
            console.error('Fetch Order list API Error: ' + error);
        });
    }
    dateTranformation(values) {
        values.forEach(order => {
            order.deliveryDate = this.jabiyaService.getExpandedDate(order.deliveryDate);
            order.create_date = this.jabiyaService.getExpandedDate(order.create_date);
        });
    }
    gotoOrderDetail(order) {
        const navigationExtras = {
            queryParams: {
                orderId: order.id,
                deliveryDate: order.orderedDate
            },
            skipLocationChange: true
        };
        this.router.navigate(['/my-account/orderDetails/'], navigationExtras);
    }
    getValueForDate(dateValue) {
        this.getAllOrders(dateValue);
    }
    ngOnDestroy() {
        this.unSubscribe(this.getOrdersSubscription);
        this.orders = null;
        this.language = null;
        this.futureOrders = null;
        this.weekDays = null;
        this.languageJson = null;
        this.jabiyaService = null;
        this.router = null;
        this.orderService = null;
    }
    unSubscribe(subscription) {
        if (subscription !== null && rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription !== undefined) {
            subscription.unsubscribe();
        }
    }
};
OrdersComponent.ctorParameters = () => [
    { type: src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_3__.JabiyaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService }
];
OrdersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-orders',
        template: _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_orders_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrdersComponent);



/***/ }),

/***/ 4094:
/*!**********************************!*\
  !*** ./src/app/order.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/constants */ 1830);

/* eslint-disable max-len */




let OrderService = class OrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getOrders(currentWeek) {
        const url = (localStorage.getItem(_util_constants__WEBPACK_IMPORTED_MODULE_1__.apiUrl.ENVVARIABLE) === 'Development' ? _util_constants__WEBPACK_IMPORTED_MODULE_1__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.DETAILS_URL) + _util_constants__WEBPACK_IMPORTED_MODULE_1__.apiUrl.ORDER;
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        httpParams = httpParams.append('from', currentWeek[0]).append('to', currentWeek[1]);
        const httpOptions = {
            withCredentials: true,
            params: httpParams
        };
        return this.httpClient.get(url, httpOptions);
    }
    getOrderDetails(orderId) {
        const url = (localStorage.getItem(_util_constants__WEBPACK_IMPORTED_MODULE_1__.apiUrl.ENVVARIABLE) === 'Development' ? _util_constants__WEBPACK_IMPORTED_MODULE_1__.apiUrl.DEV_DETAILS_URL : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.DETAILS_URL) + _util_constants__WEBPACK_IMPORTED_MODULE_1__.apiUrl.ORDER;
        const httpOptions = {
            withCredentials: true,
        };
        return this.httpClient.get(url + '/' + orderId, httpOptions);
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
OrderService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ 9751:
/*!*******************************************!*\
  !*** ./src/app/services/week-day.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekDayPipe": () => (/* binding */ WeekDayPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jabiyaService/jabiya.service */ 596);



let WeekDayPipe = class WeekDayPipe {
    constructor(jabiyaService) {
        this.jabiyaService = jabiyaService;
    }
    transform(value, ...args) {
        return this.jabiyaService.language.week[value.getDay()];
    }
};
WeekDayPipe.ctorParameters = () => [
    { type: _jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_0__.JabiyaService }
];
WeekDayPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'weekDay'
    })
], WeekDayPipe);



/***/ }),

/***/ 4083:
/*!*************************************************************!*\
  !*** ./src/app/my-account/accounts/accounts.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".pdt-description {\n  padding-right: 16px;\n}\n\n.primary-color {\n  color: #176301;\n}\n\n.secondary-color {\n  color: #84ca08;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #eee;\n}\n\nion-label {\n  margin: 11px 20px 10px 8px;\n  font-size: 20px;\n}\n\n.pdt-price {\n  margin: 10px 0px !important;\n}\n\n.bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 16px;\n}\n\n.div-card {\n  border-bottom: 2px solid #ebebeb;\n  background-color: #fff;\n  padding: 0px 8px;\n}\n\n@media (min-width: 900px) {\n  .div-card {\n    width: 48%;\n    margin: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFEQTtFQUNFLDZCQUFBO0FBSUY7O0FBRkE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFIQTtFQUNFLDJCQUFBO0FBTUY7O0FBSkE7RUFDRSwyQkFBQTtBQU9GOztBQUxBOztFQUVFLGVBQUE7QUFRRjs7QUFOQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQVNGOztBQVBBO0VBQ0UsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVUY7O0FBUEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBVUY7QUFDRiIsImZpbGUiOiJhY2NvdW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZHQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuLnByaW1hcnktY29sb3Ige1xyXG4gIGNvbG9yOiAjMTc2MzAxO1xyXG59XHJcbi5zZWNvbmRhcnktY29sb3Ige1xyXG4gIGNvbG9yOiAjODRjYTA4O1xyXG59XHJcbi5ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMTFweCAyMHB4IDEwcHggOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucGR0LXByaWNlIHtcclxuICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5oMyxcclxucCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmgyIHtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZGl2LWNhcmQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMHB4IDhweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgLmRpdi1jYXJkIHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 26:
/*!*******************************************************************!*\
  !*** ./src/app/my-account/bill-detail/bill-detail.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-family: \"Nunito Sans\";\n  font-size: 18px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-thumbnail {\n  margin-top: 0px;\n  margin-bottom: 8px;\n  width: 50px;\n  height: 70px;\n  --padding-start: 8px;\n  margin-inline-end: 8px;\n}\n\n.pdt-description {\n  padding-right: 16px;\n}\n\nion-item {\n  border-bottom: 2px solid #ebebeb;\n  --inner-border-width: 0 0 0 0;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #eee;\n}\n\n.del-btn {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  font-size: 20px;\n  height: 2.2em;\n}\n\n.change-btn {\n  height: 1em;\n  font-weight: 600;\n}\n\nion-label {\n  margin: 11px 20px 10px 8px;\n  font-size: 20px;\n}\n\n.pdt-price {\n  margin: 10px 0px !important;\n}\n\n.bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 17px;\n}\n\n.green-text {\n  color: #2fdf75;\n}\n\n.mt-40 {\n  margin-top: 40px;\n}\n\n.min-err-msg {\n  display: block;\n  background-color: #fce795;\n  padding: 10px;\n  text-align: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  margin-left: 18px;\n  margin-right: 18px;\n  color: #ff2c2c;\n  font-weight: 600;\n  border-left: 12px solid #f35f54;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.div-card {\n  border-bottom: 2px solid #ebebeb;\n  background-color: #fff;\n  padding: 0px 8px;\n}\n\n.div-card ion-item {\n  border-bottom: none;\n  --inner-border-width: 0 0 0 0;\n}\n\n.div-card ion-item.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px;\n  padding-inline-end: 0px;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 70px;\n}\n\n.pdt-quantity {\n  bottom: 10px;\n}\n\nion-toolbar {\n  --padding-top: 10px;\n}\n\n.cart-price {\n  width: -webkit-max-content;\n  width: max-content;\n  border: 1px solid #84ca08;\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: 600;\n  color: #333652;\n  font-size: 10px;\n  position: absolute;\n  top: -8px;\n  right: 8px;\n  z-index: 100;\n  background-color: transparent;\n}\n\n.cart-price:after {\n  content: \"\";\n  position: absolute;\n  top: 95%;\n  right: 16px;\n  border-top: 0px solid #333652;\n  border-top-color: inherit;\n  border-left: 10px solid transparent;\n  border-right: 0px solid transparent;\n}\n\n.col-bottom {\n  bottom: 0px;\n  right: 5px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtBQUtGOztBQUhBO0VBQ0UsNkJBQUE7QUFNRjs7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLDJCQUFBO0FBVUY7O0FBUkE7RUFDRSwyQkFBQTtBQVdGOztBQVRBOztFQUVFLGVBQUE7QUFZRjs7QUFWQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQWFGOztBQVhBO0VBQ0UsY0FBQTtBQWNGOztBQVpBO0VBQ0UsZ0JBQUE7QUFlRjs7QUFiQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxzQkFBQTtBQWlCRjs7QUFmQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBbUJGOztBQWpCQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBb0JGOztBQWxCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXFCRjs7QUFuQkE7RUFDRSxZQUFBO0FBc0JGOztBQXBCQTtFQUNFLG1CQUFBO0FBdUJGOztBQXJCQTtFQUNFLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBd0JGOztBQXRCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQTBCRiIsImZpbGUiOiJiaWxsLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG5pb24tdGh1bWJuYWlsIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogOHB4O1xyXG59XHJcbi5wZHQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG59XHJcbi5ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxufVxyXG4uZGVsLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGhlaWdodDogMi4yZW07XHJcbn1cclxuLmNoYW5nZS1idG4ge1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDExcHggMjBweCAxMHB4IDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnBkdC1wcmljZSB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5ib2xkIHtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaDMsXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmdyZWVuLXRleHQge1xyXG4gIGNvbG9yOiAjMmZkZjc1O1xyXG59XHJcbi5tdC00MCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4ubWluLWVyci1tc2cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2U3OTU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxuICBjb2xvcjogI2ZmMmMyYztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkICNmMzVmNTQ7XHJcbn1cclxuLmJnLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5kaXYtY2FyZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmViZWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwcHggOHB4O1xyXG59XHJcbi5kaXYtY2FyZCBpb24taXRlbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcclxufVxyXG4uZGl2LWNhcmQgaW9uLWl0ZW0uaXRlbS1uYXRpdmUge1xyXG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4uaW5wdXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuLnBkdC1xdWFudGl0eSB7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5jYXJ0LXByaWNlIHtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg0Y2EwODtcclxuICBwYWRkaW5nOiAycHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzMzM2NTI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC04cHg7XHJcbiAgcmlnaHQ6IDhweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmNhcnQtcHJpY2U6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOTUlO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjMzMzNjUyO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmNvbC1ib3R0b20ge1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 5551:
/*!*******************************************************!*\
  !*** ./src/app/my-account/bills/bills.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  border-bottom: 2px solid #ebebeb;\n  --inner-border-width: 0 0 0 0;\n}\n\nion-label {\n  margin: 8px 10px 8px 2px;\n  font-size: 14px;\n}\n\n.bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\n.pdt-description {\n  padding-right: 16px;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.arrow-btn {\n  position: absolute;\n  top: -23px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUNBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQURBOztFQUVFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxzQkFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBT0Y7O0FBTEE7RUFDRSw2QkFBQTtBQVFGIiwiZmlsZSI6ImJpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luOiA4cHggMTBweCA4cHggMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbmgzLFxyXG5wIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnBkdC1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG4uYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLmFycm93LWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTIzcHg7XHJcbn1cclxuLmJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 4164:
/*!*************************************************************!*\
  !*** ./src/app/my-account/calendar/calendar.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 17px;\n}\n\n.week-container {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  margin-top: -20px;\n}\n\n.month-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: -10px;\n}\n\n.date-count {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  background-color: #f1f1f1;\n  border: 1px solid #d7d7d7;\n  text-align: center;\n  padding-top: 10px;\n  font-size: 16px;\n  color: black;\n}\n\n.active-date {\n  background-color: #8fcf1e;\n  border: 1px solid #7cc300;\n  color: #ffffff;\n}\n\n.active-color {\n  color: #84ca08;\n}\n\nion-slides {\n  height: 100px;\n}\n\n.opacity {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUFDRjs7QUFDQTs7RUFFRSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7QUFRRjs7QUFOQTtFQUNFLGFBQUE7QUFTRjs7QUFQQTtFQUNFLFlBQUE7QUFVRiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2xkIHtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaDMsXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLndlZWstY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5tb250aC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmRhdGUtY291bnQge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDdkNztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uYWN0aXZlLWRhdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZmNmMWU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzdjYzMwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uYWN0aXZlLWNvbG9yIHtcclxuICBjb2xvcjogIzg0Y2EwODtcclxufVxyXG5pb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5vcGFjaXR5IHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 8272:
/*!***********************************************************!*\
  !*** ./src/app/my-account/credits/credits.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".pdt-description {\n  padding-right: 16px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #eee;\n}\n\nion-label {\n  margin: 11px 20px 10px 8px;\n  font-size: 20px;\n}\n\n.pdt-price {\n  margin: 10px 0px !important;\n}\n\n.bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 17px;\n}\n\n.div-card {\n  border-bottom: 2px solid #ebebeb;\n  background-color: #fff;\n  padding: 0px 8px;\n}\n\n@media (min-width: 900px) {\n  .div-card {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin-top: 10px;\n    padding: 20px;\n  }\n\n  .items-card {\n    width: 45%;\n  }\n\n  .text-left-item {\n    margin-left: 5px;\n    align-items: center;\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWRpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsMkJBQUE7QUFJRjs7QUFGQTtFQUNFLDJCQUFBO0FBS0Y7O0FBSEE7O0VBRUUsZUFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFKQTtFQUNBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQU9BOztFQUxGO0lBQ0UsVUFBQTtFQVFBOztFQU5GO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7RUFTQTtBQUNGIiwiZmlsZSI6ImNyZWRpdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGR0LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMTFweCAyMHB4IDEwcHggOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucGR0LXByaWNlIHtcclxuICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5oMyxcclxucCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmgyIHtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uZGl2LWNhcmQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMHB4IDhweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4uZGl2LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLml0ZW1zLWNhcmR7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG4udGV4dC1sZWZ0LWl0ZW17XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxufSJdfQ== */");

/***/ }),

/***/ 1522:
/*!*********************************************************************!*\
  !*** ./src/app/my-account/edit-account/edit-account.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n}\n\n.register-container {\n  margin-top: -20px;\n  display: block;\n  text-align: center;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 30px;\n}\n\n.phone-code {\n  position: absolute;\n  bottom: 9px;\n  left: 20px;\n  z-index: 3;\n  font-size: 16px;\n}\n\n.f-20 {\n  font-size: 20px;\n}\n\n.item {\n  position: relative;\n}\n\n@media (min-width: 600px) {\n  .list-items {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n\n  .item {\n    width: 45%;\n    margin: 10px;\n  }\n\n  .phoneno {\n    width: 100%;\n  }\n\n  .phone-code {\n    bottom: 19px;\n    left: 31px;\n  }\n\n  .container-btn {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  .btn {\n    width: 35%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREU7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFERTtFQUNJLGVBQUE7QUFJTjs7QUFGRTtFQUNFLGtCQUFBO0FBS0o7O0FBSEU7RUFDRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0EsNkJBQUE7RUFNSjs7RUFKRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VBT0o7O0VBTEU7SUFDRSxXQUFBO0VBUUo7O0VBTkU7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQVNKOztFQVBFO0lBQ0UsYUFBQTtJQUNBLHlCQUFBO0VBVUo7O0VBUkU7SUFDRSxVQUFBO0VBV0o7QUFDRiIsImZpbGUiOiJlZGl0LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIH1cclxuICAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbnB1dC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1jb2RlIHtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA5cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLmYtMjB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLml0ZW17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgICAubGlzdC1pdGVtc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gICAgLml0ZW17XHJcbiAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICAgIC5waG9uZW5ve1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5waG9uZS1jb2Rle1xyXG4gICAgICBib3R0b206IDE5cHg7XHJcbiAgICAgIGxlZnQ6IDMxcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWJ0bntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */");

/***/ }),

/***/ 9932:
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-family: \"Nunito Sans\";\n  font-size: 18px;\n}\n\nion-toolbar {\n  --padding-top: 10px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\n.cart-price {\n  width: auto;\n  border: 1px solid #84ca08;\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: 600;\n  color: #333652;\n  font-size: 10px;\n  position: absolute;\n  top: 2px;\n  right: 8px;\n  z-index: 100;\n  background-color: transparent;\n}\n\n.cart-price:after {\n  content: \"\";\n  position: absolute;\n  top: 95%;\n  right: 16px;\n  border-top: 0px solid #333652;\n  border-top-color: inherit;\n  border-left: 10px solid transparent;\n  border-right: 0px solid transparent;\n}\n\n@media (min-width: 900px) {\n  .accounts-items {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0FBS0Y7O0FBSEE7RUFDRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQkFBQTtFQU1GO0FBQ0YiLCJmaWxlIjoibXktYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxuLmNhcnQtcHJpY2Uge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NGNhMDg7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzMzNjUyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgcmlnaHQ6IDhweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmNhcnQtcHJpY2U6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOTUlO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjMzMzNjUyO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgLmFjY291bnRzLWl0ZW1ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 1242:
/*!*********************************************************************!*\
  !*** ./src/app/my-account/order-detail/order-detail.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-family: \"Nunito Sans\";\n  font-size: 18px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-thumbnail {\n  margin-top: 0px;\n  margin-bottom: 8px;\n  width: 50px;\n  height: 70px;\n  --padding-start: 8px;\n  margin-inline-end: 8px;\n}\n\n.pdt-description {\n  padding-right: 16px;\n}\n\nion-item {\n  border-bottom: 2px solid #ebebeb;\n  --inner-border-width: 0 0 0 0;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #eee;\n}\n\n.del-btn {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  font-size: 20px;\n  height: 2.2em;\n}\n\n.change-btn {\n  height: 1em;\n  font-weight: 600;\n}\n\nion-label {\n  margin: 11px 20px 10px 8px;\n  font-size: 20px;\n}\n\n.pdt-price {\n  margin: 10px 0px !important;\n}\n\n.bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 17px;\n}\n\n.green-text {\n  color: #84ca08;\n}\n\n.mt-40 {\n  margin-top: 40px;\n}\n\n.min-err-msg {\n  display: block;\n  background-color: #fce795;\n  padding: 10px;\n  text-align: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  margin-left: 18px;\n  margin-right: 18px;\n  color: #ff2c2c;\n  font-weight: 600;\n  border-left: 12px solid #f35f54;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.div-card {\n  border-bottom: 2px solid #ebebeb;\n  background-color: #fff;\n  padding: 0px 8px;\n}\n\n.div-card ion-item {\n  border-bottom: none;\n  --inner-border-width: 0 0 0 0;\n}\n\n.div-card ion-item.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px;\n  padding-inline-end: 0px;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 70px;\n}\n\n.pdt-quantity {\n  bottom: 10px;\n}\n\nion-toolbar {\n  --padding-top: 10px;\n}\n\n.cart-price {\n  width: -webkit-max-content;\n  width: max-content;\n  border: 1px solid #84ca08;\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: 600;\n  color: #333652;\n  font-size: 10px;\n  position: absolute;\n  top: -8px;\n  right: 8px;\n  z-index: 100;\n  background-color: transparent;\n}\n\n.cart-price:after {\n  content: \"\";\n  position: absolute;\n  top: 95%;\n  right: 16px;\n  border-top: 0px solid #333652;\n  border-top-color: inherit;\n  border-left: 10px solid transparent;\n  border-right: 0px solid transparent;\n}\n\n.col-bottom {\n  bottom: 0px;\n  right: 5px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7QUFLRjs7QUFIQTtFQUNFLDZCQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSwyQkFBQTtBQVVGOztBQVJBO0VBQ0UsMkJBQUE7QUFXRjs7QUFUQTs7RUFFRSxlQUFBO0FBWUY7O0FBVkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFhRjs7QUFYQTtFQUNFLGNBQUE7QUFjRjs7QUFaQTtFQUNFLGdCQUFBO0FBZUY7O0FBYkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBZ0JGOztBQWRBO0VBQ0Usc0JBQUE7QUFpQkY7O0FBZkE7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQW1CRjs7QUFqQkE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsWUFBQTtBQXNCRjs7QUFwQkE7RUFDRSxtQkFBQTtBQXVCRjs7QUFyQkE7RUFDRSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQXdCRjs7QUF0QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0FBeUJGOztBQXZCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUEwQkYiLCJmaWxlIjoib3JkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcbmlvbi10aHVtYm5haWwge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA4cHg7XHJcbn1cclxuLnBkdC1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmViZWI7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbn1cclxuLmJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbi5kZWwtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyLjJlbTtcclxufVxyXG4uY2hhbmdlLWJ0biB7XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMTFweCAyMHB4IDEwcHggOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucGR0LXByaWNlIHtcclxuICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5oMyxcclxucCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmgyIHtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uZ3JlZW4tdGV4dCB7XHJcbiAgY29sb3I6ICM4NGNhMDg7XHJcbn1cclxuLm10LTQwIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5taW4tZXJyLW1zZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZTc5NTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gIGNvbG9yOiAjZmYyYzJjO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQgI2YzNWY1NDtcclxufVxyXG4uYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLmRpdi1jYXJkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ViZWJlYjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDBweCA4cHg7XHJcbn1cclxuLmRpdi1jYXJkIGlvbi1pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG59XHJcbi5kaXYtY2FyZCBpb24taXRlbS5pdGVtLW5hdGl2ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiB1bnNldDtcclxuICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xyXG59XHJcbi5pbnB1dC1pY29uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG4ucGR0LXF1YW50aXR5IHtcclxuICBib3R0b206IDEwcHg7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmNhcnQtcHJpY2Uge1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODRjYTA4O1xyXG4gIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzMzMzY1MjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLThweDtcclxuICByaWdodDogOHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY2FydC1wcmljZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5NSU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICMzMzM2NTI7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uY29sLWJvdHRvbSB7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1058:
/*!*********************************************************!*\
  !*** ./src/app/my-account/orders/orders.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".pdt-description {\n  padding-right: 16px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #eee;\n}\n\nion-label {\n  margin: 11px 20px 10px 8px;\n  font-size: 20px;\n}\n\n.pdt-price {\n  margin: 10px 0px !important;\n}\n\n.bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 17px;\n}\n\n.div-card {\n  border-bottom: 2px solid #ebebeb;\n  background-color: #fff;\n  padding: 0px 8px;\n}\n\n.date-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  background-color: #b3de66;\n  text-align: center;\n  padding-top: 10px;\n  font-size: 20px;\n  color: black;\n  margin-right: 16px;\n}\n\n.fs-42 {\n  font-size: 42px;\n}\n\n@media (min-width: 600px) {\n  .container-orders {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .title-orders {\n    width: 100%;\n  }\n\n  .orders {\n    width: 45%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw2QkFBQTtBQUVGOztBQUFBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSwyQkFBQTtBQUlGOztBQUZBO0VBQ0UsMkJBQUE7QUFLRjs7QUFIQTs7RUFFRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFPRjs7QUFMQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7QUFVRjs7QUFQQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUFVRjs7RUFSQTtJQUNFLFdBQUE7RUFXRjs7RUFUQTtJQUNFLFVBQUE7RUFZRjtBQUNGIiwiZmlsZSI6Im9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZHQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuLmJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luOiAxMXB4IDIwcHggMTBweCA4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5wZHQtcHJpY2Uge1xyXG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbmgzLFxyXG5wIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5kaXYtY2FyZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmViZWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwcHggOHB4O1xyXG59XHJcbi5kYXRlLWljb24ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2RlNjY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5mcy00MiB7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpe1xyXG4gIC5jb250YWluZXItb3JkZXJze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLnRpdGxlLW9yZGVyc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAub3JkZXJze1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 2002:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/accounts/accounts.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"div-card\">\r\n  <ion-grid class=\"ion-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English' ? languageJson.accountPage.english.details : languageJson.accountPage.spanish.details}}</h2>\r\n      </ion-col>\r\n      <!-- <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-button fill=\"clear\" color=\"secondary\">\r\n          <ion-icon name=\"mail-outline\"></ion-icon> {{language === 'English' ? languageJson.accountPage.english.mail : languageJson.accountPage.spanish.mail}}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-button fill=\"clear\" color=\"secondary\">\r\n          <ion-icon name=\"call-outline\"></ion-icon> {{language === 'English' ? languageJson.accountPage.english.call : languageJson.accountPage.spanish.call}}\r\n        </ion-button>\r\n      </ion-col> -->\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.accountPage.english.acc : languageJson.accountPage.spanish.acc}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"success\" class=\"bold ion-no-margin\">{{userData.company_name}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.accountPage.english.code : languageJson.accountPage.spanish.code}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"success\" class=\"bold ion-no-margin\">{{compCode}}</h3>     \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding-bottom\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.accountPage.english.adviser : languageJson.accountPage.spanish.adviser}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"bold ion-no-margin\">{{userData.salesperson}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n<div class=\"div-card\">\r\n  <ion-grid class=\"ion-padding border-bottom \">\r\n    <ion-row>\r\n      <ion-col size=\"8\" class=\"ion-text-left\">\r\n        <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English' ? languageJson.accountPage.english.pinfo : languageJson.accountPage.spanish.pinfo}}</h2>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <ion-button fill=\"clear\" color=\"secondary\" routerLink=\"../my-account/editAccount\">\r\n          <ion-icon name=\"create-outline\"></ion-icon> {{language === 'English' ? languageJson.accountPage.english.update : languageJson.accountPage.spanish.update}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.accountPage.english.name : languageJson.accountPage.spanish.name}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"success\" class=\"bold ion-no-margin\">{{accountowner}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.accountPage.english.phone : languageJson.accountPage.spanish.phone}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"success\" class=\"bold ion-no-margin\">{{userData.phone}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.accountPage.english.email : languageJson.accountPage.spanish.email}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"bold ion-no-margin\">{{userData.email}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding-bottom\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.accountPage.english.pass : languageJson.accountPage.spanish.pass}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"bold ion-no-margin\">{{userPass}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n<ion-grid class=\"ion-padding\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-text-left\">\r\n      <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English' ? languageJson.accountPage.english.help : languageJson.accountPage.spanish.help}}</h2>\r\n      <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.accountPage.english.service : languageJson.accountPage.spanish.service}}</p>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 3408:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/bill-detail/bill-detail.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{invoiceDetailRes?.invoice}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"../shopping-cart\" color=\"primary\" fill=\"solid\" class=\"round-btn\">\r\n        <ion-icon name=\"cart-outline\" class=\"mr-1\"></ion-icon>RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-button>\r\n     </ion-buttons>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/shopping-cart\">\r\n        <ion-icon slot=\"icon-only\" name=\"cart-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text color=\"secondary\" class=\"cart-price\" routerLink=\"/shopping-cart\">\r\n        RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-text>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid class=\"ion-padding border-bottom div-card\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <h2 class=\"pdt-name\" color=\"primary\">{{language ==='English'? languageJson.billDetails.english.paid : languageJson.billDetails.spanish.paid}}</h2>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-margin-bottom\">\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language ==='English'? languageJson.billDetails.english.paydate : languageJson.billDetails.spanish.paydate}} <span class=\"bold text-capitalize\">{{invoiceDetailRes?.payment_date}}</span></p>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language ==='English'? languageJson.billDetails.english.geninvoice : languageJson.billDetails.spanish.geninvoice}} <span class=\"bold text-capitalize\">{{invoiceDetailRes?.invoice_date}} </span></p>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <h3 color=\"secondary\" class=\"bold ion-no-margin\">RD${{invoiceDetailRes?.amount_total}}</h3>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <ion-button class=\"round-btn\" fill=\"outline\" color=\"secondary\" shape=\"round\" size=\"small\">\r\n          <ion-icon name=\"download-outline\"></ion-icon> {{language ==='English'? languageJson.billDetails.english.export : languageJson.billDetails.spanish.export}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-padding border-bottom\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <h3 color=\"primary\" class=\"bold ion-no-margin\">{{language ==='English'? languageJson.billDetails.english.Product : languageJson.billDetails.spanish.Product}}</h3>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-text-left\">\r\n        <h3 color=\"primary\" class=\"bold ion-no-margin\">{{language ==='English'? languageJson.billDetails.english.qty : languageJson.billDetails.spanish.qty}}.</h3>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-text-right\">\r\n        <h3 color=\"primary\" class=\"bold ion-no-margin\">Total</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\" *ngFor = \"let invoice of invoiceLines\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{invoice?.name}}</p>\r\n        <!-- <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">24 102Z</p> -->\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">RD${{invoice?.price_unit}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description col-bottom ion-no-margin\">{{invoice?.quantity}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <h3 color=\"dark\" class=\"col-bottom ion-no-margin\">RD${{invoice?.price_total}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Lorem ipsum dolor [Descripción Empaque]</p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">24 102Z</p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">RD$200.00</p>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description col-bottom ion-no-margin\">3</p>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <h3 color=\"dark\" class=\"col-bottom ion-no-margin\">RD$600.00</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Lorem ipsum dolor [Descripción Empaque]</p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">24 102Z</p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">RD$200.00</p>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description col-bottom ion-no-margin\">3</p>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <h3 color=\"dark\" class=\"col-bottom ion-no-margin\">RD$600.00</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Lorem ipsum dolor [Descripción Empaque]</p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">24 102Z</p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">RD$200.00</p>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description col-bottom ion-no-margin\">3</p>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <h3 color=\"dark\" class=\"col-bottom ion-no-margin\">RD$600.00</h3>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">Subtotal</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"primary\" class=\"bold ion-text-right ion-no-margin\">RD${{invoiceDetailRes?.amount_untaxed}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">{{language ==='English'? languageJson.billDetails.english.tax : languageJson.billDetails.spanish.tax}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"primary\" class=\"bold ion-text-right ion-no-margin\">RD${{invoiceDetailRes?.amount_tax}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">Total</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"primary\" class=\"bold ion-text-right ion-no-margin\">RD${{invoiceDetailRes?.amount_total}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 5482:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/bills/bills.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid class=\"border-bottom\">\r\n  <ion-row class=\"ion-padding border-bottom\">\r\n    <ion-col size=\"4\" class=\"ion-text-left\">\r\n      <h3 color=\"primary\" class=\"bold ion-no-margin\">#{{language ==='English'? languageJson.billPage.english.inv :languageJson.billPage.spanish.inv}}</h3>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-text-center d-inline\">\r\n      <h3 color=\"primary\" class=\"bold ion-no-margin\">{{language ==='English'? languageJson.billPage.english.date :languageJson.billPage.spanish.date}}</h3>\r\n      <ion-button class=\"ion-margin arrow-btn \" fill=\"clear\" size=\"small\" color=\"dark\">\r\n        <!-- <ion-icon name=\"chevron-down-outline\"></ion-icon> -->\r\n        <ion-icon name=\"chevron-up-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-text-center\">\r\n      <h3 color=\"primary\" class=\"bold ion-no-margin\">Total</h3>\r\n    </ion-col>\r\n  </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\" (click)=\"gotoBillDetails(invoice.id)\"  *ngFor=\"let invoice of invoiceRes | paginate: {  itemsPerPage:5, currentPage: currentPage } let i = index\">\r\n    <ion-col size=\"4\" class=\"ion-text-left\">\r\n      <h3 color=\"tertiary\" class=\"ion-no-margin\">{{invoice.name}}</h3>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-text-center\">\r\n      <h3 color=\"tertiary\" class=\"ion-no-margin\">{{invoice.invoice_date}}</h3>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-text-right\">\r\n      <h3 color=\"tertiary\" class=\"ion-no-margin\">RD${{invoice.amount_total}}</h3>\r\n    </ion-col>\r\n    </ion-row>\r\n  <ion-row>\r\n    <ion-col col-8 class=\"ion-no-padding\">\r\n      <nav data-pagination margin-top>\r\n        <pagination-controls (pageChange)=\"currentPage = $event\"></pagination-controls>\r\n      </nav>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ }),

/***/ 3465:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/calendar/calendar.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"showCalendar\">\r\n  <div class=\"ion-text-center month-container\">\r\n  <ion-button fill=\"clear\" color=\"secondary\" (click)=\"gotoPrevMonth()\">\r\n    <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n  </ion-button>\r\n  <h2 color=\"dark\" class=\"text-capitalize\">\r\n    {{monthText}}\r\n  </h2>\r\n  <ion-button fill=\"clear\" color=\"secondary\" (click)=\"gotoNextMonth()\">\r\n    <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-button>\r\n</div>\r\n<ion-slides pager=\"false\" [options]=\"slideOpts\" (ionSlideDidChange)=\"sliderChanges()\" #subscriptionSlider>\r\n  <ion-slide  *ngFor=\"let week of currentWeek; let i=index\">\r\n    <div class=\"week-container\" *ngFor=\"let weekDay of week\">\r\n      <div ion-button class=\"ion-text-center\" (click)=\"getDateDetails(weekDay, i)\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">{{weekDay?.date | weekDay}}</h3>\r\n        <h3 class=\"date-count\" [ngClass]='weekDay?.today?\"active-date\":weekDay?.disable? \"opacity\": \"\"'>{{weekDay?.date | date:'dd'}}</h3>\r\n      </div>\r\n    </div>\r\n  </ion-slide>\r\n  <!-- \r\n  <ion-slide>\r\n    <div class=\"week-container\">\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Dom</h3>\r\n        <h3 class=\"date-count\">8</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Lun</h3>\r\n        <h3 class=\"date-count\">9</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Mar</h3>\r\n        <h3 class=\"date-count\">10</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Mié</h3>\r\n        <h3 class=\"date-count\">11</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Jue</h3>\r\n        <h3 class=\"date-count\">12</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Vie</h3>\r\n        <h3 class=\"date-count\">13</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Sáb</h3>\r\n        <h3 class=\"date-count\">14</h3>\r\n      </div>\r\n    </div>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <div class=\"week-container\">\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Dom</h3>\r\n        <h3 class=\"date-count\">15</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Lun</h3>\r\n        <h3 class=\"date-count\">16</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Mar</h3>\r\n        <h3 class=\"date-count\">17</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Mié</h3>\r\n        <h3 class=\"date-count\">18</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Jue</h3>\r\n        <h3 class=\"date-count\">19</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Vie</h3>\r\n        <h3 class=\"date-count\">20</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Sáb</h3>\r\n        <h3 class=\"date-count\">21</h3>\r\n      </div>\r\n    </div>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <div class=\"week-container\">\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Dom</h3>\r\n        <h3 class=\"date-count\">22</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Lun</h3>\r\n        <h3 class=\"date-count\">23</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Mar</h3>\r\n        <h3 class=\"date-count\">24</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Mié</h3>\r\n        <h3 class=\"date-count\">25</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Jue</h3>\r\n        <h3 class=\"date-count\">26</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Vie</h3>\r\n        <h3 class=\"date-count\">28</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Sáb</h3>\r\n        <h3 class=\"date-count\">29</h3>\r\n      </div>\r\n    </div>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <div class=\"week-container\">\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Dom</h3>\r\n        <h3 class=\"date-count\">30</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Lun</h3>\r\n        <h3 class=\"date-count\">31</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center opacity\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Mar</h3>\r\n        <h3 class=\"date-count\">1</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center opacity\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Mié</h3>\r\n        <h3 class=\"date-count\">2</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center opacity\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Jue</h3>\r\n        <h3 class=\"date-count\">3</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center opacity\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Vie</h3>\r\n        <h3 class=\"date-count\">4</h3>\r\n      </div>\r\n      <div ion-button class=\"ion-text-center opacity\">\r\n        <h3 color=\"primary\" class=\"text-uppercase\">Sáb</h3>\r\n        <h3 class=\"date-count\">5</h3>\r\n      </div>\r\n    </div>\r\n  </ion-slide> -->\r\n</ion-slides>\r\n</div>");

/***/ }),

/***/ 9031:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/credits/credits.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"border-bottom\">\r\n  <ion-grid class=\"ion-padding div-card \">\r\n    <ion-row style=\"width: 100%;\">\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <h2 class=\"pdt-name\" color=\"primary\">{{language ==='English'? languageJson.creditPage.english.detail :languageJson.creditPage.spanish.detail}}</h2>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"items-card\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language ==='English'? languageJson.creditPage.english.tquota :languageJson.creditPage.spanish.tquota}} </p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"success\" class=\"bold ion-no-margin\">S/5,500.00</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"items-card\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language ==='English'? languageJson.creditPage.english.quota :languageJson.creditPage.spanish.quota}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"success\" class=\"bold ion-no-margin\">S/5,500.00</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"items-card\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language ==='English'? languageJson.creditPage.english.currentdebit :languageJson.creditPage.spanish.currentdebit}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"bold ion-no-margin\">S/1,917.79</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"items-card\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language ==='English'? languageJson.creditPage.english.debit :languageJson.creditPage.spanish.debit}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"bold ion-no-margin\">S/1,917.79</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding-bottom text-left-item ion-align-items-baseline\">\r\n      <div class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language ==='English'? languageJson.creditPage.english.condition :languageJson.creditPage.spanish.condition}}</p>\r\n      </div>\r\n      <div class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"bold ion-no-margin\">{{language ==='English'? languageJson.creditPage.english.credit :languageJson.creditPage.spanish.credit}}</h3>\r\n      </div>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>");

/***/ }),

/***/ 7594:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/edit-account/edit-account.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" color=\"primary\" size=\"large\" class=\"f-20\" routerLink=\"../accounts\"><ion-icon name=\"close-outline\" slot=\"end\"></ion-icon></ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\r\n  <form [formGroup]=\"editAccountForm\">\r\n  <div class=\"register-container ion-padding ion-text-left\">\r\n    <h2 class=\"wel-msg ion-margin\">{{language ==='English'? languageJson.editPage.english.profile :languageJson.editPage.spanish.profile}}</h2>\r\n    <div class=\"ion-margin-vertical ion-padding-bottom list-items\">\r\n      <ion-item class=\"item\">\r\n        <ion-label position=\"stacked\">{{language ==='English'? languageJson.editPage.english.fname :languageJson.editPage.spanish.fname}}</ion-label>\r\n        <ion-input required placeholder=\"\" type=\"text\" formControlName=\"firstname\" ></ion-input>\r\n        <ion-icon name=\"person-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <!-- <ion-text color=\"danger\" class=\"error-msg\">\r\n        Primer Nombre is required.\r\n      </ion-text> -->\r\n      <ion-item class=\"item\">\r\n        <ion-label position=\"stacked\">{{language ==='English'? languageJson.editPage.english.lname :languageJson.editPage.spanish.lname}}</ion-label>\r\n        <ion-input placeholder=\"\" type=\"text\" formControlName=\"lastname\"></ion-input>\r\n        <ion-icon name=\"person-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <!-- <ion-text color=\"danger\" class=\"error-msg\">\r\n        Apellido is required.\r\n      </ion-text> -->\r\n      <ion-item class=\"item\">\r\n        <ion-label position=\"stacked\">{{language ==='English'? languageJson.editPage.english.email :languageJson.editPage.spanish.email}}</ion-label>\r\n        <ion-input placeholder=\"example@gmail.com\" formControlName=\"email\" type=\"email\"></ion-input>\r\n        <ion-icon name=\"mail-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <!-- <ion-text color=\"danger\" class=\"error-msg\">\r\n        Correo Electrónico is Invalid.\r\n      </ion-text> -->\r\n      <div class=\"item\">\r\n        <ion-label slot=\"start\" class=\"phone-code\">+1</ion-label>\r\n        <ion-item class=\"phoneno\">\r\n          <ion-label position=\"stacked\">{{language ==='English'? languageJson.editPage.english.phone :languageJson.editPage.spanish.phone}}</ion-label>\r\n          <div>\r\n            \r\n          </div>\r\n          <ion-input placeholder=\"\" type=\"tel\" formControlName=\"phone\" class=\"phoneno\"></ion-input>\r\n          <ion-icon name=\"phone-portrait-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <!-- <ion-text color=\"danger\" class=\"error-msg\">\r\n        Teléfono is Invalid.\r\n      </ion-text> -->\r\n    </div>\r\n    <div class=\"ion-margin-vertical ion-padding-vertical container-btn\">\r\n    <ion-button class=\"ion-margin-vertical btn\" size=\"default\" color=\"primary\" expand=\"block\" (click)=\"sendEditAccountDetails()\">{{language ==='English'? languageJson.editPage.english.update :languageJson.editPage.spanish.update}}\r\n    </ion-button>\r\n  </div>\r\n  </div>\r\n</form>\r\n</ion-content>\r\n<div class=\"loader\" *ngIf=\"loading\"></div>");

/***/ }),

/***/ 7787:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{language ==='English' ? languageJson.accountPage.english.acc : languageJson.accountPage.spanish.acc}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"../shopping-cart\" color=\"primary\" fill=\"solid\" class=\"round-btn\">\r\n        <ion-icon name=\"cart-outline\" class=\"mr-1\"></ion-icon>RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-button>\r\n     </ion-buttons>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"../shopping-cart\">\r\n        <ion-icon slot=\"icon-only\" name=\"cart-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-text color=\"secondary\" class=\"cart-price\" routerLink=\"../shopping-cart\">\r\n      RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n    </ion-text> -->\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment scrollable value=\"pedidos\" [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\"\r\n      color=\"secondary\">\r\n      <ion-segment-button value=\"pedidos\">\r\n        {{language ==='English' ? languageJson.accountPage.english.request : languageJson.accountPage.spanish.request}}\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"cuenta\">\r\n        {{language ==='English' ? languageJson.accountPage.english.bill : languageJson.accountPage.spanish.bill}}\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"facturas\">\r\n        {{language ==='English' ? languageJson.accountPage.english.invoice : languageJson.accountPage.spanish.invoice}}\r\n      </ion-segment-button>\r\n      <ion-segment-button disabled=\"true\" value=\"creditos\">\r\n        {{language ==='English' ? languageJson.accountPage.english.credit : languageJson.accountPage.spanish.credit}}\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div [ngSwitch]=\"segment\">\r\n    <app-orders *ngSwitchCase=\"'pedidos'\">\r\n    </app-orders>\r\n    <app-accounts *ngSwitchCase=\"'cuenta'\" class=\"accounts-items\">\r\n    </app-accounts>\r\n    <app-bills *ngSwitchCase=\"'facturas'\">\r\n    </app-bills>\r\n    <app-credits *ngSwitchCase=\"'creditos'\">\r\n    </app-credits>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 7494:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/order-detail/order-detail.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{language === 'English' ? languageJson.orderDetailPage.english.detail : languageJson.orderDetailPage.spanish.detail}}</ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/shopping-cart\">\r\n        <ion-icon slot=\"icon-only\" name=\"cart-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-text color=\"secondary\" class=\"cart-price\" routerLink=\"/shopping-cart\">\r\n        RD$ 40,000\r\n      </ion-text>\r\n    </ion-buttons> -->\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/shopping-cart\" color=\"primary\" fill=\"solid\" class=\"round-btn\">\r\n        <ion-icon name=\"cart-outline\" class=\"mr-1\"></ion-icon>RD$ {{this.cartService.getTotal()._value | number:'1.0':'en-US'}}\r\n      </ion-button>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"!isLoading\">\r\n  <ion-grid class=\"ion-padding border-bottom\">\r\n    <ion-row class=\"ion-padding-horizontal\">\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English' ? languageJson.orderDetailPage.english.expdel : languageJson.orderDetailPage.spanish.expdel}}</h2>\r\n      </ion-col>\r\n      <ion-col size=\"8\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.orderDetailPage.english.orderno : languageJson.orderDetailPage.spanish.orderno}} <span class=\"bold\">{{orderNumber}}</span>\r\n        </p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.orderDetailPage.english.orderon : languageJson.orderDetailPage.spanish.orderon}} <span class=\"bold\">{{deliveryDate}}</span>\r\n        </p>\r\n        <h3 color=\"secondary\" class=\"bold\">RD$ {{orderTotal}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding border-bottom div-card\" >\r\n    <ng-container *ngFor=\"let product of orderDetails.order_lines;let i=index;\">\r\n    <ion-row class=\"border-bottom ion-padding\" >\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">{{product?.productName}}</p>\r\n        <!-- <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{product?.productQuantity}} Und * 320Z BOTELLA</p> -->\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{'                '}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-left\">\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\">{{product?.currencySymbol}} {{product?.price}} / {{product?.currencyUnitLabel}}</h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-center\">\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\">x{{product.productQuantity}}</h3>\r\n        <!-- <h3 color=\"secondary\" class=\"ion-no-margin\"><strike>x9</strike></h3> -->\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"bold ion-no-margin\">{{product?.currencySymbol}} {{product?.productPriceSubtotal}}</h3>\r\n        <!-- <h3 color=\"secondary\" class=\"ion-no-margin\"><strike>RD$1,400.00</strike></h3> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n    <!-- <ion-row class=\"border-bottom ion-padding\">\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">Motts Manzana 320nz - 1 Unidad (Plastico)</p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">1 Und * 320Z BOTELLA</p>\r\n        <h3 color=\"secondary\" class=\"green-text ion-no-margin\">0.9% Descuento</h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-left\">\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\"><span class=\"green-text\">RD$0.00</span>/Unidad</h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-center\">\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\">x0</h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"bold green-text ion-no-margin\">RD$0.00</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"border-bottom ion-padding\">\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">Motts Manzana 320nz - 1 Unidad (Plastico)</p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">1 Und * 320Z BOTELLA</p>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-left\">\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\">RD$1,300.00/Unidad</h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-center\">\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\">x0</h3>\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\"><strike>x9</strike></h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"bold ion-no-margin\">RD$1,300.00</h3>\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\"><strike>RD$1,400.00</strike></h3>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">Subtotal</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"primary\" class=\"bold ion-text-right ion-no-margin\">RD$ {{orderSubTotal}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">{{language === 'English' ? languageJson.orderDetailPage.english.tax : languageJson.orderDetailPage.spanish.tax}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"primary\" class=\"bold ion-text-right ion-no-margin\">RD$ {{orderTaxAmount}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <h2 color=\"tertiary\" class=\"bold pdt-description ion-no-margin\">Total</h2>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h2 color=\"primary\" class=\"bold ion-text-right ion-no-margin\">RD$ {{orderTotal}}</h2>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <h3 color=\"tertiary\" class=\"bold green-text pdt-description ion-no-margin\">{{language === 'English' ? languageJson.orderDetailPage.english.save : languageJson.orderDetailPage.spanish.save}}</h3>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <h3 color=\"primary\" class=\"bold green-text ion-text-right ion-no-margin\">RD$ {{savings}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding border-bottom bg-white\">\r\n      <ion-col size=\"12\" class=\"ion-text-lef\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-margin\">{{language === 'English' ? languageJson.orderDetailPage.english.buy : languageJson.orderDetailPage.spanish.buy}}</p>\r\n        <ion-button fill=\"outline\" color=\"secondary\" expand=\"block\" class=\"ion-margin\">\r\n          {{language === 'English' ? languageJson.orderDetailPage.english.addall : languageJson.orderDetailPage.spanish.addall}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 4691:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/orders/orders.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid class=\"border-bottom\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-text-left ion-padding-horizontal\">\r\n      <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English' ? languageJson.orderPage.english.delivery : languageJson.orderPage.spanish.delivery}}</h2>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-no-padding\">\r\n    <ion-col size=\"12\" class=\"ion-text-left ion-no-padding\">\r\n      <app-calendar (passDate)=\"getValueForDate($event)\" [datePeriods]=\"weekDays\"></app-calendar>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n<div *ngIf=\"orders.length === 0 && futureOrders.length === 0\">\r\n  <h1 color=\"primary\" class=\"fs-42 ion-text-center bold\"><ion-icon color=\"primary\" name=\"alert-circle-outline\"></ion-icon></h1>\r\n  <h2 class=\"pdt-name\" color=\"primary\" class=\"ion-text-center bold\">{{language === 'English' ? languageJson.orderPage.english.noorder : languageJson.orderPage.spanish.noorder}}.</h2>\r\n</div>\r\n<div *ngIf=\"orders.length > 0\">\r\n  <ion-row class=\"ion-padding-horizontal\">\r\n    <ion-col size=\"12\" class=\"ion-text-left\">\r\n      <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English' ? languageJson.orderPage.english.todaydel : languageJson.orderPage.spanish.todaydel}}</h2>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid class=\"ion-padding border-bottom div-card\">\r\n    <ion-row class=\"border-bottom ion-padding\" *ngFor=\"let order of orders\">\r\n      <ion-col size=\"8\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.orderPage.english.orderno : languageJson.orderPage.spanish.orderno}} <span class=\"bold\">{{order.name}}</span>\r\n        </p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English' ? languageJson.orderPage.english.orderon : languageJson.orderPage.spanish.orderon}} <span class=\"bold\">\r\n            {{order.create_date}}</span>\r\n        </p>\r\n        <h3 color=\"secondary\" class=\"bold\">{{order.currencySymbol}}{{order.amount_total}}</h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-left\">\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\" color=\"secondary\" (click)=\"gotoOrderDetail(order)\">{{language === 'English' ? languageJson.orderPage.english.seedetail : languageJson.orderPage.spanish.seedetail}}\r\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <!-- <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <ion-text color=\"danger\" class=\"bold ion-no-margin\">Que ha cambiado?</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">Motts Manzana 320nz - 1 Unidad (Plastico)</p>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">1 Und * 320Z BOTELLA</p>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-left\">\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\">RD$0.00/Unidad</h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-center\">\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\">x0</h3>\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\"><strike>x9</strike></h3>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\">RD$0.00</h3>\r\n        <h3 color=\"secondary\" class=\"ion-no-margin\"><strike>RD$1,400.00</strike></h3>\r\n      </ion-col> -->\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n<ion-list *ngIf=\"futureOrders.length > 0\" class=\"container-orders\">\r\n  <ion-list-header class=\"title-orders\">\r\n    <ion-label>\r\n      <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English' ? languageJson.orderPage.english.all : languageJson.orderPage.spanish.all}}</h2>\r\n      <p class=\"wel-submsg\">{{language === 'English' ? languageJson.orderPage.english.recent : languageJson.orderPage.spanish.recent}}</p>\r\n    </ion-label>\r\n  </ion-list-header>\r\n  <ion-item *ngFor=\"let order of futureOrders\" class=\"orders\">\r\n    <div class=\"date-icon\" ion-avatar>\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n    </div>\r\n    <ion-label>\r\n      <h2 color=\"tertiary\" class=\"bold ion-no-margin\">{{order.deliveryDate}}</h2>\r\n      <h3 color=\"tertiary\" class=\"ion-no-margin\">{{language === 'English' ? languageJson.orderPage.english.invoice : languageJson.orderPage.spanish.invoice}} <span class=\"bold\">{{order.name}}</span></h3>\r\n      <h3 color=\"tertiary\" class=\"ion-no-margin\">{{language === 'English' ? languageJson.orderPage.english.orderdate : languageJson.orderPage.spanish.orderdate}} <span class=\"bold\">{{order.create_date}}</span> </h3>\r\n      <h3 color=\"dark\" class=\"ion-no-margin\">Total <span class=\"bold\">\r\n          {{order.currencySymbol}}{{order.amount_total}}</span></h3>\r\n      <ion-text color=\"warning\" class=\"bold ion-no-margin\">{{language === 'English' ? languageJson.orderPage.english.exdelivery : languageJson.orderPage.spanish.exdelivery}}</ion-text>\r\n    </ion-label>\r\n    <ion-button class=\"ion-no-margin\" fill=\"clear\" color=\"secondary\" (click)=\"gotoOrderDetail(order)\">\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-item>\r\n  <!-- <ion-item>\r\n    <div class=\"date-icon\" ion-avatar>\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n    </div>\r\n    <ion-label>\r\n      <h2 color=\"tertiary\" class=\"bold ion-no-margin\">Jueves, 1 de septiembre, 2021</h2>\r\n      <h3 color=\"tertiary\" class=\"ion-no-margin\">De factura <span class=\"bold\">BE022121211</span></h3>\r\n      <h3 color=\"tertiary\" class=\"ion-no-margin\">Ordernado el <span class=\"bold\">31 agosto, 2021</span> </h3>\r\n      <h3 color=\"dark\" class=\"ion-no-margin\">Total <span class=\"bold\">RD$2,300.00</span></h3>\r\n      <ion-text color=\"success\" class=\"bold ion-no-margin\">Entregado</ion-text>\r\n    </ion-label>\r\n    <ion-button class=\"ion-no-margin\" fill=\"clear\" color=\"secondary\" (click)=\"gotoOrderDetail()\">\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"date-icon\" ion-avatar>\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n    </div>\r\n    <ion-label>\r\n      <h2 color=\"tertiary\" class=\"bold ion-no-margin\">Jueves, 1 de septiembre, 2021</h2>\r\n      <h3 color=\"tertiary\" class=\"ion-no-margin\">De factura <span class=\"bold\">BE022121211</span></h3>\r\n      <h3 color=\"tertiary\" class=\"ion-no-margin\">Ordernado el <span class=\"bold\">31 agosto, 2021</span> </h3>\r\n      <h3 color=\"dark\" class=\"ion-no-margin\">Total <span class=\"bold\">RD$2,300.00</span></h3>\r\n      <ion-text color=\"danger\" class=\"bold ion-no-margin\">Cancelado</ion-text>\r\n    </ion-label>\r\n    <ion-button class=\"ion-no-margin\" fill=\"clear\" color=\"secondary\" (click)=\"gotoOrderDetail()\">\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-item> -->\r\n</ion-list>");

/***/ })

}]);
//# sourceMappingURL=src_app_my-account_my-account_module_ts.js.map
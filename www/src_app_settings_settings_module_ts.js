(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 9887:
/*!***************************************************************!*\
  !*** ./src/app/settings/add-account/add-account.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAccountComponent": () => (/* binding */ AddAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_add_account_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-account.component.html */ 3953);
/* harmony import */ var _add_account_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-account.component.scss */ 617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var src_app_services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authServices/auth.service */ 1424);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 3413);
/* harmony import */ var src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/jabiyaService/jabiya.service */ 596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/storage */ 2755);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/constants */ 1830);



/* eslint-disable @typescript-eslint/naming-convention */








let AddAccountComponent = class AddAccountComponent {
    constructor(formBuilder, authService, jabiyaService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.jabiyaService = jabiyaService;
        this.router = router;
        // selectedLang = 'spanish';
        this.languageJson = {
            addaccPage: {
                spanish: {
                    account: 'Añadir Cuenta',
                    details: 'Por favor proporcione los siguientes detalles',
                    code: 'Código de la Tienda',
                    codereq: ' Código de la Tienda is required',
                    storename: 'Nombre de la Tienda',
                    storereq: 'Nombre de la Tienda is required',
                    direction: 'Dirección',
                    dirreq: 'Dirección is required',
                    province: 'Provincia',
                    proreq: 'Provincia is required',
                    town: 'Ciudad',
                    townreq: 'Ciudad is required',
                    seller: 'Vendedor',
                    storetype: 'Tipo de Tienda',
                    typereq: 'Tipo de Tienda is required',
                    add: 'Agregar',
                    cancel: 'cancelar',
                    selprovince: 'Seleccionar Provincia',
                    selcity: 'Seleccionar Ciudad',
                    selsector: 'Seleccionar Sector',
                    selstore: 'Seleccionar Tienda'
                },
                english: {
                    account: 'Add Account',
                    details: 'Please provide the following details',
                    code: 'Store Code',
                    codereq: 'Store Code is required',
                    storename: 'Store name',
                    storereq: 'Store Name is required',
                    direction: 'Direction',
                    dirreq: 'Address is required',
                    province: 'Province',
                    proreq: 'Province is required',
                    town: 'Town',
                    townreq: 'Town is required',
                    seller: 'Seller',
                    storetype: 'Type of store',
                    typereq: 'Store type is required',
                    add: 'Add',
                    cancel: 'cancel',
                    selprovince: 'Select Province',
                    selcity: 'Select city',
                    selsector: 'Select Sector',
                    selstore: 'Select Store'
                }
            }
        };
        this.isSubmitted = false;
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_6__.LANGUAGE);
    }
    ngOnInit() {
        this.signupForm = this.buildRegistrationForm();
        this.getStates();
        this.getClientTypes();
        this.getCurrentLocation();
        this.getUserData();
    }
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__.Storage.get({ key: 'userData' });
            this.userData = JSON.parse(value);
            console.log('userData', this.userData);
        });
    }
    buildRegistrationForm() {
        var _a;
        return this.formBuilder.group({
            userId: [(_a = this.userData) === null || _a === void 0 ? void 0 : _a.id, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            company_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            type_client_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            salesperson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            sector_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            latitude: [''],
            longitude: [''],
            address_line_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            address_line_2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        });
    }
    submit() {
        this.isSubmitted = true;
        const formValues = this.signupForm.value;
        this.signupForm.value.userId = this.userData.id;
        delete formValues.city;
        delete formValues.state;
        if (formValues.latitude === '') {
            console.log('latitude');
            if (this.language === 'Spanish') {
                this.jabiyaService.alertCreater('', 'Todos los permisos se utilizan para funciones específicas. Otorgue amablemente todos los permisos para continuar usando la aplicación Jabiya', 'Conceder', 'Permiso de ubicación');
            }
            else {
                this.jabiyaService.alertCreater('', 'All permissions are used for specific functionality. Kindly Grant all Permissions to continue using Jabiya Application', 'Grant', 'locationPermission');
            }
            this.permissionSubscription = this.jabiyaService.eventTriggerer.subscribe((event) => {
                if (event === 'locationPermission') {
                    this.getCurrentLocation();
                }
            });
            this.isSubmitted = false;
        }
        else {
            console.log('submit', this.signupForm.valid);
            // if (this.signupForm.valid) {
            console.log('submit', this.signupForm.valid);
            this.authService.addNewAccount(this.signupForm.value).subscribe((response) => {
                console.log('response', response);
                if (response.result.status_response === '200 OK') {
                    this.checkMail();
                }
            }, (error) => {
                console.error('SignUp Error: ', error);
                if (error.error.result.coreError === 2001) {
                    if (this.language === 'Spanish') {
                        this.jabiyaService.presentToast(
                        // eslint-disable-next-line max-len
                        'Error: correo electrónico o teléfono duplicado. Cuenta ya registrada:' +
                            ' ingrese un nuevo correo electrónico o vaya directamente a la pantalla de inicio de sesión');
                    }
                    else {
                        this.jabiyaService.presentToast(
                        // eslint-disable-next-line max-len
                        'Error: Duplicate email or phone. account already registered:' +
                            ' Enter a new email or go directly to the login screen');
                    }
                }
                else {
                    this.jabiyaService.presentToast('error');
                }
                this.isSubmitted = false;
            });
            // }
        }
        console.log('value', formValues);
    }
    checkMail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.language === 'Spanish') {
                this.jabiyaService.alertCreater('Cuenta Agregada!', 'Se ha agregado con éxito la cuenta deseada', 'OK', 'emailVerify');
            }
            else {
                this.jabiyaService.alertCreater('Account Added!', 'The desired account has been successfully added', 'OK', 'emailVerify');
            }
            this.emailVerifySubscription = this.jabiyaService.eventTriggerer.subscribe((event) => {
                if (event === 'emailVerify') {
                    this.router.navigate(['/home']);
                }
            });
        });
    }
    getStates() {
        this.getStateSubscription = this.authService.getStates().subscribe((states) => {
            this.states = states.result.data;
        }, (error) => {
            console.error('State Fetch Failed: ', error);
        });
    }
    getClientTypes() {
        this.getClientTypeSubscription = this.authService
            .getClientTypes()
            .subscribe((clientTypes) => {
            this.clientTypes = clientTypes.result.data;
        }, (error) => {
            console.error('State Fetch Failed: ', error);
        });
    }
    getCurrentLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition();
            const locCordinates = coordinates.coords;
            this.signupForm.get('latitude').setValue(locCordinates.latitude.toString());
            this.signupForm
                .get('longitude')
                .setValue(locCordinates.longitude.toString());
        });
    }
    stateSelected(stateId) {
        this.getCitySubscription = this.authService.getCities(stateId).subscribe((cities) => {
            this.cities = cities.result.data;
        }, (error) => {
            console.error('City Fetch Failed: ', error);
        });
    }
    citySelected(cityId) {
        this.getSectorSubscription = this.authService.getSectors(cityId).subscribe((sectors) => {
            this.sectors = sectors.result.data;
        }, (error) => {
            console.error('City Fetch Failed: ', error);
        });
    }
    ngOnDestroy() {
        this.unSubscribe(this.getStateSubscription);
        this.unSubscribe(this.getCitySubscription);
        this.unSubscribe(this.getSectorSubscription);
        this.unSubscribe(this.getClientTypeSubscription);
        this.unSubscribe(this.emailVerifySubscription);
        this.unSubscribe(this.permissionSubscription);
        this.signupForm = null;
        this.isSubmitted = null;
        this.states = null;
        this.cities = null;
        this.sectors = null;
        this.clientTypes = null;
        this.formBuilder = null;
        this.authService = null;
        this.router = null;
        this.jabiyaService = null;
    }
    unSubscribe(subscription) {
        if (subscription !== null && subscription !== undefined) {
            subscription.unsubscribe();
        }
    }
    get errorControl() {
        return this.signupForm.controls;
    }
};
AddAccountComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_4__.JabiyaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
AddAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-account',
        template: _raw_loader_add_account_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_account_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddAccountComponent);



/***/ }),

/***/ 3518:
/*!***********************************************************************!*\
  !*** ./src/app/settings/change-password/change-password.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-password.component.html */ 8824);
/* harmony import */ var _change_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss */ 4536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/constants */ 1830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 2755);







let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.languageJson = {
            passPage: {
                spanish: {
                    title: 'Cambiar la Contraseña',
                    phone: 'Teléfono',
                    name: 'Tu nombre',
                    pass: 'Contraseña',
                    confirmpass: 'Confirmar contraseña',
                    confirmbutton: 'Confirmar',
                    resetalert: 'Contraseña reestablecida correctamente.'
                },
                english: {
                    title: 'Change Password',
                    phone: 'Telephone',
                    name: 'Your name',
                    pass: 'Password',
                    confirmpass: 'Confirm Password',
                    confirmbutton: 'Confirm',
                    resetalert: 'Password reset successfully.'
                }
            }
        };
        this.showPassword = 'password';
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE);
    }
    ngOnInit() {
        this.passForm = this.buildPassForm();
        this.getUserData();
    }
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'userData' });
            this.userData = JSON.parse(value);
            console.log('userData', this.userData);
            const { phone, company_name } = this.userData;
            this.passForm.patchValue({
                phone,
                company_name
            });
        });
    }
    buildPassForm() {
        var _a;
        return this.formBuilder.group({
            userId: [(_a = this.userData) === null || _a === void 0 ? void 0 : _a.id, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            new_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            confirm_pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    changePasswordType() {
        this.showPassword = this.showPassword === 'password' ? 'text' : 'password';
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-change-password',
        template: _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_change_password_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ 8786:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-account/add-account.component */ 9887);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ 3518);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page */ 583);






const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_2__.SettingsPage
    },
    { path: 'addAccount', component: _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_0__.AddAccountComponent },
    { path: 'changePass', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 7187:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 8786);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 583);
/* harmony import */ var _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-account/add-account.component */ 9887);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password/change-password.component */ 3518);









let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage, _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_2__.AddAccountComponent, _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordComponent]
    })
], SettingsPageModule);



/***/ }),

/***/ 583:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 1790);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 5872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/constants */ 1830);






let SettingsPage = class SettingsPage {
    constructor(router) {
        this.router = router;
        this.languageJson = {
            settingPage: {
                spanish: {
                    config: 'Configuración',
                    acc: 'Mi Cuenta',
                    connect: 'Conectar una nueva cuenta',
                    pass: 'Cambiar la contraseña',
                    know: 'Conócenos',
                    term: 'Términos y condiciones',
                    policy: 'Política de datos personales y aviso de privacidad',
                    version: 'Versión de la aplicación'
                },
                english: {
                    config: 'Configuration',
                    acc: 'My account',
                    connect: 'Connect a new account',
                    pass: 'Change Password',
                    know: 'Know us',
                    term: 'Terms and Conditions',
                    policy: 'Personal data policy and privacy notice',
                    version: 'Application version'
                }
            }
        };
    }
    gotoAddAccount() {
        this.router.navigate(['/settings/addAccount']);
    }
    gotoPass() {
        this.router.navigate(['/settings/changePass']);
    }
    ngOnInit() {
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPage);



/***/ }),

/***/ 617:
/*!*****************************************************************!*\
  !*** ./src/app/settings/add-account/add-account.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".register-container {\n  margin-top: 20px;\n  display: block;\n  text-align: center;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 30px;\n}\n\n.phone-code {\n  position: absolute;\n  margin-top: -31px;\n  margin-left: 14px;\n  z-index: 1;\n  font-size: 16px;\n}\n\n@media (min-width: 600px) {\n  .container-fields {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .container-fields ion-item {\n    width: 45%;\n    margin: 10px;\n  }\n\n  .btn-container {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row-reverse;\n  }\n\n  .btn-container ion-button {\n    width: 25%;\n    margin: 5px;\n  }\n}\n\n@media (min-width: 900px) {\n  .container-fields {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .container-fields ion-item {\n    width: 45%;\n    margin: 15px;\n  }\n\n  .btn-container ion-button {\n    width: 20%;\n    margin: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUFBSjs7RUFFRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VBQ0o7O0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtFQUVKOztFQUFFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFHSjtBQUNGOztBQURFO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQUdKOztFQURFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUFJSjs7RUFGRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBS0o7QUFDRiIsImZpbGUiOiJhZGQtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXI6OmFmdGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbi8vICAgfVxyXG4gIC5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaW5wdXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICAucGhvbmUtY29kZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAgIC5jb250YWluZXItZmllbGRze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWZpZWxkcyBpb24taXRlbXtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jb250YWluZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jb250YWluZXIgaW9uLWJ1dHRvbntcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgbWFyZ2luOiA1cHhcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KXtcclxuICAgIC5jb250YWluZXItZmllbGRze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWZpZWxkcyBpb24taXRlbXtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jb250YWluZXIgaW9uLWJ1dHRvbntcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgbWFyZ2luOiA1cHhcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ 4536:
/*!*************************************************************************!*\
  !*** ./src/app/settings/change-password/change-password.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".register-container {\n  margin-top: 20px;\n  display: block;\n  text-align: center;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmlucHV0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9Il19 */");

/***/ }),

/***/ 5872:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #fbfbfb;\n}\n\nion-title {\n  font-family: \"Nunito Sans\";\n  font-size: 18px;\n}\n\n.pdt-description {\n  padding-right: 16px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #eee;\n}\n\nion-label {\n  margin: 11px 20px 10px 8px;\n  font-size: 20px;\n}\n\n.pdt-price {\n  margin: 10px 0px !important;\n}\n\n.bold {\n  font-weight: 600 !important;\n}\n\nh3,\np {\n  font-size: 14px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 17px;\n}\n\n.div-card {\n  border-bottom: 2px solid #ebebeb;\n  background-color: #fff;\n  padding: 0px 8px;\n}\n\n.bg-palewhite {\n  --background: #fbfbfb;\n}\n\n.item-inner {\n  border-style: none !important;\n}\n\nion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\nion-item:last-child {\n  --inner-border-width: 0 0 0px 0;\n}\n\nion-list {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\nion-list-header {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\nion-list-header:first-child {\n  border-top: 0px solid #ebebeb;\n}\n\n.border-top {\n  border-top: 1px solid #ebebeb;\n}\n\n@media (min-width: 900px) {\n  .container-config {\n    display: flex;\n    margin: 10px;\n  }\n\n  .items-config {\n    width: 50%;\n    border: 0px;\n    background: #fff;\n    box-shadow: 0px 0px 4px #ccc;\n    margin: 0px 7px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSw2QkFBQTtBQUlGOztBQUZBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSwyQkFBQTtBQU1GOztBQUpBO0VBQ0UsMkJBQUE7QUFPRjs7QUFMQTs7RUFFRSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVJBO0VBQ0UscUJBQUE7QUFXRjs7QUFUQTtFQUNFLDZCQUFBO0FBWUY7O0FBVkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBYUY7O0FBWEE7RUFDRSwrQkFBQTtBQWNGOztBQVpBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQWVGOztBQWJBO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtBQWdCRjs7QUFkQTtFQUNFLDZCQUFBO0FBaUJGOztBQWZBO0VBQ0UsNkJBQUE7QUFrQkY7O0FBaEJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQW1CRjs7RUFqQkE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0VBb0JGO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5wZHQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuLmJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luOiAxMXB4IDIwcHggMTBweCA4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5wZHQtcHJpY2Uge1xyXG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbmgzLFxyXG5wIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5kaXYtY2FyZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmViZWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwcHggOHB4O1xyXG59XHJcbi5iZy1wYWxld2hpdGUge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG4uaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG59XHJcbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5pb24tbGlzdC1oZWFkZXIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG59XHJcbmlvbi1saXN0LWhlYWRlcjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNlYmViZWI7XHJcbn1cclxuLmJvcmRlci10b3Age1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlYmViO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCl7XHJcbiAgLmNvbnRhaW5lci1jb25maWd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICAuaXRlbXMtY29uZmlne1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4ICNjY2M7XHJcbiAgICBtYXJnaW46IDBweCA3cHg7XHJcbiAgfVxyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 3953:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/add-account/add-account.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{language === 'English'? languageJson.addaccPage.english.account :languageJson.addaccPage.spanish.account}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding-horizontal\" [formGroup]=\"signupForm\">\r\n  <div class=\"register-container ion-padding-horizontal ion-text-left\">\r\n    <p class=\"wel-submsg\">{{language === 'English'? languageJson.addaccPage.english.details :languageJson.addaccPage.spanish.details}}</p>\r\n    <div class=\"ion-margin-vertical ion-padding-bottom container-fields\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{language === 'English'? languageJson.addaccPage.english.code :languageJson.addaccPage.spanish.code}}</ion-label>\r\n        <ion-input formControlName=\"company_code\" placeholder=\"Ex.xxxxxxx\" type=\"text\"></ion-input>\r\n\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.company_code.errors?.required\">\r\n        {{language === 'English'? languageJson.addaccPage.english.codereq :languageJson.addaccPage.spanish.codereq}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{language === 'English'? languageJson.addaccPage.english.storename :languageJson.addaccPage.spanish.storename}}</ion-label>\r\n        <ion-input formControlName=\"company_name\" placeholder=\"Ex.xxxxxxx\" type=\"text\"></ion-input>\r\n        <ion-icon name=\"business-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.company_code.errors?.required\">\r\n        {{language === 'English'? languageJson.addaccPage.english.storereq :languageJson.addaccPage.spanish.storereq}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{language === 'English'? languageJson.addaccPage.english.direction :languageJson.addaccPage.spanish.direction}}</ion-label>\r\n        <ion-input *ngIf=\"language ==='Spanish'\" formControlName=\"address_line_1\" placeholder=\"Dirección Línea 1\" type=\"text\"></ion-input>\r\n        <ion-input *ngIf=\"language ==='English'\"formControlName=\"address_line_1\" placeholder=\"Address Line 1\" type=\"text\"></ion-input>\r\n        <ion-icon name=\"location-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input *ngIf=\"language ==='Spanish'\" formControlName=\"address_line_2\" placeholder=\"Dirección Línea 2\" type=\"text\"></ion-input>\r\n        <ion-input *ngIf=\"language ==='English'\" formControlName=\"address_line_2\" placeholder=\"Address Line 2\" type=\"text\"></ion-input>\r\n        <ion-icon name=\"location-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.address_line_1.value === '' && errorControl.address_line_2.value === ''\">\r\n        {{language === 'English'? languageJson.addaccPage.english.dirreq :languageJson.addaccPage.spanish.dirreq}}.\r\n      </ion-text>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{language === 'English'? languageJson.addaccPage.english.province :languageJson.addaccPage.spanish.province}}</ion-label>\r\n      <ion-select interface=\"popover\" placeholder=\"{{language === 'English' ? languageJson.addaccPage.english.selprovince : languageJson.addaccPage.spanish.selprovince}}\" (ionChange)=\"stateSelected($event.target.value)\" formControlName=\"state\">\r\n        <ion-select-option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.state.errors?.required\">\r\n      {{language === 'English'? languageJson.addaccPage.english.proreq :languageJson.addaccPage.spanish.proreq}}.\r\n    </ion-text>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{language === 'English'? languageJson.addaccPage.english.town :languageJson.addaccPage.spanish.town}}</ion-label>\r\n        <ion-select interface=\"popover\" placeholder=\"{{language === 'English' ? languageJson.addaccPage.english.selcity : languageJson.addaccPage.spanish.selcity}}\" (ionChange)=\"citySelected($event.target.value)\" formControlName=\"city\" [disabled]=\"errorControl.state.value === ''\">\r\n        <ion-select-option *ngFor=\"let city of cities\" [value]=\"city.id\">{{city.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.city.errors?.required\">\r\n      {{language === 'English'? languageJson.addaccPage.english.townreq :languageJson.addaccPage.spanish.townreq}}.\r\n    </ion-text>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Sector</ion-label>\r\n      <ion-select interface=\"popover\" placeholder=\"{{language === 'English' ? languageJson.addaccPage.english.selsector : languageJson.addaccPage.spanish.selsector}}\" formControlName=\"sector_id\" [disabled]=\"errorControl.city.value === ''\">\r\n        <ion-select-option *ngFor=\"let sector of sectors\" [value]=\"sector.id\">{{sector.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.sector_id.errors?.required\">\r\n      Sector is required.\r\n    </ion-text>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{language === 'English'? languageJson.addaccPage.english.seller :languageJson.addaccPage.spanish.seller}}</ion-label>\r\n      <ion-input placeholder=\"Ex.xxxxxxx\" formControlName=\"salesperson\" type=\"text\"></ion-input>\r\n      <ion-icon name=\"person-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n    </ion-item>\r\n    <!-- <ion-text color=\"danger\" class=\"error-msg\">\r\n    Vendedor is required.\r\n  </ion-text> -->\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">{{language === 'English'? languageJson.addaccPage.english.storetype :languageJson.addaccPage.spanish.storetype}}</ion-label>\r\n    <ion-select interface=\"popover\" placeholder=\"{{language === 'English' ? languageJson.addaccPage.english.selstore : languageJson.addaccPage.spanish.selstore}}\" formControlName=\"type_client_id\">\r\n      <ion-select-option *ngFor=\"let clientType of clientTypes\" [value]=\"clientType.id\">{{clientType.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.type_client_id.errors?.required\">\r\n    {{language === 'English'? languageJson.addaccPage.english.typereq :languageJson.addaccPage.spanish.typereq}}.\r\n  </ion-text>\r\n    </div>\r\n    <div class=\"btn-container\">\r\n      <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" (click)=\"submit()\" expand=\"block\">{{language === 'English'? languageJson.addaccPage.english.add :languageJson.addaccPage.spanish.add}}\r\n      </ion-button>\r\n      <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" fill=\"outline\" expand=\"block\" routerLink=\"/settings\">{{language === 'English'? languageJson.addaccPage.english.cancel :languageJson.addaccPage.spanish.cancel}}\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 8824:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/change-password/change-password.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\r\n  change-password works!\r\n</p>\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{language === 'English'? languageJson.passPage.english.title :languageJson.passPage.spanish.title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding-horizontal\" [formGroup]=\"passForm\">\r\n  <div class=\"register-container ion-padding-horizontal ion-text-left\">\r\n   \r\n    <div class=\"ion-margin-vertical ion-padding-bottom\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{language === 'English'? languageJson.passPage.english.phone :languageJson.passPage.spanish.phone}}</ion-label>\r\n        <ion-input formControlName=\"phone\"  type=\"text\"></ion-input>\r\n      </ion-item>    \r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{language === 'English'? languageJson.passPage.english.name :languageJson.passPage.spanish.name}}</ion-label>\r\n        <ion-input formControlName=\"company_name\"  type=\"text\"></ion-input>\r\n        <ion-icon name=\"business-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item> \r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{language === 'English'? languageJson.passPage.english.pass :languageJson.passPage.spanish.pass}}</ion-label>\r\n        <ion-input placeholder=\".......\" formControlName=\"new_password\" [type]=\"showPassword\" (keyup.enter)=\"login()\"></ion-input>\r\n        <ion-icon name=\"eye-off-outline\" *ngIf=\"showPassword ==='password'\" slot=\"end\" class=\"input-icon\" (click)=\"changePasswordType()\"></ion-icon>\r\n        <ion-icon name=\"eye-outline\" *ngIf=\"showPassword ==='text'\" slot=\"end\" class=\"input-icon\" (click)=\"changePasswordType()\"></ion-icon>\r\n        <!-- <ion-input formControlName=\"pass\"  type=\"password\"></ion-input> -->       \r\n      </ion-item> \r\n      <ion-item>\r\n        <ion-input placeholder=\".......\" formControlName=\"confirm_pwd\" [type]=\"showPassword\" (keyup.enter)=\"login()\"></ion-input>\r\n        <ion-icon name=\"eye-off-outline\" *ngIf=\"showPassword ==='password'\" slot=\"end\" class=\"input-icon\" (click)=\"changePasswordType()\"></ion-icon>\r\n        <ion-icon name=\"eye-outline\" *ngIf=\"showPassword ==='text'\" slot=\"end\" class=\"input-icon\" (click)=\"changePasswordType()\"></ion-icon>\r\n      </ion-item>   \r\n    \r\n  \r\n    </div>    \r\n    <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" fill=\"outline\" expand=\"block\" routerLink=\"/settings\">{{language === 'English'? languageJson.passPage.english.confirmbutton :languageJson.passPage.spanish.confirmbutton}}\r\n    </ion-button>\r\n  </div>\r\n  </ion-content>\r\n");

/***/ }),

/***/ 1790:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-menu-button></ion-menu-button> -->\r\n      <ion-button routerLink=\"../home\" color=\"dark\" fill=\"clear\">\r\n        <ion-icon name=\"home-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{language === 'English'? languageJson.settingPage.english.config :languageJson.settingPage.spanish.config}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <div class=\"container-config\">\r\n    <ion-list class=\"items-config\">\r\n      <ion-list-header class=\"bg-palewhite\">\r\n        <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English'? languageJson.settingPage.english.acc :languageJson.settingPage.spanish.acc}}</h2>\r\n      </ion-list-header>\r\n      <ion-item (click)=\"gotoAddAccount()\">\r\n        <ion-label>\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.settingPage.english.connect :languageJson.settingPage.spanish.connect}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <!-- <ion-item (click)=\"gotoPass()\"> -->\r\n        <ion-item>\r\n        <ion-label>\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.settingPage.english.pass :languageJson.settingPage.spanish.pass}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n    <!-- <ion-list>\r\n      <ion-list-header class=\"bg-palewhite\">\r\n        <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English'? languageJson.settingPage.english.know :languageJson.settingPage.spanish.know}}</h2>\r\n      </ion-list-header>\r\n      <ion-item>\r\n        <ion-label>\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.settingPage.english.term :languageJson.settingPage.spanish.term}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <p color=\"tertiary\" class=\"pdt-description ion-no-margin\">{{language === 'English'? languageJson.settingPage.english.policy :languageJson.settingPage.spanish.policy}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list> -->\r\n    <ion-item class=\"bg-palewhite border-top items-config\">\r\n      <ion-label>\r\n        <h2 class=\"pdt-name\" color=\"primary\">{{language === 'English'? languageJson.settingPage.english.version :languageJson.settingPage.spanish.version}}</h2>\r\n        <p color=\"tertiary\" class=\"pdt-description ion-padding-top\">1.0</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map
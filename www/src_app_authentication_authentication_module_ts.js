(self["webpackChunkJabiya"] = self["webpackChunkJabiya"] || []).push([["src_app_authentication_authentication_module_ts"],{

/***/ 6320:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AuthenticationPageRoutingModule": () => (/* binding */ AuthenticationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 5752);
/* harmony import */ var _lang_popover_lang_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang-popover/lang-popover.component */ 6398);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 2045);
/* harmony import */ var _passcode_verification_passcode_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passcode-verification/passcode-verification.component */ 9175);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ 6397);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 4795);









const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
    },
    // { path: 'intro', component: IntroComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: 'forgotPassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordComponent },
    { path: 'resetPassword', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__.ResetPasswordComponent },
    { path: 'passcodeVerification', component: _passcode_verification_passcode_verification_component__WEBPACK_IMPORTED_MODULE_3__.PasscodeVerificationComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent },
    { path: 'langPopover', component: _lang_popover_lang_popover_component__WEBPACK_IMPORTED_MODULE_1__.LangPopoverComponent },
];
let AuthenticationPageRoutingModule = class AuthenticationPageRoutingModule {
};
AuthenticationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    })
], AuthenticationPageRoutingModule);



/***/ }),

/***/ 9173:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPageModule": () => (/* binding */ AuthenticationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 6320);
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.page */ 3216);
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro/intro.component */ 2001);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 2045);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 5752);
/* harmony import */ var _passcode_verification_passcode_verification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passcode-verification/passcode-verification.component */ 9175);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ 6397);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 4795);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-code-input */ 4138);
/* harmony import */ var _lang_popover_lang_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lang-popover/lang-popover.component */ 6398);















let AuthenticationPageModule = class AuthenticationPageModule {
};
AuthenticationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationPageRoutingModule,
            angular_code_input__WEBPACK_IMPORTED_MODULE_14__.CodeInputModule.forRoot({
                codeLength: 6,
                isCharsCode: true,
                code: ''
            })
        ],
        declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_1__.AuthenticationPage,
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__.IntroComponent,
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordComponent,
            _passcode_verification_passcode_verification_component__WEBPACK_IMPORTED_MODULE_5__.PasscodeVerificationComponent,
            _register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent,
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__.ResetPasswordComponent,
            _lang_popover_lang_popover_component__WEBPACK_IMPORTED_MODULE_8__.LangPopoverComponent
        ]
    })
], AuthenticationPageModule);



/***/ }),

/***/ 3216:
/*!*******************************************************!*\
  !*** ./src/app/authentication/authentication.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPage": () => (/* binding */ AuthenticationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./authentication.page.html */ 3504);
/* harmony import */ var _authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.page.scss */ 253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let AuthenticationPage = class AuthenticationPage {
    constructor() { }
    ngOnInit() {
    }
};
AuthenticationPage.ctorParameters = () => [];
AuthenticationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-authentication',
        template: _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthenticationPage);



/***/ }),

/***/ 5752:
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot-password.component.html */ 3431);
/* harmony import */ var _forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.component.scss */ 9402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var src_app_services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authServices/auth.service */ 1424);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/constants */ 1830);









let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(router, formBuilder, authService, toastController, alertController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.languageJson = {
            forgotPage: {
                spanish: {
                    recovery: '¿Has olvidado tu contraseña?',
                    regemail: ' Ingrese su correo electrónico registrado y número de teléfono móvil para recuperar su cuenta contraseña',
                    phone: 'Número de teléfono',
                    send: 'Enviar',
                    emailcheck: 'Consultar su correo electrónico',
                    back: 'Atrás para iniciar sesión',
                    passsent: 'Hemos enviado una instrucción de recuperación de contraseña a su correo electrónico'
                },
                english: {
                    recovery: 'have you forgotten your password?',
                    regemail: 'Enter your registered email and mobile number to recover your account password',
                    phone: 'Phone number',
                    send: 'send',
                    emailcheck: 'Check your e-mail',
                    back: 'Back to login',
                    passsent: 'We have sent a password recovery instruction to your email'
                }
            }
        };
        this.mailSent = false;
        this.language = localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE);
    }
    onSubmit() {
        this.mailSent = true;
    }
    ngOnInit() {
        this.passwordResetForm = this.intializepasswordResetForm();
    }
    intializepasswordResetForm() {
        return this.formBuilder.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    reset() {
        console.log('value', this.passwordResetForm.value);
        this.authService.forgotPassword(this.passwordResetForm.value).subscribe((response) => {
            console.log('response', response);
            if (response.result === 'Ok') {
                this.checkMail();
            }
        }, (error) => {
            if (this.language === 'Spanish') {
                this.presentToast('Correo electrónico o número de teléfono incorrecto');
            }
            else {
                this.presentToast('Wrong email or phone number');
            }
        });
    }
    navigate() {
        this.router.navigate(['/authentication/login']);
    }
    presentToast(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: error,
                duration: 2000
            });
            toast.present();
        });
    }
    checkMail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.language === 'Spanish') {
                const alert = yield this.alertController.create({
                    // cssClass: 'successfull-registration',
                    header: 'Consultar su correo electrónico',
                    // subHeader: 'Subtitle',
                    message: 'Verifique su correo electrónico y siga las instrucciones para restablecer su contraseña',
                    buttons: [{ text: 'OK', handler: (d) => this.navigate() }]
                });
                yield alert.present();
            }
            else {
                const alert = yield this.alertController.create({
                    // cssClass: 'successfull-registration',
                    header: 'Check your e-mail',
                    // subHeader: 'Subtitle',
                    message: 'Check your email and follow the instructions to reset your password',
                    buttons: [{ text: 'OK', handler: (d) => this.navigate() }]
                });
                yield alert.present();
            }
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
ForgotPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ 2001:
/*!*********************************************************!*\
  !*** ./src/app/authentication/intro/intro.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroComponent": () => (/* binding */ IntroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./intro.component.html */ 7499);
/* harmony import */ var _intro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.component.scss */ 2567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let IntroComponent = class IntroComponent {
    constructor() { }
    ngOnInit() { }
};
IntroComponent.ctorParameters = () => [];
IntroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-intro',
        template: _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_intro_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IntroComponent);



/***/ }),

/***/ 6398:
/*!***********************************************************************!*\
  !*** ./src/app/authentication/lang-popover/lang-popover.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangPopoverComponent": () => (/* binding */ LangPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_lang_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lang-popover.component.html */ 9497);
/* harmony import */ var _lang_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang-popover.component.scss */ 7345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let LangPopoverComponent = class LangPopoverComponent {
    constructor() { }
    ngOnInit() { }
};
LangPopoverComponent.ctorParameters = () => [];
LangPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lang-popover',
        template: _raw_loader_lang_popover_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lang_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LangPopoverComponent);



/***/ }),

/***/ 2045:
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.component.html */ 4469);
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ 3835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 2755);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authServices/auth.service */ 1424);
/* harmony import */ var _lang_popover_lang_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang-popover/lang-popover.component */ 6398);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util/constants */ 1830);












let LoginComponent = class LoginComponent {
    constructor(router, popoverController, formBuilder, authService, toastController) {
        this.router = router;
        this.popoverController = popoverController;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastController = toastController;
        this.selectedLang = 'Spanish';
        // @Output() languageCreated = new EventEmitter<{ ln: string }>()
        // langSelection() {
        //   this.languageCreated.emit({ ln: this.selectedLang })
        //   console.log("output emit", this.selectedLang);
        //   localStorage.setItem(LANGUAGE, this.selectedLang);
        // }
        this.languages = [
            { lang: 'Spanish', imagesrc: './././assets/images/Spanish.png' },
            { lang: 'English', imagesrc: './././assets/images/English.png' },
        ];
        this.showPassword = 'password';
        this.loading = false;
        this.loginClicked = false;
        this.envVariable = 'Development';
        this.routeNameUrl = this.router.url;
        this.languageJson = {
            loginPage: {
                spanish: {
                    welcomemsg: 'Entrar a su Cuenta',
                    description: 'Ingrese su correo electrónico y contraseña y presione iniciar sesión para ingresar a su cuenta',
                    email: 'Teléfono / Correo electrónico',
                    password: 'Contraseña',
                    resetPasswordText: '¿Olvidaste tu contraseña?',
                    registerAccountText: '¿No tienes una cuenta?',
                    registerAccountButtonText: 'Inscríbete',
                    loginButtonText: 'Entra a tu cuenta',
                    errorMessage: 'Contraseña o nombre de usuario incorrecto',
                    remember: 'Recuérdame',
                },
                english: {
                    welcomemsg: 'Login to your account',
                    description: 'Enter your email and password and press login to go into your account',
                    email: 'Phone Number / Email',
                    password: 'Password',
                    resetPasswordText: 'Forgot your password?',
                    registerAccountText: 'Don’t have an account?',
                    registerAccountButtonText: 'Register',
                    loginButtonText: 'Login',
                    errorMessage: 'Wrong password or username',
                    remember: 'Remember Me',
                },
            },
        };
        localStorage.setItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_5__.LANGUAGE, this.selectedLang);
        localStorage.setItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_5__.ENVVARIABLE, this.envVariable);
    }
    langSelection(value) {
        const selectedLang = 'Spanish';
        console.log('Register language value', value);
        if (value !== null) {
            localStorage.setItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_5__.LANGUAGE, value);
            console.log('selected value', value);
        }
        else {
            localStorage.setItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_5__.LANGUAGE, selectedLang);
            console.log('Default language value', value);
        }
    }
    langPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _lang_popover_lang_popover_component__WEBPACK_IMPORTED_MODULE_4__.LangPopoverComponent,
                cssClass: 'lang-popover-css',
                event: ev,
                backdropDismiss: true,
                showBackdrop: true,
                mode: 'ios',
                translucent: true,
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    navigate() {
        this.router.navigate(['/home']);
    }
    ngOnInit() {
        this.signinForm = this.intializeLoginForm();
        const savedCredential = JSON.parse(localStorage.getItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_5__.SAVED_CREDENTIAL));
        console.log(savedCredential);
        if (savedCredential !== null) {
            this.signinForm.patchValue(savedCredential);
        }
    }
    intializeLoginForm() {
        return this.formBuilder.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            rememberMe: [false],
        });
    }
    envVariableSelection(varible) {
        this.envVariable = varible.detail.value;
        console.log('varible', varible.detail.value);
        localStorage.setItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_5__.ENVVARIABLE, varible.detail.value);
    }
    login() {
        this.loading = true;
        this.loginClicked = true;
        const formValues = this.signinForm.value;
        this.loginSubscription = this.authService.login(formValues).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (formValues.rememberMe) {
                delete formValues.rememberMe;
                localStorage.setItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_5__.SAVED_CREDENTIAL, JSON.stringify(formValues));
            }
            console.log('response', response);
            this.loading = false;
            if (response.result.status_response === '200 OK') {
                this.loginClicked = false;
                // document.cookie = 'session_id=' + response.result.session_id;
                this.navigate();
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                    key: 'userData',
                    value: JSON.stringify(response.result.data),
                });
                this.authService.setUser.next();
            }
        }), (error) => {
            this.loginClicked = false;
            this.loading = false;
            console.error('error', error);
            this.presentToast(this.selectedLang === 'Spanish'
                ? this.languageJson.loginPage.spanish.errorMessage
                : this.languageJson.loginPage.english.errorMessage);
        });
    }
    loadLang() {
        setTimeout(() => {
            const radios = document.getElementsByClassName('alert-radio-label');
            for (let index = 0; index < radios.length; index++) {
                const singrad = radios[index];
                singrad.innerHTML = singrad.innerHTML.concat('<img src=' +
                    this.languages[index].imagesrc +
                    ' style="width:24px; position:absolute; right:20px;"/>');
                singrad.style.fontSize = '22px';
                singrad.style.textTransform = 'uppercase';
            }
        }, 200);
    }
    presentToast(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: error,
                duration: 2000,
            });
            toast.present();
        });
    }
    changePasswordType() {
        this.showPassword = this.showPassword === 'password' ? 'text' : 'password';
    }
    ngOnDestroy() {
        this.unSubscribe(this.loginSubscription);
        this.selectedLang = null;
        this.languages = null;
        this.signinForm = null;
        this.showPassword = null;
        this.loading = null;
        this.languageJson = null;
        this.router = null;
        this.popoverController = null;
        this.formBuilder = null;
        this.authService = null;
        this.toastController = null;
    }
    unSubscribe(subscription) {
        if (subscription !== null && subscription !== undefined) {
            subscription.unsubscribe();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginComponent);



/***/ }),

/***/ 9175:
/*!*****************************************************************************************!*\
  !*** ./src/app/authentication/passcode-verification/passcode-verification.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasscodeVerificationComponent": () => (/* binding */ PasscodeVerificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_passcode_verification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./passcode-verification.component.html */ 9288);
/* harmony import */ var _passcode_verification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passcode-verification.component.scss */ 1826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);





let PasscodeVerificationComponent = class PasscodeVerificationComponent {
    constructor(router) {
        this.router = router;
        this.showStatus = false;
    }
    onSubmit() {
        this.showStatus = true;
    }
    // this called every time when user changed the code
    onCodeChanged(code) {
    }
    // this called only if user entered full code
    onCodeCompleted(code) {
    }
    ngOnInit() { }
};
PasscodeVerificationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PasscodeVerificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-passcode-verification',
        template: _raw_loader_passcode_verification_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_passcode_verification_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PasscodeVerificationComponent);



/***/ }),

/***/ 6397:
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.component.html */ 4735);
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss */ 391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 3413);
/* harmony import */ var src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/jabiyaService/jabiya.service */ 596);
/* harmony import */ var src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/constants */ 1830);
/* harmony import */ var _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authServices/auth.service */ 1424);



/* eslint-disable @typescript-eslint/naming-convention */








let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, authService, router, jabiyaService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.jabiyaService = jabiyaService;
        this.selectedLang = 'Spanish';
        this.languages = [
            { lang: 'Spanish', imagesrc: 'assets/images/Spanish.png' },
            { lang: 'English', imagesrc: 'assets/images/English.png' },
        ];
        this.languageJson = {
            regPage: {
                spanish: {
                    account: 'Crea una cuenta',
                    details: 'Si ya estás registrado, regresar a la pantalla anterior y usa el botón de “Iniciar Sesión”',
                    name: 'Nombre',
                    fname: ' Primer Nombre is required',
                    lname: 'Apellido',
                    lnamereq: 'Nombre de la Tienda is required',
                    email: 'Correo Electrónico',
                    emailin: 'Correo Electrónico is Invalid',
                    emailreq: 'Correo Electrónico is required',
                    phone: 'Teléfono',
                    phonereq: 'Teléfono is required',
                    phonein: 'Teléfono is invalid',
                    storenamee: 'Nombre de la Tienda',
                    storenameereq: 'Nombre de la Tienda is required',
                    code: 'Código de la Tienda',
                    codereq: 'Código de la Tienda is required',
                    owner: 'Nombre del Dueño',
                    ownerreq: 'Nombre del Dueño is required',
                    direction: 'Dirección',
                    directionreq: 'Dirección is required',
                    province: 'Provincia',
                    provincereq: 'Provincia is required',
                    town: 'Ciudad',
                    townreq: 'Ciudad is required',
                    seller: 'Vendedor',
                    sellreq: 'Vendedor is required',
                    storetype: 'Tipo de Tienda',
                    storetypereq: ' Tipo de Tienda is required',
                    signup: 'Regístrate',
                    selprovince: 'Seleccionar Provincia',
                    selcity: 'Seleccionar Ciudad',
                    selsector: 'Seleccionar Sector',
                    selstore: 'Seleccionar Tienda'
                },
                english: {
                    account: 'Create an account',
                    details: 'If you are already registered, return to the previous screen and use the "Login" button',
                    name: 'First Name',
                    fname: 'First name is required',
                    lname: 'Last name',
                    lnamereq: 'Last Name is required',
                    email: 'Email',
                    emailin: 'Email is invalid',
                    emailreq: 'Email is required',
                    phone: 'Telephone',
                    phonereq: 'Telephone is required',
                    phonein: 'Telephone is invalid',
                    storenamee: 'Store name',
                    storenameereq: 'Store name is required',
                    code: 'Store code',
                    codereq: 'Store code is required',
                    owner: 'Owner Name',
                    ownerreq: 'Owner Name is required',
                    direction: 'Direction',
                    directionreq: 'Direction is required',
                    province: 'Province',
                    provincereq: 'Province is required',
                    town: 'Town',
                    townreq: 'Town is required',
                    seller: 'Seller',
                    sellreq: 'Seller is required',
                    storetype: 'Type of store',
                    storetypereq: 'Store type is required',
                    signup: 'Sign up',
                    selprovince: 'Select Province',
                    selcity: 'Select city',
                    selsector: 'Select Sector',
                    selstore: 'Select Store'
                }
            }
        };
        this.isSubmitted = false;
        this.localLanguage = jabiyaService.language;
    }
    ngOnInit() {
        this.signupForm = this.buildRegistrationForm();
        this.getStates();
        this.getClientTypes();
        this.getCurrentLocation();
    }
    buildRegistrationForm() {
        return this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.EMAIL_PATTERN)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.NUMBER_ONLY_PATTERN)]],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            company_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            type_client_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            salesperson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            sector_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            owner_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            latitude: [''],
            longitude: [''],
            address_line_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            address_line_2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    langSelection(value) {
        const selectedLang = 'Spanish';
        console.log('login language value', value);
        if (value !== null) {
            localStorage.setItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE, value);
            console.log('selected value', value);
        }
        else {
            localStorage.setItem(src_app_util_constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE, selectedLang);
            console.log('Default language value', value);
        }
    }
    getStates() {
        this.getStateSubscription =
            this.authService.getStates().subscribe((states) => {
                this.states = states.result.data;
            }, error => {
                console.error('State Fetch Failed: ', error);
            });
    }
    getClientTypes() {
        this.getClientTypeSubscription =
            this.authService.getClientTypes().subscribe((clientTypes) => {
                this.clientTypes = clientTypes.result.data;
            }, error => {
                console.error('State Fetch Failed: ', error);
            });
    }
    getCurrentLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.getCurrentPosition();
            const locCordinates = coordinates.coords;
            this.signupForm.get('latitude').setValue(locCordinates.latitude.toString());
            this.signupForm.get('longitude').setValue(locCordinates.longitude.toString());
        });
    }
    get errorControl() {
        return this.signupForm.controls;
    }
    submit() {
        this.isSubmitted = true;
        const formValues = this.signupForm.value;
        delete formValues.city;
        delete formValues.state;
        if (formValues.latitude === '') {
            this.jabiyaService.alertCreater('', this.localLanguage.locationPermissionText, this.localLanguage.locationPermissionButton, 'locationPermission');
            this.permissionSubscription =
                this.jabiyaService.eventTriggerer.subscribe(event => {
                    if (event === 'locationPermission') {
                        this.getCurrentLocation();
                    }
                });
            this.isSubmitted = false;
        }
        else {
            if (this.signupForm.valid) {
                this.authService.signUp(this.signupForm.value).subscribe((response) => {
                    console.log('response', response);
                    if (response.result.status_response === '200 OK') {
                        this.checkMail();
                    }
                }, (error) => {
                    console.error('SignUp Error: ', error);
                    if (error.error.result.coreError === 2001) {
                        if (this.selectedLang === 'Spanish') {
                            this.jabiyaService.presentToast(
                            // eslint-disable-next-line max-len
                            'Error: correo electrónico o teléfono duplicado. Cuenta ya registrada:' +
                                ' ingrese un nuevo correo electrónico o vaya directamente a la pantalla de inicio de sesión');
                        }
                        else
                            this.jabiyaService.presentToast(
                            // eslint-disable-next-line max-len
                            'Error: Duplicate email or phone. Account already registered.' +
                                ' Enter a new email or go directly to the login screen');
                    }
                    else {
                        this.jabiyaService.presentToast('error');
                    }
                    this.isSubmitted = false;
                });
            }
        }
        console.log('value', formValues);
    }
    checkMail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedLang === 'Spanish') {
                this.jabiyaService.alertCreater('Te has registrado exitosamente!', 'Te enviamos un correo electrónico a tu cuenta. Por favor, ve a tu email, y sigue' +
                    ' las instrucciones que tiene, para cambiar tu contraseña temporal.' + '<br/><br/>' +
                    'Luego puedes usar tu nueva contraseña para iniciar tu sesión en esta aplicación móvil de Jabiya', 'OK', 'emailVerify');
            }
            else {
                this.jabiyaService.alertCreater('You have successfully registered!', 'We send an email to your account. Please go to your email, and follow' +
                    ' The instructions it has, to change your temporary password.' + '<br/><br/>' +
                    'Then you can use your new password to log in to this Jabiya mobile app', 'OK', 'emailVerify');
            }
            this.emailVerifySubscription =
                this.jabiyaService.eventTriggerer.subscribe(event => {
                    if (event === 'emailVerify') {
                        this.router.navigate(['/home']);
                    }
                });
        });
    }
    loadLang() {
        setTimeout(() => {
            const radios = document.getElementsByClassName('alert-radio-label');
            for (let index = 0; index < radios.length; index++) {
                const singrad = radios[index];
                singrad.innerHTML = singrad.innerHTML.concat('<img src=' +
                    this.languages[index].imagesrc +
                    ' style="width:24px; position:absolute; right:20px;"/>');
                singrad.style.fontSize = '22px';
                singrad.style.textTransform = 'uppercase';
            }
        }, 200);
    }
    stateSelected(event) {
        const stateId = event.target.value;
        this.getCitySubscription =
            this.authService.getCities(stateId).subscribe((cities) => {
                this.cities = cities.result.data;
            }, error => {
                console.error('City Fetch Failed: ', error);
            });
    }
    citySelected(event) {
        const cityId = event.target.value;
        this.getSectorSubscription =
            this.authService.getSectors(cityId).subscribe((sectors) => {
                this.sectors = sectors.result.data;
            }, error => {
                console.error('Sector Fetch Failed: ', error);
            });
    }
    ngOnDestroy() {
        this.unSubscribe(this.getStateSubscription);
        this.unSubscribe(this.getCitySubscription);
        this.unSubscribe(this.getSectorSubscription);
        this.unSubscribe(this.getClientTypeSubscription);
        this.unSubscribe(this.emailVerifySubscription);
        this.unSubscribe(this.permissionSubscription);
        this.selectedLang = null;
        this.languages = null;
        this.signupForm = null;
        this.localLanguage = null;
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
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_authServices_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_jabiyaService_jabiya_service__WEBPACK_IMPORTED_MODULE_3__.JabiyaService }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterComponent);



/***/ }),

/***/ 4795:
/*!***************************************************************************!*\
  !*** ./src/app/authentication/reset-password/reset-password.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reset-password.component.html */ 4887);
/* harmony import */ var _reset_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component.scss */ 5693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(router) {
        this.router = router;
        this.showStatus = false;
    }
    onSubmit() {
        this.showStatus = true;
    }
    ngOnInit() { }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ResetPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reset_password_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ 253:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 9402:
/*!*******************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 30px;\n}\n\n.phone-code {\n  position: absolute;\n  margin-top: -31px;\n  left: 48px;\n  z-index: 1;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFHRiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4uaW5wdXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnBob25lLWNvZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAtMzFweDtcclxuICBsZWZ0OiA0OHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2567:
/*!***********************************************************!*\
  !*** ./src/app/authentication/intro/intro.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".login-container {\n  margin: 0;\n  display: block;\n  text-align: center;\n}\n\n.logo {\n  margin-top: 200px;\n  display: flex;\n  justify-content: center;\n}\n\n.logo img {\n  width: 180px;\n}\n\n.login-container .wel-msg {\n  font-size: 20px;\n  color: #29292b;\n}\n\n.login-container .wel-submsg {\n  font-size: 12px;\n  color: #c1c1c1;\n}\n\n.footer-btn-grp {\n  position: absolute;\n  bottom: 30px;\n  width: 92%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFBRTtFQUNFLFlBQUE7QUFFSjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUlGIiwiZmlsZSI6ImludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9naW5cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gIH1cclxufVxyXG4ubG9naW4tY29udGFpbmVyIC53ZWwtbXNnIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMyOTI5MmI7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciAud2VsLXN1Ym1zZyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjYzFjMWMxO1xyXG59XHJcbi5mb290ZXItYnRuLWdycCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 7345:
/*!*************************************************************************!*\
  !*** ./src/app/authentication/lang-popover/lang-popover.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmctcG9wb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtBQUNGIiwiZmlsZSI6ImxhbmctcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 3835:
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n}\n\n.alo {\n  background: \"#000\" !important;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 30px;\n}\n\n.forgot-password {\n  position: relative;\n  top: 0px;\n  right: -8px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.remember-me {\n  --padding-start: 0px;\n  margin-left: -16px;\n  margin-top: -10px;\n  --min-height: 40px;\n  --inner-border-width: 0 0 0px 0;\n  font-size: 14px;\n}\n\nion-checkbox {\n  margin: 0px 8px 0px 8px;\n}\n\nion-label {\n  font-size: 14px;\n}\n\n.logo-img {\n  width: 150px;\n  margin-top: 100px;\n}\n\n.login-fields {\n  min-width: 250px;\n  max-width: 600px;\n  margin: 0px auto;\n}\n\n.login-btn {\n  min-width: 250px;\n  max-width: 400px;\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLDZCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSx1QkFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFQQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVVGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuLmFsb3tcclxuICBiYWNrZ3JvdW5kOiBcIiMwMDBcIiAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dC1pY29uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IC04cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnJlbWVtYmVyLW1lIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1jaGVja2JveCB7XHJcbiAgbWFyZ2luOiAwcHggOHB4IDBweCA4cHg7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmxvZ28taW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLmxvZ2luLWZpZWxkc3tcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4ubG9naW4tYnRue1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ 1826:
/*!*******************************************************************************************!*\
  !*** ./src/app/authentication/passcode-verification/passcode-verification.component.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("code-input {\n  --item-spacing: 10px;\n  --item-height: 3em;\n  --item-border: none;\n  --item-border-bottom: 2px solid #dddddd;\n  --item-border-has-value: none;\n  --item-border-bottom-has-value: 2px solid #fad02c;\n  --item-border-focused: none;\n  --item-border-bottom-focused: 2px solid #333652;\n  --item-shadow-focused: none;\n  --item-border-radius: 0px;\n}\n\nion-header::after {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Njb2RlLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpREFBQTtFQUNBLDJCQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGIiwiZmlsZSI6InBhc3Njb2RlLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvZGUtaW5wdXQge1xyXG4gIC0taXRlbS1zcGFjaW5nOiAxMHB4O1xyXG4gIC0taXRlbS1oZWlnaHQ6IDNlbTtcclxuICAtLWl0ZW0tYm9yZGVyOiBub25lO1xyXG4gIC0taXRlbS1ib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZGRkZDtcclxuICAtLWl0ZW0tYm9yZGVyLWhhcy12YWx1ZTogbm9uZTtcclxuICAtLWl0ZW0tYm9yZGVyLWJvdHRvbS1oYXMtdmFsdWU6IDJweCBzb2xpZCAjZmFkMDJjO1xyXG4gIC0taXRlbS1ib3JkZXItZm9jdXNlZDogbm9uZTtcclxuICAtLWl0ZW0tYm9yZGVyLWJvdHRvbS1mb2N1c2VkOiAycHggc29saWQgIzMzMzY1MjtcclxuICAtLWl0ZW0tc2hhZG93LWZvY3VzZWQ6IG5vbmU7XHJcbiAgLS1pdGVtLWJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5pb24taGVhZGVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 391:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n}\n\n.register-container {\n  margin-top: -20px;\n  display: block;\n  text-align: center;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 30px;\n}\n\n.phone-code {\n  position: absolute;\n  margin-top: -31px;\n  margin-left: 14px;\n  z-index: 1;\n  font-size: 16px;\n}\n\n.phone-field {\n  margin-left: 20px;\n}\n\n@media (min-width: 600px) {\n  .container-field {\n    display: flex;\n  }\n\n  .container-field ion-item {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtBQUtGOztBQUhBO0VBQ0U7SUFDRSxhQUFBO0VBTUY7O0VBSkE7SUFDRSxVQUFBO0VBT0Y7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcbi5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnBob25lLWNvZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAtMzFweDtcclxuICBtYXJnaW4tbGVmdDogMTRweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ucGhvbmUtZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgLmNvbnRhaW5lci1maWVsZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZmllbGQgaW9uLWl0ZW17XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 5693:
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/reset-password/reset-password.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n}\n\n.input-icon {\n  font-size: 20px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuLmlucHV0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 3504:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>authentication</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 3431:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/forgot-password/forgot-password.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"dark\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding-horizontal\" [formGroup]=\"passwordResetForm\">\r\n  <div class=\"login-container ion-padding-horizontal ion-text-center\" *ngIf=\"!mailSent\">\r\n    <img src=\"../../../assets/images/forgot-password.png\" />\r\n    <h2 class=\"wel-msg\">{{language ==='English'? languageJson.forgotPage.english.recover : languageJson.forgotPage.spanish.recover}}</h2>\r\n    <p class=\"wel-submsg\">{{language ==='English'? languageJson.forgotPage.english.recover : languageJson.forgotPage.spanish.recover}}.\r\n    </p>\r\n    <div class=\"ion-margin-vertical ion-padding-vertical page-content\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{language ==='English'? languageJson.forgotPage.english.regemail : languageJson.forgotPage.spanish.regemail}}</ion-label>\r\n        <ion-input placeholder=\"example@gmail.com\" formControlName=\"login\" type=\"email\"></ion-input>\r\n        <ion-icon name=\"mail-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item class=\"phoneno\">\r\n        <ion-label position=\"stacked\">{{language ==='English'? languageJson.forgotPage.english.phone : languageJson.forgotPage.spanish.phone}}\r\n        </ion-label>\r\n        <ion-input placeholder=\"809555555\" formControlName=\"phone\" type=\"tel\" class=\"phoneno\"></ion-input>\r\n        <ion-icon name=\"phone-portrait-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-label slot=\"start\" class=\"phone-code\">+1</ion-label>\r\n    </div>\r\n    <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" expand=\"block\"\r\n    [disabled]=\"!passwordResetForm.value.login && !passwordResetForm.value.phone\" (click)=\"reset()\">{{language ==='English'? languageJson.forgotPage.english.send : languageJson.forgotPage.spanish.send}}</ion-button>\r\n  </div>\r\n  <div class=\"login-container ion-padding ion-text-center\" *ngIf=\"mailSent\">\r\n    <div class=\"ion-text-center ion-padding-vertical page-content\">\r\n      <img src=\"../../../assets/images/mail.png\" width=\"200px\" />\r\n    </div>\r\n    <div class=\"ion-text-center ion-padding-horizontal ion-margin\">\r\n      <h2 class=\"wel-msg\">{{language ==='English'? languageJson.forgotPage.english.emailcheck : languageJson.forgotPage.spanish.emailcheck}}</h2>\r\n      <p class=\"wel-submsg\">\r\n        {{language ==='English'? languageJson.forgotPage.english.passsent : languageJson.forgotPage.spanish.passsent}}.\r\n      </p>\r\n    </div>\r\n    <div class=\"ion-text-center ion-padding-vertical\">\r\n      <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" expand=\"block\"\r\n        routerLink=\"../resetPassword\">{{language ==='English'? languageJson.forgotPage.english.back : languageJson.forgotPage.spanish.back}}\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 7499:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/intro/intro.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\r\n  <div class=\"login-container ion-padding\">\r\n    <div class=\"logo page-content\">\r\n      <img src=\"../assets/images/logo.png\">\r\n    </div>\r\n    <!-- <div class=\"ion-margin\">\r\n      <h2 class=\"wel-msg\">Welcome to Barbaro bar</h2>\r\n      <p class=\"wel-submsg\">Explore thousands of essentials directly from our dedicated drinks and groceries online\r\n        store.</p>\r\n    </div> -->\r\n    <div class=\"footer-btn-grp\">\r\n      <ion-button class=\"ion-margin\" size=\"default\" color=\"primary\" expand=\"block\" routerLink=\"./login\">Iniciar Sesión\r\n      </ion-button>\r\n      <ion-button class=\"ion-margin\" size=\"default\" color=\"primary\" expand=\"block\" fill=\"outline\"\r\n        routerLink=\"./register\">Regístrate</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 9497:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lang-popover/lang-popover.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\r\n  <ion-radio-group value=\"english\" mode=\"ios\">\r\n    <ion-list-header>\r\n      <ion-label class=\"ion-no-margin ion-margin-bottom\">Choose Language</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <img slot=\"start\" src=\"../../../assets/images/usa.png\" width=\"24px\" style=\"margin-right:16px\">\r\n      <ion-label>English</ion-label>\r\n      <ion-radio slot=\"end\" value=\"english\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <img slot=\"start\" src=\"../../../assets/images/spain.png\" width=\"24px\" style=\"margin-right:16px\">\r\n      <ion-label>Spanish</ion-label>\r\n      <ion-radio slot=\"end\" value=\"spanish\"></ion-radio>\r\n    </ion-item>\r\n    </ion-radio-group>\r\n  </ion-content>\r\n");

/***/ }),

/***/ 4469:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"dark\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <!-- <ion-button slot=\"end\" fill=\"outline\" class=\"lang-btn\" (click)=\"langPopover()\" show-backdrop=\"false\">\r\n      <img src=\"../../../assets/images/usa.png\" width=\"16px\" style=\"margin-right:6px\">\r\n      <ion-text color=\"secondary\">English</ion-text>\r\n      <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n    </ion-button> -->\r\n    <ion-item slot=\"end\" class=\"language-btn\">\r\n      <ion-select [ngStyle]=\"{'background-image': 'url(../../../assets/images/'+selectedLang+'.png)'}\" class=\"lang-select\" (ionChange)=\"langSelection(selectedLang)\" (click)=\"loadLang()\" [(ngModel)]=\"selectedLang\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\" mode=\"ios\">\r\n        <ion-select-option *ngFor=\"let language of languages\" value=\"{{language.lang}}\" (ionChange)=\"langSelection(language.lang)\">{{language.lang}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item slot=\"end\" class=\"language-btn\">\r\n      <ion-select class=\"environ-select\"  [interfaceOptions]=\"customPopoverOptions\" (ionChange)=\"envVariableSelection($event)\" interface=\"popover\" [(ngModel)]=\"envVariable\" placeholder=\"Select Environment\" mode=\"ios\">\r\n        <ion-select-option value=\"Production\" >Production</ion-select-option>\r\n        <ion-select-option value=\"Development\">Development</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding-horizontal alo\">\r\n  <form [formGroup]=\"signinForm\">\r\n    <div class=\"login-container ion-padding-horizontal ion-text-center\">\r\n      <img src=\"../assets/images/logo.png\" class=\"logo-img\">\r\n      <h2 class=\"wel-msg\">{{selectedLang === 'English' ? languageJson.loginPage.english.welcomemsg : languageJson.loginPage.spanish.welcomemsg}}</h2>\r\n      <p class=\"wel-submsg\">{{selectedLang === 'English' ? languageJson.loginPage.english.description : languageJson.loginPage.spanish.description}}</p>\r\n      <div class=\"ion-margin-vertical ion-padding-vertical page-content login-fields\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.loginPage.english.email : languageJson.loginPage.spanish.email}}</ion-label>\r\n          <ion-input placeholder=\"\" formControlName=\"login\" type=\"email\" (keyup.enter)=\"login()\"></ion-input>\r\n          <ion-icon name=\"mail-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n        </ion-item>\r\n        <!-- <ion-text color=\"danger\" class=\"error-msg\">Incorrect Email</ion-text> -->\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.loginPage.english.password : languageJson.loginPage.spanish.password}}</ion-label>\r\n          <ion-input placeholder=\".......\" formControlName=\"password\" [type]=\"showPassword\" (keyup.enter)=\"login()\"></ion-input>\r\n          <ion-icon name=\"eye-off-outline\" *ngIf=\"showPassword ==='password'\" slot=\"end\" class=\"input-icon\" (click)=\"changePasswordType()\"></ion-icon>\r\n          <ion-icon name=\"eye-outline\" *ngIf=\"showPassword ==='text'\" slot=\"end\" class=\"input-icon\" (click)=\"changePasswordType()\"></ion-icon>\r\n        </ion-item>\r\n        <!-- <ion-text color=\"danger\" class=\"error-msg\">Incorrect Password</ion-text> -->\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col col-6 class=\"ion-text-left\">\r\n              <ion-item class=\"remember-me\">\r\n                <ion-label>{{selectedLang === 'English' ? languageJson.loginPage.english.remember : languageJson.loginPage.spanish.remember}}</ion-label>\r\n                <ion-checkbox slot=\"start\" formControlName=\"rememberMe\"></ion-checkbox>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col col-6 class=\"ion-text-right\">\r\n              <ion-label class=\"forgot-password\" color=\"secondary\" routerLink=\"./forgotPassword\">{{selectedLang === 'English' ? languageJson.loginPage.english.resetPasswordText : languageJson.loginPage.spanish.resetPasswordText}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n\r\n      <ion-button class=\"ion-margin-vertical login-btn\" size=\"default\" color=\"primary\" expand=\"block\" (click)=\"login()\"\r\n      [disabled]=\"loginClicked\" type=\"submit\">{{selectedLang === 'English' ? languageJson.loginPage.english.loginButtonText : languageJson.loginPage.spanish.loginButtonText}}</ion-button>\r\n      <div class=\"ion-text-center ion-margin-vertical ion-padding-vertical mt-30\">\r\n        <ion-label routerLink=\"./register\" color=\"secondary\">{{selectedLang === 'English' ? languageJson.loginPage.english.registerAccountText : languageJson.loginPage.spanish.registerAccountText}} <ion-text color=\"primary\" routerLink=\"../register\" class=\"bold\">{{selectedLang === 'English' ? languageJson.loginPage.english.registerAccountButtonText : languageJson.loginPage.spanish.registerAccountButtonText}}</ion-text>\r\n        </ion-label>\r\n      </div>\r\n      <!-- <div *ngIf=\"loading\" class=\"ion-text-center ion-margin-vertical ion-padding-vertical mt-30\">\r\n    <img src=\"../assets/images/loading.gif\" alt=\"\"loading...>\r\n    </div> -->\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n<div class=\"loader\" *ngIf=\"loading\"></div>");

/***/ }),

/***/ 9288:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/passcode-verification/passcode-verification.component.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"dark\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\r\n  <div class=\"login-container ion-padding ion-text-center\" *ngIf=\"!showStatus\">\r\n    <img src=\"../../../assets/images/otp-verification.png\">\r\n    <h2 class=\"wel-msg\">OTP Verfication</h2>\r\n    <p class=\"wel-submsg\">Please enter the verification code we sent to your mobile number.</p>\r\n    <div class=\"ion-text-center ion-padding-vertical page-content\">\r\n      <code-input [isCodeHidden]=\"false\" [codeLength]=\"5\" (codeChanged)=\"onCodeChanged($event)\"\r\n        (codeCompleted)=\"onCodeCompleted($event)\">\r\n      </code-input>\r\n    </div>\r\n    <div class=\"ion-text-center ion-padding-vertical\">\r\n      <ion-label color=\"secondary\">Didn't receive OTP?</ion-label>\r\n      <ion-label color=\"primary\"> Resend OTP</ion-label>\r\n    </div>\r\n    <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" expand=\"block\"\r\n      (click)=\"onSubmit()\">Verify & Proceed</ion-button>\r\n  </div>\r\n  <div class=\"login-container ion-padding ion-text-center\" *ngIf=\"showStatus\">\r\n    <div class=\"ion-text-center ion-padding-vertical page-content\">\r\n      <img src=\"../../../assets/images/successfull.png\">\r\n    </div>\r\n    <div class=\"ion-text-center ion-padding\">\r\n      <h2 class=\"wel-msg\">Signed up successfully!</h2>\r\n    </div>\r\n    <div class=\"ion-text-center ion-padding\">\r\n      <p class=\"wel-submsg\">Thank you for signing up! Login to check for special offers from us.</p>\r\n    </div>\r\n    <div class=\"ion-text-center ion-padding-vertical\">\r\n      <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" expand=\"block\"\r\n        routerLink=\"../login\">Go to Login</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 4735:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/register/register.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" text=\"\" icon=\"arrow-back-outline\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <!-- <ion-button slot=\"end\" fill=\"outline\" class=\"lang-btn\" (click)=\"langPopover()\" show-backdrop=\"false\">\r\n      <img src=\"../../../assets/images/usa.png\" width=\"16px\" style=\"margin-right:6px\">\r\n      <ion-text color=\"secondary\">English</ion-text>\r\n      <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n    </ion-button> -->\r\n    <ion-item slot=\"end\" class=\"language-btn\">\r\n      <ion-select [ngStyle]=\"{'background-image': 'url(../../../assets/images/'+selectedLang+'.png)'}\" class=\"lang-select\" (ionChange)=\"langSelection(selectedLang)\" (click)=\"loadLang()\" [(ngModel)]=\"selectedLang\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\" mode=\"ios\">\r\n        <ion-select-option *ngFor=\"let language of languages\" value=\"{{language.lang}}\">{{language.lang}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding-horizontal\" [formGroup]=\"signupForm\">\r\n  <div class=\"register-container ion-padding-horizontal ion-text-left\">\r\n    <h2 class=\"wel-msg\">{{selectedLang === 'English' ? languageJson.regPage.english.account : languageJson.regPage.spanish.account}}</h2>\r\n    <p class=\"wel-submsg\">{{selectedLang === 'English' ? languageJson.regPage.english.details : languageJson.regPage.spanish.details}}</p>\r\n    <div class=\"ion-margin-vertical ion-padding-bottom container-field\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.name : languageJson.regPage.spanish.name}}</ion-label>\r\n        <ion-input required formControlName=\"firstname\" placeholder=\"\" type=\"text\"></ion-input>\r\n        <ion-icon name=\"person-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.firstname.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.fname : languageJson.regPage.spanish.fname}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.lname : languageJson.regPage.spanish.lname}}</ion-label>\r\n        <ion-input formControlName=\"lastname\" placeholder=\"\" type=\"text\"></ion-input>\r\n        <ion-icon name=\"person-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.lastname.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.lnamereq : languageJson.regPage.spanish.lnamereq}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.email : languageJson.regPage.spanish.email}}</ion-label>\r\n        <ion-input formControlName=\"email\" placeholder=\"example@gmail.com\" type=\"email\"></ion-input>\r\n        <ion-icon name=\"mail-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"errorControl.email.hasError('pattern') && errorControl.email.touched\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.emailin : languageJson.regPage.spanish.emailin}}.\r\n      </ion-text>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.emailreq : languageJson.regPage.spanish.emailreq}}.\r\n      </ion-text>\r\n      <ion-item class=\"phoneno\">\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.phone : languageJson.regPage.spanish.phone}}</ion-label>\r\n        <ion-input formControlName=\"phone\" placeholder=\"809555555\" type=\"tel\" class=\"phone-field\"></ion-input>\r\n        <ion-icon name=\"phone-portrait-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-label slot=\"start\" class=\"phone-code\">+1</ion-label>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.phone.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.phonereq : languageJson.regPage.spanish.phonereq}}.\r\n      </ion-text>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"errorControl.phone.hasError('pattern') && errorControl.phone.touched\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.phonein : languageJson.regPage.spanish.phonein}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.storenamee : languageJson.regPage.spanish.storenamee}}</ion-label>\r\n        <ion-input formControlName=\"company_name\" placeholder=\"xxxxxxxxxxx\" type=\"text\"></ion-input>\r\n        <ion-icon name=\"card-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.company_code.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.storenameereq : languageJson.regPage.spanish.storenameereq}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.code : languageJson.regPage.spanish.code}}</ion-label>\r\n        <ion-input placeholder=\"Ex.xxxxxxx\" type=\"text\" formControlName=\"company_code\"></ion-input>\r\n        <ion-icon name=\"business-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.company_code.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.codereq : languageJson.regPage.spanish.codereq}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.owner : languageJson.regPage.spanish.owner}}</ion-label>\r\n        <ion-input placeholder=\"Ex.xxxxxxx\" type=\"text\" formControlName=\"owner_name\"></ion-input>\r\n        <ion-icon name=\"browsers-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.owner_name.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.ownerreq : languageJson.regPage.spanish.ownerreq}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.direction : languageJson.regPage.spanish.direction}}</ion-label>\r\n        <ion-input *ngIf=\"selectedLang === 'Spanish'\"placeholder=\"Dirección Línea 1\" type=\"text\" formControlName=\"address_line_1\"></ion-input>\r\n        <ion-input  *ngIf=\"selectedLang === 'English'\"placeholder=\"Address Line 1\" type=\"text\" formControlName=\"address_line_1\"></ion-input>\r\n        <ion-icon name=\"location-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input *ngIf=\"selectedLang === 'Spanish'\" placeholder=\"Dirección Línea 2\" type=\"text\" formControlName=\"address_line_2\"></ion-input>\r\n        <ion-input  *ngIf=\"selectedLang === 'English'\" placeholder=\"Address Line 2\" type=\"text\" formControlName=\"address_line_2\"></ion-input>\r\n        <ion-icon name=\"location-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.address_line_1.value === '' && errorControl.address_line_2.value === ''\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.directionreq : languageJson.regPage.spanish.directionreq}}.\r\n      </ion-text>\r\n      <!-- <ion-text color=\"danger\" class=\"error-msg\">\r\n      Dirección is required.\r\n    </ion-text> -->\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.province : languageJson.regPage.spanish.province}}</ion-label>\r\n        <ion-select interface=\"popover\" placeholder=\"{{selectedLang === 'English' ? languageJson.regPage.english.selprovince : languageJson.regPage.spanish.selprovince}}\" (ionChange)=\"stateSelected($event)\" formControlName=\"state\">\r\n          <ion-select-option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.state.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.provincereq : languageJson.regPage.spanish.provincereq}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.town : languageJson.regPage.spanish.town}}</ion-label>\r\n        <ion-select interface=\"popover\" placeholder=\"{{selectedLang === 'English' ? languageJson.regPage.english.selcity : languageJson.regPage.spanish.selcity}}\" (ionChange)=\"citySelected($event)\" formControlName=\"city\" [disabled]=\"errorControl.state.value === ''\">\r\n          <ion-select-option *ngFor=\"let city of cities\" [value]=\"city.id\">{{city.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.city.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.townreq : languageJson.regPage.spanish.townreq}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Sector</ion-label>\r\n        <ion-select interface=\"popover\" placeholder=\"{{selectedLang === 'English' ? languageJson.regPage.english.selsector : languageJson.regPage.spanish.selsector}}\" formControlName=\"sector_id\" [disabled]=\"errorControl.city.value === ''\">\r\n          <ion-select-option *ngFor=\"let sector of sectors\" [value]=\"sector.id\">{{sector.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.sector_id.errors?.required\">\r\n        Sector is required.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.seller : languageJson.regPage.spanish.seller}}</ion-label>\r\n        <ion-input placeholder=\"Ex.xxxxxxx\" type=\"text\" formControlName=\"salesperson\"></ion-input>\r\n        <ion-icon name=\"person-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.salesperson.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.sellreq : languageJson.regPage.spanish.sellreq}}.\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{selectedLang === 'English' ? languageJson.regPage.english.storetype : languageJson.regPage.spanish.storetype}}</ion-label>\r\n        <ion-select interface=\"popover\" placeholder=\"{{selectedLang === 'English' ? languageJson.regPage.english.selstore : languageJson.regPage.spanish.selstore}}\" formControlName=\"type_client_id\">\r\n          <ion-select-option *ngFor=\"let clientType of clientTypes\" [value]=\"clientType.id\">{{clientType.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-text color=\"danger\" class=\"error-msg\" *ngIf=\"isSubmitted && errorControl.type_client_id.errors?.required\">\r\n        {{selectedLang === 'English' ? languageJson.regPage.english.storetypereq : languageJson.regPage.spanish.storetypereq}}.\r\n      </ion-text>\r\n    </div>\r\n    <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" expand=\"block\" (click)=\"submit()\" [disabled]=\"isSubmitted\">{{selectedLang === 'English' ? languageJson.regPage.english.signup : languageJson.regPage.spanish.signup}}\r\n    </ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 4887:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/reset-password/reset-password.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"dark\" text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding-horizontal\">\r\n  <div class=\"login-container ion-padding-horizontal ion-text-center\" *ngIf=\"!showStatus\">\r\n    <img src=\"../../../assets/images/reset-password.png\">\r\n    <h2 class=\"wel-msg\">Reset Password?</h2>\r\n    <p class=\"wel-submsg\">Your new password must be different from previously used passwords.</p>\r\n    <div class=\"ion-margin-vertical ion-padding-vertical page-content\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Name</ion-label>\r\n        <ion-input placeholder=\"Ex.Stephen\" type=\"text\"></ion-input>\r\n        <ion-icon name=\"person-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input placeholder=\"Ex.abc@gmail.com\" type=\"email\"></ion-input>\r\n        <ion-icon name=\"mail-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Password</ion-label>\r\n        <ion-input placeholder=\".......\" type=\"password\"></ion-input>\r\n        <ion-icon name=\"lock-closed-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Confirm Password</ion-label>\r\n        <ion-input placeholder=\".......\" type=\"password\"></ion-input>\r\n        <ion-icon name=\"lock-closed-outline\" slot=\"end\" class=\"input-icon\"></ion-icon>\r\n      </ion-item>\r\n    </div>\r\n    <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" expand=\"block\" (click)=\"onSubmit()\">Reset\r\n      Password</ion-button>\r\n  </div>\r\n  <div class=\"login-container ion-padding ion-text-center\" *ngIf=\"showStatus\">\r\n    <div class=\"ion-text-center ion-padding-vertical page-content\">\r\n      <img src=\"../../../assets/images/check.png\" width=\"200px\">\r\n    </div>\r\n    <div class=\"ion-text-center ion-padding-horizontal ion-margin\">\r\n      <h2 class=\"wel-msg\">Password Changed Succesfully!</h2>\r\n      <p class=\"wel-submsg\">Login to continue.</p>\r\n    </div>\r\n    <div class=\"ion-text-center ion-padding-vertical\">\r\n      <ion-button class=\"ion-margin-vertical\" size=\"default\" color=\"primary\" expand=\"block\"\r\n        routerLink=\"../login\">Back to Login</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_authentication_authentication_module_ts.js.map
webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	],
	"app/sites/sites.module": [
		"./src/app/sites/sites.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_auth_services_auth_gaurd_service__ = __webpack_require__("./src/app/auth/services/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_auth_services_auth_login_gaurd_service__ = __webpack_require__("./src/app/auth/services/auth-login-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sites_sites_module__ = __webpack_require__("./src/app/sites/sites.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// sekhar
// routes for the application
var routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'sites',
        loadChildren: 'app/sites/sites.module#SitesModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_auth_services_auth_gaurd_service__["a" /* AuthGaurdService */]],
    },
    {
        path: 'auth',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_auth_services_auth_login_gaurd_service__["a" /* AuthLoginGaurdService */]],
        loadChildren: './auth/auth.module#AuthModule'
    },
    { path: '**', redirectTo: 'auth' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_app_auth_auth_module__["AuthModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__sites_sites_module__["SitesModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "ng4-loading-spinner {\n\n    height: 70px;\n}\n\nquad-mid-body { width:100%; float:left; height:300px;}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <ng4-loading-spinner [threshold]=\"50\" [loadingText]=\"'please wait.....'\"> </ng4-loading-spinner> -->\n\n<quadlogic-header></quadlogic-header>\n\n<div class=\"quad-container\">\n    \n    <quadlogic-mid-body>\n            \n    </quadlogic-mid-body>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_src_toast_manager__ = __webpack_require__("./node_modules/ng2-toastr/src/toast-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_src_toast_manager___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_src_toast_manager__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(vcr, toastr) {
        this.vcr = vcr;
        this.toastr = toastr;
        this.title = 'app works!';
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_src_toast_manager__["ToastsManager"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConstant = (function () {
    function AppConstant() {
        this.url = 'http://172.16.18.93:3000/';
    }
    AppConstant = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AppConstant);
    return AppConstant;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init_app */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_sites_sites_module__ = __webpack_require__("./src/app/sites/sites.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_app_constant__ = __webpack_require__("./src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_shared_services_app_init_service__ = __webpack_require__("./src/app/shared/services/app-init.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_auth_services_token_interceptor__ = __webpack_require__("./src/app/auth/services/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_auth_services_token_service__ = __webpack_require__("./src/app/auth/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_auth_services_auth_login_gaurd_service__ = __webpack_require__("./src/app/auth/services/auth-login-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_auth_services_auth_gaurd_service__ = __webpack_require__("./src/app/auth/services/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_auth_services_redirection_service__ = __webpack_require__("./src/app/auth/services/redirection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_auth_services_auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_shared_services_preloader_service__ = __webpack_require__("./src/app/shared/services/preloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_fileupload__ = __webpack_require__("./node_modules/primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_menubar__ = __webpack_require__("./node_modules/primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_accordion__ = __webpack_require__("./node_modules/primeng/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_primeng_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_primeng_password__ = __webpack_require__("./node_modules/primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_datatable__ = __webpack_require__("./node_modules/primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__mid_body_mid_body_component__ = __webpack_require__("./src/app/mid-body/mid-body.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// services used in quadlogic for all models












// prime ng components












function init_app(appLoadService) {
    return function () { return appLoadService.initializeApp(); };
}

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_34__mid_body_mid_body_component__["a" /* MidBodyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_25_primeng_menubar__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_sites_sites_module__["SitesModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_app_auth_auth_module__["AuthModule"],
                __WEBPACK_IMPORTED_MODULE_20_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_23_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_24_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_25_primeng_menubar__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_26_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_27_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_28_primeng_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_29_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_30_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_31_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_32_primeng_datatable__["DataTableModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10_app_app_constant__["a" /* AppConstant */],
                __WEBPACK_IMPORTED_MODULE_12_app_shared_services_app_init_service__["a" /* AppInitService */],
                __WEBPACK_IMPORTED_MODULE_13_app_auth_services_token_interceptor__["a" /* TokenInterceptor */],
                __WEBPACK_IMPORTED_MODULE_14_app_auth_services_token_service__["a" /* TokenService */],
                __WEBPACK_IMPORTED_MODULE_15_app_auth_services_auth_login_gaurd_service__["a" /* AuthLoginGaurdService */],
                __WEBPACK_IMPORTED_MODULE_16_app_auth_services_auth_gaurd_service__["a" /* AuthGaurdService */],
                __WEBPACK_IMPORTED_MODULE_17_app_auth_services_redirection_service__["a" /* RedirectionService */],
                __WEBPACK_IMPORTED_MODULE_18_app_auth_services_auth_service__["a" /* QuadlogicAuthService */],
                __WEBPACK_IMPORTED_MODULE_19_app_shared_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_21_app_shared_services_preloader_service__["a" /* PreloaderService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13_app_auth_services_token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["APP_INITIALIZER"],
                    useFactory: init_app,
                    deps: [__WEBPACK_IMPORTED_MODULE_12_app_shared_services_app_init_service__["a" /* AppInitService */]],
                    multi: true
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_email_confirm_email_component__ = __webpack_require__("./src/app/auth/confirm-email/confirm-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/auth/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_component__ = __webpack_require__("./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resend_confirm_email_resend_confirm_email_component__ = __webpack_require__("./src/app/auth/resend-confirm-email/resend-confirm-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_services_auth_login_gaurd_service__ = __webpack_require__("./src/app/auth/services/auth-login-gaurd.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importing Internal modules


// Importing Third-party modules
// Imporitng  Application Modules
//Importing Application components





// Importing Application Services

var authRoutes = [
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivateChild: [__WEBPACK_IMPORTED_MODULE_7__auth_services_auth_login_gaurd_service__["a" /* AuthLoginGaurdService */]], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
            { path: 'confirm_email', component: __WEBPACK_IMPORTED_MODULE_3__confirm_email_confirm_email_component__["a" /* ConfirmEmailComponent */] },
            { path: 'forgot_password', component: __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
            { path: 'resend_confirm_email', component: __WEBPACK_IMPORTED_MODULE_6__resend_confirm_email_resend_confirm_email_component__["a" /* ResendConfirmEmailComponent */] },
            { path: 'reset_password', component: __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
            { path: '**', redirectTo: 'login', pathMatch: 'full' }
        ] }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(authRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_routing_module__ = __webpack_require__("./src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirm_email_confirm_email_component__ = __webpack_require__("./src/app/auth/confirm-email/confirm-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resend_confirm_email_resend_confirm_email_component__ = __webpack_require__("./src/app/auth/resend-confirm-email/resend-confirm-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forgot_password_forgot_password_component__ = __webpack_require__("./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_auth_dashboard_dashboard_component__ = __webpack_require__("./src/app/auth/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_fileupload__ = __webpack_require__("./node_modules/primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_menubar__ = __webpack_require__("./node_modules/primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_accordion__ = __webpack_require__("./node_modules/primeng/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_password__ = __webpack_require__("./node_modules/primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_datatable__ = __webpack_require__("./node_modules/primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_primeng_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Importing Internal modules
// import { BrowserModule } from '@angular/platform-browser';




//Importing Third-party modules

//Imporitng Application Modules


//Importing Application components







// prime ng components











// Importing Application Services
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["d" /* TimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body }),
                __WEBPACK_IMPORTED_MODULE_0_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["c" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_17_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_menubar__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_23_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_24_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_25_primeng_datatable__["DataTableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_9__confirm_email_confirm_email_component__["a" /* ConfirmEmailComponent */], __WEBPACK_IMPORTED_MODULE_11__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */], __WEBPACK_IMPORTED_MODULE_10__resend_confirm_email_resend_confirm_email_component__["a" /* ResendConfirmEmailComponent */], __WEBPACK_IMPORTED_MODULE_14_app_auth_dashboard_dashboard_component__["a" /* DashboardComponent */]],
            providers: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/confirm-email/confirm-email.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/auth/confirm-email/confirm-email.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/confirm-email/confirm-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_token_service__ = __webpack_require__("./src/app/auth/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_preloader_service__ = __webpack_require__("./src/app/shared/services/preloader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules


//Importing Third-party modules

//Imporitng Application Modules
//Importing Application components
// Importing Application Services




//Any Other Please specify
var ConfirmEmailComponent = (function () {
    function ConfirmEmailComponent(_toastr, _auth, _activatedRoute, _router, _tokenService, _userService, _preLoader) {
        this._toastr = _toastr;
        this._auth = _auth;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._tokenService = _tokenService;
        this._userService = _userService;
        this._preLoader = _preLoader;
    }
    //Checking if any logged in user if not we will validate token and redirect to login page
    ConfirmEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._tokenService.getAuthenticationToken() === null && this._tokenService.getRefreshToken() === null) {
            this._preLoader.open();
            this._activatedRoute.queryParams
                .subscribe(function (params) {
                _this.confirmKey = params['key'];
                if (_this.confirmKey !== undefined) {
                    var confirmToken = { confirmation_token: _this.confirmKey };
                    _this._auth.confirmEmail(confirmToken).subscribe(function (res) {
                        _this._preLoader.close();
                        if (res['success']) {
                            _this._toastr.success(res['message'][0], 'Success', { 'showCloseButton': true });
                            _this._router.navigate(['/auth/login']);
                        }
                        else {
                            _this._toastr.error(res['message'][0], 'Oops!', { 'showCloseButton': true });
                            _this._router.navigate(['/auth/login']);
                        }
                    }, function (err) {
                        _this._preLoader.close();
                        _this._toastr.error(err, 'Oops!', { 'showCloseButton': true });
                    });
                }
                else {
                    _this._preLoader.close();
                    _this._toastr.error('Confirm key not provided', 'Oops!', { 'showCloseButton': true });
                    _this._router.navigate(['/auth/login']);
                }
            });
        }
        else {
            this._toastr.error('Cannot confirm email while logged in', 'Oops!', { 'showCloseButton': true });
            this._router.navigate(['/']);
        }
    };
    ConfirmEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'eteki-confirm-email',
            template: __webpack_require__("./src/app/auth/confirm-email/confirm-email.component.html"),
            styles: [__webpack_require__("./src/app/auth/confirm-email/confirm-email.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* QuadlogicAuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__services_token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_preloader_service__["a" /* PreloaderService */]])
    ], ConfirmEmailComponent);
    return ConfirmEmailComponent;
}());



/***/ }),

/***/ "./src/app/auth/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/auth/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules

//Importing Third-party modules
//Imporitng Application Modules
//Importing Application components
// Importing Application Services
//Any Other Please specify 
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'eteki-dashboard',
            template: __webpack_require__("./src/app/auth/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/auth/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg \">\n    <div class=\"etk-main-cont\">\n        <a class=\"navbar-brand\" href=\"https://www.eteki.com\">\n            <img class=\"img-fluid\" src=\"assets/images/eTeki-Logo-w-Tagline.png\" alt=\"\" />\n        </a>\n    </div>\n</nav>\n<div class=\"container etk-main-body etk-signup-cont\">\n    <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"!isKeyRecieved\">\n            <form class=\"form-horizontal etk-forgot-pass-cont\" [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"forgotPassword(forgotPasswordForm)\" novalidate>\n                <div class=\"form-group\">\n                    <label class=\"control-label etk-forgot-title\" for=\"email\">Forgot Password</label>\n                    <div class=\"col-md-12\">\n                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\" formControlName=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                        <span for=\"email\" class=\"error\" *ngIf=\"!forgotPasswordForm.get('email').valid && forgotPasswordForm.get('email').touched\">\n                          <span *ngIf=\"forgotPasswordForm.hasError('required', 'email')\"> Email is required</span>\n                        <span *ngIf=\"forgotPasswordForm.hasError('pattern', 'email')\">Valid email is required</span>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"no-pd\">\n                        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    </div>\n                </div>\n                <p class=\"control-label\" for=\"confirmNewPassword\">click here to\n                    <b><a [routerLink]=\"['/auth/login']\">sign in!</a></b>\n                </p>\n            </form>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"isKeyRecieved\">\n            <form class=\"form-horizontal etk-forgot-pass-cont\" [formGroup]=\"confirmPasswordForm\" (ngSubmit)=\"confirmPassword(confirmPasswordForm)\" novalidate>\n                <div formGroupName=\"account\">\n                    <div class=\"form-group\">\n\n                        <label class=\"control-label etk-forgot-title\">Confirm Password</label>\n                        <p class=\"control-label\" for=\"newPassword\">New Password</p>\n                        <div class=\"col-sm-12\">\n                            <input id=\"password\" type=\"password\" class=\"form-control\" id=\"newPassword\" placeholder=\"Enter new password\" name=\"password\" formControlName=\"password\">\n                            <span class=\"error\" *ngIf=\"!confirmPasswordForm.controls['account'].controls['password'].valid&&confirmPasswordForm.controls['account'].controls['password'].touched\">\n                              <div *ngIf=\"confirmPasswordForm.get('account').hasError('required', 'password')\">\n                                password field is required.\n                              </div>\n                              <div *ngIf=\"confirmPasswordForm.get('account').hasError('minlength', 'password')\">\n                                Password should be 8 characters.\n                              </div>\n                            </span>\n                        </div>\n\n                    </div>\n\n                    <div class=\"form-group\">\n\n                        <p class=\"control-label\" for=\"confirmNewPassword\">Confirm New Password:</p>\n                        <div class=\"col-sm-12\">\n                            <input id=\"confirm_password\" type=\"password\" class=\"form-control\" placeholder=\"Confirm new password\" name=\"confirm_password\" formControlName=\"confirm_password\">\n                            <!-- <input type=\"password\" class=\"form-control\" id=\"confirmNewPassword\" placeholder=\"Confirm new password\" name=\"confirmNewPassword\" formControlName=\"confirmNewPassword\"> -->\n                            <span class=\"error\" *ngIf=\"!confirmPasswordForm.controls['account'].controls['confirm_password'].valid&&confirmPasswordForm.controls['account'].controls['confirm_password'].touched\">\n                              <span *ngIf=\"confirmPasswordForm.controls['account'].controls['confirm_password']['errors'].required\">Confirm password can't be blank</span>\n                            </span>\n                            <span class=\"error\" *ngIf=\"confirmPasswordForm.controls['account'].controls['confirm_password'].valid&&confirmPasswordForm.controls['account'].controls['confirm_password'].touched\">\n                              <span *ngIf=\"confirmPasswordForm.get('account').errors?.notmatched\">Passwords are not matching.</span>\n\n                            </span>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-offset-2 col-sm-10\">\n                        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    </div>\n                </div>\n                <p class=\"control-label\" for=\"confirmNewPassword\">click here to\n                    <b><a [routerLink]=\"['/auth/login']\">sign in!</a></b>\n                </p>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports) {

module.exports = ".error {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_preloader_service__ = __webpack_require__("./src/app/shared/services/preloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_token_service__ = __webpack_require__("./src/app/auth/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_common_validators__ = __webpack_require__("./src/app/shared/common.validators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules



//Importing Third-party modules

//Imporitng Application Modules
//Importing Application components
// Importing Application Services




//Any Other Please specify
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(_toastr, _activatedRoute, _fb, _auth, _router, _preLoader, _tokenService) {
        this._toastr = _toastr;
        this._activatedRoute = _activatedRoute;
        this._fb = _fb;
        this._auth = _auth;
        this._router = _router;
        this._preLoader = _preLoader;
        this._tokenService = _tokenService;
        this.isKeyRecieved = false;
        this.forgotPasswordForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
        // this.confirmPasswordForm = new FormGroup({});
        this.confirmPasswordForm = _fb.group({
            account: this._fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8)]],
                confirm_password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
            }, { validator: __WEBPACK_IMPORTED_MODULE_7__shared_common_validators__["a" /* matchPassword */] })
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        if (this._activatedRoute.snapshot.queryParams['key']) {
            this.forgotPwdKey = this._activatedRoute.snapshot.queryParams['key'];
            if (this._tokenService.getAuthenticationToken() === null && this._tokenService.getRefreshToken() === null) {
                if (this.forgotPwdKey !== null) {
                    this.isKeyRecieved = true;
                }
                else {
                    this._toastr.error('Invalid reset password token', 'Oops!', { 'showCloseButton': true });
                    this._router.navigate(['/']);
                }
            }
        }
        if (!this.isKeyRecieved) {
            // console.log("Forgot Password")
            this.forgotPasswordForm.addControl('email', new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]));
        }
        else {
            // this.confirmPasswordForm.addControl('newPassword', new FormControl(null, [Validators.required, Validators.minLength(8)]))
            // this.confirmPasswordForm.addControl('confirmNewPassword', new FormControl(null,[Validators.required]))
        }
    };
    ForgotPasswordComponent.prototype.forgotPassword = function (forgotPasswordForm) {
        var _this = this;
        if (forgotPasswordForm.valid) {
            this._preLoader.open();
            this._auth.forgotPassword(forgotPasswordForm.value).subscribe(function (res) {
                if (res['success']) {
                    _this._preLoader.close();
                    _this._toastr.success(res['message'][0], 'Success', { 'showCloseButton': true });
                    _this._router.navigate(['/auth/login']);
                }
                else {
                    _this._preLoader.close();
                    _this._toastr.error(res['message'][0], 'Oops!', { 'showCloseButton': true });
                }
            }, function (err) {
                _this._preLoader.close();
                _this._toastr.error(err, 'Oops!', { 'showCloseButton': true });
            });
        }
        else {
            this.setFormTouched(forgotPasswordForm);
        }
    };
    ForgotPasswordComponent.prototype.confirmPassword = function (confirmPasswordForm) {
        var _this = this;
        if (confirmPasswordForm.valid) {
            this._auth.resetPassword({ 'reset_password_token': this.forgotPwdKey, 'password': confirmPasswordForm.value['newPassword'] })
                .subscribe(function (res) {
                if (res['success']) {
                    _this._toastr.success(res['message'][0], 'Success', { 'showCloseButton': true });
                    _this._router.navigate(['/auth/login']);
                }
                else {
                    _this._toastr.error(res['message'][0], 'Oops!', { 'showCloseButton': true });
                }
            });
        }
        else {
            // this.setFormTouched(confirmPasswordForm)
            // console.log(confirmPasswordForm.controls.account['controls'])
            this._toastr.error("please fill all * marked fields", 'Oops!', { showCloseButton: true });
            Object.keys(confirmPasswordForm.controls.account['controls']).forEach(function (field) {
                var control = confirmPasswordForm.controls.account.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    // function for validate all form fields
    ForgotPasswordComponent.prototype.setFormTouched = function (form_obj) {
        this._toastr.error("please fill all * marked fields", 'Oops!', { showCloseButton: true });
        Object.keys(form_obj.controls).forEach(function (field) {
            var control = form_obj.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'eteki-forgot-password',
            template: __webpack_require__("./src/app/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/auth/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* QuadlogicAuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_preloader_service__["a" /* PreloaderService */],
            __WEBPACK_IMPORTED_MODULE_6__services_token_service__["a" /* TokenService */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <img src=\"assets/images/logo.png\" alt=\"logo\">\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"signIn(signInForm)\">\n    <span>\n      <h3 class=\"first\">Email</h3>\n      <input class=\"login-input\" name=\"signinEmail\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" id=\"signinEmail\"  type=\"email\" size=\"30\" \n      pInputText placeholder=\"Enter your Username or email id\" formControlName=\"signinEmail\" required=\"required\" data-error=\"Email is required.\">\n    </span>\n    <span *ngIf=\" !signInForm.get('signinPassword').valid && signInForm.get('signinPassword').touched && signInForm.hasError('required', 'signinEmail')\"> email is required</span>\n    <span *ngIf=\" !signInForm.get('signinPassword').valid && signInForm.get('signinPassword').touched && signInForm.hasError('pattern', 'signinEmail')\">Valid email is required</span>\n    <span>\n      <h3 class=\"first\">Password</h3>\n      <input class=\"login-input\" name=\"signinPassword\" id=\"signinPassword\"  type=\"password\" size=\"30\" \n        pInputText  placeholder=\"Enter your Password\" formControlName=\"signinPassword\" required=\"required\" data-error=\"Password is required.\">\n    </span>\n    <label for=\"signinPassword\" class=\"invalid-feedback\" *ngIf=\"!signInForm.get('signinPassword').valid && signInForm.get('signinPassword').touched\">Password can't be blank</label>\n    <h3 class=\"first login-submit\">\n      <button pButton type=\"submit\" class=\"ui-button-danger btn-orange\">Login</button>\n    </h3>\n    <a href=\"\" class=\"logn-forgot\">Forgot Password?</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".error {\n  color: red; }\n\n.success {\n  color: green; }\n\n.etk-success-message {\n  position: absolute;\n  right: 16px;\n  top: 10px;\n  color: green; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_redirection_service__ = __webpack_require__("./src/app/auth/services/redirection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_token_service__ = __webpack_require__("./src/app/auth/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_preloader_service__ = __webpack_require__("./src/app/shared/services/preloader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importing Internal modules





// Importing Third-party modules







var LoginComponent = (function () {
    function LoginComponent(_toastr, _fb, _tokenService, _redirection, _auth, _userService, _router, _modalService, _preLoader, _location, zone) {
        this._toastr = _toastr;
        this._fb = _fb;
        this._tokenService = _tokenService;
        this._redirection = _redirection;
        this._auth = _auth;
        this._userService = _userService;
        this._router = _router;
        this._modalService = _modalService;
        this._preLoader = _preLoader;
        this._location = _location;
        this.zone = zone;
        this.loginFailed = false;
        this.userObj = {};
        this.signInForm = this._fb.group({
            signinEmail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            signinPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("login");
        this._userService.destroyUser();
    };
    //Forgotpassword navigation
    LoginComponent.prototype.gotoForgotPwd = function () {
        this._router.navigate(['/auth/forgot_password']);
    };
    //Resend email confirmation navigation
    LoginComponent.prototype.gotoResendConfirmEmail = function () {
        this._router.navigate(["/auth/resend_confirm_email"]);
    };
    // Sign in functionality
    LoginComponent.prototype.signIn = function (signInForm) {
        var _this = this;
        if (signInForm.valid) {
            var params = {
                email: signInForm.value.signinEmail,
                password: signInForm.value.signinPassword
            };
            this._preLoader.open();
            this._auth.signIn(params).subscribe(function (res) {
                if (res["success"]) {
                    _this._preLoader.close();
                    _this._tokenService.storeTokens(res["authentication_token"], res["refresh_token"]);
                    _this._userService.setUser(res["user"]);
                    _this._router.navigate(['sites']);
                    // this._redirection.navigateToDefaultRoute(res["user"]["role"]);
                }
                else {
                    _this.loginFailed = true;
                    _this._toastr.error(res["message"], "Oops!", { 'showCloseButton': true });
                    _this._preLoader.close();
                }
            }, function (err) {
                _this._preLoader.close();
                _this._toastr.error('Server Error', 'Oops!', { 'showCloseButton': true });
            });
        }
        else {
            this.setFormTouched(this.signInForm);
        }
    };
    // function for validate all form fields
    LoginComponent.prototype.setFormTouched = function (form_obj) {
        // if (form_obj.controls.default_role.status !== "VALID") {
        //   this._toastr.error("please select Role", 'Oops!', { showCloseButton: true });
        // }
        this._toastr.error("please fill all * marked fields", 'Oops!', { showCloseButton: true });
        Object.keys(form_obj.controls).forEach(function (field) {
            var control = form_obj.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "quadlogic-login",
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_10__services_token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_9__services_redirection_service__["a" /* RedirectionService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* QuadlogicAuthService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_services_preloader_service__["a" /* PreloaderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/resend-confirm-email/resend-confirm-email.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg \">\n    <div class=\"etk-main-cont\">\n        <a class=\"navbar-brand\" href=\"https://www.eteki.com\">\n            <img class=\"img-fluid\" src=\"assets/images/eTeki-Logo-w-Tagline.png\" alt=\"\" />\n        </a>\n    </div>\n</nav>\n<div class=\"container etk-main-body etk-signup-cont\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <form class=\"form-horizontal etk-forgot-pass-cont\"  [formGroup]=\"resendConfirmEmailForm\" (ngSubmit)=\"resendConfirmEmail(resendConfirmEmailForm)\" novalidate>\n                <div class=\"form-group\">\n                    <label class=\"control-label etk-forgot-title\" for=\"email\">Resend Confirmation Email</label>\n                    <div class=\"col-md-12\">\n                        <input type=\"email\" class=\"form-control\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" id=\"email\" placeholder=\"Enter email\" name=\"email\" formControlName=\"email\" required=\"required\">\n                        <span class=\"error\" *ngIf=\" !resendConfirmEmailForm.controls[ 'email'].valid && resendConfirmEmailForm.controls[ 'email'].touched \">\n                            <span *ngIf=\"resendConfirmEmailForm.controls[ 'email'][ 'errors'].required \">This feild is required.</span>\n                        <span class=\"error\" *ngIf=\"resendConfirmEmailForm.controls['email']['errors'].pattern \">\n                            please enter valid email\n                        </span>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group \">\n                    <div class=\"no-pd \">\n                        <button type=\"submit \" class=\"btn btn-primary \">Submit</button>\n                    </div>\n                </div>\n                <p class=\"control-label \" for=\"confirmNewPassword \">click here to\n                    <b><a [routerLink]=\"[ '/auth/login'] \">sign in!</a></b>\n                </p>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/resend-confirm-email/resend-confirm-email.component.scss":
/***/ (function(module, exports) {

module.exports = ".error {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/auth/resend-confirm-email/resend-confirm-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResendConfirmEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_preloader_service__ = __webpack_require__("./src/app/shared/services/preloader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules



//Importing Third-party modules

//Imporitng Application Modules
//Importing Application components
// Importing Application Services


//Any Other Please specify
var ResendConfirmEmailComponent = (function () {
    function ResendConfirmEmailComponent(_toastr, fb, _auth, _router, _preLoader) {
        this._toastr = _toastr;
        this.fb = fb;
        this._auth = _auth;
        this._router = _router;
        this._preLoader = _preLoader;
        this.resendConfirmEmailForm = this.fb.group({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        });
    }
    ResendConfirmEmailComponent.prototype.ngOnInit = function () {
    };
    ResendConfirmEmailComponent.prototype.resendConfirmEmail = function (resendEmailForm) {
        var _this = this;
        if (resendEmailForm.valid) {
            this._preLoader.open();
            this._auth.resendConfirmEmail(resendEmailForm.value).subscribe(function (res) {
                if (res['success']) {
                    _this._preLoader.close();
                    _this._toastr.success(res['message'][0], 'Success', { 'showCloseButton': true });
                    _this._router.navigate(['/auth/login']);
                }
                else {
                    _this._preLoader.close();
                    _this._toastr.error(res['message'][0], 'Oops!', { 'showCloseButton': true });
                }
            }, function (err) {
                _this._preLoader.close();
                _this._toastr.error(err, 'Oops!', { 'showCloseButton': true });
            });
        }
        else {
            this.setFormTouched(resendEmailForm);
        }
    };
    // function for validate all form fields
    ResendConfirmEmailComponent.prototype.setFormTouched = function (form_obj) {
        this._toastr.error("please fill all * marked fields", 'Oops!', { showCloseButton: true });
        Object.keys(form_obj.controls).forEach(function (field) {
            var control = form_obj.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    };
    ResendConfirmEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'eteki-resend-confirm-email',
            template: __webpack_require__("./src/app/auth/resend-confirm-email/resend-confirm-email.component.html"),
            styles: [__webpack_require__("./src/app/auth/resend-confirm-email/resend-confirm-email.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* QuadlogicAuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_preloader_service__["a" /* PreloaderService */]])
    ], ResendConfirmEmailComponent);
    return ResendConfirmEmailComponent;
}());



/***/ }),

/***/ "./src/app/auth/services/auth-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redirection_service__ = __webpack_require__("./src/app/auth/services/redirection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_service__ = __webpack_require__("./src/app/auth/services/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules


//Importing Third-party modules
//Imporitng Application Modules
//Importing Application components
// Importing Application Services




//Any Other Please specify
var AuthGaurdService = (function () {
    function AuthGaurdService(_auth, _router, _redirect, _user, _tokenService) {
        this._auth = _auth;
        this._router = _router;
        this._redirect = _redirect;
        this._user = _user;
        this._tokenService = _tokenService;
    }
    //Checking if user is logged in or not
    AuthGaurdService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._auth.isAuthenticated().then(function (authenticated) {
            console.log(authenticated);
            if (authenticated)
                return true;
            else {
                //  this._router.navigate(['/']);
                if (localStorage.getItem('refresh_token') !== null) {
                    _this.updateRefreshToken(route);
                }
                else {
                    _this._router.navigate(['/']);
                }
            }
        });
    };
    //Activating child routes
    AuthGaurdService.prototype.canActivateChild = function (route, state) {
        var _this = this;
        return this._auth.isAuthenticated().then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                // this._router.navigate(['/']);
                // if user session expired on routing level. triggers re-login component for the user
                if (localStorage.getItem('refresh_token') !== null) {
                    _this.updateRefreshToken(route);
                }
                else {
                    _this._router.navigate(['/']);
                }
            }
        });
    };
    AuthGaurdService.prototype.updateRefreshToken = function (route) {
        var _this = this;
        this._auth.updateRefreshToken()
            .subscribe(function (res) {
            console.log(res);
            if (res['success']) {
                // this._tokenService.storeTokens(
                //   res["authentication_token"],
                //   res["refresh_token"]
                // );
            }
            _this._router.navigate([route['_routerState']['url']]);
        });
    };
    AuthGaurdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* QuadlogicAuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__redirection_service__["a" /* RedirectionService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__token_service__["a" /* TokenService */]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "./src/app/auth/services/auth-login-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLoginGaurdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules


//Importing Third-party modules
//Imporitng Application Modules
//Importing Application components
// Importing Application Services

//Any Other Please specify 
var AuthLoginGaurdService = (function () {
    function AuthLoginGaurdService(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    //Activating the auth route if not logged in
    AuthLoginGaurdService.prototype.canActivate = function (route, state) {
        return this._auth.isAuthenticated().then(function (authenticated) {
            if (!authenticated) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    //Activating child routes of auth module
    AuthLoginGaurdService.prototype.canActivateChild = function (route, state) {
        var _this = this;
        return this._auth.isAuthenticated().then(function (authenticated) {
            if (!authenticated) {
                return true;
            }
            else {
                _this._router.navigate(["/sites"]);
                return false;
            }
        });
    };
    AuthLoginGaurdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* QuadlogicAuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthLoginGaurdService);
    return AuthLoginGaurdService;
}());



/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuadlogicAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__token_service__ = __webpack_require__("./src/app/auth/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules






//Importing Third-party modules

//Imporitng Application Modules
//Importing Application components
//Importing Application Services



//Any Other Please specify
var QuadlogicAuthService = (function () {
    function QuadlogicAuthService(_http, _tokenService, _userService, _router) {
        this._http = _http;
        this._tokenService = _tokenService;
        this._userService = _userService;
        this._router = _router;
    }
    //sign in api call
    QuadlogicAuthService.prototype.signIn = function (params) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + '/login', params);
    };
    //update token call checking for auth token if not will send refresh token
    QuadlogicAuthService.prototype.updateRefreshToken = function () {
        var params = this._tokenService.getTokens();
        var header = {};
        if (params['refresh_token'] !== null) {
            header = { 'refresh_token': localStorage.getItem('refresh_token') };
        }
        return this._http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/update_refresh_token', {}, { headers: header });
    };
    //Returning whether any user logged in or not
    QuadlogicAuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var params = this._tokenService.getTokens();
        if (params['authentication_token'] !== null) {
            var promise = new Promise(function (resolve, reject) {
                resolve(Object(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["tokenNotExpired"])(null, _this._tokenService.getAuthenticationToken()));
            });
            return promise;
        }
        else {
            var promise = new Promise(function (resolve, reject) {
                resolve(false);
            });
            return promise;
        }
    };
    //third party login
    QuadlogicAuthService.prototype.socialLogin = function (params) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/oauth_login', params);
    };
    //Check for email availabilty in sign up
    QuadlogicAuthService.prototype.emailAvailability = function (params) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/email_availability', { params: params });
    };
    //Check for phone number availabilty in sign up
    QuadlogicAuthService.prototype.phoneNumberAvailability = function (params) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/validate_phone', { params: params });
    };
    //Confirming email for login
    QuadlogicAuthService.prototype.confirmEmail = function (params) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/confirm_user', params);
    };
    //Signup method
    QuadlogicAuthService.prototype.signUp = function (signup_credentials) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/sign_up', signup_credentials);
    };
    //forgot password call
    QuadlogicAuthService.prototype.forgotPassword = function (params) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/forgot_password', params);
    };
    //Resend confirming email
    QuadlogicAuthService.prototype.resendConfirmEmail = function (params) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/resend_confirmation', { params: params });
    };
    //Resetting password
    QuadlogicAuthService.prototype.resetPassword = function (params) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/reset_password', params);
    };
    //Logout, clear tokens and redirect to logi page
    QuadlogicAuthService.prototype.logout = function () {
        var _this = this;
        var header = { 'authentication_token': localStorage.getItem('authentication_token'), 'refresh_token': localStorage.getItem('refresh_token') };
        this._http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'users/sign_out', { headers: header }).subscribe(function (res) {
            _this._tokenService.removeTokens();
            _this._userService.destroyUser();
            _this._router.navigate(['auth']);
        });
    };
    //After session expired redirecting to login page
    QuadlogicAuthService.prototype.redirectTo = function () {
        this._tokenService.removeTokens();
        this._userService.destroyUser();
        this._router.navigate(['auth']);
    };
    QuadlogicAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]])
    ], QuadlogicAuthService);
    return QuadlogicAuthService;
}());



/***/ }),

/***/ "./src/app/auth/services/redirection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_re_login_re_login_component__ = __webpack_require__("./src/app/shared/re-login/re-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules


//Importing Third-party modules
//Imporitng Application Modules
//Importing Application components


var RedirectionService = (function () {
    function RedirectionService(_router, _dialogService) {
        this._router = _router;
        this._dialogService = _dialogService;
    }
    //Navigating to base route based on role
    RedirectionService.prototype.navigateToDefaultRoute = function (role) {
        switch (role) {
            case 'Interviewer':
                this._router.navigate(['interviewer']);
                break;
            case 'Recruiter':
                this._router.navigate(['recruiter']);
                break;
            case 'Candidate':
                this._router.navigate(['candidate']);
                break;
            default:
                this._router.navigate(['auth']);
                break;
        }
    };
    //Opening Relogin component dialog
    RedirectionService.prototype.relogin = function (title, message) {
        return this._dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_2__shared_re_login_re_login_component__["a" /* ReLoginComponent */], {}, { backdropColor: 'rgba(8, 8, 8, 0.61)' });
    };
    RedirectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"]])
    ], RedirectionService);
    return RedirectionService;
}());



/***/ }),

/***/ "./src/app/auth/services/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__token_service__ = __webpack_require__("./src/app/auth/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redirection_service__ = __webpack_require__("./src/app/auth/services/redirection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_preloader_service__ = __webpack_require__("./src/app/shared/services/preloader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules








//Imporitng Application Modules
//Importing Application components
// Importing Application Services





var TokenInterceptor = (function () {
    function TokenInterceptor(_injector, _tokenService) {
        this._injector = _injector;
        this._tokenService = _tokenService;
    }
    //Adding Headers for the requests skip headers if there is no auth_token
    TokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var headers = {};
        // using Authentication token
        if (localStorage.getItem("authentication_token") !== null) {
            // this._tokenService.open()
            headers = {
                setHeaders: {
                    authentication_token: localStorage.getItem("authentication_token"),
                    refresh_token: localStorage.getItem("refresh_token")
                }
            };
        }
        var request = req.clone(headers);
        return next
            .handle(request)
            .map(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]) {
                console.log(event);
                console.log(request.headers);
                // if (request.headers.keys()[0] == "refresh_token") {
                _this._tokenService.storeTokens(event.body["authentication_token"], event.body["refresh_token"]);
                // }
                return event;
            }
        })
            .catch(function (error) {
            // this._tokenService.close();
            console.log(error);
            //Catching the error checking for the relogin component intialiazation
            var _router = _this._injector.get(__WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"]);
            var _redirect = _this._injector.get(__WEBPACK_IMPORTED_MODULE_10__redirection_service__["a" /* RedirectionService */]);
            var _user = _this._injector.get(__WEBPACK_IMPORTED_MODULE_11__shared_services_user_service__["a" /* UserService */]);
            var _auth = _this._injector.get(__WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* QuadlogicAuthService */]);
            var _preloader = _this._injector.get(__WEBPACK_IMPORTED_MODULE_12__shared_services_preloader_service__["a" /* PreloaderService */]);
            if (error.status === 401) {
                var _auth_1 = _this._injector.get(__WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* QuadlogicAuthService */]);
                if (error.error.message === "Authentication token expired.") {
                    var authReq = req.clone({
                        headers: req.headers.set("refresh_token", localStorage.getItem("refresh_token"))
                    });
                    return next.handle(authReq)
                        .map(function (response) {
                        if (response instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]) {
                            _this._tokenService.storeTokens(response.body['authentication_token'], response.body['refresh_token']);
                            return response;
                        }
                    })
                        .catch(function (error) {
                        _preloader.close();
                        if (_user.getUser().hasOwnProperty("role")) {
                            return _redirect.relogin().flatMap(function (res) {
                                if (res) {
                                    var reloginReq = req.clone({
                                        headers: req.headers.set("authentication_token", localStorage.getItem("authentication_token"))
                                    });
                                    return next.handle(reloginReq);
                                }
                                else {
                                    _auth_1.redirectTo();
                                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty();
                                }
                            });
                        }
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty();
                    });
                }
                else if (error.error.message == "Not Authenticated.") {
                    console.log("======================");
                    console.log("Not Authenticated");
                    _preloader.close();
                    if (_user.getUser().hasOwnProperty("role")) {
                        return _redirect.relogin().flatMap(function (res) {
                            if (res) {
                                console.log(res);
                                var reloginReq = req.clone({
                                    headers: req.headers.set("refresh_token", localStorage.getItem("refresh_token"))
                                });
                                return next.handle(reloginReq);
                            }
                            else {
                                _auth_1.redirectTo();
                                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty();
                            }
                        });
                    }
                    else {
                        _auth_1.redirectTo();
                    }
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty();
                }
                else if (error.error.message === "Session expired!") {
                    _preloader.close();
                    if (_user.getUser().hasOwnProperty("role")) {
                        return _redirect.relogin().flatMap(function (res) {
                            if (res) {
                                console.log(res);
                                var reloginReq = req.clone({
                                    headers: req.headers.set("refresh_token", localStorage.getItem("refresh_token"))
                                });
                                return next.handle(reloginReq);
                            }
                            else {
                                _auth_1.redirectTo();
                                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty();
                            }
                        });
                    }
                    else {
                        _auth_1.redirectTo();
                    }
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty();
                }
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_8__token_service__["a" /* TokenService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/services/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Internal modules

//Importing Third-party modules
//Imporitng Application Modules
//Importing Application components
// Importing Application Services
//Any Other Please specify
var TokenService = (function () {
    function TokenService() {
    }
    //store tokens once sign in
    TokenService.prototype.storeTokens = function (auth_token, refresh_token) {
        localStorage.setItem('authentication_token', auth_token);
        localStorage.setItem('refresh_token', refresh_token);
    };
    TokenService.prototype.getTokens = function () {
        return { 'authentication_token': localStorage.getItem('authentication_token'), 'refresh_token': localStorage.getItem('refresh_token') };
    };
    TokenService.prototype.getAuthenticationToken = function () {
        return localStorage.getItem('authentication_token');
    };
    TokenService.prototype.getRefreshToken = function () {
        return localStorage.getItem('refresh_token');
    };
    TokenService.prototype.removeTokens = function () {
        localStorage.clear();
    };
    TokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "header { width: 100%; height: 100px; border-bottom: solid 1px #d2d2d2; position: absolute; left:0px; right: 0px; padding: 0px; margin: 0px; }\n.logo { width: 180px; float: left; height: auto;}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\t<div class=\"quad-container\">\n\t\t<div class=\"red-bar\"></div>\n\t\t<div class=\"ql-mbar\">\n\t\t\t<img class=\"logo\" src=\"../assets/images/logo.png\" alt=\"logo\">\n\t\t\t<p-menubar [model]=\"items\">\n\t\t\t\t<button pButton label=\"Logout\" icon=\"fa-sign-out\"></button>\n\t\t\t</p-menubar>\n\t\t</div>\n\t</div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.showButton = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // sekhar
        // menu items to be displayed in menu
        this.items = [
            {
                label: 'Sites',
                icon: 'fa-building',
                url: 'sites'
            },
            {
                label: 'Rates',
                icon: 'fa-money'
            },
            {
                label: 'Collections',
                icon: 'fa-money'
            },
            {
                label: 'Reports',
                icon: 'fa-file'
            }
        ];
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/mid-body/mid-body.component.css":
/***/ (function(module, exports) {

module.exports = ".quadlogic-mid-body { width:100%; float:left; height:300px; margin-top: 100px;}"

/***/ }),

/***/ "./src/app/mid-body/mid-body.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"quadlogic-mid-body\"><router-outlet></router-outlet></div>"

/***/ }),

/***/ "./src/app/mid-body/mid-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MidBodyComponent = (function () {
    function MidBodyComponent() {
    }
    MidBodyComponent.prototype.ngOnInit = function () {
    };
    MidBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-mid-body',
            template: __webpack_require__("./src/app/mid-body/mid-body.component.html"),
            styles: [__webpack_require__("./src/app/mid-body/mid-body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MidBodyComponent);
    return MidBodyComponent;
}());



/***/ }),

/***/ "./src/app/shared/common.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ValidatePassword */
/* unused harmony export emailAvailability */
/* unused harmony export phoneNumberAvailability */
/* harmony export (immutable) */ __webpack_exports__["a"] = matchPassword;
/* unused harmony export duplicateEmail */
/* unused harmony export duplicateContact */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");

function ValidatePassword(control) {
    if (!control.value.includes('@') && control.value !== "") {
        return { validPassword: true };
    }
    return null;
}
// function for to check email availbility
function emailAvailability(control) {
    var _this = this;
    if (!control.valueChanges) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
    }
    else {
        return control.valueChanges
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap(function (value) { return _this._auth.emailAvailability({ email: control.value }); })
            .map(function (res) {
            return res['success'] == false ? { invalidEmail: true } : null;
        }).first();
    }
}
// function for to check phone number availbility
function phoneNumberAvailability(control) {
    var _this = this;
    if (!control.valueChanges) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
    }
    else {
        return control.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (value) { return _this._auth.phoneNumberAvailability({ phone: control.value }); })
            .map(function (res) {
            return res['success'] == false ? { invalidNumber: true } : null;
        }).first();
    }
}
// function for to compare passwords
function matchPassword(AC) {
    var password = AC.get('password').value; // to get value in input tag
    var confirmPassword = AC.get('confirm_password').value; // to get value in input tag
    if (password != confirmPassword) {
        AC.get('confirm_password').setErrors({ MatchPassword: true });
    }
    else {
        return null;
    }
}
var duplicateEmail = function (control) {
    var email = control.get('email').value;
    var alternate_email = control.get('alternate_email').value;
    if (email === alternate_email) {
        return { 'emailMatched': true };
    }
    else {
        return null;
    }
};
var duplicateContact = function (control) {
    var contact1 = control.get('contact1').value;
    var contact2 = control.get('contact2').value;
    if (contact1 === contact2) {
        return { 'contactMatched': true };
    }
    else {
        return null;
    }
};


/***/ }),

/***/ "./src/app/shared/directives/loading-image.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingImgDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingImgDirective = (function () {
    function LoadingImgDirective(el) {
        this.el = el;
        this.userUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoadingImgDirective.prototype.onClick = function (href) {
        console.log(this.tempVariable);
        var extension = this.tempVariable.split('.').pop();
        switch (extension) {
            case 'doc':
                this.src = 'assets/images/word.png';
                break;
            case 'pdf':
                this.src = 'assets/images/android.png';
                break;
            default:
                //this.src='assets/images/word.png'
                break;
        }
        //this.src  = 'assets/images/word.png';
        this.userUpdated.emit(this.src);
    };
    LoadingImgDirective.prototype.ngOnChanges = function () {
        console.log(this.tempVariable);
        var extension = this.tempVariable.split('.').pop();
        switch (extension) {
            case 'doc':
                this.src = 'assets/images/word.png';
                break;
            case 'pdf':
                this.src = 'assets/images/android.png';
                break;
            default:
                //this.src='assets/images/word.png'
                break;
        }
        this.userUpdated.emit(this.src);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoadingImgDirective.prototype, "userUpdated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('src'), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])(),
        __metadata("design:type", String)
    ], LoadingImgDirective.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tempVariable'),
        __metadata("design:type", Object)
    ], LoadingImgDirective.prototype, "tempVariable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoadingImgDirective.prototype, "onClick", null);
    LoadingImgDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[tohLoadingImg]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], LoadingImgDirective);
    return LoadingImgDirective;
}());



/***/ }),

/***/ "./src/app/shared/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-item dropdown\">\n    <a class=\"nav-link dropdown-toggle\" id=\"due_by\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ dropDownDefaultValue }}</a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"due_by\">\n        <a class=\"dropdown-item\" *ngFor=\"let option of dropDownList\" (click)=\"optionChanged(option['propValue'],option['key'])\">\n      {{option['key']}}\n    </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/dropdown/dropdown.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("./src/app/shared/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importing Internal modules

// Importing Third-party modules
// Imporitng Application Modules
// Importing Application components
// Importing Application Services

var DropdownComponent = (function () {
    function DropdownComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.dropDownValueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Selecting the defualt value in the give dropdown list if it is not provided from the component tag
        this.setDefaultValue();
        this._sharedService.clearDropDownEmitter.subscribe(function (res) {
            _this.dropDownDefaultValue = "";
            _this.setDefaultValue();
        });
    };
    DropdownComponent.prototype.setDefaultValue = function () {
        var _this = this;
        if (!this.dropDownDefaultValue)
            this.dropDownList.forEach(function (obj) {
                if (obj['default']) {
                    _this.dropDownDefaultValue = obj['key'];
                    return;
                }
            });
    };
    //After dropdown value changed setting up the view emit the required event.
    DropdownComponent.prototype.optionChanged = function (optionValue, optionKey) {
        if (this.dropDownDefaultValue !== optionKey) {
            this.dropDownDefaultValue = optionKey;
            this.dropDownValueChanged.emit({
                changedValue: optionValue
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DropdownComponent.prototype, "dropDownList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "dropDownDefaultValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "reIntiliaize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('valueChanged'),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "dropDownValueChanged", void 0);
    DropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'eteki-dropdown',
            template: __webpack_require__("./src/app/shared/dropdown/dropdown.component.html"),
            styles: [__webpack_require__("./src/app/shared/dropdown/dropdown.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/shared/filters/date-formatter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFormatterPipe = (function () {
    function DateFormatterPipe() {
    }
    DateFormatterPipe.prototype.transform = function (value) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]("en-US");
        value = datePipe.transform(value, 'dd-MMM-yyyy hh:mm a');
        return value;
    };
    DateFormatterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatter'
        })
    ], DateFormatterPipe);
    return DateFormatterPipe;
}());



/***/ }),

/***/ "./src/app/shared/re-login/re-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Login</h4>\n            <button type=\"button\" class=\"close\" (click)=\"cancel()\">&times;</button>\n        </div>\n        <p class=\"text-center\">\n            Your account session has been timed out due to inactivity. Please login to continue the session.\n        </p>\n        <form class=\"form-horizontal \" [formGroup]=\"signInForm\" (ngSubmit)=\"signIn(signInForm)\">\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email address:</label>\n                    <input type=\"email\" name=\"signinEmail\" id=\"signinEmail\" class=\"form-control\" formControlName=\"signinEmail\" placeholder=\"Enter username or email ID\" data-error=\"Email is required.\">\n                    <span *ngIf=\"!signInForm.get('signinEmail').valid && signInForm.get('signinEmail').touched\">\n                    <span *ngIf=\"signInForm.hasError('required', 'signinEmail')\">Email field is required</span>\n                    <span *ngIf=\"signInForm.hasError('pattern', 'signinEmail')\">Valid email is required</span>\n                    </span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"pwd\">Password:</label>\n                    <input type=\"password\" name=\"signinPassword\" id=\"signinPassword\" formControlName=\"signinPassword\" class=\"form-control\" placeholder=\"Enter password\" data-error=\"Password is required.\">\n                    <!-- <span *ngIf=\"!signInForm.get('signinPassword').valid && signInForm.get('signinPassword').touched\">\n                        <span *ngIf=\"signInForm.get('signinPassword').hasError('required', 'signinPassword')\">This field is required!</span>\n                    <span *ngIf=\"signInForm.hasError('minlength', 'signinPassword')\">Password should be 8 characters.</span>\n                    </span> -->\n                    <span class=\"error\" *ngIf=\"!signInForm.get('signinPassword').valid&& signInForm.get('signinPassword').touched\">\n\n                                        <div *ngIf=\"signInForm.hasError('required', 'signinPassword')\">\n                                          password field is required.\n                                        </div>\n                                        <div *ngIf=\"signInForm.hasError('minlength', 'signinPassword')\">\n                                          Password should be 8 characters.\n                                        </div>\n                                      </span>\n                </div>\n                <p class=\"or-login\">- Or login with -</p>\n                <div class=\"etk-social-media-cont\">\n                    <span class=\"rgt-border etk-facebook waves-effect\" (click)=\"oAuthLogin('facebook')\">\n\n                    <i class=\"flaticon-facebook-letter-logo\"></i>\n                  </span>\n                    <span class=\"rgt-border etk-linkedin waves-effect\" (click)=\"oAuthLogin('linkedin')\">\n                    <i class=\"flaticon-linkedin-logo\"></i>\n                  </span>\n                    <span class=\"etk-googleplus waves-effect\" (click)=\"oAuthLogin('google')\">\n                    <i class=\"flaticon-google-plus\"></i>\n                  </span>\n                </div>\n            </div>\n\n            <div class=\"modal-footer\">\n                <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/re-login/re-login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/re-login/re-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_services_token_service__ = __webpack_require__("./src/app/auth/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_services_auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_preloader_service__ = __webpack_require__("./src/app/shared/services/preloader.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importing Internal modules






// Imporitng Application Modules
// Importing Application components
// Importing Application Services




var ReLoginComponent = (function (_super) {
    __extends(ReLoginComponent, _super);
    function ReLoginComponent(dialogService, fb, tokenService, _auth, userService, toastr, _toastOption, _preLoader, zone) {
        var _this = _super.call(this, dialogService) || this;
        _this.fb = fb;
        _this.tokenService = tokenService;
        _this._auth = _auth;
        _this.userService = userService;
        _this.toastr = toastr;
        _this._toastOption = _toastOption;
        _this._preLoader = _preLoader;
        _this.zone = zone;
        _this.signInForm = _this.fb.group({
            signinEmail: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
            signinPassword: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required)
        });
        return _this;
    }
    ReLoginComponent.prototype.signIn = function (signInForm) {
        var _this = this;
        if (signInForm.valid) {
            var params = {
                email: signInForm.value.signinEmail,
                password: signInForm.value.signinPassword
            };
            this._auth.signIn(params).subscribe(function (res) {
                console.log(res);
                if (res["success"]) {
                    _this.result = true;
                    _this.close();
                    _this.tokenService.storeTokens(res["authentication_token"], res["refresh_token"]);
                    _this.userService.setUser(res["user"]);
                    _this.toastr.success("Signed in successfully.", "Success");
                }
                else {
                    _this.toastr.error(res["message"], "Oops!");
                }
            });
        }
        else {
            this.setFormTouched(this.signInForm);
        }
    };
    ReLoginComponent.prototype.cancel = function () {
        this.result = false;
        this.close();
    };
    ReLoginComponent.prototype.setFormTouched = function (form_obj) {
        Object.keys(form_obj.controls).forEach(function (field) {
            var control = form_obj.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    };
    ReLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "eteki-re-login",
            template: __webpack_require__("./src/app/shared/re-login/re-login.component.html"),
            styles: [__webpack_require__("./src/app/shared/re-login/re-login.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__auth_services_token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_services_auth_service__["a" /* QuadlogicAuthService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastOptions"],
            __WEBPACK_IMPORTED_MODULE_8__services_preloader_service__["a" /* PreloaderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
    ], ReLoginComponent);
    return ReLoginComponent;
}(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/role-select/role-select.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<eteki-header></eteki-header>-->\n<nav class=\"navbar navbar-expand-lg \">\n  <div class=\"etk-main-cont\">\n\n    <a class=\"navbar-brand\" [routerLink]=\"['jobs']\">\n            <img class=\"img-fluid\" src=\"assets/images/eTeki-Logo-w-Tagline.png\" alt=\"\" />\n        </a>\n\n\n\n\n    <div class=\"etk-signup-nav-right \">\n\n\n\n\n\n\n\n\n      <!--<div class=\"not-divider\"></div>-->\n\n\n      <!--<div class=\"etk-profile\" [routerLink]=\"['profile']\">\n        <img class=\"img-fluid\" src=\"assets/images/profile.png\" alt=\"\">\n        <div class=\"etk-pro-active\">\n          <i class=\"caret\"></i>\n        </div>\n      </div>-->\n    </div>\n  </div>\n</nav>\n<div class=\"container etk-main-body \">\n  <div class=\"etk-choose-option\">\n\n    <form [formGroup]=\"roleForm\" (ngSubmit)=\"roleSubmit(roleForm)\" novalidate>\n\n      <div class=\"form-group\">\n        <div class=\"row\">\n\n          <div class=\"col-sm-10\">\n            <input type=\"radio\" id=\"f-option\" name=\"default_role\" formControlName=\"default_role\" value=\"Recruiter\">\n            <label for=\"f-option\" data-error=\"please select role\">Sign up as a Recruiter</label>\n\n          </div>\n\n          <div class=\"col-sm-10\">\n            <input type=\"radio\" id=\"f-option\" name=\"default_role\" formControlName=\"default_role\" value=\"Interviewer\">\n            <label for=\"f-option\" data-error=\"please select role\">Sign up as a Interviewer</label>\n\n          </div>\n        </div>\n\n\n\n\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/role-select/role-select.component.scss":
/***/ (function(module, exports) {

module.exports = ".etk-sign-as-rec {\n  top: 2px !important; }\n"

/***/ }),

/***/ "./src/app/shared/role-select/role-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__ = __webpack_require__("./src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_services_token_service__ = __webpack_require__("./src/app/auth/services/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoleSelectComponent = (function () {
    function RoleSelectComponent(fb, login, router, _tokenService) {
        this.fb = fb;
        this.login = login;
        this.router = router;
        this._tokenService = _tokenService;
        this.roleForm = this.fb.group({
            default_role: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    }
    RoleSelectComponent.prototype.ngOnInit = function () {
    };
    RoleSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "eteki-role-select",
            template: __webpack_require__("./src/app/shared/role-select/role-select.component.html"),
            styles: [__webpack_require__("./src/app/shared/role-select/role-select.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* QuadlogicAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__auth_services_token_service__["a" /* TokenService */]])
    ], RoleSelectComponent);
    return RoleSelectComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/app-init.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Importing Internal modules



// Importing Third-party modules
// Imporitng Application Modules
// Importing Application components
// Importing Application Services

var AppInitService = (function () {
    function AppInitService(http, injector, userService) {
        this.http = http;
        this.injector = injector;
        this.userService = userService;
    }
    //Checking for the tokens if exists we will get the profile otherwise we will redirect it to sign-in page
    AppInitService.prototype.initializeApp = function () {
        if (localStorage.getItem('authentication_token') !== null && localStorage.getItem('refresh_token') !== null) {
            if (window.location.pathname === '/') {
                this.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]).navigate(['/sites']);
            }
            //  return this.userService.getUserProfile().subscribe(
            //     (data:Response) => {
            //       // console.log(window.location.pathname)
            //   this.url = window.location.pathname === '/' ? data['role'].toLowerCase() : window.location.pathname ;
            //       if(data['success']){
            //         this.userService.setUser(data)
            //         if(data['profile_created']){
            //           switch (data['role']) {
            //             case 'Interviewer':
            //               this.injector.get(Router).navigate([this.url]);
            //               break;
            //             case 'Recruiter':
            //             this.injector.get(Router).navigate([this.url]);
            //               break;
            //             case 'Candidate':
            //               this.injector.get(Router).navigate([this.url]);
            //               break;
            //             default:
            //               this.injector.get(Router).navigate(['/']);
            //               break;
            //           }
            //         }else{
            //           this.injector.get(Router).navigate(['/user-profile']);
            //         }
            //       }
            //     }
            //   )
            return;
        }
    };
    AppInitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], Object])
    ], AppInitService);
    return AppInitService;
}());



/***/ }),

/***/ "./src/app/shared/services/preloader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloaderService = (function () {
    function PreloaderService(_preLoader) {
        this._preLoader = _preLoader;
    }
    PreloaderService.prototype.open = function () {
        this._preLoader.show();
    };
    PreloaderService.prototype.close = function () {
        this._preLoader.hide();
    };
    PreloaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], PreloaderService);
    return PreloaderService;
}());



/***/ }),

/***/ "./src/app/shared/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importing Internal modules

// Importing Third-party modules
// Imporitng Application Modules
// Importing Application components
// Importing Application Services
var SharedService = (function () {
    function SharedService() {
        //To Clear dropdowns that are used in the filters across the application
        this.clearDropDownEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/shared/services/sweet-alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweetAlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importing Internal modules

// Importing Third-party modules

// Imporitng Application Modules
// Importing Application components
// Importing Application Services
var SweetAlertService = (function () {
    function SweetAlertService() {
    }
    //This is for sweet alert confirmation dialog.If no parameters provided will display default parameters
    SweetAlertService.prototype.isConfirm = function (alertObject) {
        return __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
            title: alertObject.title ? alertObject.title : 'Are you sure?',
            text: alertObject.text ? alertObject.text : '',
            cancelButtonColor: alertObject.cancelButtonColor ? alertObject.cancelButtonColor : 'gray',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: alertObject.confirmButtonText ? alertObject.confirmButtonText : 'Yes',
            cancelButtonText: alertObject.cancelButtonText ? alertObject.cancelButtonText : 'No'
        });
    };
    //This is for sweet alert Success message dialog.If no parameters provided will display default parameters
    SweetAlertService.prototype.success = function (alertObject) {
        return __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
            title: alertObject.title ? alertObject.title : 'Success',
            text: alertObject.text ? alertObject.text : '',
            type: 'success'
        });
    };
    //This is for sweet alert Success message dialog.If no parameters provided will display default parameters
    SweetAlertService.prototype.error = function (alertObject) {
        return __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
            title: alertObject.title ? alertObject.title : 'Error',
            text: alertObject.text ? alertObject.text : '',
            type: 'error'
        });
    };
    //This is for sweet alert Success message dialog.If no parameters provided will display default parameters
    SweetAlertService.prototype.warning = function (alertObject) {
        return __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
            title: alertObject.title ? alertObject.title : 'Warning',
            text: alertObject.text ? alertObject.text : '',
            type: 'warning'
        });
    };
    //This is for sweet alert Success message dialog.If no parameters provided will display default parameters
    SweetAlertService.prototype.info = function (alertObject) {
        return __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
            title: alertObject.title ? alertObject.title : 'Information',
            text: alertObject.text ? alertObject.text : '',
            type: 'info'
        });
    };
    SweetAlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SweetAlertService);
    return SweetAlertService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importing Internal modules


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.user = {};
    }
    UserService.prototype.setUser = function (user) {
        this.user = user;
        // console.log(this.user);
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.destroyUser = function () {
        this.user = {};
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__re_login_re_login_component__ = __webpack_require__("./src/app/shared/re-login/re-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_component__ = __webpack_require__("./src/app/shared/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sweet_alert_service__ = __webpack_require__("./src/app/shared/services/sweet-alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filters_date_formatter_pipe__ = __webpack_require__("./src/app/shared/filters/date-formatter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_loading_image_directive__ = __webpack_require__("./src/app/shared/directives/loading-image.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__role_select_role_select_component__ = __webpack_require__("./src/app/shared/role-select/role-select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Importing Internal modules




//Importing Third-party modules
// import { FullCalendarModule } from 'ng-fullcalendar';


//Imporitng Application Modules
//Importing Application components


//Importing Application Service





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["c" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                // InfiniteScrollModule,
                // FullCalendarModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__["a" /* NgSelectModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__re_login_re_login_component__["a" /* ReLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directives_loading_image_directive__["a" /* LoadingImgDirective */],
                __WEBPACK_IMPORTED_MODULE_9__filters_date_formatter_pipe__["a" /* DateFormatterPipe */],
                __WEBPACK_IMPORTED_MODULE_12__role_select_role_select_component__["a" /* RoleSelectComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__re_login_re_login_component__["a" /* ReLoginComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directives_loading_image_directive__["a" /* LoadingImgDirective */],
                // FileDropDirective,
                // FileSelectDirective,
                __WEBPACK_IMPORTED_MODULE_9__filters_date_formatter_pipe__["a" /* DateFormatterPipe */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_sweet_alert_service__["a" /* SweetAlertService */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/sites/meter-page/meter-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/meter-page/meter-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"width:100%; float:left; height:auto\">\n  <div class=\"ui-widget-header ql-search ql-ovv-users-search-cont\">\n    \n   \n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n  \n    <!-- <p-dropdown [options]=\"cities1\" [group]=\"true\" class=\"float-left\" ></p-dropdown> -->\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search...\">\n    <p-fileUpload mode=\"basic\" name=\"demo[]\"   maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\n    <button type=\"button\" (click)=\"showDialog()\" pButton style=\"float:right;\">  Add User</button>\n    </div>\n    \n  \n  \n  <p-dataTable [value]=\"items\" scrollable=\"true\" [rows]=\"5\" [globalFilter]=\"gb\" #dt >\n    <p-column field=\"virtual\" header=\"Virtual Meter ID\" [sortable]=\"true\"></p-column>\n    <p-column field=\"meterid\" header=\"Meter ID\" [sortable]=\"true\"></p-column>\n    <p-column field=\"multiplier\" header=\"Multiplier\" [sortable]=\"true\"></p-column>\n    <p-column field=\"units\" header=\"Units\" [sortable]=\"true\"></p-column> \n    <p-column field=\"utility\" header=\"Utility Type\" [sortable]=\"true\"></p-column> \n    <p-column styleClass=\"col-button\">\n      <ng-template pTemplate=\"header\">\n          <!-- <button type=\"button\" pButton icon=\"fa-refresh\"></button> -->\n      </ng-template>\n      <ng-template let-car=\"rowData\" pTemplate=\"body\">\n          <p-splitButton class=\"site-edit float-right\" icon=\"far fa-ellipsis-v\" [model]=\"edit\"></p-splitButton>\n      </ng-template>\n  </p-column>\n  </p-dataTable>\n  \n  </div>\n  \n  \n\n\n\n<p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\" [minY]=\"200\">\n  <span>\n      <div class=\"ui-g ui-fluid\">\n          <div class=\"ui-g-6\">\n            <label>Section Name</label>\n              <div class=\"ui-inputgroup\">\n                 \n                  <input type=\"text\" pInputText placeholder=\"Username\">         \n              </div>\n          </div>\n          <div class=\"ui-g-6\">\n              <label>Section Name</label>\n                <div class=\"ui-inputgroup\">\n                   \n                    <input type=\"text\" pInputText placeholder=\"Username\">         \n                </div>\n            </div>\n<div class=\"ui-g-6\">\n  <p-dropdown [options]=\"cities\" placeholder=\"Select a City\"></p-dropdown>\n\n  <!-- <p>Selected City: {{selectedCity ? selectedCity.name : 'none'}}</p> -->\n</div>\n\n          </div>\n\n  </span>\n      <p-footer>\n          <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\n          <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\n      </p-footer>\n</p-dialog>"

/***/ }),

/***/ "./src/app/sites/meter-page/meter-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeterPageComponent = (function () {
    function MeterPageComponent() {
    }
    MeterPageComponent.prototype.ngOnInit = function () {
    };
    MeterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-meter-page',
            template: __webpack_require__("./src/app/sites/meter-page/meter-page.component.html"),
            styles: [__webpack_require__("./src/app/sites/meter-page/meter-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MeterPageComponent);
    return MeterPageComponent;
}());



/***/ }),

/***/ "./src/app/sites/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = ".ql-site-building { width: 140px; height: auto; float: left; }\n.ql-ovv-site-titles { float: left; margin-left: 20px; }\n.ql-ovv-site-titles label {  font-size: 16px; font-weight: bold; margin-top: 20px; float: left; width:100%;}\n.ql-ovv-site-titles p { margin-top: 12px; float: left; }\n.ql-ovv-site-cont { border:solid 1px #d2d2d2; width:100%; height:auto; float:left;}\n.ql-ovv-edit { color: #d2d2d2; font-size: 20px; float: right; margin: 10px 20px; cursor: pointer }\n.ql-ovv-user-title { font-size: 18px; float: left; }\n.ql-ovv-users-search-cont {width:100%; background:none; border:none; text-align:right; padding:1rem 0px !important; }"

/***/ }),

/***/ "./src/app/sites/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-nopad ql-ovv-site-cont\" >\n  <img class=\"ql-site-building\" src=\"../assets/images/building.jpg\" alt=\"\">\n  <div class=\"ql-ovv-site-titles\">\n    <label>{{site.name}} Overview</label>\n    <p><i class=\"fa fa-map-marker\"></i> {{site.address_line1}}, {{site.address_line2}}, {{site.city}}, {{site.state}} - {{site.zipcode}}</p>\n</div>\n<i class=\"fa fa-pencil ql-ovv-edit\"></i>\n</div>\n\n\n\n<div style=\"width:100%; float:left; height:auto\">\n<div class=\"ui-widget-header ql-search ql-ovv-users-search-cont\">\n  \n  <label class=\"ql-ovv-user-title\">All Users</label>\n  <!-- <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> -->\n\n  <!-- <p-dropdown [options]=\"cities1\" [group]=\"true\" class=\"float-left\" ></p-dropdown> -->\n  <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search...\">\n  <button type=\"button\" (click)=\"showDialog()\" pButton >  Add User</button>\n  </div>\n  \n\n\n<p-dataTable [value]=\"users\" reorderableColumns=\"true\" scrollable=\"true\" [rows]=\"5\" [globalFilter]=\"gb\" #dt >\n  <p-column field=\"user_name\" header=\"Users\" [sortable]=\"true\"></p-column>\n  <p-column field=\"email\" header=\"Email ID\" [sortable]=\"true\"></p-column>\n  <p-column field=\"role\" header=\"Role\" [sortable]=\"true\"></p-column>\n  <p-column field=\"actions\" header=\"Actions\" [sortable]=\"true\"></p-column> \n</p-dataTable>\n\n\n\n\n\n<p-dialog header=\"Create User\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\" [minY]=\"200\">\n    <span>\n        <div class=\"ui-g ui-fluid\">\n            <div class=\"ui-g-6\">\n                <label>First Name</label>\n                <div class=\"ui-inputgroup\">\n                    <input type=\"text\" pInputText placeholder=\"First Name\">         \n                </div>\n            </div>\n            <div class=\"ui-g-6\">\n                <label>Last Name</label>\n                <div class=\"ui-inputgroup\">                  \n                    <input type=\"text\" pInputText placeholder=\"Last Name\">         \n                </div>\n            </div>\n            <div class=\"ui-g-6\">\n                <label>Email</label>\n                <div class=\"ui-inputgroup\">                  \n                    <input type=\"text\" pInputText placeholder=\"Email\">         \n                </div>\n            </div>\n            <div class=\"ui-g-6\">\n                    <label>Select Role</label>\n                    <!-- <p-dropdown [options]=\"roles\" placeholder=\"Select a Role\"></p-dropdown> -->\n                    <p-dropdown [options]=\"roles\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a City\" optionLabel=\"role\" [showClear]=\"true\"></p-dropdown>\n            </div>\n        </div>\n    </span>\n    <p-footer>\n    <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\n    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\n    </p-footer>\n</p-dialog>"

/***/ }),

/***/ "./src/app/sites/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/sites/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewComponent = (function () {
    function OverviewComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.display = false;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.site_id = +params['id'];
            _this.userService.getUsersAndRoles(_this.site_id)
                .subscribe(function (data) {
                console.log(data);
                _this.users = data.users;
                _this.roles = data.roles;
            });
        });
    };
    OverviewComponent.prototype.showDialog = function () {
        this.display = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OverviewComponent.prototype, "site", void 0);
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-overview',
            inputs: ['site'],
            template: __webpack_require__("./src/app/sites/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/sites/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/sites/sections/sections.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/sections/sections.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\" [minY]=\"200\">\n    <span>\n        <div class=\"ui-g ui-fluid\">\n            <div class=\"ui-g-6\">\n              <label>Section Name</label>\n                <div class=\"ui-inputgroup\">\n                   \n                    <input type=\"text\" pInputText placeholder=\"Username\">         \n                </div>\n            </div>\n            <div class=\"ui-g-6\">\n                <label>Section Name</label>\n                  <div class=\"ui-inputgroup\">\n                     \n                      <input type=\"text\" pInputText placeholder=\"Username\">         \n                  </div>\n              </div>\n<div class=\"ui-g-6\">\n    <p-dropdown [options]=\"cities\" placeholder=\"Select a City\"></p-dropdown>\n\n    <!-- <p>Selected City: {{selectedCity ? selectedCity.name : 'none'}}</p> -->\n</div>\n\n            </div>\n\n    </span>\n        <p-footer>\n            <button type=\"button\" pButton (click)=\"display=false\" label=\"Yes\">Yes</button>\n            <button type=\"button\" pButton (click)=\"display=false\" label=\"No\">No</button>\n        </p-footer>\n</p-dialog>\n\n\n\n\n\n<div class=\"ui-widget-header ql-search\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n\n   \n    <!-- <button pButton type=\"button\" label=\"Click\" ></button> -->\n    <div style=\"float:right;\">\n    <p-fileUpload mode=\"basic\" name=\"demo[]\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\n    <button type=\"button\" (click)=\"showDialog()\" pButton   label=\"Add Section\">Add Section</button>\n  </div>\n</div>\n\n<p-dataTable [value]=\"items\" reorderableColumns=\"true\" scrollable=\"true\" [rows]=\"5\" [globalFilter]=\"gb\" #dt >\n    <p-column field=\"section\" header=\"Section Name\" [sortable]=\"true\"></p-column>\n    <p-column field=\"brand\" header=\"Description\" [sortable]=\"true\"></p-column>\n    <p-column field=\"color\" header=\"Label\" [sortable]=\"true\"></p-column>\n    <p-column field=\"color\" header=\"Utility Type\" [sortable]=\"true\"></p-column>\n    <p-column field=\"color\" header=\"Rate Structure\" [sortable]=\"true\"></p-column>\n    <p-column field=\"color\" header=\"Units Assigned\" [sortable]=\"true\"></p-column>\n    <p-column styleClass=\"col-button\">\n        <ng-template pTemplate=\"header\">\n            <!-- <button type=\"button\" pButton icon=\"fa-refresh\"></button> -->\n        </ng-template>\n        <ng-template let-car=\"rowData\" pTemplate=\"body\">\n            <p-splitButton class=\"site-edit float-right\" icon=\"far fa-ellipsis-v\" [model]=\"edit\"></p-splitButton>\n        </ng-template>\n    </p-column>\n</p-dataTable>\n\n"

/***/ }),

/***/ "./src/app/sites/sections/sections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionsComponent = (function () {
    function SectionsComponent() {
        this.display = false;
    }
    SectionsComponent.prototype.ngOnInit = function () {
        this.items = [
            { "brand": "VW", "section": "Sewage Rate", "color": "Orange", },
            { "brand": "Audi", "section": "Section C1", "color": "Black" },
            { "brand": "Renault", "section": "Section RA", "color": "Gray" },
            { "brand": "BMW", "section": "Water Rate", "color": "Blue" },
            { "brand": "Mercedes", "section": "Gas Rate", "color": "Orange" },
            { "brand": "Volvo", "section": 2005, "color": "Black" },
            { "brand": "Honda", "section": 2012, "color": "Yellow" },
            { "brand": "Jaguar", "section": 2013, "color": "Orange" },
            { "brand": "Ford", "section": 2000, "color": "Black" },
            { "brand": "Fiat", "section": 2013, "color": "Red" },
            { "brand": "VW", "section": 2012, "color": "Orange" },
        ];
        this.cities = [{ label: 'Select City', value: null },
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }];
    };
    SectionsComponent.prototype.showDialog = function () {
        this.display = true;
    };
    SectionsComponent.prototype.handleClick = function () {
        //execute action
    };
    SectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-sections',
            template: __webpack_require__("./src/app/sites/sections/sections.component.html"),
            styles: [__webpack_require__("./src/app/sites/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/sites/services/sites-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitesServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SitesServiceService = (function () {
    function SitesServiceService(httpClient) {
        this.httpClient = httpClient;
    }
    SitesServiceService.prototype.getSites = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "sites");
    };
    // sekhar
    // To get the site details
    SitesServiceService.prototype.getSiteDetails = function (id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "get_stie_details", { params: { id: id } });
    };
    SitesServiceService.prototype.createSite = function (reqBody) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "/sites", reqBody);
    };
    SitesServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SitesServiceService);
    return SitesServiceService;
}());



/***/ }),

/***/ "./src/app/sites/services/units.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnitsService = (function () {
    function UnitsService(httpClient) {
        this.httpClient = httpClient;
    }
    UnitsService.prototype.getUnits = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "/units");
    };
    UnitsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UnitsService);
    return UnitsService;
}());



/***/ }),

/***/ "./src/app/sites/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    // sekhar
    // to get users of a particular site and all roles
    UserService.prototype.getUsersAndRoles = function (site_id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host + "get_users_and_roles", { params: { site_id: site_id } });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sites/site/site.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/site/site.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p-breadcrumb class=\"float-right categories\" [model]=\"items\" [home]=\"home\"></p-breadcrumb> -->\n<div class=\"clear\"></div>\n<h5 class=\"page-heading\">{{site.name}}</h5>\n<div class=\"ui-g-nopad tabs-view\">\n    <p-tabView>\n        <p-tabPanel header=\"Overview\" leftIcon=\"fa-book\">\n            <quadlogic-overview [site]=site></quadlogic-overview>\n        </p-tabPanel>\n        <p-tabPanel header=\"Sections\" leftIcon=\"fa-building\">\n            <quadlogic-sections></quadlogic-sections>\n        </p-tabPanel>\n        <p-tabPanel header=\"Units\" leftIcon=\"fa-home\">\n            <quadlogic-units></quadlogic-units>\n        </p-tabPanel>\n        <p-tabPanel header=\"Meters\" leftIcon=\"fa-dashboard\">\n            <quadlogic-meter-page></quadlogic-meter-page>\n        </p-tabPanel>\n        <p-tabPanel header=\"Tenants\" leftIcon=\"fa-users\">\n            Content 5\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "./src/app/sites/site/site.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sites_service_service__ = __webpack_require__("./src/app/sites/services/sites-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteComponent = (function () {
    function SiteComponent(siteService, route) {
        this.siteService = siteService;
        this.route = route;
        this.site = {};
    }
    SiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number      
        });
        this.siteService.getSiteDetails(this.id)
            .subscribe(function (data) {
            _this.site = data.site;
            // localStorage.setItem('site_id',this.site.id);
        });
        this.items = [
            { label: 'Overview' },
            { label: 'Sections' },
            { label: 'Units' },
            { label: 'Meters' },
            { label: 'Tenants' }
        ];
    };
    SiteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-site',
            template: __webpack_require__("./src/app/sites/site/site.component.html"),
            styles: [__webpack_require__("./src/app/sites/site/site.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sites_service_service__["a" /* SitesServiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], SiteComponent);
    return SiteComponent;
}());



/***/ }),

/***/ "./src/app/sites/sites-list/sites-list.component.css":
/***/ (function(module, exports) {

module.exports = ".ui-table .ui-table-tbody>tr>td, .ui-table .ui-table-thead>tr>th { padding: 1rem !important; }"

/***/ }),

/***/ "./src/app/sites/sites-list/sites-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"siteTable\">\n\t<p-table [value]=\"sites\">\n\t\t<ng-template pTemplate=\"caption\">\n\t\t\t<div class=\"ui-g\">\n\t\t\t\t<div class=\"ui-g-12 ui-md-6 ui-lg-5 search-input\">\n\t\t\t\t\t<!-- <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n                <i class=\"fa fa-search search-icon\"></i> -->\n\t\t\t\t\t<h5 class=\"page-heading\">All sites</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ui-g-12 ui-md-6 ui-lg-7 padding-zero text-right site-buttons\">\n\t\t\t\t\t<button pButton type=\"button\" icon=\"fas fa-upload\" label=\"Import CSV\" class=\"ui-button-secondary\">Import CSV</button>\n\t\t\t\t\t<button pButton type=\"button\" icon=\"fal fa-plus\" label=\"Add Site\" (click)=\"showDialog()\" class=\"ui-button-secondary\">Add Site</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template pTemplate=\"header\">\n\t\t\t<tr>\n\t\t\t\t<th width=\"30%\">Site</th>\n\t\t\t\t<th width=\"14%\">City</th>\n\t\t\t\t<th width=\"14%\">State</th>\n\t\t\t\t<th width=\"14%\">Units</th>\n\t\t\t\t<th width=\"14%\">Managers</th>\n\t\t\t\t<th width=\"14%\">Tanants</th>\n\t\t\t</tr>\n\t\t</ng-template>\n\t\t<ng-template pTemplate=\"body\" let-site>\n\t\t\t<tr>\n\t\t\t\t<td width=\"30%\">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<a href=\"\" [routerLink]=\"['/sites/', site.id]\">{{site.name}}</a>\n\t\t\t\t\t</b>{{site.address_line1}}{{site.address_line2}}</td>\n\t\t\t\t<td width=\"14%\">{{site.city}}</td>\n\t\t\t\t<td width=\"14%\">{{site.state}}</td>\n\t\t\t\t<td width=\"14%\">{{site.units}}</td>\n\t\t\t\t<td width=\"14%\">{{site.managers}}</td>\n\t\t\t\t<td width=\"14%\" class=\"split-button\">{{site.tanants}}\n\t\t\t\t\t<p-splitButton class=\"site-edit float-right\" icon=\"far fa-ellipsis-v\" [model]=\"items\"></p-splitButton>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</ng-template>\n\t</p-table>\n</div>\n\n\n<p-dialog class=\"modal-top\" header=\"Create Site\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"700\" [minWidth]=\"700\"\n [minY]=\"700\">\n\t<form [formGroup]=\"siteCreateForm\" (ngSubmit)=\"createSite(siteCreateForm)\">\n\t\t<div class=\"ui-g\">\n\t\t\t<span class=\"forn-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Site Name *</h3>\n\t\t\t\t<input class=\"login-input\" name=\"sitename\" id=\"siteName\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site name\" formControlName=\"name\"\n\t\t\t\t required=\"required\" data-error=\"sitename is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('name').valid && siteCreateForm.get('name').touched && siteCreateForm.hasError('required', 'name')\">\n\t\t\t\tsite name is required</span>\n\t\t\t</span>\n\t\t\t<span class=\"forn-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Address 1 *</h3>\n\t\t\t\t<input class=\"login-input\" name=\"siteaddress\" id=\"address1\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site address\"\n\t\t\t\t formControlName=\"address_line1\" required=\"required\" data-error=\"site address is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('address_line1').valid && siteCreateForm.get('address_line1').touched && siteCreateForm.hasError('required', 'address_line1')\">\n\t\t\t\tsite address is required</span>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"ui-g\">\n\t\t\t<span class=\"forn-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Address 2 *</h3>\n\t\t\t\t<input id=\"siteaddress1\" class=\"login-input\" name=\"siteaddress2\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site another address\"\n\t\t\t\t formControlName=\"address_line2\" required=\"required\" data-error=\"site another address is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('address_line2').valid && siteCreateForm.get('address_line2').touched && siteCreateForm.hasError('required', 'address2')\">\n\t\t\t\tsite address is required</span>\n\t\t\t</span>\n\t\t\t<span class=\"forn-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">City</h3>\n\t\t\t\t<input id=\"city\" class=\"login-input\" name=\"city\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter your City\" formControlName=\"city\"\n\t\t\t\t required=\"required\" data-error=\"site city is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('city').valid && siteCreateForm.get('city').touched && siteCreateForm.hasError('required', 'city')\">\n\t\t\t\tsite city is required</span>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"ui-g\">\n\t\t\t<span class=\"forn-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">State *</h3>\n\t\t\t\t<input id=\"state\" class=\"login-input\" name=\"state\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site state\" formControlName=\"state\"\n\t\t\t\t required=\"required\" data-error=\"state is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('state').valid && siteCreateForm.get('state').touched && siteCreateForm.hasError('required', 'state')\">\n\t\t\t\tsite state is required</span>\n\t\t\t</span>\n\t\t\t<span class=\"forn-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Country *</h3>\n\t\t\t\t<input id=\"country\" class=\"login-input\" name=\"country\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter your Country\"\n\t\t\t\t formControlName=\"country\" required=\"required\" data-error=\"site country is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('country').valid && siteCreateForm.get('country').touched && siteCreateForm.hasError('required', 'country')\">\n\t\t\t\tsite country is required</span>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"ui-g\">\n\t\t\t<span class=\"forn-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Zipcode *</h3>\n\t\t\t\t<input id=\"zipcode\" class=\"login-input\" name=\"zipcode\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site zipcode\" formControlName=\"zipcode\"\n\t\t\t\t required=\"required\" data-error=\"state zipcode is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('zipcode').valid && siteCreateForm.get('zipcode').touched && siteCreateForm.hasError('required', 'zipcode')\">\n\t\t\t\tsite zipcode is required</span>\n\t\t\t</span>\n\t\t\t<span class=\"forn-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">ShortZipocde *</h3>\n\t\t\t\t<input id=\"shortzipcode\" class=\"login-input\" name=\"country\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter your shortzipcode\"\n\t\t\t\t formControlName=\"short_zip_code\" required=\"required\" data-error=\"site shortzipcode is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('short_zip_code').valid && siteCreateForm.get('short_zip_code').touched && siteCreateForm.hasError('required', 'short_zip_code')\">\n\t\t\t\tsite shortzipcode is required</span>\n\t\t\t</span>\n\t\t</div>\n\t\t<p-footer class=\"\">\n\t\t\t<button type=\"button\" pButton class=\"ui-button-secondary\" (click)=\"display=false\" label=\"close\">close</button>\n\t\t\t<button type=\"submit\" pButton class=\"ui-button btn-orange\" label=\"Save changes\">Save changes</button>\n\t\t</p-footer>\n\t</form>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/sites/sites-list/sites-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sites_services_sites_service_service__ = __webpack_require__("./src/app/sites/services/sites-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// sites service


var SitesListComponent = (function () {
    function SitesListComponent(siteService, _fb) {
        this.siteService = siteService;
        this._fb = _fb;
        this.display = false;
        this.siteCreateForm = this._fb.group({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            address_line1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            address_line2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            state: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            zipcode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            short_zip_code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    }
    SitesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.siteService.getSites()
            .subscribe(function (data) {
            console.log(data);
            _this.sites = data.sites;
        });
    };
    SitesListComponent.prototype.createSite = function (siteCreateForm) {
        var _this = this;
        if (siteCreateForm.valid) {
            this.siteService.createSite(siteCreateForm.value).subscribe(function (res) {
                console.log(res);
                _this.sites.unshift(res.site);
                _this.display = false;
                _this.siteCreateForm.reset();
            });
        }
        else {
            this.setFormTouched(this.siteCreateForm);
        }
    };
    // function for validate all form fields
    SitesListComponent.prototype.setFormTouched = function (form_obj) {
        // this._toastr.error("please fill all * marked fields", 'Oops!', { showCloseButton: true });
        Object.keys(form_obj.controls).forEach(function (field) {
            var control = form_obj.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    };
    SitesListComponent.prototype.showDialog = function () {
        this.display = true;
    };
    SitesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-sites-list',
            template: __webpack_require__("./src/app/sites/sites-list/sites-list.component.html"),
            styles: [__webpack_require__("./src/app/sites/sites-list/sites-list.component.css")]
        })
        // interface for demo
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sites_services_sites_service_service__["a" /* SitesServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], SitesListComponent);
    return SitesListComponent;
}());



/***/ }),

/***/ "./src/app/sites/sites-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sites_list_sites_list_component__ = __webpack_require__("./src/app/sites/sites-list/sites-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_site_component__ = __webpack_require__("./src/app/sites/site/site.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Author: sekhar
// routes for sites module
var siteRoutes = [
    { path: '', redirectTo: 'sites', pathMatch: 'full' },
    { path: 'sites', component: __WEBPACK_IMPORTED_MODULE_3__sites_list_sites_list_component__["a" /* SitesListComponent */] },
    { path: 'sites/:id', component: __WEBPACK_IMPORTED_MODULE_4__site_site_component__["a" /* SiteComponent */] }
];
var SitesRoutingModule = (function () {
    function SitesRoutingModule() {
    }
    SitesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(siteRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]],
            declarations: []
        })
    ], SitesRoutingModule);
    return SitesRoutingModule;
}());



/***/ }),

/***/ "./src/app/sites/sites.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesModule", function() { return SitesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sites_routing_module__ = __webpack_require__("./src/app/sites/sites-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_datatable__ = __webpack_require__("./node_modules/primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_fileupload__ = __webpack_require__("./node_modules/primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_breadcrumb__ = __webpack_require__("./node_modules/primeng/breadcrumb.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_splitbutton__ = __webpack_require__("./node_modules/primeng/splitbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_splitbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_splitbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sites_list_sites_list_component__ = __webpack_require__("./src/app/sites/sites-list/sites-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_sites_service_service__ = __webpack_require__("./src/app/sites/services/sites-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_units_service__ = __webpack_require__("./src/app/sites/services/units.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__site_site_component__ = __webpack_require__("./src/app/sites/site/site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sections_sections_component__ = __webpack_require__("./src/app/sites/sections/sections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__overview_overview_component__ = __webpack_require__("./src/app/sites/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__meter_page_meter_page_component__ = __webpack_require__("./src/app/sites/meter-page/meter-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__units_units_component__ = __webpack_require__("./src/app/sites/units/units.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tenants_tenants_component__ = __webpack_require__("./src/app/sites/tenants/tenants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service__ = __webpack_require__("./src/app/sites/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var SitesModule = (function () {
    function SitesModule() {
    }
    SitesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__sites_routing_module__["a" /* SitesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_primeng_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_breadcrumb__["BreadcrumbModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_splitbutton__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__sites_list_sites_list_component__["a" /* SitesListComponent */], __WEBPACK_IMPORTED_MODULE_14__site_site_component__["a" /* SiteComponent */], __WEBPACK_IMPORTED_MODULE_15__sections_sections_component__["a" /* SectionsComponent */], __WEBPACK_IMPORTED_MODULE_16__overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_17__meter_page_meter_page_component__["a" /* MeterPageComponent */], __WEBPACK_IMPORTED_MODULE_18__units_units_component__["a" /* UnitsComponent */], __WEBPACK_IMPORTED_MODULE_19__tenants_tenants_component__["a" /* TenantsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_sites_service_service__["a" /* SitesServiceService */], __WEBPACK_IMPORTED_MODULE_13__services_units_service__["a" /* UnitsService */], __WEBPACK_IMPORTED_MODULE_21__services_user_service__["a" /* UserService */]]
        })
    ], SitesModule);
    return SitesModule;
}());



/***/ }),

/***/ "./src/app/sites/tenants/tenants.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/tenants/tenants.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"width:100%; float:left; height:auto\">\n  <div class=\"ui-widget-header ql-search ql-ovv-users-search-cont\">\n    \n   \n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n  \n    <!-- <p-dropdown [options]=\"cities1\" [group]=\"true\" class=\"float-left\" ></p-dropdown> -->\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search...\">\n    <p-fileUpload mode=\"basic\" name=\"demo[]\"   maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\n    <button type=\"button\" (click)=\"showDialog()\" pButton style=\"float:right;\">  Add User</button>\n    </div>\n    \n  \n  \n  <p-dataTable [value]=\"items\" scrollable=\"true\" [rows]=\"5\" [globalFilter]=\"gb\" #dt >\n    <p-column field=\"username\" header=\"Tanants Name\" [sortable]=\"true\"></p-column>\n    <p-column field=\"emailaddress\" header=\"Email ID\" [sortable]=\"true\"></p-column>\n    <p-column field=\"units\" header=\"Units\" [sortable]=\"true\"></p-column>\n    <p-column field=\"type\" header=\"Type\" [sortable]=\"true\"></p-column> \n    <p-column styleClass=\"col-button\">\n      <ng-template pTemplate=\"header\">\n          <!-- <button type=\"button\" pButton icon=\"fa-refresh\"></button> -->\n      </ng-template>\n      <ng-template let-car=\"rowData\" pTemplate=\"body\">\n          <p-splitButton class=\"site-edit float-right\" icon=\"far fa-ellipsis-v\" [model]=\"edit\"></p-splitButton>\n      </ng-template>\n  </p-column>\n  </p-dataTable>\n  \n  </div>\n  \n  \n\n\n\n<p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\" [minY]=\"200\">\n  <span>\n      <div class=\"ui-g ui-fluid\">\n          <div class=\"ui-g-6\">\n            <label>Section Name</label>\n              <div class=\"ui-inputgroup\">\n                 \n                  <input type=\"text\" pInputText placeholder=\"Username\">         \n              </div>\n          </div>\n          <div class=\"ui-g-6\">\n              <label>Section Name</label>\n                <div class=\"ui-inputgroup\">\n                   \n                    <input type=\"text\" pInputText placeholder=\"Username\">         \n                </div>\n            </div>\n<div class=\"ui-g-6\">\n  <p-dropdown [options]=\"cities\" placeholder=\"Select a City\"></p-dropdown>\n\n  <!-- <p>Selected City: {{selectedCity ? selectedCity.name : 'none'}}</p> -->\n</div>\n\n          </div>\n\n  </span>\n      <p-footer>\n          <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\n          <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\n      </p-footer>\n</p-dialog>"

/***/ }),

/***/ "./src/app/sites/tenants/tenants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TenantsComponent = (function () {
    function TenantsComponent() {
    }
    TenantsComponent.prototype.ngOnInit = function () {
    };
    TenantsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-tenants',
            template: __webpack_require__("./src/app/sites/tenants/tenants.component.html"),
            styles: [__webpack_require__("./src/app/sites/tenants/tenants.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TenantsComponent);
    return TenantsComponent;
}());



/***/ }),

/***/ "./src/app/sites/units/units.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/units/units.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\" [minY]=\"200\">\n    <span>\n      <div class=\"ui-g ui-fluid\">\n          <div class=\"ui-g-6\">\n            <label>Section Name</label>\n              <div class=\"ui-inputgroup\">\n                 \n                  <input type=\"text\" pInputText placeholder=\"Username\">         \n              </div>\n          </div>\n          <div class=\"ui-g-6\">\n              <label>Section Name</label>\n                <div class=\"ui-inputgroup\">\n                   \n                    <input type=\"text\" pInputText placeholder=\"Username\">         \n                </div>\n            </div>\n<div class=\"ui-g-6\">\n  <p-dropdown [options]=\"cities\" placeholder=\"Select a City\"></p-dropdown>\n\n  <!-- <p>Selected City: {{selectedCity ? selectedCity.name : 'none'}}</p> -->\n</div>\n\n          </div>\n\n  </span>\n    <p-footer>\n        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\n        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\n    </p-footer>\n</p-dialog>\n<div class=\"ui-widget-header ql-search\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n    <!-- <button pButton type=\"button\" label=\"Click\" ></button> -->\n    <div style=\"float:right;\">\n        <button type=\"button\" (click)=\"showDialog()\" pButton label=\"Add Section\" styleClass=\"col-button\">Move</button>\n        <p-fileUpload mode=\"basic\" name=\"demo[]\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\" label=\"Import\"></p-fileUpload>\n        <button type=\"button\" (click)=\"showDialog()\" pButton label=\"Add Section\">Add Section</button>\n    </div>\n</div>\n\n<p-dataTable [value]=\"units\" scrollable=\"true\" [globalFilter]=\"gb\" #dt>\n    <p-headerColumnGroup>\n        <p-row>\n            <p-column header=\"Identifier\" rowspan=\"2\"></p-column>\n            <p-column header=\"Residents\" rowspan=\"2\"></p-column>\n            <p-column header=\"Section Labels\" rowspan=\"2\"></p-column>\n            <p-column header=\"Meters\" colspan=\"4\"></p-column>\n        </p-row>\n        <p-row>\n            <p-column header=\"Electric\"></p-column>\n            <p-column header=\"Water\"></p-column>\n            <p-column header=\"Gas meter IDS\"></p-column>\n            <p-column header=\"\"></p-column>\n        </p-row>\n    </p-headerColumnGroup>\n\n    <p-column field=\"identifier\"></p-column>\n    <p-column field=\"residents\"></p-column>\n    <p-column field=\"sectionLabels\"></p-column>\n    <p-column field=\"electric\"></p-column>\n    <p-column field=\"water\"></p-column>\n    <p-column field=\"gasmeterIds\"></p-column>\n    <p-column styleClass=\"col-button\">\n        <ng-template pTemplate=\"header\">\n            <!-- <button type=\"button\" pButton icon=\"fa-refresh\"></button> -->\n        </ng-template>\n        <ng-template let-car=\"rowData\" pTemplate=\"body\">\n            <p-splitButton class=\"site-edit float-right\" icon=\"far fa-ellipsis-v\" [model]=\"edit\"></p-splitButton>\n        </ng-template>\n    </p-column>\n</p-dataTable>"

/***/ }),

/***/ "./src/app/sites/units/units.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sites_services_units_service__ = __webpack_require__("./src/app/sites/services/units.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitsComponent = (function () {
    function UnitsComponent(unitService) {
        this.unitService = unitService;
        this.display = false;
    }
    UnitsComponent.prototype.ngOnInit = function () {
        this.unitService.getUnits();
        // .subscribe(
        //   (data)=>{
        //     console.log(data);
        //     this.units = data.units;
        //   }
        // )
    };
    UnitsComponent.prototype.showDialog = function () {
        this.display = true;
    };
    UnitsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-units',
            template: __webpack_require__("./src/app/sites/units/units.component.html"),
            styles: [__webpack_require__("./src/app/sites/units/units.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sites_services_units_service__["a" /* UnitsService */]])
    ], UnitsComponent);
    return UnitsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    host: "http://172.16.18.148:3000/"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
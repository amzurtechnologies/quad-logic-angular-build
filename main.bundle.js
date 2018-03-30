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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function AppComponent(vcr, toastr, router) {
        this.vcr = vcr;
        this.toastr = toastr;
        this.router = router;
        this.title = 'app works!';
        this.toastr.setRootViewContainerRef(vcr);
        this.router.events.pairwise().subscribe(function (event) {
            // console.log(event);
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_src_toast_manager__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_growl__ = __webpack_require__("./node_modules/primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_primeng_growl__);
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
                __WEBPACK_IMPORTED_MODULE_25_primeng_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_26_primeng_growl__["GrowlModule"]
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

module.exports = "<!-- for dispaly success | error messsges -->\n<p-growl [(value)]=\"msgs\"></p-growl>\n\n<div class=\"login\">\n    <img src=\"assets/images/logo.png\" alt=\"logo\">\n    <form class=\"form-group ql-signup\" [formGroup]=\"signInForm\" (ngSubmit)=\"signIn(signInForm)\">\n        <span>\n            <p class=\"first\">Email</p>\n            <input class=\"login-input\" name=\"signinEmail\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" id=\"signinEmail\" type=\"email\"\n                size=\"30\" pInputText placeholder=\"Enter your Username or email id\" formControlName=\"signinEmail\" required=\"required\"\n                data-error=\"Email is required.\">\n            <span *ngIf=\" !signInForm.get('signinEmail').valid && signInForm.get('signinEmail').touched && signInForm.hasError('required', 'signinEmail')\" style=\"color:red\"> \n                    Email is required</span>\n            <span *ngIf=\" !signInForm.get('signinEmail').valid && signInForm.get('signinEmail').touched && signInForm.hasError('pattern', 'signinEmail')\" style=\"color:red\">Valid email is required</span>\n        </span>\n\n        <span>\n            <p class=\"first\">Password</p>\n            <input class=\"login-input\" name=\"signinPassword\" id=\"signinPassword\" type=\"password\" size=\"30\" pInputText placeholder=\"Enter your Password\"\n                formControlName=\"signinPassword\" required=\"required\" data-error=\"Password is required.\">\n            <span for=\"signinPassword\" style=\"color:red\" *ngIf=\"!signInForm.get('signinPassword').valid && signInForm.get('signinPassword').touched\">Password can't be blank</span>\n        </span>\n        \n        <h3 class=\"first login-submit\">\n            <button pButton type=\"submit\" class=\"ui-button-danger btn-orange\">Login</button>\n        </h3>\n        <a href=\"\" class=\"logn-forgot\">Forgot Password?</a>\n    </form>\n</div>"

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
        this.msgs = [];
        if (signInForm.valid) {
            var params = {
                email: signInForm.value.signinEmail,
                password: signInForm.value.signinPassword
            };
            this._preLoader.open();
            this._auth.signIn(params).subscribe(function (res) {
                if (res["success"]) {
                    _this.msgs.push({ severity: 'success', summary: 'Success', detail: "Successfully logged in." });
                    _this._preLoader.close();
                    _this._tokenService.storeTokens(res["authentication_token"], res["refresh_token"]);
                    _this._userService.setUser(res["user"]);
                    _this._router.navigate(['sites']);
                    // this._redirection.navigateToDefaultRoute(res["user"]["role"]);
                }
                else {
                    _this.msgs.push({ severity: 'error', summary: 'Error', detail: "Invalid credentails. Please try again" });
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
        return this._http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].host + 'login', params);
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
                    'authentication-token': localStorage.getItem("authentication_token"),
                    'refresh-token': localStorage.getItem("refresh_token")
                }
            };
        }
        var request = req.clone(headers);
        return next
            .handle(request)
            .map(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]) {
                // if (request.headers.keys()[0] == "refresh_token") {
                _this._tokenService.storeTokens(event.body["authentication_token"], event.body["refresh_token"]);
                // }
                return event;
            }
        })
            .catch(function (error) {
            // this._tokenService.close();
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
                    _preloader.close();
                    if (_user.getUser().hasOwnProperty("role")) {
                        return _redirect.relogin().flatMap(function (res) {
                            if (res) {
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

module.exports = "header {\n    width: 100%;\n    height: 100px;\n    border-bottom: solid 1px #d2d2d2;\n    position: fixed;\n    left: 0px;\n    right: 0px;\n    padding: 0px;\n    margin: 0px;\n    z-index: 999;\n    background: #fff;\n}\n\n.logo {\n    width: 180px;\n    float: left;\n    height: auto;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"quad-container\">\n        <div class=\"red-bar\"></div>\n        <div class=\"ql-mbar\">\n            <img class=\"logo\" src=\"../assets/images/logo.png\" alt=\"logo\">\n            <p-menubar [model]=\"items\">\n                <!-- <button pButton label=\"Logout\" class=\"ui-button-secondary\" *ngIf=\"!showButton\" (click) = \"logout()\">Logout</button> -->\n            </p-menubar>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_sites_services_user_service__ = __webpack_require__("./src/app/sites/services/user.service.ts");
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
    function HeaderComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.showButton = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // sekhar
        // menu items to be displayed in menu
        this.router.events.subscribe(function (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                if (e.url.split('/')[1] == 'auth') {
                    _this.items = [];
                    _this.showButton = true;
                }
                else {
                    _this.items = [
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
                        },
                        {
                            label: "Logout",
                            icon: "fa-sign-out",
                            command: function () {
                                _this.logout();
                            }
                        }
                    ];
                    _this.showButton = false;
                }
            }
        });
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (res) {
            localStorage.clear();
            _this.router.navigate(["/auth/login"]);
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2_app_sites_services_user_service__["a" /* UserService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/mid-body/mid-body.component.css":
/***/ (function(module, exports) {

module.exports = ".quadlogic-mid-body { width:100%; float:left; height:300px; margin-top: 101px;}"

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
        else {
            this.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]).navigate(['/auth/login/']);
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

module.exports = "<div style=\"width:100%; float:left; height:auto\">\n    <div class=\"ui-widget-header ql-search ql-ovv-users-search-cont\">\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search...\">\n        <p-fileUpload mode=\"basic\" class=\"upload-file\" name=\"file\" url=\"http://18.218.148.177/upload_records?name=meters&site={{site_id}}\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\n        <button type=\"button\" (click)=\"showDialog()\" pButton style=\"float:right;\"> Add Meter</button>\n    </div>\n\n    <p-dataTable class=\"overview-select\" [value]=\"meters\" scrollable=\"true\" reorderableColumns=\"true\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" [globalFilter]=\"gb\" #dt>\n        <p-column field=\"meter_no\" header=\"Meter ID\" [sortable]=\"true\"></p-column>\n        <p-column field=\"multiplier\" header=\"Multiplier\" [sortable]=\"true\"></p-column>\n        <p-column field=\"modifier\" header=\"Modifier\" [sortable]=\"true\"></p-column>\n        <p-column field=\"units\" header=\"Units\" [sortable]=\"true\"></p-column>\n        <p-column field=\"utility_type\" header=\"Utility Type\" [sortable]=\"true\"></p-column>\n        <p-column styleClass=\"col-button\">\n            <ng-template pTemplate=\"header\">\n            </ng-template>\n            <ng-template let-meter=\"rowData\" pTemplate=\"body\">\n                <p-splitButton class=\"site-edit float-right\" (click)=\"testAction(meter)\" icon=\"far fa-ellipsis-v\" [model]=\"actions\"></p-splitButton>\n            </ng-template>\n        </p-column>\n    </p-dataTable>\n</div>\n\n\n\n\n\n<p-dialog header=\"{{formType}} Meter\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\" [minY]=\"200\">\n    <form [formGroup]=\"meterForm\" (ngSubmit)=\"createMeter(meterForm)\">\n\n        <div class=\"ui-g ui-fluid\">\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Meter Number *</h3>\n                <input type=\"text\" pInputText placeholder=\"meter number\" formControlName=\"meter_no\" required>\n                <span *ngIf=\" !meterForm.get('meter_no').valid && meterForm.get('meter_no').touched && meterForm.hasError('required', 'meter_no')\" class=\"error-message\">\n                    meter number is required</span>\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Meter Type *</h3>\n                <p-dropdown [options]=\"utilityTypes\" [showClear]=\"true\" formControlName=\"meter_type\" placeholder=\"Select a meter type\"></p-dropdown>\n                <span *ngIf=\" !meterForm.get('meter_type').valid && meterForm.get('meter_type').touched && meterForm.hasError('required', 'meter_type')\" class=\"error-message\">\n                    meter type is required</span>\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Meter Installation Date *</h3>\n                <p-calendar dateFormat=\"mm-dd-yy\" formControlName=\"meter_installation_date\" required></p-calendar>\n                <span *ngIf=\" !meterForm.get('meter_installation_date').valid && meterForm.get('meter_installation_date').touched && meterForm.hasError('required', 'meter_installation_date')\" class=\"error-message\">\n                    meter installation date is required</span>\n\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Meter Out of Service Date *</h3>\n                <p-calendar dateFormat=\"mm-dd-yy\" formControlName=\"meter_out_of_service_date\" ></p-calendar>\n                <!-- <span *ngIf=\" !meterForm.get('meter_out_of_service_date').valid && meterForm.get('meter_out_of_service_date').touched && meterForm.hasError('required', 'meter_out_of_service_date')\" class=\"error-message\">\n                    meter out of service date is required</span> -->\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Mulitiplier *</h3>\n                <input type=\"number\" min=\"0\" pInputText placeholder=\"enter multiplier \" formControlName=\"multiplier\" required>\n                <span *ngIf=\" !meterForm.get('multiplier').valid && meterForm.get('multiplier').touched && meterForm.hasError('required', 'multiplier')\" class=\"error-message\">\n                    multiplier is required</span>\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Modifier *</h3>\n                <input type=\"number\" min=\"0\" pInputText placeholder=\"enter modifier \" formControlName=\"modifier\" required>\n                <span *ngIf=\" !meterForm.get('modifier').valid && meterForm.get('modifier').touched && meterForm.hasError('required', 'modifier')\" class=\"error-message\">\n                    modifier is required</span>\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Status </h3>\n                <p-inputSwitch onLabel=\"Active\" offLabel=\"Inactive\" formControlName=\"is_active\"></p-inputSwitch>\n            </span>\n\n        </div>\n        <p-footer>\n            <button type=\"submit\" pButton label=\"Yes\">Submit</button>\n            <button type=\"cancel\" pButton (click)=\"display=false\" label=\"No\">Cancel</button>\n        </p-footer>\n    </form>\n\n</p-dialog>\n<p-confirmDialog></p-confirmDialog>"

/***/ }),

/***/ "./src/app/sites/meter-page/meter-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sites_services_meter_page_service__ = __webpack_require__("./src/app/sites/services/meter-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_sites_services_sections_service__ = __webpack_require__("./src/app/sites/services/sections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_confirmationservice__ = __webpack_require__("./node_modules/primeng/components/common/confirmationservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_confirmationservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_common_confirmationservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function MeterPageComponent(meterPageService, _fb, sectionService, confirmationService, route) {
        this.meterPageService = meterPageService;
        this._fb = _fb;
        this.sectionService = sectionService;
        this.confirmationService = confirmationService;
        this.route = route;
        this.display = false;
        this.utilityTypes = [];
        this.actions = [];
        this.formType = 'Create;';
        this.msgs = [];
        this.meterForm = this._fb.group({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            meter_no: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            meter_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            meter_installation_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            meter_out_of_service_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            multiplier: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            modifier: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            is_active: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    }
    MeterPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.site_id = +params['id'];
            console.log(_this.site_id);
            _this.meterPageService.getMeters(_this.site_id)
                .subscribe(function (data) {
                _this.meters = data.meters;
            });
            _this.sectionService.getUtilityTypes()
                .subscribe(function (data) {
                _this.utilityTypes = data.utility_types;
            });
        });
    };
    MeterPageComponent.prototype.showDialog = function () {
        this.display = true;
        this.meterForm.reset();
        this.formType = "Create";
    };
    MeterPageComponent.prototype.editDialog = function (meterId) {
        var _this = this;
        this.meterPageService.getMeterDetails(meterId).subscribe(function (res) {
            if (res.success) {
                res.meter.meter_installation_date = new Date(res.meter.meter_installation_date);
                res.meter.meter_out_of_service_date = new Date(res.meter.meter_out_of_service_date);
                res.meter.meter_type = 1;
                res.meter.multiplier = 1;
                res.meter.modifier = 1;
                res.meter.is_active = true;
                _this.meterForm.setValue(res.meter);
                _this.display = true;
                _this.formType = "Edit";
            }
            else {
                console.log(res);
            }
        });
    };
    MeterPageComponent.prototype.deleteDialog = function (meterId) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Delete this site',
            icon: 'fa fa-question-circle',
            accept: function () {
                _this.meterPageService.deleteMeter(meterId).subscribe(function (res) {
                    var meters = _this.meters.slice();
                    var index = meters.indexOf(_this.editMeter);
                    meters.splice(index, 1);
                    _this.meters = meters;
                });
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    MeterPageComponent.prototype.createMeter = function (meterForm) {
        var _this = this;
        var meters = this.meters.slice();
        if (meterForm.valid) {
            this.meterPageService.createMeter(meterForm.value, this.site_id).subscribe(function (res) {
                _this.display = false;
                _this.meterForm.reset();
                if (_this.formType == "Edit") {
                    var index = meters.indexOf(_this.editMeter);
                    meters[index] = res.meter;
                }
                else {
                    meters.unshift(res.meter);
                }
                _this.meters = meters;
            });
        }
        else {
            this.setFormTouched(meterForm);
        }
    };
    // function for validate all form fields
    MeterPageComponent.prototype.setFormTouched = function (form_obj) {
        // this._toastr.error("please fill all * marked fields", 'Oops!', { showCloseButton: true });
        Object.keys(form_obj.controls).forEach(function (field) {
            var control = form_obj.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    };
    MeterPageComponent.prototype.testAction = function (rowData) {
        var _this = this;
        this.editMeter = rowData;
        this.actions = [
            { label: 'Edit', icon: 'far fa-pencil', command: function () {
                    _this.editDialog(rowData.id);
                } },
            { label: 'Delete', icon: 'far fa-trash', command: function () {
                    _this.deleteDialog(rowData.id);
                } },
        ];
    };
    MeterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-meter-page',
            template: __webpack_require__("./src/app/sites/meter-page/meter-page.component.html"),
            styles: [__webpack_require__("./src/app/sites/meter-page/meter-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sites_services_meter_page_service__["a" /* MeterPageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3_app_sites_services_sections_service__["a" /* SectionsService */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_confirmationservice__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"]])
    ], MeterPageComponent);
    return MeterPageComponent;
}());



/***/ }),

/***/ "./src/app/sites/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = ".ql-site-building {\n    width: 140px;\n    height: auto;\n    float: left;\n}\n\n.ql-ovv-site-titles {\n    float: left;\n    margin-left: 20px;\n}\n\n.ql-ovv-site-titles label {\n    font-size: 16px;\n    font-weight: bold;\n    margin-top: 20px;\n    float: left;\n    width: 100%;\n}\n\n.ql-ovv-site-titles p {\n    margin-top: 12px;\n    float: left;\n}\n\n.ql-ovv-site-cont {\n    background: #F7F7F7;\n    width: 100%;\n    height: auto;\n    float: left;\n}\n\n.ql-ovv-edit {\n    color: #d2d2d2;\n    font-size: 20px;\n    float: right;\n    margin: 10px 20px;\n    cursor: pointer\n}\n\n.ql-ovv-user-title {\n    font-size: 18px;\n    float: left;\n}\n\n.ql-ovv-users-search-cont {\n    width: 100%;\n    background: none;\n    border: none;\n    text-align: right;\n    padding: 1rem 0px !important;\n}"

/***/ }),

/***/ "./src/app/sites/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-nopad ql-ovv-site-cont\">\n    <img class=\"ql-site-building\" src=\"../assets/images/building.jpg\" alt=\"\">\n    <div class=\"ql-ovv-site-titles\">\n        <label>{{site.name}}</label>\n        <p><i class=\"fa fa-map-marker\"></i> {{site.address_line1}}{{site.address_line2}} <br>{{site.city}}, {{site.state}} {{site.zipcode}}</p>\n    </div>\n    <i class=\"fa fa-pencil ql-ovv-edit\"></i>\n</div>\n\n\n\n<div style=\"width:100%; float:left; height:auto\">\n    <div class=\"ui-widget-header ql-search ql-ovv-users-search-cont\">\n\n        <label class=\"ql-ovv-user-title\">All Users</label>\n        <!-- <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> -->\n\n        <!-- <p-dropdown [options]=\"cities1\" [group]=\"true\" class=\"float-left\" ></p-dropdown> -->\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search...\">\n        <p-fileUpload class=\"upload-file\" mode=\"basic\" name=\"file\" url=\"http://18.218.148.177/upload_records?name=users\" (onUpload)=\"onBasicUpload($event)\">Upload</p-fileUpload>\n        <button type=\"button\" (click)=\"showDialog()\" pButton>  Add User</button>\n    </div>\n\n\n\n    <p-dataTable class=\"overview-select\" [value]=\"users\" reorderableColumns=\"true\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[5,10,20]\" [globalFilter]=\"gb\" #dt>\n        <p-column field=\"user_name\" header=\"Users\" [sortable]=\"true\"></p-column>\n        <p-column field=\"email\" header=\"Email ID\" [sortable]=\"true\"></p-column>\n        <p-column field=\"role\" header=\"Role\" [sortable]=\"true\"></p-column>\n        <p-column styleClass=\"col-button\">\n            <ng-template pTemplate=\"header\">\n            </ng-template>\n            <ng-template let-user=\"rowData\" pTemplate=\"body\">\n                <p-splitButton class=\"site-edit float-right\" icon=\"far fa-ellipsis-v\" [model]=\"actions\" (click)=\"setActions(user)\"></p-splitButton>\n            </ng-template>\n        </p-column>\n    </p-dataTable>\n\n</div>\n\n<p-dialog class=\"modal-top\" header=\"{{formName}} User\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"700\" [minWidth]=\"400\" [minY]=\"400\">\n    <form [formGroup]=\"userCreateForm\" (ngSubmit)=\"createUser(userCreateForm)\">\n        <div class=\"ui-g ui-fluid \">\n            <div class=\"ui-g-6 form-group\">\n                <label>First Name</label>\n                <div class=\"ui-inputgroup\">\n                    <input name=\"firstName\" id=\"firstName\" type=\"text\" pInputText placeholder=\"First Name\" formControlName=\"firstName\" required=\"required\" data-error=\"First name is required.\">\n                    <span *ngIf=\" !userCreateForm.get('firstName').valid && userCreateForm.get('firstName').touched && userCreateForm.hasError('required', 'firstName')\" class=\"error-message\">\n                        First name is required\n                    </span>\n                </div>\n            </div>\n            <div class=\"ui-g-6 form-group\">\n                <label>Last Name</label>\n                <div class=\"ui-inputgroup\">\n                    <input name=\"lastName\" id=\"lastName\" type=\"text\" pInputText placeholder=\"Last Name\" formControlName=\"lastName\" required=\"required\" data-error=\"Last name is required.\">\n                    <span *ngIf=\" !userCreateForm.get('lastName').valid && userCreateForm.get('lastName').touched && userCreateForm.hasError('required', 'lastName')\" class=\"error-message\">\n                        Last name is required\n                    </span>\n                </div>\n            </div>\n            <div class=\"ui-g-6 form-group\">\n                <label>Email</label>\n                <div class=\"ui-inputgroup\">\n                    <input name=\"email\" id=\"email\" type=\"text\" pInputText placeholder=\"Email\" formControlName=\"email\" required=\"required\" data-error=\"email is required.\">\n                    <span *ngIf=\" !userCreateForm.get('email').valid && userCreateForm.get('email').touched && userCreateForm.hasError('required', 'email')\" class=\"error-message\">\n                        Email is required\n                    </span>\n                </div>\n            </div>\n            <div class=\"ui-g-6 form-group\">\n                <label>Select Role</label>\n                <!-- <p-dropdown [options]=\"roles\" id=\"role\" placeholder=\"Select a Role\"></p-dropdown> -->\n                <p-dropdown [options]=\"roles\" placeholder=\"Select a Role\" optionLabel=\"role\" [showClear]=\"true\" formControlName=\"role\"></p-dropdown>\n            </div>\n        </div>\n        <p-footer>\n            <button type=\"submit\" pButton label=\"Yes\">Submit</button>\n            <button type=\"cancel\" pButton (click)=\"display=false\" label=\"No\">Cancel</button>\n        </p-footer>\n    </form>\n</p-dialog>\n<p-confirmDialog></p-confirmDialog>"

/***/ }),

/***/ "./src/app/sites/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/sites/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_api__);
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
    function OverviewComponent(userService, route, _fb, confirmationService) {
        this.userService = userService;
        this.route = route;
        this._fb = _fb;
        this.confirmationService = confirmationService;
        this.display = false;
        this.formName = "Create";
        this.userCreateForm = this._fb.group({
            id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            firstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            role: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.site_id = +params['id'];
            _this.userService.getUsersAndRoles(_this.site_id)
                .subscribe(function (data) {
                _this.users = data.users;
                _this.roles = data.roles;
            });
        });
    };
    OverviewComponent.prototype.createUser = function (userCreateForm) {
        var _this = this;
        if (userCreateForm.valid) {
            this.userService.createUser(Object.assign(userCreateForm.value, { site_id: this.site_id })).subscribe(function (res) {
                _this.users = res.users;
                _this.display = false;
                _this.userCreateForm.reset();
            });
        }
    };
    OverviewComponent.prototype.showDialog = function () {
        this.display = true;
    };
    // sekhar
    //  method to trigger a dailog with edit form
    OverviewComponent.prototype.edit = function (user_id) {
        var _this = this;
        console.log(user_id);
        this.userService.getUserDetails(user_id).subscribe(function (res) {
            _this.userCreateForm.setValue({ id: res.id, firstName: res.firstName, lastName: res.lastName,
                email: res.email, role: res.role });
            _this.display = true;
            _this.formName = "Edit";
        });
    };
    OverviewComponent.prototype.delete = function (user_id) {
        var _this = this;
        console.log(user_id);
        console.log(this.site_id);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Delete this site',
            icon: 'fa fa-question-circle',
            accept: function () {
                _this.userService.deleteUser(user_id, _this.site_id).subscribe(function (res) {
                    _this.users = res.users;
                });
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    OverviewComponent.prototype.setActions = function (rowData) {
        var _this = this;
        console.log(rowData);
        this.actions = [
            { label: 'Edit', icon: 'far fa-pencil', command: function () {
                    _this.edit(rowData.id);
                } },
            { label: 'Delete', icon: 'far fa-trash', command: function () {
                    _this.delete(rowData.id);
                } },
        ];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5_primeng_api__["ConfirmationService"]])
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

module.exports = "<!-- for dispaly success | error messsges -->\n<p-growl [(value)]=\"msgs\"></p-growl>\n<!-- To display confirm dialouge box -->\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n\n<p-dialog header=\"{{formType}} Section\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\" [minY]=\"200\" [minHeight]=\"800\">\n    <form [formGroup]=\"sectionForm\" (ngSubmit)=\"createSection(sectionForm)\">\n        <div class=\"ui-g ui-fluid\">\n\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Section Name *</h3>\n\t\t\t\t<input class=\"login-input\" name=\"sectionname\" id=\"sectionName\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter section name\"\n\t\t\t\t formControlName=\"section_name\" required=\"required\" data-error=\"section name is required.\">\n\t\t\t\t<span *ngIf=\" !sectionForm.get('section_name').valid && sectionForm.get('section_name').touched && sectionForm.hasError('required', 'section_name')\" class=\"error-message\">\n\t\t\t\t\tsection name is required</span>\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Description *</h3>\n                <input class=\"login-input\" name=\"section_type\" id=\"section_type\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter section label\"\n\t\t\t\t formControlName=\"section_type\" required=\"required\" data-error=\"section label is required.\">\n\t\t\t\t<span *ngIf=\" !sectionForm.get('section_type').valid && sectionForm.get('section_type').touched && sectionForm.hasError('required', 'section_type')\" class=\"error-message\">\n\t\t\t\t\tsection label is required</span>\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Utility Type *</h3>\n\t\t\t\t<p-dropdown [options]=\"utilityTypes\" placeholder=\"Select a UtilityType\" [showClear]=\"true\" formControlName=\"utility_type_id\"></p-dropdown>\n\t\t\t\t<!-- <p-dropdown [options]=\"utilityTypes\" formControlName=\"utility_type\" placeholder=\"Select a utility type\" optionLabel=\"utility type\" [showClear]=\"true\" required></p-dropdown> -->\n\t\t\t\t<span *ngIf=\" !sectionForm.get('utility_type_id').valid && sectionForm.get('utility_type_id').touched && sectionForm.hasError('required', 'utility_type_id')\" class=\"error-message\">\n\t\t\t\t\tutility type is required</span>\n            </span>\n\n        </div>\n        <p-footer>\n            <button type=\"submit\" pButton label=\"Yes\">Submit</button>\n            <button type=\"cancel\" pButton (click)=\"display=false\" label=\"No\">Cancel</button>\n        </p-footer>\n    </form>\n</p-dialog>\n\n<div class=\"ui-widget-header ql-search\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search...\">\n\n\n    <!-- <button pButton type=\"button\" label=\"Click\" ></button> -->\n    <div style=\"float:right;\">\n        <p-fileUpload mode=\"basic\" class=\"upload-file\" name=\"demo[]\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\">Upload CSV</p-fileUpload>\n        <button type=\"button\" (click)=\"showDialog()\" pButton label=\"Add Section\">Add Section</button>\n    </div>\n</div>\n\n<p-dataTable class=\"overview-select\" [value]=\"sections\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" [globalFilter]=\"gb\" #dt>\n    <p-column field=\"section_name\" header=\"Section Name\" [sortable]=\"true\"></p-column>\n    <p-column field=\"section_type\" header=\"Description\" [sortable]=\"true\"></p-column>\n    <p-column field=\"utility_type\" header=\"Utility Type\" [sortable]=\"true\"></p-column>\n    <!-- <p-column field=\"rate_structure\" header=\"Rate Structure\" [sortable]=\"true\"></p-column> -->\n    <!-- <p-column field=\"units_assigned\" header=\"Units Assigned\" [sortable]=\"true\"></p-column> -->\n    <p-column styleClass=\"col-button\">\n        <ng-template pTemplate=\"header\">\n            <!-- <button type=\"button\" pButton icon=\"fa-refresh\"></button> -->\n        </ng-template>\n\n        <ng-template let-section=\"rowData\" pTemplate=\"body\">\n            <p-splitButton class=\"site-edit float-right\" icon=\"far fa-ellipsis-v\" [model]=\"actions\" (click)=\"testAction(section)\"></p-splitButton>\n        </ng-template>\n\n    </p-column>\n</p-dataTable>"

/***/ }),

/***/ "./src/app/sites/sections/sections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sites_services_sections_service__ = __webpack_require__("./src/app/sites/services/sections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_api__);
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
    function SectionsComponent(sectionService, _fb, route, confirmationService) {
        var _this = this;
        this.sectionService = sectionService;
        this._fb = _fb;
        this.route = route;
        this.confirmationService = confirmationService;
        this.display = false;
        this.utilityTypes = [];
        this.sectionForm = this._fb.group({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            section_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            utility_type_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            section_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            utility_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.route.params.subscribe(function (params) {
            _this.siteId = params['id'];
        });
    }
    SectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.site_id = +params['id'];
            console.log(_this.site_id);
            _this.sectionService.getSections(_this.site_id)
                .subscribe(function (data) {
                _this.sections = data.sections;
            });
            _this.sectionService.getUtilityTypes()
                .subscribe(function (data) {
                _this.utilityTypes = data.utility_types;
            });
        });
    };
    SectionsComponent.prototype.showDialog = function () {
        this.display = true;
        this.sectionForm.reset();
        this.formType = "Create";
    };
    // create or update the section
    SectionsComponent.prototype.createSection = function (sectionForm) {
        var _this = this;
        this.msgs = [];
        var sections = this.sections.slice();
        if (sectionForm.valid) {
            this.sectionService.createSection(Object.assign(sectionForm.value, { site_id: this.siteId })).subscribe(function (res) {
                if (res.success) {
                    _this.msgs.push({ severity: 'success', summary: 'Success', detail: res.message });
                }
                else {
                    _this.msgs.push({ severity: 'success', summary: 'Error', detail: res.message });
                }
                if (sectionForm.value.id) {
                    var index = sections.indexOf(_this.beforeEditSection);
                    console.log(index);
                    sections[index] = res.section;
                }
                else {
                    sections.unshift(res.section);
                }
                _this.sections = sections;
                _this.display = false;
            });
        }
        else {
            this.setFormTouched(sectionForm);
        }
    };
    SectionsComponent.prototype.editDialog = function (section) {
        console.log(section);
        if (section.label) {
            delete section.label;
        }
        this.beforeEditSection = section;
        this.display = true;
        this.sectionForm.setValue(section);
        this.formType = "Edit";
    };
    // function for validate all form fields
    SectionsComponent.prototype.setFormTouched = function (form_obj) {
        // this._toastr.error("please fill all * marked fields", 'Oops!', { showCloseButton: true });
        Object.keys(form_obj.controls).forEach(function (field) {
            var control = form_obj.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    };
    SectionsComponent.prototype.testAction = function (rowData) {
        var _this = this;
        this.actions = [
            { label: 'Edit', icon: 'far fa-pencil', command: function () {
                    _this.editDialog(rowData);
                } },
            { label: 'Delete', icon: 'far fa-trash', command: function () {
                    _this.deleteDialog(rowData);
                } },
        ];
    };
    SectionsComponent.prototype.deleteDialog = function (section) {
        var _this = this;
        this.msgs = [];
        // this.confirmationService.confirm({
        //   message: 'Are you sure that you want to proceed?',
        //   header: 'Delete this section',
        //   icon: 'fa fa-question-circle',
        //   accept: () => {
        var sections = this.sections.slice();
        this.beforeEditSection = section;
        this.sectionService.deleteSection(section.id).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.msgs.push({ severity: 'success', summary: 'Success', detail: "Section deleted Successfully" });
            }
            else {
                _this.msgs.push({ severity: 'success', summary: 'Error', detail: "Something went wrong while deleting the section" });
            }
            var index = sections.indexOf(_this.beforeEditSection);
            sections.splice(index, 1);
            _this.sections = sections;
            //     })
            //   },
            //   reject: () => {
            //       this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            //   }
        });
    };
    SectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-sections',
            template: __webpack_require__("./src/app/sites/sections/sections.component.html"),
            styles: [__webpack_require__("./src/app/sites/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__sites_services_sections_service__["a" /* SectionsService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5_primeng_api__["ConfirmationService"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/sites/services/meter-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterPageService; });
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



var MeterPageService = (function () {
    function MeterPageService(httpClient) {
        this.httpClient = httpClient;
    }
    MeterPageService.prototype.getMeters = function (site_id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "meters?site_id=" + site_id);
    };
    MeterPageService.prototype.createMeter = function (reqBody, site_id) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "meters?site_id=" + site_id, reqBody);
    };
    MeterPageService.prototype.getMeterDetails = function (reqBody) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "meters/details/" + reqBody);
    };
    MeterPageService.prototype.deleteMeter = function (reqBody) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "meters/" + reqBody);
    };
    MeterPageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MeterPageService);
    return MeterPageService;
}());



/***/ }),

/***/ "./src/app/sites/services/sections.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsService; });
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



var SectionsService = (function () {
    function SectionsService(httpClient) {
        this.httpClient = httpClient;
    }
    SectionsService.prototype.getSections = function (site_id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "sections?site_id=" + site_id);
    };
    SectionsService.prototype.getUtilityTypes = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "utility_types");
    };
    SectionsService.prototype.createSection = function (reqBody) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "sections", reqBody);
    };
    SectionsService.prototype.deleteSection = function (reqBody) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "sections/" + reqBody);
    };
    SectionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SectionsService);
    return SectionsService;
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
    SitesServiceService.prototype.updateSite = function (reqBody) {
        return this.httpClient.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "sites/" + reqBody.id, reqBody);
    };
    SitesServiceService.prototype.deleteSite = function (siteId) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "sites/" + siteId);
    };
    SitesServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SitesServiceService);
    return SitesServiceService;
}());



/***/ }),

/***/ "./src/app/sites/services/tenants.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantsService; });
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



var TenantsService = (function () {
    function TenantsService(httpClient) {
        this.httpClient = httpClient;
    }
    // sahu
    TenantsService.prototype.getTenants = function (site_id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "tenants/" + site_id);
    };
    // To get the tenant details
    TenantsService.prototype.getTenantDetails = function (id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "get_site_details", { params: { id: id } });
    };
    TenantsService.prototype.createTenant = function (reqBody, site_id) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "create_tenant", { params: reqBody, site_id: site_id });
    };
    TenantsService.prototype.updateTenant = function (reqBody, site_id, id) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "create_tenant", { params: reqBody, site_id: site_id, id: id });
    };
    TenantsService.prototype.deleteTenant = function (tenantId, site_id) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "tenants/" + tenantId, { params: { site_id: site_id } });
    };
    TenantsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TenantsService);
    return TenantsService;
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
    UnitsService.prototype.getUnits = function (site_id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "units", { params: { site_id: site_id } });
    };
    UnitsService.prototype.getMeters = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "unassigned_meters");
    };
    UnitsService.prototype.getSections = function (siteId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "assignable_sections?site_id=" + siteId);
    };
    UnitsService.prototype.createUnit = function (reqBody) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "/units", reqBody);
    };
    UnitsService.prototype.getUnitDetails = function (reqBody) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "units/details/" + reqBody);
    };
    UnitsService.prototype.deleteUnit = function (reqBody) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].host + "units/" + reqBody);
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
    // sekhar
    //  service to make a post request to create user
    UserService.prototype.createUser = function (reqBody) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host + "create_user", reqBody);
    };
    // sekhar
    // service to get user details based on id passed to it
    UserService.prototype.getUserDetails = function (userId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host + "get_user_details", { params: { id: userId } });
    };
    // sekhar
    // service method to delete user record
    UserService.prototype.deleteUser = function (userId, siteId) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host + "delete_user", { params: { id: userId, site_id: siteId } });
    };
    UserService.prototype.logout = function () {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host + "logout", {});
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

module.exports = "<p-breadcrumb class=\"float-right categories\" [model]=\"items\" [home]=\"home\"></p-breadcrumb>\n<div class=\"clear\"></div>\n<h5 class=\"page-heading\">{{site.name}}</h5>\n<div class=\"ui-g-nopad tabs-view\">\n    <p-tabView (onChange)=\"onTabChange($event)\">\n        <p-tabPanel header=\"Overview\" leftIcon=\"fa-book\">\n            <quadlogic-overview [site]=site></quadlogic-overview>\n        </p-tabPanel>\n        <p-tabPanel header=\"Sections\" leftIcon=\"fa-building\">\n            <quadlogic-sections></quadlogic-sections>\n        </p-tabPanel>\n        <p-tabPanel header=\"Units\" leftIcon=\"fa-home\">\n            <quadlogic-units [site]=site></quadlogic-units>\n        </p-tabPanel>\n        <p-tabPanel header=\"Meters\" leftIcon=\"fa-dashboard\">\n            <quadlogic-meter-page></quadlogic-meter-page>\n        </p-tabPanel>\n        <p-tabPanel header=\"Tenants\" leftIcon=\"fa-users\">\n            <quadlogic-tenants [site]=site></quadlogic-tenants>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

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
        this.breadCrumbValues = ["Overview", "Sections", "Units", "Meters", "Tenants"];
    }
    SiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number      
        });
        this.siteService.getSiteDetails(this.id)
            .subscribe(function (data) {
            _this.site = data.site;
            console.log(_this.site.name);
            _this.getTabValue('Overview');
            // localStorage.setItem('site_id',this.site.id);
        });
    };
    SiteComponent.prototype.onTabChange = function (event) {
        this.getTabValue(this.breadCrumbValues[event.index]);
    };
    SiteComponent.prototype.getTabValue = function (tabValue) {
        console.log(tabValue);
        this.items = [
            { label: this.site.name },
            { label: tabValue }
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

module.exports = "<div class=\"siteTable\">\n    <p-table [value]=\"sites\">\n        <ng-template pTemplate=\"caption\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-6 ui-lg-5 search-input\">\n                    <h5 class=\"page-heading\">All sites</h5>\n                </div>\n                <div class=\"ui-g-12 ui-md-6 ui-lg-7 padding-zero text-right site-buttons\">\n                    <!-- <button pButton type=\"button\" icon=\"fas fa-upload\" label=\"Import CSV\" class=\"ui-button-secondary\">Import CSV</button> -->\n                    <p-fileUpload mode=\"basic\" label=\"Import CSV\" class=\"ui-button-secondary upload-file\" name=\"file\" url=\"http://18.222.105.182/upload_records?name=sites\" (onUpload)=\"onBasicUpload($event)\"> Import CSV </p-fileUpload>\n                    <button pButton type=\"button\" icon=\"fal fa-plus\" label=\"Add Site\" (click)=\"showDialog()\" class=\"ui-button-secondary\">Add Site</button>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th width=\"28%\">Site</th>\n                <th width=\"12%\">City</th>\n                <th width=\"12%\">State</th>\n                <th width=\"12%\">Units</th>\n                <th width=\"12%\">Managers</th>\n                <th width=\"12%\">Tenants</th>\n                <th width=\"12%\">Actions</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-site>\n            <tr>\n                <td width=\"26%\">\n                    <b>\n\t\t\t\t\t\t<a href=\"\" [routerLink]=\"['/sites/', site.id]\" style=\"text-decoration:black;color:black\">{{site.name}}</a>\n\t\t\t\t\t</b></td>\n                <td width=\"12%\">{{site.city}}</td>\n                <td width=\"12%\">{{site.state}}</td>\n                <td width=\"12%\">{{site.units}}</td>\n                <td width=\"12%\">{{site.managers}}</td>\n                <td width=\"12%\">{{site.tenants}}</td>\n                <td width=\"12%\" class=\"split-button\">\n                    <p-splitButton class=\"site-edit float-right\" (click)=\"testAction(site)\" icon=\"far fa-ellipsis-v\" [model]=\"actions\"></p-splitButton>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<p-dialog class=\"modal-top\" header=\"{{formType}} Site\" [(visible)]=\"display\" [modal]=\"true\" modal=\"modal\" [responsive]=\"true\" [width]=\"700\" [minWidth]=\"700\" [minY]=\"700\">\n    <form [formGroup]=\"siteCreateForm\" (ngSubmit)=\"createSite(siteCreateForm)\">\n        <div class=\"ui-g\">\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Site Name *</h3>\n\t\t\t\t<input class=\"login-input\" name=\"sitename\" id=\"siteName\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site name\" formControlName=\"name\"\n\t\t\t\t required=\"required\" data-error=\"sitename is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('name').valid && siteCreateForm.get('name').touched && siteCreateForm.hasError('required', 'name')\" class=\"error-message\">\n\t\t\t\t\tsite name is required</span>\n            </span>\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Address 1 *</h3>\n\t\t\t\t<input class=\"login-input\" name=\"siteaddress\" id=\"address1\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site address\"\n\t\t\t\t formControlName=\"address_line1\" required=\"required\" data-error=\"site address is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('address_line1').valid && siteCreateForm.get('address_line1').touched && siteCreateForm.hasError('required', 'address_line1')\" class=\"error-message\">\n\t\t\t\t\tsite address is required</span>\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Address 2 </h3>\n\t\t\t\t<input id=\"siteaddress1\" class=\"login-input\" name=\"siteaddress2\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site another address\"\n\t\t\t\t formControlName=\"address_line2\"  data-error=\"site another address is required.\">\n\t\t\t\t<!-- <span *ngIf=\" !siteCreateForm.get('address_line2').valid && siteCreateForm.get('address_line2').touched && siteCreateForm.hasError('required', 'address2')\" class=\"error-message\">\n\t\t\t\t\tsite address is required</span> -->\n            </span>\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">City *</h3>\n\t\t\t\t<input id=\"city\" class=\"login-input\" name=\"city\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter your City\" formControlName=\"city\"\n\t\t\t\t required=\"required\" data-error=\"site city is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('city').valid && siteCreateForm.get('city').touched && siteCreateForm.hasError('required', 'city')\" class=\"error-message\">\n\t\t\t\t\tsite city is required</span>\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">State *</h3>\n\t\t\t\t<input id=\"state\" class=\"login-input\" name=\"state\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site state\" formControlName=\"state\"\n\t\t\t\t required=\"required\" data-error=\"state is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('state').valid && siteCreateForm.get('state').touched && siteCreateForm.hasError('required', 'state')\" class=\"error-message\">\n\t\t\t\t\tsite state is required</span>\n            </span>\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Country *</h3>\n\t\t\t\t<input id=\"country\" class=\"login-input\" name=\"country\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter your Country\"\n\t\t\t\t formControlName=\"country\" required=\"required\" data-error=\"site country is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('country').valid && siteCreateForm.get('country').touched && siteCreateForm.hasError('required', 'country')\" class=\"error-message\">\n\t\t\t\t\tsite country is required</span>\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Zipcode *</h3>\n\t\t\t\t<input id=\"zipcode\" class=\"login-input\" name=\"zipcode\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter site zipcode\"\n\t\t\t\t formControlName=\"zipcode\" required=\"required\" data-error=\"state zipcode is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('zipcode').valid && siteCreateForm.get('zipcode').touched && siteCreateForm.hasError('required', 'zipcode')\" class=\"error-message\">\n\t\t\t\t\tsite zipcode is required</span>\n            </span>\n            <span class=\"form-group ui-g-6\">\n\t\t\t\t<h3 class=\"login-label\">Zipcode + 4 *</h3>\n\t\t\t\t<input id=\"shortzipcode\" class=\"login-input\" name=\"short_zipcode\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter your shortzipcode\"\n\t\t\t\t formControlName=\"short_zipcode\" required=\"required\" data-error=\"site shortzipcode is required.\">\n\t\t\t\t<span *ngIf=\" !siteCreateForm.get('short_zipcode').valid && siteCreateForm.get('short_zipcode').touched && siteCreateForm.hasError('required', 'short_zipcode')\" class=\"error-message\">\n\t\t\t\t\tsite short zipcode is required</span>\n            </span>\n        </div>\n        <p-footer class=\"\">\n            <button type=\"submit\" pButton class=\"ui-button btn-orange\" label=\"Save changes\" *ngIf=\"siteId == 0\">Create</button>\n            <button type=\"submit\" pButton class=\"ui-button btn-orange\" label=\"Save changes\" *ngIf=\"siteId != 0\">Update</button>\n            <button type=\"button\" pButton class=\"ui-button-secondary\" (click)=\"display=false\" label=\"close\">Close</button>\n        </p-footer>\n    </form>\n</p-dialog>\n\n<p-confirmDialog></p-confirmDialog>\n<!-- <p-fileUpload mode=\"basic\" name=\"file\" url=\"http://172.16.18.93:3000/upload_records?name=sites\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload> -->"

/***/ }),

/***/ "./src/app/sites/sites-list/sites-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sites_services_sites_service_service__ = __webpack_require__("./src/app/sites/services/sites-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_api__);
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
    function SitesListComponent(siteService, _fb, confirmationService) {
        this.siteService = siteService;
        this._fb = _fb;
        this.confirmationService = confirmationService;
        this.actions = [];
        this.siteId = 0;
        this.display = false;
        this.formType = "Add";
        this.siteCreateForm = this._fb.group({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            address_line1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            address_line2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            state: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            zipcode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            short_zipcode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
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
            if (this.siteId == 0) {
                this.siteService.createSite(siteCreateForm.value).subscribe(function (res) {
                    console.log(res);
                    _this.sites.unshift(res.site);
                    _this.display = false;
                    _this.siteCreateForm.reset();
                });
            }
            else {
                this.siteService.updateSite(siteCreateForm.value).subscribe(function (res) {
                    _this.display = false;
                    _this.siteCreateForm.reset();
                    for (var i = 0; i < _this.sites.length; i++) {
                        if (_this.sites[i].id == res.site.id) {
                            _this.sites[i] = res.site;
                        }
                    }
                });
            }
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
        this.siteCreateForm.reset();
        this.display = true;
        this.siteId = 0;
        this.formType = "Create";
    };
    SitesListComponent.prototype.editSiteDialog = function (site) {
        console.log(site);
        this.siteId = site.id;
        this.siteCreateForm.setValue(site);
        this.display = true;
        this.formType = "Edit";
    };
    SitesListComponent.prototype.deleteDialog = function (siteId) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Delete this site',
            icon: 'fa fa-question-circle',
            accept: function () {
                _this.siteService.deleteSite(siteId).subscribe(function (res) {
                    for (var i = 0; i < _this.sites.length; i++) {
                        if (_this.sites[i].id == siteId) {
                            _this.sites.splice(i, 1);
                            break;
                        }
                    }
                });
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    SitesListComponent.prototype.testAction = function (rowData) {
        var _this = this;
        this.actions = [
            { label: 'Edit', icon: 'far fa-pencil', command: function () {
                    _this.editSiteDialog(rowData);
                } },
            { label: 'Delete', icon: 'far fa-trash', command: function () {
                    _this.deleteDialog(rowData);
                } },
        ];
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
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4_primeng_api__["ConfirmationService"]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_calendar__ = __webpack_require__("./node_modules/primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_inputswitch__ = __webpack_require__("./node_modules/primeng/inputswitch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_inputswitch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_inputswitch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sites_list_sites_list_component__ = __webpack_require__("./src/app/sites/sites-list/sites-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_sites_service_service__ = __webpack_require__("./src/app/sites/services/sites-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_units_service__ = __webpack_require__("./src/app/sites/services/units.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_sections_service__ = __webpack_require__("./src/app/sites/services/sections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_tenants_service__ = __webpack_require__("./src/app/sites/services/tenants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_meter_page_service__ = __webpack_require__("./src/app/sites/services/meter-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__site_site_component__ = __webpack_require__("./src/app/sites/site/site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sections_sections_component__ = __webpack_require__("./src/app/sites/sections/sections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__overview_overview_component__ = __webpack_require__("./src/app/sites/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__meter_page_meter_page_component__ = __webpack_require__("./src/app/sites/meter-page/meter-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__units_units_component__ = __webpack_require__("./src/app/sites/units/units.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tenants_tenants_component__ = __webpack_require__("./src/app/sites/tenants/tenants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_service__ = __webpack_require__("./src/app/sites/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_growl__ = __webpack_require__("./node_modules/primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_primeng_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_confirmdialog__ = __webpack_require__("./node_modules/primeng/confirmdialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_confirmdialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_primeng_confirmdialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_primeng_api__);
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
                __WEBPACK_IMPORTED_MODULE_25__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_25__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_27_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_29_primeng_confirmdialog__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_28_primeng_growl__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_inputswitch__["InputSwitchModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_13__sites_list_sites_list_component__["a" /* SitesListComponent */], __WEBPACK_IMPORTED_MODULE_19__site_site_component__["a" /* SiteComponent */], __WEBPACK_IMPORTED_MODULE_20__sections_sections_component__["a" /* SectionsComponent */], __WEBPACK_IMPORTED_MODULE_21__overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_22__meter_page_meter_page_component__["a" /* MeterPageComponent */], __WEBPACK_IMPORTED_MODULE_23__units_units_component__["a" /* UnitsComponent */], __WEBPACK_IMPORTED_MODULE_24__tenants_tenants_component__["a" /* TenantsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_sites_service_service__["a" /* SitesServiceService */], __WEBPACK_IMPORTED_MODULE_15__services_units_service__["a" /* UnitsService */], __WEBPACK_IMPORTED_MODULE_18__services_meter_page_service__["a" /* MeterPageService */], __WEBPACK_IMPORTED_MODULE_16__services_sections_service__["a" /* SectionsService */], __WEBPACK_IMPORTED_MODULE_17__services_tenants_service__["a" /* TenantsService */], __WEBPACK_IMPORTED_MODULE_30_primeng_api__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_26__services_user_service__["a" /* UserService */]]
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

module.exports = "<!-- for dispaly success | error messsges -->\n<p-growl [(value)]=\"msgs\"></p-growl>\n<!-- To display confirm dialouge box -->\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n\n<div style=\"width:100%; float:left; height:auto\">\n    <div class=\"ui-widget-header ql-search ql-ovv-users-search-cont\">\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search...\">\n        <p-fileUpload mode=\"basic\" class=\"upload-file\" name=\"file\" url=\"http://18.218.148.177/upload_records?name=tenants&site={{site_id}}\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\n        <button type=\"button\" (click)=\"showDialog()\" pButton style=\"float:right;\">  Add Tenant</button>\n    </div>\n\n    <p-dataTable class=\"overview-select auto-table\" [value]=\"tenants\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" [globalFilter]=\"gb\" #dt>\n        <p-column field=\"name\" header=\"Tenants Name\" [sortable]=\"true\"></p-column>\n        <p-column field=\"email\" header=\"Email ID\" [sortable]=\"true\"></p-column>\n        <p-column field=\"unit\" header=\"Units\" [sortable]=\"true\"></p-column>\n        <p-column field=\"tenant_type\" header=\"Type\" [sortable]=\"true\"></p-column>\n        <p-column field=\"moveindate\" header=\"Move in date\" [sortable]=\"true\"></p-column>\n        <p-column field=\"billingdate\" header=\"Billing date\" [sortable]=\"true\"></p-column>\n        <p-column styleClass=\"col-button\">\n            <ng-template pTemplate=\"header\">\n                <!-- <button type=\"button\" pButton icon=\"fa-refresh\"></button> -->\n            </ng-template>\n            <ng-template let-tenant=\"rowData\" pTemplate=\"body\">\n                <p-splitButton class=\"site-edit float-right\" icon=\"far fa-ellipsis-v\" [model]=\"actions\" (click)=\"editTenant(tenant)\"></p-splitButton>\n            </ng-template>\n        </p-column>\n    </p-dataTable>\n\n</div>\n\n<p-dialog class=\"modal-top\" header=\"Add Tenant\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"700\" [minWidth]=\"700\" [minY]=\"700\">\n    <form [formGroup]=\"tenantCreateForm\" (ngSubmit)=\"createTenant(tenantCreateForm)\">\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">First Name *</h3>\n                <input class=\"login-input\" name=\"first_name\" id=\"first_name\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter first name\" formControlName=\"first_name\"\n                required=\"required\" data-error=\"first name is required.\">\n                <span *ngIf=\" !tenantCreateForm.get('first_name').valid && tenantCreateForm.get('first_name').touched && tenantCreateForm.hasError('required', 'first_name')\">\n                    First name is required</span>\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Last Name *</h3>\n                <input class=\"login-input\" name=\"last_name\" id=\"last_name\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter last name\" formControlName=\"last_name\"\n                 required=\"required\" data-error=\"last name is required.\">\n                <span *ngIf=\" !tenantCreateForm.get('last_name').valid && tenantCreateForm.get('last_name').touched && tenantCreateForm.hasError('required', 'last_name')\">\n                    Last name is required</span>\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Email *</h3>\n                <input id=\"email\" class=\"login-input\" name=\"email\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter your Email\" formControlName=\"email\"\n                required=\"required\" data-error=\"tenant email is required.\">\n                <span *ngIf=\" !tenantCreateForm.get('email').valid && tenantCreateForm.get('email').touched && tenantCreateForm.hasError('required', 'email')\">\n                    Tenant email is required</span>\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Status *</h3>\n                <div class=\"login-input\">\n                    <p-dropdown [options]=\"status_truthy\" formControlName=\"status\" placeholder=\"Status\" optionLabel=\"label\" [showClear]=\"true\"></p-dropdown>\n                    <span *ngIf=\" !tenantCreateForm.get('status').valid && tenantCreateForm.get('status').touched && tenantCreateForm.hasError('required', 'status')\">\n                        Tenant status is required</span>\n        </div>\n        </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Select a unit *</h3>\n                <div class=\"login-input\">\n                    <p-dropdown [options]=\"units\" formControlName=\"unit_id\" placeholder=\"Select a unit\" optionLabel=\"apartment_number\" [showClear]=\"true\"></p-dropdown>\n                    <span *ngIf=\" !tenantCreateForm.get('unit_id').valid && tenantCreateForm.get('unit_id').touched && tenantCreateForm.hasError('required', 'unit_id')\">\n                        Tenant unit is required\n                    </span>\n        </div>\n        </span>\n        <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Tenant type *</h3>\n                <input class=\"login-input\" name=\"tenant_type\" id=\"tenant_type\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter tenant type\" formControlName=\"tenant_type\"\n                required=\"required\" data-error=\"tenant type is required.\">\n                <span *ngIf=\" !tenantCreateForm.get('tenant_type').valid && tenantCreateForm.get('tenant_type').touched && tenantCreateForm.hasError('required', 'tenant_type')\">\n                    Tenant type is required</span>\n        </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Move in date *</h3>\n                <p-calendar class=\"login-input\" formControlName=\"move_in_date\"></p-calendar>\n                <span *ngIf=\" !tenantCreateForm.get('move_in_date').valid && tenantCreateForm.get('move_in_date').touched && tenantCreateForm.hasError('required', 'move_in_date')\">\n                    Move in date is required</span>\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Move out date </h3>\n                <p-calendar class=\"login-input\" formControlName=\"move_out_date\"></p-calendar>\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Adult occupants count *</h3>\n                <input id=\"adult_occupants_count\" class=\"login-input\" name=\"adult_occupants_count\" type=\"number\" value=\"0\" size=\"30\" placeholder=\"Enter your Adult occupants count\" formControlName=\"adult_occupants_count\"\n                required=\"required\" data-error=\"tenant adult occupants count is required.\">\n                <span *ngIf=\" !tenantCreateForm.get('adult_occupants_count').valid && tenantCreateForm.get('adult_occupants_count').touched && tenantCreateForm.hasError('required', 'adult_occupants_count')\">\n                    tenant adult occupants count is required</span>\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Minor occupants count *</h3>\n                <input id=\"minor_occupants_count\" class=\"login-input\" name=\"minor_occupants_count\" type=\"number\" value=\"0\" size=\"30\" pInputText placeholder=\"Enter your Minor occupants count\" formControlName=\"minor_occupants_count\"\n                required=\"required\" data-error=\"tenant minor occupants count is required.\">\n                <span *ngIf=\" !tenantCreateForm.get('minor_occupants_count').valid && tenantCreateForm.get('minor_occupants_count').touched && tenantCreateForm.hasError('required', 'minor_occupants_count')\">\n                    tenant minor occupants count is required</span>\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">fix occupants count *</h3>\n                <input id=\"fix_occupants_count\" class=\"login-input\" name=\"fix_occupants_count\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter your fix occupants count\" formControlName=\"fix_occupants_count\"\n                required=\"required\" data-error=\"tenant fix occupants count is required.\">\n                <span *ngIf=\" !tenantCreateForm.get('fix_occupants_count').valid && tenantCreateForm.get('fix_occupants_count').touched && tenantCreateForm.hasError('required', 'fix_occupants_count')\">\n                    tenant fix occupants count is required</span>\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Is late fee applicable? *</h3>\n                <div class=\"login-input\">\n                    <p-dropdown [options]=\"truthy\" formControlName=\"is_late_fee_applicable\" placeholder=\"Is late fee applicable?\" optionLabel=\"label\" [showClear]=\"true\"></p-dropdown>\n                    <span *ngIf=\" !tenantCreateForm.get('is_late_fee_applicable').valid && tenantCreateForm.get('is_late_fee_applicable').touched && tenantCreateForm.hasError('required', 'is_late_fee_applicable')\">\n                        tenant is late fee applicable is required</span>\n        </div>\n        </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">floor plan id  </h3>\n                <input id=\"floor_plan_id\" class=\"login-input\" name=\"floor_plan_id\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter your floor plan id \" formControlName=\"floor_plan_id\"\n                 data-error=\"tenant floor plan id is required.\">\n                <!-- <span *ngIf=\" !tenantCreateForm.get('floor_plan_id').valid && tenantCreateForm.get('floor_plan_id').touched && tenantCreateForm.hasError('required', 'floor_plan_id')\">\n                    tenant floor plan id is required</span> -->\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Property management floor plan id </h3>\n                <input id=\"property_management_floor_plan_id\" class=\"login-input\" name=\"property_management_floor_plan_id\" type=\"text\" size=\"30\" pInputText placeholder=\"Property management floor plan id\" formControlName=\"property_management_floor_plan_id\"\n                 data-error=\"tenant Property management floor plan id  is required.\">\n                <!-- <span *ngIf=\" !tenantCreateForm.get('property_management_floor_plan_id').valid && tenantCreateForm.get('property_management_floor_plan_id').touched && tenantCreateForm.hasError('required', 'property_management_floor_plan_id')\">\n                    tenant Property management floor plan id is required</span> -->\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Property management property id </h3>\n                <input id=\"property_management_property_id\" class=\"login-input\" name=\"property_management_property_id\" type=\"text\" size=\"30\" pInputText placeholder=\"Property management property id\" formControlName=\"property_management_property_id\"\n                 data-error=\"tenant Property management property id  is required.\">\n                <!-- <span *ngIf=\" !tenantCreateForm.get('property_management_property_id').valid && tenantCreateForm.get('property_management_property_id').touched && tenantCreateForm.hasError('required', 'property_management_property_id')\">\n                    tenant Property management property id is required</span> -->\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Property management unit id </h3>\n                <input id=\"property_management_unit_id\" class=\"login-input\" name=\"property_management_unit_id\" type=\"text\" size=\"30\" pInputText placeholder=\"Property management unit id\" formControlName=\"property_management_unit_id\"\n                 data-error=\"tenant Property management unit id  is required.\">\n                <!-- <span *ngIf=\" !tenantCreateForm.get('property_management_unit_id').valid && tenantCreateForm.get('property_management_unit_id').touched && tenantCreateForm.hasError('required', 'property_management_unit_id')\">\n                    tenant Property management unit id is required</span> -->\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Property management resident id </h3>\n                <input id=\"property_management_resident_id\" class=\"login-input\" name=\"property_management_resident_id\" type=\"text\" size=\"30\" pInputText placeholder=\"Property management resident id\" formControlName=\"property_management_resident_id\"\n                 data-error=\"tenant Property management resident id  is required.\">\n                <!-- <span *ngIf=\" !tenantCreateForm.get('property_management_resident_id').valid && tenantCreateForm.get('property_management_resident_id').touched && tenantCreateForm.hasError('required', 'property_management_resident_id')\">\n                    tenant Property management resident id  is required</span> -->\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Property management lease id </h3>\n                <input id=\"property_management_lease_id\" class=\"login-input\" name=\"property_management_lease_id\" type=\"text\" size=\"30\" pInputText placeholder=\"Property management lease id\" formControlName=\"property_management_lease_id\"\n                 data-error=\"tenant Property management lease id  is required.\">\n                <!-- <span *ngIf=\" !tenantCreateForm.get('property_management_lease_id').valid && tenantCreateForm.get('property_management_lease_id').touched && tenantCreateForm.hasError('required', 'property_management_lease_id')\">\n                    tenant Property management lease id is required</span> -->\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Starting balance *</h3>\n                <input id=\"starting_balance\" class=\"login-input\" name=\"starting_balance\" type=\"text\" size=\"30\" pInputText placeholder=\"Starting balance\" formControlName=\"starting_balance\"\n                required=\"required\" data-error=\"tenant Starting balance is required.\">\n                <span *ngIf=\" !tenantCreateForm.get('starting_balance').valid && tenantCreateForm.get('starting_balance').touched && tenantCreateForm.hasError('required', 'starting_balance')\">\n                    tenant Starting balance is required</span>\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Starting balance date *</h3>\n                <p-calendar class=\"login-input\" formControlName=\"starting_balance_date\"></p-calendar>\n                <span *ngIf=\" !tenantCreateForm.get('starting_balance_date').valid && tenantCreateForm.get('starting_balance_date').touched && tenantCreateForm.hasError('required', 'starting_balance_date')\">\n                    tenant Starting balance date is required</span>\n            </span>\n        </div>\n        <div class=\"ui-g\">\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Billing date*</h3>\n                <p-calendar class=\"login-input\" formControlName=\"billing_date\"></p-calendar>\n                <span *ngIf=\" !tenantCreateForm.get('billing_date').valid && tenantCreateForm.get('billing_date').touched && tenantCreateForm.hasError('required', 'billing_date')\">\n                    tenant Billing date is required</span>\n            </span>\n            <span class=\"forn-group ui-g-6\">\n                <h3 class=\"login-label\">Is active? *</h3>\n                <div class=\"login-input\">\n                    <p-dropdown [options]=\"truthy\" formControlName=\"is_active\" placeholder=\"Is active?\" optionLabel=\"label\" [showClear]=\"true\"></p-dropdown>\n                    <span *ngIf=\" !tenantCreateForm.get('is_active').valid && tenantCreateForm.get('is_active').touched && tenantCreateForm.hasError('required', 'is_active')\">\n                        tenant is active is required</span>\n        </div>\n        </span>\n        </div>\n        <p-footer class=\"\">\n            <button type=\"submit\" pButton class=\"ui-button btn-orange\" label=\"Save changes\" *ngIf=\"tenantId == 0\">Create</button>\n            <button type=\"submit\" pButton class=\"ui-button btn-orange\" label=\"Save changes\" *ngIf=\"tenantId != 0\">Update</button>\n            <button type=\"button\" pButton class=\"ui-button-secondary\" (click)=\"display=false\" label=\"close\">Close</button>\n        </p-footer>\n    </form>\n</p-dialog>"

/***/ }),

/***/ "./src/app/sites/tenants/tenants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sites_services_tenants_service__ = __webpack_require__("./src/app/sites/services/tenants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function TenantsComponent(tenantService, _fb, confirmationService, route) {
        this.tenantService = tenantService;
        this._fb = _fb;
        this.confirmationService = confirmationService;
        this.route = route;
        this.tenantId = 0;
        this.display = false;
        this.tenant_copy = {};
        this.status_truthy = [];
        this.tenantCreateForm = this._fb.group({
            // id: new FormControl(),
            first_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            last_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            unit_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            tenant_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            move_in_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](new Date("16-08-2016"), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            move_out_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            adult_occupants_count: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            minor_occupants_count: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            fix_occupants_count: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            is_late_fee_applicable: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            floor_plan_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            property_management_floor_plan_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            property_management_property_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            property_management_unit_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            property_management_resident_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            property_management_lease_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            starting_balance: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            starting_balance_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            billing_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            is_active: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    TenantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.site_id = +params['id'];
            _this.tenantService.getTenants(_this.site_id)
                .subscribe(function (data) {
                _this.tenants = data.tenants;
                _this.units = data.units;
            });
        });
        this.truthy = [{ label: "Y", value: true }, { label: "N", value: false }];
        this.status_truthy = [{ label: "Active", value: true }, { label: "Inactive", value: false }];
    };
    TenantsComponent.prototype.createTenant = function (tenantCreateForm) {
        var _this = this;
        if (tenantCreateForm.valid) {
            if (this.tenantId == 0) {
                this.tenantService.createTenant(tenantCreateForm.value, this.site_id).subscribe(function (res) {
                    console.log(res);
                    _this.tenant_response(res);
                });
            }
            else {
                this.tenantService.updateTenant(tenantCreateForm.value, this.site_id, this.tenantId).subscribe(function (res) {
                    console.log(res);
                    _this.tenant_response(res);
                });
            }
        }
        else {
            this.setFormTouched(this.tenantCreateForm);
        }
    };
    // Response for create and update
    TenantsComponent.prototype.tenant_response = function (res) {
        this.tenants = res.tenants;
        this.units = res.units;
        this.msgs = [];
        if (res.tenant != undefined) {
            this.tenants.unshift(res.tenant);
        }
        if (res.success) {
            this.msgs.push({ severity: 'success', summary: 'Success', detail: res.message });
        }
        else {
            this.msgs.push({ severity: 'success', summary: 'Error', detail: res.message });
        }
        this.display = !res.success;
        this.tenantCreateForm.reset();
    };
    // function for validate all form fields
    TenantsComponent.prototype.setFormTouched = function (form_obj) {
        // this._toastr.error("please fill all * marked fields", 'Oops!', { showCloseButton: true });
        Object.keys(form_obj.controls).forEach(function (field) {
            var control = form_obj.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    };
    TenantsComponent.prototype.editTenant = function (tenant) {
        var _this = this;
        this.actions = [
            { label: 'Edit', icon: 'far fa-pencil', command: function () {
                    _this.editTenantDialog(tenant);
                } },
            { label: 'Delete', icon: 'far fa-trash', command: function () {
                    _this.deleteDialog(tenant);
                } },
        ];
    };
    TenantsComponent.prototype.showDialog = function () {
        this.tenantCreateForm.reset();
        this.tenantCreateForm.controls["adult_occupants_count"].setValue(0);
        this.tenantCreateForm.controls["minor_occupants_count"].setValue(0);
        this.display = true;
        this.tenantId = 0;
    };
    TenantsComponent.prototype.editTenantDialog = function (tenant) {
        this.tenantId = tenant.id;
        this.keys = Object.keys(tenant);
        var key = "";
        for (var i = 0; i < this.keys.length; i++) {
            key = this.keys[i];
            var date_keys = ["move_in_date", "move_out_date", "starting_balance_date", "billing_date"];
            if (date_keys.indexOf(key) != -1) {
                console.log(tenant[key]);
                tenant[key] = new Date();
                // tenant[key] = new Date(tenant[key]) 
            }
            var truthy_keys = ["is_late_fee_applicable", "status", "is_active"];
            if (truthy_keys.indexOf(key) != -1) {
                // To make the truty values same as truthy object
                if (tenant[key] != null) {
                    var tempKey = tenant[key].toString();
                    var lableTempKey = tempKey.charAt(0).toUpperCase() + tempKey.slice(1);
                    var tempValue = tenant[key];
                    tenant[key] = { label: lableTempKey, value: tempValue };
                }
            }
            this.tenant_copy[key] = tenant[key];
        }
        // two fields not required for tenants edit
        delete this.tenant_copy.id;
        delete this.tenant_copy.name;
        delete this.tenant_copy.unit;
        delete this.tenant_copy.moveindate;
        delete this.tenant_copy.billingdate;
        this.tenantCreateForm.setValue(this.tenant_copy);
        this.display = true;
    };
    TenantsComponent.prototype.deleteDialog = function (tenant) {
        var _this = this;
        console.log(tenant);
        this.tenantId = tenant.id;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Delete this tenant',
            icon: 'fa fa-question-circle',
            accept: function () {
                _this.tenantService.deleteTenant(_this.tenantId, _this.site_id).subscribe(function (res) {
                    _this.tenant_response(res);
                    // for(let i=0;i<this.tenants.length;i++)
                    // {
                    //   if(this.tenants[i].id == this.tenantId)
                    //   {
                    //     this.tenants.splice(i,1);
                    //     break;
                    //   }
                    // }
                });
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TenantsComponent.prototype, "site", void 0);
    TenantsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-tenants',
            inputs: ['site'],
            template: __webpack_require__("./src/app/sites/tenants/tenants.component.html"),
            styles: [__webpack_require__("./src/app/sites/tenants/tenants.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sites_services_tenants_service__["a" /* TenantsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4_primeng_api__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]])
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

module.exports = "<p-dialog header=\"{{formType}} Unit\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"600\" [minWidth]=\"200\" [minY]=\"200\">\n    <form [formGroup]=\"unitForm\" (ngSubmit)=\"createUnit(unitForm)\">\n        <div class=\"ui-g ui-fluid\">\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Section*</h3>\n                <p-dropdown [options]=\"sections\" formControlName=\"section\" placeholder=\"Select a section\" [showClear]=\"true\" required></p-dropdown>\n                <span *ngIf=\" !unitForm.get('section').valid && unitForm.get('section').touched && unitForm.hasError('required', 'section')\" class=\"error-message\">\n                    section is required</span>\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Meter *</h3>\n                <p-dropdown [options]=\"meters\" placeholder=\"Select a meter\" [showClear]=\"true\" formControlName=\"meter\"></p-dropdown>\n                <!-- <p-dropdown [options]=\"utilityTypes\" formControlName=\"utility_type\" placeholder=\"Select a utility type\" optionLabel=\"utility type\" [showClear]=\"true\" required></p-dropdown> -->\n                <span *ngIf=\" !unitForm.get('meter').valid && unitForm.get('meter').touched && unitForm.hasError('required', 'meter')\" class=\"error-message\">\n                    meter is required</span>\n            </span>\n\n            <!-- <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Building Name *</h3>\n                <input class=\"login-input\" name=\"building_name\" id=\"building_name\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter building name\"\n                    formControlName=\"building_name\" required=\"required\">\n                <span *ngIf=\" !unitForm.get('building_name').valid && unitForm.get('building_name').touched && unitForm.hasError('required', 'building_name')\" class=\"error-message\">\n                    building name is required</span>\n            </span> -->\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Apartment Number *</h3>\n                <input class=\"login-input\" name=\"apartment_number\" id=\"apartment_number\" type=\"text\" size=\"30\" pInputText placeholder=\"Enter apartment number\"\n                    formControlName=\"apartment_number\" required=\"required\">\n                <span *ngIf=\" !unitForm.get('apartment_number').valid && unitForm.get('apartment_number').touched && unitForm.hasError('required', 'apartment_number')\" class=\"error-message\">\n                    apartment number is required</span>\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Apartment Area *</h3>\n                <input class=\"login-input\" name=\"apartment_area\" id=\"apartment_area\" type=\"number\" size=\"30\" pInputText placeholder=\"Enter apartment area\"\n                    formControlName=\"apartment_area\" required=\"required\">\n                <span *ngIf=\" !unitForm.get('apartment_area').valid && unitForm.get('apartment_area').touched && unitForm.hasError('required', 'apartment_area')\" class=\"error-message\">\n                    apartment area is required</span>\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Number of rooms *</h3>\n                <input type=\"number\" min=\"0\" pInputText placeholder=\"enter number of rooms \" formControlName=\"no_of_rooms\" required>\n                <span *ngIf=\" !unitForm.get('no_of_rooms').valid && unitForm.get('no_of_rooms').touched && unitForm.hasError('required', 'no_of_rooms')\" class=\"error-message\">\n                    number of rooms is required</span>\n            </span>\n\n            <span class=\"form-group ui-g-6\">\n                <h3 class=\"login-label\">Unit sort number *</h3>\n                <input type=\"number\" min=\"0\" pInputText placeholder=\"enter unit sort number \" formControlName=\"unit_sort_number\" required>\n                <span *ngIf=\" !unitForm.get('unit_sort_number').valid && unitForm.get('unit_sort_number').touched && unitForm.hasError('required', 'unit_sort_number')\" class=\"error-message\">\n                    unit sort number is required</span>\n            </span>\n\n        </div>\n\n        <p-footer>\n            <button type=\"submit\" pButton label=\"Yes\">Submit</button>\n            <button type=\"cancel\" pButton (click)=\"display=false\" label=\"No\">Cancel</button>\n        </p-footer>\n    </form>\n</p-dialog>\n\n<div class=\"ui-widget-header ql-search\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search...\">\n    <!-- <button pButton type=\"button\" label=\"Click\" ></button> -->{{uploadUrl}}\n    <div style=\"float:right;\">\n        <button type=\"button\" (click)=\"showDialog()\" pButton label=\"Add Section\" styleClass=\"col-button\">Move</button>\n        <p-fileUpload mode=\"basic\" class=\"upload-file\" name=\"file\" url=\"http://18.218.148.177/upload_records?name=units&site={{site_id}}\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\n        <button type=\"button\" (click)=\"showDialog()\" pButton label=\"Add Section\">Add Unit</button>\n    </div>\n</div>\n\n<p-dataTable class=\"overview-select\" [value]=\"units\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" [globalFilter]=\"gb\" #dt>\n    <p-column field=\"identifier\" [sortable]=\"true\" header=\"Unit Id\"></p-column>\n    <p-column field=\"residents\" [sortable]=\"true\" header=\"Tenants\"></p-column>\n    <p-column field=\"section_labels\" [sortable]=\"true\" header=\"Sections\"></p-column>\n    <p-column field=\"meters\" [sortable]=\"true\" header=\"Meter id\"></p-column>\n    <p-column styleClass=\"col-button\">\n        <ng-template pTemplate=\"header\">\n        </ng-template>\n        <ng-template let-section=\"rowData\" pTemplate=\"body\">\n            <p-splitButton class=\"site-edit float-right\" icon=\"far fa-ellipsis-v\" (click)=\"testAction(section)\" [model]=\"actions\"></p-splitButton>\n        </ng-template>\n    </p-column>\n</p-dataTable>\n\n<p-confirmDialog></p-confirmDialog>"

/***/ }),

/***/ "./src/app/sites/units/units.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sites_services_units_service__ = __webpack_require__("./src/app/sites/services/units.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_confirmationservice__ = __webpack_require__("./node_modules/primeng/components/common/confirmationservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_confirmationservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_common_confirmationservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
    function UnitsComponent(unitService, route, _fb, confirmationService) {
        this.unitService = unitService;
        this.route = route;
        this._fb = _fb;
        this.confirmationService = confirmationService;
        this.display = false;
        this.meters = [];
        this.sections = [];
        this.formType = "Create";
        this.actions = [];
        this.msgs = [];
        this.unitForm = this._fb.group({
            id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            meter: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            apartment_number: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            apartment_area: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            no_of_rooms: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            unit_sort_number: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            section: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
    }
    UnitsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.upoladUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].host;
        console.log(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].host);
        this.route.params.subscribe(function (params) {
            _this.site_id = +params['id'];
            _this.unitService.getUnits(_this.site_id)
                .subscribe(function (data) {
                _this.units = data.units;
            });
            _this.unitService.getSections(_this.site_id).subscribe(function (res) {
                _this.sections = res.sections;
            });
        });
        this.unitService.getMeters().subscribe(function (res) {
            _this.meters = res.meters;
        });
    };
    UnitsComponent.prototype.createUnit = function (unitForm) {
        var _this = this;
        var units = this.units.slice();
        if (unitForm.valid) {
            this.unitService.createUnit(Object.assign(unitForm.value, { site_id: this.site_id })).subscribe(function (res) {
                if (unitForm.value.id) {
                    var index = units.indexOf(_this.editUnit);
                    units[index] = res.unit;
                }
                else {
                    units.unshift(res.unit);
                }
                _this.units = units;
                _this.display = false;
            });
        }
        else {
            this.setFormTouched(unitForm);
        }
    };
    UnitsComponent.prototype.showDialog = function () {
        this.display = true;
        this.unitForm.reset();
        this.formType = "Create";
    };
    UnitsComponent.prototype.editDialog = function (unitId) {
        var _this = this;
        console.log(unitId);
        this.unitService.getUnitDetails(unitId).subscribe(function (res) {
            _this.unitForm.setValue(res.unit);
            _this.formType = "Edit";
            _this.display = true;
        });
    };
    UnitsComponent.prototype.deleteDialog = function (unitId) {
        var _this = this;
        // this.confirmationService.confirm({
        //   message: 'Are you sure that you want to proceed?',
        //   header: 'Delete this site',
        //   icon: 'fa fa-question-circle',
        //   accept: () => {
        this.unitService.deleteUnit(unitId).subscribe(function (res) {
            var units = _this.units.slice();
            var index = units.indexOf(_this.editUnit);
            units.splice(index, 1);
            _this.units = units;
        });
        //   },
        //   reject: () => {
        //       this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        //   }
        // });
    };
    // function for validate all form fields
    UnitsComponent.prototype.setFormTouched = function (form_obj) {
        // this._toastr.error("please fill all * marked fields", 'Oops!', { showCloseButton: true });
        Object.keys(form_obj.controls).forEach(function (field) {
            var control = form_obj.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    };
    UnitsComponent.prototype.testAction = function (rowData) {
        var _this = this;
        this.editUnit = rowData;
        this.actions = [
            { label: 'Edit', icon: 'far fa-pencil', command: function () {
                    _this.editDialog(rowData.id);
                } },
            { label: 'Delete', icon: 'far fa-trash', command: function () {
                    _this.deleteDialog(rowData.id);
                } },
        ];
    };
    UnitsComponent.prototype.uploadHandler = function (event) {
        console.log(event.files);
    };
    UnitsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quadlogic-units',
            inputs: ['site'],
            template: __webpack_require__("./src/app/sites/units/units.component.html"),
            styles: [__webpack_require__("./src/app/sites/units/units.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sites_services_units_service__["a" /* UnitsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_confirmationservice__["ConfirmationService"]])
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
    host: "http://18.218.148.177/"
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: home.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/ -->\n\n<h1>The Home Page works!</h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: login.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/ -->\n\n<div class=\"container\">\n  <mat-card class=\"form\">\n    <mat-card-content>\n      <h2>Please sign in</h2>\n      <small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\n      <small class=\"warn\"\n        *ngIf=\"form.controls['username'].hasError('required') && form.controls['username'].touched\">\n        Username is required\n      </small>\n      <small class=\"warn\"\n        *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">\n        Password is required\n      </small>\n      <form [formGroup]=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(form.value); form.reset()\">\n        <mat-form-field class=\"inputStyle\">\n          <input type=\"text\" matInput [formControl]=\"form.controls['username']\" placeholder=\"Username \" />\n        </mat-form-field>\n        <mat-form-field class=\"inputStyle\">\n          <input type=\"password\" matInput [formControl]=\"form.controls['password']\" placeholder=\"Password\" />\n        </mat-form-field>\n\n        <br>\n\n        <mat-card-actions>\n          <button\n            mat-raised-button\n            color=\"primary\"\n            [disabled]=\"!form.valid\"\n            type=\"submit\"\n          >\n            Log in\n          </button>\n          <button\n            mat-raised-button\n            color=\"accent\"\n            [routerLink]=\"['/register']\"\n          >\n            Register\n          </button>\n        </mat-card-actions>\n      </form>\n      <br /><br />\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: not-found.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/ -->\n\n<div class=\"container\">\n  <mat-card color=\"accent\" class=\"form\">\n    <mat-card-content class=\"contentGroup\">\n      <h1>Oops this page doesn't exist.</h1>\n      <h3 style=\"color: red;\">Error 404</h3>\n      <button (click)=\"goHome()\" mat-button color=\"primary\">\n        Home\n      </button>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Please fill out the form to register</mat-card-title>\n    <mat-card-subtitle>Bob's Computer Repair Shop</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n\n      <form [formGroup]=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(form.value); form.reset()\">\n\n          <div class=\"errors\">\n            <small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\n\n            <small class=\"warn\"\n              *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">\n              Password is required\n            </small>\n\n            <small class=\"warn\"\n              *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">\n              Password is required\n            </small>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input type=\"text\" matInput [formControl]=\"form.controls['username']\" placeholder=\"Username \" />\n            </mat-form-field>\n            <div *ngIf=\"form.controls['username'].hasError('required') && form.controls['username'].touched\">Username required.</div>\n          </div>\n\n          <mat-form-field class=\"form-group\">\n            <input type=\"password\" matInput [formControl]=\"form.controls['password']\" placeholder=\"Password\" />\n          </mat-form-field>\n\n          <mat-form-field *ngIf=\"expression\" >\n            <input type=\"password\" matInput placeholder=\"Password\" />\n          </mat-form-field>\n\n          <br>\n\n          <mat-card-actions>\n            <button\n              mat-raised-button\n              color=\"primary\"\n              [disabled]=\"!form.valid\"\n              type=\"submit\"\n            >\n              Log in\n            </button>\n\n            <button\n              mat-raised-button\n              color=\"accent\"\n              [routerLink]=\"['/register']\"\n            >\n              Register\n            </button>\n          </mat-card-actions>\n        </form>\n\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>Ok</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/security-questions/security-questions.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/security-questions/security-questions.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: security-questions.component.html (Week 6)\n; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/ -->\n\n<div fxLayout=\"column\" style=\"margin-top: 75px;\">\n  <mat-card class=\"mat-elevation-z8\" style=\"width: 50%;\">\n    <mat-card-title>Create new Composer</mat-card-title>\n    <form (ngSubmit)=\"createComposer()\" [formGroup]=\"form\" #composerForm>\n      <mat-card-content>\n        <mat-form-field>\n          <input type=\"text\" matInput [formControl]=\"form.controls['firstName']\" placeholder=\"First Name...\" />\n        </mat-form-field>\n        <small style=\"color: red;\" *ngIf=\"form.controls['firstName'].hasError('required') && form.controls['firstName'].touched\">\n          First name is a required field.\n        </small>\n\n        <br />\n        <mat-form-field>\n          <input type=\"text\" matInput [formControl]=\"form.controls['lastName']\" placeholder=\"Last Name...\" />\n        </mat-form-field>\n        <small style=\"color: red;\" *ngIf=\"form.controls['lastName'].hasError('required') && form.controls['lastName'].touched\">\n          Last name is a required field.\n        </small>\n      </mat-card-content>\n\n      <mat-card-actions align=\"end\">\n        <button mat-raised-button color=\"accent\" (click)=\"goBack()\">Cancel</button>\n        <button mat-raised-button [disabled]=\"!form.valid\" color=\"primary\">Create</button>\n      </mat-card-actions>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-management/user-management.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-management/user-management.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: user-management.component.html (Week 6)\n; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/ -->\n\n<p>user-management works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: base-layout.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/ -->\n\n<div>\n  <!-- Page header -->\n  <header>\n    <!-- Toolbar -->\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\n      <mat-toolbar-row>\n        <button mat-button class=\"toolbar__icon-button mat-button\">\n          <mat-icon>menu</mat-icon>\n        </button>\n        <button mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\" [routerLink]=\"['/']\">Bob's</span>\n        </button>\n        <button mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/session/login']\">\n          <span style=\"margin-left: 5px !important\">Login</span>\n        </button>\n\n        <div fxFlex></div>\n\n        <button mat-icon-button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\">\n          <mat-icon>account_circle</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item>\n            <mat-icon>perm_contact_calendar</mat-icon>\n            <span>My Profile</span>\n          </button>\n          <button mat-menu-item>\n            <mat-icon>settings</mat-icon>\n            <span>Settings</span>\n          </button>\n          <button mat-menu-item (click)=\"userLogout()\">\n            <mat-icon>exit_to_app</mat-icon>\n            <span>Logout</span>\n          </button>\n        </mat-menu>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </header>\n  </div>\n\n  <!-- Main page content -->\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/session-layout/session-layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/session-layout/session-layout.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: session-layout.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/ -->\n\n  <div>\n    <!-- Page header -->\n    <header>\n      <!-- Toolbar -->\n      <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\n        <mat-toolbar-row>\n            <button mat-button class=\"toolbar__icon-button mat-button\">\n              <mat-icon>menu</mat-icon>\n            </button>\n          <button mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/']\">\n            <span style=\"margin-left: 5px !important\" >Bob's</span>\n          </button>\n\n          <div fxFlex></div>\n\n          <button mat-icon-button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\">\n            <mat-icon>account_circle</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>perm_contact_calendar</mat-icon>\n              <span>My Profile</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>settings</mat-icon>\n              <span>Settings</span>\n            </button>\n            <button mat-menu-item (click)=\"userLogout()\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span>Logout</span>\n            </button>\n          </mat-menu>\n        </mat-toolbar-row>\n      </mat-toolbar>\n    </header>\n  </div>\n\n  <!-- Main page content -->\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title: app.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Bob's Computer Repair Shop";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/session-layout/session-layout.component */ "./src/app/shared/session-layout/session-layout.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/security-questions/security-questions.component */ "./src/app/pages/security-questions/security-questions.component.ts");
/* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/*
; =======================================================
; Title: app.module.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/



// Other






// Components









// Material












// Flex

// PrimeNg
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_10__["BaseLayoutComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _shared_session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_12__["SessionLayoutComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_15__["SecurityQuestionsComponent"],
                _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_16__["UserManagementComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"], { useHash: true, enableTracing: false }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/security-questions/security-questions.component */ "./src/app/pages/security-questions/security-questions.component.ts");
/* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/*
; =======================================================
; Title: app.routing.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/







var AppRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '',
        component: _shared__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"],
        children: [
            {
                path: 'home',
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: 'register',
                component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            }
        ]
    },
    {
        path: 'session',
        component: _shared__WEBPACK_IMPORTED_MODULE_0__["SessionLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            },
            {
                path: 'security-questions',
                component: _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_4__["SecurityQuestionsComponent"]
            },
            {
                path: '404',
                component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
            }
        ]
    },
    {
        path: 'user-management',
        component: _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_5__["UserManagementComponent"]
    },
    {
        path: '**',
        redirectTo: 'session/404'
    }
];


/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: home.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IGhvbWUuY29tcG9uZW50LmNzcyAoV2VlayA2KVxuOyBBdXRob3JzOiBbVHlsZXIgQXJtc3Ryb25nXSwgRGF2aWQgVGFydmluLCBBYXJvbiBXaWxzb25cbjsgRGF0ZTogMjMgT2N0IDIwMTlcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXG47IExlZ2VuZDogW10gLT4gVGVhbSBtZW1iZXIgcmVzcG9uc2libGUgZm9yIHBhZ2UuXG47PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title: home.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: login.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/\n\n\n.container {\n  max-width: 320px;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Q0FRQzs7O0FBR0Q7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47IFRpdGxlOiBsb2dpbi5jb21wb25lbnQuY3NzIChXZWVrIDYpXG47IEF1dGhvcnM6IFtUeWxlciBBcm1zdHJvbmddLCBEYXZpZCBUYXJ2aW4sIEFhcm9uIFdpbHNvblxuOyBEYXRlOiAyMyBPY3QgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcbjsgTGVnZW5kOiBbXSAtPiBUZWFtIG1lbWJlciByZXNwb25zaWJsZSBmb3IgcGFnZS5cbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
; =======================================================
; Title: login.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/






var LoginComponent = /** @class */ (function () {
    function LoginComponent(cookie, router, fb, http) {
        this.cookie = cookie;
        this.router = router;
        this.fb = fb;
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])
            ],
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ])
            ]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var apiBaseURL = '/api/user/';
        // tslint:disable-next-line: no-string-literal
        var username = this.form.controls['username'].value;
        // tslint:disable-next-line: no-string-literal
        var password = this.form.controls['password'].value;
        this.http.get(apiBaseURL + username).subscribe(function (res) {
            if (res) {
                _this.cookie.set('isAuthenticated', 'true', 1);
                _this.cookie.set(username, 'true', 1);
                _this.router.navigate(['/home']);
            }
            else {
                _this.errorMessage = 'Invalid User ID';
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: not-found.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogbm90LWZvdW5kLmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXG47IERhdGU6IDIzIE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
; =======================================================
; Title: not-found.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/




var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goHome = function () {
        var cookieValue = this.cookie.get('isAuthenticated');
        if (cookieValue) {
            this.router.navigate(['/home']);
        }
        else {
            this.router.navigate(['/session/login']);
        }
    };
    NotFoundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
    ]; };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_must_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/must-match */ "./src/app/shared/must-match.ts");
/*
; =======================================================
; Title: register.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(cookie, router, fb, http) {
        this.cookie = cookie;
        this.router = router;
        this.fb = fb;
        this.http = http;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm')])],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]'
                        + '{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')])],
            role: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            selectedSecurityQuestions: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        }, {
            validator: Object(_shared_must_match__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('password', 'confirmPassword')
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var apiBaseURL = '/api/user/';
        // tslint:disable-next-line: no-string-literal
        var userId = this.form.controls['userId'].value;
        this.http.get(apiBaseURL + userId).subscribe(function (res) {
            if (res) {
                _this.cookie.set('isAuthenticated', 'true', 1);
                _this.cookie.set(userId, 'true', 1);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.errorMessage = 'Invalid User ID';
            }
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/security-questions/security-questions.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/security-questions/security-questions.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: security-questions.component.css (Week 6)\n; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zL3NlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zL3NlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogc2VjdXJpdHktcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogVHlsZXIgQXJtc3Ryb25nLCBEYXZpZCBUYXJ2aW4sIFtBYXJvbiBXaWxzb25dXG47IERhdGU6IDIzIE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/pages/security-questions/security-questions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/security-questions/security-questions.component.ts ***!
  \**************************************************************************/
/*! exports provided: SecurityQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQuestionsComponent", function() { return SecurityQuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
; =======================================================
; Title: security-questions.component.ts (Week 6)
; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/




var SecurityQuestionsComponent = /** @class */ (function () {
    function SecurityQuestionsComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.displayedColumns = ['question-id', 'question'];
        this.http.get('/api/security-questions').subscribe(function (data) {
            _this.securityQuestions = data;
            console.log(_this.securityQuestions);
        }, function (err) {
            console.log(err);
        });
    }
    SecurityQuestionsComponent.prototype.ngOnInit = function () {
    };
    SecurityQuestionsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SecurityQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security-questions',
            template: __webpack_require__(/*! raw-loader!./security-questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/security-questions/security-questions.component.html"),
            styles: [__webpack_require__(/*! ./security-questions.component.css */ "./src/app/pages/security-questions/security-questions.component.css")]
        })
    ], SecurityQuestionsComponent);
    return SecurityQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-management/user-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: user-management.component.css (Week 6)\n; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogVHlsZXIgQXJtc3Ryb25nLCBEYXZpZCBUYXJ2aW4sIFtBYXJvbiBXaWxzb25dXG47IERhdGU6IDIzIE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/pages/user-management/user-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title: user-management.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/


var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent() {
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/pages/user-management/user-management.component.css")]
        })
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: base-layout.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/\n\n.menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  color: white;\n  background-color: #333333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUM7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFzZS1sYXlvdXQvYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IGJhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXG47IERhdGU6IDIzIE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/*
; =======================================================
; Title: base-layout.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/




var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    BaseLayoutComponent.prototype.ngOnInit = function () {
    };
    BaseLayoutComponent.prototype.userLogout = function () {
        this.cookie.deleteAll();
        this.router.navigate(['/session/login']);
    };
    BaseLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-layout',
            template: __webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html"),
            styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")]
        })
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: BaseLayoutComponent, SessionLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"]; });

/* harmony import */ var _session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-layout/session-layout.component */ "./src/app/shared/session-layout/session-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionLayoutComponent", function() { return _session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_1__["SessionLayoutComponent"]; });

/*
; =======================================================
; Title: session-layout.component.css (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/




/***/ }),

/***/ "./src/app/shared/must-match.ts":
/*!**************************************!*\
  !*** ./src/app/shared/must-match.ts ***!
  \**************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/*
; =======================================================
; Title: login.component.ts (Week 6)
; Authors: https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example
; Date: 08 Nov 2019
; Description: Custom Validator for matching passwords
;========================================================
*/
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/shared/session-layout/session-layout.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/session-layout/session-layout.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: session-layout.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n;========================================================\n*/\n\n.menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  color: white;\n  background-color: #333333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Nlc3Npb24tbGF5b3V0L3Nlc3Npb24tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUM7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2Vzc2lvbi1sYXlvdXQvc2Vzc2lvbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IHNlc3Npb24tbGF5b3V0LmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXG47IERhdGU6IDIzIE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/session-layout/session-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/session-layout/session-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: SessionLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionLayoutComponent", function() { return SessionLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
; =======================================================
; Title: session-layout.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/




var SessionLayoutComponent = /** @class */ (function () {
    function SessionLayoutComponent(cookie, router) {
        this.cookie = cookie;
        this.router = router;
    }
    SessionLayoutComponent.prototype.ngOnInit = function () {
    };
    SessionLayoutComponent.prototype.userLogout = function () {
        this.cookie.deleteAll();
        this.router.navigate(['/session/login']);
    };
    SessionLayoutComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SessionLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-layout',
            template: __webpack_require__(/*! raw-loader!./session-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/session-layout/session-layout.component.html"),
            styles: [__webpack_require__(/*! ./session-layout.component.css */ "./src/app/shared/session-layout/session-layout.component.css")]
        })
    ], SessionLayoutComponent);
    return SessionLayoutComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
; =======================================================
; Title: environment.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
; =======================================================
; Title: main.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tyler-macbook/Documents/1.School/1.Bellevue/bu-webdev/bobs-repair/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
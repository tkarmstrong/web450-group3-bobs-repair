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

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: home.component.html (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<h1>The Home Page works!</h1>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: login.component.html (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<div class=\"container\">\r\n  <mat-card class=\"form\">\r\n    <mat-card-content>\r\n      <h2>Please sign in</h2>\r\n      <small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\r\n      <small class=\"warn\"\r\n        *ngIf=\"form.controls['username'].hasError('required') && form.controls['username'].touched\">\r\n        Username is required\r\n      </small>\r\n      <small class=\"warn\"\r\n        *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">\r\n        Password is required\r\n      </small>\r\n      <form [formGroup]=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(form.value); form.reset()\">\r\n        <mat-form-field class=\"inputStyle\">\r\n          <input type=\"text\" matInput [formControl]=\"form.controls['username']\" placeholder=\"Username \" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputStyle\">\r\n          <input type=\"password\" matInput [formControl]=\"form.controls['password']\" placeholder=\"Password\" />\r\n        </mat-form-field>\r\n\r\n        <br>\r\n\r\n        <mat-card-actions>\r\n          <button\r\n            mat-raised-button\r\n            color=\"primary\"\r\n            [disabled]=\"!form.valid\"\r\n            type=\"submit\"\r\n          >\r\n            Log in\r\n          </button>\r\n          <button\r\n            mat-raised-button\r\n            color=\"accent\"\r\n            [routerLink]=\"['/register']\"\r\n          >\r\n            Register\r\n          </button>\r\n        </mat-card-actions>\r\n      </form>\r\n      <br /><br />\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: not-found.component.html (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<div class=\"container\">\r\n  <mat-card color=\"accent\" class=\"form\">\r\n    <mat-card-content class=\"contentGroup\">\r\n      <h1>Oops this page doesn't exist.</h1>\r\n      <h3 style=\"color: red;\">Error 404</h3>\r\n      <button (click)=\"goHome()\" mat-button color=\"primary\">\r\n        Home\r\n      </button>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: register.component.html (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Please fill out the form to register</mat-card-title>\r\n    <mat-card-subtitle>Bob's Computer Repair Shop</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n\r\n      <form [formGroup]=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(form.value); form.reset()\">\r\n\r\n          <small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field>\r\n              <input type=\"text\" matInput [formControl]=\"form.controls['username']\" placeholder=\"Username \" />\r\n            </mat-form-field>\r\n            <small class=\"warn\" *ngIf=\"form.controls['username'].hasError('required') && form.controls['username'].touched\">Username required.</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"form-group\">\r\n              <input type=\"password\" matInput [formControl]=\"form.controls['password']\" placeholder=\"Password\" />\r\n            </mat-form-field>\r\n            <small class=\"warn\" *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">Password Required</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"form-group\">\r\n              <input type=\"text\" matInput [formControl]=\"form.controls['firstName']\" placeholder=\"First Name\" />\r\n            </mat-form-field>\r\n            <small *ngIf=\"form.controls['firstName'].hasError('required') && form.controls['firstName'].touched\">First Name Required</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"form-group\">\r\n              <input type=\"text\" matInput [formControl]=\"form.controls['lastName']\" placeholder=\"Last Name\" />\r\n            </mat-form-field>\r\n            <small *ngIf=\"form.controls['lastName'].hasError('required') && form.controls['lastName'].touched\">Last Name Required</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"form-group\">\r\n              <input type=\"text\" matInput [formControl]=\"form.controls['phoneNumber']\" placeholder=\"Phone Number\" />\r\n            </mat-form-field>\r\n            <small *ngIf=\"form.controls['phoneNumber'].hasError('required') && form.controls['phoneNumber'].touched\">Phone Number Required</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"form-group\">\r\n              <input type=\"text\" matInput [formControl]=\"form.controls['address']\" placeholder=\"Address\" />\r\n            </mat-form-field>\r\n            <small *ngIf=\"form.controls['address'].hasError('required') && form.controls['address'].touched\">Address Required</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"form-group\">\r\n              <input type=\"text\" matInput [formControl]=\"form.controls['email']\" placeholder=\"Email\" />\r\n            </mat-form-field>\r\n            <small *ngIf=\"form.controls['email'].hasError('email') && form.controls['address'].touched\">Email Required</small>\r\n          </div>\r\n\r\n\r\n\r\n          <br>\r\n\r\n          <mat-card-actions>\r\n            <button\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              [disabled]=\"!form.valid\"\r\n              type=\"submit\"\r\n            >\r\n              Log in\r\n            </button>\r\n\r\n            <button\r\n              mat-raised-button\r\n              color=\"accent\"\r\n              [routerLink]=\"['/register']\"\r\n            >\r\n              Register\r\n            </button>\r\n          </mat-card-actions>\r\n        </form>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button>Ok</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/security-questions/security-questions.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/security-questions/security-questions.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: security-questions.component.html (Week 6)\r\n; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\r\n  <mat-card style=\"margin: 0 auto;\">\r\n    <mat-card-title>Security Questions</mat-card-title>\r\n    <mat-card-content *ngIf=\"data\">\r\n      <table mat-table [dataSource]=\"data\">\r\n\r\n        <ng-container matColumnDef=\"questionText\">\r\n          <th mat-header-cell *matHeaderCellDef>Question</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{ element.questionText }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <button mat-icon-button (click)=\"edit(element._id)\">\r\n              <mat-icon color=\"accent\">create</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"delete(element._id, element.questionText)\">\r\n              <mat-icon color=\"warn\">delete_forever</mat-icon>\r\n            </button>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n      </table>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <div fxFlex></div>\r\n      <button mat-button color=\"primary\"><mat-icon>add_box</mat-icon>Add New</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/server-error/server-error.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/server-error/server-error.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-details/user-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: user-details.component.html (Week 6)\r\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\r\n; Date: 29 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\r\n  <mat-card style=\"width: 90%; margin: 0 auto;\" class=\"mat-elevation-z8\">\r\n    <mat-card-title>User Details</mat-card-title>\r\n    <mat-card-subtitle>\r\n      <button mat-button color=\"accent\">Edit</button>\r\n    </mat-card-subtitle>\r\n\r\n    <br>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"saveUser()\" #userForm>\r\n      <mat-card-content>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput [formControl]=\"form.controls['firstName']\" placeholder=\"First Name\"/>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput [formControl]=\"form.controls['lastName']\" placeholder=\"Last Name\"/>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput [formControl]=\"form.controls['phoneNumber']\" placeholder=\"Phone Number\"/>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput [formControl]=\"form.controls['address']\" placeholder=\"Address\"/>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput [formControl]=\"form.controls['email']\" placeholder=\"Email\"/>\r\n          </mat-form-field>\r\n        </div>\r\n      </mat-card-content>\r\n\r\n      <br>\r\n      <mat-card-actions align=\"end\">\r\n        <button mat-raised-button (click)=\"cancel()\" color=\"warn\">Cancel</button>\r\n        <button mat-raised-button color=\"accent\">Submit</button>\r\n      </mat-card-actions>\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-management/user-management.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-management/user-management.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: user-management.component.html (Week 6)\r\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\r\n; Date: 29 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\r\n  <mat-card style=\"width: 90%; margin: 0 auto;\">\r\n    <mat-card-title>Users Configuration</mat-card-title>\r\n    <mat-card-content *ngIf=\"users\">\r\n      <table mat-table [dataSource]=\"users\">\r\n\r\n        <ng-container matColumnDef=\"username\">\r\n          <th mat-header-cell *matHeaderCellDef>Username</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{ element.username }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"firstName\">\r\n          <th mat-header-cell *matHeaderCellDef>First Name</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{ element.firstName }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"lastName\">\r\n          <th mat-header-cell *matHeaderCellDef>Last Name</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{ element.lastName }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"phoneNumber\">\r\n          <th mat-header-cell *matHeaderCellDef>Phone Number</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{ element.phoneNumber }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"address\">\r\n          <th mat-header-cell *matHeaderCellDef>Address</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{ element.address }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"email\">\r\n          <th mat-header-cell *matHeaderCellDef>Email</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{ element.email }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"functions\">\r\n          <th mat-header-cell *matHeaderCellDef>Functions</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <button mat-icon-button (click)=\"edit(element._id, element.username)\">\r\n              <mat-icon color=\"accent\">edit</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"delete(element._id, element.username)\">\r\n              <mat-icon color=\"warn\">delete</mat-icon>\r\n            </button>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n      </table>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: base-layout.component.html (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<div>\r\n  <!-- Page header -->\r\n  <header>\r\n    <!-- Toolbar -->\r\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\r\n      <mat-toolbar-row>\r\n        <button mat-button class=\"toolbar__icon-button mat-button\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <button mat-button class=\"toolbar__icon-button mat-button\">\r\n          <span style=\"margin-left: 5px !important\" [routerLink]=\"['/']\">Bob's</span>\r\n        </button>\r\n        <button mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/login']\">\r\n          <span style=\"margin-left: 5px !important\">Login</span>\r\n        </button>\r\n\r\n        <div fxFlex></div>\r\n\r\n        <button mat-icon-button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\">\r\n          <mat-icon>account_circle</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item>\r\n            <mat-icon>perm_contact_calendar</mat-icon>\r\n            <span>My Profile</span>\r\n          </button>\r\n          <button mat-menu-item>\r\n            <mat-icon>settings</mat-icon>\r\n            <span>Settings</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"userLogout()\">\r\n            <mat-icon>exit_to_app</mat-icon>\r\n            <span>Logout</span>\r\n          </button>\r\n        </mat-menu>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </header>\r\n  </div>\r\n\r\n  <!-- Main page content -->\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/question-add-dialog/question-add-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/question-add-dialog/question-add-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: question-add-dialog.component.html (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 29 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<p>question-add-dialog works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/question-delete-dialog/question-delete-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/question-delete-dialog/question-delete-dialog.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: question-delete-dialog.component.html (Week 6)\r\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\r\n; Date: 30 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<mat-dialog-content>\r\n  <div fxLayout=\"column\">\r\n    <mat-card class=\"mat-elevation-z8\">\r\n      <mat-card-title style=\"font-weight: darker; text-align: center;\">\r\n        Delete Security Question\r\n      </mat-card-title>\r\n      <br><br>\r\n      <mat-card-content>\r\n        Do you wish to delete the question {{ questionText }}?\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button mat-raised-button matDialogClose=\"confirm\" color=\"primary\">Confirm</button>\r\n        <button mat-raised-button matDialogClose=\"cancel\" color=\"warn\">Cancel</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/question-edit-dialog/question-edit-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/question-edit-dialog/question-edit-dialog.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"form\">\r\n    <mat-card-content>\r\n\r\n      <h2>Edit</h2>\r\n\r\n      <!-- <small class=\"warn\"\r\n        *ngIf=\"form.controls['selectedQuestion'].hasError('required') && form.controls['selectedQuestion'].touched\">\r\n        A question required.\r\n      </small> -->\r\n\r\n      <form [formGroup]=\"form\" #editForm=\"ngForm\" (ngSubmit)=\"onSubmit(form.value); form.reset()\">\r\n        <mat-form-field class=\"inputStyle\">\r\n          <input type=\"text\" matInput [formControl]=\"form.controls['questionText']\" placeholder=\"Edit question\" />\r\n        </mat-form-field>\r\n\r\n        <br>\r\n\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">\r\n            Cancel\r\n          </button>\r\n        </mat-card-actions>\r\n      </form>\r\n      <br /><br />\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/session-layout/session-layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/session-layout/session-layout.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: session-layout.component.html (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n  <div>\r\n    <!-- Page header -->\r\n    <header>\r\n      <!-- Toolbar -->\r\n      <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\r\n        <mat-toolbar-row>\r\n            <button mat-button class=\"toolbar__icon-button mat-button\">\r\n              <mat-icon>menu</mat-icon>\r\n            </button>\r\n          <button mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/']\">\r\n            <span style=\"margin-left: 5px !important\" >Bob's</span>\r\n          </button>\r\n          <button mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/session/security-questions']\">\r\n            <span style=\"margin-left: 5px !important\" >Security Questions</span>\r\n          </button>\r\n          <button mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/session/user-management']\">\r\n            <span style=\"margin-left: 5px !important\" >User Management</span>\r\n          </button>\r\n\r\n          <div fxFlex></div>\r\n\r\n          <button mat-icon-button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>account_circle</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item>\r\n              <mat-icon>perm_contact_calendar</mat-icon>\r\n              <span>My Profile</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>settings</mat-icon>\r\n              <span>Settings</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"userLogout()\">\r\n              <mat-icon>exit_to_app</mat-icon>\r\n              <span>Logout</span>\r\n            </button>\r\n          </mat-menu>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n    </header>\r\n  </div>\r\n\r\n  <!-- Main page content -->\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/user-delete-dialog/user-delete-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/user-delete-dialog/user-delete-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\r\n; =======================================================\r\n; Title: user-delete-dialog.component.html (Week 6)\r\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\r\n; Date: 29 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/ -->\r\n\r\n<mat-dialog-content>\r\n  <div fxLayout=\"column\">\r\n    <mat-card class=\"mat-elevation-z8\">\r\n      <mat-card-title style=\"font-weight: darker; text-align: center;\">\r\n        Delete User\r\n      </mat-card-title>\r\n      <br><br>\r\n      <mat-card-content>\r\n        Do you wish to delete user {{ username }}?\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button mat-raised-button matDialogClose=\"confirm\" color=\"primary\">Confirm</button>\r\n        <button mat-raised-button matDialogClose=\"cancel\" color=\"warn\">Cancel</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</mat-dialog-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title: app.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


let AppComponent = class AppComponent {
    constructor() {
        this.title = `Bob's Computer Repair Shop`;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/guards/auth-guard.service */ "./src/app/shared/guards/auth-guard.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/session-layout/session-layout.component */ "./src/app/shared/session-layout/session-layout.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/security-questions/security-questions.component */ "./src/app/pages/security-questions/security-questions.component.ts");
/* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/user-details/user-details.component */ "./src/app/pages/user-details/user-details.component.ts");
/* harmony import */ var _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/question-edit-dialog/question-edit-dialog.component */ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.ts");
/* harmony import */ var _shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/user-delete-dialog/user-delete-dialog.component */ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _shared_question_add_dialog_question_add_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/question-add-dialog/question-add-dialog.component */ "./src/app/shared/question-add-dialog/question-add-dialog.component.ts");
/* harmony import */ var _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/question-delete-dialog/question-delete-dialog.component */ "./src/app/shared/question-delete-dialog/question-delete-dialog.component.ts");
/* harmony import */ var _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/server-error/server-error.component */ "./src/app/pages/server-error/server-error.component.ts");
/*
; =======================================================
; Title: app.module.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/



// Other







// Components












// Material












// Flex




// PrimeNg
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_11__["BaseLayoutComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _shared_session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_13__["SessionLayoutComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
            _pages_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
            _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_16__["SecurityQuestionsComponent"],
            _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_17__["UserManagementComponent"],
            _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_19__["UserDetailsComponent"],
            _shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_21__["UserDeleteDialogComponent"],
            _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_20__["QuestionEditDialogComponent"],
            _shared_question_add_dialog_question_add_dialog_component__WEBPACK_IMPORTED_MODULE_35__["QuestionAddDialogComponent"],
            _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_36__["QuestionDeleteDialogComponent"],
            _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_37__["ServerErrorComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"], { useHash: true, enableTracing: false }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [_shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_21__["UserDeleteDialogComponent"], _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_20__["QuestionEditDialogComponent"], _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_36__["QuestionDeleteDialogComponent"]]
    })
], AppModule);



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
/* harmony import */ var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-details/user-details.component */ "./src/app/pages/user-details/user-details.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guards/auth-guard.service */ "./src/app/shared/guards/auth-guard.service.ts");
/* harmony import */ var _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/server-error/server-error.component */ "./src/app/pages/server-error/server-error.component.ts");
/*
; =======================================================
; Title: app.routing.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/










const AppRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '',
        component: _shared__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"],
        children: [
            { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
            { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
            { path: 'server-error', component: _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_9__["ServerErrorComponent"] }
        ]
    },
    { path: 'session', component: _shared__WEBPACK_IMPORTED_MODULE_0__["SessionLayoutComponent"],
        children: [
            { path: 'security-questions', component: _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_4__["SecurityQuestionsComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
            { path: 'user-management', component: _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_5__["UserManagementComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
            { path: 'user-details/:id', component: _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailsComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
            { path: '404', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
        ]
    },
    { path: '**', redirectTo: 'session/404' }
];


/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: home.component.css (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IFRpdGxlOiBob21lLmNvbXBvbmVudC5jc3MgKFdlZWsgNilcclxuOyBBdXRob3JzOiBbVHlsZXIgQXJtc3Ryb25nXSwgRGF2aWQgVGFydmluLCBBYXJvbiBXaWxzb25cclxuOyBEYXRlOiAyMyBPY3QgMjAxOVxyXG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxyXG47IExlZ2VuZDogW10gLT4gVGVhbSBtZW1iZXIgcmVzcG9uc2libGUgZm9yIHBhZ2UuXHJcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title: home.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: login.component.css (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n\r\n\r\n.container {\r\n  max-width: 320px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Q0FRQzs7O0FBR0Q7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBUaXRsZTogbG9naW4uY29tcG9uZW50LmNzcyAoV2VlayA2KVxyXG47IEF1dGhvcnM6IFtUeWxlciBBcm1zdHJvbmddLCBEYXZpZCBUYXJ2aW4sIEFhcm9uIFdpbHNvblxyXG47IERhdGU6IDIzIE9jdCAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXHJcbjsgTGVnZW5kOiBbXSAtPiBUZWFtIG1lbWJlciByZXNwb25zaWJsZSBmb3IgcGFnZS5cclxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/*
; =======================================================
; Title: login.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






let LoginComponent = class LoginComponent {
    constructor(cookie, router, fb, http) {
        this.cookie = cookie;
        this.router = router;
        this.fb = fb;
        this.http = http;
    }
    ngOnInit() {
        this.form = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    onSubmit() {
        const apiBaseURL = '/api/login/';
        // tslint:disable-next-line: no-string-literal
        const username = this.form.controls['username'].value;
        // tslint:disable-next-line: no-string-literal
        const password = this.form.controls['password'].value;
        this.http.post(apiBaseURL, {
            username,
            password
        }).subscribe(res => {
            if (res) {
                this.cookie.set('isAuthenticated', 'true', 1);
                this.cookie.set(username, 'true', 1);
                this.router.navigate(['/session/user-management']);
            }
            else {
                this.errorMessage = 'Invalid User ID';
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: not-found.component.css (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6IG5vdC1mb3VuZC5jb21wb25lbnQuY3NzIChXZWVrIDYpXHJcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXHJcbjsgRGF0ZTogMjMgT2N0IDIwMTlcclxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcclxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxyXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/*
; =======================================================
; Title: not-found.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




let NotFoundComponent = class NotFoundComponent {
    constructor(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    ngOnInit() {
    }
    goHome() {
        const cookieValue = this.cookie.get('isAuthenticated');
        if (cookieValue) {
            this.router.navigate(['/home']);
        }
        else {
            this.router.navigate(['/session/login']);
        }
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: register.component.css (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n\r\n.warn {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Q0FRQzs7QUFFRDtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBUaXRsZTogcmVnaXN0ZXIuY29tcG9uZW50LmNzcyAoV2VlayA2KVxyXG47IEF1dGhvcnM6IFtUeWxlciBBcm1zdHJvbmddLCBEYXZpZCBUYXJ2aW4sIEFhcm9uIFdpbHNvblxyXG47IERhdGU6IDIzIE9jdCAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXHJcbjsgTGVnZW5kOiBbXSAtPiBUZWFtIG1lbWJlciByZXNwb25zaWJsZSBmb3IgcGFnZS5cclxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG4ud2FybiB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/*
; =======================================================
; Title: register.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






let RegisterComponent = class RegisterComponent {
    constructor(cookie, router, fb, http) {
        this.cookie = cookie;
        this.router = router;
        this.fb = fb;
        this.http = http;
    }
    ngOnInit() {
        this.form = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm')
                ])],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            role: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            selectedSecurityQuestions: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    onSubmit() {
        const apiBaseURL = '/api/user/';
        // tslint:disable-next-line: no-string-literal
        const userId = this.form.controls['userId'].value;
        this.http.get(apiBaseURL + userId).subscribe(res => {
            if (res) {
                this.cookie.set('isAuthenticated', 'true', 1);
                this.cookie.set(userId, 'true', 1);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.errorMessage = 'Invalid User ID';
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/pages/security-questions/security-questions.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/security-questions/security-questions.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: security-questions.component.css (Week 6)\r\n; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zL3NlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zL3NlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6IHNlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIChXZWVrIDYpXHJcbjsgQXV0aG9yczogVHlsZXIgQXJtc3Ryb25nLCBEYXZpZCBUYXJ2aW4sIFtBYXJvbiBXaWxzb25dXHJcbjsgRGF0ZTogMjMgT2N0IDIwMTlcclxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcclxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxyXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_security_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/security-question.service */ "./src/app/shared/services/security-question.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/question-edit-dialog/question-edit-dialog.component */ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.ts");
/* harmony import */ var _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/question-delete-dialog/question-delete-dialog.component */ "./src/app/shared/question-delete-dialog/question-delete-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/*
; =======================================================
; Title: security-questions.component.ts (Week 6)
; Authors: [Tyler Armstrong], [David Tarvin], [Aaron Wilson]
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/








let SecurityQuestionsComponent = class SecurityQuestionsComponent {
    constructor(securityService, router, http, dialog) {
        this.securityService = securityService;
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.displayedColumns = ['questionText', 'actions'];
    }
    ngOnInit() {
        this.securityService.get()
            .subscribe(res => {
            this.data = res;
        });
    }
    addNew() {
    }
    delete(questionId, questionText) {
        const dialogRef = this.dialog.open(_shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["QuestionDeleteDialogComponent"], {
            data: {
                questionText: questionText
            },
            disableClose: true,
            width: '800px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'confirm') {
                this.http.delete('/api/security-questions/' + questionId).subscribe(res => {
                    console.log('Security Question deleted');
                    this.data = this.data.filter(u => u._id !== questionId);
                });
            }
            else if (result === 'cancel') {
                this.router.navigate(['/session/security-questions']);
            }
        });
    }
    edit(questionId) {
        // 1. Get selected question
        this.securityService.getQuestionById(questionId)
            .subscribe(res => { this.question = res; }, err => { console.log(err); }, () => {
            // 2. Open Dialog
            const dialogRef = this.dialog.open(_shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["QuestionEditDialogComponent"], {
                width: '80%',
                height: '600px',
                data: this.question
            });
            // 3. Save user's changes to db
            // * See dialog
            // 4. Reload table
            dialogRef.afterClosed().subscribe(result => { location.reload(); });
        });
    }
};
SecurityQuestionsComponent.ctorParameters = () => [
    { type: _shared_services_security_question_service__WEBPACK_IMPORTED_MODULE_2__["SecurityQuestionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
SecurityQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-questions',
        template: __webpack_require__(/*! raw-loader!./security-questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/security-questions/security-questions.component.html"),
        providers: [_shared_services_security_question_service__WEBPACK_IMPORTED_MODULE_2__["SecurityQuestionService"]],
        styles: [__webpack_require__(/*! ./security-questions.component.css */ "./src/app/pages/security-questions/security-questions.component.css")]
    })
], SecurityQuestionsComponent);



/***/ }),

/***/ "./src/app/pages/server-error/server-error.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/server-error/server-error.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background-image: url('crashed-server.jpg');\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkNBQWdFO0FBQ3BFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jcmFzaGVkLXNlcnZlci5qcGcpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/server-error/server-error.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/server-error/server-error.component.ts ***!
  \**************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServerErrorComponent = class ServerErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-server-error',
        template: __webpack_require__(/*! raw-loader!./server-error.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/server-error/server-error.component.html"),
        styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/pages/server-error/server-error.component.css")]
    })
], ServerErrorComponent);



/***/ }),

/***/ "./src/app/pages/user-details/user-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-details/user-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: user-details.component.css (Week 6)\r\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\r\n; Date: 29 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6IHVzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIChXZWVrIDYpXHJcbjsgQXV0aG9yczogVHlsZXIgQXJtc3Ryb25nLCBbRGF2aWQgVGFydmluXSwgQWFyb24gV2lsc29uXHJcbjsgRGF0ZTogMjkgT2N0IDIwMTlcclxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcclxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxyXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi8iXX0= */"

/***/ }),

/***/ "./src/app/pages/user-details/user-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-details/user-details.component.ts ***!
  \**************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/*
; =======================================================
; Title:  user-details.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/





let UserDetailsComponent = class UserDetailsComponent {
    constructor(route, http, fb, router) {
        this.route = route;
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.userId = this.route.snapshot.paramMap.get('id');
        console.log('userId is ' + this.userId);
        this.http.get('/api/users/' + this.userId).subscribe(res => {
            console.log('The userId in the GET request is ' + this.userId);
            this.user = res;
            console.log('This user is ' + JSON.stringify(this.user));
        }, err => {
            console.log(err);
        }, () => {
            this.form.controls['firstName'].setValue(this.user.firstName);
            this.form.controls['lastName'].setValue(this.user.lastName);
            this.form.controls['phoneNumber'].setValue(this.user.phoneNumber);
            this.form.controls['address'].setValue(this.user.address);
            this.form.controls['email'].setValue(this.user.email);
        });
    }
    ngOnInit() {
        this.form = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    saveUser() {
        this.http.put('/api/users/update/' + this.userId, {
            firstName: this.form.controls['firstName'].value,
            lastName: this.form.controls['lastName'].value,
            phoneNumber: this.form.controls['phoneNumber'].value,
            address: this.form.controls['address'].value,
            email: this.form.controls['email'].value
        }).subscribe(res => {
            this.router.navigate(['/session/user-management']);
        });
    }
    cancel() {
        this.router.navigate(['/session/user-management']);
    }
};
UserDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.component.html"),
        styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/pages/user-details/user-details.component.css")]
    })
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/pages/user-management/user-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: user-management.component.css (Week 6)\r\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\r\n; Date: 29 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n\r\nng-container {\r\n  padding: 0 15px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDOztBQUVEO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IFRpdGxlOiB1c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyAoV2VlayA2KVxyXG47IEF1dGhvcnM6IFR5bGVyIEFybXN0cm9uZywgW0RhdmlkIFRhcnZpbl0sIEFhcm9uIFdpbHNvblxyXG47IERhdGU6IDI5IE9jdCAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXHJcbjsgTGVnZW5kOiBbXSAtPiBUZWFtIG1lbWJlciByZXNwb25zaWJsZSBmb3IgcGFnZS5cclxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG5uZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/user-delete-dialog/user-delete-dialog.component */ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/*
; =======================================================
; Title: user-management.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date: 29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






let UserManagementComponent = class UserManagementComponent {
    constructor(http, dialog, router) {
        this.http = http;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['username', 'firstName', 'lastName', 'phoneNumber', 'address', 'email', 'functions'];
        this.http.get('/api/users').subscribe(res => {
            this.users = res;
            console.log(this.users);
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
    edit(userId, username) {
        console.log('Username is ' + username);
        console.log('userId is ' + userId);
        this.router.navigate(['/session/user-details/' + userId]);
    }
    delete(userId, username) {
        const dialogRef = this.dialog.open(_shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["UserDeleteDialogComponent"], {
            data: {
                username: username
            },
            disableClose: true,
            width: '800px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'confirm') {
                this.http.delete('/api/users/' + userId).subscribe(res => {
                    console.log('User deleted');
                    this.users = this.users.filter(u => u._id !== userId);
                });
            }
            else if (result === 'cancel') {
                this.router.navigate(['/session/user-management']);
            }
        });
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: __webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-management/user-management.component.html"),
        styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/pages/user-management/user-management.component.css")]
    })
], UserManagementComponent);



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: base-layout.component.css (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  color: white;\r\n  background-color: #333333;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUM7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFzZS1sYXlvdXQvYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IFRpdGxlOiBiYXNlLWxheW91dC5jb21wb25lbnQuY3NzIChXZWVrIDYpXHJcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXHJcbjsgRGF0ZTogMjMgT2N0IDIwMTlcclxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcclxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxyXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbi5tZW51IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/*
; =======================================================
; Title: base-layout.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




let BaseLayoutComponent = class BaseLayoutComponent {
    constructor(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    ngOnInit() {
    }
    userLogout() {
        this.cookie.deleteAll();
        this.router.navigate(['/session/login']);
    }
};
BaseLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-layout',
        template: __webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html"),
        styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")]
    })
], BaseLayoutComponent);



/***/ }),

/***/ "./src/app/shared/guards/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/guards/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/*
; =======================================================
; Title:  auth-guard.service.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




let AuthGuardService = class AuthGuardService {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate(route, state) {
        const isAuthenticated = this.cookieService.get('isAuthenticated');
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/session/login']);
            return false;
        }
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



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
; =======================================================
*/




/***/ }),

/***/ "./src/app/shared/question-add-dialog/question-add-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/shared/question-add-dialog/question-add-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: question-add-dialog.component.css (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 29 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWFkZC1kaWFsb2cvcXVlc3Rpb24tYWRkLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWFkZC1kaWFsb2cvcXVlc3Rpb24tYWRkLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6IHF1ZXN0aW9uLWFkZC1kaWFsb2cuY29tcG9uZW50LmNzcyAoV2VlayA2KVxyXG47IEF1dGhvcnM6IFtUeWxlciBBcm1zdHJvbmddLCBEYXZpZCBUYXJ2aW4sIEFhcm9uIFdpbHNvblxyXG47IERhdGU6IDI5IE9jdCAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXHJcbjsgTGVnZW5kOiBbXSAtPiBUZWFtIG1lbWJlciByZXNwb25zaWJsZSBmb3IgcGFnZS5cclxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovIl19 */"

/***/ }),

/***/ "./src/app/shared/question-add-dialog/question-add-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/question-add-dialog/question-add-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QuestionAddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAddDialogComponent", function() { return QuestionAddDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/*
; =======================================================
; Title:  question-add-dialog.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




let QuestionAddDialogComponent = class QuestionAddDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
};
QuestionAddDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
QuestionAddDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-add-dialog',
        template: __webpack_require__(/*! raw-loader!./question-add-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/question-add-dialog/question-add-dialog.component.html"),
        styles: [__webpack_require__(/*! ./question-add-dialog.component.css */ "./src/app/shared/question-add-dialog/question-add-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], QuestionAddDialogComponent);



/***/ }),

/***/ "./src/app/shared/question-delete-dialog/question-delete-dialog.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/shared/question-delete-dialog/question-delete-dialog.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1kZWxldGUtZGlhbG9nL3F1ZXN0aW9uLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/question-delete-dialog/question-delete-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/question-delete-dialog/question-delete-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: QuestionDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDeleteDialogComponent", function() { return QuestionDeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/*
; =======================================================
; Title:  question-delete-dialog.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   30 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




let QuestionDeleteDialogComponent = class QuestionDeleteDialogComponent {
    constructor(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.questionText = data.questionText;
        console.log(this.questionText);
    }
    ngOnInit() {
    }
};
QuestionDeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
QuestionDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-delete-dialog',
        template: __webpack_require__(/*! raw-loader!./question-delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/question-delete-dialog/question-delete-dialog.component.html"),
        styles: [__webpack_require__(/*! ./question-delete-dialog.component.css */ "./src/app/shared/question-delete-dialog/question-delete-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], QuestionDeleteDialogComponent);



/***/ }),

/***/ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/shared/question-edit-dialog/question-edit-dialog.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: question-edit-dialog.component.css (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 29 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWVkaXQtZGlhbG9nL3F1ZXN0aW9uLWVkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tZWRpdC1kaWFsb2cvcXVlc3Rpb24tZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IFRpdGxlOiBxdWVzdGlvbi1lZGl0LWRpYWxvZy5jb21wb25lbnQuY3NzIChXZWVrIDYpXHJcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXHJcbjsgRGF0ZTogMjkgT2N0IDIwMTlcclxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcclxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxyXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi8iXX0= */"

/***/ }),

/***/ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/question-edit-dialog/question-edit-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuestionEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEditDialogComponent", function() { return QuestionEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/*
; =======================================================
; Title:  question-edit-dialog.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






let QuestionEditDialogComponent = class QuestionEditDialogComponent {
    constructor(data, fb, http, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.http = http;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.form = this.fb.group({
            questionText: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
        // tslint:disable-next-line: no-string-literal
        this.form.controls['questionText'].setValue(this.data.questionText);
    }
    onSubmit() {
        // 3. Save user's edits to db
        this.http.put(`/api/security-questions/update/${this.data._id}`, {
            // tslint:disable-next-line: no-string-literal
            questionText: this.form.controls['questionText'].value
        }).subscribe(res => {
            this.dialogRef.close();
        });
    }
    closeDialog() {
        this.dialogRef.close();
    }
};
QuestionEditDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
QuestionEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-edit-dialog',
        template: __webpack_require__(/*! raw-loader!./question-edit-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/question-edit-dialog/question-edit-dialog.component.html"),
        styles: [__webpack_require__(/*! ./question-edit-dialog.component.css */ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], QuestionEditDialogComponent);



/***/ }),

/***/ "./src/app/shared/services/security-question.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/security-question.service.ts ***!
  \**************************************************************/
/*! exports provided: SecurityQuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQuestionService", function() { return SecurityQuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/*
; =======================================================
; Title:  security-question.service.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/



let SecurityQuestionService = class SecurityQuestionService {
    constructor(http) {
        this.http = http;
    }
    get() {
        const apiURL = `/api/security-questions`;
        return this.http.get(apiURL);
    }
    getQuestionById(id) {
        const apiURL = `/api/security-questions/${id}`;
        return this.http.get(apiURL);
    }
};
SecurityQuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SecurityQuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SecurityQuestionService);



/***/ }),

/***/ "./src/app/shared/session-layout/session-layout.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/session-layout/session-layout.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: session-layout.component.css (Week 6)\r\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\r\n; Date: 23 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  color: white;\r\n  background-color: #333333;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Nlc3Npb24tbGF5b3V0L3Nlc3Npb24tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUM7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2Vzc2lvbi1sYXlvdXQvc2Vzc2lvbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IFRpdGxlOiBzZXNzaW9uLWxheW91dC5jb21wb25lbnQuY3NzIChXZWVrIDYpXHJcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXHJcbjsgRGF0ZTogMjMgT2N0IDIwMTlcclxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcclxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxyXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbi5tZW51IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/*
; =======================================================
; Title: session-layout.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




let SessionLayoutComponent = class SessionLayoutComponent {
    constructor(cookie, router) {
        this.cookie = cookie;
        this.router = router;
    }
    ngOnInit() {
    }
    userLogout() {
        this.cookie.deleteAll();
        this.router.navigate(['/session/login']);
    }
};
SessionLayoutComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SessionLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-layout',
        template: __webpack_require__(/*! raw-loader!./session-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/session-layout/session-layout.component.html"),
        styles: [__webpack_require__(/*! ./session-layout.component.css */ "./src/app/shared/session-layout/session-layout.component.css")]
    })
], SessionLayoutComponent);



/***/ }),

/***/ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/user-delete-dialog/user-delete-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n; =======================================================\r\n; Title: user-delete-dialog.component.css (Week 6)\r\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\r\n; Date: 29 Oct 2019\r\n; Description: Bob's Computer Repair Shop\r\n; Legend: [] -> Team member responsible for page.\r\n; =======================================================\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VzZXItZGVsZXRlLWRpYWxvZy91c2VyLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Q0FRQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLWRlbGV0ZS1kaWFsb2cvdXNlci1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBUaXRsZTogdXNlci1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MgKFdlZWsgNilcclxuOyBBdXRob3JzOiBUeWxlciBBcm1zdHJvbmcsIFtEYXZpZCBUYXJ2aW5dLCBBYXJvbiBXaWxzb25cclxuOyBEYXRlOiAyOSBPY3QgMjAxOVxyXG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxyXG47IExlZ2VuZDogW10gLT4gVGVhbSBtZW1iZXIgcmVzcG9uc2libGUgZm9yIHBhZ2UuXHJcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/user-delete-dialog/user-delete-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeleteDialogComponent", function() { return UserDeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/*
; =======================================================
; Title:  user-delete-dialog.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




let UserDeleteDialogComponent = class UserDeleteDialogComponent {
    constructor(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.username = data.username;
        console.log(this.username);
    }
    ngOnInit() {
    }
};
UserDeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-delete-dialog',
        template: __webpack_require__(/*! raw-loader!./user-delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/user-delete-dialog/user-delete-dialog.component.html"),
        styles: [__webpack_require__(/*! ./user-delete-dialog.component.css */ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UserDeleteDialogComponent);



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
; =======================================================
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
; =======================================================
; Title: main.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\a161120\bu-webdev\web450-group3-bobs-repair\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
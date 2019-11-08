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

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about-us/about-us.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"img-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img fxFlex=\"80%\" src=\"../../../assets/images/about-banner.jpg\" alt=\"\">\n  </div>\n  <div fxLayout=\"row\">\n    <div fxFlex=\"50%\">\n      <h1>Our Story</h1>\n      <p>\n        Long boat ahoy bring a spring upon her cable pillage barque log draught rope's end tack Spanish Main. No prey,\n        no pay American Main hearties brig Jack Tar gangplank crack Jennys tea cup yardarm tender spanker. Strike colors\n        Blimey tackle wherry crow's nest keel lanyard sutler aft ho.\n        Grog ye heave to trysail Davy Jones' Locker jib hogshead careen Nelsons folly square-rigged. Barbary Coast draft\n        starboard Privateer rum six pounders Spanish Main port tender loot. Dance the hempen jig splice the main brace\n        barkadeer bilge rat parrel clipper swing the lead aye Blimey Sea Legs.\n        Fire in the hole reef sails lass chandler cutlass dance the hempen jig skysail no prey, no pay list starboard.\n        Barque handsomely transom marooned killick lass prow to go on account measured fer yer chains hogshead. Chandler\n        keelhaul skysail Plate Fleet lad shrouds Pieces of Eight matey doubloon hogshead.\n      </p>\n    </div>\n    <div fxFlex=\"50%\">\n      <div class=\"team-member\" *ngFor=\"let member of members\">\n        <h3 style=\"text-align: center;\">{{member.name}}, {{member.position}}</h3>\n        <img src=\"{{member.image}}\" alt=\"{{member.name}}\" width=\"30%\" style=\"justify-content: center\">\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"img-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img fxFlex=\"80%\" src=\"../../../assets/images/contact-banner.jpg\" alt=\"\">\n  </div>\n\n  <div fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayoutGap=\"2%\" fxLayoutAlign=\"center center\">\n    <div class=\"card-wrapper\" fxFlex=\"35%\">\n      <mat-card>\n\n          <div class=\"icon-wrapper\">\n            <mat-icon color=\"primary\">phonelink_ring</mat-icon>\n            <br><br>\n          </div>\n          <mat-card-content>\n            <h4><strong>Sales Department</strong></h4>\n            <br>\n            <p>Need some help? All you need to do is pick up your phone and call to speak to a sales rep.</p>\n            <br>\n            <h1>123-456-7890</h1>\n          </mat-card-content>\n\n      </mat-card>\n    </div>\n\n    <div class=\"card-wrapper\" fxFlex=\"35%\">\n      <mat-card>\n        <div class=\"icon-wrapper\">\n          <mat-icon color=\"primary\">forum</mat-icon>\n          <br><br>\n        </div>\n        <mat-card-content>\n          <h4><strong>Customer Support</strong></h4>\n          <br>\n          <p>When things aren't going your way, don't worry our extremely qualified support team is here for you. </p>\n          <br><br>\n          <button mat-raised-button color=\"accent\">Customer Support</button>\n        </mat-card-content>\n\n      </mat-card>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: home.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<h1 style=\"text-align: center; margin-top: 100px;\">Welcome To Bob's Computer Repair</h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: login.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div class=\"container\">\n  <mat-card class=\"form\">\n    <mat-card-content>\n      <mat-card-title>Please sign in</mat-card-title>\n      <mat-card-subtitle><a [routerLink]=\"['/register']\">Register</a></mat-card-subtitle>\n      <small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\n      <small class=\"warn\"\n        *ngIf=\"form.controls['username'].hasError('required') && form.controls['username'].touched\">\n        Username is required\n      </small>\n      <br />\n      <small class=\"warn\"\n        *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">\n        Password is required\n      </small>\n      <form [formGroup]=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(form.value); form.reset()\">\n        <mat-form-field class=\"inputStyle\">\n          <input type=\"text\" matInput [formControl]=\"form.controls['username']\" placeholder=\"Username \" />\n        </mat-form-field>\n        <br />\n        <mat-form-field class=\"inputStyle\">\n          <input type=\"password\" matInput [formControl]=\"form.controls['password']\" placeholder=\"Password\" />\n        </mat-form-field>\n        <mat-card-actions>\n          <button\n            mat-raised-button\n            color=\"primary\"\n            [disabled]=\"!form.valid\"\n            type=\"submit\">Log in\n          </button>\n          <br /><br />\n          <small><a [routerLink]=\"['/forgot-password']\">Forgot Password?</a></small>\n        </mat-card-actions>\n      </form>\n      <br /><br />\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: not-found.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div class=\"container\">\n  <mat-card color=\"accent\" class=\"form\">\n    <mat-card-content class=\"message\">\n      <h1>Oops this page doesn't exist.</h1>\n      <h3 style=\"color: red;\">Error 404</h3>\n      <button (click)=\"goHome()\" mat-button color=\"primary\">\n        Home\n      </button>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: register.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n<div class=\"container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Please fill out the form to register</mat-card-title>\n      <mat-card-subtitle>Bob's Computer Repair Shop</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n\n      <small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\n\n      <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit(registrationForm.value)\">\n\n        <mat-form-field>\n          <input matInput placeholder=\"Username\" formControlName=\"username\">\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['username'].hasError('required') && registrationForm.controls['username'].touched\">\n                       Username is required\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['password'].hasError('required') && registrationForm.controls['password'].touched\">\n                       Password is required.\n            </mat-error>\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['password'].hasError('pattern') && registrationForm.controls['password'].touched\">\n                       Password requires at least 8 characters with one uppercase and one number.\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['firstName'].hasError('required') && registrationForm.controls['firstName'].touched\">\n                     Please enter your first name.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['lastName'].hasError('required') && registrationForm.controls['lastName'].touched\">\n                     Please enter your last name.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Phone Number\" formControlName=\"phoneNumber\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['phoneNumber'].hasError('required') && registrationForm.controls['phoneNumber'].touched\">\n                     Please enter your phone number.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Address\" formControlName=\"address\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['address'].hasError('required') && registrationForm.controls['address'].touched\">\n                     Please enter your address.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" formControlName=\"email\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['email'].hasError('email') && registrationForm.controls['email'].touched\">\n                     Not an email.\n          </mat-error>\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['email'].hasError('required') && registrationForm.controls['email'].touched\">\n                     Please enter your email.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select formControlName=\"securityQuestion1\" placeholder=\"Security Question\">\n            <mat-option *ngFor=\"let question of questions\" [value]=\"question._id\">\n              {{question.questionText}}\n            </mat-option>\n            <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['securityQuestion1'].hasError('required') && registrationForm.controls['securityQuestion1'].touched\">\n                     Please choose a security question.\n            </mat-error>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Answer\" formControlName=\"answer1\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['answer1'].hasError('required') && registrationForm.controls['answer1'].touched\">\n                     Please answer the security question.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select formControlName=\"securityQuestion2\" placeholder=\"Security Question\">\n            <mat-option *ngFor=\"let question of questions\" [value]=\"question._id\">\n              {{question.questionText}}\n            </mat-option>\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['securityQuestion2'].hasError('required') && registrationForm.controls['securityQuestion2'].touched\">\n                       Please choose a security question.\n            </mat-error>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Answer\" formControlName=\"answer2\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['answer2'].hasError('required') && registrationForm.controls['answer2'].touched\">\n                     Please answer the security question.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select formControlName=\"securityQuestion3\" placeholder=\"Security Question\">\n            <mat-option *ngFor=\"let question of questions\" [value]=\"question._id\">\n              {{question.questionText}}\n            </mat-option>\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['securityQuestion3'].hasError('required') && registrationForm.controls['securityQuestion3'].touched\">\n                       Please choose a security question.\n            </mat-error>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Answer\" formControlName=\"answer3\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['answer3'].hasError('required') && registrationForm.controls['answer3'].touched\">\n                     Please answer the security question.\n          </mat-error>\n        </mat-form-field>\n\n        <br>\n\n        <mat-card-actions>\n          <button mat-raised-button color=\"primary\" [disabled]=\"!registrationForm.valid\">\n            Register\n          </button>\n        </mat-card-actions>\n      </form>\n\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/role-configuration/role-configuration.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/role-configuration/role-configuration.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: role-configuration.component.html (Week 8)\n; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy, Aaron Wilson\n; Date: 5 Nov 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\n    <mat-card style=\"margin: 0 auto;\">\n      <mat-card-title>Roles</mat-card-title>\n      <mat-card-content *ngIf=\"roles\">\n        <table mat-table [dataSource]=\"roles\">\n\n          <ng-container matColumnDef=\"roleTitle\">\n            <th mat-header-cell *matHeaderCellDef>Role</th>\n            <td mat-cell *matCellDef=\"let element\">\n              {{ element.roleTitle }}\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <th mat-header-cell *matHeaderCellDef>Actions</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button (click)=\"edit(element._id)\">\n                <mat-icon color=\"accent\">create</mat-icon>\n              </button>\n              <button mat-icon-button (click)=\"delete(element._id, element.roleTitle)\">\n                <mat-icon color=\"warn\">delete_forever</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n        </table>\n      </mat-card-content>\n      <mat-card-actions>\n        <div fxFlex></div>\n        <button mat-button color=\"primary\"><mat-icon>add_box</mat-icon>Add New</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/role-edit/role-edit.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/role-edit/role-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-card class=\"form\">\n      <mat-card-content>\n\n        <h2>Edit</h2>\n\n        <form [formGroup]=\"form\" #editRoleForm (ngSubmit)=\"saveRole(); form.reset()\">\n          <mat-form-field class=\"inputStyle\">\n            <input type=\"text\" matInput [formControl]=\"form.controls['roleTitle']\" placeholder=\"Edit role\" />\n          </mat-form-field>\n\n          <br>\n\n          <mat-card-actions align=\"end\">\n              <button mat-raised-button (click)=\"cancel()\" color=\"warn\">Cancel</button>\n              <button mat-raised-button color=\"accent\">Submit</button>\n            </mat-card-actions>\n        </form>\n        <br /><br />\n      </mat-card-content>\n    </mat-card>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/security-questions/security-questions.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/security-questions/security-questions.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: security-questions.component.html (Week 6)\n; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\n  <mat-card style=\"margin: 0 auto;\">\n    <mat-card-title>Security Questions</mat-card-title>\n    <mat-card-content *ngIf=\"data\">\n      <table mat-table [dataSource]=\"data\">\n\n        <ng-container matColumnDef=\"questionText\">\n          <th mat-header-cell *matHeaderCellDef>Question</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.questionText }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef>Actions</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button (click)=\"edit(element._id)\">\n              <mat-icon color=\"accent\">create</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"delete(element._id, element.questionText)\">\n              <mat-icon color=\"warn\">delete_forever</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n      </table>\n    </mat-card-content>\n    <mat-card-actions>\n      <div fxFlex></div>\n      <button mat-button color=\"primary\"><mat-icon>add_box</mat-icon>Add New</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/server-error/server-error.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/server-error/server-error.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"message\">\n        <h1>500 Internal Server Error</h1>\n        <p>Something went wrong with the website's server.<br>Man, I wish we knew what it was.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-details/user-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: user-details.component.html (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\n  <mat-card style=\"width: 90%; margin: 0 auto;\" class=\"mat-elevation-z8\">\n    <mat-card-title>User Details</mat-card-title>\n    <mat-card-subtitle>\n      <button mat-button color=\"accent\">Edit</button>\n    </mat-card-subtitle>\n\n    <br>\n    <form [formGroup]=\"form\" (ngSubmit)=\"saveUser()\" #userForm>\n      <mat-card-content>\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['firstName']\" placeholder=\"First Name\"/>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['lastName']\" placeholder=\"Last Name\"/>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['phoneNumber']\" placeholder=\"Phone Number\"/>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['address']\" placeholder=\"Address\"/>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['email']\" placeholder=\"Email\"/>\n          </mat-form-field>\n        </div>\n      </mat-card-content>\n\n      <br>\n      <mat-card-actions align=\"end\">\n        <button mat-raised-button (click)=\"cancel()\" color=\"warn\">Cancel</button>\n        <button mat-raised-button color=\"accent\">Submit</button>\n      </mat-card-actions>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-management/user-management.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-management/user-management.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: user-management.component.html (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\n  <mat-card style=\"width: 90%; margin: 0 auto;\">\n    <mat-card-title>Users Configuration</mat-card-title>\n    <mat-card-content *ngIf=\"users\">\n      <table mat-table [dataSource]=\"users\">\n\n        <ng-container matColumnDef=\"username\">\n          <th mat-header-cell *matHeaderCellDef>Username</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.username }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"firstName\">\n          <th mat-header-cell *matHeaderCellDef>First Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.firstName }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"lastName\">\n          <th mat-header-cell *matHeaderCellDef>Last Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.lastName }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"phoneNumber\">\n          <th mat-header-cell *matHeaderCellDef>Phone Number</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.phoneNumber }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"address\">\n          <th mat-header-cell *matHeaderCellDef>Address</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.address }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef>Email</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.email }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"functions\">\n          <th mat-header-cell *matHeaderCellDef>Functions</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button (click)=\"edit(element._id, element.username)\">\n              <mat-icon color=\"accent\">edit</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"delete(element._id, element.username)\">\n              <mat-icon color=\"warn\">delete</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n      </table>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reset-password-form/reset-password-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reset-password-form/reset-password-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center start\">\n  <div fxFlex.gt-sm=\"55\" fxFlex=\"100\">\n    <mat-card style=\"width: 80%;\" class=\"pa-0\">\n      <mat-card-title style=\"text-align: center; font-size: 48px; font-weight: lighter;\" class=\"mat-headline\">\n        Change Password\n      </mat-card-title>\n      <br><br>\n      <form [formGroup]=\"form\" (ngSubmit)=\"resetPassword()\" #resetPasswordForm>\n        <mat-card-content fxLayout=\"column\">\n          <mat-form-field fxFlex>\n            <input matInput type=\"password\" [formControl]=\"form.controls['password']\" placeholder=\"New password\">\n            <mat-error class=\"warn\"\n                       *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">\n                       Password is required.\n            </mat-error>\n            <mat-error class=\"warn\"\n                       *ngIf=\"form.controls['password'].hasError('pattern') && form.controls['password'].touched\">\n                       Password requires at least 8 characters with one uppercase and one number.\n            </mat-error>\n          </mat-form-field>\n          <br><br>\n          <div fxFlex fxLayoutAlign=\"end\">\n            <button mat-raised-button color=\"accent\" [disabled]=\"!form.valid\">Submit</button>\n          </div>\n        </mat-card-content>\n      </form>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: base-layout.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div>\n  <!-- Page header -->\n  <header>\n    <!-- Toolbar -->\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\n      <mat-toolbar-row>\n        <button [routerLink]=\"['/']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">BCRS</span>\n        </button>\n        <button [routerLink]=\"['/contact']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">Contact Us</span>\n        </button>\n        <button [routerLink]=\"['/about-us']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">About Us</span>\n        </button>\n        <button *ngIf=\"validated == false\" mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/login']\">\n          <span style=\"margin-left: 5px !important\">Login</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/session/security-questions']\">\n          <span style=\"margin-left: 5px !important\" >Security Questions</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/session/user-management']\">\n          <span style=\"margin-left: 5px !important\" >User Management</span>\n        </button>\n\n        <div fxFlex></div>\n\n        <button mat-icon-button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\">\n          <mat-icon>exit_to_app</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"userLogout()\">\n            <span>Logout</span>\n          </button>\n        </mat-menu>\n        \n      </mat-toolbar-row>\n    </mat-toolbar>\n  </header>\n  </div>\n\n  <!-- Main page content -->\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/question-add-dialog/question-add-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/question-add-dialog/question-add-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: question-add-dialog.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<p>question-add-dialog works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/question-delete-dialog/question-delete-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/question-delete-dialog/question-delete-dialog.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: question-delete-dialog.component.html (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 30 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<mat-dialog-content>\n  <div fxLayout=\"column\">\n    <mat-card class=\"mat-elevation-z8\">\n      <mat-card-title style=\"font-weight: darker; text-align: center;\">\n        Delete Security Question\n      </mat-card-title>\n      <br><br>\n      <mat-card-content>\n        Do you wish to delete the question {{ questionText }}?\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button mat-raised-button matDialogClose=\"confirm\" color=\"primary\">Confirm</button>\n        <button mat-raised-button matDialogClose=\"cancel\" color=\"warn\">Cancel</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/question-edit-dialog/question-edit-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/question-edit-dialog/question-edit-dialog.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card class=\"form\">\n    <mat-card-content>\n\n      <h2>Edit</h2>\n\n      <!-- <small class=\"warn\"\n        *ngIf=\"form.controls['selectedQuestion'].hasError('required') && form.controls['selectedQuestion'].touched\">\n        A question required.\n      </small> -->\n\n      <form [formGroup]=\"form\" #editForm=\"ngForm\" (ngSubmit)=\"onSubmit(form.value); form.reset()\">\n        <mat-form-field class=\"inputStyle\">\n          <input type=\"text\" matInput [formControl]=\"form.controls['questionText']\" placeholder=\"Edit question\" />\n        </mat-form-field>\n\n        <br>\n\n        <mat-card-actions>\n          <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid\">\n            Save\n          </button>\n          <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">\n            Cancel\n          </button>\n        </mat-card-actions>\n      </form>\n      <br /><br />\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/role-delete-dialog/role-delete-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/role-delete-dialog/role-delete-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: role-delete-dialog.component.html (Week 7)\n; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy\n; Date: 06 Nov 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<mat-dialog-content>\n    <div fxLayout=\"column\">\n      <mat-card class=\"mat-elevation-z8\">\n        <mat-card-title style=\"font-weight: darker; text-align: center;\">\n          Delete Role\n        </mat-card-title>\n        <br><br>\n        <mat-card-content>\n          Do you wish to delete role {{ roleTitle }}?\n        </mat-card-content>\n        <mat-card-actions align=\"end\">\n          <button mat-raised-button matDialogClose=\"confirm\" color=\"primary\">Confirm</button>\n          <button mat-raised-button matDialogClose=\"cancel\" color=\"warn\">Cancel</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </mat-dialog-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/session-layout/session-layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/session-layout/session-layout.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: session-layout.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n<div>\n  <!-- Page header -->\n  <header>\n    <!-- Toolbar -->\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\n      <mat-toolbar-row>\n        <button [routerLink]=\"['/']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">BCRS</span>\n        </button>\n        <button [routerLink]=\"['/contact']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">Contact Us</span>\n        </button>\n        <button [routerLink]=\"['/about-us']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">About Us</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\"\n          [routerLink]=\"['/session/security-questions']\">\n          <span style=\"margin-left: 5px !important\">Security Questions</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\"\n          [routerLink]=\"['/session/user-management']\">\n          <span style=\"margin-left: 5px !important\">User Management</span>\n        </button>\n\n  <div>\n    <!-- Page header -->\n    <header>\n      <!-- Toolbar -->\n      <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\n        <mat-toolbar-row>\n            <button mat-button class=\"toolbar__icon-button mat-button\">\n              <mat-icon>menu</mat-icon>\n            </button>\n          <button mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/']\">\n            <span style=\"margin-left: 5px !important\" >Bob's</span>\n          </button>\n          <button [routerLink]=\"['/contact']\" mat-button class=\"toolbar__icon-button mat-button\">\n            <span style=\"margin-left: 5px !important\">Contact Us</span>\n          </button>\n          <button [routerLink]=\"['/about-us']\" mat-button class=\"toolbar__icon-button mat-button\">\n            <span style=\"margin-left: 5px !important\">About Us</span>\n          </button>\n          <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/session/security-questions']\">\n            <span style=\"margin-left: 5px !important\" >Security Questions</span>\n          </button>\n          <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/session/user-management']\">\n            <span style=\"margin-left: 5px !important\" >User Management</span>\n          </button>\n          <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/session/role-configuration']\">\n            <span style=\"margin-left: 5px !important\" >Role Configuration</span>\n          </button>\n\n          <div fxFlex></div>\n\n        <button mat-icon-button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\">\n          <mat-icon>exit_to_app</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"userLogout()\">\n            <span>Logout</span>\n          </button>\n        </mat-menu>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </header>\n</div>\n\n<!-- Main page content -->\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/user-delete-dialog/user-delete-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/user-delete-dialog/user-delete-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: user-delete-dialog.component.html (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<mat-dialog-content>\n  <div fxLayout=\"column\">\n    <mat-card class=\"mat-elevation-z8\">\n      <mat-card-title style=\"font-weight: darker; text-align: center;\">\n        Delete User\n      </mat-card-title>\n      <br><br>\n      <mat-card-content>\n        Do you wish to delete user {{ username }}?\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button mat-raised-button matDialogClose=\"confirm\" color=\"primary\">Confirm</button>\n        <button mat-raised-button matDialogClose=\"cancel\" color=\"warn\">Cancel</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/verify-security-questions-form/verify-security-questions-form.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verify-security-questions-form/verify-security-questions-form.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center start\">\n  <div fxFlex.gt-sm=\"55\" fxFlex=\"100\">\n    <mat-card style=\"width: 80%;\" class=\"pa-0\">\n      <mat-card-title style=\"text-align: center; font-size: 48px; font-weight: lighter;\" class=\"mat-headline\">\n        Verify Security Questions\n      </mat-card-title>\n      <br><br>\n      <form *ngIf=\"user\" [formGroup]=\"form\" (ngSubmit)=\"verifySecurityQuestions()\" #usernameForm>\n        <mat-card-content fxLayout=\"column\">\n\n          <mat-list>\n            <mat-list-item>\n              {{question1}} &nbsp; &nbsp;\n              <mat-form-field fxFlex>\n                <input matInput [formControl]=\"form.controls['answerToSecurityQuestion1']\" placeholder=\"Answer 1\">\n              </mat-form-field>\n            </mat-list-item>\n\n            <mat-list-item>\n              {{question2}} &nbsp; &nbsp;\n              <mat-form-field fxFlex>\n                <input matInput [formControl]=\"form.controls['answerToSecurityQuestion2']\" placeholder=\"Answer 1\">\n              </mat-form-field>\n            </mat-list-item>\n\n            <mat-list-item>\n             {{question3}} &nbsp; &nbsp;\n              <mat-form-field fxFlex>\n                <input matInput [formControl]=\"form.controls['answerToSecurityQuestion3']\" placeholder=\"Answer 1\">\n              </mat-form-field>\n            </mat-list-item>\n          </mat-list>\n          <br><br>\n          <h3 *ngIf='wrongAnswer' style=\"color: red\">One or more of your answers was incorrect.</h3>\n          <div fxFlex fxLayoutAlign=\"end\">\n            <button mat-raised-button color=\"accent\">Submit</button>\n          </div>\n        </mat-card-content>\n      </form>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/verify-username-form/verify-username-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verify-username-form/verify-username-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center start\">\n  <div fxFlex.gt-sm=\"55\" fxFlex=\"100\">\n    <!-- <div *ngIf='!user'> -->\n      <mat-card style=\"width: 80%;\" class=\"mat-card-top pa-0\">\n        <mat-card-title class=\"mat-headline\" style=\"text-align: center; font-size: 48px; font-weight: lighter;\">Verify User</mat-card-title>\n        <br><br>\n        <form  [formGroup]=\"form1\" (ngSubmit)=\"validateUsername()\" #usernameForm>\n          <mat-card-content fxLayout=\"column\">\n            <mat-form-field fxFlex>\n              <input matInput [formControl]=\"form1.controls['username']\" placeholder=\"User name\" />\n            </mat-form-field>\n            <br><br>\n            <div fxFlex fxLayoutAlign=\"end\">\n              <h3 *ngIf=\"notAUser\" style=\"color: red;\">That user does not exist.</h3>\n              <button mat-raised-button color=\"accent\">Submit</button>\n            </div>\n          </mat-card-content>\n        </form>\n      </mat-card>\n    <!-- </div> -->\n\n    <!-- <div *ngIf='user'>\n      <<mat-card style=\"width: 80%;\" class=\"mat-card-top pa-0\">\n        <mat-card-title style=\"text-align: center; font-size: 48px; font-weight: lighter;\" class=\"mat-headline\">\n          Verify Security Questions\n        </mat-card-title>\n        <br><br>\n        <form *ngIf=\"selectedSecurityQuestions\" [formGroup]=\"form\" (ngSubmit)=\"verifySecurityQuestions()\" #usernameForm>\n          <mat-card-content fxLayout=\"column\">\n\n            <mat-list>\n              <mat-list-item>\n                {{question1}} &nbsp; &nbsp;\n                <mat-form-field fxFlex>\n                  <input matInput [formControl]=\"form.controls['answerToSecurityQuestion1']\" placeholder=\"Answer 1\">\n                </mat-form-field>\n              </mat-list-item>\n\n              <mat-list-item>\n                {{question2}} &nbsp; &nbsp;\n                <mat-form-field fxFlex>\n                  <input matInput [formControl]=\"form.controls['answerToSecurityQuestion2']\" placeholder=\"Answer 1\">\n                </mat-form-field>\n              </mat-list-item>\n\n              <mat-list-item>\n                {{question3}} &nbsp; &nbsp;\n                <mat-form-field fxFlex>\n                  <input matInput [formControl]=\"form.controls['answerToSecurityQuestion3']\" placeholder=\"Answer 1\">\n                </mat-form-field>\n              </mat-list-item>\n            </mat-list>\n            <br><br>\n            <div fxFlex fxLayoutAlign=\"end\">\n              <button mat-raised-button color=\"accent\">Submit</button>\n            </div>\n          </mat-card-content>\n        </form>\n      </mat-card>\n    </div> -->\n  </div>\n</div>\n"

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
; =======================================================
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
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/guards/auth-guard.service */ "./src/app/shared/guards/auth-guard.service.ts");
/* harmony import */ var _shared_route_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/route-interceptors/error.interceptor */ "./src/app/shared/route-interceptors/error.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/session-layout/session-layout.component */ "./src/app/shared/session-layout/session-layout.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/security-questions/security-questions.component */ "./src/app/pages/security-questions/security-questions.component.ts");
/* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/user-details/user-details.component */ "./src/app/pages/user-details/user-details.component.ts");
/* harmony import */ var _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/question-edit-dialog/question-edit-dialog.component */ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.ts");
/* harmony import */ var _shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/user-delete-dialog/user-delete-dialog.component */ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.ts");
/* harmony import */ var _shared_question_add_dialog_question_add_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/question-add-dialog/question-add-dialog.component */ "./src/app/shared/question-add-dialog/question-add-dialog.component.ts");
/* harmony import */ var _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/question-delete-dialog/question-delete-dialog.component */ "./src/app/shared/question-delete-dialog/question-delete-dialog.component.ts");
/* harmony import */ var _verify_username_form_verify_username_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./verify-username-form/verify-username-form.component */ "./src/app/verify-username-form/verify-username-form.component.ts");
/* harmony import */ var _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./verify-security-questions-form/verify-security-questions-form.component */ "./src/app/verify-security-questions-form/verify-security-questions-form.component.ts");
/* harmony import */ var _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./reset-password-form/reset-password-form.component */ "./src/app/reset-password-form/reset-password-form.component.ts");
/* harmony import */ var _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/server-error/server-error.component */ "./src/app/pages/server-error/server-error.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _pages_role_configuration_role_configuration_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/role-configuration/role-configuration.component */ "./src/app/pages/role-configuration/role-configuration.component.ts");
/* harmony import */ var _shared_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./shared/role-delete-dialog/role-delete-dialog.component */ "./src/app/shared/role-delete-dialog/role-delete-dialog.component.ts");
/* harmony import */ var _pages_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/role-edit/role-edit.component */ "./src/app/pages/role-edit/role-edit.component.ts");
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




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_12__["BaseLayoutComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _shared_session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_14__["SessionLayoutComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_17__["SecurityQuestionsComponent"],
                _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_18__["UserManagementComponent"],
                _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_20__["UserDetailsComponent"],
                _shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_22__["UserDeleteDialogComponent"],
                _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_21__["QuestionEditDialogComponent"],
                _shared_question_add_dialog_question_add_dialog_component__WEBPACK_IMPORTED_MODULE_23__["QuestionAddDialogComponent"],
                _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_24__["QuestionDeleteDialogComponent"],
                _verify_username_form_verify_username_form_component__WEBPACK_IMPORTED_MODULE_25__["VerifyUsernameFormComponent"],
                _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_26__["VerifySecurityQuestionsFormComponent"],
                _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_27__["ResetPasswordFormComponent"],
                _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_28__["ServerErrorComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__["ContactComponent"],
                _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_30__["AboutUsComponent"],
                _pages_role_configuration_role_configuration_component__WEBPACK_IMPORTED_MODULE_47__["RoleConfigurationComponent"],
                _shared_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_48__["RoleDeleteDialogComponent"],
                _pages_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_49__["RoleEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"], { useHash: true, enableTracing: false }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_31__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_32__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__["MatSidenavModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_38__["MatInputModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDividerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatDialogModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_43__["MatSelectModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_46__["CarouselModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _shared_route_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [_shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_22__["UserDeleteDialogComponent"], _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_21__["QuestionEditDialogComponent"], _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_24__["QuestionDeleteDialogComponent"],
                _shared_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_48__["RoleDeleteDialogComponent"]]
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
/* harmony import */ var _pages_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/role-edit/role-edit.component */ "./src/app/pages/role-edit/role-edit.component.ts");
/* harmony import */ var _pages_role_configuration_role_configuration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/role-configuration/role-configuration.component */ "./src/app/pages/role-configuration/role-configuration.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/security-questions/security-questions.component */ "./src/app/pages/security-questions/security-questions.component.ts");
/* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
/* harmony import */ var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/user-details/user-details.component */ "./src/app/pages/user-details/user-details.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/guards/auth-guard.service */ "./src/app/shared/guards/auth-guard.service.ts");
/* harmony import */ var _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/server-error/server-error.component */ "./src/app/pages/server-error/server-error.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./verify-security-questions-form/verify-security-questions-form.component */ "./src/app/verify-security-questions-form/verify-security-questions-form.component.ts");
/* harmony import */ var _verify_username_form_verify_username_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./verify-username-form/verify-username-form.component */ "./src/app/verify-username-form/verify-username-form.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reset-password-form/reset-password-form.component */ "./src/app/reset-password-form/reset-password-form.component.ts");

















var AppRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '',
        component: _shared__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"],
        children: [
            { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
            { path: 'server-error', component: _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__["ServerErrorComponent"] },
            { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"] },
            { path: 'forgot-password', component: _verify_username_form_verify_username_form_component__WEBPACK_IMPORTED_MODULE_14__["VerifyUsernameFormComponent"] },
            { path: 'verify-security-questions', component: _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_13__["VerifySecurityQuestionsFormComponent"] },
            { path: 'forgot-password/:username', component: _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_13__["VerifySecurityQuestionsFormComponent"] },
            { path: 'reset-password', component: _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_16__["ResetPasswordFormComponent"] },
            { path: 'about-us', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__["AboutUsComponent"] }
        ]
    },
    { path: 'session', component: _shared__WEBPACK_IMPORTED_MODULE_2__["SessionLayoutComponent"],
        children: [
            { path: 'security-questions', component: _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_6__["SecurityQuestionsComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
            { path: 'user-management', component: _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__["UserManagementComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
            { path: 'user-details/:id', component: _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
            { path: 'role-configuration', component: _pages_role_configuration_role_configuration_component__WEBPACK_IMPORTED_MODULE_1__["RoleConfigurationComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
            { path: 'role-edit/:id', component: _pages_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_0__["RoleEditComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
            { path: '404', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
        ]
    },
    { path: '**', redirectTo: 'session/404' }
];


/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 150px;\n}\n\n.story-wrapper {\n  text-align: center;\n}\n\n.team-member{\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n\np {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5cbi5zdG9yeS13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVhbS1tZW1iZXJ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title: about us page
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 4 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.members = [
            {
                name: 'Bob',
                image: '../../../assets/images/employees/bob.jpg',
                position: 'Owner'
            },
            {
                name: 'Janet',
                image: '../../../assets/images/employees/janet.jpg',
                position: 'Manager'
            },
            {
                name: 'Jane',
                image: '../../../assets/images/employees/jane.jpg',
                position: 'Sales'
            }
        ];
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/about-us/about-us.component.css")]
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-wrapper {\n  margin-top: 150px;\n}\n\n.card-wrapper {\n  margin-top: -50px;\n}\n\n/* .mat-card {\n  width: 500px;\n} */\n\n.icon-wrapper {\n  text-align: center;\n}\n\n.icon-wrapper h5 {\n  text-align: center;\n  color: #333333;\n}\n\n.mat-icon {\n  font-size: 50px;\n}\n\n.mat-card-content {\n  text-align: center;\n}\n\n.mat-card-content p {\n  font-size: 16px;\n  color: #333333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5cbi5jYXJkLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuLyogLm1hdC1jYXJkIHtcbiAgd2lkdGg6IDUwMHB4O1xufSAqL1xuXG4uaWNvbi13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbi13cmFwcGVyIGg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title: contact us page
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 3 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: home.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IGhvbWUuY29tcG9uZW50LmNzcyAoV2VlayA2KVxuOyBBdXRob3JzOiBbVHlsZXIgQXJtc3Ryb25nXSwgRGF2aWQgVGFydmluLCBBYXJvbiBXaWxzb25cbjsgRGF0ZTogMjMgT2N0IDIwMTlcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXG47IExlZ2VuZDogW10gLT4gVGVhbSBtZW1iZXIgcmVzcG9uc2libGUgZm9yIHBhZ2UuXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG4iXX0= */"

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
; =======================================================
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

module.exports = "/*\n; =======================================================\n; Title: login.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n\n\n.container {\n  width: 40%;\n  margin: 0 auto;\n  margin-top: 200px;\n}\n\n\n.mat-card {\n  text-align: center;\n}\n\n\n.mat-form-field {\n  width: 90%;\n  font-size: 1.5em;\n}\n\n\n.mat-form-field:first-of-type {\n  margin-top: 20px;\n}\n\n\n.mat-card-actions .mat-raised-button {\n  width: 90%;\n  margin-top: 25px;\n}\n\n\n.mat-card-content>:last-child:not(.mat-card-footer), .mat-card>:last-child:not(.mat-card-footer) {\n  margin-bottom: -25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Q0FRQzs7O0FBR0Q7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogbG9naW4uY29tcG9uZW50LmNzcyAoV2VlayA2KVxuOyBBdXRob3JzOiBbVHlsZXIgQXJtc3Ryb25nXSwgRGF2aWQgVGFydmluLCBBYXJvbiBXaWxzb25cbjsgRGF0ZTogMjMgT2N0IDIwMTlcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXG47IExlZ2VuZDogW10gLT4gVGVhbSBtZW1iZXIgcmVzcG9uc2libGUgZm9yIHBhZ2UuXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4ubWF0LWZvcm0tZmllbGQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50PjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSwgLm1hdC1jYXJkPjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSB7XG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xufVxuIl19 */"

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
; =======================================================
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
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var apiBaseURL = '/api/login/';
        // tslint:disable-next-line: no-string-literal
        var username = this.form.controls['username'].value;
        // tslint:disable-next-line: no-string-literal
        var password = this.form.controls['password'].value;
        this.http.post(apiBaseURL, {
            username: username,
            password: password
        }).subscribe(function (res) {
            if (res) {
                _this.cookie.set('isAuthenticated', 'true', 1);
                _this.cookie.set(username, 'true', 1);
                _this.router.navigate(['/session/user-management']);
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

module.exports = "/*\n; =======================================================\n; Title: not-found.component.css (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n\nhtml, body {\n    height: 100%;\n}\n\n.container {\n    background-image: url('magnifying-glass-computer.jpg'); /* image source: https://win10faq.com/change-font-sizes-icon-sizes-windows-10/ */\n    height: 100vh;\n    width: 100%;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.message {\n    width: 100%;\n    height: 45%;\n    bottom: 0;\n    display: block;\n    position: absolute;\n    color: #fff;\n    padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDOztBQUVEO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNEQUE2RSxFQUFFLGdGQUFnRjtJQUMvSixhQUFhO0lBQ2IsV0FBVztJQUNYLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IG5vdC1mb3VuZC5jb21wb25lbnQuY3NzIChXZWVrIDYpXG47IEF1dGhvcnM6IFR5bGVyIEFybXN0cm9uZywgW0RhdmlkIFRhcnZpbl0sIEFhcm9uIFdpbHNvblxuOyBEYXRlOiAyMyBPY3QgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcbjsgTGVnZW5kOiBbXSAtPiBUZWFtIG1lbWJlciByZXNwb25zaWJsZSBmb3IgcGFnZS5cbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFnbmlmeWluZy1nbGFzcy1jb21wdXRlci5qcGcnKTsgLyogaW1hZ2Ugc291cmNlOiBodHRwczovL3dpbjEwZmFxLmNvbS9jaGFuZ2UtZm9udC1zaXplcy1pY29uLXNpemVzLXdpbmRvd3MtMTAvICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC41ZW07XG59Il19 */"

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
; =======================================================
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

module.exports = "/*\n; =======================================================\n; Title: register.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n\n.warn {\n  color: red;\n}\n\n.container {\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 200px;\n}\n\n.mat-card {\n  text-align: center;\n}\n\n.mat-form-field {\n  width: 90%;\n  font-size: 1.5em;\n}\n\n.mat-form-field:first-of-type {\n  margin-top: 20px;\n}\n\n.mat-card-actions .mat-raised-button {\n  width: 90%;\n  margin-top: 25px;\n}\n\n.mat-card-content>:last-child:not(.mat-card-footer), .mat-card>:last-child:not(.mat-card-footer) {\n  margin-bottom: -25px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Q0FRQzs7QUFFRDtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogcmVnaXN0ZXIuY29tcG9uZW50LmNzcyAoV2VlayA2KVxuOyBBdXRob3JzOiBbVHlsZXIgQXJtc3Ryb25nXSwgRGF2aWQgVGFydmluLCBBYXJvbiBXaWxzb25cbjsgRGF0ZTogMjMgT2N0IDIwMTlcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXG47IExlZ2VuZDogW10gLT4gVGVhbSBtZW1iZXIgcmVzcG9uc2libGUgZm9yIHBhZ2UuXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbi53YXJuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4ubWF0LWZvcm0tZmllbGQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50PjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSwgLm1hdC1jYXJkPjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSB7XG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xufVxuXG4iXX0= */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
; =======================================================
; Title: register.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(cookie, router, fb, http) {
        var _this = this;
        this.cookie = cookie;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.http.get('/api/security-questions').subscribe(function (res) {
            _this.questions = res;
        }, function (err) {
            console.log(err);
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#%*?&]{8,}$')
            ]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('standard'),
            securityQuestion1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            answer1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            securityQuestion2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            answer2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            securityQuestion3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            answer3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        // 1. Get form values
        var username = this.registrationForm.get('username').value;
        var password = this.registrationForm.get('password').value;
        var firstName = this.registrationForm.get('firstName').value;
        var lastName = this.registrationForm.get('lastName').value;
        var phoneNumber = this.registrationForm.get('phoneNumber').value;
        var address = this.registrationForm.get('address').value;
        var email = this.registrationForm.get('email').value;
        var role = this.registrationForm.get('role').value;
        var securityQuestion1 = this.registrationForm.get('securityQuestion1').value;
        var answer1 = this.registrationForm.get('answer1').value;
        var securityQuestion2 = this.registrationForm.get('securityQuestion2').value;
        var answer2 = this.registrationForm.get('answer2').value;
        var securityQuestion3 = this.registrationForm.get('securityQuestion3').value;
        var answer3 = this.registrationForm.get('answer3').value;
        // 2. Create new user object literal from form values
        var newUser = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            address: address,
            email: email,
            role: role,
            selectedSecurityQuestions: [
                { questionId: securityQuestion1, answerText: answer1 },
                { questionId: securityQuestion2, answerText: answer2 },
                { questionId: securityQuestion3, answerText: answer3 }
            ]
        };
        console.log(newUser);
        // 3. Post new user to db
        var apiBaseURL = '/api/users';
        this.http.post(apiBaseURL, newUser).subscribe(function (res) {
            if (res) {
                _this.cookie.set('isAuthenticated', 'true', 1);
                _this.cookie.set(username, 'true', 1);
                _this.router.navigate(['/session/user-management']);
            }
            else {
                _this.errorMessage = 'Something went wrong.';
                console.log("Error: " + _this.errorMessage);
            }
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
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

/***/ "./src/app/pages/role-configuration/role-configuration.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/role-configuration/role-configuration.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUtY29uZmlndXJhdGlvbi9yb2xlLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/role-configuration/role-configuration.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/role-configuration/role-configuration.component.ts ***!
  \**************************************************************************/
/*! exports provided: RoleConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleConfigurationComponent", function() { return RoleConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/role-delete-dialog/role-delete-dialog.component */ "./src/app/shared/role-delete-dialog/role-delete-dialog.component.ts");
/*
; =======================================================
; Title: role-configuration.component.ts (Week 7)
; Authors: [Tyler Armstrong], [David Tarvin], Lea Trueworthy
; Date: 06 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






var RoleConfigurationComponent = /** @class */ (function () {
    function RoleConfigurationComponent(http, router, dialog) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['roleTitle', 'actions'];
        this.http.get('/api/roles').subscribe(function (res) {
            _this.roles = res;
            console.log(_this.roles);
        }, function (err) {
            console.log(err);
        });
    }
    RoleConfigurationComponent.prototype.ngOnInit = function () {
    };
    RoleConfigurationComponent.prototype.edit = function (roleId) {
        this.router.navigate(['/session/role-edit/' + roleId]);
    };
    RoleConfigurationComponent.prototype.delete = function (roleId, roleTitle) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["RoleDeleteDialogComponent"], {
            data: {
                roleTitle: roleTitle
            },
            disableClose: true,
            width: '800px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'confirm') {
                _this.http.delete('/api/roles/' + roleId).subscribe(function (res) {
                    console.log('Role deleted');
                    _this.roles = _this.roles.filter(function (r) { return r._id !== roleId; });
                });
            }
            else if (result === 'cancel') {
                _this.router.navigate(['/session/role-configuration']);
            }
        });
    };
    RoleConfigurationComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    RoleConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-configuration',
            template: __webpack_require__(/*! raw-loader!./role-configuration.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/role-configuration/role-configuration.component.html"),
            styles: [__webpack_require__(/*! ./role-configuration.component.css */ "./src/app/pages/role-configuration/role-configuration.component.css")]
        })
    ], RoleConfigurationComponent);
    return RoleConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/pages/role-edit/role-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/role-edit/role-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUtZWRpdC9yb2xlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/role-edit/role-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/role-edit/role-edit.component.ts ***!
  \********************************************************/
/*! exports provided: RoleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleEditComponent", function() { return RoleEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title:  role-edit.component.ts (Week 7)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date:   06 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/





var RoleEditComponent = /** @class */ (function () {
    function RoleEditComponent(route, http, fb, router) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.roleId = this.route.snapshot.paramMap.get('id');
        this.http.get('/api/roles/' + this.roleId).subscribe(function (res) {
            _this.role = res;
        }, function (err) {
            console.log(err);
        }, function () {
            _this.form.controls['roleTitle'].setValue(_this.role.roleTitle);
        });
    }
    RoleEditComponent.prototype.ngOnInit = function () {
    };
    RoleEditComponent.prototype.saveRole = function () {
        var _this = this;
        this.http.put('/api/roles/update/' + this.roleId, {
            roleTitle: this.form.controls['roleTitle'].value
        }).subscribe(function (res) {
            _this.router.navigate(['/session/role-configuration']);
        });
    };
    RoleEditComponent.prototype.cancel = function () {
        this.router.navigate(['/session/role-configuration']);
    };
    RoleEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RoleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-role-edit',
            template: __webpack_require__(/*! raw-loader!./role-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/role-edit/role-edit.component.html"),
            styles: [__webpack_require__(/*! ./role-edit.component.css */ "./src/app/pages/role-edit/role-edit.component.css")]
        })
    ], RoleEditComponent);
    return RoleEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/security-questions/security-questions.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/security-questions/security-questions.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: security-questions.component.css (Week 6)\n; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zL3NlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zL3NlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogc2VjdXJpdHktcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogVHlsZXIgQXJtc3Ryb25nLCBEYXZpZCBUYXJ2aW4sIFtBYXJvbiBXaWxzb25dXG47IERhdGU6IDIzIE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuIl19 */"

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
/* harmony import */ var _shared_services_security_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/security-question.service */ "./src/app/shared/services/security-question.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/question-edit-dialog/question-edit-dialog.component */ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.ts");
/* harmony import */ var _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/question-delete-dialog/question-delete-dialog.component */ "./src/app/shared/question-delete-dialog/question-delete-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
; =======================================================
; Title: security-questions.component.ts (Week 6)
; Authors: [Tyler Armstrong], [David Tarvin], [Aaron Wilson]
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/








var SecurityQuestionsComponent = /** @class */ (function () {
    function SecurityQuestionsComponent(securityService, router, http, dialog) {
        this.securityService = securityService;
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.displayedColumns = ['questionText', 'actions'];
    }
    SecurityQuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.securityService.get()
            .subscribe(function (res) {
            _this.data = res;
        });
    };
    SecurityQuestionsComponent.prototype.addNew = function () {
    };
    SecurityQuestionsComponent.prototype.delete = function (questionId, questionText) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["QuestionDeleteDialogComponent"], {
            data: {
                questionText: questionText
            },
            disableClose: true,
            width: '800px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'confirm') {
                _this.http.delete('/api/security-questions/' + questionId).subscribe(function (res) {
                    console.log('Security Question deleted');
                    _this.data = _this.data.filter(function (u) { return u._id !== questionId; });
                });
            }
            else if (result === 'cancel') {
                _this.router.navigate(['/session/security-questions']);
            }
        });
    };
    SecurityQuestionsComponent.prototype.edit = function (questionId) {
        var _this = this;
        // 1. Get selected question
        this.securityService.getQuestionById(questionId)
            .subscribe(function (res) { _this.question = res; }, function (err) { console.log(err); }, function () {
            // 2. Open Dialog
            var dialogRef = _this.dialog.open(_shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["QuestionEditDialogComponent"], {
                width: '80%',
                height: '600px',
                data: _this.question
            });
            // 3. Save user's changes to db
            // * See dialog
            // 4. Reload table
            dialogRef.afterClosed().subscribe(function (result) { location.reload(); });
        });
    };
    SecurityQuestionsComponent.ctorParameters = function () { return [
        { type: _shared_services_security_question_service__WEBPACK_IMPORTED_MODULE_2__["SecurityQuestionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    SecurityQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security-questions',
            template: __webpack_require__(/*! raw-loader!./security-questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/security-questions/security-questions.component.html"),
            providers: [_shared_services_security_question_service__WEBPACK_IMPORTED_MODULE_2__["SecurityQuestionService"]],
            styles: [__webpack_require__(/*! ./security-questions.component.css */ "./src/app/pages/security-questions/security-questions.component.css")]
        })
    ], SecurityQuestionsComponent);
    return SecurityQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/server-error/server-error.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/server-error/server-error.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n    height: 100%;\n}\n\n.container {\n    background-image: url('crashed-server.jpg'); /* image source: https://www.reddit.com/r/funny/comments/be03cc/dont_forget_to_tip_your_server/ */\n    height: 100vh;\n    width: 100%;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.message {\n    width: 100%;\n    height: 45%;\n    bottom: 0;\n    display: block;\n    position: absolute;\n    color: #fff;\n    padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJDQUFnRSxFQUFFLGlHQUFpRztJQUNuSyxhQUFhO0lBQ2IsV0FBVztJQUNYLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY3Jhc2hlZC1zZXJ2ZXIuanBnKTsgLyogaW1hZ2Ugc291cmNlOiBodHRwczovL3d3dy5yZWRkaXQuY29tL3IvZnVubnkvY29tbWVudHMvYmUwM2NjL2RvbnRfZm9yZ2V0X3RvX3RpcF95b3VyX3NlcnZlci8gKi9cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWVzc2FnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NSU7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title:  server-error.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! raw-loader!./server-error.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/pages/server-error/server-error.component.css")]
        })
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-details/user-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-details/user-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: user-details.component.css (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogVHlsZXIgQXJtc3Ryb25nLCBbRGF2aWQgVGFydmluXSwgQWFyb24gV2lsc29uXG47IERhdGU6IDI5IE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qLyJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/*
; =======================================================
; Title:  user-details.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/





var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(route, http, fb, router) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.userId = this.route.snapshot.paramMap.get('id');
        console.log('userId is ' + this.userId);
        this.http.get('/api/users/' + this.userId).subscribe(function (res) {
            console.log('The userId in the GET request is ' + _this.userId);
            _this.user = res;
            console.log('This user is ' + JSON.stringify(_this.user));
        }, function (err) {
            console.log(err);
        }, function () {
            _this.form.controls['firstName'].setValue(_this.user.firstName);
            _this.form.controls['lastName'].setValue(_this.user.lastName);
            _this.form.controls['phoneNumber'].setValue(_this.user.phoneNumber);
            _this.form.controls['address'].setValue(_this.user.address);
            _this.form.controls['email'].setValue(_this.user.email);
        });
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    };
    UserDetailsComponent.prototype.saveUser = function () {
        var _this = this;
        this.http.put('/api/users/update/' + this.userId, {
            firstName: this.form.controls['firstName'].value,
            lastName: this.form.controls['lastName'].value,
            phoneNumber: this.form.controls['phoneNumber'].value,
            address: this.form.controls['address'].value,
            email: this.form.controls['email'].value
        }).subscribe(function (res) {
            _this.router.navigate(['/session/user-management']);
        });
    };
    UserDetailsComponent.prototype.cancel = function () {
        this.router.navigate(['/session/user-management']);
    };
    UserDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/pages/user-details/user-details.component.css")]
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-management/user-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: user-management.component.css (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n\nng-container {\n  padding: 0 15px;\n}\n\ntable {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDOztBQUVEO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IHVzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIChXZWVrIDYpXG47IEF1dGhvcnM6IFR5bGVyIEFybXN0cm9uZywgW0RhdmlkIFRhcnZpbl0sIEFhcm9uIFdpbHNvblxuOyBEYXRlOiAyOSBPY3QgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcbjsgTGVnZW5kOiBbXSAtPiBUZWFtIG1lbWJlciByZXNwb25zaWJsZSBmb3IgcGFnZS5cbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxubmctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/user-delete-dialog/user-delete-dialog.component */ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
; =======================================================
; Title: user-management.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date: 29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(http, dialog, router) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['username', 'firstName', 'lastName', 'phoneNumber', 'address', 'email', 'functions'];
        this.http.get('/api/users').subscribe(function (res) {
            _this.users = res;
            console.log(_this.users);
        }, function (err) {
            console.log(err);
        });
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent.prototype.edit = function (userId, username) {
        console.log('Username is ' + username);
        console.log('userId is ' + userId);
        this.router.navigate(['/session/user-details/' + userId]);
    };
    UserManagementComponent.prototype.delete = function (userId, username) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["UserDeleteDialogComponent"], {
            data: {
                username: username
            },
            disableClose: true,
            width: '800px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'confirm') {
                _this.http.delete('/api/users/' + userId).subscribe(function (res) {
                    console.log('User deleted');
                    _this.users = _this.users.filter(function (u) { return u._id !== userId; });
                });
            }
            else if (result === 'cancel') {
                _this.router.navigate(['/session/user-management']);
            }
        });
    };
    UserManagementComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
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

/***/ "./src/app/reset-password-form/reset-password-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/reset-password-form/reset-password-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkLWZvcm0vcmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reset-password-form/reset-password-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reset-password-form/reset-password-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResetPasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordFormComponent", function() { return ResetPasswordFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title: reset-password-form.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date: 04 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






var ResetPasswordFormComponent = /** @class */ (function () {
    function ResetPasswordFormComponent(http, route, router, fb, cookieService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.cookieService = cookieService;
        this.isAuthenticated = this.route.snapshot.queryParamMap.get('isAuthenticated');
        this.username = this.route.snapshot.queryParamMap.get('username');
    }
    ResetPasswordFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#%*?&]{8,}$')]]
        });
    };
    ResetPasswordFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.http.post('/api/users/' + this.username + '/reset-password', {
            password: this.form.controls['password'].value
        }).subscribe(function (res) {
            _this.cookieService.set('isAuthenticated', 'true', 1);
            _this.cookieService.set('username', _this.username, 1);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log(err);
        });
    };
    ResetPasswordFormComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }
    ]; };
    ResetPasswordFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-reset-password-form',
            template: __webpack_require__(/*! raw-loader!./reset-password-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/reset-password-form/reset-password-form.component.html"),
            styles: [__webpack_require__(/*! ./reset-password-form.component.css */ "./src/app/reset-password-form/reset-password-form.component.css")]
        })
    ], ResetPasswordFormComponent);
    return ResetPasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: base-layout.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFzZS1sYXlvdXQvYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IGJhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXG47IERhdGU6IDIzIE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuIl19 */"

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
; =======================================================
*/




var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    BaseLayoutComponent.prototype.ngOnInit = function () {
        this.validated = this.cookie.check('isAuthenticated');
    };
    BaseLayoutComponent.prototype.userLogout = function () {
        this.cookie.deleteAll();
        this.router.navigate(['/login']);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/*
; =======================================================
; Title:  auth-guard.service.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.cookieService.get('isAuthenticated');
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuardService);
    return AuthGuardService;
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
; Title: index.ts (Week 6)
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

module.exports = "/*\n; =======================================================\n; Title: question-add-dialog.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWFkZC1kaWFsb2cvcXVlc3Rpb24tYWRkLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWFkZC1kaWFsb2cvcXVlc3Rpb24tYWRkLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogcXVlc3Rpb24tYWRkLWRpYWxvZy5jb21wb25lbnQuY3NzIChXZWVrIDYpXG47IEF1dGhvcnM6IFtUeWxlciBBcm1zdHJvbmddLCBEYXZpZCBUYXJ2aW4sIEFhcm9uIFdpbHNvblxuOyBEYXRlOiAyOSBPY3QgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcbjsgTGVnZW5kOiBbXSAtPiBUZWFtIG1lbWJlciByZXNwb25zaWJsZSBmb3IgcGFnZS5cbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi8iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/*
; =======================================================
; Title:  question-add-dialog.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




var QuestionAddDialogComponent = /** @class */ (function () {
    function QuestionAddDialogComponent(data) {
        this.data = data;
    }
    QuestionAddDialogComponent.prototype.ngOnInit = function () {
    };
    QuestionAddDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    QuestionAddDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-add-dialog',
            template: __webpack_require__(/*! raw-loader!./question-add-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/question-add-dialog/question-add-dialog.component.html"),
            styles: [__webpack_require__(/*! ./question-add-dialog.component.css */ "./src/app/shared/question-add-dialog/question-add-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], QuestionAddDialogComponent);
    return QuestionAddDialogComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
; =======================================================
; Title:  question-delete-dialog.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   30 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




var QuestionDeleteDialogComponent = /** @class */ (function () {
    function QuestionDeleteDialogComponent(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.questionText = data.questionText;
        console.log(this.questionText);
    }
    QuestionDeleteDialogComponent.prototype.ngOnInit = function () {
    };
    QuestionDeleteDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    QuestionDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-delete-dialog',
            template: __webpack_require__(/*! raw-loader!./question-delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/question-delete-dialog/question-delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./question-delete-dialog.component.css */ "./src/app/shared/question-delete-dialog/question-delete-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], QuestionDeleteDialogComponent);
    return QuestionDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/shared/question-edit-dialog/question-edit-dialog.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: question-edit-dialog.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWVkaXQtZGlhbG9nL3F1ZXN0aW9uLWVkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tZWRpdC1kaWFsb2cvcXVlc3Rpb24tZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IHF1ZXN0aW9uLWVkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXG47IERhdGU6IDI5IE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qLyJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
; =======================================================
; Title:  question-edit-dialog.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






var QuestionEditDialogComponent = /** @class */ (function () {
    function QuestionEditDialogComponent(data, fb, http, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.http = http;
        this.dialogRef = dialogRef;
    }
    QuestionEditDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            questionText: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
        // tslint:disable-next-line: no-string-literal
        this.form.controls['questionText'].setValue(this.data.questionText);
    };
    QuestionEditDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        // 3. Save user's edits to db
        this.http.put("/api/security-questions/update/" + this.data._id, {
            // tslint:disable-next-line: no-string-literal
            questionText: this.form.controls['questionText'].value
        }).subscribe(function (res) {
            _this.dialogRef.close();
        });
    };
    QuestionEditDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    QuestionEditDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    QuestionEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./question-edit-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/question-edit-dialog/question-edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./question-edit-dialog.component.css */ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], QuestionEditDialogComponent);
    return QuestionEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/role-delete-dialog/role-delete-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/role-delete-dialog/role-delete-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yb2xlLWRlbGV0ZS1kaWFsb2cvcm9sZS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/role-delete-dialog/role-delete-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/role-delete-dialog/role-delete-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: RoleDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDeleteDialogComponent", function() { return RoleDeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title:  role-delete-dialog.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date:   06 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




var RoleDeleteDialogComponent = /** @class */ (function () {
    function RoleDeleteDialogComponent(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.roleTitle = data.roleTitle;
    }
    RoleDeleteDialogComponent.prototype.ngOnInit = function () {
    };
    RoleDeleteDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    RoleDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-role-delete-dialog',
            template: __webpack_require__(/*! raw-loader!./role-delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/role-delete-dialog/role-delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./role-delete-dialog.component.css */ "./src/app/shared/role-delete-dialog/role-delete-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], RoleDeleteDialogComponent);
    return RoleDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/route-interceptors/error.interceptor.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/route-interceptors/error.interceptor.ts ***!
  \****************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/*
; =======================================================
; Title:  error.interceptor.ts (Week 7)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   02 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            if ([404].indexOf(err.status) !== -1) {
                _this.router.navigate(['/session/404']);
            }
            if ([500].indexOf(err.status) !== -1) {
                _this.router.navigate(['/session/500']);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
; =======================================================
; Title:  security-question.service.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/



var SecurityQuestionService = /** @class */ (function () {
    function SecurityQuestionService(http) {
        this.http = http;
    }
    SecurityQuestionService.prototype.get = function () {
        var apiURL = "/api/security-questions";
        return this.http.get(apiURL);
    };
    SecurityQuestionService.prototype.getQuestionById = function (id) {
        var apiURL = "/api/security-questions/" + id;
        return this.http.get(apiURL);
    };
    SecurityQuestionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SecurityQuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SecurityQuestionService);
    return SecurityQuestionService;
}());



/***/ }),

/***/ "./src/app/shared/session-layout/session-layout.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/session-layout/session-layout.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: session-layout.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Nlc3Npb24tbGF5b3V0L3Nlc3Npb24tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2Vzc2lvbi1sYXlvdXQvc2Vzc2lvbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IHNlc3Npb24tbGF5b3V0LmNvbXBvbmVudC5jc3MgKFdlZWsgNilcbjsgQXV0aG9yczogW1R5bGVyIEFybXN0cm9uZ10sIERhdmlkIFRhcnZpbiwgQWFyb24gV2lsc29uXG47IERhdGU6IDIzIE9jdCAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlciBSZXBhaXIgU2hvcFxuOyBMZWdlbmQ6IFtdIC0+IFRlYW0gbWVtYmVyIHJlc3BvbnNpYmxlIGZvciBwYWdlLlxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qLyJdfQ== */"

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
; =======================================================
*/




var SessionLayoutComponent = /** @class */ (function () {
    function SessionLayoutComponent(cookie, router) {
        this.cookie = cookie;
        this.router = router;
    }
    SessionLayoutComponent.prototype.ngOnInit = function () {
        this.validated = this.cookie.check('isAuthenticated');
    };
    SessionLayoutComponent.prototype.userLogout = function () {
        this.cookie.deleteAll();
        this.router.navigate(['/login']);
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

/***/ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/user-delete-dialog/user-delete-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: user-delete-dialog.component.css (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VzZXItZGVsZXRlLWRpYWxvZy91c2VyLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Q0FRQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLWRlbGV0ZS1kaWFsb2cvdXNlci1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47IFRpdGxlOiB1c2VyLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyAoV2VlayA2KVxuOyBBdXRob3JzOiBUeWxlciBBcm1zdHJvbmcsIFtEYXZpZCBUYXJ2aW5dLCBBYXJvbiBXaWxzb25cbjsgRGF0ZTogMjkgT2N0IDIwMTlcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXG47IExlZ2VuZDogW10gLT4gVGVhbSBtZW1iZXIgcmVzcG9uc2libGUgZm9yIHBhZ2UuXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
; =======================================================
; Title:  user-delete-dialog.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




var UserDeleteDialogComponent = /** @class */ (function () {
    function UserDeleteDialogComponent(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.username = data.username;
        console.log(this.username);
    }
    UserDeleteDialogComponent.prototype.ngOnInit = function () {
    };
    UserDeleteDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-delete-dialog',
            template: __webpack_require__(/*! raw-loader!./user-delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/user-delete-dialog/user-delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./user-delete-dialog.component.css */ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], UserDeleteDialogComponent);
    return UserDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/verify-security-questions-form/verify-security-questions-form.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/verify-security-questions-form/verify-security-questions-form.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1zZWN1cml0eS1xdWVzdGlvbnMtZm9ybS92ZXJpZnktc2VjdXJpdHktcXVlc3Rpb25zLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verify-security-questions-form/verify-security-questions-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/verify-security-questions-form/verify-security-questions-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: VerifySecurityQuestionsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifySecurityQuestionsFormComponent", function() { return VerifySecurityQuestionsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title:  verify-security-questions.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/





var VerifySecurityQuestionsFormComponent = /** @class */ (function () {
    function VerifySecurityQuestionsFormComponent(route, router, http, fb) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.wrongAnswer = false;
        this.username = this.route.snapshot.queryParamMap.get('username');
        console.log(this.username);
        this.http.get('/api/verify/users/' + this.username + '/security-questions').subscribe(function (res) {
            _this.user = (res);
            console.log('this.selectedSecurityQuestions is ' + _this.user.selectedSecurityQuestions[0].answerText);
            _this.question1 = _this.user.selectedSecurityQuestions[0].questionText;
            console.log('This.question1 is ' + _this.question1);
            _this.answer1 = _this.user.selectedSecurityQuestions[0].answerText;
            console.log('The answer to question1 is ' + _this.answer1);
            _this.question2 = _this.user.selectedSecurityQuestions[1].questionText;
            console.log('This.question2 is ' + _this.question2);
            _this.answer2 = _this.user.selectedSecurityQuestions[1].answerText;
            console.log('The answer to question2 is ' + _this.answer2);
            _this.question3 = _this.user.selectedSecurityQuestions[2].questionText;
            console.log('This.question3 is ' + _this.question3);
            _this.answer3 = _this.user.selectedSecurityQuestions[2].answerText;
            console.log('The answer to question3 is ' + _this.answer3);
        }, function (err) {
            console.log(err);
        });
    }
    VerifySecurityQuestionsFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            answerToSecurityQuestion1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            answerToSecurityQuestion2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            answerToSecurityQuestion3: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    };
    VerifySecurityQuestionsFormComponent.prototype.verifySecurityQuestions = function () {
        var answerToSecurityQuestion1 = this.form.controls['answerToSecurityQuestion1'].value;
        var answerToSecurityQuestion2 = this.form.controls['answerToSecurityQuestion2'].value;
        var answerToSecurityQuestion3 = this.form.controls['answerToSecurityQuestion3'].value;
        if (answerToSecurityQuestion1 == this.answer1 && answerToSecurityQuestion2 == this.answer2 && answerToSecurityQuestion3 == this.answer3) {
            this.router.navigate(['/reset-password'], { queryParams: { isAuthenticated: 'true', username: this.username }, skipLocationChange: true });
        }
        else {
            this.wrongAnswer = true;
            console.log('Unable to verify security question answers');
        }
        // this.http.post('/api/verify/users/' + this.username + '/security-questions', {
        //   answerToSecurityQuestion1: answerToSecurityQuestion1,
        //   answerToSecurityQuestion2: answerToSecurityQuestion2,
        //   answerToSecurityQuestion3: answerToSecurityQuestion3
        // }).subscribe(res => {
        //   if (res['auth']) {
        //     this.router.navigate(['/reset-password'], {queryParams: {isAuthenticated: 'true', username: this.username}, skipLocationChange: true});
        //   } else {
        //     console.log('Unable to verify security question answers');
        //   }
        // });
    };
    VerifySecurityQuestionsFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    VerifySecurityQuestionsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-verify-security-questions-form',
            template: __webpack_require__(/*! raw-loader!./verify-security-questions-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/verify-security-questions-form/verify-security-questions-form.component.html"),
            styles: [__webpack_require__(/*! ./verify-security-questions-form.component.css */ "./src/app/verify-security-questions-form/verify-security-questions-form.component.css")]
        })
    ], VerifySecurityQuestionsFormComponent);
    return VerifySecurityQuestionsFormComponent;
}());



/***/ }),

/***/ "./src/app/verify-username-form/verify-username-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/verify-username-form/verify-username-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: auto;\n}\n\n.return-link {\n  text-decoration: none;\n}\n\n.return-link:hover {\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5LXVzZXJuYW1lLWZvcm0vdmVyaWZ5LXVzZXJuYW1lLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS11c2VybmFtZS1mb3JtL3ZlcmlmeS11c2VybmFtZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogYXV0bztcbn1cblxuLnJldHVybi1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnJldHVybi1saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/verify-username-form/verify-username-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/verify-username-form/verify-username-form.component.ts ***!
  \************************************************************************/
/*! exports provided: VerifyUsernameFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyUsernameFormComponent", function() { return VerifyUsernameFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; =======================================================
; Title:  verify-username-form.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/





var VerifyUsernameFormComponent = /** @class */ (function () {
    function VerifyUsernameFormComponent(http, fb, router) {
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.notAUser = false;
    }
    VerifyUsernameFormComponent.prototype.ngOnInit = function () {
        this.form1 = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    };
    VerifyUsernameFormComponent.prototype.validateUsername = function () {
        var _this = this;
        var username = this.form1.controls['username'].value;
        this.http.get('/api/users/username/' + username).subscribe(function (res) {
            if (res) {
                _this.user = res;
                _this.router.navigate(['/verify-security-questions/'], { queryParams: { username: username }, skipLocationChange: true });
            }
            else {
                return _this.notAUser = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    VerifyUsernameFormComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    VerifyUsernameFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-verify-username-form',
            template: __webpack_require__(/*! raw-loader!./verify-username-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/verify-username-form/verify-username-form.component.html"),
            styles: [__webpack_require__(/*! ./verify-username-form.component.css */ "./src/app/verify-username-form/verify-username-form.component.css")]
        })
    ], VerifyUsernameFormComponent);
    return VerifyUsernameFormComponent;
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
; =======================================================
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
; =======================================================
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

module.exports = __webpack_require__(/*! /Users/davidtarvin/web450-group3-bobs-repair/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
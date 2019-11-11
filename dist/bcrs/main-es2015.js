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

module.exports = "<div class=\"container\">\n\n  <div class=\"img-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img fxFlex=\"80%\" src=\"../../../assets/images/about-banner.jpg\" alt=\"\">\n  </div>\n  <div fxLayout=\"row\">\n    <div fxFlex=\"50%\">\n      <h1>Our Story</h1>\n      <p>\n        <mat-card class=\"example-card\">  \n          <h6>To best understand our family and where we began is a letter from my father, Peter to his father, Bob.\n              This is how our story begins:</h6>\n          <br />\n          <mat-card-content>\n  \n              <p> Dad,\n                  <br />\n                  <br>\n                  I don't feel I was particularly honest as a child. I did get in trouble when I was younger more often\n                  then I\n                  would like to admit but that eventually allowed me to join you in your favorite hobby. I know you\n                  brought me\n                  along so I would stay out of trouble but watching you work on electronics really inspired me, even\n                  though I\n                  pretended I didn’t care. Over those years I grow to enjoy building, breaking, and tuckering with all\n                  sorts\n                  of electrons with you. Those really were some of best years of my life, so far.\n                  <br />\n                  <br>\n                  As you know, I have been out of school long enough to know what I want to do with my life.\n                  Now that I have grow and experienced some of the world, I am writing you this letter to ask an important\n                  question. I want to ask you if you would join me by opening a computer repair store with me. Before you\n                  answer, I do have a small condition. I would like to name the shop after you. You have inspired me and\n                  encouraged me for as long as I can remember. Now I would like to make you proud (and mom, of course).\n                  <br />\n                  <br>\n                  Hopefully this letter with arrive before I do but I know you will be proud of me regardless of what you\n                  decide. I can’t wait to see you and mom and have some of delicious apple pie.\n                  <br />\n                  <br>\n                  Your son,\n              </p>\n              <p> Peter <br />\n              </p>\n          </mat-card-content>\n      </mat-card>\n      </p>\n    </div>\n    <div fxFlex=\"50%\">\n      <div class=\"team-member\" *ngFor=\"let member of members\">\n        <h3 style=\"text-align: center;\">{{member.name}}, {{member.position}}</h3>\n        <img src=\"{{member.image}}\" alt=\"{{member.name}}\" width=\"30%\" style=\"justify-content: center\">\n      </div>\n    </div>\n  </div>\n\n</div>"

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

module.exports = "<!-- /*\n; =======================================================\n; Title: home.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<h1 style=\"text-align: center; margin-top: 100px;\">Welcome To Bob's Computer Repair</h1>\n\n<div id=\"services\" class=\"cards-1\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h2>Our Services</h2>\n                <p class=\"p-heading p-large\"> Here at Bob’s Computer Repair Shop, we strive to be the best by being the only place you would want to go. </p>\n            </div> <!-- end of col -->\n        </div> <!-- end of row -->\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n\n                <!-- Card -->\n                <div class=\"card\">\n                        <mat-icon color=\"accent\">devices</mat-icon>\n                        <div class=\"card-body\">\n                        <h4 class=\"card-title\">Screen Repair</h4>\n                        \n                    </div>\n                </div>\n                <!-- end of card -->\n                <div class=\"card\">\n                        <mat-icon color=\"accent\">lock</mat-icon>\n                        <div class=\"card-body\">\n                        <h4 class=\"card-title\">Managed Antivirus</h4>\n                    </div>\n                </div>\n\n                <div class=\"card\">\n                        <mat-icon color=\"accent\">laptop</mat-icon>\n                        <div class=\"card-body\">\n                        <h4 class=\"card-title\">Laptop Repair</h4>\n                    </div>\n                </div>\n                <!-- Card -->\n                <div class=\"card\">\n                    <mat-icon color=\"accent\">security</mat-icon>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Virus Removal</h4>\n                    </div>\n                </div>\n                <!-- end of card -->\n\n                <!-- Card -->\n                <div class=\"card\">\n                    <mat-icon color=\"accent\">wifi</mat-icon>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">PC Repair</h4>\n                    </div>\n                </div>\n                <!-- end of card -->\n\n                <!-- Card -->\n\n                <div class=\"card\">\n                    <mat-icon color=\"accent\">network_locked</mat-icon>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Custom Build Computers</h4>\n                    </div>\n                </div>\n                <!-- end of card -->\n\n            </div> <!-- end of col -->\n        </div> <!-- end of row -->\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: login.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div class=\"container\">\n  <mat-card class=\"form\">\n    <mat-card-content>\n      <mat-card-title>Please sign in</mat-card-title>\n      <mat-card-subtitle><a [routerLink]=\"['/register']\">Register</a></mat-card-subtitle>\n      <small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\n      <small class=\"warn\"\n        *ngIf=\"form.controls['username'].hasError('required') && form.controls['username'].touched\">\n        Username is required\n      </small>\n      <br />\n      <small class=\"warn\"\n        *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">\n        Password is required\n      </small>\n      <form [formGroup]=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(form.value); form.reset()\">\n        <mat-form-field class=\"inputStyle\">\n          <input type=\"text\" matInput [formControl]=\"form.controls['username']\" placeholder=\"Username \" />\n        </mat-form-field>\n        <br />\n        <mat-form-field class=\"inputStyle\">\n          <input type=\"password\" matInput [formControl]=\"form.controls['password']\" placeholder=\"Password\" />\n        </mat-form-field>\n        <mat-card-actions>\n          <button\n            mat-raised-button\n            color=\"accent\"\n            [disabled]=\"!form.valid\"\n            type=\"submit\">Log in\n          </button>\n          <br /><br />\n          <small><a [routerLink]=\"['/forgot-password']\">Forgot Password?</a></small>\n        </mat-card-actions>\n      </form>\n      <br /><br />\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: not-found.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div class=\"container\">\n  <mat-card color=\"accent\" class=\"form\">\n    <mat-card-content class=\"message\">\n      <h1>Oops this page doesn't exist.</h1>\n      <h3 style=\"color: red;\">Error 404</h3>\n      <button (click)=\"goHome()\" mat-button color=\"primary\">\n        Home\n      </button>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/question-add/question-add.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/question-add/question-add.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Add Security Question</mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n      <form [formGroup]=\"addQuestionForm\" (ngSubmit)=\"addQuestion(addQuestionForm.value)\">\n        <mat-form-field>\n          <input matInput placeholder=\"Security Question\" formControlName=\"securityQuestion\">\n        </mat-form-field>\n\n        <br><br>\n        <mat-card-actions>\n          <button mat-raised-button color=\"primary\" [disabled]=\"!addQuestionForm.valid\">Submit</button>\n          <button mat-raised-button color=\"warn\" (click)=\"cancel()\">Cancel</button>\n        </mat-card-actions>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: register.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n<div class=\"container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Please fill out the form to register</mat-card-title>\n      <mat-card-subtitle>Bob's Computer Repair Shop</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n\n      <small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\n\n      <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit(registrationForm.value)\">\n\n        <mat-form-field>\n          <input matInput placeholder=\"Username\" formControlName=\"username\">\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['username'].hasError('required') && registrationForm.controls['username'].touched\">\n                       Username is required\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['password'].hasError('required') && registrationForm.controls['password'].touched\">\n                       Password is required.\n            </mat-error>\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['password'].hasError('pattern') && registrationForm.controls['password'].touched\">\n                       Password requires at least 8 characters with one uppercase and one number.\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['firstName'].hasError('required') && registrationForm.controls['firstName'].touched\">\n                     Please enter your first name.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['lastName'].hasError('required') && registrationForm.controls['lastName'].touched\">\n                     Please enter your last name.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Phone Number\" formControlName=\"phoneNumber\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['phoneNumber'].hasError('required') && registrationForm.controls['phoneNumber'].touched\">\n                     Please enter your phone number.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Address\" formControlName=\"address\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['address'].hasError('required') && registrationForm.controls['address'].touched\">\n                     Please enter your address.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" formControlName=\"email\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['email'].hasError('email') && registrationForm.controls['email'].touched\">\n                     Not an email.\n          </mat-error>\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['email'].hasError('required') && registrationForm.controls['email'].touched\">\n                     Please enter your email.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select formControlName=\"securityQuestion1\" placeholder=\"Security Question\">\n            <mat-option *ngFor=\"let question of questions\" [value]=\"question._id\">\n              {{question.questionText}}\n            </mat-option>\n            <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['securityQuestion1'].hasError('required') && registrationForm.controls['securityQuestion1'].touched\">\n                     Please choose a security question.\n            </mat-error>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Answer\" formControlName=\"answer1\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['answer1'].hasError('required') && registrationForm.controls['answer1'].touched\">\n                     Please answer the security question.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select formControlName=\"securityQuestion2\" placeholder=\"Security Question\">\n            <mat-option *ngFor=\"let question of questions\" [value]=\"question._id\">\n              {{question.questionText}}\n            </mat-option>\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['securityQuestion2'].hasError('required') && registrationForm.controls['securityQuestion2'].touched\">\n                       Please choose a security question.\n            </mat-error>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Answer\" formControlName=\"answer2\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['answer2'].hasError('required') && registrationForm.controls['answer2'].touched\">\n                     Please answer the security question.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select formControlName=\"securityQuestion3\" placeholder=\"Security Question\">\n            <mat-option *ngFor=\"let question of questions\" [value]=\"question._id\">\n              {{question.questionText}}\n            </mat-option>\n            <mat-error class=\"warn\"\n                       *ngIf=\"registrationForm.controls['securityQuestion3'].hasError('required') && registrationForm.controls['securityQuestion3'].touched\">\n                       Please choose a security question.\n            </mat-error>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Answer\" formControlName=\"answer3\">\n          <mat-error class=\"warn\"\n                     *ngIf=\"registrationForm.controls['answer3'].hasError('required') && registrationForm.controls['answer3'].touched\">\n                     Please answer the security question.\n          </mat-error>\n        </mat-form-field>\n\n        <br>\n\n        <mat-card-actions>\n          <button mat-raised-button color=\"primary\" [disabled]=\"!registrationForm.valid\">\n            Register\n          </button>\n        </mat-card-actions>\n      </form>\n\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/role-add/role-add.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/role-add/role-add.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Add Role</mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n      <form [formGroup]=\"addRoleForm\" (ngSubmit)=\"addRole(addRoleForm.value)\">\n        <mat-form-field>\n          <input matInput placeholder=\"Role\" formControlName=\"role\">\n        </mat-form-field>\n\n        <br><br>\n        <mat-card-actions>\n          <button mat-raised-button color=\"primary\" [disabled]=\"!addRoleForm.valid\">\n            Submit\n          </button>\n          <button mat-raised-button color=\"warn\" (click)=\"cancel()\">\n            Cancel\n          </button>\n        </mat-card-actions>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/role-configuration/role-configuration.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/role-configuration/role-configuration.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: role-configuration.component.html (Week 8)\n; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy, Aaron Wilson\n; Date: 5 Nov 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\n    <mat-card style=\"margin: 0 auto;\">\n      <mat-card-title>Roles</mat-card-title>\n      <mat-card-content *ngIf=\"roles\">\n        <table mat-table [dataSource]=\"roles\">\n\n          <ng-container matColumnDef=\"roleTitle\">\n            <th mat-header-cell *matHeaderCellDef>Role</th>\n            <td mat-cell *matCellDef=\"let element\">\n              {{ element.roleTitle }}\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <th mat-header-cell *matHeaderCellDef>Actions</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button (click)=\"edit(element._id)\">\n                <mat-icon color=\"accent\">create</mat-icon>\n              </button>\n              <button mat-icon-button (click)=\"delete(element._id, element.roleTitle)\">\n                <mat-icon color=\"warn\">delete_forever</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n        </table>\n      </mat-card-content>\n      <mat-card-actions>\n        <div fxFlex></div>\n        <button mat-button color=\"primary\" [routerLink]=\"['/session/role-add']\"><mat-icon>add_box</mat-icon>Add New Role</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/role-edit/role-edit.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/role-edit/role-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" style=\"margin-top: 8%;\">\n  <mat-card style=\"width: 90%; margin: 0 auto;\" class=\"mat-elevation-z8\">\n    <mat-card-title>Role</mat-card-title>\n    <mat-card-subtitle>\n      <button mat-button color=\"accent\">Edit</button>\n    </mat-card-subtitle>\n\n    <br>\n    <form [formGroup]=\"form\" (ngSubmit)=\"saveRole()\" #roleForm>\n      <mat-card-content>\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['roleTitle']\" placeholder=\"roleTitle\"/>\n          </mat-form-field>\n        </div>\n      </mat-card-content>\n\n      <br>\n      <mat-card-actions align=\"end\">\n        <button mat-raised-button (click)=\"cancel()\" color=\"warn\">Cancel</button>\n        <button mat-raised-button color=\"accent\">Submit</button>\n      </mat-card-actions>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/security-questions/security-questions.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/security-questions/security-questions.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: security-questions.component.html (Week 6)\n; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\n  <mat-card style=\"margin: 0 auto;\">\n    <mat-card-title>Security Questions</mat-card-title>\n    <mat-card-content *ngIf=\"data\">\n      <table mat-table [dataSource]=\"data\">\n\n        <ng-container matColumnDef=\"questionText\">\n          <th mat-header-cell *matHeaderCellDef>Question</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.questionText }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef>Actions</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button (click)=\"edit(element._id)\">\n              <mat-icon color=\"accent\">create</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"delete(element._id, element.questionText)\">\n              <mat-icon color=\"warn\">delete_forever</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n      </table>\n    </mat-card-content>\n    <mat-card-actions>\n      <div fxFlex></div>\n      <button mat-button color=\"primary\" [routerLink]=\"['/session/question-add']\"><mat-icon>add_box</mat-icon>Add New</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/server-error/server-error.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/server-error/server-error.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"message\">\n        <h1>500 Internal Server Error</h1>\n        <p>Something went wrong with the website's server.<br>Man, I wish we knew what it was.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/service-repair/service-repair.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/service-repair/service-repair.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Form Value: {{ serviceForm.value | json }}\n</p>\n\n<p>\n  Form Status: {{ serviceForm.status }}\n</p>\n\n  <form [formGroup]='serviceForm' (ngSubmit)=\"onSubmit(serviceForm.value)\">\n\n    <mat-card class=\"main-card\" fxFlex=\"80%\">\n      <mat-card-content fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\">\n        <section class=\"services-section\" fxFlex=\"50%\">\n          <h1>Services</h1>\n          <mat-card class=\"services\">\n            <mat-card-header *ngFor=\"let service of data\">\n              <div mat-card-avatar class=\"header-image\"><mat-icon>{{service.icon}}</mat-icon></div>\n              <mat-card-title>{{service.serviceText}}</mat-card-title>\n              <mat-card-subtitle>{{service.cost | currency}}</mat-card-subtitle>\n              <div fxFlex></div>\n              <mat-checkbox formControlName=\"{{service.control}}\"></mat-checkbox>\n            </mat-card-header>\n          </mat-card>\n        </section>\n\n        <section class=\"fees-section\" fxFlex=\"50%\">\n          <h1>Fees</h1>\n          <mat-form-field class=\"full-width\">\n            <input\n              name=\"parts\"\n              type=\"number\"\n              step=\"0.01\"\n              matInput\n              placeholder=\"Parts (Enter Value)\"\n              formControlName=\"parts\"\n            >\n            <mat-error\n              class=\"warn\"\n              *ngIf=\"serviceForm.controls['parts'].hasError('required') && serviceForm.controls['parts'].touched\">\n              Please enter cost for parts.\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"full-width\">\n            <input formControlName=\"labor\" matInput placeholder=\"Labor (Enter Hours) @$50.00/hr\">\n            <mat-error\n              class=\"warn\"\n              *ngIf=\"serviceForm.controls['labor'].hasError('required') && serviceForm.controls['labor'].touched\">\n              Please enter hours for labor.\n            </mat-error>\n          </mat-form-field>\n\n          <br>\n          <button\n            color=\"primary\"\n            mat-raised-button class=\"full-width\"\n            type=\"submit\"\n            >Calculate</button>\n            <!-- <p>[disabled]=\"serviceForm.invalid\"</p> -->\n        </section>\n      </mat-card-content>\n    </mat-card>\n  </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-details/user-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: user-details.component.html (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\n  <mat-card style=\"width: 80%; margin: 0 auto;\" class=\"mat-elevation-z8\">\n    <mat-card-title>User Details</mat-card-title>\n    <mat-card-subtitle>\n      <button mat-button color=\"accent\">Edit</button>\n    </mat-card-subtitle>\n\n    <br>\n    <form [formGroup]=\"form\" (ngSubmit)=\"saveUser()\" #userForm>\n      <mat-card-content>\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['firstName']\" placeholder=\"First Name\" />\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['lastName']\" placeholder=\"Last Name\" />\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['phoneNumber']\" placeholder=\"Phone Number\" />\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['address']\" placeholder=\"Address\" />\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['email']\" placeholder=\"Email\" />\n          </mat-form-field>\n\n          <mat-form-field>\n            <select [(value)]=\"selectedRoleTitle\" matNativeControl [(ngModel)]=\"Role\"\n            [formControl]=\"form.controls['role']\" placeholder=\"Role\">\n              <option *ngFor=\"let role of roles\" value= {{role.roleTitle}}>{{role.roleTitle}}</option>\n            </select>\n          </mat-form-field>\n        </div>\n      </mat-card-content>\n\n      <br>\n      <mat-card-actions align=\"end\">\n        <button mat-raised-button (click)=\"cancel()\" color=\"warn\">Cancel</button>\n        <button mat-raised-button (click)=\"saveUser()\" color=\"accent\">Submit</button>\n      </mat-card-actions>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-management/user-management.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-management/user-management.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n; =======================================================\n; Title: user-management.component.html (Week 6)\n; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson\n; Date: 29 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div fxLayout=\"column\" style=\"margin-top: 8%;\">\n  <mat-card style=\"width: 95%; margin: 0 auto;\">\n    <mat-card-title>Users Configuration</mat-card-title>\n    <mat-card-content *ngIf=\"users\">\n      <table mat-table [dataSource]=\"users\">\n\n        <ng-container matColumnDef=\"username\">\n          <th mat-header-cell *matHeaderCellDef>Username</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.username }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"firstName\">\n          <th mat-header-cell *matHeaderCellDef>First Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.firstName }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"lastName\">\n          <th mat-header-cell *matHeaderCellDef>Last Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.lastName }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"phoneNumber\">\n          <th mat-header-cell *matHeaderCellDef>Phone Number</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.phoneNumber }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"address\">\n          <th mat-header-cell *matHeaderCellDef>Address</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.address }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef>Email</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.email }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"role\">\n          <th mat-header-cell *matHeaderCellDef>Role</th>\n          <td mat-cell *matCellDef=\"let element\"> {{ element.role }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"functions\">\n          <th mat-header-cell *matHeaderCellDef>Functions</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button (click)=\"edit(element._id, element.username)\">\n              <mat-icon color=\"accent\">edit</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"delete(element._id, element.username)\">\n              <mat-icon color=\"warn\">delete</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n      </table>\n    </mat-card-content>\n  </mat-card>\n</div>"

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

module.exports = "<!-- /*\n; =======================================================\n; Title: base-layout.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n\n<div>\n  <!-- Page header -->\n  <header>\n    <!-- Toolbar -->\n    <mat-toolbar class=\"menu\" role=\"header\" style=\"color: black; background-color: white\">\n        <mat-toolbar-row>\n        <button [routerLink]=\"['/']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">BCRS</span>\n        </button>\n        <button [routerLink]=\"['/contact']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">Contact Us</span>\n        </button>\n        <button [routerLink]=\"['/about-us']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">About Us</span>\n        </button>\n        <button *ngIf=\"validated == false\" mat-button class=\"toolbar__icon-button mat-button\" [routerLink]=\"['/login']\">\n          <span style=\"margin-left: 5px !important\">Login</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\"\n          [routerLink]=\"['/session/security-questions']\">\n          <span style=\"margin-left: 5px !important\">Security Questions</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\"\n          [routerLink]=\"['/session/user-management']\">\n          <span style=\"margin-left: 5px !important\">User Management</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\"\n          [routerLink]=\"['/session/role-configuration']\">\n          <span style=\"margin-left: 5px !important\">Role Configuration</span>\n        </button>\n\n        <div fxFlex></div>\n\n        <button mat-icon-button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\">\n          <mat-icon>exit_to_app</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"userLogout()\">\n            <span>Logout</span>\n          </button>\n        </mat-menu>\n\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </header>\n</div>\n\n<!-- Main page content -->\n<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/invoice-dialog/invoice-dialog.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/invoice-dialog/invoice-dialog.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>invoice-dialog works!</p>\n"

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

module.exports = "<!-- /*\n; =======================================================\n; Title: session-layout.component.html (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/ -->\n<div>\n  <!-- Page header -->\n  <header>\n    <!-- Toolbar -->\n    <mat-toolbar class=\"menu\" role=\"header\" style=\"color: black; background-color: white\">\n      <mat-toolbar-row>\n        <button [routerLink]=\"['/']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">BCRS</span>\n        </button>\n        <button [routerLink]=\"['/contact']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">Contact Us</span>\n        </button>\n        <button [routerLink]=\"['/about-us']\" mat-button class=\"toolbar__icon-button mat-button\">\n          <span style=\"margin-left: 5px !important\">About Us</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\"\n          [routerLink]=\"['/session/security-questions']\">\n          <span style=\"margin-left: 5px !important\">Security Questions</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\"\n          [routerLink]=\"['/session/user-management']\">\n          <span style=\"margin-left: 5px !important\">User Management</span>\n        </button>\n        <button *ngIf=\"validated\" mat-button class=\"toolbar__icon-button mat-button\"\n          [routerLink]=\"['/session/role-configuration']\">\n          <span style=\"margin-left: 5px !important\">Role Configuration</span>\n        </button>\n\n        <div fxFlex></div>\n\n        <button mat-icon-button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\">\n          <mat-icon>exit_to_app</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"userLogout()\">\n            <span>Logout</span>\n          </button>\n        </mat-menu>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </header>\n</div>\n\n<!-- Main page content -->\n<main>\n  <router-outlet></router-outlet>\n</main>"

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
/* harmony import */ var _shared_guards_role_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/guards/role.guard */ "./src/app/shared/guards/role.guard.ts");
/* harmony import */ var _shared_route_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/route-interceptors/error.interceptor */ "./src/app/shared/route-interceptors/error.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/session-layout/session-layout.component */ "./src/app/shared/session-layout/session-layout.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/security-questions/security-questions.component */ "./src/app/pages/security-questions/security-questions.component.ts");
/* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/user-details/user-details.component */ "./src/app/pages/user-details/user-details.component.ts");
/* harmony import */ var _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/question-edit-dialog/question-edit-dialog.component */ "./src/app/shared/question-edit-dialog/question-edit-dialog.component.ts");
/* harmony import */ var _shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/user-delete-dialog/user-delete-dialog.component */ "./src/app/shared/user-delete-dialog/user-delete-dialog.component.ts");
/* harmony import */ var _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/question-delete-dialog/question-delete-dialog.component */ "./src/app/shared/question-delete-dialog/question-delete-dialog.component.ts");
/* harmony import */ var _verify_username_form_verify_username_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./verify-username-form/verify-username-form.component */ "./src/app/verify-username-form/verify-username-form.component.ts");
/* harmony import */ var _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./verify-security-questions-form/verify-security-questions-form.component */ "./src/app/verify-security-questions-form/verify-security-questions-form.component.ts");
/* harmony import */ var _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./reset-password-form/reset-password-form.component */ "./src/app/reset-password-form/reset-password-form.component.ts");
/* harmony import */ var _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/server-error/server-error.component */ "./src/app/pages/server-error/server-error.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _pages_service_repair_service_repair_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/service-repair/service-repair.component */ "./src/app/pages/service-repair/service-repair.component.ts");
/* harmony import */ var _shared_invoice_dialog_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./shared/invoice-dialog/invoice-dialog.component */ "./src/app/shared/invoice-dialog/invoice-dialog.component.ts");
/* harmony import */ var _pages_role_configuration_role_configuration_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/role-configuration/role-configuration.component */ "./src/app/pages/role-configuration/role-configuration.component.ts");
/* harmony import */ var _shared_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./shared/role-delete-dialog/role-delete-dialog.component */ "./src/app/shared/role-delete-dialog/role-delete-dialog.component.ts");
/* harmony import */ var _pages_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/role-edit/role-edit.component */ "./src/app/pages/role-edit/role-edit.component.ts");
/* harmony import */ var _pages_role_add_role_add_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/role-add/role-add.component */ "./src/app/pages/role-add/role-add.component.ts");
/* harmony import */ var _pages_question_add_question_add_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/question-add/question-add.component */ "./src/app/pages/question-add/question-add.component.ts");
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
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_13__["BaseLayoutComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _shared_session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_15__["SessionLayoutComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"],
            _pages_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
            _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_18__["SecurityQuestionsComponent"],
            _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_19__["UserManagementComponent"],
            _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_21__["UserDetailsComponent"],
            _shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_23__["UserDeleteDialogComponent"],
            _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_22__["QuestionEditDialogComponent"],
            _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_24__["QuestionDeleteDialogComponent"],
            _verify_username_form_verify_username_form_component__WEBPACK_IMPORTED_MODULE_25__["VerifyUsernameFormComponent"],
            _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_26__["VerifySecurityQuestionsFormComponent"],
            _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_27__["ResetPasswordFormComponent"],
            _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_28__["ServerErrorComponent"],
            _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__["ContactComponent"],
            _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_30__["AboutUsComponent"],
            _pages_service_repair_service_repair_component__WEBPACK_IMPORTED_MODULE_47__["ServiceRepairComponent"],
            _shared_invoice_dialog_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_48__["InvoiceDialogComponent"],
            _pages_role_configuration_role_configuration_component__WEBPACK_IMPORTED_MODULE_49__["RoleConfigurationComponent"],
            _shared_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_50__["RoleDeleteDialogComponent"],
            _pages_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_51__["RoleEditComponent"],
            _pages_role_add_role_add_component__WEBPACK_IMPORTED_MODULE_52__["RoleAddComponent"],
            _pages_question_add_question_add_component__WEBPACK_IMPORTED_MODULE_53__["QuestionAddComponent"]
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
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"], _shared_guards_role_guard__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _shared_route_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
        entryComponents: [_shared_user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_23__["UserDeleteDialogComponent"], _shared_question_edit_dialog_question_edit_dialog_component__WEBPACK_IMPORTED_MODULE_22__["QuestionEditDialogComponent"], _shared_question_delete_dialog_question_delete_dialog_component__WEBPACK_IMPORTED_MODULE_24__["QuestionDeleteDialogComponent"],
            _shared_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_50__["RoleDeleteDialogComponent"]]
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
/* harmony import */ var _pages_question_add_question_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/question-add/question-add.component */ "./src/app/pages/question-add/question-add.component.ts");
/* harmony import */ var _pages_role_add_role_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/role-add/role-add.component */ "./src/app/pages/role-add/role-add.component.ts");
/* harmony import */ var _pages_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/role-edit/role-edit.component */ "./src/app/pages/role-edit/role-edit.component.ts");
/* harmony import */ var _pages_role_configuration_role_configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/role-configuration/role-configuration.component */ "./src/app/pages/role-configuration/role-configuration.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/security-questions/security-questions.component */ "./src/app/pages/security-questions/security-questions.component.ts");
/* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
/* harmony import */ var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/user-details/user-details.component */ "./src/app/pages/user-details/user-details.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/guards/auth-guard.service */ "./src/app/shared/guards/auth-guard.service.ts");
/* harmony import */ var _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/server-error/server-error.component */ "./src/app/pages/server-error/server-error.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./verify-security-questions-form/verify-security-questions-form.component */ "./src/app/verify-security-questions-form/verify-security-questions-form.component.ts");
/* harmony import */ var _verify_username_form_verify_username_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./verify-username-form/verify-username-form.component */ "./src/app/verify-username-form/verify-username-form.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reset-password-form/reset-password-form.component */ "./src/app/reset-password-form/reset-password-form.component.ts");
/* harmony import */ var _pages_service_repair_service_repair_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/service-repair/service-repair.component */ "./src/app/pages/service-repair/service-repair.component.ts");




















const AppRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '',
        component: _shared__WEBPACK_IMPORTED_MODULE_4__["BaseLayoutComponent"],
        children: [
            { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
            { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
            { path: 'server-error', component: _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_13__["ServerErrorComponent"] },
            { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"] },
            { path: 'forgot-password', component: _verify_username_form_verify_username_form_component__WEBPACK_IMPORTED_MODULE_16__["VerifyUsernameFormComponent"] },
            { path: 'verify-security-questions', component: _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_15__["VerifySecurityQuestionsFormComponent"] },
            { path: 'forgot-password/:username', component: _verify_security_questions_form_verify_security_questions_form_component__WEBPACK_IMPORTED_MODULE_15__["VerifySecurityQuestionsFormComponent"] },
            { path: 'reset-password', component: _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_18__["ResetPasswordFormComponent"] },
            { path: 'about-us', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_17__["AboutUsComponent"] },
        ]
    },
    { path: 'session', component: _shared__WEBPACK_IMPORTED_MODULE_4__["SessionLayoutComponent"],
        children: [
            { path: 'security-questions', component: _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_8__["SecurityQuestionsComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: 'user-management', component: _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_9__["UserManagementComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: 'user-details/:id', component: _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: '404', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] },
            { path: 'service-repair', component: _pages_service_repair_service_repair_component__WEBPACK_IMPORTED_MODULE_19__["ServiceRepairComponent"] },
            { path: 'role-configuration', component: _pages_role_configuration_role_configuration_component__WEBPACK_IMPORTED_MODULE_3__["RoleConfigurationComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: 'role-edit/:id', component: _pages_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_2__["RoleEditComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: 'role-add', component: _pages_role_add_role_add_component__WEBPACK_IMPORTED_MODULE_1__["RoleAddComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: 'question-add', component: _pages_question_add_question_add_component__WEBPACK_IMPORTED_MODULE_0__["QuestionAddComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: '404', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title: about us page
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 4 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


let AboutUsComponent = class AboutUsComponent {
    constructor() {
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
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/about-us/about-us.component.css")]
    })
], AboutUsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title: contact us page
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 3 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: home.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n\ndiv #services .cards-1{\nbox-sizing:border-box;\ndisplay:block;\nfont-size:14px;\nfont-stretch:100%;\nfont-style:normal;\nfont-variant-caps:normal;\nfont-variant-east-asian:normal;\n-webkit-font-variant-ligatures:normal;\n        font-variant-ligatures:normal;\nfont-variant-numeric:normal;\nfont-weight:400;\nheight:300px;\nline-height:22px;\npadding-bottom:26px;\npadding-top:20px;\ntext-align:center;\n-webkit-text-size-adjust:100%;\n   -moz-text-size-adjust:100%;\n    -ms-text-size-adjust:100%;\n        text-size-adjust:100%;\nwidth: 100%;\n-webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\n\n.col-lg-12{\nbox-sizing:border-box;\ndisplay:block;\nflex-basis:100%;\n-webkit-box-flex:0;\n        flex-grow:0;\nflex-shrink:0;\nfont-family:Raleway, sans-serif;\nfont-size:14px;\nfont-stretch:100%;\nfont-style:normal;\nfont-variant-caps:normal;\nfont-variant-east-asian:normal;\n-webkit-font-variant-ligatures:normal;\n        font-variant-ligatures:normal;\nfont-variant-numeric:normal;\nfont-weight:400;\nline-height:22px;\nmax-width:100%;\npadding-left:15px;\npadding-right:15px;\nposition:relative;\ntext-align:center;\n-webkit-text-size-adjust:100%;\n   -moz-text-size-adjust:100%;\n    -ms-text-size-adjust:100%;\n        text-size-adjust:100%;\nwidth:1140px;\n-webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n}\n\n.cards-1 {\n\tpadding-top: 4rem;\n\tpadding-bottom: 1.625rem;\n\ttext-align: center;\n}\n\n.cards-1 .card {\n\tmax-width: 21rem;\n\tmargin-right: auto;\n\tmargin-bottom: 4.5rem;\n\tmargin-left: auto;\n\tpadding: 3.25rem 2rem 2rem 2rem;\n\tborder: 1px solid #336633;\n\tborder-radius: 0.5rem;\n\tbackground: transparent;\n}\n\n.cards-1 .card-title {\n\tmargin-bottom: 0.875rem;\n}\n\n.cards-1 .card-body {\n\tpadding: 0;\n}\n\n.cards-1 .card {\n    display: inline-block;\n    max-width: 17.125rem;\n    vertical-align: top;\n}\n\n.cards-1 .col-lg-12 div.card:nth-child(3n+2) {\n    margin-right: 2rem;\n    margin-left: 2rem;\n}\n\n.card {\n    background-clip:border-box;\n    background-color:rgba(0, 0, 0, 0);\n    border-bottom-color:rgb(196, 216, 220);\n    border-bottom-left-radius:8px;\n    border-bottom-right-radius:8px;\n    border-bottom-style:solid;\n    border-bottom-width:1px;\n    border-image-outset:0px;\n    border-image-repeat:stretch;\n    border-image-slice:100%;\n    border-image-source:none;\n    border-image-width:1;\n    border-left-color:rgb(196, 216, 220);\n    border-left-style:solid;\n    border-left-width:1px;\n    border-right-color:rgb(196, 216, 220);\n    border-right-style:solid;\n    border-right-width:1px;\n    border-top-color:rgb(196, 216, 220);\n    border-top-left-radius:8px;\n    border-top-right-radius:8px;\n    border-top-style:solid;\n    border-top-width:1px;\n    box-sizing:border-box;\n    display:inline-block;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n            flex-direction:column;\n    font-size:14px;\n    font-stretch:100%;\n    font-style:normal;\n    font-variant-caps:normal;\n    font-variant-east-asian:normal;\n    -webkit-font-variant-ligatures:normal;\n            font-variant-ligatures:normal;\n    font-variant-numeric:normal;\n    font-weight:400;\n    height:200px;\n    line-height:22px;\n    margin-bottom:72px;\n    margin-left:0px;\n    margin-right:0px;\n    max-width:336px;\n    min-width:0px;\n    overflow-wrap:break-word;\n    padding-bottom:32px;\n    padding-left:32px;\n    padding-right:32px;\n    padding-top:52px;\n    position:relative;\n    text-align:center;\n    -webkit-text-size-adjust:100%;\n       -moz-text-size-adjust:100%;\n        -ms-text-size-adjust:100%;\n            text-size-adjust:100%;\n    vertical-align:top;\n    width:336px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUM7O0FBRUQ7QUFDQSxxQkFBcUI7QUFDckIsYUFBYTtBQUNiLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLHdCQUF3QjtBQUN4Qiw4QkFBOEI7QUFDOUIscUNBQTZCO1FBQTdCLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsZUFBZTtBQUNmLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsNkJBQXFCO0dBQXJCLDBCQUFxQjtJQUFyQix5QkFBcUI7UUFBckIscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWCw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsYUFBYTtBQUNiLGVBQWU7QUFDZixrQkFBVztRQUFYLFdBQVc7QUFDWCxhQUFhO0FBQ2IsK0JBQStCO0FBQy9CLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLHdCQUF3QjtBQUN4Qiw4QkFBOEI7QUFDOUIscUNBQTZCO1FBQTdCLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLDZCQUFxQjtHQUFyQiwwQkFBcUI7SUFBckIseUJBQXFCO1FBQXJCLHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osNENBQTRDO0FBQzVDOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsK0JBQStCO0NBQy9CLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUNJO0lBQ0EsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLDJCQUFxQjtJQUFyQiw0QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsNkJBQXFCO09BQXJCLDBCQUFxQjtRQUFyQix5QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6IGhvbWUuY29tcG9uZW50LmNzcyAoV2VlayA2KVxuOyBBdXRob3JzOiBbVHlsZXIgQXJtc3Ryb25nXSwgRGF2aWQgVGFydmluLCBBYXJvbiBXaWxzb25cbjsgRGF0ZTogMjMgT2N0IDIwMTlcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyIFJlcGFpciBTaG9wXG47IExlZ2VuZDogW10gLT4gVGVhbSBtZW1iZXIgcmVzcG9uc2libGUgZm9yIHBhZ2UuXG47ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbmRpdiAjc2VydmljZXMgLmNhcmRzLTF7XG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG5kaXNwbGF5OmJsb2NrO1xuZm9udC1zaXplOjE0cHg7XG5mb250LXN0cmV0Y2g6MTAwJTtcbmZvbnQtc3R5bGU6bm9ybWFsO1xuZm9udC12YXJpYW50LWNhcHM6bm9ybWFsO1xuZm9udC12YXJpYW50LWVhc3QtYXNpYW46bm9ybWFsO1xuZm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7XG5mb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7XG5mb250LXdlaWdodDo0MDA7XG5oZWlnaHQ6MzAwcHg7XG5saW5lLWhlaWdodDoyMnB4O1xucGFkZGluZy1ib3R0b206MjZweDtcbnBhZGRpbmctdG9wOjIwcHg7XG50ZXh0LWFsaWduOmNlbnRlcjtcbnRleHQtc2l6ZS1hZGp1c3Q6MTAwJTtcbndpZHRoOiAxMDAlO1xuLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5jb2wtbGctMTJ7XG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG5kaXNwbGF5OmJsb2NrO1xuZmxleC1iYXNpczoxMDAlO1xuZmxleC1ncm93OjA7XG5mbGV4LXNocmluazowO1xuZm9udC1mYW1pbHk6UmFsZXdheSwgc2Fucy1zZXJpZjtcbmZvbnQtc2l6ZToxNHB4O1xuZm9udC1zdHJldGNoOjEwMCU7XG5mb250LXN0eWxlOm5vcm1hbDtcbmZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtcbmZvbnQtdmFyaWFudC1lYXN0LWFzaWFuOm5vcm1hbDtcbmZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO1xuZm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO1xuZm9udC13ZWlnaHQ6NDAwO1xubGluZS1oZWlnaHQ6MjJweDtcbm1heC13aWR0aDoxMDAlO1xucGFkZGluZy1sZWZ0OjE1cHg7XG5wYWRkaW5nLXJpZ2h0OjE1cHg7XG5wb3NpdGlvbjpyZWxhdGl2ZTtcbnRleHQtYWxpZ246Y2VudGVyO1xudGV4dC1zaXplLWFkanVzdDoxMDAlO1xud2lkdGg6MTE0MHB4O1xuLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5jYXJkcy0xIHtcblx0cGFkZGluZy10b3A6IDRyZW07XG5cdHBhZGRpbmctYm90dG9tOiAxLjYyNXJlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZHMtMSAuY2FyZCB7XG5cdG1heC13aWR0aDogMjFyZW07XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogNC41cmVtO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0cGFkZGluZzogMy4yNXJlbSAycmVtIDJyZW0gMnJlbTtcblx0Ym9yZGVyOiAxcHggc29saWQgIzMzNjYzMztcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNhcmRzLTEgLmNhcmQtdGl0bGUge1xuXHRtYXJnaW4tYm90dG9tOiAwLjg3NXJlbTtcbn1cblxuLmNhcmRzLTEgLmNhcmQtYm9keSB7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5jYXJkcy0xIC5jYXJkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxNy4xMjVyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNhcmRzLTEgLmNvbC1sZy0xMiBkaXYuY2FyZDpudGgtY2hpbGQoM24rMikge1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbiAgICAuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jbGlwOmJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiKDE5NiwgMjE2LCAyMjApO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6OHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjhweDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6MXB4O1xuICAgIGJvcmRlci1pbWFnZS1vdXRzZXQ6MHB4O1xuICAgIGJvcmRlci1pbWFnZS1yZXBlYXQ6c3RyZXRjaDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6MTAwJTtcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOm5vbmU7XG4gICAgYm9yZGVyLWltYWdlLXdpZHRoOjE7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6cmdiKDE5NiwgMjE2LCAyMjApO1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOjFweDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6cmdiKDE5NiwgMjE2LCAyMjApO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6MXB4O1xuICAgIGJvcmRlci10b3AtY29sb3I6cmdiKDE5NiwgMjE2LCAyMjApO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6OHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjhweDtcbiAgICBib3JkZXItdG9wLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6MXB4O1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgZm9udC1zdHJldGNoOjEwMCU7XG4gICAgZm9udC1zdHlsZTpub3JtYWw7XG4gICAgZm9udC12YXJpYW50LWNhcHM6bm9ybWFsO1xuICAgIGZvbnQtdmFyaWFudC1lYXN0LWFzaWFuOm5vcm1hbDtcbiAgICBmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtcbiAgICBmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIGhlaWdodDoyMDBweDtcbiAgICBsaW5lLWhlaWdodDoyMnB4O1xuICAgIG1hcmdpbi1ib3R0b206NzJweDtcbiAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjBweDtcbiAgICBtYXgtd2lkdGg6MzM2cHg7XG4gICAgbWluLXdpZHRoOjBweDtcbiAgICBvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7XG4gICAgcGFkZGluZy1ib3R0b206MzJweDtcbiAgICBwYWRkaW5nLWxlZnQ6MzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjMycHg7XG4gICAgcGFkZGluZy10b3A6NTJweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICB0ZXh0LXNpemUtYWRqdXN0OjEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHdpZHRoOjMzNnB4O1xuICAgIH0iXX0= */"

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

/***/ "./src/app/pages/question-add/question-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/question-add/question-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uLWFkZC9xdWVzdGlvbi1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/question-add/question-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/question-add/question-add.component.ts ***!
  \**************************************************************/
/*! exports provided: QuestionAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAddComponent", function() { return QuestionAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title: question-add.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date: 08 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/





let QuestionAddComponent = class QuestionAddComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.addQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            securityQuestion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    addQuestion() {
        const questionText = this.addQuestionForm.get('securityQuestion').value;
        const newQuestion = { questionText };
        console.log(newQuestion);
        this.http.post('/api/security-questions', newQuestion).subscribe(res => {
            if (res) {
                console.log('Question ' + questionText + ' added to list');
                this.router.navigate(['/session/security-questions']);
            }
            else {
                console.log('Something went wrong');
            }
        });
    }
    cancel() {
        this.router.navigate(['/session/security-questions']);
    }
};
QuestionAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
QuestionAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-question-add',
        template: __webpack_require__(/*! raw-loader!./question-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/question-add/question-add.component.html"),
        styles: [__webpack_require__(/*! ./question-add.component.css */ "./src/app/pages/question-add/question-add.component.css")]
    })
], QuestionAddComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
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
        this.http.get('/api/security-questions').subscribe(res => {
            this.questions = res;
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
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
    }
    onSubmit() {
        // 1. Get form values
        const username = this.registrationForm.get('username').value;
        const password = this.registrationForm.get('password').value;
        const firstName = this.registrationForm.get('firstName').value;
        const lastName = this.registrationForm.get('lastName').value;
        const phoneNumber = this.registrationForm.get('phoneNumber').value;
        const address = this.registrationForm.get('address').value;
        const email = this.registrationForm.get('email').value;
        const role = this.registrationForm.get('role').value;
        const securityQuestion1 = this.registrationForm.get('securityQuestion1').value;
        const answer1 = this.registrationForm.get('answer1').value;
        const securityQuestion2 = this.registrationForm.get('securityQuestion2').value;
        const answer2 = this.registrationForm.get('answer2').value;
        const securityQuestion3 = this.registrationForm.get('securityQuestion3').value;
        const answer3 = this.registrationForm.get('answer3').value;
        // 2. Create new user object literal from form values
        const newUser = {
            username,
            password,
            firstName,
            lastName,
            phoneNumber,
            address,
            email,
            role,
            selectedSecurityQuestions: [
                { questionId: securityQuestion1, answerText: answer1 },
                { questionId: securityQuestion2, answerText: answer2 },
                { questionId: securityQuestion3, answerText: answer3 }
            ]
        };
        // 3. Post new user to db
        const apiBaseURL = '/api/users';
        this.http.post(apiBaseURL, newUser).subscribe(res => {
            if (res) {
                this.cookie.set('isAuthenticated', 'true', 1);
                this.cookie.set(username, 'true', 1);
                this.router.navigate(['/session/user-management']);
            }
            else {
                this.errorMessage = 'Something went wrong.';
                console.log(`Error: ${this.errorMessage}`);
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
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

/***/ "./src/app/pages/role-add/role-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/role-add/role-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUtYWRkL3JvbGUtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/role-add/role-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/role-add/role-add.component.ts ***!
  \******************************************************/
/*! exports provided: RoleAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAddComponent", function() { return RoleAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title: role-add.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date: 08 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






let RoleAddComponent = class RoleAddComponent {
    constructor(cookieService, router, http) {
        this.cookieService = cookieService;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.addRoleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    addRole() {
        const roleTitle = this.addRoleForm.get('role').value;
        const newRole = { roleTitle };
        console.log(newRole);
        this.http.post('/api/roles', newRole).subscribe(res => {
            if (res) {
                console.log('Role ' + roleTitle + ' added to list');
                this.router.navigate(['/session/role-configuration']);
            }
            else {
                console.log('Something went wrong');
            }
        });
    }
    cancel() {
        this.router.navigate(['/session/role-configuration']);
    }
};
RoleAddComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RoleAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-role-add',
        template: __webpack_require__(/*! raw-loader!./role-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/role-add/role-add.component.html"),
        styles: [__webpack_require__(/*! ./role-add.component.css */ "./src/app/pages/role-add/role-add.component.css")]
    })
], RoleAddComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
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






let RoleConfigurationComponent = class RoleConfigurationComponent {
    constructor(http, router, dialog) {
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['roleTitle', 'actions'];
        this.http.get('/api/roles').subscribe(res => {
            this.roles = res;
            console.log(this.roles);
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
    edit(roleId) {
        this.router.navigate(['/session/role-edit/' + roleId]);
    }
    delete(roleId, roleTitle) {
        const dialogRef = this.dialog.open(_shared_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["RoleDeleteDialogComponent"], {
            data: {
                roleTitle: roleTitle
            },
            disableClose: true,
            width: '800px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'confirm') {
                this.http.delete('/api/roles/' + roleId).subscribe(res => {
                    console.log('Role deleted');
                    this.roles = this.roles.filter(r => r._id !== roleId);
                });
            }
            else if (result === 'cancel') {
                this.router.navigate(['/session/role-configuration']);
            }
        });
    }
};
RoleConfigurationComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
RoleConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-configuration',
        template: __webpack_require__(/*! raw-loader!./role-configuration.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/role-configuration/role-configuration.component.html"),
        styles: [__webpack_require__(/*! ./role-configuration.component.css */ "./src/app/pages/role-configuration/role-configuration.component.css")]
    })
], RoleConfigurationComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/*
; =======================================================
; Title:  role-edit.component.ts (Week 7)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date:   06 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/





let RoleEditComponent = class RoleEditComponent {
    constructor(route, http, fb, router) {
        this.route = route;
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.roleId = this.route.snapshot.paramMap.get('id');
        console.log('roleId is ' + this.roleId);
        this.http.get('/api/roles/' + this.roleId).subscribe(res => {
            console.log('The roleId in the GET request is ' + this.roleId);
            this.role = res;
            console.log('This role is ' + JSON.stringify(this.role));
        }, err => {
            console.log(err);
        }, () => {
            this.form.controls['roleTitle'].setValue(this.role.roleTitle);
        });
    }
    ngOnInit() {
        this.form = this.fb.group({
            roleTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
        });
    }
    saveRole() {
        this.http.put('/api/roles/update/' + this.roleId, {
            roleTitle: this.form.controls['roleTitle'].value
        }).subscribe(res => {
            this.router.navigate(['/session/role-configuration']);
        });
    }
    cancel() {
        this.router.navigate(['/session/role-configuration']);
    }
};
RoleEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RoleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-edit',
        template: __webpack_require__(/*! raw-loader!./role-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/role-edit/role-edit.component.html"),
        styles: [__webpack_require__(/*! ./role-edit.component.css */ "./src/app/pages/role-edit/role-edit.component.css")]
    })
], RoleEditComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title:  server-error.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


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

/***/ "./src/app/pages/service-repair/service-repair.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/service-repair/service-repair.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2UtcmVwYWlyL3NlcnZpY2UtcmVwYWlyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/service-repair/service-repair.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/service-repair/service-repair.component.ts ***!
  \******************************************************************/
/*! exports provided: ServiceRepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRepairComponent", function() { return ServiceRepairComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_bcrs_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/bcrs-services.service */ "./src/app/shared/services/bcrs-services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/*
; =======================================================
; Title: service repair page
; Authors: [Tyler Armstrong], David Tarvin, Lea Trueworthy
; Date: 05 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/







let ServiceRepairComponent = class ServiceRepairComponent {
    constructor(services, cookie, router, http) {
        this.services = services;
        this.cookie = cookie;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.services.get().subscribe(res => { this.data = res; });
        this.serviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            passwordReset: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            spywareRemoval: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            ramUpgrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            softwareInstallation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            tuneup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            keyboardCleaning: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            discCleanup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            parts: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            labor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    onSubmit(formValues) {
        this.services.get().subscribe(res => { this.data = res; });
        if (!this.serviceForm) {
            // 1. Check if at least one service was selected.
            return this.errorMessage = 'You must select at least one service.';
        }
        else {
            // 2. Get values to build invoice
            // user
            console.log(this.cookie.getAll());
            for (const key in this.data) {
                if (this.data.hasOwnProperty(key)) {
                    const service = this.data[key];
                    if (service.control === 'passwordReset') {
                        if (this.serviceForm.get('passwordReset').value) {
                            console.log(service);
                            // this.invoice.services.push(service);
                        }
                    }
                }
            }
            if (this.serviceForm.get('spywareRemoval').value) {
                this.invoice.spywareRemoval = this.data.spywareRemoval.cost;
            }
            const ramUpgrade = this.serviceForm.get('ramUpgrade').value;
            const softwareInstallation = this.serviceForm.get('softwareInstallation').value;
            const tuneup = this.serviceForm.get('tuneup').value;
            const keyboardCleaning = this.serviceForm.get('keyboardCleaning').value;
            const discCleanup = this.serviceForm.get('discCleanup').value;
            const parts = this.serviceForm.get('parts').value;
            const labor = this.serviceForm.get('labor').value;
            const total = this.serviceForm.get('total').value;
            // 3. Create Invoice object
            // this.invoice = {
            //   passwordReset,
            //   spywareRemoval,
            //   ramUpgrade,
            //   softwareInstallation,
            //   tuneup,
            //   keyboardCleaning,
            //   discCleanup,
            //   parts,
            //   labor: labor * 50
            // };
            // 4. Save Invoice to db
            // 5. Open Invoice Dialog
        }
    }
};
ServiceRepairComponent.ctorParameters = () => [
    { type: _shared_services_bcrs_services_service__WEBPACK_IMPORTED_MODULE_2__["BcrsServicesService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
ServiceRepairComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-repair',
        template: __webpack_require__(/*! raw-loader!./service-repair.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/service-repair/service-repair.component.html"),
        styles: [__webpack_require__(/*! ./service-repair.component.css */ "./src/app/pages/service-repair/service-repair.component.css")]
    })
], ServiceRepairComponent);



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
        this.SelectedRole = '';
        this.userId = this.route.snapshot.paramMap.get('id');
        this.http.get('/api/users/' + this.userId).subscribe(res => {
            this.user = res;
            this.selected = this.SelectedRole = res['role'];
        }, err => {
            console.log(err);
        }, () => {
            this.form.controls.firstName.setValue(this.user.firstName);
            this.form.controls.lastName.setValue(this.user.lastName);
            this.form.controls.phoneNumber.setValue(this.user.phoneNumber);
            this.form.controls.address.setValue(this.user.address);
            this.form.controls.email.setValue(this.user.email);
            this.form.controls.role.setValue(this.user.role);
            this.http.get('api/roles').subscribe(res => {
                this.roles = res;
                console.log(this.roles);
            }, err => {
                console.log(err);
            });
        });
    }
    ngOnInit() {
        this.form = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            role: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    saveUser() {
        console.log("clicked submit button");
        console.log(this.selected);
        this.http.put('/api/users/' + this.userId, {
            firstName: this.form.controls['firstName'].value,
            lastName: this.form.controls['lastName'].value,
            phoneNumber: this.form.controls['phoneNumber'].value,
            address: this.form.controls['address'].value,
            email: this.form.controls['email'].value,
            role: this.form.controls['role'].value
        }).subscribe(res => {
            this.router.navigate(['/session/user-management']);
            console.log(this.user);
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
        this.displayedColumns = ['username', 'firstName', 'lastName', 'phoneNumber', 'address', 'email', 'role', 'functions'];
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title: reset-password-form.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date: 04 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






let ResetPasswordFormComponent = class ResetPasswordFormComponent {
    constructor(http, route, router, fb, cookieService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.cookieService = cookieService;
        this.isAuthenticated = this.route.snapshot.queryParamMap.get('isAuthenticated');
        this.username = this.route.snapshot.queryParamMap.get('username');
    }
    ngOnInit() {
        this.form = this.fb.group({
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#%*?&]{8,}$')]]
        });
    }
    resetPassword() {
        this.http.post('/api/users/' + this.username + '/reset-password', {
            password: this.form.controls['password'].value
        }).subscribe(res => {
            this.cookieService.set('isAuthenticated', 'true', 1);
            this.cookieService.set('username', this.username, 1);
            this.router.navigate(['/']);
        }, err => {
            console.log(err);
        });
    }
};
ResetPasswordFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }
];
ResetPasswordFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-reset-password-form',
        template: __webpack_require__(/*! raw-loader!./reset-password-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/reset-password-form/reset-password-form.component.html"),
        styles: [__webpack_require__(/*! ./reset-password-form.component.css */ "./src/app/reset-password-form/reset-password-form.component.css")]
    })
], ResetPasswordFormComponent);



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n; =======================================================\n; Title: base-layout.component.css (Week 6)\n; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson\n; Date: 23 Oct 2019\n; Description: Bob's Computer Repair Shop\n; Legend: [] -> Team member responsible for page.\n; =======================================================\n*/\n\n\nmat-toolbar{\n    margin: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUM7OztBQUdEO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuOyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47IFRpdGxlOiBiYXNlLWxheW91dC5jb21wb25lbnQuY3NzIChXZWVrIDYpXG47IEF1dGhvcnM6IFtUeWxlciBBcm1zdHJvbmddLCBEYXZpZCBUYXJ2aW4sIEFhcm9uIFdpbHNvblxuOyBEYXRlOiAyMyBPY3QgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXIgUmVwYWlyIFNob3BcbjsgTGVnZW5kOiBbXSAtPiBUZWFtIG1lbWJlciByZXNwb25zaWJsZSBmb3IgcGFnZS5cbjsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuXG5tYXQtdG9vbGJhcntcbiAgICBtYXJnaW46IDAlO1xufSJdfQ== */"

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
        this.validated = this.cookie.check('isAuthenticated');
    }
    userLogout() {
        this.cookie.deleteAll();
        this.router.navigate(['/login']);
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
            this.router.navigate(['/login']);
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

/***/ "./src/app/shared/guards/role.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/role.guard.ts ***!
  \*********************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let RoleGuard = class RoleGuard {
    constructor(router, http, cookieService) {
        this.router = router;
        this.http = http;
        this.cookieService = cookieService;
    }
    canActivate(route, state) {
        return this.getRole().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            console.log(res);
            if (res === 'admin') {
                return true;
            }
            else {
                this.router.navigate(['/']);
                return false;
            }
        }));
    }
    getRole() {
        return this.http.get('/api/users/' + this.cookieService.get('username') + '/role');
    }
};
RoleGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
RoleGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({ providedIn: 'root' })
], RoleGuard);



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

/***/ "./src/app/shared/invoice-dialog/invoice-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/invoice-dialog/invoice-dialog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbnZvaWNlLWRpYWxvZy9pbnZvaWNlLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/invoice-dialog/invoice-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/invoice-dialog/invoice-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: InvoiceDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDialogComponent", function() { return InvoiceDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title: invoice dialog
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 5 Nov 19
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


let InvoiceDialogComponent = class InvoiceDialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
InvoiceDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-dialog',
        template: __webpack_require__(/*! raw-loader!./invoice-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/invoice-dialog/invoice-dialog.component.html"),
        styles: [__webpack_require__(/*! ./invoice-dialog.component.css */ "./src/app/shared/invoice-dialog/invoice-dialog.component.css")]
    })
], InvoiceDialogComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title:  role-delete-dialog.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date:   06 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/




let RoleDeleteDialogComponent = class RoleDeleteDialogComponent {
    constructor(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.roleTitle = data.roleTitle;
    }
    ngOnInit() {
    }
};
RoleDeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
RoleDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-role-delete-dialog',
        template: __webpack_require__(/*! raw-loader!./role-delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/role-delete-dialog/role-delete-dialog.component.html"),
        styles: [__webpack_require__(/*! ./role-delete-dialog.component.css */ "./src/app/shared/role-delete-dialog/role-delete-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], RoleDeleteDialogComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
; =======================================================
; Title:  error.interceptor.ts (Week 7)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   02 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/






let ErrorInterceptor = class ErrorInterceptor {
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            if ([404].indexOf(err.status) !== -1) {
                this.router.navigate(['/session/404']);
            }
            if ([500].indexOf(err.status) !== -1) {
                this.router.navigate(['/session/500']);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/shared/services/bcrs-services.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/bcrs-services.service.ts ***!
  \**********************************************************/
/*! exports provided: BcrsServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcrsServicesService", function() { return BcrsServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BcrsServicesService = class BcrsServicesService {
    constructor(http) {
        this.http = http;
    }
    get() {
        const apiURL = `/api/services`;
        return this.http.get(apiURL);
    }
};
BcrsServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BcrsServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BcrsServicesService);



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
        this.validated = this.cookie.check('isAuthenticated');
    }
    userLogout() {
        this.cookie.deleteAll();
        this.router.navigate(['/login']);
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title:  verify-security-questions.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/





let VerifySecurityQuestionsFormComponent = class VerifySecurityQuestionsFormComponent {
    constructor(route, router, http, fb) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.wrongAnswer = false;
        this.username = this.route.snapshot.queryParamMap.get('username');
        console.log(this.username);
        this.http.get('/api/verify/users/' + this.username + '/security-questions').subscribe(res => {
            this.user = (res);
            console.log('this.selectedSecurityQuestions is ' + this.user.selectedSecurityQuestions[0].answerText);
            this.question1 = this.user.selectedSecurityQuestions[0].questionText;
            console.log('This.question1 is ' + this.question1);
            this.answer1 = this.user.selectedSecurityQuestions[0].answerText;
            console.log('The answer to question1 is ' + this.answer1);
            this.question2 = this.user.selectedSecurityQuestions[1].questionText;
            console.log('This.question2 is ' + this.question2);
            this.answer2 = this.user.selectedSecurityQuestions[1].answerText;
            console.log('The answer to question2 is ' + this.answer2);
            this.question3 = this.user.selectedSecurityQuestions[2].questionText;
            console.log('This.question3 is ' + this.question3);
            this.answer3 = this.user.selectedSecurityQuestions[2].answerText;
            console.log('The answer to question3 is ' + this.answer3);
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
        this.form = this.fb.group({
            answerToSecurityQuestion1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            answerToSecurityQuestion2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            answerToSecurityQuestion3: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    verifySecurityQuestions() {
        const answerToSecurityQuestion1 = this.form.controls['answerToSecurityQuestion1'].value;
        const answerToSecurityQuestion2 = this.form.controls['answerToSecurityQuestion2'].value;
        const answerToSecurityQuestion3 = this.form.controls['answerToSecurityQuestion3'].value;
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
    }
};
VerifySecurityQuestionsFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
VerifySecurityQuestionsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-verify-security-questions-form',
        template: __webpack_require__(/*! raw-loader!./verify-security-questions-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/verify-security-questions-form/verify-security-questions-form.component.html"),
        styles: [__webpack_require__(/*! ./verify-security-questions-form.component.css */ "./src/app/verify-security-questions-form/verify-security-questions-form.component.css")]
    })
], VerifySecurityQuestionsFormComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; =======================================================
; Title:  verify-username-form.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/





let VerifyUsernameFormComponent = class VerifyUsernameFormComponent {
    constructor(http, fb, router) {
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.notAUser = false;
    }
    ngOnInit() {
        this.form1 = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    validateUsername() {
        const username = this.form1.controls['username'].value;
        this.http.get('/api/users/username/' + username).subscribe(res => {
            if (res) {
                this.user = res;
                this.router.navigate(['/verify-security-questions/'], { queryParams: { username: username }, skipLocationChange: true });
            }
            else {
                return this.notAUser = true;
            }
        }, err => {
            console.log(err);
        });
    }
};
VerifyUsernameFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
VerifyUsernameFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-verify-username-form',
        template: __webpack_require__(/*! raw-loader!./verify-username-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/verify-username-form/verify-username-form.component.html"),
        styles: [__webpack_require__(/*! ./verify-username-form.component.css */ "./src/app/verify-username-form/verify-username-form.component.css")]
    })
], VerifyUsernameFormComponent);



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

module.exports = __webpack_require__(/*! /Users/leatrueworthy/Desktop/web450-group3-bobs-repair/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
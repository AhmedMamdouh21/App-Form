function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_small_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_15_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is Email Address is invalid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_15_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is Email Address is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_span_15_small_1_Template, 2, 0, "small", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_span_15_small_2_Template, 2, 0, "small", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.get("email").errors["email"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.get("email").errors["required"]);
      }
    }

    function AppComponent_span_20_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is Mobile is invalid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_20_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is Mobile is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_span_20_small_1_Template, 2, 0, "small", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_span_20_small_2_Template, 2, 0, "small", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("phone").errors["pattern"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("phone").errors["required"]);
      }
    }

    function AppComponent_span_25_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Use 8 or more characters or numbers for your password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_25_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is Password is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_span_25_small_1_Template, 2, 0, "small", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_span_25_small_2_Template, 2, 0, "small", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.get("password").errors["minlength"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.get("password").errors["required"]);
      }
    }

    function AppComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r12 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r12);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app-form';
        this.phonePattern = /^[0-9]{10,12}$/;
      } // passwordPattern = /^[0-8]{8,30}$/;


      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.phonePattern)]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            'hobbies': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]) // 'password': new FormControl(null, Validators.required)

          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.signupForm);
        }
      }, {
        key: "onAddHobbies",
        value: function onAddHobbies() {
          var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
          this.signupForm.get('hobbies').push(control);
        }
      }, {
        key: "getControls",
        value: function getControls() {
          return this.signupForm.get('hobbies').controls;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 35,
      vars: 7,
      consts: [[1, "container"], [1, "row", "py-md-5", "py-3", "min-vh-100", "align-items-center", "justify-content-center"], [1, "col-md-8", "p-5", "form-wrap"], [1, "text-white", "text-center", "mb-5"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "username", 1, "form-control"], ["for", "username"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "email", "formControlName", "email", 1, "form-control"], ["for", "email"], [4, "ngIf"], ["type", "number", "formControlName", "phone", 1, "form-control"], ["for", "phone"], ["type", "password", "formControlName", "password", 1, "form-control"], ["for", ""], ["formArrayName", "hobbies", 1, "mb-3"], ["type", "button", 1, "btn", "btn-outline-dark", "text-white", "mb-3", 3, "click"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], [1, "btn-anim-top-right"], [1, "btn-anim-bottom-left"], [1, "form-text", "text-danger"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["type", "text", 1, "form-control", 3, "formControlName"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_small_10_Template, 2, 0, "small", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_span_15_Template, 3, 2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_span_20_Template, 3, 2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_span_25_Template, 3, 2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_27_listener() {
            return ctx.onAddHobbies();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add Hobby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_div_29_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("username").valid && ctx.signupForm.get("username").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("email").valid && ctx.signupForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("phone").valid && ctx.signupForm.get("phone").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("password").valid && ctx.signupForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getControls());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".btn.focus[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none !important;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, .5);\r\n    box-sizing: border-box;\r\n    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);\r\n    border-radius: 10px;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    margin-bottom: 0;\r\n    padding: 0;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    outline: none;\r\n    background: transparent;\r\n    border-radius: 0;\r\n    color: #fff;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 0;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    pointer-events: none;\r\n    transition: .5s;\r\n    color: #fff;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], .form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], .form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .ng-valid.ng-touched[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%] {\r\n    top: -20px;\r\n    left: 0;\r\n    color: #fff;\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border-bottom-color: #dc3545;\r\n    color: #dc3545;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .ng-valid.ng-touched[_ngcontent-%COMP%] {\r\n    border-bottom-color: #28a745;\r\n    \r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    padding: 10px 20px;\r\n    color: #03e9f4;\r\n    font-size: 16px;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    overflow: hidden;\r\n    transition: .5s;\r\n    margin-top: 40px;\r\n    letter-spacing: 4px;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:not(:disabled):not(.disabled)   .btn-anim-top-right[_ngcontent-%COMP%], .form-wrap[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:not(:disabled):not(.disabled)   .btn-anim-bottom-left[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    bottom: auto;\r\n    left: auto;\r\n    right: 0;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:not(:disabled):not(.disabled)   .btn-anim-bottom-left[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    right: auto;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:not(:disabled):not(.disabled)   .btn-anim-top-right[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 2px;\r\n    background: linear-gradient(90deg, transparent, #03e9f4);\r\n    -webkit-animation: btn-anim1 1s linear infinite;\r\n            animation: btn-anim1 1s linear infinite;\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:not(:disabled):not(.disabled)   .btn-anim-top-right[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    top: -100%;\r\n    right: 0;\r\n    width: 2px;\r\n    height: 100%;\r\n    background: linear-gradient(180deg, transparent, #03e9f4);\r\n    -webkit-animation: btn-anim2 1s linear infinite;\r\n            animation: btn-anim2 1s linear infinite;\r\n    -webkit-animation-delay: .25s;\r\n            animation-delay: .25s\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:not(:disabled):not(.disabled)   .btn-anim-bottom-left[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    bottom: 0;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 2px;\r\n    background: linear-gradient(270deg, transparent, #03e9f4);\r\n    -webkit-animation: btn-anim3 1s linear infinite;\r\n            animation: btn-anim3 1s linear infinite;\r\n    -webkit-animation-delay: .5s;\r\n            animation-delay: .5s\r\n}\r\n\r\n.form-wrap[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:not(:disabled):not(.disabled)   .btn-anim-bottom-left[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    bottom: -100%;\r\n    left: 0;\r\n    width: 2px;\r\n    height: 100%;\r\n    background: linear-gradient(360deg, transparent, #03e9f4);\r\n    -webkit-animation: btn-anim4 1s linear infinite;\r\n            animation: btn-anim4 1s linear infinite;\r\n    -webkit-animation-delay: .75s;\r\n            animation-delay: .75s\r\n}\r\n\r\n@-webkit-keyframes btn-anim1 {\r\n    0% {\r\n        left: -100%;\r\n    }\r\n    50%,\r\n    100% {\r\n        left: 100%;\r\n    }\r\n}\r\n\r\n@keyframes btn-anim1 {\r\n    0% {\r\n        left: -100%;\r\n    }\r\n    50%,\r\n    100% {\r\n        left: 100%;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes btn-anim2 {\r\n    0% {\r\n        top: -100%;\r\n    }\r\n    50%,\r\n    100% {\r\n        top: 100%;\r\n    }\r\n}\r\n\r\n@keyframes btn-anim2 {\r\n    0% {\r\n        top: -100%;\r\n    }\r\n    50%,\r\n    100% {\r\n        top: 100%;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes btn-anim3 {\r\n    0% {\r\n        right: -100%;\r\n    }\r\n    50%,\r\n    100% {\r\n        right: 100%;\r\n    }\r\n}\r\n\r\n@keyframes btn-anim3 {\r\n    0% {\r\n        right: -100%;\r\n    }\r\n    50%,\r\n    100% {\r\n        right: 100%;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes btn-anim4 {\r\n    0% {\r\n        bottom: -100%;\r\n    }\r\n    50%,\r\n    100% {\r\n        bottom: 100%;\r\n    }\r\n}\r\n\r\n@keyframes btn-anim4 {\r\n    0% {\r\n        bottom: -100%;\r\n    }\r\n    50%,\r\n    100% {\r\n        bottom: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0ksVUFBVTtJQUNWLE9BQU87SUFDUCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFHQTs7Ozs7O0dBTUc7O0FBRUg7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sWUFBWTtJQUNaLFVBQVU7SUFDVixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsTUFBTTtJQUNOLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLHdEQUF3RDtJQUN4RCwrQ0FBdUM7WUFBdkMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLHlEQUF5RDtJQUN6RCwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLDZCQUFvQjtZQUFwQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLHlEQUF5RDtJQUN6RCwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLDRCQUFtQjtZQUFuQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlEQUF5RDtJQUN6RCwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLDZCQUFvQjtZQUFwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7QUFDSjs7QUFSQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBOztRQUVJLFNBQVM7SUFDYjtBQUNKOztBQVJBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTs7UUFFSSxTQUFTO0lBQ2I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBOztRQUVJLFdBQVc7SUFDZjtBQUNKOztBQVJBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7O1FBRUksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTs7UUFFSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBUkE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTs7UUFFSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4uZm9jdXMsXHJcbi5idG46Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS13cmFwIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTVweCAyNXB4IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmZvcm0td3JhcCAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZm9ybS13cmFwIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXAgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS13cmFwIC5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0td3JhcCAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9ybS13cmFwIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzfmxhYmVsLFxyXG4uZm9ybS13cmFwIC5mb3JtLWdyb3VwIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR+bGFiZWwsXHJcbi5mb3JtLXdyYXAgLmZvcm0tZ3JvdXAgLm5nLXZhbGlkLm5nLXRvdWNoZWR+bGFiZWwge1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbi8qIC5mb3JtLXdyYXAgLmZvcm0tZ3JvdXAgLm5nLWludmFsaWQubmctdG91Y2hlZH5sYWJlbCB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmZvcm0td3JhcCAuZm9ybS1ncm91cCAubmctdmFsaWQubmctdG91Y2hlZH5sYWJlbCB7XHJcbiAgICBjb2xvcjogIzI4YTc0NTtcclxufSAqL1xyXG5cclxuLmZvcm0td3JhcCAuZm9ybS1ncm91cCAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkYzM1NDU7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmZvcm0td3JhcCAuZm9ybS1ncm91cCAubmctdmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgLyogY29sb3I6ICMyOGE3NDU7ICovXHJcbn1cclxuXHJcbi5mb3JtLXdyYXAgLmJ0bi1zdWJtaXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgY29sb3I6ICMwM2U5ZjQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG59XHJcblxyXG4uZm9ybS13cmFwIC5idG4tc3VibWl0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIC5idG4tYW5pbS10b3AtcmlnaHQsXHJcbi5mb3JtLXdyYXAgLmJ0bi1zdWJtaXQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkgLmJ0bi1hbmltLWJvdHRvbS1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXAgLmJ0bi1zdWJtaXQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkgLmJ0bi1hbmltLWJvdHRvbS1sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvcm0td3JhcCAuYnRuLXN1Ym1pdDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSAuYnRuLWFuaW0tdG9wLXJpZ2h0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgIzAzZTlmNCk7XHJcbiAgICBhbmltYXRpb246IGJ0bi1hbmltMSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXAgLmJ0bi1zdWJtaXQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkgLmJ0bi1hbmltLXRvcC1yaWdodDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHRyYW5zcGFyZW50LCAjMDNlOWY0KTtcclxuICAgIGFuaW1hdGlvbjogYnRuLWFuaW0yIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLjI1c1xyXG59XHJcblxyXG4uZm9ybS13cmFwIC5idG4tc3VibWl0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIC5idG4tYW5pbS1ib3R0b20tbGVmdDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB0cmFuc3BhcmVudCwgIzAzZTlmNCk7XHJcbiAgICBhbmltYXRpb246IGJ0bi1hbmltMyAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC41c1xyXG59XHJcblxyXG4uZm9ybS13cmFwIC5idG4tc3VibWl0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIC5idG4tYW5pbS1ib3R0b20tbGVmdDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm90dG9tOiAtMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgdHJhbnNwYXJlbnQsICMwM2U5ZjQpO1xyXG4gICAgYW5pbWF0aW9uOiBidG4tYW5pbTQgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuNzVzXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnRuLWFuaW0xIHtcclxuICAgIDAlIHtcclxuICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnRuLWFuaW0yIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0b3A6IC0xMDAlO1xyXG4gICAgfVxyXG4gICAgNTAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgfVxyXG4gICAgNTAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnRuLWFuaW00IHtcclxuICAgIDAlIHtcclxuICAgICAgICBib3R0b206IC0xMDAlO1xyXG4gICAgfVxyXG4gICAgNTAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Programming\Angular\app-form\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
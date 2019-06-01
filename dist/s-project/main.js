(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main class=\"main-content\">\n  <router-outlet></router-outlet>\n</main>\n<footer class=\"white-text app-content-footer d-flex align-items-center\">\n  <section class=\"container small text-right gray-text\">\n    Ivan Dias Ramos © All right reserved\n  </section>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    display: none; }\n  100% {\n    opacity: 1;\n    display: block; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    display: none; }\n  100% {\n    opacity: 1;\n    display: block; } }\n\n.fade-in {\n  -webkit-animation-duration: .6s;\n          animation-duration: .6s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn; }\n\n.app-content-footer {\n  padding: .6rem 0;\n  background-color: #191414; }\n\n.main-content {\n  margin-bottom: 4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFucmFtb3MvRGVza3RvcC9EZXZlbG9wbWVudC9zcG90aWZ5cHJvamVjdC9zcmMvYXNzZXRzL3Njc3MvdG9vbHMva2V5ZnJhbWVzLnRvb2xzLnNjc3MiLCIvVXNlcnMvaXZhbnJhbW9zL0Rlc2t0b3AvRGV2ZWxvcG1lbnQvc3BvdGlmeXByb2plY3Qvc3JjL2Fzc2V0cy9zY3NzL29iamVjdHMvYW5pbWF0aW9ucy5vYmplY3RzLnNjc3MiLCIvVXNlcnMvaXZhbnJhbW9zL0Rlc2t0b3AvRGV2ZWxvcG1lbnQvc3BvdGlmeXByb2plY3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaXZhbnJhbW9zL0Rlc2t0b3AvRGV2ZWxvcG1lbnQvc3BvdGlmeXByb2plY3Qvc3JjL2Fzc2V0cy9zY3NzL3NldHRpbmdzL3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhLEVBQUE7RUFFZjtJQUNFLFVBQVU7SUFDVixjQUFjLEVBQUEsRUFBQTs7QUFQbEI7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhLEVBQUE7RUFFZjtJQUNFLFVBQVU7SUFDVixjQUFjLEVBQUEsRUFBQTs7QUNQbEI7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQ0R4QjtFQUNFLGdCQUFnQjtFQUNoQix5QkNGZ0IsRUFBQTs7QURLbEI7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCV7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuIiwiLmZhZGUtaW4ge1xuICBhbmltYXRpb24tZHVyYXRpb246IC42cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cbiIsIkBpbXBvcnQgJy4uL2Fzc2V0cy9zY3NzL2NvbXBvbmVudC5zY3NzJztcblxuLmFwcC1jb250ZW50LWZvb3RlciB7XG4gIHBhZGRpbmc6IC42cmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2QtZ3JheTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG4iLCIkbW91bnRhaW4tbWVhZG93OiAjMURCOTU0O1xuJG1hbGFjaGl0ZTogIzFFRDc2MDtcbiRjb2QtZ3JheTogIzE5MTQxNDtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRncmF5OiBkYXJrZW4oJHdoaXRlLCAyMCUpO1xuXG4kYmFzZS10cmFuc2l0aW9uOiBhbGwgLjQ1cztcbiJdfQ== */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 's-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header d-flex align-items-center\">\n  <section class=\"container white-text text-center\">\n    <h4 class=\"m-0\">GFT Project</h4>\n  </section>\n</header>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    display: none; }\n  100% {\n    opacity: 1;\n    display: block; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    display: none; }\n  100% {\n    opacity: 1;\n    display: block; } }\n\n.fade-in {\n  -webkit-animation-duration: .6s;\n          animation-duration: .6s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn; }\n\n:host {\n  display: block; }\n\n.main-header {\n  height: 3rem;\n  background-color: #1DB954;\n  border-bottom: 1px solid #271f1f; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFucmFtb3MvRGVza3RvcC9EZXZlbG9wbWVudC9zcG90aWZ5cHJvamVjdC9zcmMvYXNzZXRzL3Njc3MvdG9vbHMva2V5ZnJhbWVzLnRvb2xzLnNjc3MiLCIvVXNlcnMvaXZhbnJhbW9zL0Rlc2t0b3AvRGV2ZWxvcG1lbnQvc3BvdGlmeXByb2plY3Qvc3JjL2Fzc2V0cy9zY3NzL29iamVjdHMvYW5pbWF0aW9ucy5vYmplY3RzLnNjc3MiLCIvVXNlcnMvaXZhbnJhbW9zL0Rlc2t0b3AvRGV2ZWxvcG1lbnQvc3BvdGlmeXByb2plY3Qvc3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaXZhbnJhbW9zL0Rlc2t0b3AvRGV2ZWxvcG1lbnQvc3BvdGlmeXByb2plY3Qvc3JjL2Fzc2V0cy9zY3NzL3NldHRpbmdzL3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhLEVBQUE7RUFFZjtJQUNFLFVBQVU7SUFDVixjQUFjLEVBQUEsRUFBQTs7QUFQbEI7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhLEVBQUE7RUFFZjtJQUNFLFVBQVU7SUFDVixjQUFjLEVBQUEsRUFBQTs7QUNQbEI7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQ0R4QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZO0VBQ1oseUJDUnVCO0VEU3ZCLGdDQUErQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJXtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iLCIuZmFkZS1pbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjZzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29tcG9uZW50LnNjc3MnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWFpbi1oZWFkZXIge1xuICBoZWlnaHQ6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICRtb3VudGFpbi1tZWFkb3c7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRjb2QtZ3JheSwgNSUpO1xufVxuIiwiJG1vdW50YWluLW1lYWRvdzogIzFEQjk1NDtcbiRtYWxhY2hpdGU6ICMxRUQ3NjA7XG4kY29kLWdyYXk6ICMxOTE0MTQ7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JheTogZGFya2VuKCR3aGl0ZSwgMjAlKTtcblxuJGJhc2UtdHJhbnNpdGlvbjogYWxsIC40NXM7XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
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

module.exports = __webpack_require__(/*! /Users/ivanramos/Desktop/Development/spotifyproject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dangki/dangki.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dangki/dangki.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n        <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n    </div>\n    <nav class=\" container navbar navbar-expand-sm\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                    <strong> Danh Mục Môn Học</strong>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/dangnhap']\">Đăng Nhập</a></strong>\n            </li>\n        </ul>\n    </nav>\n    \n    \n    <div class=\"container \" style=\"padding:0\">\n        <div class=\"card\">\n            <div class=\"card-header\" style=\"background: linear-gradient(to right, #fc00ff, #00dbde);margin-left: 0\">\n                <h2 style=\"text-align: center\">Đăng Nhập</h2>\n            </div>\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group\">\n                            <label>Tài Khoản</label>\n                            <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"Username\">\n                            <label style=\"margin-top: 30px;\">Mật Khẩu</label>\n                            <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\">\n                            <label style=\"margin-top: 30px;\">Xác Nhận Mật Khẩu</label>\n                            <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Repeat password\">\n                    </div>\n                    <div class=\"row\" style=\"margin-top: 25px;\">\n                        <div class=\"col-6\">\n                                <a [routerLink]=\"['/dangnhap']\">Đăng Nhập</a>\n                        </div>\n                        <div class=\"col-6\">\n                                <a [routerLink]=\"['/quenmatkhau']\" style=\"float: right\">Quên Mật Khẩu</a>\n                        </div>\n                    </div>\n                    \n                </form>\n                <button class=\"btn\" id=\"dangnhap\"><strong>Đăng Kí</strong></button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dangnhap/dangnhap.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dangnhap/dangnhap.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n    <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                <strong> Danh Mục Môn Học</strong>\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/dangnhap']\">Đăng Nhập</a></strong>\n        </li>\n    </ul>\n</nav>\n\n\n<div class=\"container \" style=\"padding:0\">\n    <div class=\"card\">\n        <div class=\"card-header\" style=\"background: linear-gradient(to right, #fc00ff, #00dbde);margin-left: 0\">\n            <h2 style=\"text-align: center\">Đăng Nhập</h2>\n        </div>\n        <div class=\"card-body\">\n            <form>\n                <div class=\"form-group\">\n                        <label>Tài Khoản</label>\n                        <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"Username\">\n                        <label style=\"margin-top: 30px;\">Mật Khẩu</label>\n                        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\">\n                        \n                </div>\n                <div class=\"row\" style=\"margin-top: 25px;\">\n                    <div class=\"col-6\">\n                            <a [routerLink]=\"['/dangki']\">Đăng Kí</a>\n                    </div>\n                    <div class=\"col-6\">\n                            <a [routerLink]=\"['/quenmatkhau']\" style=\"float: right\">Quên Mật Khẩu</a>\n                    </div>\n                </div>\n                \n            </form>\n            <button class=\"btn\" id=\"dangnhap\"><strong>Đăng Nhập</strong></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/danhmucmonhoc/danhmucmonhoc.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/danhmucmonhoc/danhmucmonhoc.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n    <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                <strong> Danh Mục Môn Học</strong>\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/dangnhap']\">Đăng Nhập</a></strong>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"container\" style=\"padding:0;\">\n    <div class=\"card\" style=\"float: right; width: 20%;\">\n        <div class=\"card-header\">\n            Danh Mục Môn Học\n        </div>\n        <div class=\"card-body\">\n            <ul *ngFor=\"let p of dulieu\">\n                <li>{{p.name}}</li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"container\" style=\"padding-left: 0; \">\n    <div class=\"card\">\n        <div class=\"card-body text-center\" style=\"background-color: #8d78a1; \">\n            <div class=\"row\">\n\n                <div class=\"col col-6\"\n                    *ngFor=\"let p of dulieu | paginate: { itemsPerPage: itemsperpage, currentPage: currentpage }\"\n                    style=\"margin-bottom: 15px;background-color: #bcb5ad\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" style=\"background-color:#70af67\">\n                            <strong>\n                                {{p.name}}\n                            </strong>\n                        </div>\n                        <div class=\"card-body\" id=\"col6\">\n                            <img src=\"../assets/images/{{p.anh}}\">\n                        </div>\n                    </div>\n                </div>\n                <hr style=\"background-color:red\">\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid\">\n    <ul class=\"pagination\">\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"previouspage()\">Previous</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"pagenow(1)\">1</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"pagenow(2)\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"pagenow(3)\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"pagenow(4)\">4</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"pagenow(5)\">5</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"nextpage()\">Next</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gopy/gopy.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gopy/gopy.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n    <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                <strong> Danh Mục Môn Học</strong>\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/dangnhap']\">Đăng Nhập</a></strong>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"card container\" style=\"padding:0;\" >\n    <div class=\"card-body\"  style=\"padding:0;\"> \n        <img src=\"../assets/images/email.jpg\" id=\"image\">\n        <div class=\"gopy\">\n            <textarea placeholder=\"Nội Dung Góp Ý....\" class=\"textarea\"></textarea>\n        </div>\n    </div>\n    <button class=\"btn form-control\" id=\"gui\">Gửi</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hoidap/hoidap.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hoidap/hoidap.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n        <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n    </div>\n    <nav class=\" container navbar navbar-expand-sm\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                    <strong> Danh Mục Môn Học</strong>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/dangnhap']\">Đăng Nhập</a></strong>\n            </li>\n        </ul>\n    </nav>\n    \n    \n    <div class=\"container \" style=\"padding:0\">\n        <div class=\"card\">\n            <div class=\"card-header\" style=\"background: linear-gradient(to right, #fc00ff, #00dbde);margin-left: 0\">\n                <h2 style=\"text-align: center\">Hỏi Đáp</h2>\n            </div>\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group\">\n                            <label>Tài Khoản</label>\n                            <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"Username\">\n                            <label style=\"margin-top: 30px;\">Email</label>\n                            <input class=\"form-control\" type=\"text\"  placeholder=\"Email\">\n                            <label style=\"margin-top: 30px;\">Câu Hỏi</label>\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Nội Dung Câu Hỏi\">\n                    </div>\n                </form>\n                <button class=\"btn\" id=\"dangnhap\"><strong>Gửi</strong></button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lienhe/lienhe.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lienhe/lienhe.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" container\" style=\"padding-left:0px; padding-right: 0px; \">\n    <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%; \">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" [routerLink]=\"['/danhmucmonhoc']\">\n                <strong> Danh Mục Môn Học</strong>\n            </a>\n        </li>\n        <li class=\"nav-item\" >\n            <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\" >Liên Hệ</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n          </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/dangnhap']\">Đăng Nhập</a></strong>\n        </li>\n    </ul>\n</nav>\n<div class=\"container card text-center\" id=\"lienhe\" style=\"background-color: rgb(223, 209, 209)\">\n    <div class=\"card-header\" style=\"background-color: rgb(152, 158, 236)\">\n        <strong>\n            <h5>Liên Hệ</h5>\n        </strong>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-7\">\n                <img src=\"../assets/images/anhtruso.jpg\">\n            </div>\n            <div class=\"col-5\">\n                <hr style=\"background-color: rgb(126, 83, 207); width: 35%; height: 0.3%;;\">\n                <p>Thuộc sở hữu của công ty <strong>Thế Giới Web</strong></p><br>\n                <p><strong>Email:</strong> thegioiweb@gmail.com</p><br>\n                <p><strong>Fax:</strong> 0312251123</p><br>\n                <p><strong>Hotline:</strong> 092789789</p><br>\n                <p><strong>Địa Chỉ:</strong> Tầng 2, Cao Ốc 20, Nguyễn Trung Trực, TP HCM</p><br>\n                <p><strong>Website:</strong> thegioiweb.vn</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quenmatkhau/quenmatkhau.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quenmatkhau/quenmatkhau.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n        <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n    </div>\n    <nav class=\" container navbar navbar-expand-sm\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                    <strong> Danh Mục Môn Học</strong>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/dangnhap']\">Đăng Nhập</a></strong>\n            </li>\n        </ul>\n    </nav>\n    \n    \n    <div class=\"container \" style=\"padding:0\">\n        <div class=\"card\">\n            <div class=\"card-header\" style=\"background: linear-gradient(to right, #fc00ff, #00dbde);margin-left: 0\">\n                <h2 style=\"text-align: center\">Đăng Nhập</h2>\n            </div>\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group\">\n                            <label>Tài Khoản</label>\n                            <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"Username\">\n                            <label style=\"margin-top: 25px;\">Xác Nhận Email</label>\n                            <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"Email\">\n                            <label style=\"margin-top: 30px;\">Mật Khẩu Mới</label>\n                            <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\">\n                            <label style=\"margin-top: 30px;\">Xác Nhận Mật Khẩu</label>\n                            <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Repeat password\">\n                    </div>\n                    <div class=\"row\" style=\"margin-top: 25px;\">\n                        <div class=\"col-6\">\n                                <a [routerLink]=\"['/dangki']\">Đăng Kí</a>\n                        </div>\n                        <div class=\"col-6\">\n                                <a [routerLink]=\"['/dangnhap']\" style=\"float: right\">Đăng Nhập</a>\n                        </div>\n                    </div>\n                    \n                </form>\n                <button class=\"btn\" id=\"dangnhap\"><strong>Xác Nhận</strong></button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/trangchu/trangchu.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/trangchu/trangchu.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n    <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\" >\n            <strong> Danh Mục Môn Học</strong>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n      </li>\n      <li class=\"nav-item\">\n        <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n      </li>\n      <li class=\"nav-item\">\n        <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n      </li>\n      <li class=\"nav-item\">\n        <strong><a class=\"nav-link\" [routerLink]=\"['/dangnhap']\">Đăng Nhập</a></strong>\n      </li>\n    </ul>\n  </nav>\n\n<div class=\"container \" style=\"padding-left:0px; padding-right: 0px; \">\n    <div class=\"content\" style=\"width: 75%; float: left;\">\n        <div class=\"card\">\n            <div class=\"card-header text-center\" style=\"background-color: rgb(95, 117, 172)\">\n                <strong>Những Bài Thi Có Lượt Thi Nhiều Nhất!</strong>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col col-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body text-center\">\n                                <img src=\"../assets/images/GAME.png\">\n                                <div id=\"marquee\">\n                                    <strong>\n                                        GAME\n                                    </strong>\n                                </div>\n\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col col-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body text-center\">\n                                <img src=\"../assets/images/CLCO.jpg\">\n                                <div id=\"marquee\">\n                                    <strong>\n                                    CLCO\n                                    </strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"w-100\">\n                        <br>\n                    </div>\n                    <div class=\"col col-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body text-center\">\n                                <img src=\"../assets/images/MOWE.png\">\n                                <div id=\"marquee\">\n                                    <strong>\n                                        MOWE\n                                    </strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col col-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body text-center\">\n                                <img src=\"../assets/images/Subject.png\">\n                                <div id=\"marquee\">\n                                    <strong>\n                                    SUBJECT\n                                    </strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"w-100\">\n                        <br>\n                    </div>\n                    <div class=\"col col-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body text-center\">\n                                <img src=\"../assets/images/PHPP.png\">\n                                <div id=\"marquee\">\n                                    <strong>\n                                    PHPP\n                                    </strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col col-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body text-center\">\n                                <img src=\"../assets/images/HTCS.jpg\">\n                                <div id=\"marquee\">\n                                    <strong>\n                                    HTCS\n                                    </strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> \n            </div>\n        </div>\n    </div>\n    <div class=\"gioithieu\" style=\"width: 25%; float: left;\">\n        <div class=\"card\">\n            <div class=\"card-header text-center\">\n                <h5><strong>Giới Thiệu</strong></h5>\n            </div>\n            <div class=\"card-body\">\n                <p><Strong>Online Tranning</Strong> là một trong những website thi thử tốt\n                    nhất hiện nay. Với chủ đề đa dạng, kiến thức mới được cập nhật liên tục\n                    sẽ giúp bạn nâng cao kiến thứ cũng như kinh nghiệm của bạn trong thời gian\n                    ngắn.<br>\n                    Với đội ngũ đầy nhiệt huyết của chúng tôi <strong>Online Tranning</strong>\n                    luôn là một Website để mọi Lập Trình Viên tin tưởng và đồng hành!\n                </p>\n                <hr style=\"background-color: rgb(54, 51, 41)\">\n                <h5 class=\"text-center\">\n                    <strong style=\"margin-top:35px;\">Bài Thi Thử Nổi Bật</strong>\n                </h5>\n                <div class=\"row\" style=\"margin-top:35px;\">\n                    <div class=\"col-5\">\n                        <img class=\"text-center\" src=\"../assets/images/PHPP.png\" style=\"width:70%;\">\n                    </div>\n                    <div class=\"col-7\">\n                        <p style=\"color: rgb(247, 57, 57)\">Top 1 trong các bài thi trong 3 tháng qua</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-5\">\n                        <img class=\"text-center\" src=\"../assets/images/GAME.png\" style=\"width:70%;\">\n                    </div>\n                    <div class=\"col-7\">\n                        <p style=\"color: rgb(247, 57, 57)\">Xu hướng tìm kiếm cao</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-5\">\n                        <img class=\"text-center\" src=\"../assets/images/DBBS.png\" style=\"width:70%;\">\n                    </div>\n                    <div class=\"col-7\">\n                        <p style=\"color: rgb(247, 57, 57)\">Có nhiều bài thi đạt điểm tối đa</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-5\">\n                        <img class=\"text-center\" src=\"../assets/images/DBAV.png\" style=\"width:70%;\">\n                    </div>\n                    <div class=\"col-7\">\n                        <p style=\"color: rgb(247, 57, 57)\">Cập nhật 2 ngày trước</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                        <div class=\"col-5\">\n                            <img class=\"text-center\" src=\"../assets/images/LAYO.jpg\" style=\"width:70%;\">\n                        </div>\n                        <div class=\"col-7\">\n                            <p style=\"color: rgb(247, 57, 57)\">Cập nhật 4 ngày trước </p>\n                        </div>\n                    </div>\n                    \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'assigment';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trangchu/trangchu.component */ "./src/app/trangchu/trangchu.component.ts");
/* harmony import */ var _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lienhe/lienhe.component */ "./src/app/lienhe/lienhe.component.ts");
/* harmony import */ var _dangnhap_dangnhap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dangnhap/dangnhap.component */ "./src/app/dangnhap/dangnhap.component.ts");
/* harmony import */ var _danhmucmonhoc_danhmucmonhoc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./danhmucmonhoc/danhmucmonhoc.component */ "./src/app/danhmucmonhoc/danhmucmonhoc.component.ts");
/* harmony import */ var _dangki_dangki_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dangki/dangki.component */ "./src/app/dangki/dangki.component.ts");
/* harmony import */ var _quenmatkhau_quenmatkhau_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quenmatkhau/quenmatkhau.component */ "./src/app/quenmatkhau/quenmatkhau.component.ts");
/* harmony import */ var _gopy_gopy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gopy/gopy.component */ "./src/app/gopy/gopy.component.ts");
/* harmony import */ var _hoidap_hoidap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hoidap/hoidap.component */ "./src/app/hoidap/hoidap.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_6__["TrangchuComponent"],
            _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_7__["LienheComponent"],
            _dangnhap_dangnhap_component__WEBPACK_IMPORTED_MODULE_8__["DangnhapComponent"],
            _danhmucmonhoc_danhmucmonhoc_component__WEBPACK_IMPORTED_MODULE_9__["DanhmucmonhocComponent"],
            _dangki_dangki_component__WEBPACK_IMPORTED_MODULE_10__["DangkiComponent"],
            _quenmatkhau_quenmatkhau_component__WEBPACK_IMPORTED_MODULE_11__["QuenmatkhauComponent"],
            _gopy_gopy_component__WEBPACK_IMPORTED_MODULE_12__["GopyComponent"],
            _hoidap_hoidap_component__WEBPACK_IMPORTED_MODULE_13__["HoidapComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_6__["TrangchuComponent"] },
                { path: 'lienhe', component: _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_7__["LienheComponent"] },
                { path: 'gopy', component: _gopy_gopy_component__WEBPACK_IMPORTED_MODULE_12__["GopyComponent"] },
                { path: 'hoidap', component: _hoidap_hoidap_component__WEBPACK_IMPORTED_MODULE_13__["HoidapComponent"] },
                { path: 'dangki', component: _dangki_dangki_component__WEBPACK_IMPORTED_MODULE_10__["DangkiComponent"] },
                { path: 'quenmatkhau', component: _quenmatkhau_quenmatkhau_component__WEBPACK_IMPORTED_MODULE_11__["QuenmatkhauComponent"] },
                { path: 'danhmucmonhoc', component: _danhmucmonhoc_danhmucmonhoc_component__WEBPACK_IMPORTED_MODULE_9__["DanhmucmonhocComponent"] },
                { path: 'dangnhap', component: _dangnhap_dangnhap_component__WEBPACK_IMPORTED_MODULE_8__["DangnhapComponent"] },
                { path: '**', redirectTo: '', pathMatch: 'full' }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dangki/dangki.component.css":
/*!*********************************************!*\
  !*** ./src/app/dangki/dangki.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.form{\r\n    padding-left: 200px;\r\n    \r\n}\r\n\r\ninput{\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid #00BCD4;\r\n}\r\n\r\n#dangnhap {\r\n    padding: 7px;\r\n    width: 50%;\r\n    margin-top: 15px;\r\n    margin-left: 250px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    bottom: 10px;\r\n    background: linear-gradient(to right, #fc00ff, #00dbde);\r\n}\r\n\r\n#dangnhap:hover{\r\n    background: linear-gradient(to right, #fc466b, #3f5efb); \r\n}\r\n\r\n.nav-link {\r\n                                                            color: black;\r\n                                                        }\r\n\r\n.navbar ul li a{\r\n                                                            color: black;\r\n                                                            margin-left: 5px;\r\n                                                            text-align: center;\r\n                                                            margin-right: 5px;\r\n                                                        }\r\n\r\n.navbar ul li:hover{\r\n                                                            background-color: rgb(235, 223, 223);\r\n                                                        }\r\n\r\n.navbar{\r\n                                                            background-color: rgb(151, 157, 163)\r\n                                                        }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFuZ2tpL2RhbmdraS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7O0FBaUJBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVEQUF1RDtBQUMzRDs7QUFDQTtJQUNJLHVEQUF1RDtBQUMzRDs7QUFld0Q7NERBQ0ksWUFBWTt3REFDaEI7O0FBRUE7NERBQ0ksWUFBWTs0REFDWixnQkFBZ0I7NERBQ2hCLGtCQUFrQjs0REFDbEIsaUJBQWlCO3dEQUNyQjs7QUFFQTs0REFDSSxvQ0FBb0M7d0RBQ3hDOztBQUVBOzREQUNJO3dEQUNKIiwiZmlsZSI6InNyYy9hcHAvZGFuZ2tpL2RhbmdraS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XHJcbiAgICBcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBCQ0Q0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4jZGFuZ25oYXAge1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmMwMGZmLCAjMDBkYmRlKTtcclxufVxyXG4jZGFuZ25oYXA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzQ2NmIsICMzZjVlZmIpOyBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmJhciB1bCBsaSBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMjMsIDIyMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAxNTcsIDE2MylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dangki/dangki.component.ts":
/*!********************************************!*\
  !*** ./src/app/dangki/dangki.component.ts ***!
  \********************************************/
/*! exports provided: DangkiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangkiComponent", function() { return DangkiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DangkiComponent = class DangkiComponent {
    constructor() { }
    ngOnInit() {
    }
};
DangkiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dangki',
        template: __webpack_require__(/*! raw-loader!./dangki.component.html */ "./node_modules/raw-loader/index.js!./src/app/dangki/dangki.component.html"),
        styles: [__webpack_require__(/*! ./dangki.component.css */ "./src/app/dangki/dangki.component.css")]
    })
], DangkiComponent);



/***/ }),

/***/ "./src/app/dangnhap/dangnhap.component.css":
/*!*************************************************!*\
  !*** ./src/app/dangnhap/dangnhap.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.form{\r\n    padding-left: 200px;\r\n    \r\n}\r\n\r\ninput{\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid #00BCD4;\r\n}\r\n\r\n#dangnhap {\r\n    padding: 7px;\r\n    width: 50%;\r\n    margin-top: 15px;\r\n    margin-left: 250px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    bottom: 10px;\r\n    background: linear-gradient(to right, #fc00ff, #00dbde);\r\n}\r\n\r\n#dangnhap:hover{\r\n    background: linear-gradient(to right, #fc466b, #3f5efb); \r\n}\r\n\r\n.nav-link {\r\n                                                            color: black;\r\n                                                        }\r\n\r\n.navbar ul li a{\r\n                                                            color: black;\r\n                                                            margin-left: 5px;\r\n                                                            text-align: center;\r\n                                                            margin-right: 5px;\r\n                                                        }\r\n\r\n.navbar ul li:hover{\r\n                                                            background-color: rgb(235, 223, 223);\r\n                                                        }\r\n\r\n.navbar{\r\n                                                            background-color: rgb(151, 157, 163)\r\n                                                        }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFuZ25oYXAvZGFuZ25oYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQWlCQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWix1REFBdUQ7QUFDM0Q7O0FBQ0E7SUFDSSx1REFBdUQ7QUFDM0Q7O0FBZXdEOzREQUNJLFlBQVk7d0RBQ2hCOztBQUVBOzREQUNJLFlBQVk7NERBQ1osZ0JBQWdCOzREQUNoQixrQkFBa0I7NERBQ2xCLGlCQUFpQjt3REFDckI7O0FBRUE7NERBQ0ksb0NBQW9DO3dEQUN4Qzs7QUFFQTs0REFDSTt3REFDSiIsImZpbGUiOiJzcmMvYXBwL2RhbmduaGFwL2RhbmduaGFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mb3Jte1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIFxyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMEJDRDQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNkYW5nbmhhcCB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzAwZmYsICMwMGRiZGUpO1xyXG59XHJcbiNkYW5nbmhhcDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZjNDY2YiwgIzNmNWVmYik7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIyMywgMjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1NywgMTYzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dangnhap/dangnhap.component.ts":
/*!************************************************!*\
  !*** ./src/app/dangnhap/dangnhap.component.ts ***!
  \************************************************/
/*! exports provided: DangnhapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangnhapComponent", function() { return DangnhapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DangnhapComponent = class DangnhapComponent {
    constructor() { }
    ngOnInit() {
    }
};
DangnhapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dangnhap',
        template: __webpack_require__(/*! raw-loader!./dangnhap.component.html */ "./node_modules/raw-loader/index.js!./src/app/dangnhap/dangnhap.component.html"),
        styles: [__webpack_require__(/*! ./dangnhap.component.css */ "./src/app/dangnhap/dangnhap.component.css")]
    })
], DangnhapComponent);



/***/ }),

/***/ "./src/app/danhmucmonhoc/danhmucmonhoc.component.css":
/*!***********************************************************!*\
  !*** ./src/app/danhmucmonhoc/danhmucmonhoc.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n    color: black;\r\n}\r\n\r\n.navbar ul li a{\r\n    color: black;\r\n    margin-left: 5px;\r\n    text-align: center;\r\n    margin-right: 5px;\r\n}\r\n\r\n.navbar ul li:hover{\r\n    background-color: rgb(235, 223, 223);\r\n}\r\n\r\n.navbar{\r\n    background-color: rgb(151, 157, 163)\r\n}\r\n\r\n.card-body ul li{\r\n    border-bottom: 1px solid rgb(122, 111, 111);\r\n    border-right: 1px solid rgb(122, 111, 111);\r\n    border-left: 1px solid rgb(122, 111, 111);\r\n    border-top: 1px solid rgb(122, 111, 111);\r\n    list-style: none;\r\n    height: 40px;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.card-body ul{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.card-header{\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.container-fluid{\r\n    transform: translateX(30%)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFuaG11Y21vbmhvYy9kYW5obXVjbW9uaG9jLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQywwQ0FBMEM7SUFDMUMseUNBQXlDO0lBQ3pDLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2RhbmhtdWNtb25ob2MvZGFuaG11Y21vbmhvYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5hdmJhciB1bCBsaSBhe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHVsIGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjIzLCAyMjMpO1xyXG59XHJcblxyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTU3LCAxNjMpXHJcbn1cclxuXHJcbi5jYXJkLWJvZHkgdWwgbGl7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEyMiwgMTExLCAxMTEpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDEyMiwgMTExLCAxMTEpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTIyLCAxMTEsIDExMSk7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDEyMiwgMTExLCAxMTEpO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNhcmQtYm9keSB1bHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMCUpXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/danhmucmonhoc/danhmucmonhoc.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/danhmucmonhoc/danhmucmonhoc.component.ts ***!
  \**********************************************************/
/*! exports provided: DanhmucmonhocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhmucmonhocComponent", function() { return DanhmucmonhocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DanhmucmonhocComponent = class DanhmucmonhocComponent {
    constructor() {
        this.dulieu = [
            { name: "ADBS",
                anh: "ADBS.jpg"
            },
            { name: "ASNE",
                anh: "ASNE.png"
            },
            { name: "CLCO",
                anh: "CLCO.jpg"
            },
            { name: "DBAV",
                anh: "DBAV.png"
            },
            { name: "DBBS",
                anh: "DBBS.png"
            },
            { name: "GAME",
                anh: "GAME.png"
            },
            { name: "HTCS",
                anh: "HTCS.jpg"
            },
            { name: "INMA",
                anh: "INMA.jpg"
            },
            { name: "JAAV",
                anh: "JAAV.png"
            },
            { name: "JSPR",
                anh: "JSPR.png"
            },
            { name: "LAYO",
                anh: "LAYO.jpg"
            },
            { name: "MOWE",
                anh: "MOWE.png"
            },
            { name: "PHPP",
                anh: "PHPP.png"
            },
            { name: "PMAG",
                anh: "PMAG.jpg"
            },
            { name: "SUBJECT",
                anh: "Subject.png"
            },
            { name: "VBPR",
                anh: "VBPR.png"
            },
            { name: "WEBU",
                anh: "WEBU.jpg"
            }
        ];
        this.itemsperpage = 4;
        this.currentpage = 1;
    }
    previouspage() {
        if (this.currentpage > 1)
            this.currentpage--;
        else
            return;
    }
    nextpage() {
        if (this.currentpage < 5)
            this.currentpage++;
    }
    pagenow(sotrang) {
        this.currentpage = +sotrang;
    }
    ngOnInit() {
    }
};
DanhmucmonhocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danhmucmonhoc',
        template: __webpack_require__(/*! raw-loader!./danhmucmonhoc.component.html */ "./node_modules/raw-loader/index.js!./src/app/danhmucmonhoc/danhmucmonhoc.component.html"),
        styles: [__webpack_require__(/*! ./danhmucmonhoc.component.css */ "./src/app/danhmucmonhoc/danhmucmonhoc.component.css")]
    })
], DanhmucmonhocComponent);



/***/ }),

/***/ "./src/app/gopy/gopy.component.css":
/*!*****************************************!*\
  !*** ./src/app/gopy/gopy.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "                .nav-link {\r\n                    color: black;\r\n                }\r\n\r\n                .navbar ul li a{\r\n                    color: black;\r\n                    margin-left: 5px;\r\n                    text-align: center;\r\n                    margin-right: 5px;\r\n\r\n                }\r\n\r\n                .navbar ul li:hover{\r\n                    background-color: rgb(235, 223, 223);\r\n                }\r\n\r\n                .navbar{\r\n                    background-color: rgb(151, 157, 163)\r\n                }\r\n\r\n                #image{\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n                .gopy{\r\n    padding: 0;\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 40px;\r\n    border: none;\r\n\r\n}\r\n\r\n                .textarea{\r\n    margin-left: 20px;\r\n    width: 1020px;\r\n    height: 450px;\r\n    opacity: 0.9;\r\n    border: double 10px green;\r\n    border-radius: 20px;\r\n}\r\n\r\n                .textarea:focus{\r\n    font-size: 25px;\r\n    background-color: rgb(177, 221, 128);\r\n    color: white;\r\n}\r\n\r\n                #gui{\r\nbackground: linear-gradient(to right, #f5de15, rgb(15, 241, 34));\r\nwidth: 90%;\r\nmargin: 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29weS9nb3B5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdCQUFnQjtvQkFDSSxZQUFZO2dCQUNoQjs7Z0JBRUE7b0JBQ0ksWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsaUJBQWlCOztnQkFFckI7O2dCQUVBO29CQUNJLG9DQUFvQztnQkFDeEM7O2dCQUVBO29CQUNJO2dCQUNKOztnQkFHaEI7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O2dCQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7O0FBRWhCOztnQkFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztnQkFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7Z0JBQ0E7QUFDQSxnRUFBZ0U7QUFDaEUsVUFBVTtBQUNWLGNBQWM7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2dvcHkvZ29weS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGkgYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjIzLCAyMjMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTU3LCAxNjMpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuI2ltYWdle1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZ29weXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxufVxyXG4udGV4dGFyZWF7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAxMDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgYm9yZGVyOiBkb3VibGUgMTBweCBncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYTpmb2N1c3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDIyMSwgMTI4KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jZ3Vpe1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNWRlMTUsIHJnYigxNSwgMjQxLCAzNCkpO1xyXG53aWR0aDogOTAlO1xyXG5tYXJnaW46IDAgYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/gopy/gopy.component.ts":
/*!****************************************!*\
  !*** ./src/app/gopy/gopy.component.ts ***!
  \****************************************/
/*! exports provided: GopyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GopyComponent", function() { return GopyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GopyComponent = class GopyComponent {
    constructor() { }
    ngOnInit() {
    }
};
GopyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gopy',
        template: __webpack_require__(/*! raw-loader!./gopy.component.html */ "./node_modules/raw-loader/index.js!./src/app/gopy/gopy.component.html"),
        styles: [__webpack_require__(/*! ./gopy.component.css */ "./src/app/gopy/gopy.component.css")]
    })
], GopyComponent);



/***/ }),

/***/ "./src/app/hoidap/hoidap.component.css":
/*!*********************************************!*\
  !*** ./src/app/hoidap/hoidap.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form{\r\n    padding-left: 200px;\r\n    \r\n}\r\n\r\ninput{\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid #00BCD4;\r\n}\r\n\r\n#dangnhap {\r\n    padding: 7px;\r\n    width: 50%;\r\n    margin-top: 15px;\r\n    margin-left: 250px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    bottom: 10px;\r\n    background: linear-gradient(to right, #fc00ff, #00dbde);\r\n}\r\n\r\n#dangnhap:hover{\r\n    background: linear-gradient(to right, #fc466b, #3f5efb); \r\n}\r\n\r\n/* header html */\r\n\r\n.nav-link {\r\n    color: black;\r\n}\r\n\r\n.navbar ul li a{\r\n    color: black;\r\n    margin-left: 5px;\r\n    text-align: center;\r\n    margin-right: 5px;\r\n }\r\n\r\n.navbar ul li:hover{\r\n    background-color: rgb(235, 223, 223);\r\n }\r\n\r\n.navbar{\r\n    background-color: rgb(151, 157, 163)\r\n }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9pZGFwL2hvaWRhcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWix1REFBdUQ7QUFDM0Q7O0FBQ0E7SUFDSSx1REFBdUQ7QUFDM0Q7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNJLFlBQVk7QUFDaEI7O0FBRUM7SUFDRyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUE7SUFDRyxvQ0FBb0M7Q0FDdkM7O0FBRUE7SUFDRztDQUNIIiwiZmlsZSI6InNyYy9hcHAvaG9pZGFwL2hvaWRhcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3Jte1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIFxyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMEJDRDQ7XHJcbn1cclxuXHJcbiNkYW5nbmhhcCB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzAwZmYsICMwMGRiZGUpO1xyXG59XHJcbiNkYW5nbmhhcDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZjNDY2YiwgIzNmNWVmYik7IFxyXG59XHJcblxyXG4vKiBoZWFkZXIgaHRtbCAqL1xyXG4ubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4gLm5hdmJhciB1bCBsaSBhe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gfVxyXG5cclxuIC5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMjMsIDIyMyk7XHJcbiB9XHJcblxyXG4gLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1NywgMTYzKVxyXG4gfVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/hoidap/hoidap.component.ts":
/*!********************************************!*\
  !*** ./src/app/hoidap/hoidap.component.ts ***!
  \********************************************/
/*! exports provided: HoidapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoidapComponent", function() { return HoidapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HoidapComponent = class HoidapComponent {
    constructor() { }
    ngOnInit() {
    }
};
HoidapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hoidap',
        template: __webpack_require__(/*! raw-loader!./hoidap.component.html */ "./node_modules/raw-loader/index.js!./src/app/hoidap/hoidap.component.html"),
        styles: [__webpack_require__(/*! ./hoidap.component.css */ "./src/app/hoidap/hoidap.component.css")]
    })
], HoidapComponent);



/***/ }),

/***/ "./src/app/lienhe/lienhe.component.css":
/*!*********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "                                                        .nav-link {\r\n                                                            color: black;\r\n                                                        }\r\n\r\n                                                        .navbar ul li a{\r\n                                                            color: black;\r\n                                                            margin-left: 5px;\r\n                                                            text-align: center;\r\n                                                            margin-right: 5px;\r\n                                                        }\r\n\r\n                                                        .navbar ul li:hover{\r\n                                                            background-color: rgb(235, 223, 223);\r\n                                                        }\r\n\r\n                                                        .navbar{\r\n                                                            background-color: rgb(151, 157, 163)\r\n                                                        }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGllbmhlL2xpZW5oZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3REFBd0Q7NERBQ0ksWUFBWTt3REFDaEI7O3dEQUVBOzREQUNJLFlBQVk7NERBQ1osZ0JBQWdCOzREQUNoQixrQkFBa0I7NERBQ2xCLGlCQUFpQjt3REFDckI7O3dEQUVBOzREQUNJLG9DQUFvQzt3REFDeEM7O3dEQUVBOzREQUNJO3dEQUNKIiwiZmlsZSI6InNyYy9hcHAvbGllbmhlL2xpZW5oZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIyMywgMjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1NywgMTYzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/lienhe/lienhe.component.ts":
/*!********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.ts ***!
  \********************************************/
/*! exports provided: LienheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienheComponent", function() { return LienheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LienheComponent = class LienheComponent {
    constructor() { }
    ngOnInit() {
    }
};
LienheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lienhe',
        template: __webpack_require__(/*! raw-loader!./lienhe.component.html */ "./node_modules/raw-loader/index.js!./src/app/lienhe/lienhe.component.html"),
        styles: [__webpack_require__(/*! ./lienhe.component.css */ "./src/app/lienhe/lienhe.component.css")]
    })
], LienheComponent);



/***/ }),

/***/ "./src/app/quenmatkhau/quenmatkhau.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quenmatkhau/quenmatkhau.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.form{\r\n    padding-left: 200px;\r\n    \r\n}\r\n\r\ninput{\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid #00BCD4;\r\n}\r\n\r\n#dangnhap {\r\n    padding: 7px;\r\n    width: 50%;\r\n    margin-top: 15px;\r\n    margin-left: 250px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    bottom: 10px;\r\n    background: linear-gradient(to right, #fc00ff, #00dbde);\r\n}\r\n\r\n#dangnhap:hover{\r\n    background: linear-gradient(to right, #fc466b, #3f5efb); \r\n}\r\n\r\n.nav-link {\r\n                                                            color: black;\r\n                                                        }\r\n\r\n.navbar ul li a{\r\n                                                            color: black;\r\n                                                            margin-left: 5px;\r\n                                                            text-align: center;\r\n                                                            margin-right: 5px;\r\n                                                        }\r\n\r\n.navbar ul li:hover{\r\n                                                            background-color: rgb(235, 223, 223);\r\n                                                        }\r\n\r\n.navbar{\r\n                                                            background-color: rgb(151, 157, 163)\r\n                                                        }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlbm1hdGtoYXUvcXVlbm1hdGtoYXUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQWlCQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWix1REFBdUQ7QUFDM0Q7O0FBQ0E7SUFDSSx1REFBdUQ7QUFDM0Q7O0FBZXdEOzREQUNJLFlBQVk7d0RBQ2hCOztBQUVBOzREQUNJLFlBQVk7NERBQ1osZ0JBQWdCOzREQUNoQixrQkFBa0I7NERBQ2xCLGlCQUFpQjt3REFDckI7O0FBRUE7NERBQ0ksb0NBQW9DO3dEQUN4Qzs7QUFFQTs0REFDSTt3REFDSiIsImZpbGUiOiJzcmMvYXBwL3F1ZW5tYXRraGF1L3F1ZW5tYXRraGF1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mb3Jte1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIFxyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMEJDRDQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNkYW5nbmhhcCB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzAwZmYsICMwMGRiZGUpO1xyXG59XHJcbiNkYW5nbmhhcDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZjNDY2YiwgIzNmNWVmYik7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIyMywgMjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1NywgMTYzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/quenmatkhau/quenmatkhau.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quenmatkhau/quenmatkhau.component.ts ***!
  \******************************************************/
/*! exports provided: QuenmatkhauComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuenmatkhauComponent", function() { return QuenmatkhauComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuenmatkhauComponent = class QuenmatkhauComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuenmatkhauComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quenmatkhau',
        template: __webpack_require__(/*! raw-loader!./quenmatkhau.component.html */ "./node_modules/raw-loader/index.js!./src/app/quenmatkhau/quenmatkhau.component.html"),
        styles: [__webpack_require__(/*! ./quenmatkhau.component.css */ "./src/app/quenmatkhau/quenmatkhau.component.css")]
    })
], QuenmatkhauComponent);



/***/ }),

/***/ "./src/app/trangchu/trangchu.component.css":
/*!*************************************************!*\
  !*** ./src/app/trangchu/trangchu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.content{\r\n    width: 75%;\r\n\r\n}\r\n\r\n.gioithieu{\r\n    width: 25%;\r\n}\r\n\r\n#marquee{\r\n    background-color: rgb(92, 136, 218);\r\n}\r\n\r\n.nav-link {\r\n                                                                color: black;\r\n                                                            }\r\n\r\n.navbar ul li a{\r\n                                                                color: black;\r\n                                                                margin-left: 5px;\r\n                                                                text-align: center;\r\n                                                                margin-right: 5px;\r\n\r\n                                                            }\r\n\r\n.navbar ul li:hover{\r\n                                                                background-color: rgb(235, 223, 223);\r\n                                                            }\r\n\r\n.navbar{\r\n                                                                background-color: rgb(151, 157, 163)\r\n                                                            }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbmdjaHUvdHJhbmdjaHUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVOztBQUVkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUM0RDtnRUFDSSxZQUFZOzREQUNoQjs7QUFFQTtnRUFDSSxZQUFZO2dFQUNaLGdCQUFnQjtnRUFDaEIsa0JBQWtCO2dFQUNsQixpQkFBaUI7OzREQUVyQjs7QUFFQTtnRUFDSSxvQ0FBb0M7NERBQ3hDOztBQUVBO2dFQUNJOzREQUNKIiwiZmlsZSI6InNyYy9hcHAvdHJhbmdjaHUvdHJhbmdjaHUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVudHtcclxuICAgIHdpZHRoOiA3NSU7XHJcblxyXG59XHJcblxyXG4uZ2lvaXRoaWV1e1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuI21hcnF1ZWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDEzNiwgMjE4KTtcclxufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjIzLCAyMjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTU3LCAxNjMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/trangchu/trangchu.component.ts":
/*!************************************************!*\
  !*** ./src/app/trangchu/trangchu.component.ts ***!
  \************************************************/
/*! exports provided: TrangchuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangchuComponent", function() { return TrangchuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrangchuComponent = class TrangchuComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrangchuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trangchu',
        template: __webpack_require__(/*! raw-loader!./trangchu.component.html */ "./node_modules/raw-loader/index.js!./src/app/trangchu/trangchu.component.html"),
        styles: [__webpack_require__(/*! ./trangchu.component.css */ "./src/app/trangchu/trangchu.component.css")]
    })
], TrangchuComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




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

module.exports = __webpack_require__(/*! D:\LTgiaodienWeb\assigment\assigment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
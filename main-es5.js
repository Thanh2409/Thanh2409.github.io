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

/***/ "./node_modules/raw-loader/index.js!./src/app/baithi/baithi.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/baithi/baithi.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n  <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n\n<nav class=\" container navbar navbar-expand-sm\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n        <strong> Danh Mục Môn Học</strong>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n    </li>\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n    </li>\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n    </li>\n    <li class=\"nav-item dropdown\">\n        <strong>\n            <a class=\"nav-link \" >\n              <span>Tài Khoản</span>\n              <div class=\"dropdown-content\">\n                <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n                <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n                <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n                <p [routerLink]=\"['/thongtin']\">Thông Tin</p>\n              </div>\n            </a>\n          </strong>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"container card-baithi\" >\n  <div class=\"card \">\n    <div class=\"card-header text-center\">\n      <strong>Bài Thi</strong>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\" *ngFor=\"let item of quizs | paginate: { itemsPerPage: itemsperpage, currentPage: currentpage }\">\n        <div class=\"col-5\" style=\"padding: 0;\">\n          <img src=\"../assets/images/baithi.png\" style=\"width:99%;padding: 0;\">\n        </div>\n        <div class=\"col-7\">\n          <p>{{item.Text}}\n          </p>\n          <div *ngFor=\"let item1 of item.Answers\">\n            <input type=\"radio\" name=\"1\" (click)=\"check(item.Id,item1.Id)\">{{item1.Text}}<br>\n          </div>\n        </div>\n      </div>\n      <div class=\"pagi\">\n      <pagination-controls  (pageChange)=\"currentpage = $event\" style=\"text-align: center;\"></pagination-controls>\n    </div>\n    <button class=\"btn btn-success\" (click)=\"chamdiem()\">Chấm Điểm</button>\n    </div>\n  </div>\n  <div>\n    <countdown #cd [config]=\"{leftTime:900}\"></countdown>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dangki/dangki.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dangki/dangki.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n        <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n    </div>\n    <nav class=\" container navbar navbar-expand-sm\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                    <strong> Danh Mục Môn Học</strong>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n            </li>\n            <li class=\"nav-item dropdown\">\n                    <strong>\n                            <a class=\"nav-link \" >\n                              <span>Tài Khoản</span>\n                              <div class=\"dropdown-content\">\n                                <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n                                <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n                                <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n                                <p [routerLink]=\"['/thongtin']\">Thông Tin</p>\n                              </div>\n                            </a>\n                          </strong>\n            </li>\n        </ul>\n    </nav>\n    \n    \n    <div class=\"container \" style=\"padding:0\">\n        <div class=\"card\">\n            <div class=\"card-header\" style=\"background: linear-gradient(to right, #fc00ff, #00dbde);margin-left: 0\">\n                <h2 style=\"text-align: center\">Đăng Kí</h2>\n            </div>\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group\">\n                            <label>Tài Khoản</label>\n                            <input class=\"form-control\" type=\"text\" name=\"taikhoan\" placeholder=\"Username\" [(ngModel)]=\"formStudent.username\">\n                            <label style=\"margin-top: 30px;\">Email</label>\n                            <input class=\"form-control\" type=\"text\" name=\"password\" placeholder=\"Email\" [(ngModel)]=\"formStudent.email\">    \n                            <label style=\"margin-top: 30px;\">Mật Khẩu</label>\n                            <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"formStudent.password\">\n                            <label style=\"margin-top: 30px;\">Họ Tên</label>\n                            <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"FullName\" [(ngModel)]=\"formStudent.fullname\">\n                            <label style=\"margin-top: 30px;\">Ngày Sinh</label>\n                            <input class=\"form-control\" type=\"date\" name=\"date\" placeholder=\"Birth\" [(ngModel)]=\"formStudent.birthday\">\n                            <label style=\"margin-top: 30px;\">Giới Tính</label>\n                            <input class=\"form-control\" type=\"text\" name=\"gender\" placeholder=\"Gender\" [(ngModel)]=\"formStudent.gender\">\n                            \n                    </div>\n                   \n                    \n                </form>\n                <button class=\"btn\" id=\"dangnhap\"  (click)=\"studentLogin()\"><strong>Đăng Kí</strong></button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dangnhap/dangnhap.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dangnhap/dangnhap.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n    <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                <strong> Danh Mục Môn Học</strong>\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n                <strong>\n                        <a class=\"nav-link \" >\n                          <span>Tài Khoản</span>\n                          <div class=\"dropdown-content\">\n                            <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n                            <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n                            <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n                            <p [routerLink]=\"['/thongtin']\">Thông Tin</p>\n                          </div>\n                        </a>\n                      </strong>\n        </li>\n    </ul>\n</nav>\n\n\n<div class=\"container \" style=\"padding:0\">\n    <div class=\"card\">\n        <div class=\"card-header\" style=\"background: linear-gradient(to right, #fc00ff, #00dbde);margin-left: 0\">\n            <h2 style=\"text-align: center\">Đăng Nhập</h2>\n        </div>\n        <div class=\"card-body\">\n            <form>\n                <div class=\"form-group\">\n                       \n                        <label>Tài Khoản</label>\n                        <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"Username\" [(ngModel)]=\"taikhoan\" [ngModelOptions]=\"{standalone: true}\">\n                        <label style=\"margin-top: 30px;\">Mật Khẩu</label>\n                        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"matkhau\" [ngModelOptions]=\"{standalone: true}\">\n                        \n                </div>\n                \n                <button class=\"btn\" id=\"dangnhap\" (click)=\"check()\"><strong>Đăng Nhập</strong></button>\n            </form>\n           \n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <p *ngFor=\"let p of InfoStudent\">{{p.username}}</p>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/danhmucmonhoc/danhmucmonhoc.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/danhmucmonhoc/danhmucmonhoc.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n    <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                <strong> Danh Mục Môn Học</strong>\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n                <strong>\n                        <a class=\"nav-link \">\n                          <span>Tài Khoản</span>\n                          <div class=\"dropdown-content\">\n                            <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n                            <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n                            <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n                            <p [routerLink]=\"['/thongtin']\">Thông Tin</p>\n                          </div>\n                        </a>\n                      </strong>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"container\" style=\"padding:0;\">\n    <div class=\"card\" style=\"float: right; width: 20%;\">\n        <div class=\"card-header\">\n            Danh Mục Môn Học\n        </div>\n        <div class=\"card-body\">\n            <ul *ngFor=\"let item of Subjects\" [routerLink]=\"['/baithi',item.Id]\">\n                <li>{{item.Name}}</li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"container\" style=\"padding-left: 0; \">\n    <div class=\"card\">\n        <div class=\"card-body text-center\" style=\"background-color: #8d78a1; \">\n            <div class=\"row\">\n\n                <div class=\"col col-6\"\n                    *ngFor=\"let item of Subjects | paginate: { itemsPerPage: itemsperpage, currentPage: currentpage }\"\n                    style=\"margin-bottom: 15px; border-radius: 4px 4px; background-color: #bcb5ad\">\n                    <div class=\"card\" [routerLink]=\"['/baithi',item.Id]\">\n                        <div class=\"card-header\" style=\"background-color:#70af67\">\n                            <strong >\n                                {{item.Name}}\n                            </strong>\n                        </div>\n                        <div class=\"card-body\" id=\"col6\" >\n                            <img src=\"../assets/images/{{item.Logo}}\">\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <ul class=\"pagination\">\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"previouspage()\">Previous</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"pagenow(1)\">1</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"pagenow(2)\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"pagenow(3)\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" (click)=\"nextpage()\">Next</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gopy/gopy.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gopy/gopy.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n    <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                <strong> Danh Mục Môn Học</strong>\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n                <strong>\n                        <a class=\"nav-link \" >\n                          <span>Tài Khoản</span>\n                          <div class=\"dropdown-content\">\n                            <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n                            <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n                            <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n                            <p [routerLink]=\"['/thongtin']\"> Thông Tin</p>\n                          </div>\n                        </a>\n                      </strong>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"card container\" style=\"padding:0;\" >\n    <div class=\"card-body\"  style=\"padding:0;\"> \n        <img src=\"../assets/images/email.jpg\" id=\"image\">\n        <div class=\"gopy\">\n            <textarea placeholder=\"Nội Dung Góp Ý....\" class=\"textarea\"></textarea>\n        </div>\n    </div>\n    <button class=\"btn form-control\" id=\"gui\">Gửi</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hoidap/hoidap.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hoidap/hoidap.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n        <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n    </div>\n    <nav class=\" container navbar navbar-expand-sm\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                    <strong> Danh Mục Môn Học</strong>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n            </li>\n            <li class=\"nav-item dropdown\">\n                    <strong>\n                            <a class=\"nav-link\">\n                              <span>Tài Khoản</span>\n                              <div class=\"dropdown-content\">\n                                <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n                                <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n                                <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n                                <p [routerLink]=\"['/thongtin']\">Thông Tin</p>\n                              </div>\n                            </a>\n                          </strong>\n            </li>\n        </ul>\n    </nav>\n    \n    \n    <div class=\"container \" style=\"padding:0\">\n        <div class=\"card\">\n            <div class=\"card-header\" style=\"background: linear-gradient(to right, #fc00ff, #00dbde);margin-left: 0\">\n                <h2 style=\"text-align: center\">Hỏi Đáp</h2>\n            </div>\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group\">\n                            <label>Tài Khoản</label>\n                            <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"Username\">\n                            <label style=\"margin-top: 30px;\">Email</label>\n                            <input class=\"form-control\" type=\"text\"  placeholder=\"Email\">\n                            <label style=\"margin-top: 30px;\">Câu Hỏi</label>\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Nội Dung Câu Hỏi\">\n                    </div>\n                </form>\n                <button class=\"btn\" id=\"dangnhap\" [routerLink]=\"['/danhmucmonhoc']\" (click)=\"rep()\"><strong>Gửi</strong></button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lienhe/lienhe.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lienhe/lienhe.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" container\" style=\"padding-left:0px; padding-right: 0px; \">\n    <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%; \">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" [routerLink]=\"['/danhmucmonhoc']\">\n                <strong> Danh Mục Môn Học</strong>\n            </a>\n        </li>\n        <li class=\"nav-item\" >\n            <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\" >Liên Hệ</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n        </li>\n        <li class=\"nav-item\">\n            <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n          </li>\n        <li class=\"nav-item dropdown\">\n                <strong>\n                        <a class=\"nav-link \" >\n                          <span>Tài Khoản</span>\n                          <div class=\"dropdown-content\">\n                            <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n                            <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n                            <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n                            <p [routerLink]=\"['/thongtin']\">Thông Tin</p>\n                          </div>\n                        </a>\n                      </strong>\n        </li>\n    </ul>\n</nav>\n<div class=\"container card text-center\" id=\"lienhe\" style=\"background-color: rgb(223, 209, 209)\">\n    <div class=\"card-header\" style=\"background-color: rgb(152, 158, 236)\">\n        <strong>\n            <h5>Liên Hệ</h5>\n        </strong>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-7\">\n                <img src=\"../assets/images/anhtruso.jpg\">\n            </div>\n            <div class=\"col-5\">\n                <hr style=\"background-color: rgb(126, 83, 207); width: 35%; height: 0.3%;;\">\n                <p>Thuộc sở hữu của công ty <strong>Thế Giới Web</strong></p><br>\n                <p><strong>Email:</strong> thegioiweb@gmail.com</p><br>\n                <p><strong>Fax:</strong> 0312251123</p><br>\n                <p><strong>Hotline:</strong> 092789789</p><br>\n                <p><strong>Địa Chỉ:</strong> Tầng 2, Cao Ốc 20, Nguyễn Trung Trực, TP HCM</p><br>\n                <p><strong>Website:</strong> thegioiweb.vn</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quenmatkhau/quenmatkhau.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quenmatkhau/quenmatkhau.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n        <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n    </div>\n    <nav class=\" container navbar navbar-expand-sm\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n                    <strong> Danh Mục Môn Học</strong>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n            </li>\n            <li class=\"nav-item\">\n                <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n            </li>\n            <li class=\"nav-item dropdown\">\n                    <strong>\n                            <a class=\"nav-link \" >\n                              <span>Tài Khoản</span>\n                              <div class=\"dropdown-content\">\n                                <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n                                <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n                                <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n                                <p [routerLink]=\"['/thongtin']\">Thông Tin</p>\n                              </div>\n                            </a>\n                          </strong>\n            </li>\n        </ul>\n    </nav>\n    \n    \n    <div class=\"container \" style=\"padding:0\">\n        <div class=\"card\">\n            <div class=\"card-header\" style=\"background: linear-gradient(to right, #fc00ff, #00dbde);margin-left: 0\">\n                <h2 style=\"text-align: center\">Quên Mật Khẩu</h2>\n            </div>\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group\">\n                            <label>Tài Khoản</label>\n                            <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"Username\" [(ngModel)]=\"Info.user\">\n                            <label style=\"margin-top: 25px;\">Xác Nhận Email</label>\n                            <input class=\"form-control\" type=\"text\" name=\"hoten\" placeholder=\"Email\" [(ngModel)]=\"Info.email\">\n                    </div>\n                   \n                    \n                </form>\n                <button class=\"btn\" id=\"dangnhap\" (click)=\"CheckData()\"><strong>Xác Nhận</strong></button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/thongtin/thongtin.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thongtin/thongtin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n  <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n        <strong> Danh Mục Môn Học</strong>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n    </li>\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n    </li>\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <strong>\n        <a class=\"nav-link \">\n          <span>Tài Khoản</span>\n          <div class=\"dropdown-content\">\n            <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n            <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n            <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n            <p [routerLink]=\"['/thongtin']\">Thông Tin</p>\n          </div>\n        </a>\n      </strong>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container \" style=\"padding:0\">\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"background: linear-gradient(to right, #fc00ff, #00dbde);margin-left: 0\">\n      <h2 style=\"text-align: center\">Thông Tin</h2>\n    </div>\n    <div class=\"card-body\">\n      <form>\n\n        <div class=\"form-group\" *ngIf=\"isShow\">\n\n          <label>Tài Khoản</label>\n          <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Username\" value=\"{{ListResult.username}}\"\n          disabled>\n          <label style=\"margin-top: 30px;\">Email</label>\n          <input class=\"form-control\" type=\"text\" name=\"emai\" placeholder=\"Email\" value=\"{{ListResult.email}}\" disabled>\n          <label style=\"margin-top: 30px;\">Mật Khẩu</label>\n          <input class=\"form-control\" type=\"password\" name=\"password\" value=\"{{ListResult.password}}\" disabled>\n          <label style=\"margin-top: 30px;\">Họ Tên</label>\n          <input class=\"form-control\" type=\"text\" name=\"password\" value=\"{{ListResult.fullname}}\" disabled>\n          <label style=\"margin-top: 30px;\">Ngày Sinh</label>\n          <input class=\"form-control\" type=\"date\" name=\"password\" value=\"{{ListResult.birthday}}\" disabled>\n          <h5>Lich su lam bai</h5>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Diem</th>\n                <th>Mon</th>\n              </tr>\n\n            </thead>\n            <tbody>\n              <tr *ngFor= \"let item of ListResult.marks\">\n                <td>{{item.mark}}</td>\n                <td>{{item.idmon}}</td>\n              </tr>\n            </tbody>\n          </table>\n\n\n        </div>\n        <div class=\"form-group\" *ngIf=\"!isShow\">\n          <label>Tài Khoản</label>\n          <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"Info.username\">\n          <label style=\"margin-top: 30px;\">Email</label>\n          <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"Info.email\">\n        </div>\n\n        <button class=\"btn\" id=\"dangnhap\" *ngIf=\"!isShow\" (click)=\"click()\"><strong>Xem</strong></button>\n        <button class=\"btn\" id=\"dangnhap\" *ngIf=\"isShow\" (click)=\"click()\"><strong>Quay Lại</strong></button>\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/trangchu/trangchu.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/trangchu/trangchu.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\" style=\"padding-left:0px; padding-right: 0px; \">\n  <img id=\"id.banner\" src=\"../assets/images/banner.png\" style=\"width: 100%;\">\n</div>\n<nav class=\" container navbar navbar-expand-sm\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/trangchu']\">Trang Chủ</a></strong>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link \" [routerLink]=\"['/danhmucmonhoc']\">\n        <strong> Danh Mục Môn Học</strong>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/lienhe']\">Liên Hệ</a></strong>\n    </li>\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/gopy']\">Góp Ý</a></strong>\n    </li>\n    <li class=\"nav-item\">\n      <strong><a class=\"nav-link\" [routerLink]=\"['/hoidap']\">Hỏi Đáp</a></strong>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <strong>\n        <a class=\"nav-link \" >\n          <span>Tài Khoản</span>\n          <div class=\"dropdown-content\">\n            <p [routerLink]=\"['/dangnhap']\">Đăng Nhập</p>\n            <p [routerLink]=\"['/dangki']\">Đăng Kí</p>\n            <p [routerLink]=\"['/quenmatkhau']\">Quên Mật Khẩu</p>\n            <p [routerLink]=\"['/thongtin']\">Thông Tin</p>\n          </div>\n        </a>\n      </strong>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"container \" style=\"padding-left:0px; padding-right: 0px; \">\n  <div class=\"content\" style=\"width: 75%; float: left;\">\n    <div class=\"card\">\n      <div class=\"card-header text-center\" style=\"background-color: rgb(95, 117, 172)\">\n        <strong>Những Bài Thi Có Lượt Thi Nhiều Nhất!</strong>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col col-6\"\n            *ngFor='let item of Subjects | paginate: { itemsPerPage: itemsperpage, currentPage: curentpage }'>\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <img src=\"../assets/images/{{item.Logo}}\">\n                <div id=\"marquee\" [routerLink]=\"['/baithi']\">\n                  <strong>\n                    {{item.Name}}\n                  </strong>\n                </div>\n              </div>\n            </div>\n            <div class=\"w-100\">\n              <br>\n            </div>\n          </div>\n        </div>\n        <pagination-controls (pageChange)=\"curentpage = $event\" style=\"text-align: center;\">\n        </pagination-controls>\n      </div>\n    </div>\n  </div>\n  <div class=\"gioithieu\" style=\"width: 25%; height: 940px;float: left;\">\n    <div class=\"card\">\n      <div class=\"card-header text-center\">\n        <h5><strong>Giới Thiệu</strong></h5>\n      </div>\n      <div class=\"card-body\">\n        <p style=\"font-size: 19.5px;\"><Strong>Online Tranning</Strong> là một trong những website thi thử tốt\n          nhất hiện nay. Với chủ đề đa dạng, kiến thức mới được cập nhật liên tục\n          sẽ giúp bạn nâng cao kiến thứ cũng như kinh nghiệm của bạn trong thời gian\n          ngắn.<br>\n          Với đội ngũ đầy nhiệt huyết của chúng tôi <strong>Online Tranning</strong>\n          luôn là một Website để mọi Lập Trình Viên tin tưởng và đồng hành!\n        </p>\n        <hr style=\"background-color: rgb(54, 51, 41)\">\n        <h5 class=\"text-center\">\n          <strong style=\"margin-top:35px;\">Bài Thi Thử Nổi Bật</strong>\n        </h5>\n        <div class=\"row\" style=\"margin-top:35px;\">\n          <div class=\"col-5\">\n            <img class=\"text-center\" src=\"../assets/images/PHPP.png\" style=\"width:70%;\">\n          </div>\n          <div class=\"col-7\">\n            <p style=\"color: rgb(247, 57, 57)\">Top 1 trong các bài thi trong 3 tháng qua</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-5\">\n            <img class=\"text-center\" src=\"../assets/images/GAME.png\" style=\"width:70%;\">\n          </div>\n          <div class=\"col-7\">\n            <p style=\"color: rgb(247, 57, 57)\">Xu hướng tìm kiếm cao</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-5\">\n            <img class=\"text-center\" src=\"../assets/images/DBBS.png\" style=\"width:70%;\">\n          </div>\n          <div class=\"col-7\">\n            <p style=\"color: rgb(247, 57, 57)\">Có nhiều bài thi đạt điểm tối đa</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-5\">\n            <img class=\"text-center\" src=\"../assets/images/DBAV.png\" style=\"width:70%;\">\n          </div>\n          <div class=\"col-7\">\n            <p style=\"color: rgb(247, 57, 57)\">Cập nhật 2 ngày trước</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-5\">\n            <img class=\"text-center\" src=\"../assets/images/LAYO.jpg\" style=\"width:70%;\">\n          </div>\n          <div class=\"col-7\">\n            <p style=\"color: rgb(247, 57, 57)\">Cập nhật 4 ngày trước </p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

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
        this.title = 'assigment';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trangchu/trangchu.component */ "./src/app/trangchu/trangchu.component.ts");
/* harmony import */ var _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lienhe/lienhe.component */ "./src/app/lienhe/lienhe.component.ts");
/* harmony import */ var _dangnhap_dangnhap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dangnhap/dangnhap.component */ "./src/app/dangnhap/dangnhap.component.ts");
/* harmony import */ var _danhmucmonhoc_danhmucmonhoc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./danhmucmonhoc/danhmucmonhoc.component */ "./src/app/danhmucmonhoc/danhmucmonhoc.component.ts");
/* harmony import */ var _dangki_dangki_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dangki/dangki.component */ "./src/app/dangki/dangki.component.ts");
/* harmony import */ var _quenmatkhau_quenmatkhau_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./quenmatkhau/quenmatkhau.component */ "./src/app/quenmatkhau/quenmatkhau.component.ts");
/* harmony import */ var _gopy_gopy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gopy/gopy.component */ "./src/app/gopy/gopy.component.ts");
/* harmony import */ var _hoidap_hoidap_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hoidap/hoidap.component */ "./src/app/hoidap/hoidap.component.ts");
/* harmony import */ var _baithi_baithi_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./baithi/baithi.component */ "./src/app/baithi/baithi.component.ts");
/* harmony import */ var _thongtin_thongtin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./thongtin/thongtin.component */ "./src/app/thongtin/thongtin.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_10__["TrangchuComponent"],
                _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_11__["LienheComponent"],
                _dangnhap_dangnhap_component__WEBPACK_IMPORTED_MODULE_12__["DangnhapComponent"],
                _danhmucmonhoc_danhmucmonhoc_component__WEBPACK_IMPORTED_MODULE_13__["DanhmucmonhocComponent"],
                _dangki_dangki_component__WEBPACK_IMPORTED_MODULE_14__["DangkiComponent"],
                _quenmatkhau_quenmatkhau_component__WEBPACK_IMPORTED_MODULE_15__["QuenmatkhauComponent"],
                _gopy_gopy_component__WEBPACK_IMPORTED_MODULE_16__["GopyComponent"],
                _hoidap_hoidap_component__WEBPACK_IMPORTED_MODULE_17__["HoidapComponent"],
                _baithi_baithi_component__WEBPACK_IMPORTED_MODULE_18__["BaithiComponent"],
                _thongtin_thongtin_component__WEBPACK_IMPORTED_MODULE_19__["ThongtinComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', component: _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_10__["TrangchuComponent"] },
                    { path: 'lienhe', component: _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_11__["LienheComponent"] },
                    { path: 'gopy', component: _gopy_gopy_component__WEBPACK_IMPORTED_MODULE_16__["GopyComponent"] },
                    { path: 'hoidap', component: _hoidap_hoidap_component__WEBPACK_IMPORTED_MODULE_17__["HoidapComponent"] },
                    { path: 'dangki', component: _dangki_dangki_component__WEBPACK_IMPORTED_MODULE_14__["DangkiComponent"] },
                    { path: 'thongtin', component: _thongtin_thongtin_component__WEBPACK_IMPORTED_MODULE_19__["ThongtinComponent"] },
                    { path: 'quenmatkhau', component: _quenmatkhau_quenmatkhau_component__WEBPACK_IMPORTED_MODULE_15__["QuenmatkhauComponent"] },
                    { path: 'danhmucmonhoc', component: _danhmucmonhoc_danhmucmonhoc_component__WEBPACK_IMPORTED_MODULE_13__["DanhmucmonhocComponent"] },
                    { path: 'dangnhap', component: _dangnhap_dangnhap_component__WEBPACK_IMPORTED_MODULE_12__["DangnhapComponent"] },
                    { path: 'baithi/:cid', component: _baithi_baithi_component__WEBPACK_IMPORTED_MODULE_18__["BaithiComponent"] },
                    { path: '**', redirectTo: '', pathMatch: 'full' }
                ])
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/baithi/baithi.component.css":
/*!*********************************************!*\
  !*** ./src/app/baithi/baithi.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n    color: black;\r\n}\r\n\r\n.navbar ul li a{\r\n    color: black;\r\n    margin-left: 5px;\r\n    text-align: center;\r\n    margin-right: 5px;\r\n\r\n}\r\n\r\n.navbar ul li:hover{\r\n    background-color: rgb(235, 223, 223);\r\n    border-radius: 6px 6px;\r\n}\r\n\r\n.navbar{\r\n    background-color: rgb(151, 157, 163);\r\n}\r\n\r\n/* ----Header------ */\r\n\r\n.card-baithi{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.card-baithi .card .card-boy .pagi{\r\n   display: none;\r\n   margin-top: 15px;\r\n}\r\n\r\n/* ----DropDown Tai Khoan------- */\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: block;\r\n  }\r\n\r\n.dropdown-content {\r\n    position: absolute;\r\n    background-color: #e9ecefc7;\r\n    border-radius: 5px 5px;\r\n    width: 130px;\r\n    z-index: 1;\r\n  \r\n  }\r\n\r\n.dropdown-content p {\r\n    border-radius: 5px 5px;\r\n    height: 30px;\r\n    margin-bottom: 0px;\r\n    margin-top: 3px;\r\n    color:#47688c;\r\n    text-shadow: 2px 1px 1px #e9ecef;\r\n  }\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n.dropdown-content {\r\n      display: none;\r\n  }\r\n\r\n.dropdown-content p:hover{\r\n    background-color: rgb(91, 230, 121);\r\n    border-radius: 7px 7px;\r\n}\r\n\r\n.btn-success{\r\n    margin-left: 40%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYWl0aGkvYmFpdGhpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBQ0EscUJBQXFCOztBQUNyQjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7R0FDRyxhQUFhO0dBQ2IsZ0JBQWdCO0FBQ25COztBQUVBLGtDQUFrQzs7QUFDbEM7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVOztFQUVaOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO01BQ0ksYUFBYTtFQUNqQjs7QUFDQTtJQUNFLG1DQUFtQztJQUNuQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYXBwL2JhaXRoaS9iYWl0aGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXIgdWwgbGkgYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbn1cclxuXHJcbi5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMjMsIDIyMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4O1xyXG59XHJcblxyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTU3LCAxNjMpO1xyXG59XHJcbi8qIC0tLS1IZWFkZXItLS0tLS0gKi9cclxuLmNhcmQtYmFpdGhpe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmQtYmFpdGhpIC5jYXJkIC5jYXJkLWJveSAucGFnaXtcclxuICAgZGlzcGxheTogbm9uZTtcclxuICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLyogLS0tLURyb3BEb3duIFRhaSBLaG9hbi0tLS0tLS0gKi9cclxuLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmYzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgY29sb3I6IzQ3Njg4YztcclxuICAgIHRleHQtc2hhZG93OiAycHggMXB4IDFweCAjZTllY2VmO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgcDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMjMwLCAxMjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4IDdweDtcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/baithi/baithi.component.ts":
/*!********************************************!*\
  !*** ./src/app/baithi/baithi.component.ts ***!
  \********************************************/
/*! exports provided: BaithiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaithiComponent", function() { return BaithiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/server.service */ "./src/app/server/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _server_list_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/list-user.service */ "./src/app/server/list-user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");







var BaithiComponent = /** @class */ (function () {
    function BaithiComponent(http, route, listQuestion, userSV, cook, route2) {
        this.http = http;
        this.route = route;
        this.listQuestion = listQuestion;
        this.userSV = userSV;
        this.cook = cook;
        this.route2 = route2;
        this.itemsperpage = 1;
        this.currentpage = 1;
        this.quizs = [];
        this.List = [];
        this.socaudalam = 0;
        this.socaudung = 0;
    }
    BaithiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (para) {
            _this.Id = para.get('cid');
            _this.listQuestion.getQuizs(_this.Id).subscribe(function (data) {
                _this.quizs = data;
                for (var i = 0; i < _this.quizs.length; i++) {
                    _this.List[i] = { idcauhoi: _this.quizs[i].Id, idcautraloidung: _this.quizs[i].AnswerId, idcautraloi: null };
                }
                ;
            });
        });
    };
    BaithiComponent.prototype.check = function (idcauhoitruyenvao, idcautraloitruyenvao) {
        for (var i = 0; i < this.List.length; i++) {
            if (this.List[i].idcauhoi == idcauhoitruyenvao) {
                this.List[i].idcautraloi = idcautraloitruyenvao;
            }
        }
    };
    BaithiComponent.prototype.chamdiem = function () {
        var _this = this;
        for (var i = 0; i < this.List.length; i++) {
            if (this.List[i].idcautraloi == this.List[i].idcautraloidung) {
                this.socaudung += 1;
            }
            if (this.List[i].idcautraloi != null) {
                this.socaudalam += 1;
            }
        }
        console.log(this.socaudalam);
        console.log(this.socaudung);
        this.diem = ((this.socaudung / this.List.length) * 10).toFixed(2);
        console.log(this.diem);
        this.userSV.getStudents().subscribe(function (data) {
            _this.ListUser = data;
            _this.userid = _this.cook.get("id");
            for (var i = 0; i < _this.ListUser.length; i++) {
                if (_this.ListUser[i].id == _this.userid) {
                    _this.ListUser[i].marks.push({ mark: _this.diem, idmon: _this.Id });
                    _this.http.put("https://cuong-dev1-api.herokuapp.com/studentsTwo/" + _this.userid, _this.ListUser[i]).subscribe(function (data) {
                        _this.route2.navigate(['danhmucmonhoc']);
                    });
                }
            }
        });
    };
    BaithiComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _server_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
        { type: _server_list_user_service__WEBPACK_IMPORTED_MODULE_5__["ListUserService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    BaithiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-baithi',
            template: __webpack_require__(/*! raw-loader!./baithi.component.html */ "./node_modules/raw-loader/index.js!./src/app/baithi/baithi.component.html"),
            styles: [__webpack_require__(/*! ./baithi.component.css */ "./src/app/baithi/baithi.component.css")]
        })
    ], BaithiComponent);
    return BaithiComponent;
}());



/***/ }),

/***/ "./src/app/dangki/dangki.component.css":
/*!*********************************************!*\
  !*** ./src/app/dangki/dangki.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar ul li:hover{\r\n    background-color: rgb(235, 223, 223);\r\n    border-radius: 6px 6px;\r\n }\r\n\r\n\r\n.form{\r\n    padding-left: 200px;\r\n    \r\n}\r\n\r\n\r\ninput{\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid #00BCD4;\r\n}\r\n\r\n\r\n/* ----DropDown Tai Khoan------- */\r\n\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: block;\r\n  }\r\n\r\n\r\n.dropdown-content {\r\n    position: absolute;\r\n    background-color: #e9ecefc7;\r\n    border-radius: 5px 5px;\r\n    width: 130px;\r\n    z-index: 1;\r\n  \r\n  }\r\n\r\n\r\n.dropdown-content p {\r\n    border-radius: 5px 5px;\r\n    height: 30px;\r\n    margin-bottom: 0px;\r\n    margin-top: 3px;\r\n    color:#47688c;\r\n    text-shadow: 2px 1px 1px #e9ecef;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n\r\n.dropdown-content {\r\n      display: none;\r\n  }\r\n\r\n\r\n.dropdown-content p:hover{\r\n    background-color: rgb(91, 230, 121);\r\n    border-radius: 7px 7px;\r\n}\r\n\r\n\r\n#dangnhap {\r\n    padding: 7px;\r\n    width: 50%;\r\n    margin-top: 15px;\r\n    margin-left: 250px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    bottom: 10px;\r\n    background: linear-gradient(to right, #fc00ff, #00dbde);\r\n}\r\n\r\n\r\n#dangnhap:hover{\r\n    background: linear-gradient(to right, #fc466b, #3f5efb); \r\n}\r\n\r\n\r\n.nav-link {\r\n                                                            color: black;\r\n                                                        }\r\n\r\n\r\n.navbar ul li a{\r\n                                                            color: black;\r\n                                                            margin-left: 5px;\r\n                                                            text-align: center;\r\n                                                            margin-right: 5px;\r\n                                                        }\r\n\r\n\r\n.navbar ul li:hover{\r\n                                                            background-color: rgb(235, 223, 223);\r\n                                                        }\r\n\r\n\r\n.navbar{\r\n                                                            background-color: rgb(151, 157, 163)\r\n                                                        }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW5na2kvZGFuZ2tpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0NBQ3pCOzs7QUFHRDtJQUNJLG1CQUFtQjs7QUFFdkI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7OztBQUVBLGtDQUFrQzs7O0FBQ2xDO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7O0VBRVo7OztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQ0FBZ0M7RUFDbEM7OztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7O0FBRUE7TUFDSSxhQUFhO0VBQ2pCOzs7QUFDQTtJQUNFLG1DQUFtQztJQUNuQyxzQkFBc0I7QUFDMUI7OztBQWNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVEQUF1RDtBQUMzRDs7O0FBQ0E7SUFDSSx1REFBdUQ7QUFDM0Q7OztBQWV3RDs0REFDSSxZQUFZO3dEQUNoQjs7O0FBRUE7NERBQ0ksWUFBWTs0REFDWixnQkFBZ0I7NERBQ2hCLGtCQUFrQjs0REFDbEIsaUJBQWlCO3dEQUNyQjs7O0FBRUE7NERBQ0ksb0NBQW9DO3dEQUN4Qzs7O0FBRUE7NERBQ0k7d0RBQ0oiLCJmaWxlIjoiYXBwL2RhbmdraS9kYW5na2kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMjMsIDIyMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4O1xyXG4gfVxyXG5cclxuXHJcbi5mb3Jte1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIFxyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMEJDRDQ7XHJcbn1cclxuXHJcbi8qIC0tLS1Ecm9wRG93biBUYWkgS2hvYW4tLS0tLS0tICovXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZmM3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGNvbG9yOiM0NzY4OGM7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDFweCAxcHggI2U5ZWNlZjtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1jb250ZW50IHA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIzMCwgMTIxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNkYW5nbmhhcCB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzAwZmYsICMwMGRiZGUpO1xyXG59XHJcbiNkYW5nbmhhcDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZjNDY2YiwgIzNmNWVmYik7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIyMywgMjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1NywgMTYzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_list_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/list-user.service */ "./src/app/server/list-user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DangkiComponent = /** @class */ (function () {
    function DangkiComponent(listStudents, http, router) {
        this.listStudents = listStudents;
        this.http = http;
        this.router = router;
        this.formStudent = {
            username: null,
            email: null,
            password: null,
            gender: null,
            fullname: null,
            schoolfee: null,
            birthday: Date,
            marks: []
        };
    }
    DangkiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listStudents.getStudents().subscribe(function (data) {
            _this.listStudent = data;
        });
    };
    DangkiComponent.prototype.studentLogin = function () {
        var _this = this;
        var check = false;
        this.listStudent.forEach(function (item) {
            if (_this.formStudent.email == item.email || _this.formStudent.username == item.username) {
                check = true;
                return;
            }
            if (_this.formStudent.email == null || _this.formStudent.username == null || _this.formStudent.password == null) {
                check = true;
                return;
            }
        });
        if (check == true) {
            alert("Tài Khoản Hoặc Email Đã Được Đăng Kí Hoặc Chưa Đầy Đủ Thông Tin");
        }
        if (check == false) {
            this.postStudent();
        }
    };
    DangkiComponent.prototype.postStudent = function () {
        var _this = this;
        var newStudent = {
            username: this.formStudent.username,
            email: this.formStudent.email,
            password: this.formStudent.password,
            fullname: this.formStudent.fullname,
            birthday: this.formStudent.birthday,
            marks: []
        };
        this.http.post("https://cuong-dev1-api.herokuapp.com/studentsTwo", newStudent).subscribe(function (data) {
            alert("Đăng Kí Thành Công");
            _this.router.navigate(['/dangnhap']);
        });
    };
    DangkiComponent.ctorParameters = function () { return [
        { type: _server_list_user_service__WEBPACK_IMPORTED_MODULE_2__["ListUserService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    DangkiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dangki',
            template: __webpack_require__(/*! raw-loader!./dangki.component.html */ "./node_modules/raw-loader/index.js!./src/app/dangki/dangki.component.html"),
            styles: [__webpack_require__(/*! ./dangki.component.css */ "./src/app/dangki/dangki.component.css")]
        })
    ], DangkiComponent);
    return DangkiComponent;
}());



/***/ }),

/***/ "./src/app/dangnhap/dangnhap.component.css":
/*!*************************************************!*\
  !*** ./src/app/dangnhap/dangnhap.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar ul li:hover{\r\n    background-color: rgb(235, 223, 223);\r\n    border-radius: 6px 6px;\r\n }\r\n\r\n\r\n.form{\r\n    padding-left: 200px;\r\n    \r\n}\r\n\r\n\r\ninput{\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid #00BCD4;\r\n}\r\n\r\n\r\n/* ----DropDown Tai Khoan------- */\r\n\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: block;\r\n  }\r\n\r\n\r\n.dropdown-content {\r\n    position: absolute;\r\n    background-color: #e9ecefc7;\r\n    border-radius: 5px 5px;\r\n    width: 130px;\r\n    z-index: 1;\r\n  \r\n  }\r\n\r\n\r\n.dropdown-content p {\r\n    border-radius: 5px 5px;\r\n    height: 30px;\r\n    margin-bottom: 0px;\r\n    margin-top: 3px;\r\n    color:#47688c;\r\n    text-shadow: 2px 1px 1px #e9ecef;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n\r\n.dropdown-content {\r\n    display: none;\r\n  }\r\n\r\n\r\n.dropdown-content p:hover{\r\n      background-color: rgb(91, 230, 121);\r\n      border-radius: 7px 7px;\r\n  }\r\n\r\n\r\n#dangnhap {\r\n    padding: 7px;\r\n    width: 50%;\r\n    margin-top: 15px;\r\n    margin-left: 250px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    bottom: 10px;\r\n    background: linear-gradient(to right, #fc00ff, #00dbde);\r\n}\r\n\r\n\r\n#dangnhap:hover{\r\n    background: linear-gradient(to right, #fc466b, #3f5efb); \r\n}\r\n\r\n\r\n.nav-link {\r\n                                                            color: black;\r\n                                                        }\r\n\r\n\r\n.navbar ul li a{\r\n                                                            color: black;\r\n                                                            margin-left: 5px;\r\n                                                            text-align: center;\r\n                                                            margin-right: 5px;\r\n                                                        }\r\n\r\n\r\n.navbar ul li:hover{\r\n                                                            background-color: rgb(235, 223, 223);\r\n                                                        }\r\n\r\n\r\n.navbar{\r\n                                                            background-color: rgb(151, 157, 163)\r\n                                                        }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW5nbmhhcC9kYW5nbmhhcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHNCQUFzQjtDQUN6Qjs7O0FBR0Q7SUFDSSxtQkFBbUI7O0FBRXZCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOzs7QUFHQSxrQ0FBa0M7OztBQUNsQztJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVOztFQUVaOzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0NBQWdDO0VBQ2xDOzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7OztBQUVBO0lBQ0UsYUFBYTtFQUNmOzs7QUFFQTtNQUNJLG1DQUFtQztNQUNuQyxzQkFBc0I7RUFDMUI7OztBQU9GO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVEQUF1RDtBQUMzRDs7O0FBQ0E7SUFDSSx1REFBdUQ7QUFDM0Q7OztBQWV3RDs0REFDSSxZQUFZO3dEQUNoQjs7O0FBRUE7NERBQ0ksWUFBWTs0REFDWixnQkFBZ0I7NERBQ2hCLGtCQUFrQjs0REFDbEIsaUJBQWlCO3dEQUNyQjs7O0FBRUE7NERBQ0ksb0NBQW9DO3dEQUN4Qzs7O0FBRUE7NERBQ0k7d0RBQ0oiLCJmaWxlIjoiYXBwL2RhbmduaGFwL2RhbmduaGFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHVsIGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjIzLCAyMjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweDtcclxuIH1cclxuXHJcblxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XHJcbiAgICBcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBCQ0Q0O1xyXG59XHJcblxyXG5cclxuLyogLS0tLURyb3BEb3duIFRhaSBLaG9hbi0tLS0tLS0gKi9cclxuLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmYzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgY29sb3I6IzQ3Njg4YztcclxuICAgIHRleHQtc2hhZG93OiAycHggMXB4IDFweCAjZTllY2VmO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCBwOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIzMCwgMTIxKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4IDdweDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNkYW5nbmhhcCB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzAwZmYsICMwMGRiZGUpO1xyXG59XHJcbiNkYW5nbmhhcDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZjNDY2YiwgIzNmNWVmYik7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIyMywgMjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1NywgMTYzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _server_list_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/list-user.service */ "./src/app/server/list-user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






var DangnhapComponent = /** @class */ (function () {
    function DangnhapComponent(listStudents, http, router, cook) {
        this.listStudents = listStudents;
        this.http = http;
        this.router = router;
        this.cook = cook;
    }
    DangnhapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listStudents.getStudents().subscribe(function (data) {
            _this.InfoStudent = data;
        });
    };
    DangnhapComponent.prototype.check = function () {
        var _this = this;
        console.log(this.InfoStudent);
        var flag = false;
        this.InfoStudent.forEach(function (element) {
            if (_this.taikhoan == null || _this.matkhau == null) {
                return;
            }
            if (element.username == _this.taikhoan && element.password == _this.matkhau) {
                _this.cook.set("id", element.id, 1 / 24);
                alert("Đăng Nhập Thành Công");
                _this.router.navigate(["/danhmucmonhoc"]);
                flag = true;
            }
        });
        if (flag == false) {
            alert("Sai Tài Khoản Hoặc Mật Khẩu");
        }
    };
    DangnhapComponent.ctorParameters = function () { return [
        { type: _server_list_user_service__WEBPACK_IMPORTED_MODULE_4__["ListUserService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    DangnhapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dangnhap',
            template: __webpack_require__(/*! raw-loader!./dangnhap.component.html */ "./node_modules/raw-loader/index.js!./src/app/dangnhap/dangnhap.component.html"),
            styles: [__webpack_require__(/*! ./dangnhap.component.css */ "./src/app/dangnhap/dangnhap.component.css")]
        })
    ], DangnhapComponent);
    return DangnhapComponent;
}());



/***/ }),

/***/ "./src/app/danhmucmonhoc/danhmucmonhoc.component.css":
/*!***********************************************************!*\
  !*** ./src/app/danhmucmonhoc/danhmucmonhoc.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n    color: black;\r\n}\r\n\r\n.navbar ul li a{\r\n    color: black;\r\n    margin-left: 5px;\r\n    text-align: center;\r\n    margin-right: 5px;\r\n}\r\n\r\n.navbar ul li:hover{\r\n    background-color: rgb(235, 223, 223);\r\n    border-radius: 6px 6px;\r\n}\r\n\r\n.navbar{\r\n    background-color: rgb(151, 157, 163);\r\n\r\n}\r\n\r\n.card-body ul li{\r\n    border-bottom: 1px solid rgb(122, 111, 111);\r\n    border-right: 1px solid rgb(122, 111, 111);\r\n    border-left: 1px solid rgb(122, 111, 111);\r\n    border-top: 1px solid rgb(122, 111, 111);\r\n    list-style: none;\r\n    height: 60px;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 0 auto;\r\n}\r\n\r\n.card-body ul{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.card-header{\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.pagination{\r\n    margin: 20px 330px;\r\n}\r\n\r\n/* ----DropDown Tai Khoan------- */\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: block;\r\n  }\r\n\r\n.dropdown-content {\r\n    position: absolute;\r\n    background-color: #e9ecefc7;\r\n    border-radius: 5px 5px;\r\n    width: 130px;\r\n    z-index: 1;\r\n  \r\n  }\r\n\r\n.dropdown-content p {\r\n    border-radius: 5px 5px;\r\n    height: 30px;\r\n    margin-bottom: 0px;\r\n    margin-top: 3px;\r\n    color:#47688c;\r\n    text-shadow: 2px 1px 1px #e9ecef;\r\n  }\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n.dropdown-content {\r\n      display: none;\r\n  }\r\n\r\n.dropdown-content p:hover{\r\n    background-color: rgb(91, 230, 121);\r\n    border-radius: 7px 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW5obXVjbW9uaG9jL2RhbmhtdWNtb25ob2MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQywwQ0FBMEM7SUFDMUMseUNBQXlDO0lBQ3pDLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTs7RUFFWjs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtNQUNJLGFBQWE7RUFDakI7O0FBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImFwcC9kYW5obXVjbW9uaG9jL2RhbmhtdWNtb25ob2MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXIgdWwgbGkgYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm5hdmJhciB1bCBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIyMywgMjIzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHg7XHJcbn1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAxNTcsIDE2Myk7XHJcblxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHVsIGxpe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMjIsIDExMSwgMTExKTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxMjIsIDExMSwgMTExKTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDEyMiwgMTExLCAxMTEpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxMjIsIDExMSwgMTExKTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIGF1dG87XHJcbn1cclxuLmNhcmQtYm9keSB1bHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi5wYWdpbmF0aW9ue1xyXG4gICAgbWFyZ2luOiAyMHB4IDMzMHB4O1xyXG59XHJcblxyXG4vKiAtLS0tRHJvcERvd24gVGFpIEtob2FuLS0tLS0tLSAqL1xyXG4uZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWZjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCBwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBjb2xvcjojNDc2ODhjO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAxcHggMXB4ICNlOWVjZWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZHJvcGRvd24tY29udGVudCBwOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAyMzAsIDEyMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4O1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/server.service */ "./src/app/server/server.service.ts");




var DanhmucmonhocComponent = /** @class */ (function () {
    // -----------
    function DanhmucmonhocComponent(http, List) {
        this.http = http;
        this.List = List;
        this.itemsperpage = 8;
        this.currentpage = 1;
    }
    DanhmucmonhocComponent.prototype.previouspage = function () {
        if (this.currentpage > 1)
            this.currentpage--;
        else
            return;
    };
    DanhmucmonhocComponent.prototype.nextpage = function () {
        if (this.currentpage < 3)
            this.currentpage++;
    };
    DanhmucmonhocComponent.prototype.pagenow = function (sotrang) {
        this.currentpage = +sotrang;
    };
    DanhmucmonhocComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.List.getSub().subscribe(function (data) { return _this.Subjects = data; });
    };
    DanhmucmonhocComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _server_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] }
    ]; };
    DanhmucmonhocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-danhmucmonhoc',
            template: __webpack_require__(/*! raw-loader!./danhmucmonhoc.component.html */ "./node_modules/raw-loader/index.js!./src/app/danhmucmonhoc/danhmucmonhoc.component.html"),
            styles: [__webpack_require__(/*! ./danhmucmonhoc.component.css */ "./src/app/danhmucmonhoc/danhmucmonhoc.component.css")]
        })
    ], DanhmucmonhocComponent);
    return DanhmucmonhocComponent;
}());



/***/ }),

/***/ "./src/app/gopy/gopy.component.css":
/*!*****************************************!*\
  !*** ./src/app/gopy/gopy.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "                .nav-link {\r\n                    color: black;\r\n                }\r\n\r\n                .navbar ul li a{\r\n                    color: black;\r\n                    margin-left: 5px;\r\n                    text-align: center;\r\n                    margin-right: 5px;\r\n\r\n                }\r\n\r\n                .navbar ul li:hover{\r\n                    background-color: rgb(235, 223, 223);\r\n                    border-radius: 6px 6px;\r\n                }\r\n\r\n                .navbar{\r\n                    background-color: rgb(151, 157, 163)\r\n                }\r\n\r\n                #image{\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n                .gopy{\r\n    padding: 0;\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 40px;\r\n    border: none;\r\n\r\n}\r\n\r\n                .textarea{\r\n    margin-left: 20px;\r\n    width: 1020px;\r\n    height: 450px;\r\n    opacity: 0.9;\r\n    border: double 10px rgb(72, 190, 72);\r\n    border-radius: 20px;\r\n}\r\n\r\n                .textarea:focus{\r\n    font-size: 25px;\r\n    background-color: rgb(177, 221, 128);\r\n    color: rgb(61, 55, 55);\r\n}\r\n\r\n                #gui{\r\nbackground: linear-gradient(to right, #f5de15, rgb(15, 241, 34));\r\nwidth: 90%;\r\nmargin: 0 auto;\r\n}\r\n\r\n                /* ----DropDown Tai Khoan------- */\r\n\r\n                .dropdown {\r\n    position: relative;\r\n    display: block;\r\n  }\r\n\r\n                .dropdown-content {\r\n    position: absolute;\r\n    background-color: #e9ecefc7;\r\n    border-radius: 5px 5px;\r\n    width: 130px;\r\n    z-index: 1;\r\n  \r\n  }\r\n\r\n                .dropdown-content p {\r\n    border-radius: 5px 5px;\r\n    height: 30px;\r\n    margin-bottom: 0px;\r\n    margin-top: 3px;\r\n    color:#47688c;\r\n    text-shadow: 2px 1px 1px #e9ecef;\r\n  }\r\n\r\n                .dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n                .dropdown-content {\r\n      display: none;\r\n  }\r\n\r\n                .dropdown-content p:hover{\r\n    background-color: rgb(91, 230, 121);\r\n    border-radius: 7px 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9nb3B5L2dvcHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ0JBQWdCO29CQUNJLFlBQVk7Z0JBQ2hCOztnQkFFQTtvQkFDSSxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixpQkFBaUI7O2dCQUVyQjs7Z0JBRUE7b0JBQ0ksb0NBQW9DO29CQUNwQyxzQkFBc0I7Z0JBQzFCOztnQkFFQTtvQkFDSTtnQkFDSjs7Z0JBR2hCOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztnQkFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZOztBQUVoQjs7Z0JBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7Z0JBRUE7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtBQUMxQjs7Z0JBQ0E7QUFDQSxnRUFBZ0U7QUFDaEUsVUFBVTtBQUNWLGNBQWM7QUFDZDs7Z0JBRUEsa0NBQWtDOztnQkFDbEM7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7Z0JBRUE7SUFDRSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTs7RUFFWjs7Z0JBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdDQUFnQztFQUNsQzs7Z0JBRUE7SUFDRSxjQUFjO0VBQ2hCOztnQkFFQTtNQUNJLGFBQWE7RUFDakI7O2dCQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJhcHAvZ29weS9nb3B5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhciB1bCBsaSBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhciB1bCBsaTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMjMsIDIyMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1NywgMTYzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiNpbWFnZXtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmdvcHl7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbn1cclxuLnRleHRhcmVhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGJvcmRlcjogZG91YmxlIDEwcHggcmdiKDcyLCAxOTAsIDcyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYTpmb2N1c3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDIyMSwgMTI4KTtcclxuICAgIGNvbG9yOiByZ2IoNjEsIDU1LCA1NSk7XHJcbn1cclxuI2d1aXtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVkZTE1LCByZ2IoMTUsIDI0MSwgMzQpKTtcclxud2lkdGg6IDkwJTtcclxubWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIC0tLS1Ecm9wRG93biBUYWkgS2hvYW4tLS0tLS0tICovXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZmM3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGNvbG9yOiM0NzY4OGM7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDFweCAxcHggI2U5ZWNlZjtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1jb250ZW50IHA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIzMCwgMTIxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GopyComponent = /** @class */ (function () {
    function GopyComponent() {
    }
    GopyComponent.prototype.ngOnInit = function () {
    };
    GopyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gopy',
            template: __webpack_require__(/*! raw-loader!./gopy.component.html */ "./node_modules/raw-loader/index.js!./src/app/gopy/gopy.component.html"),
            styles: [__webpack_require__(/*! ./gopy.component.css */ "./src/app/gopy/gopy.component.css")]
        })
    ], GopyComponent);
    return GopyComponent;
}());



/***/ }),

/***/ "./src/app/hoidap/hoidap.component.css":
/*!*********************************************!*\
  !*** ./src/app/hoidap/hoidap.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form{\r\n    padding-left: 200px;\r\n    \r\n}\r\n\r\ninput{\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid #00BCD4;\r\n}\r\n\r\n#dangnhap {\r\n    padding: 7px;\r\n    width: 50%;\r\n    margin-top: 15px;\r\n    margin-left: 250px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    bottom: 10px;\r\n    background: linear-gradient(to right, #fc00ff, #00dbde);\r\n}\r\n\r\n#dangnhap:hover{\r\n    background: linear-gradient(to right, #fc466b, #3f5efb); \r\n}\r\n\r\n/* header html */\r\n\r\n.nav-link {\r\n    color: black;\r\n}\r\n\r\n.navbar ul li a{\r\n    color: black;\r\n    margin-left: 5px;\r\n    text-align: center;\r\n    margin-right: 5px;\r\n }\r\n\r\n.navbar ul li:hover{\r\n    background-color: rgb(235, 223, 223);\r\n    border-radius: 6px 6px;\r\n }\r\n\r\n.navbar{\r\n    background-color: rgb(151, 157, 163)\r\n }\r\n\r\n/* ----DropDown Tai Khoan------- */\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: block;\r\n  }\r\n\r\n.dropdown-content {\r\n    position: absolute;\r\n    background-color: #e9ecefc7;\r\n    border-radius: 5px 5px;\r\n    width: 130px;\r\n    z-index: 1;\r\n  \r\n  }\r\n\r\n.dropdown-content p {\r\n    border-radius: 5px 5px;\r\n    height: 30px;\r\n    margin-bottom: 0px;\r\n    margin-top: 3px;\r\n    color:#47688c;\r\n    text-shadow: 2px 1px 1px #e9ecef;\r\n  }\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n.dropdown-content {\r\n      display: none;\r\n  }\r\n\r\n.dropdown-content p:hover{\r\n    background-color: rgb(91, 230, 121);\r\n    border-radius: 7px 7px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob2lkYXAvaG9pZGFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVEQUF1RDtBQUMzRDs7QUFDQTtJQUNJLHVEQUF1RDtBQUMzRDs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQztJQUNHLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFQTtJQUNHLG9DQUFvQztJQUNwQyxzQkFBc0I7Q0FDekI7O0FBRUE7SUFDRztDQUNIOztBQUVELGtDQUFrQzs7QUFDbEM7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVOztFQUVaOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO01BQ0ksYUFBYTtFQUNqQjs7QUFDQTtJQUNFLG1DQUFtQztJQUNuQyxzQkFBc0I7QUFDMUIiLCJmaWxlIjoiYXBwL2hvaWRhcC9ob2lkYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XHJcbiAgICBcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBCQ0Q0O1xyXG59XHJcblxyXG4jZGFuZ25oYXAge1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmMwMGZmLCAjMDBkYmRlKTtcclxufVxyXG4jZGFuZ25oYXA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzQ2NmIsICMzZjVlZmIpOyBcclxufVxyXG5cclxuLyogaGVhZGVyIGh0bWwgKi9cclxuLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuIC5uYXZiYXIgdWwgbGkgYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuIH1cclxuXHJcbiAubmF2YmFyIHVsIGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjIzLCAyMjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweDtcclxuIH1cclxuXHJcbiAubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTU3LCAxNjMpXHJcbiB9XHJcblxyXG4vKiAtLS0tRHJvcERvd24gVGFpIEtob2FuLS0tLS0tLSAqL1xyXG4uZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWZjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCBwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBjb2xvcjojNDc2ODhjO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAxcHggMXB4ICNlOWVjZWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZHJvcGRvd24tY29udGVudCBwOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAyMzAsIDEyMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4O1xyXG59XHJcblxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HoidapComponent = /** @class */ (function () {
    function HoidapComponent() {
    }
    HoidapComponent.prototype.ngOnInit = function () {
    };
    HoidapComponent.prototype.rep = function () {
        alert("Hệ Thống Sẽ Trả Lời Bạn Trong Thời Gian Sớm Nhất! Cảm Ơn!");
    };
    HoidapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hoidap',
            template: __webpack_require__(/*! raw-loader!./hoidap.component.html */ "./node_modules/raw-loader/index.js!./src/app/hoidap/hoidap.component.html"),
            styles: [__webpack_require__(/*! ./hoidap.component.css */ "./src/app/hoidap/hoidap.component.css")]
        })
    ], HoidapComponent);
    return HoidapComponent;
}());



/***/ }),

/***/ "./src/app/lienhe/lienhe.component.css":
/*!*********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "                                                        .nav-link {\r\n                                                            color: black;\r\n                                                        }\r\n\r\n                                                        .navbar ul li a{\r\n                                                            color: black;\r\n                                                            margin-left: 5px;\r\n                                                            text-align: center;\r\n                                                            margin-right: 5px;\r\n                                                        }\r\n\r\n                                                        .navbar ul li:hover{\r\n                                                            background-color: rgb(235, 223, 223);\r\n                                                            border-radius: 6px 6px;\r\n                                                        }\r\n\r\n                                                        .navbar{\r\n                                                            background-color: rgb(151, 157, 163)\r\n                                                        }\r\n\r\n                                                        /* ----DropDown Tai Khoan------- */\r\n\r\n                                                        .dropdown {\r\n    position: relative;\r\n    display: block;\r\n  }\r\n\r\n                                                        .dropdown-content {\r\n    position: absolute;\r\n    background-color: #e9ecefc7;\r\n    border-radius: 5px 5px;\r\n    width: 130px;\r\n    z-index: 1;\r\n  \r\n  }\r\n\r\n                                                        .dropdown-content p {\r\n    border-radius: 5px 5px;\r\n    height: 30px;\r\n    margin-bottom: 0px;\r\n    margin-top: 3px;\r\n    color:#47688c;\r\n    text-shadow: 2px 1px 1px #e9ecef;\r\n  }\r\n\r\n                                                        .dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n                                                        .dropdown-content {\r\n      display: none;\r\n  }\r\n\r\n                                                        .dropdown-content p:hover{\r\n    background-color: rgb(91, 230, 121);\r\n    border-radius: 7px 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saWVuaGUvbGllbmhlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndEQUF3RDs0REFDSSxZQUFZO3dEQUNoQjs7d0RBRUE7NERBQ0ksWUFBWTs0REFDWixnQkFBZ0I7NERBQ2hCLGtCQUFrQjs0REFDbEIsaUJBQWlCO3dEQUNyQjs7d0RBRUE7NERBQ0ksb0NBQW9DOzREQUNwQyxzQkFBc0I7d0RBQzFCOzt3REFFQTs0REFDSTt3REFDSjs7d0RBR0Esa0NBQWtDOzt3REFDMUY7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7d0RBRUE7SUFDRSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTs7RUFFWjs7d0RBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdDQUFnQztFQUNsQzs7d0RBRUE7SUFDRSxjQUFjO0VBQ2hCOzt3REFFQTtNQUNJLGFBQWE7RUFDakI7O3dEQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJhcHAvbGllbmhlL2xpZW5oZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIyMywgMjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1NywgMTYzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIC0tLS1Ecm9wRG93biBUYWkgS2hvYW4tLS0tLS0tICovXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZmM3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGNvbG9yOiM0NzY4OGM7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDFweCAxcHggI2U5ZWNlZjtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1jb250ZW50IHA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIzMCwgMTIxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LienheComponent = /** @class */ (function () {
    function LienheComponent() {
    }
    LienheComponent.prototype.ngOnInit = function () {
    };
    LienheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lienhe',
            template: __webpack_require__(/*! raw-loader!./lienhe.component.html */ "./node_modules/raw-loader/index.js!./src/app/lienhe/lienhe.component.html"),
            styles: [__webpack_require__(/*! ./lienhe.component.css */ "./src/app/lienhe/lienhe.component.css")]
        })
    ], LienheComponent);
    return LienheComponent;
}());



/***/ }),

/***/ "./src/app/quenmatkhau/quenmatkhau.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quenmatkhau/quenmatkhau.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar ul li:hover{\r\n    background-color: rgb(235, 223, 223);\r\n    border-radius: 6px 6px;\r\n }\r\n\r\n\r\n.form{\r\n    padding-left: 200px;\r\n    \r\n}\r\n\r\n\r\ninput{\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid #00BCD4;\r\n}\r\n\r\n\r\n/* ----DropDown Tai Khoan------- */\r\n\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: block;\r\n  }\r\n\r\n\r\n.dropdown-content {\r\n    position: absolute;\r\n    background-color: #e9ecefc7;\r\n    border-radius: 5px 5px;\r\n    width: 130px;\r\n    z-index: 1;\r\n  \r\n  }\r\n\r\n\r\n.dropdown-content p {\r\n    border-radius: 5px 5px;\r\n    height: 30px;\r\n    margin-bottom: 0px;\r\n    margin-top: 3px;\r\n    color:#47688c;\r\n    text-shadow: 2px 1px 1px #e9ecef;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n\r\n.dropdown-content {\r\n      display: none;\r\n  }\r\n\r\n\r\n.dropdown-content p:hover{\r\n    background-color: rgb(91, 230, 121);\r\n    border-radius: 7px 7px;\r\n}\r\n\r\n\r\n#dangnhap {\r\n    padding: 7px;\r\n    width: 50%;\r\n    margin-top: 15px;\r\n    margin-left: 250px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    bottom: 10px;\r\n    background: linear-gradient(to right, #fc00ff, #00dbde);\r\n}\r\n\r\n\r\n#dangnhap:hover{\r\n    background: linear-gradient(to right, #fc466b, #3f5efb); \r\n}\r\n\r\n\r\n.nav-link {\r\n                                                            color: black;\r\n                                                        }\r\n\r\n\r\n.navbar ul li a{\r\n                                                            color: black;\r\n                                                            margin-left: 5px;\r\n                                                            text-align: center;\r\n                                                            margin-right: 5px;\r\n                                                        }\r\n\r\n\r\n.navbar ul li:hover{\r\n                                                            background-color: rgb(235, 223, 223);\r\n                                                        }\r\n\r\n\r\n.navbar{\r\n                                                            background-color: rgb(151, 157, 163)\r\n                                                        }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9xdWVubWF0a2hhdS9xdWVubWF0a2hhdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHNCQUFzQjtDQUN6Qjs7O0FBR0Q7SUFDSSxtQkFBbUI7O0FBRXZCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOzs7QUFJQSxrQ0FBa0M7OztBQUNsQztJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVOztFQUVaOzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0NBQWdDO0VBQ2xDOzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7OztBQUVBO01BQ0ksYUFBYTtFQUNqQjs7O0FBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0FBQzFCOzs7QUFZQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWix1REFBdUQ7QUFDM0Q7OztBQUNBO0lBQ0ksdURBQXVEO0FBQzNEOzs7QUFld0Q7NERBQ0ksWUFBWTt3REFDaEI7OztBQUVBOzREQUNJLFlBQVk7NERBQ1osZ0JBQWdCOzREQUNoQixrQkFBa0I7NERBQ2xCLGlCQUFpQjt3REFDckI7OztBQUVBOzREQUNJLG9DQUFvQzt3REFDeEM7OztBQUVBOzREQUNJO3dEQUNKIiwiZmlsZSI6ImFwcC9xdWVubWF0a2hhdS9xdWVubWF0a2hhdS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB1bCBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIyMywgMjIzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHg7XHJcbiB9XHJcblxyXG5cclxuLmZvcm17XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwQkNENDtcclxufVxyXG5cclxuXHJcblxyXG4vKiAtLS0tRHJvcERvd24gVGFpIEtob2FuLS0tLS0tLSAqL1xyXG4uZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWZjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCBwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBjb2xvcjojNDc2ODhjO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAxcHggMXB4ICNlOWVjZWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZHJvcGRvd24tY29udGVudCBwOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAyMzAsIDEyMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuI2RhbmduaGFwIHtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZjMDBmZiwgIzAwZGJkZSk7XHJcbn1cclxuI2RhbmduaGFwOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmM0NjZiLCAjM2Y1ZWZiKTsgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGkgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmJhciB1bCBsaTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjIzLCAyMjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTU3LCAxNjMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_list_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/list-user.service */ "./src/app/server/list-user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var QuenmatkhauComponent = /** @class */ (function () {
    function QuenmatkhauComponent(listStudents, http, route) {
        this.listStudents = listStudents;
        this.http = http;
        this.route = route;
        this.Info = {
            user: null,
            email: null,
            password: null
        };
    }
    QuenmatkhauComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listStudents.getStudents().subscribe(function (data) {
            _this.InfoUser = data;
            console.log(_this.InfoUser);
        });
    };
    QuenmatkhauComponent.prototype.CheckData = function () {
        var _this = this;
        console.log(this.InfoUser);
        var flag = false;
        this.InfoUser.forEach(function (element) {
            if (_this.Info.user == element.username && _this.Info.email == element.email) {
                flag = true;
                return;
            }
        });
        if (flag == false) {
            alert("Thông Tin Chưa Chính Xác");
        }
        if (flag == true) {
            this.InfoResult();
        }
    };
    QuenmatkhauComponent.prototype.InfoResult = function () {
        for (var i = 0; i < this.InfoUser.length; i++) {
            if (this.InfoUser[i].username == this.Info.user)
                this.Info.password = this.InfoUser[i].password;
        }
        alert("Mật Khẩu Tài Khoản Này Là: " + this.Info.password);
    };
    QuenmatkhauComponent.ctorParameters = function () { return [
        { type: _server_list_user_service__WEBPACK_IMPORTED_MODULE_2__["ListUserService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    QuenmatkhauComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quenmatkhau',
            template: __webpack_require__(/*! raw-loader!./quenmatkhau.component.html */ "./node_modules/raw-loader/index.js!./src/app/quenmatkhau/quenmatkhau.component.html"),
            styles: [__webpack_require__(/*! ./quenmatkhau.component.css */ "./src/app/quenmatkhau/quenmatkhau.component.css")]
        })
    ], QuenmatkhauComponent);
    return QuenmatkhauComponent;
}());



/***/ }),

/***/ "./src/app/server/list-user.service.ts":
/*!*********************************************!*\
  !*** ./src/app/server/list-user.service.ts ***!
  \*********************************************/
/*! exports provided: ListUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserService", function() { return ListUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ListUserService = /** @class */ (function () {
    function ListUserService(http) {
        this.http = http;
        this.studentURL = "https://cuong-dev1-api.herokuapp.com/studentsTwo";
    }
    ListUserService.prototype.getStudents = function () {
        return this.http.get(this.studentURL);
    };
    ListUserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ListUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ListUserService);
    return ListUserService;
}());



/***/ }),

/***/ "./src/app/server/server.service.ts":
/*!******************************************!*\
  !*** ./src/app/server/server.service.ts ***!
  \******************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServerService = /** @class */ (function () {
    function ServerService(http) {
        this.http = http;
        this.url = 'assets/db/Subjects.json';
    }
    ServerService.prototype.getSub = function () {
        return this.http.get(this.url);
    };
    ServerService.prototype.getQuizs = function (Id) {
        return this.http.get("../assets/db/Quizs/" + Id + ".json");
    };
    ServerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/app/thongtin/thongtin.component.css":
/*!*************************************************!*\
  !*** ./src/app/thongtin/thongtin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar ul li:hover{\r\n    background-color: rgb(235, 223, 223);\r\n    border-radius: 6px 6px;\r\n }\r\n\r\n\r\n.form{\r\n    padding-left: 200px;\r\n    \r\n}\r\n\r\n\r\ninput{\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid #00BCD4;\r\n}\r\n\r\n\r\n/* ----DropDown Tai Khoan------- */\r\n\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: block;\r\n  }\r\n\r\n\r\n.dropdown-content {\r\n    position: absolute;\r\n    background-color: #e9ecefc7;\r\n    border-radius: 5px 5px;\r\n    width: 130px;\r\n    z-index: 1;\r\n  \r\n  }\r\n\r\n\r\n.dropdown-content p {\r\n    border-radius: 5px 5px;\r\n    height: 30px;\r\n    margin-bottom: 0px;\r\n    margin-top: 3px;\r\n    color:#47688c;\r\n    text-shadow: 2px 1px 1px #e9ecef;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n\r\n.dropdown-content {\r\n    display: none;\r\n  }\r\n\r\n\r\n.dropdown-content p:hover{\r\n      background-color: rgb(91, 230, 121);\r\n      border-radius: 7px 7px;\r\n  }\r\n\r\n\r\n#dangnhap {\r\n    padding: 7px;\r\n    width: 50%;\r\n    margin-top: 15px;\r\n    margin-left: 250px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    bottom: 10px;\r\n    background: linear-gradient(to right, #fc00ff, #00dbde);\r\n}\r\n\r\n\r\n#dangnhap:hover{\r\n    background: linear-gradient(to right, #fc466b, #3f5efb); \r\n}\r\n\r\n\r\n.nav-link {\r\n                                                            color: black;\r\n                                                        }\r\n\r\n\r\n.navbar ul li a{\r\n                                                            color: black;\r\n                                                            margin-left: 5px;\r\n                                                            text-align: center;\r\n                                                            margin-right: 5px;\r\n                                                        }\r\n\r\n\r\n.navbar ul li:hover{\r\n                                                            background-color: rgb(235, 223, 223);\r\n                                                        }\r\n\r\n\r\n.navbar{\r\n                                                            background-color: rgb(151, 157, 163)\r\n                                                        }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90aG9uZ3Rpbi90aG9uZ3Rpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHNCQUFzQjtDQUN6Qjs7O0FBR0Q7SUFDSSxtQkFBbUI7O0FBRXZCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOzs7QUFHQSxrQ0FBa0M7OztBQUNsQztJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVOztFQUVaOzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0NBQWdDO0VBQ2xDOzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7OztBQUVBO0lBQ0UsYUFBYTtFQUNmOzs7QUFFQTtNQUNJLG1DQUFtQztNQUNuQyxzQkFBc0I7RUFDMUI7OztBQU9GO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVEQUF1RDtBQUMzRDs7O0FBQ0E7SUFDSSx1REFBdUQ7QUFDM0Q7OztBQWV3RDs0REFDSSxZQUFZO3dEQUNoQjs7O0FBRUE7NERBQ0ksWUFBWTs0REFDWixnQkFBZ0I7NERBQ2hCLGtCQUFrQjs0REFDbEIsaUJBQWlCO3dEQUNyQjs7O0FBRUE7NERBQ0ksb0NBQW9DO3dEQUN4Qzs7O0FBRUE7NERBQ0k7d0RBQ0oiLCJmaWxlIjoiYXBwL3Rob25ndGluL3Rob25ndGluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHVsIGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjIzLCAyMjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweDtcclxuIH1cclxuXHJcblxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XHJcbiAgICBcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBCQ0Q0O1xyXG59XHJcblxyXG5cclxuLyogLS0tLURyb3BEb3duIFRhaSBLaG9hbi0tLS0tLS0gKi9cclxuLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmYzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgY29sb3I6IzQ3Njg4YztcclxuICAgIHRleHQtc2hhZG93OiAycHggMXB4IDFweCAjZTllY2VmO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCBwOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIzMCwgMTIxKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4IDdweDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNkYW5nbmhhcCB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzAwZmYsICMwMGRiZGUpO1xyXG59XHJcbiNkYW5nbmhhcDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZjNDY2YiwgIzNmNWVmYik7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXIgdWwgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIyMywgMjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1NywgMTYzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/thongtin/thongtin.component.ts":
/*!************************************************!*\
  !*** ./src/app/thongtin/thongtin.component.ts ***!
  \************************************************/
/*! exports provided: ThongtinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongtinComponent", function() { return ThongtinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server_list_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/list-user.service */ "./src/app/server/list-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ThongtinComponent = /** @class */ (function () {
    function ThongtinComponent(http, ListUser, route) {
        this.http = http;
        this.ListUser = ListUser;
        this.route = route;
        this.Info = {
            username: null,
            email: null
        };
        this.isShow = false;
        this.disable = true;
    }
    ThongtinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ListUser.getStudents().subscribe(function (data) {
            _this.ListInfo = data;
        });
    };
    ThongtinComponent.prototype.click = function () {
        var _this = this;
        var flag = false;
        this.ListInfo.forEach(function (element) {
            if (element.username == _this.Info.username && element.email == _this.Info.email)
                flag = true;
        });
        if (flag == false) {
            alert("Thông Tin Chưa Chính Xác");
        }
        if (flag == true) {
            this.isShow = !this.isShow;
            for (var i = 0; i < this.ListInfo.length; i++)
                if (this.Info.username == this.ListInfo[i].username && this.Info.email == this.ListInfo[i].email) {
                    this.ListResult = this.ListInfo[i];
                }
        }
    };
    ThongtinComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _server_list_user_service__WEBPACK_IMPORTED_MODULE_3__["ListUserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ThongtinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thongtin',
            template: __webpack_require__(/*! raw-loader!./thongtin.component.html */ "./node_modules/raw-loader/index.js!./src/app/thongtin/thongtin.component.html"),
            styles: [__webpack_require__(/*! ./thongtin.component.css */ "./src/app/thongtin/thongtin.component.css")]
        })
    ], ThongtinComponent);
    return ThongtinComponent;
}());



/***/ }),

/***/ "./src/app/trangchu/trangchu.component.css":
/*!*************************************************!*\
  !*** ./src/app/trangchu/trangchu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n  width: 75%;\r\n\r\n}\r\n\r\n.gioithieu {\r\n  width: 25%;\r\n}\r\n\r\n#marquee {\r\n  background-color: rgb(92, 136, 218);\r\n  border-radius: 6px 6px;\r\n}\r\n\r\n/* ----DropDown Tai Khoan------- */\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content {\r\n  position: absolute;\r\n  background-color: #e9ecefc7;\r\n  border-radius: 5px 5px;\r\n  width: 130px;\r\n  z-index: 1;\r\n\r\n}\r\n\r\n.dropdown-content p {\r\n  border-radius: 5px 5px;\r\n  height: 30px;\r\n  margin-bottom: 0px;\r\n  margin-top: 3px;\r\n  color:#47688c;\r\n  text-shadow: 2px 1px 1px #e9ecef;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n}\r\n\r\n.dropdown-content p:hover{\r\n  background-color: rgb(91, 230, 121);\r\n  border-radius: 7px 7px;\r\n}\r\n\r\n/* -----Phần Chung Header------ */\r\n\r\n.nav-link {\r\n  color: black;\r\n}\r\n\r\n.navbar ul li a {\r\n  color: black;\r\n  margin-left: 5px;\r\n  text-align: center;\r\n  margin-right: 5px;\r\n\r\n}\r\n\r\n.navbar ul li:hover {\r\n  background-color: rgb(235, 223, 223);\r\n  border-radius: 6px 6px;\r\n}\r\n\r\n.navbar {\r\n  background-color: rgb(151, 157, 163)\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90cmFuZ2NodS90cmFuZ2NodS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxzQkFBc0I7QUFDeEI7O0FBRUEsa0NBQWtDOztBQUNsQztFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHNCQUFzQjtBQUN4Qjs7QUFJQSxpQ0FBaUM7O0FBQ2pDO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImFwcC90cmFuZ2NodS90cmFuZ2NodS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIHdpZHRoOiA3NSU7XHJcblxyXG59XHJcblxyXG4uZ2lvaXRoaWV1IHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4jbWFycXVlZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxMzYsIDIxOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweDtcclxufVxyXG5cclxuLyogLS0tLURyb3BEb3duIFRhaSBLaG9hbi0tLS0tLS0gKi9cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZmM3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBwIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIGNvbG9yOiM0NzY4OGM7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAxcHggMXB4ICNlOWVjZWY7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRyb3Bkb3duLWNvbnRlbnQgcDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIzMCwgMTIxKTtcclxuICBib3JkZXItcmFkaXVzOiA3cHggN3B4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tUGjhuqduIENodW5nIEhlYWRlci0tLS0tLSAqL1xyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5hdmJhciB1bCBsaSBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG59XHJcblxyXG4ubmF2YmFyIHVsIGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMjMsIDIyMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTU3LCAxNjMpXHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/server.service */ "./src/app/server/server.service.ts");




var TrangchuComponent = /** @class */ (function () {
    function TrangchuComponent(http, List) {
        this.http = http;
        this.List = List;
        this.curentpage = 1;
        this.itemsperpage = 6;
    }
    TrangchuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.List.getSub().subscribe(function (data) { return _this.Subjects = data; });
    };
    TrangchuComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _server_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] }
    ]; };
    TrangchuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trangchu',
            template: __webpack_require__(/*! raw-loader!./trangchu.component.html */ "./node_modules/raw-loader/index.js!./src/app/trangchu/trangchu.component.html"),
            styles: [__webpack_require__(/*! ./trangchu.component.css */ "./src/app/trangchu/trangchu.component.css")]
        })
    ], TrangchuComponent);
    return TrangchuComponent;
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

module.exports = __webpack_require__(/*! D:\LTgiaodienWeb\assigment\assigment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
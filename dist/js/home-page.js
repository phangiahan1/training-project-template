/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/components/_forms.ts":
/*!******************************************!*\
  !*** ./src/scripts/components/_forms.ts ***!
  \******************************************/
/*! exports provided: showCreateForm, closeCreateForm, showUploadForm, closeUploadForm, uploadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCreateForm", function() { return showCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeCreateForm", function() { return closeCreateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUploadForm", function() { return showUploadForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeUploadForm", function() { return closeUploadForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
//create form
function showCreateForm() {
  const createBtn = document.getElementById("createFormBtn");

  if (createBtn) {
    createBtn.addEventListener("click", function () {
      document.getElementById('formCreateFolder').style.display = 'block';
      document.getElementById('createFormButton').disabled = true;
    }, true);
  }
}
function closeCreateForm() {
  const createBtnClose = document.getElementById("closeCreateFormBtn");

  if (createBtnClose) {
    createBtnClose.addEventListener("click", function () {
      document.getElementById('formCreateFolder').style.display = 'none';
    }, true);
  }
} //upload form

function showUploadForm() {
  const uploadBtn = document.getElementById("uploadFormBtn");

  if (uploadBtn) {
    uploadBtn.addEventListener("click", function () {
      document.getElementById('formUploadFolder').style.display = 'block';
      document.getElementById('uploadFormButton').disabled = true;
    }, true);
  }
}
function closeUploadForm() {
  const uploadBtn = document.getElementById("closeUploadFormBtn");

  if (uploadBtn) {
    uploadBtn.addEventListener("click", function () {
      document.getElementById('formUploadFolder').style.display = 'none';
    }, true);
  }
}
function uploadFile() {
  const uploadBtn = document.getElementById("uploadFormButton");

  if (uploadBtn) {
    uploadBtn.addEventListener("click", function () {
      let uploadFileName = document.getElementById('uploadFormInput').files;

      if (uploadFileName) {
        console.log(uploadFileName);
      }
    }, true);
  }
}

/***/ }),

/***/ "./src/scripts/components/_grid.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_grid.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const renderGrid = () => {// TODO: implement code to Render grid
};

/* harmony default export */ __webpack_exports__["default"] = (renderGrid);

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_grid */ "./src/scripts/components/_grid.ts");
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_forms */ "./src/scripts/components/_forms.ts");




Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])(); //upload form

  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["closeCreateForm"])();
  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["showCreateForm"])(); //upload form

  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["closeUploadForm"])();
  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["showUploadForm"])();
  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["uploadFile"])();
});

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ready = fn => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map
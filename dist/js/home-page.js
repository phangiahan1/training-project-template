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
/* harmony import */ var _models_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/file */ "./src/scripts/models/file.ts");
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

function getExtension(fileName) {
  const [file, extesion] = fileName.split(".");
  return extesion;
}

function uploadFile(a) {
  const uploadBtn = document.getElementById("uploadFormButton");
  let dateTime = new Date();

  if (uploadBtn) {
    uploadBtn.addEventListener("click", function () {
      let uploadFileName = document.getElementById('uploadFormInput').files;

      if (uploadFileName) {
        console.log(uploadFileName);

        for (let index = 0; index < uploadFileName.length; index++) {
          const element = uploadFileName[index];
          const newFile = new _models_file__WEBPACK_IMPORTED_MODULE_0__["File"](0, element.name, getExtension(element.name), dateTime, "Admin", dateTime, "Admin");
          a.upload(newFile);
          document.getElementById('formUploadFolder').style.display = 'none';
        }
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

/***/ "./src/scripts/models/FileAndFolderList.ts":
/*!*************************************************!*\
  !*** ./src/scripts/models/FileAndFolderList.ts ***!
  \*************************************************/
/*! exports provided: FileAndFolderList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileAndFolderList", function() { return FileAndFolderList; });
var iconForFileType;

(function (iconForFileType) {
  iconForFileType["xlsx"] = "file-excel";
  iconForFileType["jpeg"] = "file-image";
  iconForFileType["folder"] = "folder";
  iconForFileType["file"] = "file";
  iconForFileType["pdf"] = "file-pdf";
  iconForFileType["doc"] = "file-word";
})(iconForFileType || (iconForFileType = {}));

;
class FileAndFolderList {
  constructor() {
    this.data = this.setData();
  }

  setData() {
    let dataInStorage = localStorage.getItem('fileListData');

    if (dataInStorage) {
      return JSON.parse(dataInStorage);
    }

    return [];
  }

  showListForTable() {
    let tbody = document.getElementById('tbodyDataFileList');
    let _tr = '';

    for (const element of this.data) {
      let icon;
      if (element.extension === 'xlsx') icon = iconForFileType.xlsx;else if (element.extension === 'doc' || element.extension === 'docx') icon = iconForFileType.doc;else if (element.extension === 'jpg' || element.extension === 'jpeg' || element.extension === 'png') icon = iconForFileType.jpeg;else if (element.extension === 'pdf') icon = iconForFileType.pdf;else if (element.extension === '') icon = iconForFileType.folder;else icon = iconForFileType.file;
      _tr += `
            <tr>
                <td data-label="File Type"><i class="fa-solid fa-${icon}"></i></td>
                <td data-label="Name" id="editFileForm"> ${element.name} <i class="fa-solid fa-ellipsis-vertical fa-2xs" style="float: right; color: gray;"></i></td>
                <td data-label="Modified" class="td-second">${element.modifiedAt}</td>
                <td data-label="Modified By" class="td-second"> ${element.modifiedBy}</td>
                <td class="hidden-style"></td>
            </tr>
                `;
    }

    tbody.innerHTML = _tr;
  }

  upload(file) {
    this.data.push(file);
    localStorage.setItem("fileListData", JSON.stringify(this.data));
    this.showListForTable();
  }

}

/***/ }),

/***/ "./src/scripts/models/file.ts":
/*!************************************!*\
  !*** ./src/scripts/models/file.ts ***!
  \************************************/
/*! exports provided: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
class File {
  constructor(id, name, extension, createAt, createBy, modifiedAt, modifiedBy) {
    this.id = id;
    this.name = name;
    this.extension = extension;
    this.createAt = createAt;
    this.createBy = createBy;
    this.modifiedAt = modifiedAt;
    this.modifiedBy = modifiedBy;
  }

  static update(newFile) {// let a = localStorage.getItem("fileUpload") ? JSON.parse(localStorage.getItem("fileUpload")) : [];
    // a
    // localStorage.setItem("fileUpload", a)
    // console.log("Save thanh cong")
  }

  create() {
    throw new Error('Method not implemented.');
  }

  read() {
    throw new Error('Method not implemented.');
  }

  update() {
    throw new Error('Method not implemented.');
  }

  delete() {
    throw new Error('Method not implemented.');
  }

}

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
/* harmony import */ var _models_FileAndFolderList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/FileAndFolderList */ "./src/scripts/models/FileAndFolderList.ts");





Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])(); //listManage

  let a = new _models_FileAndFolderList__WEBPACK_IMPORTED_MODULE_3__["FileAndFolderList"]();
  a.showListForTable(); //upload form

  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["closeCreateForm"])();
  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["showCreateForm"])(); //upload form

  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["closeUploadForm"])();
  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["showUploadForm"])();
  Object(_components_forms__WEBPACK_IMPORTED_MODULE_2__["uploadFile"])(a);
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
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ exports[\"b\"] = isReady;\n/* harmony export (immutable) */ exports[\"a\"] = smallAjax;\n/* unused harmony export bgChanger */\n/**\r\n * Run Callback if page loaded\r\n * @param callback\r\n */\nfunction isReady(callback) {\n    if (document.readyState != 'loading') {\n        callback();\n    } else {\n        document.addEventListener('DOMContentLoaded', callback);\n    }\n}\n\n/**\r\n * Perform GET ajax request to url\r\n * @param url\r\n * @returns {Promise}\r\n */\nfunction smallAjax(url) {\n    return new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n        xhr.open('GET', url, true);\n        xhr.send();\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status != 200) {\n                    console.log(xhr.responseText);\n                } else {\n                    resolve(JSON.parse(xhr.responseText));\n                }\n            }\n        };\n    });\n}\n\n/**\r\n * Returns string with background name\r\n * @param usdSell\r\n * @returns {string}\r\n */\nfunction bgChanger(usdSell) {\n    if (usdSell < 300) {\n        return 'bad';\n    } else if (usdSell >= 500) {\n        return 'big';\n    } else {\n        return 'norm';\n    }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/smallLib.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/smallLib.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/style.scss\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smallLib__ = __webpack_require__(0);\n\n\n\nfunction loadRates(url, inputSellary, usdContainer, rate) {\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__smallLib__[\"a\" /* smallAjax */])(url).then(function (response) {\n        var rouble = response.rates.RUB;\n        var sellaryValue = +inputSellary.value;\n        var usdSell = sellaryValue / rouble;\n\n        localStorage.setItem('storedRate', rouble);\n        localStorage.setItem('sellary', sellaryValue);\n        usdContainer.innerHTML = '$' + usdSell.toFixed();\n        rate.innerHTML = '1 USD = ' + rouble.toFixed(2) + ' RUB';\n    }, function (reject) {\n        var rub = +localStorage.getItem('storedRate') || 62;\n    });\n}\n\n__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__smallLib__[\"b\" /* isReady */])(function () {\n    var inputSellary = document.getElementById('input-amount');\n    var button = document.getElementById('calculate');\n    var url = 'https://openexchangerates.org/api/latest.json?app_id=f6a6b00781654a1bb1c07706f3019366';\n    var usdContainer = document.getElementById('usd-amount');\n    var rate = document.getElementById('rate');\n\n    inputSellary.value = localStorage.getItem('sellary') || 20000;\n    button.addEventListener('click', function () {\n        this.classList.add('disabled');\n        loadRates(url, inputSellary, usdContainer, rate);\n    });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }
/******/ ]);
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typescript/index.ts":
/*!*********************************!*\
  !*** ./src/typescript/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst validations_namespace_1 = __webpack_require__(/*! ./validations.namespace */ \"./src/typescript/validations.namespace.ts\");\nvalidations_namespace_1.Validations.PersonalInfo.validate(\"person-info-next\", \"person-name\", \"person-email\", \"phone-number\");\n\n\n//# sourceURL=webpack://multi-step-form/./src/typescript/index.ts?");

/***/ }),

/***/ "./src/typescript/validations.namespace.ts":
/*!*************************************************!*\
  !*** ./src/typescript/validations.namespace.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Validations = void 0;\nvar Validations;\n(function (Validations) {\n    class PersonalInfo {\n        static onFocusAndBlurValidator(element) {\n            const el = document.getElementById(element);\n            el === null || el === void 0 ? void 0 : el.addEventListener(\"focus\", () => {\n                var _a, _b;\n                if (Number(el === null || el === void 0 ? void 0 : el.value) === 0 || (el === null || el === void 0 ? void 0 : el.value) === \"\") {\n                    el === null || el === void 0 ? void 0 : el.classList.add(\"error\");\n                    (_b = (_a = el.previousElementSibling) === null || _a === void 0 ? void 0 : _a.querySelector(\".validation\")) === null || _b === void 0 ? void 0 : _b.classList.remove(\"show\");\n                }\n                else {\n                    el === null || el === void 0 ? void 0 : el.classList.remove(\"error\");\n                }\n            });\n            el === null || el === void 0 ? void 0 : el.addEventListener(\"blur\", () => {\n                var _a, _b, _c, _d;\n                if (Number(el === null || el === void 0 ? void 0 : el.value) === 0 || (el === null || el === void 0 ? void 0 : el.value) === \"\") {\n                    el === null || el === void 0 ? void 0 : el.classList.add(\"error\");\n                    (_b = (_a = el.previousElementSibling) === null || _a === void 0 ? void 0 : _a.querySelector(\".validation\")) === null || _b === void 0 ? void 0 : _b.classList.add(\"show\");\n                }\n                else {\n                    el === null || el === void 0 ? void 0 : el.classList.remove(\"error\");\n                    (_d = (_c = el.previousElementSibling) === null || _c === void 0 ? void 0 : _c.querySelector(\".validation\")) === null || _d === void 0 ? void 0 : _d.classList.remove(\"show\");\n                }\n            });\n        }\n        static validateName(nameInputID) {\n            this.onFocusAndBlurValidator(nameInputID);\n        }\n        static validateEmail(emailInputID) {\n            this.onFocusAndBlurValidator(emailInputID);\n        }\n        static validatePhone(phoneInputID) {\n            this.onFocusAndBlurValidator(phoneInputID);\n        }\n        static validate(inputNextID, nameInputID, emailInputID, phoneInputID) {\n            var _a;\n            this.validateName(nameInputID);\n            this.validateEmail(emailInputID);\n            this.validatePhone(phoneInputID);\n            (_a = document.getElementById(inputNextID)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", (e) => {\n                e.preventDefault();\n            });\n        }\n    }\n    Validations.PersonalInfo = PersonalInfo;\n})(Validations || (exports.Validations = Validations = {}));\n\n\n//# sourceURL=webpack://multi-step-form/./src/typescript/validations.namespace.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/typescript/index.ts");
/******/ 	
/******/ })()
;
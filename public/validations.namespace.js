"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validations = void 0;
var Validations;
(function (Validations) {
    class PersonalInfo {
        static onFocusAndBlurValidator(element) {
            const el = document.getElementById(element);
            el === null || el === void 0 ? void 0 : el.addEventListener("focus", () => {
                var _a, _b;
                if (Number(el === null || el === void 0 ? void 0 : el.value) === 0 || (el === null || el === void 0 ? void 0 : el.value) === "") {
                    el === null || el === void 0 ? void 0 : el.classList.add("error");
                    (_b = (_a = el.previousElementSibling) === null || _a === void 0 ? void 0 : _a.querySelector(".validation")) === null || _b === void 0 ? void 0 : _b.classList.remove("show");
                }
                else {
                    el === null || el === void 0 ? void 0 : el.classList.remove("error");
                }
            });
            el === null || el === void 0 ? void 0 : el.addEventListener("blur", () => {
                var _a, _b, _c, _d;
                if (Number(el === null || el === void 0 ? void 0 : el.value) === 0 || (el === null || el === void 0 ? void 0 : el.value) === "") {
                    el === null || el === void 0 ? void 0 : el.classList.add("error");
                    (_b = (_a = el.previousElementSibling) === null || _a === void 0 ? void 0 : _a.querySelector(".validation")) === null || _b === void 0 ? void 0 : _b.classList.add("show");
                }
                else {
                    el === null || el === void 0 ? void 0 : el.classList.remove("error");
                    (_d = (_c = el.previousElementSibling) === null || _c === void 0 ? void 0 : _c.querySelector(".validation")) === null || _d === void 0 ? void 0 : _d.classList.remove("show");
                }
            });
        }
        static validateName(nameInputID) {
            this.onFocusAndBlurValidator(nameInputID);
        }
        static validateEmail(emailInputID) {
            this.onFocusAndBlurValidator(emailInputID);
        }
        static validatePhone(phoneInputID) {
            this.onFocusAndBlurValidator(phoneInputID);
        }
        static validate(inputNextID, nameInputID, emailInputID, phoneInputID) {
            var _a;
            this.validateName(nameInputID);
            this.validateEmail(emailInputID);
            this.validatePhone(phoneInputID);
            (_a = document.getElementById(inputNextID)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
                e.preventDefault();
            });
        }
    }
    Validations.PersonalInfo = PersonalInfo;
})(Validations || (exports.Validations = Validations = {}));

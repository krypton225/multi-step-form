export namespace Validations {
    export class PersonalInfo {
        private static onFocusAndBlurValidator(element: string): void {
            const el = document.getElementById(element) as HTMLInputElement | null;

            el?.addEventListener("focus", () => {
                if (Number(el?.value) === 0 || el?.value === "") {
                    el?.classList.add("error");
                    el.previousElementSibling?.querySelector(".validation")?.classList.remove("show");
                } else {
                    el?.classList.remove("error");
                }
            });

            el?.addEventListener("blur", () => {
                if (Number(el?.value) === 0 || el?.value === "") {
                    el?.classList.add("error");
                    el.previousElementSibling?.querySelector(".validation")?.classList.add("show");
                } else {
                    el?.classList.remove("error");
                    el.previousElementSibling?.querySelector(".validation")?.classList.remove("show");
                }
            });
        }

        private static validateName(nameInputID: string): void {
            this.onFocusAndBlurValidator(nameInputID);
        }

        private static validateEmail(emailInputID: string): void {
            this.onFocusAndBlurValidator(emailInputID);
        }

        private static validatePhone(phoneInputID: string): void {
            this.onFocusAndBlurValidator(phoneInputID);
        }

        public static validate(inputNextID: string, nameInputID: string, emailInputID: string, phoneInputID: string): void {
            this.validateName(nameInputID);
            this.validateEmail(emailInputID);
            this.validatePhone(phoneInputID);

            document.getElementById(inputNextID)?.addEventListener("click", (e) => {
                e.preventDefault();
            });
        }
    }
}

import elements from "./elements.js"

export default {
    functionalities() {
        elements.get.call(this)
        elements.clickEvents.call(this)
    },
    createRandomPassword() {
        const allChar = this.upperCase + this.lowerCase + this.numbers + this.symbols
        let password = ""

        password += this.upperCase[Math.floor(Math.random() * this.upperCase.length)]
        password += this.lowerCase[Math.floor(Math.random() * this.lowerCase.length)]
        password += this.numbers[Math.floor(Math.random() * this.numbers.length)]
        password += this.symbols[Math.floor(Math.random() * this.symbols.length)]

        while (this.length > password.length) {
            password += allChar[Math.floor(Math.random() * allChar.length)]
        }

        this.input.value = password
    },
    toggleClass(currentIcon, currentClass, newClass) {
        if (currentIcon) {
            if (this.isToggled === false) {
                currentIcon.classList.remove(currentClass);
                currentIcon.classList.add(newClass);
                this.isToggled = true;
                setTimeout(() => {
                    currentIcon.classList.remove(newClass);
                    currentIcon.classList.add(currentClass);
                    this.isToggled = false;
                }, 1000);
            }
        } else {
            console.error(`Elemento com o ID ${currentIcon} não encontrado.`);
        }
    },
    toggleIcon(currentIcon, currentClassIcon, newClassIcon) {
        if (currentIcon) {
            currentIcon.classList.toggle(currentClassIcon)
            currentIcon.classList.toggle(newClassIcon)
        } else {
            console.error(`Elemento com o ID ${currentIcon} não encontrado.`)
        }
    },
    showPassword() {
        this.input.type === "password" ? this.input.type = 'text' : this.input.type = "password"
        visibilityState.textContent === "Show" ? visibilityState.textContent = "Hide" : visibilityState.textContent = "Show"
    },
    async copyPassword() {
        const text = this.input.value

        try {
            await navigator.clipboard.writeText(text)
        } catch (err) {
            console.error("Erro ao copiar a senha:", err);
        }
    }
}
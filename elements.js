export default {
    get() {
        this.copy = document.querySelector(".fa-copy")
        this.showPass = document.querySelector("#showPass")
        this.icon = document.querySelector('#eyeIcon')
        this.penSquare = document.querySelector("#penSquare")
        this.generateBtn = document.querySelector("#generateBtn")
        this.length = 12
        this.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.lowerCase = "abcdefghijklmnopqrstuvwxyz"
        this.numbers = "0123456789"
        this.symbols = "!@#$%^&*()-_{}[]?/=.`~><"
        this.visibilityState = document.querySelector("#visibilityState")
        this.isToggled = false
        this.input = document.querySelector("#password")
    },
    clickEvents() {
        this.copy.onclick = () => {
            this.toggleClass(this.copy, 'fa-copy', 'fa-check')
            this.copyPassword()
        }

        this.showPass.onclick = () => {
            this.showPassword()
            this.toggleIcon(this.icon, 'fa-eye', 'fa-eye-slash')
        }

        this.generateBtn.onclick = () => {
            this.createRandomPassword()
            this.toggleClass(this.penSquare, 'fa-pen-to-square', 'fa-check')
        }
    }
}
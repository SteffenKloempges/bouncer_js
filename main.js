let age = document.getElementById("inputAge")
let result = document.getElementById("result")

function checkAge() {
    if (age.value >= 18) {
        result.innerHTML = "come in"
    } else {
        result.innerHTML = "sorry bro"
    }
}
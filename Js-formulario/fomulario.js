const form = document.querySelector("#form")
const nome = document.querySelector("#nome")
const cpf = document.querySelector("#cpf")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const data = document.querySelector("#data")
const checkbox = document.querySelector("#checkbox")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nome.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }
    if(cpf.value ==="") {
        alert("Por favor, preencha o seu CPF");
        return
    }
    if(email.value ==="" || !isEmailValid(email.value)) {
        alert("Por favor, preencha o seu E-mail");
        return
    }
    if(!validatePassword(senha.value, 8)) {
        alert("A senha precisa ser no mínimo 8 dígitos. ");
        return;

    }
    if(data.value ==="") {
        alert("Por favor, preencha a sua data");
        return
    }
    if(checkbox.value ==="") {
        alert("Por favor, preencha os termos");
        return
    }
    form.submit();

})

function isEmailValid(email) {

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)) {
        return true
    }

    return false
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // senha válida
        return true
    }
    //senha invalida
    return false
}

const form = document.querySelector(".hero-form");
const ctaForm = document.querySelector(".cta-form");
const emailInput = document.querySelector(".hero-input");
const ctaEmailInput = document.querySelector(".cta-form__input")
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const errorMessage = document.querySelector(".header-mail-validation");
const errorMessageCta = document.querySelector(".cta-mail-validation");







function validateHeader() {
    if (emailInput.value.match(regex)) {
        errorMessage.innerText = "";
        emailInput.style.border = "1px solid black";
    }

    else {
        emailInput.style.border = "1px solid red"
        emailInput.style.borderRadius = "3px"
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please check your e-mail";
    }
}

function validateCta() {
    if (ctaEmailInput.value.match(regex)) {
        errorMessageCta.innerText = "";
        ctaEmailInput.style.border = "1px solid black";
    }

    else {
        ctaEmailInput.style.border = "1px solid red"
        ctaEmailInput.style.borderRadius = "3px"
        errorMessageCta.style.display = "block";
        errorMessageCta.innerText = "Please check your e-mail";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateHeader();
})

ctaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateCta();
})



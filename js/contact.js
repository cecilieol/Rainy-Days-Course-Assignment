/* FORM VALIDATION */

const form = document.querySelector(".form");
const submittedForm = document.querySelector(".submitted-form");
const fullName = document.querySelector("#fullname");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#message");
const addressError = document.querySelector("#message-error");
const button = document.querySelector("button");


function validateForm(event) {
    event.preventDefault();

    if(fullName.value.trim().length >= 5) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(message.value.trim().length >= 30) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function submitForm(event) {
    if((fullName.value.trim().length >= 5) && (validateEmail(email.value)) && (message.value.trim().length >= 30)) {
        submittedForm.innerHTML = `<p>Your form has been submitted!</p>`;
    } else {
        submittedForm.innerHTML = "";
    }
}

form.addEventListener("submit", submitForm);

function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(email);    
    
    return validEmail;
}
const emailInput = document.querySelector('.text-newsletter');
const newsletterButton = document.querySelector('.btn-newsletter');
const emailError = document.querySelector('.email-error');

function emailValidation() {

    if(validateEmail(emailInput.value)) {
        newsletterButton.innerHTML = "Signed up!";
        emailError.innerHTML = "";
    } else {
        emailError.innerHTML = "<p>Please enter a valid e-mail address</p>";
    }

}

newsletterButton.addEventListener("click", emailValidation);


function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(email);    
    
    return validEmail;
}
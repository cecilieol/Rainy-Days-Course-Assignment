const emailInput = document.querySelector('.text-newsletter');
const newsletterButton = document.querySelector('.btn-newsletter');

function emailValidation() {

    if(validateEmail(emailInput.value)) {
        newsletterButton.innerHTML = "Signed up!";
    } else {
        return false;
    }

}

newsletterButton.addEventListener("click", emailValidation);


function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(email);    
    
    return validEmail;
}
/* Checkout validation */
const promoCode = document.querySelector('.promo-code');
const promoButton = document.querySelector('.btn-promo');
const promoError = document.querySelector('.promo-error');

const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const address = document.querySelector('#address')
const zip = document.querySelector('#zip');
const county = document.querySelector('#county');
const email = document.querySelector('#email');
const phone = document.querySelector('#tlf');
const infoError = document.querySelector('.info-error');
const emailError = document.querySelector('.email.error');

const deliveryOption = document.getElementsByName('delivery');
const deliveryError = document.querySelector('.delivery-error');
const paymentOption = document.getElementsByName('payment');
const paymentError = document.querySelector('.payment-error');

const terms = document.getElementsByName('terms');
const termsError = document.querySelector('.terms-error');

const completePurchase = document.querySelector(".btn-purchase");


function addCode(event) {
    event.preventDefault();

    if(promoCode.value === "RainyDays10") {
        promoButton.innerHTML = "Added!";
        promoError.innerHTML = "";
    } else {
        promoError.innerHTML = "<p>Invalid code</p>"
    }
}

promoButton.addEventListener("click", addCode);


function validateInfo(event) {
    event.preventDefault();

    if(firstname.value.trim().length > 0) {
        infoError.innerHTML = "";
    } else {
        infoError.innerHTML = "<p>Please do not leave any inputs empty</p>";
    }

    if(lastname.value.trim().length > 0) {
        infoError.innerHTML = "";
    } else {
        infoError.innerHTML = "<p>Please do not leave any inputs empty</p>";
    }

    if(address.value.trim().length > 0) {
        infoError.innerHTML = "";
    } else {
        infoError.innerHTML = "<p>Please do not leave any inputs empty</p>";
    }

    if(zip.value.trim().length > 0) {
        infoError.innerHTML = "";
    } else {
        infoError.innerHTML = "<p>Please do not leave any inputs empty</p>";
    }

    if(county.value.trim().length > 0) {
        infoError.innerHTML = "";
    } else {
        infoError.innerHTML = "<p>Please do not leave any inputs empty</p>";
    }

    if(email.value.trim().length > 0) {
        infoError.innerHTML = "";
    } else {
        infoError.innerHTML = "<p>Please do not leave any inputs empty</p>";
    }

    if(phone.value.trim().length > 0) {
        infoError.innerHTML = "";
    } else {
        infoError.innerHTML = "<p>Please do not leave any inputs empty</p>";
    }
}

completePurchase.addEventListener("click", validateInfo);


function validateCheckout() {

    if((deliveryOption[0].checked || deliveryOption[1].checked || deliveryOption[2].checked)) {
        deliveryError.innerHTML = "";
    } else {
        deliveryError.innerHTML = "<p>Please select a delivery method</p>"
    }

    if((paymentOption[0].checked || paymentOption[1].checked || paymentOption[2].checked || paymentOption[3].checked)) {
        paymentError.innerHTML = "";
    } else {
        paymentError.innerHTML = "<p>Please select a payment method</p>";
    }

    if(terms[0].checked) {
        termsError.innerHTML = "";
    } else {
        termsError.innerHTML = "<p>Please accept the terms and agreement</p>";
    }

    if ((deliveryOption[0].checked || deliveryOption[1].checked || deliveryOption[2].checked) && (paymentOption[0].checked || paymentOption[1].checked || paymentOption[2].checked || paymentOption[3].checked) && (terms[0].checked)) {
        window.location.href = "https://rainydays-courseassignment-cecilieolsen.netlify.com/checkoutsuccess.html";
    } else {
        return false;
    }

    
}

completePurchase.addEventListener("click", validateCheckout);

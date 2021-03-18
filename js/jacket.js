/* ADD TO CART */

const colorOption = document.getElementsByName('color');
const sizeOption = document.getElementsByName('size');

const colorError = document.querySelector(".color-error");
const sizeError = document.querySelector(".size-error");
const addButton = document.querySelector(".btn-cart");
const added = document.querySelector(".added");


function buttonsChecked(event) {
    event.preventDefault();

    if ((colorOption[0].checked || colorOption[1].checked || colorOption[2].checked || colorOption[3].checked || colorOption[4].checked || colorOption[5].checked)) {
        colorError.innerHTML = "";
    } else {
        colorError.innerHTML = "<p>Please select a color</p>";
    }

    if ((sizeOption[0].checked || sizeOption[1].checked || sizeOption[2].checked || sizeOption[3].checked || sizeOption[4].checked || sizeOption[5].checked)) {
        sizeError.innerHTML = "";
    } else {
        sizeError.innerHTML = "<p>Please select a size</p>";
    }

    if ((colorOption[0].checked || colorOption[1].checked || colorOption[2].checked || colorOption[3].checked || colorOption[4].checked || colorOption[5].checked) && (sizeOption[0].checked || sizeOption[1].checked || sizeOption[2].checked || sizeOption[3].checked || sizeOption[4].checked || sizeOption[5].checked)) {
        added.innerHTML = "<p>Successfully added to cart!</p>";
    } else {
        added.innerHTML = "";
    }

}

addButton.addEventListener("click", buttonsChecked);

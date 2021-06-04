/* API CALL */


const titleContainer = document.querySelector("title");
const breadcrumbContainer = document.querySelector(".breadcrumb");
const loadingContainer = document.querySelector(".loading");
const imageContainer = document.querySelector(".jacket-view");
const infoContainer = document.querySelector(".jacket-info");
const optionsContainer = document.querySelector(".jacket-options");
const aboutSection = document.querySelector(".about-section");
const aboutContainer = document.querySelector(".about-jacket");
const customerContainer = document.querySelector(".customer-section");
const previousPage = document.querySelector(".previous-page");
const currentPage = document.querySelector(".current-page");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = `https://cecilieol.no/rainy-days/wp-json/wc/store/products/${id}`;

async function fetchJacket () {
    try {
        const response = await fetch(url);
        const jacket = await response.json();

        titleContainer.innerHTML = `Rainy Days - ${jacket.name}`;
        loadingContainer.innerHTML = "";
        imageContainer.innerHTML = `<img src="${jacket.images[0].src}" alt="${jacket.name}">`
        optionsContainer.style.display = "block";
        aboutSection.style.display = "block";
        aboutContainer.innerHTML = `<h3>Specifications</h3>
                                    <p>${jacket.short_description}</p>
                                    <h3>Description</h3>
                                    <p>${jacket.description}</p>`;
                                        
        customerContainer.style.visibility = "visible";

        currentPage.innerHTML = `<p>${jacket.name}</p>`


        if (jacket.on_sale) {
            infoContainer.innerHTML = `<h1>${jacket.name}</h1>
                                    <h2>${jacket.prices.sale_price}$</h2>
                                    <h2>${jacket.prices.regular_price}$</h2>`
        } else {
            infoContainer.innerHTML = `<h1>${jacket.name}</h1>
                                    <h2>${jacket.prices.price}$</h2>`
        }

    } catch(error) {
        loadingContainer.innerHTML = "";
        if (jacketContainer.innerHTML = "") {
            jacketContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            jacketContainer.innerHTML += displayError("An error occurred fetching all information from the API");
        }
    }
}

fetchJacket();


/* ADD TO CART VALIDATION */

const colorOption = document.getElementsByName('color');
const sizeOption = document.getElementsByName('size');

const colorError = document.querySelector(".color-error");
const sizeError = document.querySelector(".size-error");
const addButton = document.querySelector(".btn-cart");


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
        addButton.innerHTML = "Added to cart!";
    } else {
        return false;
    }

}

addButton.addEventListener("click", buttonsChecked);

/* RETURN TO PREVIOUS PAGE */

previousPage.onclick = function () {
    window.history.back();
}

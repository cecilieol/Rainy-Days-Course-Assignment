/* API CALL */

const url = "https://cecilieol.no/rainy-days/wp-json/wc/store/products?_embed&per_page=20";

const jacketContainer = document.querySelector(".jacket-grid");
const moreJackets = document.querySelector("#more-jackets-btn");

async function getJackets() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);

        let jackets = result;

        jacketContainer.innerHTML = "";

        for (let i = 0; i < jackets.length; i++) {

            console.log(jackets[i].name);

            if (jackets[i].on_sale) {
                jacketContainer.innerHTML += `<div class="jacket">
                                                <a href="singlejacket.html?id=${jackets[i].id}">
                                                <img src="${jackets[i].images[0].src}" width="250px alt="${jackets[i].name}"></img>
                                                <h4>${jackets[i].name}</h4>
                                                <div class="new-price">
                                                    <h4>${jackets[i].prices.sale_price}$ </h4>
                                                    <h4>${jackets[i].prices.regular_price}$</h4>
                                                </div>
                                                </a>
                                            </div>`
            } else {
                jacketContainer.innerHTML += `<div class="jacket">
                                                <a href="singlejacket.html?id=${jackets[i].id}">
                                                <img src="${jackets[i].images[0].src}" width="250px alt="${jackets[i].name}"></img>
                                                <h4>${jackets[i].name}</h4>
                                                <h4>${jackets[i].prices.price}$</h4>
                                                </a>
                                            </div>`
            }

            moreJackets.style.display = "block";
        }

    } catch(error) {
        console.log(error);
        if (jacketContainer.innerHTML = "") {
            jacketContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            jacketContainer.innerHTML += displayError("An error occurred fetching all jackets from the API");
        }
        
    }
}

getJackets();

let defaultItems = 9;

moreJackets.addEventListener("click", (e) => {

    const singleJacket = document.querySelectorAll(".jacket");

    for (let i = defaultItems; i < defaultItems + 1; i++) {
        if (defaultItems < singleJacket.length) {
            singleJacket[i].style.display = "block";
        }
    }

    defaultItems += 1;

    if (defaultItems <= singleJacket.length) {
        moreJackets.style.display = "none";
    }
})

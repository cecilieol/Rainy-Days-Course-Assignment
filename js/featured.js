const url = "https://cecilieol.no/rainy-days/wp-json/wc/store/products/";

const jacketContainer = document.querySelector(".jacket-grid");

async function getJackets() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        let jackets = result;

        jacketContainer.innerHTML = "";

        for (let i = 0; i < jackets.length; i++) {

            if (jackets[i].on_sale) {
                jacketContainer.innerHTML += `<div class="jacket">
                                                <a href="singlejacket.html?id=${jackets[i].id}">
                                                <img src="${jackets[i].images[0].src}" width="250px" alt="${jackets[i].name}"></img>
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
                                                <img src="${jackets[i].images[0].src}" width="250px" alt="${jackets[i].name}"></img>
                                                <h4>${jackets[i].name}</h4>
                                                <h4>${jackets[i].prices.price}$</h4>
                                                </a>
                                            </div>`
            }

            if (i === 3) {
                break;
            }
        }

    } catch(error) {
        if (jacketContainer.innerHTML = "") {
            jacketContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            jacketContainer.innerHTML += displayError("An error occurred fetching all jackets from the API");
        }
        
    }
}

getJackets();
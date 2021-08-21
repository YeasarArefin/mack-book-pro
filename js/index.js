// updating price for all extra configuratiion
function updatePrice(price, id) {

    const configurationPrice = price;
    const extraConfiguration = document.getElementById(id);

    extraConfiguration.innerText = configurationPrice;

    sum();

}

// calculate total price with extra configuration 
function calculateTotalPrice() {

    const bestPriceCost = parseInt(document.getElementById('bestPrice').innerText);
    const extraMemoryCost = parseInt(document.getElementById('extraMemoryCost').innerText);
    const extraStorageCost = parseInt(document.getElementById('extraStorageCost').innerText);
    const deleveryCost = parseInt(document.getElementById('deleveryCost').innerText);

    const totalPrice = bestPriceCost + extraMemoryCost + extraStorageCost + deleveryCost;

    return totalPrice;

}

// calculate total price with promo code
function sum() {

    const promoCode = document.getElementById('promo-code');
    const promoCodeValue = promoCode.value;

    const sumOfTotal = document.getElementById('total-price');
    const sumOfTotalAll = document.getElementById('total-price-all');

    const allTotalPrice = calculateTotalPrice();

    if (promoCodeValue == 'stevekaku') {

        const discountPrice = (80 / 100) * allTotalPrice;
        const discounted = discountPrice;

        sumOfTotal.innerText = allTotalPrice;
        sumOfTotalAll.innerText = discounted;

        promoCode.value = '';

    } else if (promoCodeValue == '') {

        sumOfTotal.innerText = allTotalPrice;
        sumOfTotalAll.innerText = allTotalPrice;

    }

}

// updating total price with promo code
document.getElementById('promo-apply').addEventListener('click', function () {

    sum();

});
const quantityInputs = document.querySelectorAll('.quantity');
const removeLinks = document.querySelectorAll('.cart-info a');

function updateCart() {
    let total = 0;

    quantityInputs.forEach((input, index) => {
        const quantity = parseInt(input.value);
        const priceText = document.querySelectorAll('.price')[index].textContent;
        const price = parseFloat(priceText.match(/\d+.\d+/)[0]);
        const subtotal = quantity * price;
        document.querySelectorAll('.subtotal')[index].textContent = `₹${subtotal.toFixed(2)}`;
        total += subtotal;
    });

    const tax = total * 0.1;
    const totalIncludingTax = total + tax;
    document.querySelector('.tax').textContent = `₹${tax.toFixed(2)}`;
    document.querySelector('.total').textContent = `₹${totalIncludingTax.toFixed(2)}`;
}

quantityInputs.forEach(input => {
    input.addEventListener('input', updateCart);
});

removeLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const index = Array.from(removeLinks).indexOf(link);
        quantityInputs[index].value = 0;
        updateCart();
    });
});

updateCart();

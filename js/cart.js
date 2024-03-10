const quantityInputs = document.querySelectorAll('.quantity');
function updateCart() {
    let total = 0;
  quantityInputs.forEach(input => {
    const quantity = parseInt(input.value);
    const priceText = input.closest('tr').querySelector('.price').textContent;
    const price = parseFloat(priceText.match(/\d+\.\d+/)[0]);
    const subtotal = quantity * price;
    input.closest('tr').querySelector('.subtotal').textContent = `$${subtotal.toFixed(2)}`;
    total += subtotal;
  });
  const tax = total * 0.1;
  const totalIncludingTax = total + tax;
  document.querySelector('.tax').textContent = `$${tax.toFixed(2)}`;
  document.querySelector('.total').textContent = `$${totalIncludingTax.toFixed(2)}`;
}
quantityInputs.forEach(input => {
  input.addEventListener('input', updateCart);
});
updateCart();

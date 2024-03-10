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


const saleEndDate = new Date('March 28, 2024 23:59:59').getTime();


const timerInterval = setInterval(function() {

    const now = new Date().getTime();


    const distance = saleEndDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `Sale ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = 'Sale has ended!';
    }
}, 1000);
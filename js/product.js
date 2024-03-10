//Product Sorting
document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.getElementById('sorting-select');
  const productContainer = document.querySelector('.product-center');
  const productItems = Array.from(document.querySelectorAll('.product-item'));

  selectElement.addEventListener('change', function() {
    const selectedValue = parseInt(selectElement.value);

    switch (selectedValue) {
      case 1: // Default Sorting
        window.location.reload();
        break;
      case 2: // Sort By Price
        sortByPrice();
        break;
      case 3: // Sort By Discount
        sortByDiscount();
        break;
    }
  });

  function sortByPrice() {
    productItems.sort((a, b) => {
      const priceA = parseFloat(a.querySelector('.product-info h4').textContent.replace('₹', ''));
      const priceB = parseFloat(b.querySelector('.product-info h4').textContent.replace('₹', ''));
      return priceA - priceB;
    });

    // Reorder product items in the container
    productItems.forEach((product) => {
      productContainer.appendChild(product);
    });
  }

  function sortByDiscount() {
    productItems.sort((a, b) => {
      const discountA = parseFloat(a.querySelector('.overlay .discount').textContent.replace('%', ''));
      const discountB = parseFloat(b.querySelector('.overlay .discount').textContent.replace('%', ''));
      return discountB - discountA;
    });

    // Reorder product items in the container
    productItems.forEach((product) => {
      productContainer.appendChild(product);
    });
  }
});

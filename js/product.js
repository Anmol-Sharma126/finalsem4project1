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

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".bx-cart");

  // Retrieve cart items from local storage if they exist
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Function to update the cart and save it to local storage
  function updateCart() {
    // Save the updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  // Add event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const productItem = button.closest(".product-item");
      const productName = productItem.querySelector(".product-info a").textContent;
      const productPrice = productItem.querySelector(".product-info h4").textContent;

      // Check if the product already exists in the cart
      const existingItem = cartItems.find(item => item.name === productName);
      if (existingItem) {
        // If the product exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the product doesn't exist, add it to the cart with quantity 1
        const product = {
          name: productName,
          price: productPrice,
          quantity: 1 // Default quantity to 1 when adding to cart
        };
        cartItems.push(product);
      }

      // Update the cart and save it to local storage
      updateCart();

      event.preventDefault();
    });
  });
});
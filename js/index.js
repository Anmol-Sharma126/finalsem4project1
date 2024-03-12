//Responsive Menu
const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

//Megamenu
document.querySelector('.nav-catg').addEventListener('mouseover', function() {
  document.querySelector('.mega-menu').style.display = 'block';
});

document.querySelector('.nav-catg').addEventListener('mouseout', function() {
  document.querySelector('.mega-menu').style.display = 'none';
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
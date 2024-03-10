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

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const productItem = button.closest(".product-item");
      const productName = productItem.querySelector(".product-info a").textContent;
      const productPrice = productItem.querySelector(".product-info h4").textContent;

      const product = {
        name: productName,
        price: parseFloat(productPrice.replace("₹", "")), 
        quantity: 1 
      };

      
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

     
      const existingItemIndex = cartItems.findIndex(item => item.name === product.name);
      if (existingItemIndex !== -1) {
       
        cartItems[existingItemIndex].quantity++;
      } else {
       
        cartItems.push(product);
      }

      
      localStorage.setItem("cart", JSON.stringify(cartItems));

      
      const cartIcon = document.querySelector(".bx-cart");
      const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
      cartIcon.nextElementSibling.textContent = cartItemCount;

     //ese  hata dena agar baar baar cart page me ni jana
      // window.location.href = "cart.html";

      event.preventDefault();
    });
  });
});

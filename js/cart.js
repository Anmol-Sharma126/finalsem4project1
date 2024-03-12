document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".bx-cart");
    const cartTable = document.getElementById("cart-table");
    const totalPriceElement = document.getElementById("total-price");

    // Retrieve cart items from local storage if they exist
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to update the cart and save it to local storage
    function updateCart() {
        // Clear the cart table before updating it
        cartTable.innerHTML = "<tr><th>Product</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";

        let totalPrice = 0;

        // Iterate over each item in the cart and append it to the cart table
        cartItems.forEach(function (item, index) {
            const newRow = document.createElement("tr");
            const nameCell = document.createElement("td");
            const priceCell = document.createElement("td");
            const quantityCell = document.createElement("td"); // New cell for quantity
            const actionCell = document.createElement("td");
            const removeButton = document.createElement("button");

            nameCell.textContent = item.name;

            // Display the quantity of the item
            quantityCell.textContent = item.quantity || 1; // Default quantity to 1 if not provided

            priceCell.textContent = item.price;

            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-button");

            removeButton.addEventListener("click", function () {
                // Remove the item from the cartItems array
                cartItems.splice(index, 1);
                // Update the cart and save it to local storage
                updateCart();
            });

            actionCell.appendChild(removeButton);

            newRow.appendChild(nameCell);
            newRow.appendChild(priceCell);
            newRow.appendChild(quantityCell); // Append quantity cell to the row
            newRow.appendChild(actionCell);

            cartTable.appendChild(newRow);

            // Calculate the total price
            totalPrice += parseFloat(item.price.replace(/[^\d.-]/g, '')) * (item.quantity || 1);
        });

        // Update the total price element
        totalPriceElement.textContent = "₹" + totalPrice.toFixed(2);

        // Save the updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    // Update the cart when the page loads
    updateCart();

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

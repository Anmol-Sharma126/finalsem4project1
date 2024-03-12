document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkout-form");
    const orderTable = document.getElementById("order-table");
    const totalPrice = document.getElementById("total-price");
    const deliveryDate = document.getElementById("delivery-date"); // Element to display delivery date

    // Retrieve cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to update the order summary
    function updateOrderSummary() {
        orderTable.innerHTML = ""; // Clear previous content
        let total = 0;
        cartItems.forEach(function (item) {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const priceCell = document.createElement("td");
            const quantityCell = document.createElement("td"); // New cell for quantity

            nameCell.textContent = item.name;
            priceCell.textContent = item.price;
            quantityCell.textContent = item.quantity || 1; // Default quantity to 1 if not provided

            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(quantityCell); // Append quantity cell to the row
            orderTable.appendChild(row);

            // Calculate total price
            total += parseFloat(item.price.replace(/[^\d.-]/g, '')) * (item.quantity || 1);
        });
        totalPrice.textContent = `₹${total.toFixed(2)}`;

        // Calculate and display delivery date
        const today = new Date();
        const deliveryDays = 5; // Example: 5 days for delivery
        const deliveryDateObj = new Date(today.getTime() + deliveryDays * 24 * 60 * 60 * 1000); // Add deliveryDays to today's date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        deliveryDate.textContent = deliveryDateObj.toLocaleDateString(undefined, options);
    }

    // Update the order summary when the page loads
    updateOrderSummary();

    // Handle form submission
    checkoutForm.addEventListener("submit", function (event) {
        // Process the form submission here (e.g., validate inputs, handle payment, etc.)
        // Once the purchase is confirmed, you can clear the cart and redirect to a thank you page
        localStorage.removeItem("cart"); // Clear the cart
        alert("Thank you for your purchase!");
        // Redirect to a thank you page
        window.location.href = "thankyou.html";
        event.preventDefault();
    });
});

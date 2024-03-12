document.addEventListener("DOMContentLoaded", function() {
  // Selecting password and repeat password inputs
  var password = document.querySelector('input[name="psw"]');
  var repeatPassword = document.querySelector('input[name="psw-repeat"]');
  // Selecting the form
  var form = document.querySelector('.login-form form');
  // Selecting the login button
  var loginButton = document.querySelector('.signupbtn');

  // Adding event listener to the form submission
  form.addEventListener('submit', function(event) {
    // Checking if passwords match
    if (password.value !== repeatPassword.value) {
      event.preventDefault(); // Preventing form submission
      alert("Passwords do not match!");
    }
  });

  // Adding event listener to the login button
  loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Preventing default form submission behavior

    // Redirecting to index.html after a delay
    setTimeout(function() {
      window.location.href = "index.html";
    }, 1000);
  });
});


//password check karne ke liye
document.addEventListener("DOMContentLoaded", function() {
    var password = document.querySelector('input[name="psw"]');
    var repeatPassword = document.querySelector('input[name="psw-repeat"]');
    var form = document.querySelector('.login-form form');

    form.addEventListener('submit', function(event) {
      if (password.value !== repeatPassword.value) {
        event.preventDefault(); 
        alert("Passwords do not match!");
      }
    });
  });

  // dusre page me jane ke liye
  document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.getElementsByClassName('signupbtn')[0]; //ek hi button hai signupntn clss name wala
  
    loginButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      setTimeout(function() {
        window.location.href = "index.html";
      }, 1000); 
    });
  });
  
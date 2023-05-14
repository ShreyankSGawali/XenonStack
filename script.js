document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform simple validation (e.g., check if username and password are not empty)
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    // Perform login authentication (e.g., send a request to the server)
    // You can replace this with your actual login logic
    // Here, we'll just display a success message
    alert("Login successful!");
  });
  
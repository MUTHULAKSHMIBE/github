const currentYear = new Date().getFullYear();
      document.getElementById("copyright-year").textContent = currentYear;

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
        alert("Your Successfully Verified Username and Password!");
        window.location.href = "todo.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
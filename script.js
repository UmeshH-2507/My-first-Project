function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error message
    errorMessage.textContent = '';

    // Basic validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        return false;
    }

    // You can add more checks like length validation, regex for password, etc.

    // If validation passes
    alert("Login Successful!");
    return true;
}

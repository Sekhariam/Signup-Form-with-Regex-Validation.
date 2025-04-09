const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  let valid = true;

  // Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be 10 digits.";
    valid = false;
  }

  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be 8+ characters with letters and numbers.";
    valid = false;
  }

  if (valid) {
    alert("Signup Successful!");
    form.reset();
  }
});

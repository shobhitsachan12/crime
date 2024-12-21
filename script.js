// Login Form Validation
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }
  if (!validatePhone(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Normally, you would submit the form here (e.g., via AJAX to a server).
});

// Register Form Validation
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.getElementById("regEmail").value;
    let phone = document.getElementById("regPhone").value;
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    console.log(data);
  });

// Forgot Password Form Validation
document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("fpEmail").value;

    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Password reset instructions sent to your email.");
  });

// Helper function to validate email
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

// Helper function to validate phone number (simple regex for now)
function validatePhone(phone) {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
}

// Show the Forgot Password form
function showForgotPassword() {
  window.location.href = "forgot-password.html"; // Redirect to forgot password page
}

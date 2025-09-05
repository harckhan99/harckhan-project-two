document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  // Basic validation
  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    message.className = "mt-4 text-center text-sm text-red-600";
    return;
  }

  try {
    // Example API
    const response = await fetch("https://example.com/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      message.textContent = "Signup successful! Redirecting...";
      message.className = "mt-4 text-center text-sm text-green-600";

      // Example: redirect after 2s
      setTimeout(() => (window.location.href = "login.html"), 2000);
    } else {
      message.textContent = data.error || "Signup failed. Try again.";
      message.className = "mt-4 text-center text-sm text-red-600";
    }
  } catch (error) {
    message.textContent = "Network error. Please try again.";
    message.className = "mt-4 text-center text-sm text-red-600";
  }
});

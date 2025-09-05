const loginForm = document.getElementById("loginForm");
const statusMessage = document.getElementById("statusMessage");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  statusMessage.textContent = "Logging in...";
  statusMessage.className = "text-center mt-4 text-sm text-gray-600";

  try {
    const response = await fetch("https://api.example.com/randomuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, rememberMe })
    });

    const data = await response.json();

    if (response.ok) {
      statusMessage.textContent = "Login successful! Redirecting...";
      statusMessage.className = "text-center mt-4 text-sm text-green-600";

      // Redirect after login
      setTimeout(() => window.location.href = "dashboard.html", 1500);
    } else {
      statusMessage.textContent = data.message || "Login failed!";
      statusMessage.className = "text-center mt-4 text-sm text-red-600";
    }
  } catch (error) {
    statusMessage.textContent = "Error connecting to server.";
    statusMessage.className = "text-center mt-4 text-sm text-red-600";
  }
});

document.getElementById("forgotPasswordForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const messageEl = document.getElementById("message");

  try {
    // Example API endpoint
    const response = await fetch("https://example.com/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    if (response.ok) {
      messageEl.textContent = "✅ Password reset link has been sent to your email.";
      messageEl.className = "text-center mt-4 text-green-600 text-sm";
    } else {
      const errorData = await response.json();
      messageEl.textContent = `❌ ${errorData.message || "Something went wrong"}`;
      messageEl.className = "text-center mt-4 text-red-600 text-sm";
    }
  } catch (error) {
    messageEl.textContent = "⚠️ Network error. Please try again.";
    messageEl.className = "text-center mt-4 text-red-600 text-sm";
  }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Fetch Features from Fake API
const featuresContainer = document.getElementById("features-container");

// Some icon names from Lucide
const icons = ["Star", "Shield", "Zap", "Rocket", "Layers", "Heart", "CheckCircle", "Cpu"];

async function loadFeatures() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
    const data = await res.json();

    data.forEach((item, index) => {
      const featureCard = document.createElement("div");
      featureCard.className = "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-left";

      // Pick icon (cycle through list)
      const iconName = icons[index % icons.length];

      featureCard.innerHTML = `
        <div class="flex items-center mb-4">
          <i data-lucide="${iconName}" class="w-8 h-8 text-orange-600 mr-3"></i>
          <h3 class="font-bold text-xl">${item.title.slice(0, 20)}...</h3>
        </div>
        <p class="text-gray-600">${item.body.slice(0, 80)}...</p>
      `;

      featuresContainer.appendChild(featureCard);
    });

    // Activate Lucide icons
    lucide.createIcons();

  } catch (error) {
    featuresContainer.innerHTML = `<p class="text-red-500">Failed to load features. Please try again.</p>`;
  }
}

loadFeatures();




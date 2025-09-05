// Handles page switching
function showPage(page) {
  document.querySelectorAll("main section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
  document.getElementById("pageTitle").innerText = page.charAt(0).toUpperCase() + page.slice(1);
}

// Fetch random API data
async function loadData() {
  // Widgets
  document.getElementById("enrolled").innerText = Math.floor(Math.random() * 10 + 1) + " Courses";
  document.getElementById("deadlines").innerText = Math.floor(Math.random() * 5 + 1) + " Upcoming";
  document.getElementById("progress").innerText = Math.floor(Math.random() * 100) + "% Completed";

  // Courses using picsum as thumbnails
  const courses = ["Mathematics", "English", "Physics", "Chemistry", "Biology", "Economics"];
  const coursesGrid = document.getElementById("coursesGrid");
  courses.forEach((course, i) => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow";
    div.innerHTML = `
      <img src="https://picsum.photos/seed/${i}/400/200" class="rounded mb-2">
      <h3 class="font-semibold">${course}</h3>
      <button class="mt-2 bg-orange-600 text-white px-3 py-1 rounded">Enroll</button>
    `;
    coursesGrid.appendChild(div);
  });

  // Assignments
  const assignments = [
    { title: "Mathematics", status: "Completed" },
    { title: "English", status: "Pending" },
    { title: "Physics", status: "Completed" },
    { title: "Chemistry", status: "Pending" }
  ];
  const assignmentsList = document.getElementById("assignmentsList");
  assignments.forEach(a => {
    const li = document.createElement("li");
    li.className = "bg-white p-4 rounded shadow flex justify-between";
    li.innerHTML = `<span>${a.title}</span>
                    <span class="${a.status === 'Completed' ? 'text-green-600' : 'text-red-600'}">${a.status}</span>`;
    assignmentsList.appendChild(li);
  });

  // Profile - random user API
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];
  document.getElementById("userName").innerText = user.name.first + " " + user.name.last;
  document.getElementById("userEmail").innerText = user.email;
  document.getElementById("avatar").src = user.picture.thumbnail;
}

loadData();

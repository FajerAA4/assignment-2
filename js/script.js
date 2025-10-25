// Dark/Light Theme Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

//function for the Greeting message based on time of day
window.onload = function () {
    const greetText = document.getElementById("greet-text");
    const hour = new Date().getHours();

    if (hour < 12) {
        greetText.textContent = "Good Morning! 🌅 ";
    } else if (hour < 18) {
        greetText.textContent = "Good Afternoon! ☀️";
    } else {
        greetText.textContent = "Good Evening! 🌙 ";
    }
}
    // Project List
    const projects = [
        { title: "Single Cycle CPU", tag: "hardware",img: "assests/img_1.png", desc: "Built a CPU using Logisim for COE301." },
        { title: "Event Management App", tag: "app", desc: "Designed a Figma prototype for SWE206.",img: "assests/img.png" },
        { title: "UI Components Library", tag: "ui", desc: "Created reusable interface components in HTML/CSS." ,img: "assests/img_3.png"}
    ];


function renderProjects(list) {
    const container = document.getElementById("projectList");
    container.innerHTML = "";

    if (list.length === 0) {
        document.getElementById("emptyMessage").style.display = "block";
        return;
    }
    document.getElementById("emptyMessage").style.display = "none";

    list.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <span class="tag">${p.tag}</span>
    `;
        container.appendChild(card);
    });
}


//Apply Filter and Search
    function applyFilter() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const filterTag = document.getElementById("filterSelect").value;
        let filtered = projects.filter(p =>
            (filterTag === "all" || p.tag === filterTag) &&
            (p.title.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm))
        );
        renderProjects(filtered);
    }

    document.getElementById("searchInput").addEventListener("input", applyFilter);
    document.getElementById("filterSelect").addEventListener("change", applyFilter);

    window.addEventListener("load", () => {
        applyFilter(); // render initial list
});

// Dark/Light Theme Toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
// Apply saved theme
    window.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
        }
        // Initialize page features
        updateGreeting();
        loadQuote();
        applyFilter();
        setupContactForm();
        // Add event listeners
        document.getElementById("searchInput").addEventListener("input", applyFilter);
        document.getElementById("filterSelect").addEventListener("change", applyFilter);

    });

//function for the Greeting message based on time of day
function updateGreeting() {
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
// Fetch quote API
async function loadQuote() {
    let quoteSection = document.getElementById("quote");
    if (!quoteSection) {
        quoteSection = document.createElement("p");
        quoteSection.id = "quote";
        quoteSection.style.textAlign = "center";
        quoteSection.style.fontStyle = "italic";
        document.getElementById("greeting").appendChild(quoteSection);
    }

    //loading state
    quoteSection.innerHTML = `
        <span class="spinner" style="
            display:inline-block;
            width:16px; height:16px;
            border:2px solid #ccc;
            border-top:2px solid #e91e63;
            border-radius:50%;
            animation: spin 0.8s linear infinite;
            vertical-align:middle;
            margin-right:6px;
        "></span>
        Loading quote...
    `;

    try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        if (!res.ok) throw new Error("Failed to fetch quote");
        const data = await res.json();
        quoteSection.textContent = `"${data.quote}" — ${data.author}`;
    } catch (error) {
        // --- Requirement 2: friendly error + retry button ---
        quoteSection.innerHTML = `
            ⚠️ Could not load quote.<br>
            <button onclick="loadQuote()" style="
                background:#e91e63;
                color:#fff;
                border:none;
                border-radius:5px;
                padding:5px 10px;
                cursor:pointer;
                margin-top:5px;">Retry</button>
        `;
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
        const filtered = projects.filter(p =>
            (filterTag === "all" || p.tag === filterTag) &&
            (p.title.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm))
        );
        renderProjects(filtered);
    }
//Contact form validation and confirmation
function setupContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        feedback.style.display = "none";
        feedback.style.color = "red";
        feedback.style.opacity = "1";

        if (
            nameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            messageInput.value.trim() === ""
        ) {
            feedback.textContent = "⚠️ Please fill in all fields.";
            feedback.style.display = "block";
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            feedback.textContent = "❌ Please enter a valid email address.";
            feedback.style.display = "block";
            return;
        }

        // Success message
        feedback.style.color = "green";
        feedback.textContent = "✅ Thank you, your message has been sent successfully!";
        feedback.style.display = "block";

        // Reset form
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        // Fade-out after 4 seconds
        setTimeout(() => {
            feedback.style.transition = "opacity 1s";
            feedback.style.opacity = "0";
        }, 4000);
    });
}
const style = document.createElement("style");
style.textContent = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}`;
document.head.appendChild(style);

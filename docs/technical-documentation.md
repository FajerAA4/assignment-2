Technical Documentation – Portfolio Website
---


## 1. Core Technologies
- **HTML5**: Structure and content (About, Projects, Contact section).
- **CSS3**: Handles layout, colors, gradients, Flexbox alignment, and responsive media queries.
- **JavaScript**: Interactivity (theme toggle, greeting message and project filtering)

---

## 2. Features Implemented
- **Responsive Layout**
    - Implemented using **Flexbox** for project card alignment.
    - **Media Queries** applied for desktop, tablet, and mobile breakpoints.
- **Dark/Light Mode Toggle**
    - Button triggers `toggleTheme()` function → toggles `.dark-mode` class.
    - User preference stored in **localStorage**.
- **Greeting Message by Time of Day**
    -  Uses `new Date().getHours()` to update message (Morning / Afternoon / Evening).
- **Contact Form**
    - Includes Name, Email, and Message fields.
    - Inline validation ensures all fields are filled and email format is correct.
    - Displays success message with fade-out animation.
- **API Integration (AI Quotes)**
    - Fetches motivational quotes from [DummyJSON API](https://dummyjson.com/quotes/random).
    - Displays loading text (“Loading quote...”) while fetching(you have to change the network to 3g to actually see the loading).
- **Project Section**
    - Filter and search functionality for projects by tags and keywords.
    ---

## 3. Responsiveness Testing
- **Chrome DevTools**: Simulated responsive layouts using mobile and tablet icons.
- **CSS Media Queries**:
    - ≥ **1024px** → Desktop layout (large header, two-column projects).
    - **768px–1023px** → Tablet layout (smaller fonts, two cards per row).
    - ≤ **767px** → Mobile layout (stacked navigation links and project cards).

---

## 4. Performance
- Lightweight website using only **HTML, CSS, and JavaScript** (no external frameworks).
- Images compressed and stored locally in the `/assets/` folder.
- Smooth transitions with CSS keyframes.
- Responsive performance validated with Chrome Lighthouse (quick load under 1s).

---

## 5. AI Integration
- Generating base structure (HTML, CSS, and JS templates).
- Debugging issues such as `onclick` errors and script path corrections.
- Suggesting improvements for **responsive design** and **form validation**.
- Helping structure project documentation (README, AI usage report, technical report).

- **Ethical Use:**
    - AI was used as a **learning and development assistant**, not for full automation.
    - All code was **reviewed, modified, and understood** before integration.
---

## 6. Future Improvements
-  **Add Home Page & Navigation Menu** → Create an animated landing section for quick navigation.
- **Add Skills Section** → Show programming languages and tools using icons or progress bars.
- **Improve Project Search/Filter** → Tag projects by type (e.g., *Web*, *App*, *School*).
-  **Backend Integration** → Connect contact form to backend (PHP, Node.js, or Firebase).
- **Performance Optimization** → Add image lazy-loading and minify CSS/JS.
---

## 7.  Tools & Testing Summary
| Tool                       | Purpose |
|----------------------------|----------|
| **webstorm**               | Development environment |
| **Google Chrome DevTools** | Responsive and performance testing |
| **ChatGPT (GPT-5)**        | Code review, debugging, documentation |
| **Git & GitHub**           | Version control and hosting |

---

## Conclusion
This portfolio demonstrates core web development skills including **responsive design**, **API integration**, **client-side validation**, and **dark mode functionality**.  
AI tools were used responsibly to **enhance learning**, **debug efficiently**, and **improve documentation clarity**.
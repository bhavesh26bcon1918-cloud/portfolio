# 🎓 Bhavesh Yadav - Modern Personal Portfolio Website

A clean, responsive, and beginner-friendly portfolio website designed specifically for a **first-year B.Tech Computer Science & Engineering (AI & ML)** student at **JECRC University, Jaipur**.

---

## 🌟 Overview & Structure

The portfolio is structured into **11 comprehensive sections** tailored to an authentic first-year computer science student journey:

1. **Home / Hero Section**:
   - Student Name: **Bhavesh Yadav**
   - Headline: *"B.Tech CSE (AI & ML) Student & Aspiring Software Developer"*
   - Quick introductory summary, circular profile photo frame with glow backdrop, quick academic stats bar (1st Year JECRC, 12th: 74%, 10th: 87.33%), and direct call-to-action buttons.
2. **Navigation Bar**:
   - Responsive sticky navigation bar with desktop links and mobile hamburger drawer.
   - Smooth scrolling and active section scroll-spy indicator.
3. **About Me**:
   - Natural first-year introduction detailing current studies, curiosity, and foundational learning.
   - Highlights key attributes: *Quick Learner, Team Worker, Problem Solving, Presentation Skills, Time Management, and AI/ML Exploration*.
4. **Education**:
   - Card timeline featuring **B.Tech CSE (AI & ML)** at JECRC University, **Class 12th** (74.00%), and **Class 10th** (87.33%).
5. **Skills**:
   - Honest foundational skill cards: **C Programming**, **Computer Fundamentals**, **Git & GitHub**, **HTML & CSS**, **Communication & Presentation**, and **Time Management**.
   - No fabricated claims of senior expertise—focused on active learning.
6. **Achievements**:
   - Editable cards for Academic, Certificates, College activities, Competitions, and Other achievements.
   - Uplifting growth banner: *"Currently focused on learning, building skills, and gaining new experiences."*
7. **Hobbies & Interests**:
   - Visual cards with icons: *Playing Games, Exploring Computers & Technology, Learning Programming, Exploring New Software, Watching Tech Content, and Creative Activities*.
8. **Projects**:
   - Beginner-friendly project showcase:
     - **Personal Portfolio Website** (HTML5, CSS3, JavaScript)
     - **C Programming Practice Collection** (GCC, C algorithms, loops & arrays)
     - **Upcoming AI/ML & Software Projects** (Python & Machine learning placeholder)
9. **Strengths**:
   - 8 core attributes: *Quick Learner, Team Worker, Positive Attitude, Problem Solving, Time Management, Willingness to Learn, Presentation Skills, and Interest in Technology*.
10. **Contact Me**:
    - Dual layout with direct contact cards (Email, Phone, University, LinkedIn, GitHub) and an interactive contact form with instant validation, loading feedback, and message receipt status.
11. **Footer**:
    - Copyright `© 2026 Bhavesh Yadav`, social icons, and quick back-to-top scroll button.

---

## ✏️ How to Edit Placeholders

All personal information and placeholders can be edited directly inside `index.html`. Search for `EDITABLE PLACEHOLDER:` in the code to customize:

| Placeholder | Location in `index.html` | Description |
|---|---|---|
| `[Email]` | Hero, Contact, Footer | Replace with your actual email address (e.g. `bhavesh.yadav@example.com`) |
| `[Phone]` | Hero, Contact | Replace with your phone number (e.g. `+91 98765 43210`) |
| `[LinkedIn Link]` | Hero, Contact, Footer | Replace with your LinkedIn profile username or URL |
| `[GitHub Link]` | Hero, Projects, Contact, Footer | Replace with your GitHub profile username or URL |
| `[School Name]` | Education section | Add the name of your secondary and senior secondary schools |
| `[Stream]` | Education section (12th) | Edit stream (e.g., `Science (PCM)`) |
| `[10th Percentage]` | Hero & Education | Currently set to `87.33%` |
| `[12th Percentage]` | Hero & Education | Currently set to `74.00%` |
| `[Profile Photo]` | Hero section | Replace `profile_nobg.png` or `profile.png` with your portrait image |

---

## 📬 Setting Up Free Email Delivery for the Contact Form

The contact form is pre-configured with **Web3Forms** (a free static-site form service that delivers messages directly to your email without any backend server):

1. Visit [Web3Forms](https://web3forms.com/) and enter your email address to receive your **free Access Key**.
2. Open `index.html` and find line ~549:
   ```html
   <input type="hidden" name="access_key" id="web3forms_access_key" value="YOUR_ACCESS_KEY_HERE" />
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with the key sent to your inbox.
4. Save the file. Any message submitted through the form will instantly arrive in your personal email!

*(Note: Even before setting a key, the form has built-in simulation and a direct mail link so visitors can always reach you!)*

---

## 💻 How to View & Run Locally

1. Open File Explorer and navigate to:
   `C:\Users\Bhavesh\.gemini\antigravity\scratch\btech-first-year-portfolio`
2. Double-click `index.html` to open it in **Google Chrome**, **Microsoft Edge**, **Brave**, or **Mozilla Firefox**.
3. No build tools, Node.js, or local servers are required!

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

1. Create a new repository on your GitHub account named `portfolio` or `bhavesh-portfolio`.
2. Push the files (`index.html`, `style.css`, `script.js`, `profile.png`, `profile_nobg.png`) to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings > Pages > Branch: main > Save**.
4. Your website will be live worldwide at: `https://<your-username>.github.io/portfolio/`!

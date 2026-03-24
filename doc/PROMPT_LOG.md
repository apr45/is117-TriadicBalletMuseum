# PROMPT_LOG.md: AI Interaction History

A systematic log of successful prompts used to generate the design, code, and content for the Triadic Ballet portfolio.

## Phase 1: File Setup
* **Goal:** Establish repo file structure and Vite config.
* **Prompt Text:** > "Give me a basic file structure for a GitHub Pages project using Vite that focuses on a multi-page museum exhibit for the Triadic Ballet regarding the following conditions and goals..."
* **Result:** Recommended a GitHub repository structure that was mainly used to set up the files.

---

## Phase 2: Project Core Guidelines
* **Goal:** Establish AGENTS.md to guide the AI in maintaining instructions and goals throughout development.
* **Prompt Text:** > "Create the AGENTS.md, including the following specifications: Project Overview, Pages Structure, Design Rules, Audience & Tone, Constraints, Vocabulary List, Verification."
* **Result:** Generated a AGENTS.md file defining the exhibition’s structure, visual identity, and academic standards.

---

## Phase 3: Development Strategy
* **Goal:** Breaks down the project into manageable sprints.
* **Prompt Text:** > "Based on the information provided in AGENTS.md, create sprints for a website regarding Schlemmer’s Triadic Ballet. Keep in mind, while we want the virtual museum to be unique and follow a theme, it must be easy and simple to build and implement."
* **Result:** Developed a three-sprint roadmap focusing on core structural setup, thematic content population, and final media integration.

---

## Phase 4: Title Page Initial Setup
* **Goal:** Create a high-fidelity title page following the guidelines of AGENTS.md
* **Prompt Text:** > "Using the given AGENTS.md, write HTML and CSS code to create a title page that introduces the audience to the Triadic Ballet Exhibition. Include an interactive button leading to the home page and add a link reference to a video that will play in the background of the page."
* **Result:** Generated title.html with an optimized video tag using autoplay and loop attributes and main.css file with css variables for button visual design.

---

## Phase 5: Global Navigation & CTA
* **Goal:** Implement a header including the names of all available website pages and a "Contact Museum" footer.
* **Prompt Text:** > "Let's focus on creating a global navigation that allows users to access one page from another, as well as a call-to-action, so visitors can easily contact the museum."
* **Result:** Developed persistent navigation across all website pages (except title page) and a functional email link for museum inquiries.

---

## Phase 6: Home Page Architecture
* **Goal:** Creating a top-down, scrolling experience covering the 5 core content areas of the Triadic Ballet: Origin, Concept, Acts, Costumes, and Music.
* **Prompt Text:** > "Moving on to Sprint 2, let's create a layout for the home page before we proceed to research and input the necessary information."
* **Result:** Established full-width horizontal sections for eacg core content area based on the ballet's style.
---
# Example Templete
## Phase 2: [Current State of the project]
* **Goal:** [e.g., Create the "Triad" Color Theme]
* **Prompt Text:** > [Insert the specific prompt you used here]
* **Result:** [e.g., Generated themes.css with CSS Variables]
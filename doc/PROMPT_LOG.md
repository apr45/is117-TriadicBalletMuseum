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

## Phase 7: Research & Information Verification
* **Goal:** Establish a verified research foundation for the five core sections of the Triadic Ballet exhibit home page.
* **Prompt Text:** > Let's focus back on the home page and plan our research, based on what you know about the Triadic Ballet. Please provide descriptions for each section and verify your information.
* **Result:** A comprehensive Project Roadmap and Verification Log detailing the historical, philosophical, and musical context for the site's structural sections.

---

## Phase 8: AGENTS.md Update
* **Goal:** Update AGENTS.md to integrate specific psychological and branding frameworks that align with the site's "Archival" and "Bauhaus" identity.
* **Prompt Text:** > "Update AGENTS.md as I want to consider which principles of Cialdini’s persuasion principles and brand archetype work best on this site."
* **Result:** Analyzed the visual and narrative tone of the project to suggest the Sage/Creator hybrid archetype and the Authority principle as the primary drivers for credibility and engagement.

---

## Phase 9: Biography Page Outline
* **Goal:** Structure a comprehensive page outline for the Oskar Schlemmer biography, applying the newly defined Sage/Creator archetypes from AGENTS.md.
* **Prompt Text:** > "With the updated AGENTS.md, let's work on the biography page concerning Oskar Schlemmer. Let's build an outline of that page before researching."
* **Result:** Developed a high-level skeletal structure for the biography page, aligning with the horizontal "Dossier Track" layout and the high-contrast Triadic Ballet/Bauhaus aesthetic.

---

## Phase 10: Costume Gallery 
* **Goal:** Construct a high-fidelity gallery for the Triadic Ballet exhibit featuring an initial selection of five archival costume images.
* **Prompt Text:** > "Let's create a gallery for the exhibit. Follow the AGENTS.md to build a gallery with about 5 images for now (later, we will expand how many images are displayed in the gallery). Ensure that metadata is displayed below the image, including its name, artist, and date of creation."
* **Result:** Developed a 3-column grid system where images can expand without disrupting the layout. Each item includes a structured metadata block for authority and provenance.

---

## Phase 11: Media & Reinterpretations
* **Goal:** Curate and document high-fidelity video assets for the archive.html page, contrasting historical reconstructions with modern interpretations.
* **Prompt Text:** > "Let's make an archive for past reconstructions and modern reinterpretations of the Triadic Ballet. For the Archive Page, I would like to include at least two videos: one featuring the 1970 reconstruction by Margarete Hastings, Franz Schömbs, and Georg Verden, and another showcasing the Bayerisches Junior Ballet München's reinterpretation."
* **Result:** Outlined the video embedding strategy for the Archive Page, ensuring that each media asset is accompanied by technical metadata.

---
# Example Templete
## Phase 2: [Current State of the project]
* **Goal:** [e.g., Create the "Triad" Color Theme]
* **Prompt Text:** > [Insert the specific prompt you used here]
* **Result:** [e.g., Generated themes.css with CSS Variables]
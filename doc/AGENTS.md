# AGENTS.md: Project Protocol for The Triadic Ballet Exhibition

## 1. Project Overview
**Goal:** Develop a high-fidelity, MoMA-style digital portfolio for a virtual exhibition of Oskar Schlemmer’s *Triadic Ballet* (1922). 

**The Subject:** An experimental, plotless Bauhaus dance piece. It is defined by "threeness": 3 acts, 3 colors, 3 dancers, and 3 geometric shapes. The performance prioritizes rigid, restricted movement over classical fluidity.

## 2. Pages Structure
The website is a Multi-Page Application (MPA) built with Vite. Every page must adhere to a grid-based layout.

* **Title Page (`index.html`):** Minimalist hero section. Full-screen background video of the ballet with a centered, high-contrast entry button.
* **Home Page (`home.html`):** The core exhibit. 3-column grid structure exploring the definition, the concept of "threeness," the three acts, costume analysis, and the avant-garde score.
* **Bauhaus Page (`bauhaus.html`):** Comparative analysis. Links the performance's color theory, geometric costumes, and rigid choreography to the core principles of Bauhaus.
* **Biography Page (`biography.html`):** Focus on Oskar Schlemmer, the designer and choreographer of the Triadic Ballet. Explore his background and his role at the Bauhaus.
* **Archive Page (`archive.html`):** Curated video reconstructions (1922 original notes) vs modern interpretations.
* **Gallery Page (`gallery.html`):** High-resolution image grid of the costumes.
* **Navigation & Footer:** Persistent minimalist header for navigation between pages; Footer with a "Call to Action" (e.g., "Explore the Archive").

## 3. Design Rules
The design must be a digital extension of the Bauhaus movement.

* **The Triadic Palette:** Use only three primary colors plus neutrals:
    * **Yellow:** Act I (Comical/Burlesque)
    * **Pink:** Act II (Solemn/Ceremonial)
    * **Black:** Act III (Mystical/Fantasy)
* **Geometry:** UI elements (buttons, image borders, dividers) must use **Squares, Circles, and Triangles**. Avoid rounded corners.
* **Typography:** Sans-serif only (e.g., **Helvetica, Futura, or Universal**). Layout should use heavy weights with ample white space.
* **Grid System:** Strictly follow a CSS Grid. Images and text blocks should feel "locked" into a mathematical structure.

## 4. Audience & Tone
* **Audience:** Art historians, design students, and avant-garde enthusiasts looking for the "unknown."
* **Tone:** Sophisticated, academic yet experimental, and mysterious. 
* **Feeling:** The user should feel like they are discovering a lost blueprint of the future. The experience should feel controlled and deliberate.

## 5. Constraints
* **Performance:** No heavy 3D libraries (Three.js) or complex WebGL.
* **Build:** Must be optimized for Vite and GitHub Pages deployment.
* **Simplicity:** Avoid "out-of-this-world" features that compromise load times or build simplicity. Use standard CSS/JS for interactions.
* **Consistency:** Maintain the "Rule of Three" across all design choices.

## 6. Vocabulary List
The AI must prioritize these specific terms to maintain exhibition accuracy:

### Vocabulary List: The Triadic Ballet

| Term | Definition |
| :--- | :--- |
| **Das Triadisches Ballett** | The original German title of the performance. |
| **Triadic** | Refers to the "Rule of Three" that governs the ballet's structure (3 acts, 3 colors, 3 dancers, 3 shapes). |
| **Costume-Sculpture** | A wearable form of art that transforms the human body into a three-dimensional sculptural object. |
| **Plotless Dance** | A performance that rejects traditional storytelling or linear narratives in favor of exploring body movement, emotional expression, and aesthetic design. |
| **Choreographic Rigidity** | The deliberate restriction of movement where dancers move in "robotic" or mathematical patterns. |
| **Color Theory** | The psychological use of colors to dictate the audience's mood and perceptions. |
| **Geometric** | A design style characterized by regular lines and simple shapes (Square, Circle, Triangle). |
| **Bauhaus Aesthetic** | A minimalist, functional, and modern approach to art and design that combines artistic vision with industrial mass-production. |
| **Avant-Garde** | Art that is experimental, radical, or unorthodox that pushes the boundaries of established tradition, culture, and aesthetics. |
| **Total Work of Art (Gesamtkunstwerk)** | A creative concept where different forms of art (dance, music, costume, set) are synthesized into a single, unified experience. |

## 7. Verification & Provenance
All historical claims, technical specifications, and architectural analysis must be cross-referenced to ensure the exhibition remains educationally sound.

* **Evidence Standard:** Every factual claim must be logged in `VERIFICATION.md`.
* **Logging Requirement:** Each entry in `VERIFICATION.md` must include the claim, the supporting source (URL/Citation), and a "Last Verified" date.
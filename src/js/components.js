// src/js/components.js

export function injectLayout() {
    const headerHTML = `
        <header class="global-nav">
        <div class="nav-logo">
        <a>
            <span>DAS</span>
            <span>TRIADISCHES</span>
            <span>BALLETT</span>
        </a>
    </div>
        <nav class="nav-links">
        <ul>
            <li><a href="home.html">HOME</a></li>
            <!-- <li><a href="bauhaus.html">BAUHAUS</a></li> -->
            <li><a href="biography.html">BIOGRAPHY</a></li>
            <li><a href="gallery.html">GALLERY</a></li>
            <li><a href="archive.html">ARCHIVE</a></li>
        </ul>
    </nav>
        <div class="nav-accent">
            <span class="shape circle yellow"></span>
            <span class="shape square pink"></span>
            <span class="shape triangle black"></span>
        </div>
    </header>
    `;

    const footerHTML = `
        <footer class="global-footer">
            <div class="footer-grid">
                <div class="footer-section">
                    <h2 class="contact-title">CONTACT<br>MUSEUM</h2>
                    <p>Have any questions? Reach out to us.</p>
                    <a href="mailto:archive@triadic-exhibition.org" class="btn-geometric btn-cta">Send Inquiry</a>
                </div>
        
                <div class="footer-section footer-center">
                    <div class="footer-shapes">
                        <div class="shape circle yellow"></div>
                        <div class="shape square pink"></div>
                        <div class="shape triangle white"></div>
                    </div>
                </div>

                <div class="footer-section footer-right">
                    <p>PROJECT WEBSITE MADE BY ALEX REVILLA </p>
                    <p>EST. 2026 — VIRTUAL EXHIBITION</p>
                    <p class="copyright">© ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    `;

    // Inject at the start and end of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
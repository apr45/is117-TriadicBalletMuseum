/* Global Navigation and CTA Callback */
import { injectLayout } from './components.js';
document.addEventListener('DOMContentLoaded', () => {
    injectLayout();
});

/* Costume Video Speed Control */
const setupCostumeVideo = () => {
    const video = document.getElementById('costumeVideo');
    if (video) {
        video.playbackRate = 2; // 1.5x speed for mechanical effect[cite: 1]
    }
};
document.addEventListener('DOMContentLoaded', setupCostumeVideo);

/* Reset the Mechanical Latch */
const triggerRecoilReset = () => {
    const contents = document.querySelectorAll('.stack-content');
    contents.forEach(content => {
        content.style.animation = 'none';
        content.offsetHeight; // Force reflow
        content.style.animation = '';
    });
};

/* Global Controls */
window.scrollNext = () => {
    const container = document.querySelector('.top-down-exhibit');
    if (container) {
        container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        triggerRecoilReset();
    }
};

window.scrollPrev = () => {
    const container = document.querySelector('.top-down-exhibit');
    if (container) {
        container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        triggerRecoilReset();
    }
};

/* Button Visibility Handler[cite: 3] */
const initNavLogic = () => {
    const container = document.querySelector('.top-down-exhibit');
    if (!container) return;

    container.addEventListener('scroll', () => {
        const x = container.scrollLeft;
        const max = container.scrollWidth - container.clientWidth;

        document.querySelectorAll('.prev-btn').forEach(btn => {
            btn.style.opacity = x <= 10 ? '0' : '1';
            btn.style.pointerEvents = x <= 10 ? 'none' : 'auto';
        });

        document.querySelectorAll('.next-btn').forEach(btn => {
            btn.style.opacity = x >= max - 10 ? '0' : '1';
            btn.style.pointerEvents = x >= max - 10 ? 'none' : 'auto';
        });
    });
};

document.addEventListener('DOMContentLoaded', initNavLogic);
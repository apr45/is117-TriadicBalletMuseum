/*Global Navigation and CTA Callback*/
import { injectLayout } from './components.js';
document.addEventListener('DOMContentLoaded', () => {
    injectLayout();
});

/* Costume Video Speed Control */
const setupCostumeVideo = () => {
    const video = document.getElementById('costumeVideo');
    if (video) {
        video.playbackRate = 2; // 1.5x speed for mechanical effect
    }
};
document.addEventListener('DOMContentLoaded', setupCostumeVideo);
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-audio');
    const unmuteBtn = document.getElementById('unmute-toggle');

    if (audio && unmuteBtn) {
        unmuteBtn.addEventListener('click', () => {
            if (audio.paused) {
                // Play audio and show active state (Act II Pink)
                audio.play();
                unmuteBtn.style.borderColor = '#F2A2B1'; 
            } else {
                // Pause audio and return to neutral state
                audio.pause();
                unmuteBtn.style.borderColor = '#FFFFFF';
            }
        });
    }
});


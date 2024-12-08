// Audio Controls
const audio = document.getElementById('audio');
document.getElementById('playAudio')?.addEventListener('click', () => {
    audio.play();
});
document.getElementById('pauseAudio')?.addEventListener('click', () => {
    audio.pause();
});

// Video Controls
const video = document.getElementById('video');
document.getElementById('playVideo')?.addEventListener('click', () => {
    video.play();
});
document.getElementById('pauseVideo')?.addEventListener('click', () => {
    video.pause();
});

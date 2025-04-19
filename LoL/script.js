function playAudio(championId) {
    const audio = document.getElementById(championId);
    if (audio) {
        audio.play();
    }
}
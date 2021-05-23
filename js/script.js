function playZap() {
    var audio = new Audio('audio/zap-estourado.mp3');
    audio.play();
}

setTimeout(() => {
    playZap();
}, 5*1000);
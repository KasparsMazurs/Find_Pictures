if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// Starting game
function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {

        });
    });
}

// Adding sounds
class AurioC {
    constructor() {
        this.music = new Audio('../Sounds/jungle-kids-116652.mp3')
        this.flip = new Audio('../Sounds/flipcard-91468.mp3')
        this.success = new Audio('../Sounds/success-1-6297.mp3')
        this.victory = new Audio('../Sounds/success-fanfare-trumpets-6185.mp3')
        this.music.volume = 0.5;
        this.music.loop = true;
    }
}

// create background music
startBGMusic() {
    this.music.play();
}
stopBGMusic() {
    this.music.pause();
    this.music.currentTime = 0;
}

// create sound efects
flip() {
    this.flipSound.play();
}
success() {
    this.matchSound.play();
}
victory() {
    this.stopMusic();
    this.victorySound.play();
}

let audioC = new AudioC();
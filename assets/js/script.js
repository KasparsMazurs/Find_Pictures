if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible'); //Overlay text disappears
            game.startGame();
        });
    });
}

// Add/Define audio assets for game
class AudioController {
    constructor() {
        this.bgMusic = new Audio('../Sounds/jungle-kids-116652.mp3');
        this.flipSound = new Audio('../Sounds/flipcard-91468.mp3');
        this.matchSound = new Audio('../Sounds/success-1-6297.mp3');
        this.victorySound = new Audio('../Sounds/success-fanfare-trumpets-6185.mp3');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
}

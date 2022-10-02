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
            overlay.classList.remove('visible');
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {

        });
    });
}

class AurioC {
    constructor() {
        this.music = new Audio('../Sounds/jungle-kids-116652.mp3')
        this.flip = new Audio('../Sounds/flipcard-91468.mp3')
        this.success = new Audio('../Sounds/success-1-6297.mp3')
        this.victory = new Audio('../Sounds/success-fanfare-trumpets-6185.mp3')
    }
}
let audioC = new AudioC();
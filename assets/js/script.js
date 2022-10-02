if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(0, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
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

// Sets everything for game
class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timePlayd = totalTime;
        this.timer = document.getElementById('time')
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
// Stars game
    startGame() {
        this.totalClicks = 0;
        this.timePlayd = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards(this.cardsArray);
            this.countdown = this.startTime();
            this.busy = false;
        }, 500)
        this.hideCards();
        this.timer.innerText = this.timePlayd;
        this.ticker.innerText = this.totalClicks;
    }
// Starts to count time  
    startTime() {

    }
//Victory text overlay visible
    victory() {

    }
// Hide cards after seeing them
    hideCards() {

    }
// Flip cards when clicked
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if(this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            }
        }
    }
// check if cards mach
    checkForCardMatch(card) {

    }
// If cards match then they do not flip back
    cardMatch(card1, card2) {

    }
// If cards are mismatch then flip them both
    cardMismatch(card1, card2) {

    }
// Shuffle cards
    shuffleCards(cardsArray) {

    }
// Get cards
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
// Allow to Flip cards
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}
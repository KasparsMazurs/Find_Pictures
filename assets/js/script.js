if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let card = Array.from(document.getElementsByClassName('card'));

    overlays.fromEach(overlays => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
        });
    });
}
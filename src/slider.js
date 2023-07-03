const images = document.querySelectorAll('.slider-line__item');
const sliderLine = document.querySelector('.slider-line');
let width = document.querySelector('.slider-container').offsetWidth;
let count = 0;
const buttons = document.querySelectorAll('.slider-buttons__item');

export function init() {
    width = document.querySelector('.slider-container').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    rollSlider();
}

export function chooseSlide() {
    buttons.forEach((button, iterator) => {
        button.addEventListener('click', () => {
            count = iterator;
            rollSlider();
        });
    })
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

export function autoSlide() {
    setInterval(() => {
        count++;
        if (count >= 3) {
            count = 0;
        }
        rollSlider();
    }, 5000)
}

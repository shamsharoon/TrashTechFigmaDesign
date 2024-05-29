const images = [
    { src: "images/image1.png", text: 'Vincent Wong' },
    { src: 'images/image1.png', text: 'Shams Haroon' },
    { src: 'images/image1.png', text: 'Ethan Tzortzis' }
];

let currentIndex = 0;

const imageElement = document.getElementById('slider-image');
const textElement = document.getElementById('slider-text');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

function updateSlider() {
    imageElement.style.opacity = 0;
    textElement.style.opacity = 0;

    setTimeout(() => {
        imageElement.src = images[currentIndex].src;
        textElement.textContent = images[currentIndex].text;
        imageElement.style.opacity = 1;
        textElement.style.opacity = 1;
    }, 500);
}

updateSlider();

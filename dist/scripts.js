let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});

const images = [
  { src: "images/image.png", text: 'Vincent Wong', info: "Hello! I'm Vincent, and I appreciate you taking a moment to learn a bit about me. I'm an easy-going guy with a passion for discovering the little joys in life. Whether it's exploring the great outdoors, diving into a captivating book, or experimenting with new recipes in the kitchen, I'm always on the lookout for new experiences and ways to broaden my horizons. In my professional life, I enjoy taking on challenges and solving problems, often finding myself immersed in projects that require creativity and a keen eye for detail." },
  { src: 'images/image.png', text: 'Shams Haroon', info: "Shams Haroon's bio here." },
  { src: 'images/image.png', text: 'Ethan Tzortzis', info: "Ethan Tzortzis's bio here." }
];

let currentIndex = 0;


document.querySelectorAll('#navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Prevent the default behavior
    e.preventDefault();

    // Scroll to the section
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    this.classList.toggle('flip');
  });
});


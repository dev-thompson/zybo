const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const countdownDate = new Date('2025-11-16T00:00:00');

function updateCountdown() {
    const now = new Date();
    const differenceInTime = countdownDate.getTime() - now.getTime();
    const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);

    daysElement.textContent = `${days} Days :`;
    hoursElement.textContent = `${hours.toString().padStart(2, '0')} :`;
    minutesElement.textContent = `${minutes.toString().padStart(2, '0')} :`;
    secondsElement.textContent = `${seconds.toString().padStart(2, '0')}`;

    if (differenceInTime < 0) {
        countdownElement.textContent = 'Countdown has ended!';
    }
}
updateCountdown();
setInterval(updateCountdown, 1000);



// arrival section

document.addEventListener("DOMContentLoaded", function () {
    const logos = document.querySelectorAll("[id^='type-']");
    const texts = document.querySelectorAll("[id^='text-']");

    // Hide all text divs initially
    texts.forEach(text => text.style.display = "none");

    // Set the first logo as active by default
    logos[0].style.color = "#DE600F";
    texts[0].style.display = "block";

    logos.forEach((logo, index) => {
        logo.addEventListener("click", function () {
            // Hide all text divs
            texts.forEach(text => text.style.display = "none");

            // Remove active class from all logos
            logos.forEach(l => l.style.color = "");

            // Show the clicked text div
            document.getElementById(`text-${index + 1}`).style.display = "block";

            // Set active background color
            logo.style.color = "#DE600F";
        });
    });
});


// back to top section

window.addEventListener('scroll', function() {
    var backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top:0, behavior: 'smooth' });
});

// end of bsck to top section

// trend section
const trend = document.querySelector('.trend');
const trendInner = document.querySelector('.trend-inner');
const trendContent = document.querySelectorAll('.trend-content');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;
trendContent[currentSlide].classList.add('active');
prev.addEventListener('click', () => {
    trendContent[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + trendContent.length) % trendContent.length;
    trendContent[currentSlide].classList.add('active');
});

next.addEventListener('click', () => {
    trendContent[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % trendContent.length;
    trendContent[currentSlide].classList.add('active');
}); 


// rate section
const rate = document.querySelector('.rate');
const rateInner = document.querySelector('.rate-inner');
const rateContent = document.querySelectorAll('.rate-content');
const previous = document.querySelector('.previous');
const nexting = document.querySelector('.nexting');

let currentSlider = 0;
rateContent[currentSlider].classList.add('active');
previous.addEventListener('click', () => {
    rateContent[currentSlider].classList.remove('active');
    currentSlider = (currentSlider - 1 + rateContent.length) % rateContent.length;
    rateContent[currentSlider].classList.add('active');
});

nexting.addEventListener('click', () => {
    rateContent[currentSlider].classList.remove('active');
    currentSlider = (currentSlider + 1) % rateContent.length;
    rateContent[currentSlider].classList.add('active');
}); 





// slide section

const slider = document.querySelector('.slider');
const allItems = document.querySelector('.all-items');

let isDown = false;
let startX;
let scrollLeft;

allItems.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - allItems.offsetLeft;
    scrollLeft = allItems.scrollLeft;
});

allItems.addEventListener('mouseleave', () => {
    isDown = false;
});
allItems.addEventListener('mouseup', () => {
    isDown = false;
});

allItems.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - allItems.offsetLeft;
    const walk = (x - startX) * 3;
    allItems.scrollLeft = scrollLeft - walk;
});

allItems.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - allItems.offsetLeft;
    scrollLeft = allItems.scrollLeft;
});
allItems.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - allItems.offsetLeft;
    const walk = (x - startX) * 3;
    allItems.scrollLeft = scrollLeft - walk;
});
allItems.addEventListener('touchend', () => {
    isDown = false;
})



// side section
const sidebar = document.getElementById('sidebar');
const bars = document.getElementById('bars');
bars.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    bars.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});
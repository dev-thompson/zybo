const leftBar = document.querySelector('.left-bar');
const bars = document.getElementById('bars');
bars.addEventListener('click', () => {
    leftBar.classList.toggle('show');
    bars.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});
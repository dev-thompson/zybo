document.addEventListener("DOMContentLoaded", function () {
    const logos = document.querySelectorAll("[id^='type-']");
    const texts = document.querySelectorAll("[id^='text-']");

    // Hide all text divs initially
    texts.forEach(text => text.style.display = "none");

    // Set the first logo as active by default
    logos[0].style.color = "blue";
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
            logo.style.color = "blue";
        });
    });
});

const playButton = document.querySelector(".play");

let opacity = 1;
const interval = setInterval(() => {
    opacity = opacity === 1 ? 0.5 : 1;
    playButton.style.opacity = opacity;
}, 500);

// changing image art
const imageSrc1 = "images/music_art1.jpg";
const imageSrc2 = "images/music_art2.jpg";
const imageSrc3 = "images/music_art3.jpg";

const images = [imageSrc1, imageSrc2, imageSrc3];
let currentIndex = 0;

function changeImage() {
    const imageElement = document.querySelector(".song-image");
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image if last one reached
}

window.onload = () => {
    // Trigger change on page load
    setInterval(changeImage, 5000); // Change image every 5 seconds
};
// from here
// Function to play an audio file
function playAudio(audioId) {
    // Pause all audio elements
    document.querySelectorAll("audio").forEach(function (audio) {
        audio.pause();
    });

    // Play the selected audio
    const audioElement = document.getElementById(audioId);
    audioElement.play();
}


$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("#catchUpModal").modal(options);
});
$(document).ready(function () {
    // Close the menu when a link is clicked
    $(".navbar-nav a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });
});
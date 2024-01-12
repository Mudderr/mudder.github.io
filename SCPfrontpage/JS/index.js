window.onscroll = function() {
    makeNavbarSticky();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeNavbarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


let currentImageIndex = 1; // Initial image index

function changeImage(n) {
    showImage(currentImageIndex += n);
}

function showImage(n) {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    if (n > images.length) {
        currentImageIndex = 1;
    }
    if (n < 1) {
        currentImageIndex = images.length;
    }
    document.getElementById("image").src = images[currentImageIndex - 1];
}

// Show the initial image
showImage(currentImageIndex);

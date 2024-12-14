const nameElement = document.getElementById('typed-name');
const typedName = "Mark Christopher A. Perez"; // Your name
let nameIndex = 0;

function typeName() {
    if (nameIndex < typedName.length) {
        nameElement.innerHTML += typedName.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 100); // Adjust speed here (100ms)
    }
}

// Call the function when the page loads
window.onload = typeName;

let myWorksCarouselIndex = 0;
let certificatesCarouselIndex = 0;

function moveCarousel(direction, type) {
    const items = document.querySelectorAll(`.${type} .carousel-item`);
    const totalItems = items.length;

    // Hide current item
    items[myWorksCarouselIndex].classList.remove('active');

    // Update index
    if (type === 'my-works') {
        myWorksCarouselIndex = (myWorksCarouselIndex + direction + totalItems) % totalItems;
    } else {
        certificatesCarouselIndex = (certificatesCarouselIndex + direction + totalItems) % totalItems;
    }

    // Show new item
    items[myWorksCarouselIndex].classList.add('active');

    // Update transform for carousel-inner
    const carouselInner = document.querySelector(`.${type} .carousel-inner`);
    carouselInner.style.transform = `translateX(-${(type === 'my-works' ? myWorksCarouselIndex : certificatesCarouselIndex) * 100}%)`;
}

// Initialize by showing the first item in both carousels
document.querySelectorAll('.my-works .carousel-item')[0].classList.add('active');
document.querySelectorAll('.certificates .carousel-item')[0].classList.add('active');

function openModal(album) {
    const modalImages = document.getElementById("modal-images");
    let imagesHTML = '';

    if (album === 'album1') {
        imagesHTML = `
            <img src="./images/image1a.jpg" alt="Image 1A">
            <img src="./images/image1b.jpg" alt="Image 1B">
            <img src="./images/image1c.jpg" alt="Image 1C">
        `;
    } else if (album === 'album2') {
        imagesHTML = `
            <img src="./images/image2a.jpg" alt="Image 2A">
            <img src="./images/image2b.jpg" alt="Image 2B">
        `;
    } else if (album === 'album3') {
        imagesHTML = `
            <img src="./images/image3a.jpg" alt="Image 3A">
            <img src="./images/image3b.jpg" alt="Image 3B">
            <img src="./images/image3c.jpg" alt="Image 3C">
        `;
    }

    modalImages.innerHTML = imagesHTML;
    document.getElementById("imageModal").style.display = "block";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function toggleImages(imageId) {
    const images = document.getElementById(imageId);
    if (images.style.display === "none") {
        images.style.display = "block";
    } else {
        images.style.display = "none";
    }
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1; // Loop to last image
    } else if (currentIndex >= currentImages.length) {
        currentIndex = 0; // Loop to first image
    }

    showImage(currentIndex);
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && (event.shiftKey && event.key === 'I'))) {
        event.preventDefault();
    }
});
function moveCarousel(direction, type) {
    const items = document.querySelectorAll(`.${type} .carousel-item`);
    const totalItems = items.length;

    // Hide current item
    items[certificatesCarouselIndex].classList.remove('active');

    // Update index
    certificatesCarouselIndex = (certificatesCarouselIndex + direction + totalItems) % totalItems;

    // Show new item
    items[certificatesCarouselIndex].classList.add('active');

    // Update transform for carousel-inner
    const carouselInner = document.querySelector(`.${type} .carousel-inner`);
    carouselInner.style.transform = `translateX(-${certificatesCarouselIndex * 100}%)`;
}

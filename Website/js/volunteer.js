// Select all elements with the class 'animate-on-scroll'
const profileBoxes = document.querySelectorAll('.animate-on-scroll');

// Function to check if an element is in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'animate-visible' class to elements in view
function handleScroll() {
    profileBoxes.forEach(box => {
        if (isInViewport(box)) {
            box.classList.add('animate-visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Trigger the function initially to catch any elements already in view
window.addEventListener('load', handleScroll);

window.addEventListener('scroll', function () {
    const profileBoxes = document.querySelectorAll('.animate-on-scroll');
    profileBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxTop < windowHeight - 50) {
            box.classList.add('animate-visible');
        }
    });
}); 
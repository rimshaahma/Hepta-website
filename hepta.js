// script.js


document.getElementById('toggle-button').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.add('open');
});

document.getElementById('close-button').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.remove('open');
    /* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }
});


let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
// script.js




// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Apply move-up class to sections when they enter viewport
function moveElementsUpOnScroll() {
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        if (isInViewport(section)) {
            section.classList.add('move-up');
        } else {
            section.classList.remove('move-up');
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', moveElementsUpOnScroll);

// Initial check on page load
moveElementsUpOnScroll();

// FORM EMAIL ERROR MESSAGE NOT HAVING @
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the email input value
    var emailInput = document.getElementById("email").value;

    // Check if email contains '@'
    if (!emailInput.includes("@")) {
        // Show error message
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
    } else {
        // Clear error message and submit the form
        document.getElementById("emailError").textContent = "";
        document.getElementById("emailError").style.display = "none";
        this.submit(); // Submit the form
    }
});

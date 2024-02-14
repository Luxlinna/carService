const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
    distance: "50px", 
    origin: "bottom",
    duration: 1000,
};
/* === HEADER CONTAINER === */
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOptions,
    delay: 500,
});

/* === SERVICE CONTAINER === */
ScrollReveal().reveal(".service__card", {
    ...scrollRevealOptions,
    interval: 500,
});

/* === PRICE CONTAINER=== */
ScrollReveal().reveal(".price__card", {
    ...scrollRevealOptions,
    interval: 500,
});

/* === SWIPER TESTIMONIAL === */
let swiperWhyUs = new Swiper(".swiper", {
    loop: true,
    spacebetween: 24,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
});

/* === SHOW MAP FUNCTION=== */
function initMap() {
    // Replace with your store's latitude and longitude
    // Get google Maps API Key :  https://console.cloud.google.com/
    // var storeLocation = { lat: 40.7128, lng: -74.0060 };

    var location = { lat: 56.14622676609706, lng: 13.394101154410189}
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: ''
    });
};

/* === EMAIL JS === */
/* document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const contactName = document.getElementById('contact-name');
        const contactPhone = document.getElementById('contact-phone');
        const contactEmail = document.getElementById('contact-email');
        const contactService = document.getElementById('contact-service');
        const contactMessage = document.getElementById('contact-message');

        const sendEmail = (e) => {
            e.preventDefault();
            // Check if the field has a value
            if (contactName.value === '' || contactPhone.value === '' || contactEmail.value === '' || contactService.value === '') {
                // Add and remove color
                contactMessage.classList.remove('color-blue');
                contactMessage.classList.add('color-red');
                // Show message
                contactMessage.textContent = 'Please fill out all fields 📋';
            } else {
                // Service ID - template ID - #form -publickey
                emailjs.sendForm('service_e6xs64m', 'template_5ko303l', '#contact-form', 'ye4t_YLIfjjewn-VZ')
                    .then(() => {
                        // Show message and add color
                        contactMessage.classList.remove('color-red');
                        contactMessage.classList.add('color-blue');
                        contactMessage.textContent = 'Message sent ✅';
                        // Remove message after 5 seconds
                        setTimeout(() => {
                            contactMessage.textContent = '';
                        }, 5000);
                    })
                    .catch((error) => {
                        console.error('Error sending email:', error);
                        alert('Oops! Something went wrong...');
                    });
                // Clear the input fields
                contactName.value = '';
                contactPhone.value = '';
                contactEmail.value = '';
                contactService.value = '';
            }
        };

        contactForm.addEventListener('submit', sendEmail);
    } else {
        console.error("Element with ID 'contact-form' not found.");
        console.log("Contact-form:", contactForm);
    }
}); */

/* === SHOW SCROLL UP === */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is heigher than 350 viewport height, 
    // add the show-scroll class to a tag with the scrollup calss
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
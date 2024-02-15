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

/* === SHOW SCROLL UP === */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is heigher than 350 viewport height, 
    // add the show-scroll class to a tag with the scrollup calss
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
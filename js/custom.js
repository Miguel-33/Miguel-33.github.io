/*--------------------------------------------------------------------- 
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
    "use strict";
    
    // Hide preloader on window load
    window.addEventListener("load", function () {
        document.getElementById("preloader").style.display = "none";
    });

    // Initialize MeanMenu for mobile navigation
    $(document).ready(function () {
        $('header nav').meanmenu();
    });

    // Initialize tooltips
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Sticky header
    $(document).ready(function() {
        $(".sticky-wrapper-header").sticky({ topSpacing: 0 });
    });

    // Add overlay effect for megamenu
    $(document).ready(function() {
        $(".main-menu ul li.megamenu").hover(
            function() { $("#wrapper").addClass('overlay'); },
            function() { $("#wrapper").removeClass('overlay'); }
        );
    });

    // Custom scroll effect for brand box
    $(".brand-box").niceScroll({
        cursorcolor: "#9b9b9c",
    });

    // Initialize NiceSelect for custom select dropdowns
    $(document).ready(function() {
        $('select').niceSelect();
    });

    // Scroll to top button functionality
    $(window).on('scroll', function () {
        const scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#back-to-top").addClass('b-show_scrollBut');
        } else {
            $("#back-to-top").removeClass('b-show_scrollBut');
        }
    });
    $("#back-to-top").on("click", function() {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });

    // Hero slider initialization
    var swiper = new Swiper('.heroslider', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
    });

    // Product filters slider
    var swiper = new Swiper('.swiper-product-filters', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        breakpoints: {
            1024: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 30, slidesPerColumn: 1 },
            640: { slidesPerView: 2, spaceBetween: 20, slidesPerColumn: 1 },
            480: { slidesPerView: 1, spaceBetween: 10, slidesPerColumn: 1 }
        },
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true }
    });

    // Countdown timer for specific elements
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime(
                '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> ' +
                '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> ' +
                '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> ' +
                '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> ' +
                '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'
            ));
        });
    });

    // Deal slider using Slick
    $('.deal-slider').slick({
        prevArrow: '.previous-deal',
        nextArrow: '.next-deal',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    });

    // Initialize Fancybox for images
    $(".fancybox").fancybox({
        maxWidth: 1200,
        maxHeight: 600,
        width: '70%',
        height: '70%',
    });

    // Toggle sidebar
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    // Blog carousel
    $('#blogCarousel').carousel({
        interval: 5000
    });
});

// Scroll reveal animation on scroll
window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        const screenPosition = window.innerHeight;

        revealElements.forEach(function(element) {
            if (element.getBoundingClientRect().top < screenPosition) {
                element.classList.add('show');
            }
        });
    });
});

// Enable navigation for main dropdown links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-item.dropdown > a').forEach(dropdownLink => {
        dropdownLink.addEventListener('click', (event) => {
            window.location.href = dropdownLink.getAttribute('href');
        });
    });
});

// Set active class for current page link
function setActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Get the navbar and the toggle button
    const navbar = document.querySelector('.navbar-collapse');
    const navbarToggle = document.querySelector('.navbar-toggler');
    
    // Function to close the navbar when clicking outside
    function closeNavbarOnClickOutside(event) {
        // Check if the click is outside the navbar and toggle button
        if (!navbar.contains(event.target) && !navbarToggle.contains(event.target)) {
            // Collapse the navbar if it is open
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show');
            }
        }
    }
    
    document.addEventListener('click', closeNavbarOnClickOutside);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('show');
        });
    });
});

$(document).ready(function(){
    $('.home-section').parallaxie({
        speed: 0.4,
        size: "100%",
        offset: 0,
    });
    
    
     $('.carousel').carousel({
         interval:200000
});
    
});

$('.mb-slider').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots:false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    navText: ['<div class="prev"><i class="fas fa-arrow-left"></i></div>', '<div class="next"><i class="fas fa-arrow-right"></i></div>'],
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    center: true,
});
// menu height
$(function () {
    var topoffset = 70; //variable for menu height

    //Use smooth scrolling when clicking on navigation
    $('.main-menu a').click(function () {
        if (location.pathname.replace(/^\//, '') ===
            this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - topoffset
                }, 1000);
                return false;
            } //target.length
        } //click function
    }); //smooth scrolling

});

$(document).ready(function(){
    $('.home').click(function(){
          $('.home').addClass('bg-color');                  
    });
    
    
   
});
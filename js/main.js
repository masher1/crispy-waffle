$(document).ready(function () {
  "use strict";
  var window_width = $(window).width(),
  window_height = window.innerHeight,
  header_height = $(".default-header").height(),
  header_height_static = $(".site-header.static").outerHeight(),
  fitscreen = window_height - header_height;

  // $(".fullscreen").css("height", window_height)
  // $(".fitscreen").css("height", fitscreen);

  //-------- Fixed Header Js ----------//
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 80) {
      $('.header-area').addClass('header-fixed');
    }
    else {
      $('.header-area').removeClass('header-fixed');
    }
  });

  //------- Active Nice Select --------//
  $('select').niceSelect();

  $('.img-pop-up').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // Gallery Pop Up
  $('.photo-gallery-pop-up').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // Focus On Input
  $('.reservation-calendar').on('click', function () {
    $('#event_date').focus();
  });

  // Bootstrap Datepicker
  $('.datepicker').datepicker();

  // -------   Owl Carousel
  function cta_slider() {
    if ($('.cta-owl').length) {
      $('.cta-owl').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        navText: ['<img src="img/left-arrow.png">', '<img src="img/right-arrow.png">'],
        responsiveClass: true
      })
    }
  }
  cta_slider();

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  var unavailableDates = [
    { start: '2015-08-31', end: '2015-09-05' },
    { start: '2015-09-11', end: '2015-09-15' },
    { start: '2015-09-15', end: '2015-09-23' },
    { start: '2015-10-01', end: '2015-10-07' }
  ];
});

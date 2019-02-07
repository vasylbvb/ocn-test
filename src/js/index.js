import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

jQuery(function($) {
    //Scrollspy for changing header
    window.onscroll = function() { listenToScroll() };
    var header = $('#mainHeader');
    var headerWrap = $('.header-wrapper');
    var sticky = header.scrollTop();

    function listenToScroll() {
        if (window.pageYOffset > sticky) {
            header.addClass("scrolled");
            headerWrap.removeClass("bg-color-1").addClass("bg-color-2");
        } else {
            header.removeClass("scrolled");
            headerWrap.removeClass("bg-color-2").addClass("bg-color-1");
        }
    }

    //tooltips initialize
    $('[data-toggle="tooltip"]').tooltip();

    $('.navbar-collapse .close').click(function(e) {
        $('.navbar-toggler').addClass("collapsed").attr("aria-expanded", "false");
        $(this).parent('.navbar-collapse').removeClass("show");
    });
});
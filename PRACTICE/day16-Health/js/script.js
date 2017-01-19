// Carousel slider
jQuery('#pxlr-main-slider').carousel({
    interval: 5000
});

// Accordion
jQuery('#widget-accordion').collapse()

// prettyPhoto

jQuery(document).ready(function(){
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({
        deeplinking: false,
        animation_speed:'normal',
        theme:'light_square',
        slideshow:5000,
        autoplay_slideshow: true,
    });
});
'use strict';

$(function(){
    $(".btn-below").each(
        function(i, button){
            var width = $(button).outerWidth();

            console.log(width);
            $(button).css("margin-left",-width/2 + "px");
        }
    );

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        smartSpeed: 400,
    });
});


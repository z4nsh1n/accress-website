$(function() {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        smartSpeed: 400,
        lazyLoad: true,
        nav: true,
        navText: ["&#x22DE;","&#x22DF;"]
    });
    $(".btn-below").each(
        function(i, button){
            var width = $(button).outerWidth();
            $(button).css("margin-left",-width/2 + "px");
        }
    );
    $(window).resize(function(){
        console.log("resize");
        $(".btn-below").each(
            function(i, button){
                var width = $(button).outerWidth();
                $(button).css("margin-left",-width/2 + "px");
            }
        );

    })
});
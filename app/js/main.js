'use strict';

$(function(){
    $(".btn-below").each(
        function(i, button){
            var width = $(button).outerWidth();

            console.log(width);
            $(button).css("margin-left",-width/2 + "px");
        }
    )
});


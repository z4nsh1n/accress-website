'use strict';

$(function(){
    $(".btn-below").each(
        function(i, button){
            var width = $(button).width();
            console.log(width);
            $(button).css("margin-left", -width/2 + "px");
        }
    )
});


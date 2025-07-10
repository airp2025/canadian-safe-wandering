window.onload = function(){
    if(window.innerHeight > window.innerWidth){
        $("nav ul").hide();
    }

    if(window.innerWidth > window.innerHeight){
        $("nav ul").show();
    }
};

$( window ).on( "orientationchange", function( event ) {
    if(window.innerHeight > window.innerWidth){
        $("nav ul").hide();
    }
    if(window.innerWidth > window.innerHeight){
        $("nav ul").show();
    }
});
    
//Changing layout on browser size change
$(document).ready(function(){
    $(window).resize(function(){
        if(window.innerHeight > window.innerWidth){
            $("nav ul").hide();
        }
        if(window.innerWidth > window.innerHeight){
            $("nav ul").show();
        }
    });
});


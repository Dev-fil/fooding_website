$(function(){
    new WOW().init();
}) ;

$(function(){
    $("#work").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
});

$(function(){
    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartspeed:700,
        loop:true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    });
    
});
$(function(){
    $("#customers-testimonials").owlCarousel({
        items:1,
        autoplay:true,
        smartspeed:700,
        loop:true,
        autoplayHoverPause:true,
    });
    
});
$(function(){
   $('.counter').counterUp({
    delay:10,
    time:3000,
});
});

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()<50){
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        }
        else{
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});


$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();

        var section=$(this).attr("href");

        $('html,body').animate({
            scrollTop:$(section).offset().top -64
        },1250,"easeInOutExpo");
    });
});

// $(window).on("load",function(){
//     $(".loader-wrapper").fadeOut("slow");
// })


$(function(){
    $("#menu-items").owlCarousel({
        items:3,
        autoplay:true,
        smartspeed:600,
        loop:true,
        autoplayHoverPause:true, 
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
        

    });
    
});




$(function(){
    $("#menu-items2").owlCarousel({
        items:3,
        autoplay:true,
        smartspeed:600,
        loop:true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    });
    
});


$(function(){
    $("#menu-items3").owlCarousel({
        items:3,
        autoplay:true,
        smartspeed:600,
        loop:true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    });
    
});

$(function(){
    $(".navbar-collapse ul li a").on("click touch",function(){
        $(".navbar-toggle").click();
    });
})



$( document ).ready(function() {
     $('.js--nav-icon').click(function() {
         var nav = $('.js--main-nav');
         nav.slideToggle(200); 
     })


    $('.js--scoll').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

});

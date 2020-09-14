$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 700) {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky")
    }
})
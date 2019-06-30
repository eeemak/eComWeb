/*==========Scroll Top==========*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.scroll-top-wrapper').addClass("show");
    }
    else {
        $('.scroll-top-wrapper').removeClass("show");
    }
});
$(".scroll-top-wrapper").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
/*==========Scroll Top==========*/
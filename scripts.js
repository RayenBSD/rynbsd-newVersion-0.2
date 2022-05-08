$(function () {

    var width = $(window).width();
    var height = $(window).height();

    if (width <= 512) {
        $(".small-nav").hide();
        $("#main-logo").attr("href", "#");
        $(".nav-container").hide();
    }
    else {
        $(".small-nav").hide();
        $("#main-logo").attr("href", "#main");
        $(".nav-container").show();        
    }

    $("#main-logo").click(() => {
        if (width <= 512) {
            $(".small-nav").toggle(1000);
        }
    });
});
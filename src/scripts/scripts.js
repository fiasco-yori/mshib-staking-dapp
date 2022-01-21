var Main = (function (module) {
    return module
})(Main || {});

Main.Functions = (function (module) {

    module.Init = () => {
        Main.Functions.InitFadeIn();
    };

    module.InitFadeIn = () => {
        $(window).scroll(function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $('.js_fade').each(function () {
                /* Check the location of each desired element */
              
                var objectBottom = $(this).offset().top + $(this).outerHeight();               
                // var objectBottom = $(this).offset().top;

                /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    if ($(this).hasClass("js_fade_active") === false) {
                        $(this).addClass("js_fade_active");
                    }
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    };

    return module;
})(Main.Functions || {});
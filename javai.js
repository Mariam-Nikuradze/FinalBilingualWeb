(function($) {
    "use strict"; // Start of use strict


    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });


    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })


})(jQuery);

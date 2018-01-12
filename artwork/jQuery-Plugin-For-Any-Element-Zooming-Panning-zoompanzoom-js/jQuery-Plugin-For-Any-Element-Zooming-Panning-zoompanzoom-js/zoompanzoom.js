(function($) {


    $.fn.zoompanzoom = function(options) {

        var settings = $.extend({
            animationSpeed: "fast",
            zoomfactor: .3,
            maxZoom: 10,
            minZoom: .3,
            disablePan: false
        }, options);

        var zoomdiv = this;
        currentZoom = 1.0;

        if (!settings.disablePan) {
            $(this).draggable();
        }

        jQuery('#zoom_in').click(
            function() {
                if (currentZoom < settings.maxZoom) {
                    jQuery(zoomdiv).animate({
                        'zoom': currentZoom += settings.zoomfactor
                    }, settings.animationSpeed);
                }

            })
        jQuery('#zoom_out').click(
            function() {
                if (currentZoom > settings.minZoom) {
                    jQuery(zoomdiv).animate({
                        'zoom': currentZoom -= settings.zoomfactor
                    }, settings.animationSpeed);
                }

            })
        jQuery('#zoom_reset').click(
            function() {
                currentZoom = 1.0;
                jQuery(zoomdiv).animate({
                    'zoom': .3
                }, settings.animationSpeed);
            })
    };

}(jQuery));
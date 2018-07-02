$(document).ready(function() {

    /*	Parallax Background
	================================================== */

    $(window).on('scroll', function(e) {
        var scrollPosition = $(window).scrollTop();
        $('#parallax').css('top', (0 - (scrollPosition * 0.3)) + 'px'); // bg image moves at 30% of scrolling speed
        $('#hero').css('opacity', ((100 - scrollPosition / 2) * 0.01));
    });

    /*	Local Scroll
	================================================== */

    $('.navbar').localScroll({
        offset: -80,
        duration: 500
    });

    /*	Active Menu
	================================================== */

    $('section').waypoint({
        handler: function() {
            $('section').each(function(i, val){
                $(val).removeClass("active-section");
            });
            $(this.element).addClass("active-section");
            $('nav a').each(function(i, val){
                $(val).removeClass("active");
            });
            $('nav a[href="#' + this.element.id + '"]').addClass("active");
        },
        offset: '35%'
    });

    //$('section').waypoint({
    //    handler: function(direction) {
    //        var active_section = this;
    //        if (direction === "up") active_section = active_section.prev();
    //        var active_link = jQuery('nav a[href="#' + active_section.element.id + '"]');
    //        $('nav a').parent().removeClass("active");
    //        active_link.parent().addClass("active");
    //        $("#" + active_section.element.id).addClass("active-section");
    //    },
    //    context: 'body',
    //    offset: '35%'
    //});

    //jQuery(function() {
    //    var sections = jQuery('section');
    //    var navigation_links = jQuery('nav a');
    //    sections.waypoint({
    //        handler: function(direction) {
    //            var active_section;
    //            active_section = jQuery(this);
    //            if (direction === "up") active_section = active_section.prev();
    //            var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
    //            navigation_links.parent().removeClass("active");
    //            active_link.parent().addClass("active");
    //            active_section.addClass("active-section");
    //        },
    //        offset: '35%'
    //    });
    //});

    /*	Pretty Photo
    ================================================== */

    $('#gallery a').attr('rel', 'prettyPhoto');
    $("a[rel^='prettyPhoto']").prettyPhoto();
});

$(window).on("load", function() {

    $('.section').each(function() {
        animate_start($(this));
    });

});

/*	Animation with Waypoints
================================================== */

function animate_start(element) {
    element.find('.animate').each(function(i) {
        var $item = jQuery(this);
        var animation = $item.data("animate");

        $item.waypoint(function(direction) {
            $item.css({
                '-webkit-animation-delay': (i * 0.1) + "s",
                '-moz-animation-delay': (i * 0.1) + "s",
                '-ms-animation-delay': (i * 0.1) + "s",
                '-o-animation-delay': (i * 0.1) + "s",
                'animation-delay': (i * 0.1) + "s"
            });
            $item.removeClass('animate').addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                jQuery(this).removeClass(animation + ' animated');
            });
        }, {
            offset: '80%',
            triggerOnce: true
        });
    });
};
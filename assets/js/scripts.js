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

    $('#principal').localScroll({
        offset: -80,
        duration: 500
    });

    /*	Active Menu
	================================================== */

    $('section').waypoint({
        handler: function(direction) {
            $('section').each(function(i, val){
                $(val).removeClass("active-section");
            });
            $('nav a').each(function(i, val){
                $(val).removeClass("active");
            });
            var active_section = this;
            if (direction === "up"){
                active_section = $(this.element).prev();
                $("#" + active_section[0].id).addClass("active-section");
                $('nav a[href="#' + active_section[0].id + '"]').addClass("active");
            }
            else{
                $(active_section.element).addClass("active-section");
                $('nav a[href="#' + active_section.element.id + '"]').addClass("active");
            }
            
        },
        offset: '35%'
    });

    /*	Pretty Photo
    ================================================== */
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
            offset: '40%',
            triggerOnce: true
        });
    });
};
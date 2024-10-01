// Smooth scroll without updating URL
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {
        var href = this.getAttribute('href');
        
        // Check if the href is a hash link
        if (href.charAt(0) === '#' && href.length > 1) {
            event.preventDefault();
            
            var targetId = href.substring(1);
            var $target = $('#' + targetId);
            
            if ($target.length) {
                var targetOffset = $target.offset().top - 40; // 40 is the data-offset value
                $('html, body').animate({
                    scrollTop: targetOffset
                }, 700);
            }
        }
        // If it's not a hash link, let the default behavior occur
    });
});

// navbar toggle (unchanged)
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// Custom scroll spy functionality
$(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();

    $('.navbar .nav-link').each(function() {
        var href = this.getAttribute('href');
        
        if (href.charAt(0) === '#' && href.length > 1) {
            var $target = $(href);
            if ($target.length) {
                var targetTop = $target.offset().top - 50; // 50 is a buffer
                var targetBottom = targetTop + $target.outerHeight();

                if (scrollPosition >= targetTop && scrollPosition < targetBottom) {
                    $('.navbar .nav-link').removeClass('active');
                    $(this).addClass('active');
                }
            }
        }
    });
});
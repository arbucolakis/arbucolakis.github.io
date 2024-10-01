// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link .link").on('click', function(event) {
        var sectionId = $(this).data('section');
        if (sectionId) {
            event.preventDefault();
            var $targetSection = $('#' + sectionId);
            
            if ($targetSection.length) {
                $('html, body').animate({
                    scrollTop: $targetSection.offset().top
                }, 700);
            }
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
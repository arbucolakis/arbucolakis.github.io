// smooth scroll
$(document).ready(function () {
    $(".nav-link").on('click', function (event) {
        event.preventDefault();  // Prevent default link behavior

        var targetSection = $(this).attr('href').replace('/', '');  // Get the section name (e.g. 'home')

        // Smoothly scroll to the section with the matching ID
        $('html, body').animate({
            scrollTop: $('#' + targetSection).offset().top
        }, 700);

        // Update the URL without the hash
        window.history.pushState(null, null, '/' + targetSection);
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
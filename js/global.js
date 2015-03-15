$(function() {
    $('.homeSlider').slider();

    $('a.project').each(function() {
        $(this).css('background-image', 'url(' + $(this).data('icon') + ')');
    });
});
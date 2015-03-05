$(function() {
    $('.homeSlider').slider();

    /*
    $('.homeSlider .images').css('width', 100 * $('.homeSlider .images li').length + '%')
    $('.homeSlider .images li').css('width', 100 / $('.homeSlider .images li').length + '%');

    $('.homeSlider').data('timer', setInterval(function() {
        $('.homeSlider').addClass('motion');
        $('.homeSlider .image').css('left', '-100%');

        setTimeout(function() {
            $('.homeSlider').removeClass('motion');
            $('.homeSlider .images').append($('.homeSlider .images li:first'));
            $('.homeSlider .images').css('left', '0');
        }, 1000);
    }, 3000));

    $('.homeSlider .pagination ul li').click(function() {
        if (!$(this).hasClass('active')) {
            clearInterval($('.homeSlider').data('timer'));
            $('.homeSlider').removeClass('motion');
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');

            var index = $('.homeSlider .images li[data-slide=' + $(this).data('slide') + ']').index();

            for (var i = 1; i < index; i++) {
                $('.homeSlider .images li').eq(i).hide();
            }

            $('.homeSlider').addClass('motion')
            $('.homeSlider .images').css('left', '-100%');

            setTimeout(function() {
                $('.homeSlider').removeClass('motion');

                for (var i = 0; i < index; i++) {
                    $('.homeSlider .images').append($('.homeSlider .images li:first').show());
                }

                $('.homeSlider .images').css('left', '0');
            }, 1000);
        }
    });
    */

    $('a.project').each(function() {
        $(this).css('background-image', 'url(' + $(this).data('icon') + ')');
    });
});
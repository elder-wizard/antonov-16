$(document).ready(function () {

//GAMBURGER MENU

    $('.hamburger').on('click',  (function () {
        $('.menu').slideToggle('slow', function () {
            $('.hamburger').hide().show();
            });
    }));



//ACCORDION

    $('.accordion > .description').hide();
    $('.accordion > .title > a').click(function () {
        $(this).parent().next().slideToggle();
        return false;
    });

//MODAL WINDOW

    $('.open-form').on('click',(function (event) {
        event.preventDefault();
        $('.overlay').fadeIn(400,
            function () {
                $('.modal-form')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });
    }));

    $('.close-form, .overlay').on('click', function () {
        $('.modal-form')
            .animate({opacity: 0}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                }
            );
    });


// TABS

    $('.tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-link').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
// TOOLTIP



});
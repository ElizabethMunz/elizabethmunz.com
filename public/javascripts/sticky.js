/**
 * Created by Elizabeth on 8/12/2016.
 */

$(document).ready(function(){
    var nav = $('nav');

    var headerImage = $('#headerimage');
    var headerHeight = headerImage.height() - nav.outerHeight();
    var containerPadding = 30;

    var navOffset = nav.offset().top;
    var mainOffset = headerImage.height() + containerPadding;

    $(window).scroll(function() {
        if($(this).scrollTop() > navOffset) {
            headerImage.addClass("sticky");
            headerImage.css('top', -1 * headerHeight);
            //keep main content from jumping when nav is removed from doc flow:
            $('#container').css('padding-top', mainOffset);
        }
        else {
            headerImage.removeClass("sticky");
            $('#container').css('padding-top', containerPadding);
        }
    });
});

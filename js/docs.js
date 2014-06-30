/*!
 * Metro UI 4 Jekyll v2.0.31 (http://a-g-f.github.com/metro-ui-jekyll/)
 * A port of Metro UI CSS made for Jekyll maintained by Alfred G. Fischer
 * Metro UI CSS Copyright 2012-2014 Sergey Pimenov
 * Metro UI 4 Jekyll Copyright 2014 Alfred G. Fischer
 * Both licensed under http://opensource.org/licenses/MIT
 */

$(function(){
    $("[data-load]").each(function(){
        $(this).load($(this).data("load"), function(){
        });
    });

    window.prettyPrint && prettyPrint();

    $(".history-back").on("click", function(e){
        e.preventDefault();
        history.back();
        return false;
    })
})


function headerPosition(){
    if ($(window).scrollTop() > $('header').height()) {
        $("header .navigation-bar")
            .addClass("fixed-top")
            .addClass("shadow")
        ;
    } else {
        $("header .navigation-bar")
            .removeClass("fixed-top")
            .removeClass("shadow")
        ;
    }
}

$(function() {
    if ($('nav > .side-menu').length > 0) {
        var side_menu = $('nav > .side-menu');
        var fixblock_pos = side_menu.position().top;
        $(window).scroll(function(){
            if ($(window).scrollTop() > fixblock_pos){
                side_menu.css({'position': 'fixed', 'top':'65px', 'z-index':'1000'});
            } else {
                side_menu.css({'position': 'static'});
            }
        })
    }
});

$(function(){
    setTimeout(function(){headerPosition();}, 100);
})

$(window).scroll(function(){
    headerPosition();
});

METRO_AUTO_REINIT = true;

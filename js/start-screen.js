/*!
 * Metro UI 4 Jekyll v2.0.31 (http://a-g-f.github.com/metro-ui-jekyll/)
 * A port of Metro UI CSS made for Jekyll maintained by Alfred G. Fischer
 * Metro UI CSS Copyright 2012-2014 Sergey Pimenov
 * Metro UI 4 Jekyll Copyright 2014 Alfred G. Fischer
 * Both licensed under http://opensource.org/licenses/MIT
 */

(function($) {
    $.StartScreen = function(){
        var plugin = this;

        plugin.init = function(){
            setTilesAreaSize();
            addMouseWheel();
        };

        var setTilesAreaSize = function(){
            var groups = $(".tile-group");
            var tileAreaWidth = 160;
            $.each(groups, function(i, t){
                tileAreaWidth += $(t).outerWidth()+46;
            });
            $(".tile-area").css({
                width: tileAreaWidth
            });
        };

        var addMouseWheel = function (){
            $("body").mousewheel(function(event, delta){
                var scroll_value = delta * 50;
                $(document).scrollLeft($(document).scrollLeft() - scroll_value);
                return false;
            });
        };

        plugin.init();
    }
})(jQuery);

$(function(){
    $.StartScreen();
});

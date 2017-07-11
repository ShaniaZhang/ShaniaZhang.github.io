/**
 * Created by zss on 2016/11/5.
 */
var $j = jQuery.noConflict();
(function($j) {
    'use strict';
    $j(document).ready(function() {
        //body高度自适应
        bacCover($j("body"));
        //启动页时间进度条
        $j(".time-bar p").addClass('wth100');
        //启动页时间计数器
        timeNumChg();

        function timeNumChg() {
            var timer = window.setInterval(function() {
                var timeNum = parseInt($j(".time-num span").html());
                $j(".time-num span").html(timeNum + 1);
                if (timeNum == 9) {
                    enterHomeTow(800);
                    return;
                }
            }, 1000);
        }
        //启动页点击next箭头
        $j(".my-sy-next").click(function() {
            enterHomeTow(800);
        });
        //启动页回车进入首页2
        $j("body").keypress(function(event) {
            if (event && event.keyCode != 13) {
                return;
            }
            enterHomeTow(800);
        });
        /**
         * [enterHomeTow description] 进入首页
         * @return {[type]} null
         */
        function enterHomeTow(animateTime) {
            var ft_height = $j('.my-body-bac.home-page-ft').height();
            $j(".my-body-bac.home-page-ft").css('top',-ft_height+'px');
            $j(".main-con-bg").css('height', ft_height + 'px');
            // $j(".my-body-bac.home-page-ft").stop().animate({ 'top': -ft_height + 'px' }, animateTime);
            // $j(".main-con").css({ 'margin-top': -ft_height + 'px', 'display': 'block' });
            setTimeout(function() {
                $j('body').removeClass("stop-scrolling");
                $j('.navbar').addClass("sticky-nav");
            }, animateTime);
        }
        // Sticky Header
        $j(window).scroll(function() {
            if ($j(this).scrollTop() > 50) {
                // $j('.navbar').addClass("sticky-nav");
                $j('.scroll-top').addClass("sticky-scroll-top");
            } else {
                // $j('.navbar').removeClass("sticky-nav");
                $j('.scroll-top').removeClass("sticky-scroll-top");
            }
        });
    });
    // Review Carousel
    $j('.review-carousel').owlCarousel({
        items: 1,
        autoPlay: true,
        // paginationSpeed:1200,
    });
    window.onresize = function() {
        //body背景自适应
        bacCover($j("body"));
    };
    //body背景自适应
    function bacCover(div) {
        if ($j(window).height() <= $j(document).height()) {
            div.css({ 'width': $j(window).width(), 'height': $j(window).height() });
        } else {
            div.css({ 'width': $j(window).width(), 'height': $j(window).height() });
        }
    }
})(window.jQuery);

/**
 * Created by zss on 2016/11/5.
 */
var $j = jQuery.noConflict();
$j(document).ready(function() {
    bacCover($j("body"));
    //首页时间进度条定时器
    timeChange();

    function timeChange() {
        var barWth = $j(".time-bar").width();
        var chgWth = barWth / 1000;
        var timer = window.setInterval(function() {
            var wth = $j(".time-bar p").width();
            if (wth >= barWth) {
                // $j(".my-body-bac.home-page-two").show();
                // $j(".my-sy").stop().animate({ 'top': -($j(window).height()) + 'px' }, 40);
                // setTimeout(function() {
                //     //css3动画
                //     $j(".my-pic-bk").removeClass("app-vs1").addClass("app-vs2");
                //     $j(".my-pc-sp").removeClass("pc-vs1").addClass("pc-vs2");
                // }, 800);
                enterHomeTow(40);
                return;
            }
            $j(".time-bar p").css({ "width": wth + chgWth });
        }, 10);
    }
    timeNumChg();

    function timeNumChg() {
        var timer = window.setInterval(function() {
            var timeNum = parseInt($j(".time-num span").html());
            if (timeNum >= 10) {
                return;
            }
            $j(".time-num span").html(timeNum + 1);
        }, 1000);
    }
    //首页点击next箭头
    $j(".my-sy-next").click(function() {
        enterHomeTow(800);
    });
    //首页1回车进入首页2
    $j("body").keypress(function(event) {
        if (event && event.keyCode != 13) {
            return;
        }
        enterHomeTow(800);
    });
    /**
     * [enterHomeTow description] 进入首页2
     * @return {[type]} null
     */
    function enterHomeTow(animateTime) {
        // $j(".my-body-bac.home-page-two").show();
        var ft_height=$j('.my-body-bac.home-page-ft').height();
        $j(".main-con-bg").css('height',ft_height+'px');
        $j(".my-body-bac.home-page-ft").stop().animate({ 'top': -ft_height + 'px' }, animateTime);
        $j(".main-con").css({'margin-top':-ft_height+'px','display':'block'});
        setTimeout(function() {
            $j('.navbar').addClass("sticky-nav");
            
        //     //css3动画
        //     $j(".my-pic-bk").removeClass("app-vs1").addClass("app-vs2");
        //     $j(".my-pc-sp").removeClass("pc-vs1").addClass("pc-vs2");
        }, animateTime);
    }
    // Sticky Header
    $j(window).scroll(function () {
      if ($j(this).scrollTop() > 50) {
        // $j('.navbar').addClass("sticky-nav");
        $j('.scroll-top').addClass("sticky-scroll-top");
      }
      else {
        // $j('.navbar').removeClass("sticky-nav");
        $j('.scroll-top').removeClass("sticky-scroll-top");
      }
    });
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

/**
 * Created by zss on 2016/11/5.
 */
var $j = jQuery.noConflict();
$j(document).ready(function() {
        $j(".front_box").click(function(){
            $j(".con-reg-center").addClass("hover").removeClass("hover1");
        });
        $j(".back_box").click(function(){
            $j(".con-reg-center").addClass("hover1").removeClass("hover");
        });
    //网页设计-Web图片滚动
    // $j("body").keydown(function(event) {
    //     var index = $j(".web-view-con ul li.web-view-cur").index();
    //     var top = $j(".web-display .img").position().top;
    //     if (event && event.keyCode != 40 || index == $j(".web-view-con ul li").length-1) {
    //         return; }
    //     $j(".web-view-con ul li").eq(index + 1).addClass("web-view-cur").siblings("li").removeClass("web-view-cur");
    //     $j(".web-display .img").stop().animate({"top":top-284+"px"},500);
    //     $j(".web-display-point i").eq(index+1).addClass("cur").siblings().removeClass("cur");
    // });
    // $j("body").keydown(function(event) {
    //     var index = $j(".web-view-con ul li.web-view-cur").index();
    //     var top = $j(".web-display .img").position().top;
    //     if (event && event.keyCode != 38 || index == 0) {
    //         return; }
    //     $j(".web-view-con ul li").eq(index - 1).addClass("web-view-cur").siblings("li").removeClass("web-view-cur");
    //     $j(".web-display .img").stop().animate({"top":top+284+"px"},500);
    //     $j(".web-display-point i").eq(index-1).addClass("cur").siblings().removeClass("cur");
    // });
    // $j(".web-view-con ul li").click(function(){
    //     $j(this).addClass("web-view-cur").siblings("li").removeClass("web-view-cur");
    //     var index = $j(".web-view-con ul li.web-view-cur").index();
    //     var top = Math.abs($j(".web-display .img").position().top);
    //     $j(".web-display .img").stop().animate({"top":-index*284+"px"},500);
    //     $j(".web-display-point i").eq(index).addClass("cur").siblings().removeClass("cur");
    // });

    // $j(".my-body-bac.my-work-web").css({ "background-size": $j(window).width() });
    // $j(".web-view-bac").css({ "height": $j(window).height() });
    // //折叠按钮
    // $j(".nav-fold-btn").click(function(){
    //     $j(".my-nav").slideToggle(400);
    // });
    // //body背景自适应
    // bacCover($j(".sy-bd"));
    // bacCover($j(".my-sy"));
    // bacCover($j(".my-body-bac"));
    // //首页时间进度条定时器
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
        var ft_height=$j('.home-page-ft').height();
        $j(".main-con-bg").css('height',ft_height+'px');
        $j(".home-page-ft").stop().animate({ 'top': -ft_height + 'px' }, animateTime);
        // $j(".main-con").stop().animate({ 'margin-top': -ft_height + 'px' ,'display':'block'}, animateTime);
        $j(".main-con").css({'margin-top':-ft_height+'px','display':'block'});
        // setTimeout(function() {
        //     //css3动画
        //     $j(".my-pic-bk").removeClass("app-vs1").addClass("app-vs2");
        //     $j(".my-pc-sp").removeClass("pc-vs1").addClass("pc-vs2");
        // }, 800);
    }
    // Sticky Header
    $j(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $j('.navbar').addClass("sticky-nav");
      }
      else {
        $j('.navbar').removeClass("sticky-nav");
      }
    });
});
window.onresize = function() {
    //body背景自适应
    bacCover($j(".my-body-bac.home-page-two"));
};
//body背景自适应
function bacCover(div) {
    if ($j(window).height() <= $j(document).height()) {
        div.css({ 'width': $j(window).width(), 'height': $j(window).height() });
    } else {
        div.css({ 'width': $j(window).width(), 'height': $j(window).height() });
    }
}

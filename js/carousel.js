/**
 * Created by zss on 2016/3/19.
 */
var $j = jQuery.noConflict();
$j(document).ready(function() {

    //获取轮播ID
    //var CarouselId;
//    var currentTimer;
//    var CarouselId1;
//    var CarouselId2;
//    var CarouselId3;
    //切换速度
    var speedT = 500;
    //延迟时间
    var delayT = 4000;

    var CarouselId = "Carousel";
    var CarouselId1 = "Carousel1";
    var CarouselId2 = "Carousel2";

    lb('#'+CarouselId);
    lb('#'+CarouselId1);
    lb('#'+CarouselId2);

    //轮播
    function lb(Carousel){
        var len = $j(Carousel+' .carousel-img ul').eq(0).find("li").length;
        var historyImgWidth=$j(Carousel+' .carousel-img ul li').eq(0).width();
        $j(Carousel+' .carousel-img ul').width(len*historyImgWidth);

        clone(Carousel+' .carousel-img ul');

        $j(Carousel+' .carousel-des-sp a').eq(0).show().siblings().hide();
        $j(Carousel+' .carousel-img ul').eq(0).find("li").eq(0).addClass("cur-li");

        $j(Carousel+' .opt-pre').click(function(){
            if(!$j(Carousel+' .carousel-img ul').is(':animated')) {
                clickPlay_left(Carousel+' .carousel-img ul', historyImgWidth,Carousel+' .carousel-img ul .cur-li');
                spChg(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-des-sp a');
            }

        });
        $j(Carousel+' .opt-next').click(function(){
            if(!$j(Carousel+' .carousel-img ul').is(':animated')) {
                clickPlay_right(Carousel+' .carousel-img ul', historyImgWidth,Carousel+' .carousel-img ul .cur-li');
                spChg(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-des-sp a');
            }

        });

        $j(Carousel+' .carousel-chg a').click(function () {
//            clickChg(Carousel+' .carousel-img ul');

            var startIndex = $j(Carousel+' .carousel-chg-cur').index();
            $j(this).addClass("carousel-chg-cur").siblings().removeClass("carousel-chg-cur");
            var index = $j(this).index();
            var offset=index-startIndex;

            for(var i=0;i<$j(Carousel+' .carousel-img ul').length;i++){
                var nowPositioin=$j(Carousel+' .carousel-img ul').eq(i).position().left;
                if(-nowPositioin>=$j(Carousel+' .carousel-img ul').eq(i).width()){
                    var left=$j(Carousel+' .carousel-img ul').eq(i).siblings().position().left;
                    $j(Carousel+' .carousel-img ul').eq(i).stop().css({'left':$j(Carousel+' .carousel-img ul').eq(i).width()+left+'px'},600);
                }
                var nowPositioin2=$j(Carousel+' .carousel-img ul').eq(i).position().left;
                $j(Carousel+' .carousel-img ul').eq(i).stop().animate({'left':nowPositioin2-historyImgWidth*offset+'px'},600);
                $j(Carousel+' .carousel-img ul').eq(0).find("li").eq(index).addClass("cur-li").siblings().removeClass("cur-li");
            }
            spChg(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-des-sp a');
        });

        function timePlay(div){
//            $j(Carousel+' .carousel-img ul li').eq(0).addClass("cur-li");
            if(!$j(div).is(':animated')){
                for(var i=0;i<$j(div).length;i++){
                    var nowPositioin=$j(div).eq(i).position().left;
                    if(-nowPositioin>=$j(div).eq(i).width()){
                        var left=$j(div).eq(i).siblings().position().left;
                        $j(div).eq(i).stop().css({'left':$j(div).eq(i).width()+left+'px'},speedT);
                    }
                        var nowPositioin2=$j(div).eq(i).position().left;

                        $j(div).eq(i).stop().animate({'left':nowPositioin2-historyImgWidth+'px'},speedT);

                }
                nextLi(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-img ul li',Carousel+' .carousel-chg a');
                spChg(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-des-sp a');
            }

        }
//        if('#Carousel13'!=Carousel) {
//            var timer = window.setInterval(function () {
//                timePlay(Carousel + ' .carousel-img ul');
//            }, delayT);
////        return timer;
//        }

        function clickPlay_right(div,imgwidth,curLi){
            if(!$j(div).is(':animated')){
                for(var i=0;i<$j(div).length;i++){
                    if($j(div).eq(i).position().left<=-$j(div).eq(i).width()){
                        var pervLeft= $j(div).eq(i).siblings().position().left;
                        $j(div).eq(i).css({'left':pervLeft+$j(div).eq(i).width()+'px'});
                    }
                    var historyContainer=$j(div).eq(i).position().left;
                    var news_position=historyContainer-imgwidth;
                    $j(div).eq(i).stop(true,true).animate({'left':news_position+'px'},speedT);
                }
            }
            var a=$j(curLi).index();
            //var index =a==4?0:a;
            var indexNext;
            if(a == len-1){
                indexNext=0;
            }else{
                indexNext=a+1;
            }
            moveT(indexNext,Carousel+' .carousel-chg a',Carousel+' .carousel-img ul li');
        }

        function clickPlay_left(div,imgwidth,curLi){
            if(!$j(div).is(':animated')){
                for(var i=0;i<$j(div).length;i++){
                    if($j(div).eq(i).position().left>=$j(div).parent().width()){
                        var pervLeft= $j(div).eq(i).siblings().position().left;

                        $j(div).eq(i).css({'left':-$j(div).eq(i).width()+pervLeft+'px'})
                    }
                    var historyContainer=$j(div).eq(i).position().left;
                    var news_position=historyContainer+imgwidth;
                    $j(div).eq(i).stop(true,true).animate({'left':news_position+'px'},speedT);
                }

            }
            var a=$j(curLi).index();
            //var index =a==4?0:a;
            var indexNext;
            if(a == 0){
                indexNext=len-1;
            }else{
                indexNext=a-1;
            }
            moveT(indexNext,Carousel+' .carousel-chg a',Carousel+' .carousel-img ul li');

        }

        function nextLi(curLi,curImg,num){
            var a=$j(curLi).next().index();
            //        a=(a+4)%4;
            if($j(curLi).index()<len-1){
                $j(curLi).next().addClass("cur-li").siblings().removeClass("cur-li");
                var i = $j(curLi).index();
                $j(num).eq(i).addClass("carousel-chg-cur").siblings().removeClass("carousel-chg-cur");
            }
            else{
                $j(curImg).eq(0).addClass("cur-li").siblings().removeClass("cur-li");
                var i = $j(curLi).index();
                $j(num).eq(i).addClass("carousel-chg-cur").siblings().removeClass("carousel-chg-cur");
            }
        }
        //序号，当前图片切换
        function moveT(indexNext,num,curImg){
            $j(num).eq(indexNext).addClass("carousel-chg-cur").siblings().removeClass("carousel-chg-cur");
            $j(curImg).eq(indexNext).addClass("cur-li").siblings().removeClass("cur-li");
        }
        //文字改变
        function spChg(CurLi,imgSp) {
            var chg_index = $j(CurLi).index();
            $j(imgSp).eq(chg_index).show().siblings().hide();
            $j(imgSp).eq(chg_index).find(".ly-chg-num span").html("0"+(chg_index+1));
        }
        //鼠标移入移出控制暂停或继续滚动
//        $j(Carousel).mouseover(function(){
//            clearInterval(timer);
//        });
//        $j(Carousel).mouseout(function(){
//            if('#Carousel13'!=Carousel) {
//                timer = window.setInterval(function () {
//                    timePlay(Carousel + ' .carousel-img ul');
//                }, delayT);
//            }
//        });



    }
    //end 轮播

    function clone(div){
        var divclone=$j(div).clone();
        $j(div).after(divclone);
        var divWidth=$j(div).width();
        for(var i=0;i<$j(div).parent().children().length;i++){
            $j(div).parent().children().eq(i).css({'left':divWidth*i+'px'});
        }
    }



});



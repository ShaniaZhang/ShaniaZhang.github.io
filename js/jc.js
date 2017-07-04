/**
 * Created by zss on 2016/2/26.
 */
var $jq = jQuery.noConflict();
$jq(document).ready(function (){
    //要闻
    marginLeft($jq(".lf-tb-deal"));
    function marginLeft(div1) {
        for(var i=0;i<div1.length;i++){
            var img_wth = div1.eq(i).find(".tb-con-pc").width();
            div1.eq(i).find(".tb-con-rt").css("margin-left",img_wth+"px");
        }

    }
    //首页顶部下拉
    selectBox($jq('.top-sel-deal'),$jq('.top-sel-deal ul'));

    $jq(".top-sel-deal").click(function () {
        if($jq(this).hasClass("sel_op")){$jq(this).removeClass("sel_op");}
        else{$jq(".top-sel-deal").removeClass("sel_op");$jq(this).addClass("sel_op");}
    });

    $jq(document).click(function(){
        if($jq(".top-sel-deal ul").css('display')=='block') {
            $jq(".top-sel-deal").removeClass("sel_op");
        }
    });

    function selectBox(div1,div2){
        div1.click(function(event){
            event.stopPropagation();
            var Index = div1.index(this);

            if(div2.eq(Index).css('display')=='block'){
                div2.eq(Index).hide();
            }
            else{
                div2.hide();
                div2.eq(Index).show();
            }
            if(div2.eq(Index).css('display')=='block'){
                $jq(document).click(function(){
                    div2.hide();
                    div1.removeClass("sel_op");
                });
//                $jq('li a',div2).click(function(){
//                    var text=this.innerHTML;
//                    $jq(this).parent().parent().prev().text(text);
//                });
            }
        });
    }
    //tab切换
    tabChg($jq(".ya-fw-link .fw-link-tit li"),$jq(".fw-lk-ls"),"fw-lk-cur");
    tabChg($jq(".yw_mNav ul li"),$jq(".lf-tb-bk"),"tb-tit-cur");

    function tabChg(tabLi,parentDiv,clazz) {
        var ld_tab = tabLi;
        var ld_con = parentDiv.children();
        ld_tab.hover(function(){
            ld_con.eq(ld_tab.index(this)).show().siblings().hide();
            $jq(this).addClass(clazz).siblings().removeClass(clazz);
        });
    }
    //图片放缩
    scrollImg($jq(".bz-lf-cy img"));
    scrollImg($jq(".kd-con-lf .kd-deal-pc img"));
    scrollImg($jq(".kd-rt-bk .kd-deal-pc img"));
    scrollImg($jq(".kt-pc-bk ul li img"));

    function scrollImg(img){
        var wth = img.width();
        var hei = img.height();
        var wth2 = wth + 10;
        var hei2 = hei + 10;

        img.hover(function(){
            $jq(this).stop().animate({height:hei2,width:wth2,left:"-5px",top:"-5px"},300);
        },function(){
            $jq(this).stop().animate({height:hei,width:wth,left:"0px",top:"0px"},300);
        });
    }
    //限制文本字数
    txtLimit($jq(".bz-rt-ls li p"),56,'...');
    txtLimit($jq(".bz-bl-sp"),80,'...');
    txtLimit($jq(".yw-ls-rt p"),80,'...');
    txtLimit($jq(".kd-deal-sp p span"),85,'...');
    txtLimit($jq("#Carousel4 .carousel-des-sp a span"),60,'...');
    txtLimit($jq(".yw_s_p"),50,'...');
    txtLimit($jq(".bs-rt-bk p"),32,'...');
    txtLimit($jq(".tb-con-rt p"),110,'...');
    txtLimit($jq(".fa_top_p"),62,'...');
    txtLimit($jq(".yn_top_ul li p"),65,'...');
    txtLimit($jq(".fc_top_new p"),90,'...');
    txtLimit($jq(".jk-content1-tab-list .jk-content1-rt-content p"),80,'...');
    txtLimit($jq(".jk-content3-tab-content .jk-content1-rt-content p"),75,'...');
    txtLimit($jq(".jk-content4-lf1 .jk-content1-rt-content p"),70,'...');
    txtLimit($jq(".jk-content1-rt-content p"),60,'...');

    function txtLimit(div,num,point) {
        for(var i=0;i<div.length;i++){
            var news_txt = div.eq(i).text();
            if(news_txt.length>=num){
                var  txt = news_txt.substr(0,num)+point;
                div.eq(i).text(txt);
            }
        }
    }
    //悬浮框
    if($jq(document).width()<=1480){
        $jq(".ya-fixed-box").css({'left':$jq(window).width()-60+'px','margin-left':0+'px'});
    }
    //回到顶部
    $jq(window).scroll(function () {
        if ($jq(window).scrollTop() > 220) {
            $jq(".ya-fixed-box").css("display","block")
        }else{
            $jq(".ya-fixed-box").css("display","none")
        }
    });
    $jq(".ya-back-top").click(function () {
//        var scrollTop = $jq(document).scrollTop()/3;
        $jq('body,html').animate({ scrollTop: 0 }, 700);
        return false;
    });

    $jq(".ya-fixed-ew").mouseover(function () {
        $jq(".ew-pop-img").show();
    });
    $jq(".ya-fixed-ew").mouseout(function () {
        $jq(".ew-pop-img").hide();
    });
    //头条切换
    imgChg($jq('.ya-hl-bk'));
    imgChg($jq('#Carousel3 ul'));
    imgChg($jq('#Carousel17 ul'));

    function imgChg(div) {
        var len = div.parent().find(".ya-hl-chg a").length;
        var i=0;
        div.children().eq(0).show().siblings().hide();
        //这是点击切换
        var chg = div.parent().find('.ya-hl-chg a');
        chg.click(function(){
            div.children().eq(chg.index(this)).fadeIn(700).siblings().hide();
            $jq(this).addClass("ya-hl-cur").siblings().removeClass("ya-hl-cur");
            i=chg.index(this);

        });
        //这是循环播放\
        function b(){
            i++;
            if(i>len-1){i=0;};
            div.children().eq(i).fadeIn(700).siblings().hide();
            $jq(chg.eq(i)).addClass("ya-hl-cur").siblings().removeClass("ya-hl-cur");
        };
        //在这里设定 滚动的时间间隔
        var timer = setInterval(b,5000);
    }


});
//酷图hover
$jq(function(){
    var len = $jq("#Carousel6 .carousel-img").length;
    $jq("#Carousel6 .opt-pre").click(function(){
        var i=$jq("#Carousel6 .disblock").index();
        $jq(this).parent().find(".carousel-img").eq(i-1).addClass("disblock").siblings(".carousel-img").removeClass("disblock");
    });
    $jq("#Carousel6 .opt-next").click(function(){
        var i=$jq("#Carousel6 .disblock").index();
        if(i<len-1){
        $jq(this).parent().find(".carousel-img").eq(i+1).addClass("disblock").siblings(".carousel-img").removeClass("disblock");
        }else{$jq(this).parent().find(".carousel-img").eq(0).addClass("disblock").siblings(".carousel-img").removeClass("disblock");
        }
    });

    $jq("#Carousel6 .carousel-img ul li").css("height","310px");
    $jq("#Carousel6 .carousel-img ul .kt-pc-cur").css("margin-top","0px");
    $jq("#Carousel6 .carousel-img ul .kt-pc-cur img").css("height","310px");
    $jq("#Carousel6 .carousel-img ul li").hover(function(){

        $jq(this).animate({'margin-top':'0'},150).siblings().animate({'margin-top':'20px'},150);
        $jq(this).find("img").animate({'height':'310px'},170).parent().parent().siblings().find("img").animate({'height':'270px'},170);
        $jq(this).addClass("kt-pc-cur").siblings("li").removeClass("kt-pc-cur");
    });
});

window.onresize=function(){
//    fix_box
    if($jq(window).width()<=1480){
        $jq(".ya-fixed-box").css({'left':$jq(window).width()-60+'px','margin-left':0+'px'});
    }else{
        $jq(".ya-fixed-box").css({'left':50+'%','margin-left':614+'px'})
    }

}



//要问
$jq(function(){
    $jq('.yw_sF span:first').addClass('yw_sF_action');
    tab2('.yw_sF span');
    function tab2(mouseNode){
        $jq(mouseNode).hover(function(){
            $jq(mouseNode).removeClass("yw_sF_action");
            $jq(this).addClass("yw_sF_action");
            $jq(this).parent().siblings(".yw_sS_content").css("display","none");
            $jq(this).parent().siblings(".yw_sS_content").eq($jq(this).index()-1).css("display","block");
        })
    };
})

//要闻右侧关注下拉滚动
window.onload = function(){
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function(className, element) {
            var children = (element || document).getElementsByTagName('*');
            var elements = new Array();
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var classNames = child.className.split(' ');
                for (var j = 0; j < classNames.length; j++) {
                    if (classNames[j] == className) {
                        elements.push(child);
                        break;
                    }
                }
            }
            return elements;
        };

    }
    function hidden_char(node, show) {
        for (var i = 0; i < node.length; i++) {
            var node_str = node[i].innerHTML;
            if (node_str.length > show) {
                var show_str = node_str.substr(0, show) + "...";
                node[i].innerHTML = show_str;
            }
        }
    }
    var yw_p = document.getElementsByClassName('yw_pWords');
    var yw_sWords = document.getElementsByClassName('yw_sWords');
    var yw_nWords = document.getElementsByClassName('yw_nWords');
    var yw_s_p = document.getElementsByClassName('yw_s_p');
    var yw_side_p = document.getElementsByClassName('yw_side_p');
    hidden_char(yw_p, 110);
    hidden_char(yw_sWords,150);
    hidden_char(yw_nWords,55);
    hidden_char(yw_s_p,45);
    hidden_char(yw_side_p,25);
}

//专题
$jq(function(){
//    var navA = $jq('.zt_nav ul li a');
//    navA.click(function(){
//        navA.removeClass('zt_nav_action');
//        $jq(this).addClass('zt_nav_action');
//    });
//    var ztPic = $jq('.zt_pic img').width();
//    var ztSec = $jq('.zt_section');
//    for(var i=0;i<ztSec.length;i++){
//        if(ztSec.eq(i).find('.zt_pic').length > 0){
//            ztSec.eq(i).find('.zt_ul').css('margin-left',ztPic+28+'px');
//        }
//    };
//
//    var fcPic = $jq('.fc_main_section a img').width();
//    var fcSec = $jq('.fc_main_section');
//    for(i=0;i<fcSec.length;i++){
//        if(fcSec.eq(i).find('a img').length > 0){
//            fcSec.eq(i).find('ul.fc_main_ul').css('margin-left',fcPic +21+'px');
//        }
//    }
    wordsMargin('.zt_section',28);
    wordsMargin('.fc_main_section',21);

//自适应margin-left
    function wordsMargin(section,marginNum){
        for(i=0;i<$jq(section).length;i++){
            var imgWidth = $jq(section).find('img').width();
            if($jq(section).eq(i).find('img').length>0){
                $jq(section).eq(i).find('ul').css('margin-left',imgWidth+marginNum+'px')
            }
        }
    };

    //雅女tab切换
    $jq('.p_tnav a').hover(function(){
        $jq(this).parent().find('a').removeClass('p_tnav_action');
        $jq(this).addClass('p_tnav_action');
        $jq(this).parent().parent().parent().find('.p_content').css('display','none');
        $jq(this).parent().parent().siblings('.p_content').eq($jq(this).index()).css('display','block');
    });

    //  旅游
//    var navLy = $jq('.ly_nav_ul li a');
//    navLy.click(function(){
//        navLy.removeClass('ly_nav_action');
//        $jq(this).addClass('ly_nav_action');
//    });

    $jq('.lyTnavAdd a').hover(function(){
        $jq(this).parent().find('a').removeClass('ly_tnav_action');
        $jq(this).addClass('ly_tnav_action');
        $jq(this).parent().parent().parent().find('.p_content').css('display','none');
        $jq(this).parent().parent().siblings('.p_content').eq($jq(this).index()).css('display','block');
    })

    function lyNavHover(navP,className,displayBlock){
        $jq(navP).hover(function(){
            $jq(this).parent().find('p').removeClass(className);
            $jq(this).addClass(className);
            $jq(this).parent().siblings(displayBlock).css('display','none');
            $jq(displayBlock).eq($jq(this).index()).css('display','block');

        })
    };
    lyNavHover('.ly_xz_sn2 p','xz_p_action','.xz_left_content');
    lyNavHover('.ly_dt_sn2 p','xz_p_action','.yn_ss');

    $jq('.wz_right_a a').hover(function(){
        $jq(this).parent().find('a').removeClass('wz_a_action');
        $jq(this).addClass('wz_a_action');
        $jq(this).parent().siblings('ul').css('display','none');
        $jq(this).parent().siblings('ul').eq($jq(this).index()).css('display','block');
    })
})



//酷图细览轮播
$jq(window).ready(function(){
    // 给图片添加序号
    var pic_des_num = toDouble($jq(".tx-slide-b-list li").length);
    $jq(".tx-pic-des-day").text(pic_des_num);
    $jq(".tx-pic-des-month").each(function(){
        var pic_des_index = toDouble($jq(".tx-pic-des-month").index(this)+1);
        $jq(this).text(pic_des_index);
    })

    // 图片轮播绑定
    $jq(".tx-container").getSlide();
})
$jq.fn.extend({
    getWidth : function(){										//设置宽度
        $jq(this).width($jq(this).children().length*$jq(this).children().outerWidth(true));
    },
    getSlide : function(){										//设置滑动
        var b_list = $jq(this).find(".tx-slide-b-list");			//小图列表
        var s_list = $jq(this).find(".tx-slide-s-list");			//小图列表
        var prev_btn = $jq(this).find("span.tx-slide-prev");		//左滑按钮
        var next_btn = $jq(this).find("span.tx-slide-next");		//右滑按钮
        var _this = $jq(this);
        var len = $jq(this).find(".tx-slide-b-list li").length;	//图片列表长度
        var b_dis = b_list.find("li").outerWidth(true);			//大图列表宽度
        var s_dis = s_list.find("li").outerWidth(true);			//小图列表宽度
        var timer = null;
        var show_index = 0;										//当前展示图片序号
        var list_index = 0;										//小图列表当前最左图片序号
        var speed = 500;										//图片滑动速度

        b_list.getWidth();										//大图列表定宽度
        s_list.getWidth();										//小图列表定宽度

        prev_btn.click(function(){								//向左按钮点击事件
            if (show_index>0) {
                show_index--;
                slide_move();
            };
        });
        next_btn.click(function(){								//向右按钮点击事件
            if (show_index<len-1) {
                show_index++;
                slide_move();
            };
        });
        s_list.find("li").click(function(){						//小图列表图片点击事件
            show_index = $jq(this).index();
            slide_move(0);
        })

        function slide_move(speed){
            $jq(".tx-slide-b-list li").stop().animate({"left":-b_dis*show_index},speed);										//大图列表滑动
            $jq(".tx-pic-des").eq(show_index).addClass("checked").siblings(".checked").removeClass("checked")					//文字描述变化
            $jq(".tx-slide-s-list li").eq(show_index).addClass("checked").siblings(".checked").removeClass("checked");	//小图列表边框样式


            if (show_index>list_index+2) {														//判断小图列表是否向右翻页
                if (show_index<=len-2) {														//判断右侧是否有足够的图片可以显示
                    list_index +=3;																//可以显示则滑动3张图片
                    $jq(".tx-slide-s-list").animate({"left":-s_dis*list_index});
                }else{																			//不可以则滑到结尾
                    list_index = len-3;
                    $jq(".tx-slide-s-list").animate({"left":-s_dis*list_index});
                }
            }else if (show_index<list_index){													//判断小图列表是否向左翻页
                if (list_index>2) {																//判断左侧是否有足够的图片可以显示
                    list_index -= 3;															//可以显示则滑动3张图片
                    $jq(".tx-slide-s-list").animate({"left":-s_dis*list_index});
                }else{																			//不可以则滑到第一张
                    list_index = 0;
                    $jq(".tx-slide-s-list").animate({"left":-s_dis*list_index});
                }
            }
        }
    }
})
function toDouble(num){							// 把一位数字变成两位
    num = num.toString().length>1 ? num : "0"+num;
    return num;
}

//健康
$jq(window).ready(function(){
    $jq(".jk-content1-tab li").getTab(".jk-content1-tab-list");
    $jq(".jk-content2-tab li").getTab(".jk-content2-content");
    $jq(".jk-content3-tab li").getTab(".jk-content3-tab-content");
    $jq(".jk-content4-tab li").getTab(".jk-content4-tab-list")
    $jq(".yh-cont2-tab li").getTab(".yh-cont2-content");

})
$jq.fn.extend({
    getTab : function(target){
        $jq(this).hover(function(){
            $jq(this).addClass("checked").siblings(".checked").removeClass("checked");
            $jq(target).eq($jq(this).index()).addClass("checked").siblings(".checked").removeClass("checked");
        })
    }
})
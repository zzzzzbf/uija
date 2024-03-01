$(document).ready(function() {
	//banner
    let swiperBanner =  document.querySelector(".swiper");

    if(swiperBanner!=null){
        $('.swiper-container-banner').swiper({pagination: '.swiper-pagination-banner li',slidesPerView: 1,paginationClickable: true,spaceBetween: 0,autoplay:5500,speed: 800, autoplayDisableOnInteraction:false,nextButton: '.swiper-button-next-banner',prevButton: '.swiper-button-prev-banner'});
        var swiper = new Swiper('.swiper-container-menu', {
            slidesPerView: 5,
            slidesPerColumn: 1,
            spaceBetween: 0,
            autoplay:4000,
            preventClicks : false,
            nextButton: '.swiper-button-next-menu',
            prevButton: '.swiper-button-prev-menu',
            paginationClickable: true,
            breakpoints: {
                991: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                567: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                372: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                }
            }
        });

        var swiper = new Swiper('.swiper-container-pro', {
            slidesPerView: 4,
            slidesPerColumn: 1,
            spaceBetween: 20,
            autoplay:4000,
            preventClicks : false,
            nextButton: '.swiper-button-next-pro',
            prevButton: '.swiper-button-prev-pro',
            paginationClickable: true,
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                567: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                372: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                }
            }
        });

        //产品详情页 多图轮播 手机
        var galleryTop = new Swiper('.gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
            loop:true,
            loopedSlides: 4, //looped slides should be the same
            initialSlide :0,  //设定初始化时slide的索引。
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 3,
            loop:true,
            loopedSlides: 4, //looped slides should be the same
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            initialSlide :0,  //设定初始化时slide的索引。
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    }

    //计算navbar宽度
    function menuwidth(){
        var width=$(".nav" ).width();
        var size=$(".nav > ul > li").size();
        $(".nav > ul > li").css("width",Math.floor(width/size)/3+"px");
    }
    setTimeout(menuwidth,100);
    $(window).resize(function () {
        menuwidth();
    })

    //nav横向下拉菜单栏
    $("ul.one li").hover(function(){
        $(this).addClass("cu")
        $(this).find(".two_box").css('display', 'flex');
        $(this).find(".two_box").css('display', '#00000099');

        if ( $(this).index() > 3 ) {
        	$(this).find(".two_box").css('right', '0');
        } else{
        	$(this).find(".two_box").css('left', '0');
        };

        $(this).find(".two_box").stop(false,true).slideDown("400")
    },function(){
        $(this).removeClass("cu")
        $(this).find(".two_box").stop(false,true).slideUp("400")
    });

    $(".search_icon").click(function(event) {
    	$(this).siblings('.search_box').slideToggle(400);
    });
    $(".msearch").click(function(event) {
    	$(this).siblings('.msearch_box').slideToggle(400);
    });



    $(".linker ul li a").click(function(event) {
    	$(this).find('em').toggleClass('close_em');
    	$(this).siblings('.linker_list').slideToggle(300)
    });

    //侧边点击 滚回头部
    $(window).scroll(function () {
        var sT = $(window).scrollTop();
        if (sT >200) {
            $(".totop").addClass("on");
        } else {
            $(".totop").removeClass("on");
        }
    });
    $(".totop").click(function(){
        $("html,body").animate({scrollTop:'0px'},800);
    });

    //隐藏导航跟wrap的切换（作废）
    // $(".nav_button").click(function(){
    //     $(".class").removeClass("page-prev").addClass("page-in on");
    //     $(".wrap").removeClass("page-active").addClass("page-next page-in")
    //     $(".opacity").show()
    //     pageSlideOver();
    // })
    // $(".opacity").on('click touchstart',function(){
    //     $(".class").addClass("page-prev page-out").removeClass('on')
    //     $(".wrap").removeClass("page-next").addClass(" page-out")
    //     $(".opacity").fadeOut();
    //     pageSlideOver();
    // })
    // function pageSlideOver(){
    //     $('.page-out').on('transitionend', function(){
    //         $(this).removeClass('page-out');
    //     });
    //     $('.page-in').on('transitionend', function(){
    //         $(this).removeClass('page-in');
    //     });
    // }

    $(".m_two").siblings('a').append('<span></span>');
    $(".m_three").siblings('a').append('<span></span>');
    $(".m_four").siblings('a').append('<span></span>');
    //快速导航二级&三级展开
    $(".m_list ul.m_one>li>a").click(function(event) {
        $(this).addClass('cu1')
        $(this).parent().siblings().find('a').removeClass('cu1')
        $(this).find('span').toggleClass('close_one')
        $(this).parent().siblings().find('span').removeClass('close_one');
        var a = $(this).attr('href').toString();
        if (a == "javascript:;") {
            $(this).siblings('.m_two').animate({'left':'0'});
            $(this).parent().siblings().find('.m_two').animate({'left':'100%'});
        };
    });
    $(".m_list ul.m_two>li>a").click(function(event) {
        $(this).addClass('cu2')
        $(this).parent().siblings().find('a').removeClass('cu2')
        $(this).find('span').toggleClass('close_one')
        $(this).parent().siblings().find('span').removeClass('close_one');
        var a = $(this).attr('href').toString();
        if (a == "javascript:;") {
            $(this).siblings('.m_three').animate({'left':'0'});
            $(this).parent().siblings().find('.m_three').animate({'left':'100%'});
        };
    });
    $(".m_list ul.m_three>li>a").click(function(event) {
        $(this).addClass('cu2')
        $(this).parent().siblings().find('a').removeClass('cu2')
        $(this).find('span').toggleClass('close_two')
        $(this).parent().siblings().find('span').removeClass('close_two');
        var a = $(this).attr('href').toString();
        if (a == "javascript:;") {
            $(this).siblings('.m_four').animate({'left':'0'});
            $(this).parent().siblings().find('.m_four').animate({'left':'100%'});
        };
    });
    //快速导航返回上级
    $(".class_back").click(function(event) {
        $(this).parent().animate({'left':'100%'});
        $(this).siblings('li').find('a').removeClass('cu1')
        $(this).siblings('li').find('a').removeClass('cu2')
        $(this).siblings('li').find('span').removeClass('close_one')
        $(this).siblings('li').find('span').removeClass('close_two')
    });

    //
    $(".second").siblings('a').append('<span></span>');
    $(".third").siblings('a').append('<span></span>');

    //隐藏菜单栏 展开
    $(".left_list .first>li>a").click(function() {
        $(this).addClass('cu1')
        $(this).find('span').toggleClass('close_one').parent().parent().siblings().find('span').removeClass('close_one');
        $(this).parent().siblings().find('a').removeClass('cu1')
        $(this).parent().siblings().find('.second a').removeClass('cu2')
        $(this).parents(".left_list").find('li').removeClass('bg1');
        $(this).parents(".left_list").find('span').removeClass('close_two');
        $(this).parent().addClass('bg').siblings().removeClass('bg');
        $(this).parent().siblings().find('.second,.third').slideUp();
        $(this).siblings('.second').slideToggle();
    });
    $(".left_list .second>li>a").click(function() {
        $(this).addClass('cu2')
        $(this).find('span').toggleClass('close_two').parent().parent().siblings().find('span').removeClass('close_two');
        $(this).parent().siblings().find('a').removeClass('cu2')
        $(this).parents(".left_list").find('li').removeClass('bg1');
        $(this).parent().addClass('bg1').siblings().removeClass('bg1');
        $(this).parent().siblings().find('.third').slideUp();
        $(this).siblings('.third').slideToggle();
    });

    //手机 展开分类
    $(".classify").click(function() {
        $('.left_list').slideToggle(400);
        $(this).toggleClass('close_c');
    });



    $(".about_area .about_item,.search_list ul li").each(function(index, el) {
        var itime = index/10 + 's';
        $(this).attr('data-wow-delay', itime);
    });
    $(".case_middle").addClass('fadeIn wow');
    $(".menu,.head_bt,.pro_slide,.copyright,.right_below,.search_list ul li").addClass('fadeInUp wow');
    $(".head_nr,.left,.hint").addClass('fadeInDown wow');
    $(".case_right,.site_map").addClass('fadeInLeft wow');
    $(".about_item,.case_left,.contact,.others,.right_top").addClass('fadeInRight wow');
    // $(".news_data").addClass('bounceInUp wow');
    $(".news_data").addClass('bounceInLeft wow');
    $(".news_show").addClass('bounceInRight wow');
    // $(".news_show").addClass('rotateInDownLeft wow');

    // 鼠标滚动渐入
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };

});
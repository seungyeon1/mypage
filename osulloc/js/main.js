$(function(){

    // Top button popup Start------------------------------------
    var topMove = function(){
        $('body, html').animate({
                scrollTop: 0
            },300);
    };

    $('.top_button a').click(topMove)

    // header scroll mooving-----------------------------------
	$(window).scroll(function(){
		var scrolltop = $(this).scrollTop();
        var headers =$('#header').height();


        if(headers < scrolltop &&  !$('#header').is('.topAtive')){
            $('#header').addClass('topAtive')

            $('.top_button a').stop().animate({
                right: '15px'
            },500)
            $('#header').css({
                'top': - 45 +"px"
            })
            $('.logo > a > img').css({
                'width':72 + 'px',
                'height':24 + 'px',
                'position':'relative',
                'top':15 + 'px'
            })
        }else if(headers > scrolltop &&  $('#header').is('.topAtive')){

             $('#header').removeClass('topAtive')
             $('.top_button a').stop().animate({
                right: '-65px'
            },500)
            $('.logo > a > img').css({
                'width':120 + 'px',
                'height':40 + 'px',
                'position':'absolute',
                'top':13 + 'px',
                'left':'0'
            })
            $('#header').css({
                'top': '0'
            })

        }

	})

	$('.nav > ul').stop().mouseenter(function(){
	    $('.header_line').slideToggle();
	})
	$('.nav > ul').stop().mouseleave(function(){
	    $('.header_line').slideToggle();
	})

    // header selcet option btn------------------------------------------
    $(".selectmenu > a").click(function(){
       $(this).toggleClass("on");
       $(".selectmenu > ul").toggleClass("on");
       return false;
    });
    $("body").click(function(){
        $(this).removeClass("on");
       $(".selectmenu > ul").removeClass("on");
    });


    // main_slide Start---------------------------------------------

    var idx = 0;

    function movement (start, end, select){

        $('.main_slide > ul > li').eq(select).css({
            'display':'block',
            'left':start

        }).stop().animate({
            'left':end

        }).parent().children('.a_button').children('a').eq(select).addClass('on').siblings().removeClass('on')




        if(select == $('.main_slide ul li').length){
            idx = 0;
            movement ("100%","0",idx);



        }else if(select < 0 ){
            idx = $('.main_slide ul li').length-1;
            movement ("-100%","0",idx);
        }
    }

    $('.slide_btn .next a').click(function(){
        movement ("0","-100%",idx);
        idx++;
        movement ("100%","0",idx);
        return false;
    })

    $('.slide_btn .pre a').click(function(){
        movement ("0","100%",idx);
        idx--;
        movement ("-100%","0",idx);

        return false;
    })
    $('.main_slide .a_button a').click(function(){

        idx =  $(this).index()
        var his = $('.main_slide .a_button a.on').index();
        $(this).addClass('on').siblings().removeClass('on')




        if(idx < his){

            movement("0","100%",his)
            movement("-100%","0",idx)

        }else if(idx > his){
        	movement("0","-100%",his)
        	movement("100%","0",idx)

        }
        return false;
    })

    var play = setInterval(function(){
        $('.slide_btn .next a').click();

    },4500)


    $('.main_slide').mouseenter(function(){

    clearInterval(play);

    }).mouseleave(function(){

        play = setInterval(function(){


            $('.slide_btn .next a').click();


        },4500);

    });


    // Question fade slide Start---------------------------------------------------

    $('.question_section > .on').css('display','block');


    $('.question_a a').click(function(){
        var hisidx = $('.question_section .on').index();
        var idx = $(this).index();

        $('.question_section > p').eq(hisidx).removeClass('on').fadeOut(function(){

           $('.question_section > p').eq(idx).addClass('on').fadeIn()

        })

        $('.question_section .question_a > a').eq(idx).addClass('on').siblings().removeClass('on')

        return false;
    })



    // question rolling banner Start--------------------------------------------

    var rolling = setInterval(function(){

		var idxzz = $('.question_section > .on').index();

		if( idxzz == ($('.question_section > p').length-1)){

			$('.question_a').children('a').eq(0).click();

		}else{

		    $('.question_a').children('a').eq(idxzz + 1).click();

		}
	},4000);


// 	sub_slide Start--------------------------------------------------------------

    idxsss=0;

    $('.sub_slide_button .ss_next').click(function(){

        var a = $('.sub_slide > ul > li');
        var viewThumb = 4;
        var liWidth = ( a.width() + 42) * viewThumb;
        count = a.length / 4

        idxsss++;

        if(idxsss >= count){
            idxsss = count - 1
            return
        }else{
            $('.sub_slide > ul').animate({
                left:'+=' + - liWidth +'px'
            })
        }

        $('.sub_slide .a_button > a').eq(idxsss).addClass('on').siblings().removeClass('on')
    })

    $('.sub_slide_button .ss_pre').click(function(){

        var a = $('.sub_slide > ul > li');
        var viewThumb = 4;
        var liWidth = ( a.width() + 42) * viewThumb;
        count = a.length / 4

        idxsss--;

        if(idxsss < 0){
            idxsss = 0
            return
        }else{
            $('.sub_slide > ul').animate({
                left:'-=' + - liWidth +'px'
            })
        }
        $('.sub_slide .a_button > a').eq(idxsss).addClass('on').siblings().removeClass('on')
    })




    $('.a_button > a').click(function(){

        idxsss = $(this).index();
        var a = $('.sub_slide > ul > li');
        var viewThumb = 4;
        var liWidth = ( a.width() + 42) * viewThumb;

        console.log(idxsss)
        console.log(a)
        console.log(liWidth)


        $(this).parent().children('a').eq(idxsss).parents('.sub_slide').children('ul').animate({
            left: idxsss * - liWidth
        })
        $('.sub_slide .a_button > a').eq(idxsss).addClass('on').siblings().removeClass('on')

        return false;

    })

})

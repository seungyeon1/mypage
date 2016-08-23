$(function(){

        var spot=[]

        $('.Main_slider ,.second_content,.third_gallerylist_content').each(function(i,e){
            spot.push($(this).offset().top)
        })


        $('.header_nav a').click(function(){
        var idx =$(this).parent().index();
        $('html,body').animate({
            scrollTop:spot[idx]
        })
        return false;
        })

        $(window).scroll(function(){

            var sct = $(this).scrollTop();

            $('.Main_slider ,.second_content,.third_gallerylist_content').each(function(i){

                if(sct >= spot[i]){
                    $('.header_nav li').eq(i).addClass('on').siblings().removeClass('on');
                }else{
                    $('.header_nav li').eq(i).removeClass('on');
                }

            })
        })
   //-------------------------------------------------------------------------------------------//
       var idx=0;
        function setFn(){

       var idx1 = $('.on1').index();

            if( idx1 === ( $('.Main_slider ul li').length - 1) ){

              $('.Main_slider ul li').eq(0).children('a').click();

            }else{

               $('.Main_slider ul li').eq(idx1 + 1).children('a').click();

           }
        }

       function movement(start,end,selector){

           $('.Main_slider li').eq(selector).children('img').css({
               'display':'block',
               'left':start
           }).stop().animate({
               left:end
           }).parent().addClass('on1').siblings().removeClass('on1')

           if(selector == $('.Main_slider li').length){
               idx=0;
               movement("100%","0",idx);
           }else if(selector < 0){
               idx=$('.Main_slider li').length -1;
               movement("-100%","0",idx);
           }
       }

       var goStop = 0;

        $('.Main_slider a').click(function(){


            idx = $(this).parent().index();
            var hisidx = $('.Main_slider .on1').index();

            movement("0","-100%",hisidx);
            movement("100%","0",idx);
            if(goStop == 1){
                goStop = 0;
                autoslide = setInterval(function(){setFn();},4000);
            }
            return false;
        })

        var autoslide = setInterval(function(){setFn();},4000);


         $('.Main_slider .stopimg').click(function(){
            goStop = 1;
            clearInterval(autoslide);

        })

 //---------------------------------------------------------------------------//
        $('.frame').mouseover(function(){
            $(this).find('.frame_hover').css({
                display:'block'
            })

        })
        $('.frame').mouseleave(function(){
            $('.frame_hover').css({
                display:'none'
            })
        })


        $('.frame').click(function(){
            $(this).parents('.charm_list').next().next().next().css({
                display:'block'
            })
            $('.bg').css({
                display:'block'
            })

            $('html body').css({
                'overflow':'hidden', 'height':'100%'
            })
            return false;
        })
        $('.viewbtn').click(function(){
            $(this).parents('.charm_list').next().next().next().css({
                display:'block'
            })
            $('.bg').css({
                display:'block'
            })
            $('html body').css({
                'overflow':'hidden', 'height':'100%'
            })
            return false;
        })

        $('.closebtn').click(function(){
          $('.popup').css({
            display:'none'
          })
          $('.bg').css({
              display:'none'
          })
          $('html body').css({
            'overflow':'visible'
        })
          return false;
        })



// /----------------------------- -----------------------------------------/
    $('.number_list .next').click(function(){

        var hidx = $('.number_list span a.ov').index();

        $('.number_list span a').eq(hidx).removeClass('ov').next().addClass('ov')

        if(hidx >= 2){
            hidx = 2;
            $('.number_list span a').eq(hidx).addClass('ov').siblings().removeClass('ov')
        }
        return false;
    });

    $('.number_list .prev').click(function(){

        var hidx = $('.number_list span a.ov').index();

        $('.number_list span a').eq(hidx).removeClass('ov').prev().addClass('ov')
        if(hidx == 0){
            hidx = 0;
            $('.number_list span a').eq(hidx).addClass('ov').siblings().removeClass('ov')
        }
        return false;
    });

    $('.number_list span a').click(function(){
        var iidx = $(this).index();
        var hidx = $('.number_list span a.ov').index();
        if(iidx > hidx){
            $('.number_list span a').eq(iidx).addClass('ov')
            $('.number_list span a').eq(hidx).removeClass('ov')
        }else if(iidx < hidx){
            $('.number_list span a').eq(iidx).addClass('ov')
            $('.number_list span a').eq(hidx).removeClass('ov')
        }
        return false;

    })



})//function end//

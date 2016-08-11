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

       var autoslide = setInterval(function(){

             var idx1 = $('.on1').index();


             if( idx1 === ($('.Main_slider ul li').length-1)){

               $('.Main_slider ul li').eq(0).children('a').click();

             }else{

                $('.Main_slider ul li').eq(idx1 + 1).children('a').click();

            }


         },4000)


       function movement(start,end,selector){

           $('.Main_slider li').eq(selector).children('img').css({
               'display':'block',
               'left':start
           }).stop().animate({
               left:end
           }).parent().addClass('on1').siblings().removeClass('on1')

           if(selector == $('.Main_slider li').length){
               idx=0
               movement("100%","0",idx)
           }else if(selector < 0){
               idx=$('.Main_slider li').length -1;
               movement("-100%","0",idx)
           }
       }


        $('.Main_slider a').click(function(){
            idx=$(this).parent().index();
            var hisidx=$('.Main_slider .on1').index()


            autoslide = setInterval(function(){

             var idx1 = $('.on1').index();

             play==0;

             if( idx1 === ($('.Main_slider ul li').length-1)){

               $('.Main_slider ul li').eq(0).children('a').click();

             }else{

                $('.Main_slider ul li').eq(idx1 + 1).children('a').click();

             }


         },4000)

            movement("0","-100%",hisidx);
            movement("100%","0",idx);
            return false;


        })

         $('.Main_slider .stopimg').click(function(){

            clearInterval(autoslide);


        })
})

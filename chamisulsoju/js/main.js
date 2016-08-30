$(function(){
    idxs = 0;
    $('.visual_control > ul > li > a').click(function(){

        idxs = $(this).parent().index();
        var onidx = $('.main_rolling > ul > li.on').index();

        console.log(onidx)

        if(idxs > onidx){
            $('.main_rolling > ul> li').eq(idxs).addClass('on').children('img').css({
                top:100 +'%',
                'display':'block'
            }).animate({
                top:0
            })
            $('.main_rolling > ul> li').eq(onidx).removeClass('on').children('img').animate({
                top: - 100 +'%',
            })
        }else if(onidx > idxs){
            $('.main_rolling > ul> li').eq(idxs).addClass('on').children('img').css({
                top:- 100 +'%',
                'display':'block'
            }).animate({
                top:0
            })
            $('.main_rolling > ul> li').eq(onidx).removeClass('on').children('img').animate({
                top:100 +'%',
            })
        }
        return false;
    })




})
//big function end//


// -----------------first video popup---------------

// $(window).load(function(){
//   $('.main_dimmed').fadeIn();
//
//   $('.layer_move').fadeIn();
//
//   $('.close_btn').click(function(){
//     console.log('click')
//     $('.main_dimmed').fadeOut(function(){
//       $('.main_dimmed').remove();
//     });
//     $('.layer_move').fadeOut(function(){
//         $('.layer_move').remove();
//     });
//     return false;
//   })
// })

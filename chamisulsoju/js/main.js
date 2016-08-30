$(function(){
    var rolling = null;
    function hahaha(){
        var idxsss = $('.main_rolling > ul >li.on').index();

        if(idxsss == $('.main_rolling > ul >li').length-1){
            $('.visual_control > ul > li').eq(0).children('a').click();
        }else{
            $('.visual_control > ul > li').eq(idxsss+1).children('a').click();
        }

    }
    idxs = 0;
    $('.visual_control > ul > li > a').click(function(){

        idxs = $(this).parent().index();
        var onidx = $('.main_rolling > ul > li.on').index();


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

    $('.visual_control ul li a').click(function(){
        $(this).find('img').attr('src','../chamisulsoju/images/rollon.png');
        $(this).parent('li').siblings().find('img').attr('src','../chamisulsoju/images/rolloff.png');
    })

    var rolling = setInterval(function(){
        hahaha();

    },4000)


    $('.roll_stop a').click(function(){
        clearInterval(rolling)

        return false;
    })

    $('.roll_play a').click(function(){
        rolling = setInterval(function(){
            hahaha();

        },4000)
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

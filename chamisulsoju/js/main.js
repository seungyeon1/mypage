$(function(){
      $('.visual_control ul li a').click(function(){
          idx=$(this).parent().index();
      })
        return false;


})//big function end//
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

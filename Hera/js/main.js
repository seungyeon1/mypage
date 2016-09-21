$(function(){

$('.seletor').click(function(){
  $('.global_list').toggle();
  $('.seletor').css('backgroundImage','url(images/global_on.png)');

})
$('.global_list li a').mouseover(function(){

  var idx=$('.global_list li').index();
  var hidx=$('.global_list .on').index();
  console.log('hidx')

  $(this).parent().eq(hidx).removeClass('on').next().addClass('on');

  if(hidx == 0){
      hidx = 0;
      $('.global_list li a').eq(hidx).addClass('on').siblings().removeClass('on')
  }

  return false;
})

})

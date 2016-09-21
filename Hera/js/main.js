$(function(){

$('.seletor').click(function(){
  $('.global_list').toggle();

  if($(this).hasClass('seletor'))
  {
      $(this).addClass('seletor2').removeClass('seletor');
  }
  else
  {
      $(this).addClass('seletor').removeClass('seletor2');
  }
})



$('.global_list li a').mouseover(function(){


  $(this).parent().addClass('on')
  return false;
}).mouseleave(function(){
  $(this).parent().removeClass('on')
})
return false;

})

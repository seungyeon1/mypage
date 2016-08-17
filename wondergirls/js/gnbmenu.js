$(document).ready(function(){



             $('.nav button').click(function(){
                 $('.nav ul').toggle(500);

             })

             $(window).resize(function(){

                  if($(window).width() > 769){
                      $('.nav ul').css({'display':'block'})
                  }else{
                      $('.nav ul').css({ 'display':'none'})

                  }
                })
            $('.nav button').click(function(){
                if(!$('.nav ul').is('.on')){
                        $('.nav ul').addClass('on').show()
                        $(this).text('Close Menu')
                    }else if($('.nav ul').is('.on')){
                        $('.nav ul').removeClass('on').hide()
                        $(this).text('Main Menu')
                    }
            })
  })

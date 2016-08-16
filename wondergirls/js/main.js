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
              $(this).text('Close Menu')
            })
  })

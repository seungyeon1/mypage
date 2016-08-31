$(function(){
    idxs=0;
    $('#profile_list ul li a').click(function(){

        idx = $(this).parent().index();
        hisidx = $('#profile_slide > ul > li.on').index()

        $('#profile_slide > ul > li').eq(hisidx).children('img').parent().removeClass('on').fadeOut(function(){
            $('#profile_slide > ul > li').eq(idx).children('img').parent().addClass('on').fadeIn();
        })


        return false;
    })
    
})

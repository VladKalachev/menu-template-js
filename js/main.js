$(function(){

    $('.menuToggle').on('click', function() {

       $('.menu').slideToggle(300, function(){
           
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }

       });

    });

});
    
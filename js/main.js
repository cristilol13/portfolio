$(document).ready(function(){

    $('.cajita').click(function(){
        $('html, body').animate({
            scrollTop: $('main').offset().top
        }, 2000);
   }); 

});
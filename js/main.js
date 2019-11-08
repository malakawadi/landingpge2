$(function(){
'use strict';
//slider height
var winH = $(window).height(),
 upperH  = $('.upper-bar').innerHeight(),
 navH    = $ ('.navbar') .innerHeight(); 
$('.silder,.carousel-item').height(winH - (upperH + navH));
//featured work shuffle
$('.featured-work ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class') === 'all' ){
        $('.shuffle .col-md').css('opacity',1);
    }
    else{
        $('.shuffle .col-md').css('opacity','.08');  
        $($(this).data('class')).parent().css('opacity',1);
    }
})
});
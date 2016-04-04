$(function(){
    $('.js_menu').click(function(e){
        $(this).parent().addClass('menu__item_active').siblings().removeClass('menu__item_active');
        e.preventDefault();
    })

})
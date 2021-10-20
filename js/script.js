$(document).ready(function() {
    $('[data-modal=order]').on('click', function(){
        $('.overlay, #order').fadeIn();
      });
  
      $('.modal__close').on('click', function(){
        $('.overlay, #order').fadeOut();
      });

    $('input[name=phone]').mask("+7 (999) 999 99-99");
})
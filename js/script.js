$(document).ready(function() {
    $('[data-modal=order]').on('click', function(){
        $('.overlay, #order').fadeIn();
      });
  
      $('.modal__close').on('click', function(){
        $('.overlay, #order').fadeOut();
      });

    $('input[name=phone]').mask("+7 (999) 999 99-99");

    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function(){
          $(this).find('input').val('');
          $('#order').fadeOut();
          $('.overlay, #thanks').fadeIn();
    
          $('form').trigger('reset');
        });
        return false;
      });
})
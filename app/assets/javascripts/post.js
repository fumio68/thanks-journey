$(function(){

  $('#new_post').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $('.main-form__box__textarea__content').val('');
      $('#ship-icon').addClass('wobble-hor-top').delay(5000).queue(function(next){
        $(this).removeClass("wobble-hor-top");
        next();
      });
      $('.rainbow_txt').fadeIn(2000).delay(1000).fadeOut(2000);
    })
    .fail(function(){
      alert('Please write a text!');
    })
    .always(function() {
      $('.main-form__btn').prop('disabled', false);
    })
  });

});
$(function() {
// For preloader
$(document).ready(function() {   
  $("#preloader").delay(2000).fadeOut("slow");
});

// For slider
$('#slider-list').slick({
  infinite: true,  
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  arrows: true,
  prevArrow: $('.slider__nav__btn.prev'),    
  nextArrow: $('.slider__nav__btn.next'),
});

// For feedback-modal
var feedback_mod = $('[data-remodal-id=feedback-modal]').remodal();
$("#feedback-form").validate({ 
  rules: {
    'feedback-form_phone': {               
      minlength: 4,
      number: true,
    }  
  }  
});
$("#feedback-form button").bind('click', function () { 
  if ($("#feedback-form").valid()) {
    alert('true');
    feedback_mod.close();
    }else{ 
      $('#feedback-form input.error').attr("placeholder", "Поле обязательно для заполнения").focus();
    }      
});
});  
 
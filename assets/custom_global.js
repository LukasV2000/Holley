$(document).ready(function(){


  $('.Index_personalization_feature').click(function(){
    $('.Index_personalization_feature').removeClass('active');
    $(this).addClass('active');
    var data = $(this).attr('data');
    $('.Index_personalization_image__js').hide();
    $('.Index_personalization_image__js').each(function(){
      if ($(this).attr('data') == data){
        $(this).show();
      }
    });
  });


  $('.Slideshow_outer').slick({
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    dots: true
  });
  				
});
$(document).ready(function(){


  $('.Index_personalization_feature').click(function(){
    $(this).parent('div').find('.Index_personalization_feature').removeClass('active');
    $(this).addClass('active');
    var data = $(this).attr('data');
    $(this).parent('div').parent('div').find('.Index_personalization_image__js').hide();
    $(this).parent('div').parent('div').find('.Index_personalization_image__js').each(function(){
      if ($(this).attr('data') == data){
        $(this).show();
      }
    });
  });

  // Quantity selector
  $('.Qty_adjust_plus').click(function(){
    var currentValue = parseFloat($(this).parent('div').find('.Qty_adjust_value').html());
    currentValue++;
    $(this).parent('div').find('.Qty_adjust_value').html(currentValue);
    $('.Product_quantity_selecotor__js').val(currentValue);
    console.log($('.Product_quantity_selecotor__js').val());
  });

  $('.Qty_adjust_minus').click(function(){
    var currentValue = parseFloat($(this).parent('div').find('.Qty_adjust_value').html());
    if (currentValue > 1){
      currentValue--;
    }
    $(this).parent('div').find('.Qty_adjust_value').html(currentValue);
    $('.Product_quantity_selecotor__js').val(currentValue);
    console.log($('.Product_quantity_selecotor__js').val()); 
  });


  $('.Slideshow_outer').slick({
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    dots: true
  });
  				
});
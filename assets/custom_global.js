$(document).ready(function(){


  function preSelectLanguages(){
    var currentLan = $('html').attr('lang');
    console.log(currentLan, 'CURRENT LAN');
    if (currentLan == 'lt'){
      setTimeout(function(){
        $('.shopify-payment-button__button').text('Pirkti dabar');
      },1000);
    }
  }

  preSelectLanguages();


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

  $('.Product_whats_inside_selector_cell').click(function(){
    $('.Product_whats_inside_selector_cell').removeClass('active');
    $(this).addClass('active');
    var dataId = $(this).attr('data-id');
    $('.Product_whats_inside_image').hide();
    $('.Product_whats_inside_image').each(function(){
      if ($(this).attr('data-id') == dataId){
        $(this).show();
      }
    });
  });

  // $('.Product_text_image_button_scroll').click(function(evt){
  //   evt.preventDefault();
  //   $('html, body').animate({
  //       scrollTop: $(".Product_section_top__js").offset().top
  //   }, 500);
  // });


  $('.Scroll_to_box').find('.Slideshow_secondary_button').click(function(evt){
    evt.preventDefault();
    $('html, body').animate({
        scrollTop: $(".Whole_featured_products_section").offset().top
    }, 500);
  });

  $('.Customer_says_reviews_outer').slick({
    infinite: true,
    slidesToShow:3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          centerMode: true,
          centerPadding: '30px',
        }
      }
    ]
  });
  				
  $('.Index_reviews_carousel').slick({
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '180px',
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '30px',
        }
      }
    ]
  });

});
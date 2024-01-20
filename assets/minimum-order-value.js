$(document).ready(function(){
    console.log('Minimum order value script is ready!');

    function orderLimiter(){
        jQuery.getJSON("/cart.js", function (cart) {
            // console.log(cart);
            var currency = $('.Cart_currency_checker__js').attr('value');
            currency = currency.replace('0,00', '').replace('0.00', '');
            console.log(currency);
            let totalPrice = cart.total_price;
            let minValue = 2999;
            var untilMin;
            var width;
            if (totalPrice < minValue){
                untilMin = minValue - totalPrice;
                width = ((untilMin * 100) / minValue); 
                width = 100 - width;
                untilMin = (untilMin / 100).toFixed(2);
                console.log(width, 'WIDTH')
                $('.Cart_minimum_order_value_bar .inner').css('width', width + '%');
                $('.Cart_limiter_note_text').text('Until minimum order value left');
                $('.Until_min_orer_value').html(currency + untilMin);
                $('.Checkout_button_full').hide();
            }
            else{
                untilMin = 0;
                $('.Cart_minimum_order_value_bar .inner').css('width', '100%');
                $('.Cart_limiter_note_text').text('Congratulations! You reached minimum order value!');
                $('.Until_min_orer_value').html('');
                $('.Checkout_button_full').show();
            }
            
            // console.log(untilMin);
        });
    }
    orderLimiter();
    setInterval(orderLimiter, 1000);

});
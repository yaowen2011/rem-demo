$(function () {
    $.ajax({
        url: Mconfig.domain + 'api/getcoupon',
        type: 'get',
        data: {},
        dataType: 'json',
        success: function(data) {
            //console.log(data);
            var html = template('m-coupon-list-tpl', data);
            $('.m-coupon-list').html(html);
        }
    });
});
$(function () {
    $.ajax({
        url: Mconfig.domain + 'api/getcouponproduct',
        type: 'get',
        data: {
            couponid: Tools.getParam('couponid')
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('.m-couponproduct-list').html(template("m-couponproduct-list-tpl", data));
        }
    });
});
$(function () {
    //获取所有店铺
    $.ajax({
        url: Mconfig.domain + 'api/getgsshop',
        type: 'get',
        data: {},
        dataType: 'json',
        success: function (data) {
            console.log(data);

        }
    });


    //获取所有gsarea
    //url 'api/getgsshoparea'
    $.ajax({
        url: Mconfig.domain + 'api/getgsshoparea',
        type: 'get',
        data: {},
        dataType: 'json',
        success: function (data) {
            console.log(data);

        }
    });


    //渲染列表
    $.ajax({
        url: Mconfig.domain + 'api/getgsproduct',
        type: 'get',
        data: {
            shopid: 0,
            areaid: 0
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });
});
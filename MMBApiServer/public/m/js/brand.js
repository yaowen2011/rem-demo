$(function () {

    //哪个牌子好
    $.ajax({
        url: Mconfig.domain + 'api/getbrand',
        type: 'get',
        data: {brandtitleid: Tools.getParam('brandtitleid')},
        dateType: "json",
        success: function (data) {
            console.log(data);
            $('.m-brand-list').html(template('m-brand-list-tpl', data));
        }
    });

    //电视销量排行
    $.ajax({
        url: Mconfig.domain + 'api/getbrandproductlist',
        type: 'get',
        data: {brandtitleid: Tools.getParam('brandtitleid')},
        dateType: "json",
        success: function (data) {
            console.log(data);
            $('.m-product-list').html(template('m-product-list-tpl', data));
        }

    });

    //平板电视最新评论
    $.ajax({
        url: Mconfig.domain + 'api/getproductcom',
        type: 'get',
        data: {productid: 1},
        dateType: "json",
        success: function (data) {
            console.log(data);
            $('.m-brand-comments').html(template('m-brand-comments-tpl', data));
        }
    });
});
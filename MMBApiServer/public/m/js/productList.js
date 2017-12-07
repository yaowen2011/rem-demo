$(function () {
    //获取商品分类名称
    $.ajax({
        url: Mconfig.domain + 'api/getCategorybyid',
        type: 'get',
        data: {
            categoryid: Tools.getParam('categoryId')
        },
        dataType: "json",
        success: function (data) {
            //console.log(data);
            $('.m-break-crum').html(template("m-break-crum-tpl", data));
        }
    });

    $.ajax({
        url: Mconfig.domain + 'api/getproductlist',
        type: 'get',
        data: {
            categoryid: Tools.getParam('categoryId'),
            pageid: 1
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            $(".m-product-list").html(template("m-product-list-tpl", data));
        }
    });

});
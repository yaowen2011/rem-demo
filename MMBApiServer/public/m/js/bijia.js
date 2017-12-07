$(function () {
    //修改面包屑
    $('.m-break-crum li').eq(2).text(Tools.getParam("brandName"));

    $.ajax({
        url: Mconfig.domain + "api/getproduct",
        type: "get",
        data: {
            productid: Tools.getParam('productid')
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $(".m-product-show").html(template("m-product-show-tpl", data));
        }
    });
});
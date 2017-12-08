$(function () {
    //获取商品分类名称
    $.ajax({
        url: Mconfig.domain + 'api/getsitenav',
        type: 'get',
        data: {
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            $('.m-nav-list').html(template("m-nav-list-tpl", data));
        }
    });

});
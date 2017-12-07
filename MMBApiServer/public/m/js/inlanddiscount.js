$(function () {
    $.ajax({
        url: Mconfig.domain + 'api/getinlanddiscount',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            //todo 实现延迟加载
            $(".m-discount-list").html(template("m-discount-list-tpl", data));
        }
    });
});
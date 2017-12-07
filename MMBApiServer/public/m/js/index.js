$(function () {
    //导航接口调用
    $.ajax({
        url: Mconfig.domain + 'api/getindexmenu',
        type: 'get',
        dataType: "json",
        success: function(data) {
            console.log(data);
            var html = template("m-nav-tpl", data);
            $(".m-nav").html(html);
        }
    });

    //折扣列表
    $.ajax({
        url: Mconfig.domain + 'api/getmoneyctrl',
        type: 'get',
        dateType: 'json',
        success: function (data) {
            //console.log(data);
            $(".discount-b").html(template("discount-b-tpl", data));
        }
    })
});
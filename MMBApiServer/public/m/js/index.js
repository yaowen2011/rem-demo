$(function () {
    //导航接口调用
    $.ajax({
        url: Mconfig.domain + 'api/getindexmenu',
        type: 'get',
        dataType: "json",
        success: function(data) {
            //console.log(data);
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
            console.log(data);
            $(".discount-b").html(template("discount-b-tpl", data));
        }
    });

    //点击更多现实隐藏
    //使用事件委托
    $(".m-nav").on('click', "li", function (e) {
        var $this = $(this);
        var index = $this.data('index');

        if (index === 7) {
            e.preventDefault();
            $this.nextAll('li').toggleClass('off on', 2000, "easeOutSine");
        }
    })
});
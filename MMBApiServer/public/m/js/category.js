$(function () {
    $.ajax({
        url: Mconfig.domain + "api/getcategorytitle",
        type: "get",
        dataType: "json",
        success: function (data) {
            //console.log(data);
            $(".m-category-list").html(template("categorytitle-tpl", data));
        }
    });

    //需要使用事件委托

    $(".m-category-list").on('click', '.toggle-icon', function () {
        //console.log(111);
        var $this = $(this);
        var toggleStatus = parseInt($this.data('toggle-status'));
        if (toggleStatus === 0) {
            $.ajax({
                url: Mconfig.domain + "api/getcategory",
                type: "get",
                data: {
                    titleid: $this.data('titleid')
                },
                dataType: "json",
                success: function (data) {
                    //console.log(data);
                    $this.parent().siblings('dd').eq(0).removeClass("close").html(template("categorylist-tpl", data));
                }
            });

            $this.data('toggle-status', 1);
        } else {
            $this.parent().siblings('dd').eq(0).addClass("close");
            $this.data('toggle-status', 0);
        }


    });

    //, function () {
    //    var $this = $(this);
    //    $this.parent().siblings('dd').eq(0).addClass("close");
    //}
});
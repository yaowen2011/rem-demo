$(function () {
    $.ajax({
        url: Mconfig.domain + 'api/getbaicaijiatitle',
        type: 'get',
        data: {},
        dataType: 'json',
        success: function(data) {
            //console.log(data);
            $('.m-tb-category-tab').html(template("m-tb-category-tab-tpl", data));

            //头部滑动
            //js获取ul的宽度
            //宽度不能这样给  因为 宽度 有宽 有窄
            //$(".tab-box ul").width($(".tab-box li").outerWidth(true) * $(".tab-box li").length);
            
            var width = 0;
            $(".tab-box ul li").each(function () {
                $this = $(this);
                width += $this.outerWidth(true);
            });

            //加上 ul 的左右padding
            //默认是带单位的
            width += parseInt($(".tab-box ul").css("paddingLeft")) * 2;
            //console.log(width);
            $(".tab-box ul").width(width);
        }
    });

    //渲染列表
    renderList();

    //tab页点击可以切换
    $('.m-tb-category-tab').on('click', 'li', function () {
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active');
        renderList($this.data('titleid'));
    });

    //渲染列表
    function renderList(titleid) {

        titleid = titleid || 0;
        $.ajax({
            url: Mconfig.domain + 'api/getbaicaijiaproduct',
            type: 'get',
            data: {
                titleid: titleid
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $('.m-tb-category-list').html(template("m-tb-category-list-tpl", data));
            }

        });
    }


});
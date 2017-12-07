$(function () {
    $.ajax({
        url: Mconfig.domain + 'api/getbaicaijiatitle',
        type: 'get',
        data: {},
        dataType: 'json',
        success: function(data) {
            //console.log(data);
            $('.m-tb-category-tab').html(template("m-tb-category-tab-tpl", data));
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
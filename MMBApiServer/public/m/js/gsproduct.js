$(function () {
    //渲染列表
    renderList();

    //获取所有店铺
    $.ajax({
        url: Mconfig.domain + 'api/getgsshop',
        type: 'get',
        data: {},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var shopList = data.result;
            //获取所有gsarea
            //url 'api/getgsshoparea'
            $.ajax({
                url: Mconfig.domain + 'api/getgsshoparea',
                type: 'get',
                data: {},
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    var areaList = data.result;
                    //渲染导航模板
                    $(".m-gs-tab").html(template("m-gs-tab-tpl", {shopList: shopList, areaList: areaList}));
                }
            });
        }
    });


    //点击title toggle 下拉列表
    //后续迁移成委托的
    $('.m-gs-tab ').on('click', '> ul > li', function () {
        var $this = $(this);
        //排他
        $this.siblings('li').find('.second').addClass('off');

        $this.find('.second').toggleClass("off");


    });


    //在事件中绑定 事件 容易 造成重复绑定
    //价格loading 效果
    $('.m-gs-tab ').on('click', '.second > li', function () {
        // 排他
        var $this = $(this);
        $this.addClass('check').siblings('li').removeClass('check');


        $this.parent('ul').parent('li').find('.txt-name').eq(0).text($this.data('name'));

        // 修改顶级父容器ul 的  data-areaid 或 data-shopid 属性
        if ($this.data('type') === "shop") {
            //var shopid = $this.data('')
            $('.m-gs-tab > ul').data('shopid', $this.data('shopid'));
        } else if ($this.data('type') === "area") {
            $('.m-gs-tab > ul').data('areaid', $this.data('areaid'));
        }


        var shopid = $('.m-gs-tab > ul').data('shopid');
        var areaid = $('.m-gs-tab > ul').data('areaid');

        //重新渲染列表
        renderList(shopid, areaid);
    });


    //渲染列表
    function renderList(shopid, areaid) {
        shopid = shopid || 0;
        areaid = areaid || 0;
        $.ajax({
            url: Mconfig.domain + 'api/getgsproduct',
            type: 'get',
            data: {
                shopid: shopid,
                areaid: areaid
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $(".m-gs-list").html(template("m-gs-list-tpl", data));
            }
        });
    }
});
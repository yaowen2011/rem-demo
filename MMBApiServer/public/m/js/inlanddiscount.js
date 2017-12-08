$(function () {
    $.ajax({
        url: Mconfig.domain + 'api/getinlanddiscount',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data);

            $(".m-discount-list").html(template("m-discount-list-tpl", data));

            //实现延迟加载
            lazyLoad();
            //图片懒加载
            //$('html, body').on('scroll', function () {
            $(window).on('scroll', function () {
                lazyLoad();
            });
        }
    });





    //懒加载逻辑
    function lazyLoad() {
        var scrollTop = $(window).scrollTop();
        var screenH = $(window).height();
        $(".m-discount-list li").each(function (i, e) {
            var $this = $(this);

            //判断li是否要冒到屏幕上
            var loadStatus = $this.data('load');
            if ($this.offset().top < scrollTop + screenH && ! loadStatus) {
                var $imgE = $this.find('img');
                var src = $imgE.data('src');
                console.log(src);
                $imgE.attr('src', src);
                //设置load状态
                $this.data('load', true);
            }
        });
    }
});
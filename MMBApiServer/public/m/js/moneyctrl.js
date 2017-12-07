$(function () {
    render(1);

    //分页处理
    $(".m-discount").on('change', '#paginator', function () {
        var pageid = $(this).val();
        render(pageid);
    });

    //上一页
    $(".m-discount").on('click', '.btn-prev', function () {
        var pageid = $("#paginator").val();
        pageid = Math.max(1, --pageid);
        render(pageid);
    });

    //下一页
    $(".m-discount").on('click', '.btn-next', function () {
        var pageid = $("#paginator").val();
        pageid = Math.min($(this).data("pagecount"), ++pageid);
        render(pageid);
    });


    //渲染页面
    function render(pageid) {
        pageid = pageid || 1;
        $.ajax({
            url: Mconfig.domain + 'api/getmoneyctrl',
            type: 'get',
            data: {
                pageid: pageid
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
                data.pageid = pageid;
                data.pageCount = Math.ceil(data.totalCount / data.pagesize);
                //data.log = console.log;
                $(".m-discount").html(template("m-discount-tpl", data));
            }

        });
    }
});
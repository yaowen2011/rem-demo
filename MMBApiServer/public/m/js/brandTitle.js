$(function () {
    $.ajax({
        url: Mconfig.domain + 'api/getbrandtitle',
        type: 'get',
        data: {},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $(".m-brand-list").html(template('m-brand-list-tpl', data));
        }
    });
});
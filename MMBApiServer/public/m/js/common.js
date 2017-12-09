window.onresize = function () {
    document.querySelector('html').style.fontSize = window.screen.width / 10 + 'px';
}

//通用的配置
var Mconfig = {
    domain: 'http://192.168.56.1:9090/'
}


//字符串解析
var Tools = {
    getParam: function(key) {
        var search = decodeURI(location.search.slice(1));
        var obj = {
        };
        search.split("&").forEach(function (ele, idx) {
            var tempArr = ele.split('=');
            obj[tempArr[0]] = tempArr[1];
        });

        return obj[key];
    }
}

//返回顶部功能
$(function () {
    $('.m-back-top li:eq(2)').on("click", function () {
        //alert("heheh");
        //$(window).scrollTop(0);
        //$(window)  和 $('html, body')区别

        $('html, body').animate({scrollTop: 0}, 1500, 'easeInQuad');
    });
});
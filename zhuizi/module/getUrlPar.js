define(function () {

    function getUrlPar() {
        // 方式一
        // var arr = location.search.slice(1).split("&")
        // var obj = {}
        // arr.forEach(function (item) {
        //     var mid = item.split("=")
        //     obj[mid[0]] = mid[1]
        // })
        // return obj;

        // 方式二
        return JSON.parse('{"' + decodeURI(location.search.slice(1)).replace(/&/g, '","').replace(/=/g, '":"') + '"}')

        // ?username=qweqwe&password=qweqwe1&email=22@qq.com

        // 去掉?
        // => username=qweqwe&password=qweqwe1&email=22@qq.com

        // 将&替换 ","
        // => username=qweqwe","password=qweqwe1","email=22@qq.com

        // 将=替换 ":"
        // => username":"qweqwe","password":"qweqwe1","email":"22@qq.com

        // 在两端分别添加 {"      数据       "}
        // => {"username":"qweqwe","password":"qweqwe1","email":"22@qq.com"}
    }


    return getUrlPar
})
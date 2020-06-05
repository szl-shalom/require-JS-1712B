/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-02 10:08:27
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-02 10:25:27
 */
require.config({
    baseUrl: "js/",
    paths: {
        t: "tips",
        $: "dom"
    }
})


require(["t", "$"], function (Tips, $) {
    var btns = [...$.gets("button")];
    btns[0].onclick = function () {
        new Tips({
            color: "yellow",
            content: "我是警告框",
            time:1000,
        })
    }
    btns[1].onclick = function () {
        new Tips({
            color: "green",
            content: "我是通过框",
            time:2000
        })

    }
    btns[2].onclick = function () {
        new Tips({
            color: "red",
            content: "我是禁止框",
            time:3000
        })
    }



})
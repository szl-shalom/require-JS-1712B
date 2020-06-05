/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-02 20:26:14
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-02 20:39:52
 */
require.config({
    baseUrl: "js/",
    paths: {
        d: "dialog"
    }
})

require(["d"], function (Dialog) {

    var btn = document.querySelector("button")
    btn.onclick = function () {
        new Dialog({
            title: "我叫提示框",
            okValue: "ok",
            cancelValue: "no",
            onclick: function () {
                alert("您点击了确定按钮")
            },
        })

    }

})
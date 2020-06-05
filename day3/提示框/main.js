/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-02 11:10:33
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-02 13:41:06
 */
require.config({
    baseUrl: "js/",
    paths: {
        d: "dialog",
    }
})

require(["d"], function (Dialog) {
    var btns = document.querySelectorAll("button")
    btns[0].onclick = function () {
        new Dialog({
            title: "今天空调开了吗？",
            okValue: "开了",
            cancelValue: "没开",
            okClick: function () {
                alert(123456)
            }
        })
    }

    btns[1].onclick = function () {
        new Dialog({
            title: "今天空调开了吗？",
            okValue: "开了",
            cancelValue: "没开",
        })
    }

    btns[2].onclick = function () {
        new Dialog({
            title: "今天空调开了吗？",
            okValue: "开了",
            cancelValue: "没开",
            okClick: function () {
                alert("今天学的不错")
            }
        })
    }
})
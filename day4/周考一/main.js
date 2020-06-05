/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-03 10:51:56
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-03 13:58:32
 */
require.config({
    baseUrl: "js/",
    paths: {
        a: "alert",
        $: "getDom"
    }
})


require(["a", "$"], function (Alert, $) {
    var btn = $.get("button");
    btn.onclick = function () {
        new Alert({
            title: '温馨提醒',   //弹框标题
            contentText: '换肤功能实现喽', //弹框内容
            btnText: 'OK', //弹框按钮 确定
            width: 500,  //弹框宽度
            height: 300, //弹框高度
            skinName: 'skyblue',  //弹框换色
            hasMask: true,   //弹框遮罩层 是否显示
            handlerSureBtn: function () {
                alert('我是点击确定按钮后的回调...');
            },
            hasCloseBtn: true,   //弹框关闭按钮  是否显示
            handlerCloseBtn: function () {
                alert('我是点击关闭按钮后的回调...');
            }
        })
    }
})
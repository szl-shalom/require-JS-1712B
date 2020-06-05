/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-03 15:33:44
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-03 16:53:43
 */
require.config({
    baseUrl: './js',
    paths: {
        A: 'add',
        $: 'dom',
        M: 'modify'
    }
})
require(['A', '$', 'M'], function (A, $, M) {
    // 调用添加数据模块
    new A({
        username: $.get(".username"), //用户名
        age: $.get(".age"),//年龄
        date: $.get(".date"),// 日期
        btn: $.get(".btn"),// 提交按钮
        tbody: $.get("tbody"),// 添加的到哪个元素
    })

    // 事件委托
    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;// 获取事件源
        if (tar.nodeName === "BUTTON") {// 判断是不是button
            // 根据事件源获取对应的数据
            var name = tar.parentNode.parentNode.children[0].innerHTML
            var age = tar.parentNode.parentNode.children[1].innerHTML
            var date = tar.parentNode.parentNode.children[2].innerHTML
            // 调用弹框插件
            new M({
                name: name,
                age: age,
                date: date,
                el: tar,
            })
        }

    })
})
/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-04 14:33:27
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-04 15:06:27
 */
require.config({
    baseUrl: "js/",
    paths: {
        t: "tab",
        $: "dom"
    }
})


require(["$", "t"], function ($, Tab) {
    new Tab({
        title: $.get(".title"),// 标题父元素
        // type: "mouseover",
        // className: "active"
    })



    new Tab({
        title: $.get(".title1"),// 标题父元素
        content: $.get(".content"),// 内容父元素
        type: "mouseover", // 事件类型
        className: "abc",
    })
})
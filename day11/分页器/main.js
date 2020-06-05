require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        page: "page",
        data: "data"
    }
})

require(["$", "page", "data"], function ($, Page, data) {
    new Page({
        data: data, //数据
        con: $.get(".con"), //渲染内容盒子
        page: $.get(".page"), //分页器大盒子 包含上一页下一页
        pageUl: $.get(".page-ul"), // 分页器页码盒子
        num: 10, // 每页显示的个数
        index: 0, // 当前的下标
        prev: $.get(".prev"),
        next: $.get(".next"),
        code: $.get(".code"),
        numDom: $.get(".numDom")
    })
})
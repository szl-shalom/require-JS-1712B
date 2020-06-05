require.config({
    baseUrl: "js/",
    paths: {
        d: "data",
        $: "dom",
        p: "page",
        V: "../lib/velocity.min"
    }
})


require(["d", "$", "p"], function (data, $, Page) {

    new Page({
        index: 0,
        num: 10,
        tbody: $.get("tbody"),
        list: $.get(".list"),
        page: $.get(".page"),
        data: data,
        prev: $.get(".prev"),
        next: $.get(".next"),
        first: $.get(".first"),
        end: $.get(".end"),
        code: $.get(".code"),
        sel: $.get(".sel"),
        mask:$.get(".mask")
    })
})  
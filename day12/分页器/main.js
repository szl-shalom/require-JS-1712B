require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        d: "data",
        p: "page",
    }
})

require(["$", "d", "p"], function ($, data, Page) {
    new Page({
        data: data,
        tbody: $.get("tbody"),
        pageUl:$.get(".page-ul"),
        page:$.get(".page")
    })
})
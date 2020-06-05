require.config({
    baseUrl: "./",
    paths: {
        $: "js/dom",
        s: "js/sel",
        d: "mock/data",
        V: "lib/velocity.min"
    }

})

require(["$", "s", "d"], function ($, Sel, data) {
    new Sel({
        data: data,
        title: $.get(".title"),
        search: $.get('.search'),
        con:$.get(".con"),
        underLine:$.get(".underLine"),
        ul:$.get("ul")
    })
})
require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        sel: "sel",
        V: "../lib/velocity.min",
        d: 'data',
    }
})

require(["$", "sel", "d"], function ($, Sel, data) {
    new Sel({
        data: data,
        ul: $.get("ul"),
        search: $.get(".search"),
        con:$.get(".con")
    })


})
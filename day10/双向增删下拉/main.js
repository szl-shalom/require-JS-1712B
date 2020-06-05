require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        sel: "sel",
        V: "../lib/velocity.min"
    }
})

require(["$", "sel"], function ($, Sel) {
    new Sel({
        con: $.get(".con"),
        ul: $.get("ul"),
        btn: $.get(".btn")
    })
})
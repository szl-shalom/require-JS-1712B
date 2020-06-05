require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        sel: "sel",
        V:"../lib/velocity.min"
    }
})

require(["$", "sel"], function ($, Sel) {
    new Sel({
        el: $.get(".sel"),
        content: $.get(".content"),
        b:$.get("b")
    })
})
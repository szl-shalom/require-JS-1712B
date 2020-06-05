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
        search: $.get(".search"),
        icon: $.get(".icon"),
        list: $.get(".list")
    })
})
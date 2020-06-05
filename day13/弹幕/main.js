require.config({
    baseUrl: "js/",
    paths: {
        mess: "mess",
        $: "dom",
        V: "../lib/velocity.min"
    }
})

require(["$", "mess"], function ($, Mess) {
    new Mess({
        input: $.get("input"),
        btn: $.get('button'),
        left: $.get('.left')
    })
})  
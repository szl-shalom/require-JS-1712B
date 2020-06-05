require.config({
    paths: {
        add: "add",
        $: "dom",
        tab: "tab",
        V: "../lib/velocity.min"
    },
    baseUrl: "js/"
})

require(["add", "$", "tab"], function (Add, $, Tab) {
    new Tab({
        title: $.get(".left"),
        content: $.get(".right")
    })


    $.get(".add").addEventListener("click", function () {
        new Add({
            tbody:$.get(".t1"),
        })
    })
})
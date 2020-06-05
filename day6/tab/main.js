require.config({
    baseUrl: "js/",
    paths: {
        t: "tab",
        $: "dom",
        V: "../lib/v"
    }
})


require(["t", "$"], function (Tab, $) {
    new Tab({
        title: $.get(".tab>.header"),
        content: $.get(".content"),
        underLine:$.get(".underLine"),
    })
})
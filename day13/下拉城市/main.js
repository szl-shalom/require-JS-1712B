require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        s: "sel",
    }
})

require(["d", "$", "s"], function (data, $, Sel) {
    $.get(".btn").onclick = function () {
        new Sel({
            // btn: $.get(".btn"),
            data: data,
            con:$.get(".con")
        })
    }

})
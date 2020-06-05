require.config({
    baseUrl: "js/",
    paths: {
        d: "data",
        $: "dom",
        s: "swiper",
        V: "../lib/velocity.min"
    }
})

require(["d", "$", "s"], function (data, $, S) {
    new S({
        data: data,
        container: $.get(".container"),
        page: $.get(".page"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        swiper: $.get(".swiper"),
        index: 0
    })
})
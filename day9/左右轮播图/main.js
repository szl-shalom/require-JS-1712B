require.config({
    paths: {
        $: "dom",
        s: "swiper",
        V: "../lib/velocity.min"
    },
    baseUrl: "js/"
})


require(["$", "s"], function ($, Swiper) {
    new Swiper({
        index: 0,
        data: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"],
        prev: $.get(".prev"),
        next: $.get(".next"),
        page: $.get(".page"),
        img:$.get(".img"),
    })
})
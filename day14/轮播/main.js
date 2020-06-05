require.config({
    baseUrl: "js/",
    paths: {

        $: "dom",
        s: "swiper",

    }
})

require(["$", "s"], function ($, S) {
    new S({
        container:$.get(".container")
    })
})
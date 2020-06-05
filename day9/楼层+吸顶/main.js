require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        f: "floor",
        V: "../lib/velocity.min"
    }
})

require(["$", "f"], function ($, Floor) {
    new Floor({
        nav: $.get(".nav"),
        floor: $.get(".floor-ul"),
        floorLeft: $.get(".floor-left-ul"),
    })
})
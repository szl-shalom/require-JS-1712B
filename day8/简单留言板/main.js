require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        r: "res",
    }
})


require(["$", "r"], function ($, R) {

    new R({
        username: $.get(".username"),
        mes: $.get(".mes"),
        content: $.get(".content"),
        count: $.get(".count"),
        header: $.get(".header"),
        submit: $.get(".submit"),
    })


})
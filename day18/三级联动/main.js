require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        d: "data",
        s: "sanji"
    }
})


require(["$", "d", "s"], function ($, data, S) {
    new S({
        data: data,
        province: $.get("#province"),
        city: $.get("#city"),
        area: $.get("#area"),
    })
})
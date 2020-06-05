require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        d: "data",
        f: "filter",
    }
})


require(["$", "d", "f"], function ($, data, Filter) {
    new Filter({
        data: data,
        tbody: $.get("tbody"),
        input: $.get(".search"),
        submit: $.get(".submit"),
    })
    console.log(data)
})
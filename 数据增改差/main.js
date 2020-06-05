require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        f: "filter",
        d: "data",
        dialog: "dialog"
    }
})

require(["$", "f", "d"], function ($, Filter, data) {
    new Filter({
        data: data,
        content: $.get(".content"),
        pic: $.get(".pic"),
        submit: $.get(".submit"),
        nickname: $.get(".nickname"),
        mes: $.get(".mes"),
        search: $.get(".search"),
        userSearch: $.get(".user-search")
    })
})
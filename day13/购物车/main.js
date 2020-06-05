require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        d: "data",
        c: "car"
    }
})


require(["$", "d", "c"], function ($, data, Car) {
    console.log(data)
    new Car({
        data: data,
        table: $.get("table"),
        tbody: $.get("tbody"),
        priceAll:$.get(".price-all"),
        countAll:$.get(".count-all"),
        checkAll:$.get(".check-all")
    })
})
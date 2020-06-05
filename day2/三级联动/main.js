require.config({
    baseUrl: "js/",
    paths: {
        data: "data",
        s: "sanji"
    }
})


require(["data", "s"], function (data, S) {
    console.log(data)
    new S({
        data: data,// 数据
        province: document.querySelector("#province"),
        city: document.querySelector("#city"),
        area: document.querySelector("#area")
    })
})
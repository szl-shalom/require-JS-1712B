require.config({
    paths: {
        d: "data",
        nav: "nav"
    },
    baseUrl: "js/"
})

require(["d", "nav"], function (data, Nav) {
    console.log(data)
    new Nav({
        data: data,
        ul: document.querySelector(".one")
    })
})
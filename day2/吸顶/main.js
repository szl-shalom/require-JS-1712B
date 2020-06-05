require.config({
    baseUrl: "js/",
    paths: {
        n: "nav"
    }
})


require(["n"], function (N) {
    new N({
        nav: document.querySelector(".nav")
    })
})
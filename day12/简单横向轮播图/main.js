require.config({
    paths: {
        banner: "banner",
        V: "velocity.min"
    },
    baseUrl: "js/"
})

require(["banner"], function (banner) {
    new banner({
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        container: document.querySelector(".container")
    })
})
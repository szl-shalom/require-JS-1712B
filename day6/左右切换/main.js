require.config({
    baseUrl: "js/",
    paths: {
        t: "Tab"
    }
})

require(["t"], function (Tab) {
    new Tab({
        title: document.querySelector(".left"),
        content: document.querySelector(".right"),
    })
})
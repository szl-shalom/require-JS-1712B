require(["js/floor"], function (Floor) {
    new Floor({
        floor: document.querySelector(".floor>ul"),
        right: document.querySelector(".right>ul")
    })
})
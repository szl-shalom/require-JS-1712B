require.config({
    paths: {
        b: "bigImg",
        $: "dom"
    },
    baseUrl: "js/"
})


require(["b", "$"], function (BigImg, $) {
    $.get(".wrap").addEventListener("click", function (e) {
        var tar = e.target; // 获取事件源
        if (tar.nodeName === "IMG") {
            new BigImg({
                el: tar,
            })
        }
    })
})
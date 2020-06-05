require.config({
    baseUrl: "js/",
    paths: {
        d: "dialog",
    }
})


require(["d"], function (Dialog) {
    // var btn = document.querySelector("button");
    // btn.onclick = function () {
    new Dialog({
        title: "我是配置的标题",// 弹窗的标题需要是可配置的（10分）
        okValue: "配置的确定按钮",//弹窗确定和取消按钮的文字是可配置的（10分）
        noValue: "配置的取消按钮", //弹窗确定和取消按钮的文字是可配置的（10分）
        okclick: function () { //点击每个按钮触发的事件是可配置的（20分）
            alert("配置的确定回调函数")
        },
        noclick: function () { //点击每个按钮触发的事件是可配置的（20分）
            alert("配置的取消回调函数")
        }
    })
    // }

})
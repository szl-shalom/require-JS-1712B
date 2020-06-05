require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        a: "add",
        m: "modify",
        d: "dialog"
    }
})


require(["$", "a", "m", "d"], function ($, Add, M, Dialog) {
    var btn = $.get(".submit")
    // 添加提交事件
    btn.onclick = function () {
        new Add({
            username: $.get(".usernam").value,
            password: $.get(".password").value,
            tbody: $.get("tbody"),
        })
    }

    // 事件委托--删除
    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.className === "del") {
            new Dialog({
                title: "确定要删除吗？",
                okValue: "我确定",
                noValue: "我就取消",
                okClick: function () {
                    tar.parentNode.parentNode.remove()
                }
            })
        }

        if (tar.className === "mod") {
            new M({
                username: tar.parentNode.parentNode.children[0].innerHTML,
                password: tar.parentNode.parentNode.children[1].innerHTML,
                okClick: function (p1, p2) {
                    tar.parentNode.parentNode.children[0].innerHTML = p1
                    tar.parentNode.parentNode.children[1].innerHTML = p2
                }
            })
        }
    })


})
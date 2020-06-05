require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        r: "RRR"
    }
})


require(["r", "$"], function (R, $) {
    new R({
        data: [{
            input: $.get(".username"),
            reg: /^.{4,10}$/,
            emptyInfo: "用户名不可以为空",
            errorInfo: "用户名格式不正确"
        }, {
            input: $.get(".password"),
            reg: /^\w{4,10}$/,
            emptyInfo: "密码不可以为空",
            errorInfo: "密码格式不正确"
        }, {
            input: $.get(".email"),
            reg: /^\w+@\w+\.(com|con)$/,
            emptyInfo: "用户名不可以为空",
            errorInfo: "用户名格式不正确"
        }, {
            input: $.get(".nickname"),
            reg: /^[\u4e00-\u9fa5]{2,4}$/,
            emptyInfo: "昵称不可以为空",
            errorInfo: "昵称格式不正确"
        }],
        stus:$.get(".stus"),
        btn:$.get(".btn")

    })
})

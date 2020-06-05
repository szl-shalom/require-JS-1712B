define(["tab", "$", "r"], function (Tab, $, R) {
    function Dialog(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create()
            new Tab({
                title: $.get(".title", this.con),
                content: $.get(".content", this.con)
            })

            new R({
                data: [{
                    input: $.get(".username", this.con),
                    reg: /^[\u4e00-\u9fa5]{2,4}$/,
                    okInfo: "√",
                    cancelInfo: "用户名格式必须是2-4个中文字符",
                    emptyInfo: "用户名不可以为空"
                },
                {
                    input: $.get(".password", this.con),
                    reg: /^\w{6,10}$/,
                    okInfo: "√",
                    cancelInfo: "密码格式必须是6-10个数字字母下划线",
                    emptyInfo: "密码不可以为空"
                }],
                code: $.get(".code", this.con),
                usercode: $.get(".usercode", this.con),
                btn: $.get(".btn", this.con)
            })
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.className = "mask"
            document.body.appendChild(this.mask)

            this.con = document.createElement("div")
            this.con.className = "con1";
            this.con.innerHTML = `
            <div class="title">
                <span class="active">登录</span>
                <span>注册</span>
            </div>
            <div class="content">
                <div class="box active">
                    <input type="text" class="username" placeholder="请输入用户名"><p></p>
                    <input type="password" class="password" placeholder="请输入密码"><p></p>
                    <input type="text" class="usercode"><span class="code">7889</span>
                    <button class="btn">登录</button>
                </div>
                <div class="box">
                    注册
                </div>
            </div>
            `
            document.body.appendChild(this.con)
        }
    }

    return Dialog;
})
define(["V"], function (V) {
    function Add(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Add.prototype = {
        constructor: Add,
        init: function () {
            this.create()
            this.bindEvent()
        },
        create: function () {
            this.mask = document.createElement("div")
            this.mask.style = `
            position: fixed;left:0;top:0;width:100%;height:100%;background: rgba(0,0,0,.3);
            `
            document.body.appendChild(this.mask)
            this.content = document.createElement("div")
            this.content.style = `
            position: fixed;left:50%;top:50%;transform:translate(-50%,-50%);padding:20px;background: #fff;
            `
            this.content.innerHTML = `
            <h1>添加资金</h1>
            <label for="">
                <span>收支类型：</span>
                <select name="" id="">
                    <option value="充值">充值</option>
                    <option value="提现">提现</option>
                    <option value="存款">存款</option>
                </select>
            </label>
            <label for="">
                <span>姓名：</span>
                <input type="text">
            </label>
            <label for="">
                <span>收入</span>
                <input type="text">
            </label>
            <label for="">
                <span>支出</span>
                <input type="text">
            </label>
            <button>确定</button>
            <button>取消</button>
            `
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                inputs = this.content.querySelectorAll("input"),
                select = this.content.querySelector("select"),
                that = this;

            btns[0].addEventListener("click", function () {
                that.tbody.innerHTML += `
                <tr>
                    <td>${inputs[0].value}</td>
                    <td>${select.value}</td>
                    <td>${inputs[1].value}</td>
                    <td>${inputs[2].value}</td>
                    <td>
                        <button>删除</button>
                        <button>编辑</button>
                    </td>
                </tr>
                `
                var div = document.createElement("div")
                div.innerHTML = "添加成功"
                div.style = `
                    position:fixed;
                    top:-130px;
                    left:50%;
                    transform:translate(-50%,0);
                    width:300px;
                    height:80px;
                    line-height:80px;
                    text-align:center;
                    background:white;
                    color:green;
                `
                document.body.appendChild(div)
                V(div, {
                    top: 30,
                }, {
                    complete: function () {
                        setTimeout(function () {
                            div.remove()
                        }, 1000)
                    }
                })
                that.mask.remove();
                that.content.remove();
            })

            btns[1].addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
        }

    }

    return Add;
})


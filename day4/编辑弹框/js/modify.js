/*
 * @Description: This is a JS program !fun
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-03 15:34:14
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-03 16:55:15
 */
define(function () {
    function Modify(opt) {
        Object.assign(this, opt)
        this.init()
        console.log(this.el)

    }

    Modify.prototype = {
        constructor: Modify,
        init: function () {
            // 创建节点
            this.create();
            // 调用事件函数
            this.bindEvent()


        },
        create() {
            // 创建遮罩层
            this.mask = document.createElement("div");
            this.mask.style = `
                position:fixed;
                top:0px;
                left:0px;
                width:100%;
                height:100%;
                background-color:rgba(0,0,0,0.5);
            `
            document.body.appendChild(this.mask);
            // 创建内容盒子
            this.content = document.createElement("div");
            this.content.style = `
                position:absolute;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                background:white;
                padding:20px;
            `
            this.content.innerHTML = `
                <input type="text" value=${this.name}><br/>
                <input type="text" value=${this.age}><br/>
                <input type="date" value=${this.date}><br/>
                <button>确定</button>
                <button>取消</button>
            `
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                that = this;
            // 确定
            btns[0].addEventListener("click", function () {
                var inputs = that.content.querySelectorAll("input");
                that.el.parentNode.parentNode.children[0].innerHTML = inputs[0].value
                that.el.parentNode.parentNode.children[1].innerHTML = inputs[1].value
                that.el.parentNode.parentNode.children[2].innerHTML = inputs[2].value

                that.mask.remove()
                that.content.remove()
            })

            // 取消
            btns[1].addEventListener("click", function () {
                that.mask.remove()
                that.content.remove()
            })
        }

    }

    return Modify;
})
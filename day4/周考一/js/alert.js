/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-03 10:53:08
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-03 14:01:10
 */
define(function () {
    function Alert(opt) {
        Object.assign(this, {
            // 默认参数 
            width: "500px",
            height: "500px"
        }, opt)
        this.init()
    }
    Alert.prototype = {
        constructor: Alert,
        init: function () {
            // 创建对应的节点
            this.create()
            //  调用事件函数
            this.bindEvent()
        },
        create: function () {
            // 是否创建层罩层
            if (this.hasMask) {
                this.mask = document.createElement("div");
                this.mask.style = `position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);`
                document.body.appendChild(this.mask)
            }
            // 创建内容盒子
            this.content = document.createElement("div");
            this.content.style = `position: absolute;left:50%;top:50%;width:${this.width}px;height:${this.height}px;transform:translate(-50%,-50%);background:${this.skinName};padding:10px;`
            this.content.innerHTML = `
            <h1  style="text-align:center;border-bottom:1px solid #555;padding-bottom:20px;">${this.title}<span style="float: right;display:${this.hasCloseBtn ? "block" : "none"}">X</span></h1>
                <h2 style="text-align: center;border-bottom:1px solid #555;padding-bottom:20px;">${this.contentText}</h2>
                <button style="float: right;margin-right:20px;background:pink;width:80px;height:30px;" class="cancel">取消</button>
                <button style="float: right;margin-right:20px;background:pink;width:80px;height:30px;" class="ok">${this.btnText}</button>
            `
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var cancal = this.content.querySelector(".cancel"),
                ok = this.content.querySelector(".ok"),
                that = this;
            cancal.onclick = function () {
                alert("关闭")
                that.hasMask && that.mask.remove()
                that.content.remove()
            }

            ok.onclick = function () {
                alert("确定")
                that.hasMask && that.mask.remove()
                that.content.remove()
            }
        }
    }

    return Alert
})
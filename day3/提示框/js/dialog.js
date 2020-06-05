/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-02 11:10:42
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-02 13:46:10
 */
define(function () {
    function Dialog(opt) {
        Object.assign(this, opt)
        this.maskCssText = `background-color: rgba(0, 0, 0, .5);width: 100%;height: 100%;position: fixed;left: 0;top: 0;`
        this.conCssText = `background-color: white;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 300px;height: 200px;text-align: center;padding: 20px;`
        this.init()
        // console.log(this)
    }
    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            // 创建结构
            this.create()
            // 事件
            this.bindEvent()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = this.maskCssText;
            this.mask.innerHTML = `
            <div class="con" style="${this.conCssText}">
                <h3>提示内容</h3>
                <button>确定</button>
                <button>取消</button>
            </div>
            `
            document.body.appendChild(this.mask)
        },
        bindEvent: function () {
            var that = this;
            this.btns = this.mask.querySelectorAll("button")
            // 确定按钮
            this.btns[0].onclick = function () {
                that.mask.remove()
                that.okClick && that.okClick()
            }
            // 取消按钮
            this.btns[1].onclick = function () {
                that.mask.remove()
            }
        }

    }

    return Dialog;
})
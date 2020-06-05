/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-02 10:09:27
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-02 10:17:24
 */

define(function () {
    function Tips(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Tips.prototype = {
        constructor: Tips,
        init: function () {
            // 创建对应的DOM结构
            this.createEl()
            // 执行事件函数
            this.bindEvent()
            // 自动删除
            this.autoDel()
        },
        createEl: function () {
            this.div = document.createElement("div");
            this.div.style.cssText = `
                background-color:${this.color};
                height:45px;
                line-height: 45px;
            `
            this.div.innerHTML = `
                ${this.content}
                <span style="float: right;margin-right:10px;">X</span>
            `
            document.body.appendChild(this.div)
        },
        bindEvent:function(){
            this.span = this.div.querySelector("span");
            // 删除操作
            var that = this;
            this.span.addEventListener("click",function(){
               this.parentNode.remove()
            })
        },
        autoDel:function(){
            var that = this;
            setTimeout(function(){
                that.div.remove()
            }, this.time);
        }
    }

    return Tips;
})

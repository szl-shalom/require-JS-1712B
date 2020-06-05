define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            // 调用事件函数
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this, flag = true
            // 点击淡入
            this.el.onclick = function (e) {
                var tar = e.target;
                if (that.content.style.display !== "block") {
                    V(that.content, "fadeIn", 1000)
                    V(that.b, {
                        rotateX: 180
                    }, 1000)
                }


                if (tar.nodeName === "I") {
                    that.content.appendChild(tar.parentNode)
                }
            }
            //事件委托
            this.content.onclick = function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    that.el.appendChild(tar)
                }
                if (tar.nodeName === "I") {
                    tar.parentNode.remove()
                }
                e.stopPropagation()
                // return false;
                
            }
            // 
            document.onclick = function () {
                if (that.content.style.display === "block") {
                    V(that.content, "fadeOut", 1000)
                    V(that.b, {
                        rotateX: 0
                    }, 1000)
                }
            }
        }
    }

    return Sel;
})
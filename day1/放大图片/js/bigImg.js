
//定义模块
define(function () {
    function BigImg(opt) {
        Object.assign(this, opt) //合并参数
        this.init() // 初始化
    }

    BigImg.prototype = {
        constructor: BigImg,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            // 事件委托  点击事件
            var that = this; //保存this指向
            that.wrap.addEventListener("click", function (e) {
                var ev = e.target; // 保存事件源
                if (ev.nodeName === "IMG") { //判断点击的事件源是不是IMG标签
                    that.create(ev.src) // 创建对应的Dom结构
                }

            })

        },
        create: function (src) {
            var that = this;
            this.mask = document.createElement("div");
            this.mask.className = "mask"
            this.mask.style.cssText = `
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .5);
                position: fixed;
                top:0;
                left:0;
            `

            this.mask.innerHTML = `
                <img src="${src}" style="width:1200px;height:600px;position:absolute;
                top:50%;left:50%;margin-top:-300px;margin-left:-600px;"/>
            `
            document.body.appendChild(this.mask)

            this.mask.addEventListener("click", function () {
                that.mask.remove()
            })
        }
    }

    return BigImg
})
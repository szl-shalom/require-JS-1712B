define(function () {
    function BigImg(opt) {
        Object.assign(this, opt)
        this.init()
    }
    BigImg.prototype = {
        constructor: BigImg,
        init: function () {

            // 创建DOM结构
            this.creat();
            // 调用事件函数
            this.bindEvent()
        },
        creat: function () {
            this.mask = document.createElement("div");
            this.mask.style = `position: fixed;left:0;top:0;width:100%;height:100%;background: rgba(0,0,0,.3);`;
            document.body.appendChild(this.mask);
            this.content = document.createElement("div");
            this.content.style = `position: fixed;left:50%;top:50%;transform: translate(-50%,-50%);padding:20px;background: #fff;`;
            this.content.innerHTML = `
            <img src=${this.el.src} alt="" width=1200 height=800>
            <span
                style="position: absolute;left:20px;top:50%;transform: translate(0,-50%);background: transparent;color:#fff;font-size: 50px;">&lt;</span>
            <span
                style="position: absolute;right:20px;top:50%;transform: translate(0,-50%);background: transparent;color:#fff;font-size: 50px;">&gt;</span>
                <span style="position: absolute;top:0;right:0;font-size:26px;">X</span>`
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var spans = this.content.querySelectorAll("span");
            var that = this;
            this.img = this.content.querySelector("img")
            spans[0].addEventListener("click", function () {
                that.el = that.el.previousElementSibling || that.el.parentNode.lastElementChild
                that.img.src = that.el.src
            })
            spans[1].addEventListener("click", function () {
                that.el = that.el.nextElementSibling || that.el.parentNode.children[0]
                that.img.src = that.el.src
            })
            spans[2].addEventListener("click", function () {
                that.mask.remove()
                that.content.remove()
            })
        }

    }

    return BigImg;
})


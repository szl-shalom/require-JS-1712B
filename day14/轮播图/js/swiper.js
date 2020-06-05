define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0,
        }, opt)
        this.init()
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            // 数据渲染
            this.render()
            // 自动轮播
            this.autoPlay()
            // 调用事件函数
            this.bindEvent()
        },
        render: function () {
            var that = this;
            // 渲染内容图片
            this.container.innerHTML = this.data.map(function (item) {
                return `
                        <img src=${item.url} alt="">
                    `
            }).join("")
            // 渲染分页器
            this.page.innerHTML = this.data.map(function (item, index) {
                return `
                <li class="${index === that.index ? "active" : ""}">
                    <dl>
                        <dt>
                            <img src=${item.url} alt="">
                        </dt>
                        <dd>
                            ${item.title}
                        </dd>

                    </dl>
                </li>
                    `
            }).join("")
            // 复制第一张图片
            var img = this.container.children[0].cloneNode(true)
            // 追加到末尾
            this.container.appendChild(img)
            // 重新设置宽度
            this.container.style.height = this.container.children.length * 500 + "px"
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.next.click()//调用右按钮点击事件
            }, 1000)
        },
        bindEvent: function () {
            var that = this;
            this.swiper.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })
            this.swiper.addEventListener("mouseleave", function () {
                that.autoPlay()
            })
            this.next.addEventListener("click", function () {
                if (that.index === that.data.length) {
                    that.index = 0
                    that.container.style.marginTop = 0
                }
                that.change(that.index + 1)
            })
            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.data.length
                    that.container.style.marginTop = -that.index * 500 + "px"
                }
                that.change(that.index - 1)
            });
            [...this.page.children].forEach(function (item, index) {
                item.onclick = function () {
                    that.change(index)
                }
            })
        },
        change: function (i) {
            var that = this;
            this.page.querySelector(".active") && this.page.querySelector(".active").classList.remove("active")
            this.index = i //修改下标
            this.page.children[this.index === this.data.length ? 0 : this.index].classList.add("active")
            V(this.container, {
                marginTop: -this.index * 500
            })
            V(this.page.querySelector(".active"), "scroll", {
                container: that.page,
            })
        }
    }


    return Swiper;
})
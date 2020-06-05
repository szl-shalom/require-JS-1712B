define(["V"], function (V) {
    function N(opt) {
        Object.assign(this, {
            index: 0
        }, opt)
        this.init()
    }

    N.prototype = {
        constructor: N,
        init: function () {
            var img = this.container.children[0].cloneNode(true);
            this.container.appendChild(img)
            this.container.style.width = this.container.children.length * this.box.offsetWidth + "px";
            this.page.children[this.index].classList.add("active")
            this.container.style.left = -this.index * this.box.offsetWidth + "px"

            this.autoplay()
            this.bindEvent()
        },
        autoplay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.next.click()
            }, 2000);
        },
        change: function (n) {
            var that = this;
            that.page.children[that.index === that.container.children.length - 1 ? 0 : that.index].classList.remove("active")
            that.index = n
            that.page.children[that.index === that.container.children.length - 1 ? 0 : that.index].classList.add("active")
            V(that.container, {
                left: -that.index * that.box.offsetWidth
            })
        },
        bindEvent: function () {
            var that = this;
            this.box.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })

            this.box.addEventListener("mouseleave", function () {
                that.autoplay()
            });

            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })

            this.next.addEventListener("click", function () {
                if (that.index >= that.container.children.length - 1) {
                    that.index = 0;
                    that.container.style.left = 0;
                }

                that.change(that.index + 1)

            })

            this.prev.addEventListener("click", function () {
                if (that.index <= 0) {
                    that.index = that.container.children.length - 1;
                    that.container.style.left = -that.index * that.box.offsetWidth + "px";
                }
                that.change(that.index - 1)
            })
        }

    }

    return N;
})
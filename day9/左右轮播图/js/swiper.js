define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0,
            prevValue: "<",
            nextValue: ">",
        }, opt)
        this.init()
    }
    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            this.prev.innerHTML = this.prevValue;
            this.next.innerHTML = this.nextValue;
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this
            this.next.addEventListener("click", function () {
                that.index++
                if (that.index > that.data.length - 1) {
                    that.index = 0
                }
                that.changeImg()
            })

            this.prev.addEventListener("click", function () {
                that.index--
                if (that.index < 0) {
                    that.index = that.data.length - 1
                }
                that.changeImg()
            });
            [...this.page.children].forEach(function (item, index) {
                item.onclick = function () {
                    that.index = index
                    that.changeImg()

                }
            })
        },
        changeImg() {
            var that = this;
            this.img.src = this.data[this.index];
            V(this.img, "fadeIn")
            that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active")
            that.page.children[that.index].classList.add("active")
        }
    }

    return Swiper;
})
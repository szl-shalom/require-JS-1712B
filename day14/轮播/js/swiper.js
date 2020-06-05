define(function () {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0,
        }, opt)
        this.init()
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            this.autoPlay()
        },
        autoPlay: function () {
            var that = this;
            setInterval(function () {
                that.container.children[that.index].classList.remove("active")
                that.index++
                if (that.index > 4) {
                    that.index = 0
                }
                that.container.children[that.index].classList.add("active")
            }, 2000)
        }
    }


    return Swiper;
})
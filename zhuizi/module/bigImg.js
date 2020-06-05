define(function () {
    function N(opt) {
        Object.assign(this, {}, opt)
        this.init()
    }

    N.prototype = {
        constructor: N,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            this.left.addEventListener("mouseenter", function () {
                that.mask.style.display = "block"
                that.big.style.display = "block"
            })

            this.left.addEventListener("mouseleave", function () {
                that.mask.style.display = "none"
                that.big.style.display = "none"
            })

            document.addEventListener("mousemove", function (e) {
                var x = e.pageX - that.left.offsetLeft - that.mask.offsetWidth / 2,
                    y = e.pageY - that.left.offsetTop - that.mask.offsetHeight / 2
                if (x < 0) x = 0
                if (y < 0) y = 0
                if (x > that.left.offsetWidth - that.mask.offsetWidth) x = that.left.offsetWidth - that.mask.offsetWidth
                if (y > that.left.offsetHeight - that.mask.offsetHeight) y = that.left.offsetHeight - that.mask.offsetHeight

                that.mask.style.left = x + "px"
                that.mask.style.top = y + "px"
                that.img.style.marginLeft = - x * 5 + "px"
                that.img.style.marginTop = -y * 5 + "px"
            })
        }
    }

    return N;
})
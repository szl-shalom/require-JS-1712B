define(function () {
    function N(opt) {
        Object.assign(this, opt)
        this.init()
    }


    N.prototype = {
        constructor: N,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            var offsetTop = that.nav.offsetTop
            document.addEventListener("scroll", function () {
                var scrollTop = document.documentElement.scrollTop
                if (scrollTop > offsetTop) {
                    that.nav.style.position = "fixed"
                    that.nav.style.top = 0
                } else {
                    that.nav.style.position = ""
                }
            })
        }
    }
    return N;
})
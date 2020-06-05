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
            [...this.title.children].forEach(function (item, index) {
                item.onclick = function () {
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active")
                    item.classList.add("active")
                    that.content && that.content.querySelector(".active") && that.content.querySelector(".active").classList.remove("active")
                    that.content && that.content.children[index].classList.add("active")

                    that.cb && that.cb(item) //回调
                }
            })
        }
    }

    return N;
})
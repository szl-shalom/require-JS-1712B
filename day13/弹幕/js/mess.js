define(["V"], function (V) {
    function Mess(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Mess.prototype = {
        constructor: Mess,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this
            this.btn.addEventListener("click", function () {
                var val = that.input.value
                that.create(val)
            })
            document.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    that.btn.click()
                }
            })
        },
        create: function (val) {
            var that = this;
            var span = document.createElement("span")
            this.left.appendChild(span)
            span.style.position = "absolute";
            span.style.left = "100%"; span.style.color = "#" + Math.random().toString(16).substr(2, 6);
            span.style.top = `${this.random(0, this.left.offsetHeight - span.offsetHeight)}px`
            span.innerHTML = val
            V(span, {
                left: -span.offsetWidth
            }, {
                duration: that.random(1500, 3000),
                complete: function () {
                    span.remove()
                }
            })
        },
        random: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    }

    return Mess;
})
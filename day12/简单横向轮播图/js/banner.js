define(["V"], function (V) {
    function Nav(opt) {
        Object.assign(this, {
            index: 0
        }, opt)
        this.init()
    }

    Nav.prototype = {
        constructor: Nav,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            this.prev.onclick = function () {
                that.index--
                if (that.index < 0) {
                    that.index = 4
                }


                V(that.container, {
                    left: -that.index * 1200
                }, 1000)
            }

            this.next.onclick = function () {

                that.index++;
                if (that.index > 4) { 
                    that.index = 0
                }

                V(that.container, {
                    left: -that.index * 1200
                }, 1000)
            }
        }
    }

    return Nav;
})
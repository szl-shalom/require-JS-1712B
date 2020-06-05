define(["$", "V"], function ($, V) {
    function Tab(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            [...this.title.children].forEach(function (item, index) {
                item.onclick = function () {
                    $.get(".active", that.title) && $.get(".active", that.title).classList.remove("active")
                    item.classList.add("active")

                    $.get(".active", that.content) && $.get(".active", that.content).classList.remove("active")
                    that.content.children[index].classList.add("active")

                    V(that.underLine, {
                        left: item.offsetLeft
                    }, 5000)
                }
            })
        }
    }

    return Tab;
})
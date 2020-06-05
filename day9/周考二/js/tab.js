define(function () {
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
                item.addEventListener("click", function () {
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active")
                    that.content.querySelector(".active") && that.content.querySelector(".active").classList.remove("active")
                    item.classList.add("active")
                    that.content.children[index].classList.add("active")
                })
            })
        }
    }

    return Tab;
})


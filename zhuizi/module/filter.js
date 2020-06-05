define(["page", "$"], function (Page, $) {
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
            this.submit.addEventListener("click", function () {
                var val = that.userSearch.value
                var res = that.data.filter(function (item) {
                    return item.title.includes(val)
                })

                new Page({
                    data: res,
                    content: $.get(".content"),
                    page: $.get(".page"),
                    num: 8,
                    index: 0,
                })
            })
            this.price.addEventListener("click", function () {
                var flag = +that.price.getAttribute("flag")
                var res = that.data.sort(function (a, b) {
                    return flag ? a.price - b.price : b.price - a.price
                })
                flag ? that.price.setAttribute("flag", 0) : that.price.setAttribute("flag", 1)
                new Page({
                    data: res,
                    content: $.get(".content"),
                    page: $.get(".page"),
                    num: 8,
                    index: 0,
                })
            })
        }
    }

    return N;
})
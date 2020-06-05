/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-04 11:08:25
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-04 11:27:15
 */
define(["V"], function (V) {
    function Acc(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Acc.prototype = {
        constructor: Acc,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            [...this.list.children].forEach(function (item) {
                item.addEventListener("mouseenter", function () {
                    V(item, {
                        width: 500
                    })
                    V(item.querySelector(".mask-header"), {
                        height: 0
                    })

                    V(item.querySelector(".mask-footer"), {
                        left: -500
                    })
                })


                item.addEventListener("mouseleave", function () {
                    V(item, "reverse")

                    V(item.querySelector(".mask-header"), "reverse")

                    V(item.querySelector(".mask-footer"), "reverse")
                })
            })

        }
    }

    return Acc;
})
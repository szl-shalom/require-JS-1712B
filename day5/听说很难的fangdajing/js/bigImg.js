/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-04 15:38:42
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-04 16:08:04
 */
define(function () {
    function BigImg(opt) {
        Object.assign(this, opt),
            this.init()
    }

    BigImg.prototype = {
        constructor: BigImg,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            that.left.addEventListener("mouseenter", function () {
                that.mask.style.display = "block";
                that.right.style.display = "block";

            })
            that.left.addEventListener("mouseleave", function () {
                that.mask.style.display = "none";
                that.right.style.display = "none";

            })

            document.addEventListener("mousemove", function (e) {
                var x = e.pageX - that.mask.offsetWidth / 2 - that.left.offsetLeft,
                    y = e.pageY - that.mask.offsetHeight / 2;
                if (x < 0) x = 0
                if (y < 0) y = 0
                if (x > 400) x = 400
                if (y > 400) y = 400
                that.mask.style.left = x + "px"
                that.mask.style.top = y + "px"
                that.right.children[0].style.marginLeft = -x * 5 + "px"
                that.right.children[0].style.marginTop = -y * 5 + "px"
            })
        }
    }
    return BigImg;
})
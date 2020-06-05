define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            this.search.addEventListener("focus", function () {
                V(that.list, "slideDown")
                V(that.icon, {
                    rotateZ: 180
                })
            })
            this.list.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.search.value = tar.innerHTML;
                    V(that.list, "slideUp")
                    V(that.icon, "reverse")
                }

            })
            document.addEventListener("keydown", function (e) {
                switch (e.keyCode) {
                    case 38:
                        // 上箭头   
                        var el = that.list.querySelector(".active")
                        if (!el) {
                            that.list.lastElementChild.classList.add("active");
                            return;
                        }
                        el && el.classList.remove("active")
                        el.previousElementSibling ? el.previousElementSibling.classList.add("active") : el.parentNode.lastElementChild.classList.add("active")
                        break;
                    case 40:
                        // 下箭头
                        var el = that.list.querySelector(".active")
                        if (!el) {
                            that.list.firstElementChild.classList.add("active");
                            return;
                        }
                        el && el.classList.remove("active")
                        el.nextElementSibling ? el.nextElementSibling.classList.add("active") : el.parentNode.firstElementChild.classList.add("active")
                        break;
                    case 13:
                        // 回车
                        var el = that.list.querySelector(".active")
                        that.search.value = el.innerHTML;
                        V(that.list, "slideUp")
                        V(that.icon, "reverse")
                        break;
                }
            })

            that.search.addEventListener("blur", function () {
                V(that.list, "slideUp")
                V(that.icon, "reverse")
            })
        }
    }

    return Sel;
})
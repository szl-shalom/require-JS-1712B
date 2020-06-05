define(["V"], function (V) {
    function Floor(opt) {
        Object.assign(this, opt)
        this.init()
    }
    Floor.prototype = {
        constructor: Floor,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this, offsetTop = this.nav.offsetTop,
                lisTop = [...this.floor.children].map(function (item) {
                    return item.offsetTop
                });
            console.log(lisTop)

            document.addEventListener("scroll", function () {
                // 获取滚动条滚动的距离
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop;
                // 吸顶
                if (scrollTop >= offsetTop) {
                    that.nav.classList.add("fixed")
                    that.nav.nextElementSibling.style.marginTop = that.nav.offsetHeight + "px"
                } else {
                    that.nav.classList.remove("fixed")
                    that.nav.nextElementSibling.style.marginTop = 0
                }
                // 楼层高亮
                lisTop.forEach(function (item, index) {
                    if (scrollTop >= item) {
                        that.floorLeft.querySelector(".active") && that.floorLeft.querySelector(".active").classList.remove("active")
                        that.floorLeft.children[index].classList.add("active")
                    }
                })
                // 给导航添加动画
                if (scrollTop >= 500) {
                    that.floorLeft.parentNode.style.opacity = 1
                } else {
                    that.floorLeft.parentNode.style.opacity = 0
                }

            });

            [...that.floorLeft.children].forEach(function (item, index) {
                item.onclick = function () {
                    console.log(index)
                    V(that.floor.children[index], "scroll", Math.floor(Math.random() * 3000))
                }
            })


        }
    }

    return Floor;
})
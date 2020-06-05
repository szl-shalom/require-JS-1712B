define(function () {
    function Floor(opt) {
        Object.assign(this, opt)
        this.init()
    }


    Floor.prototype = {
        constructor: Floor,
        init: function () {

            console.log(this.arr)
            this.bindEvent()

        },
        bindEvent: function () {
            var that = this;
            var arr = [...this.floor.children].map(function (item) {
                return item.offsetTop
            })
            document.addEventListener("scroll", function () {
                var scrollTop = document.documentElement.scrollTop;
                arr.forEach(function (item, index) {
                    if (scrollTop >= item) {
                        that.right.querySelector(".active") && that.right.querySelector(".active").classList.remove("active")
                        that.right.children[index].classList.add("active")
                    }
                })
            })
            this.right.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    document.documentElement.scrollTop = arr[tar.innerHTML - 1];
                }
            })
        }
    }

    return Floor;
})
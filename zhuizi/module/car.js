define(function () {
    function N(opt) {
        Object.assign(this, {}, opt)
        this.init()
    }

    N.prototype = {
        constructor: N,
        init: function () {
            var that = this;
            this.table.addEventListener("click", function (e) {
                var tar = e.target;
                switch (tar.className) {
                    case "del":
                        tar.parentNode.parentNode.remove()
                        break;
                    case "add":
                        tar.previousElementSibling.innerHTML++
                        var num = tar.previousElementSibling.innerHTML //数量
                        var price = tar.parentNode.previousElementSibling.children[0].innerHTML //单价
                        tar.parentNode.nextElementSibling.innerHTML = price * num; //修改小计
                        break;
                    case "red":
                        tar.nextElementSibling.innerHTML--
                        if (tar.nextElementSibling.innerHTML < 1) {
                            var flag = confirm("再减就要删除了???")
                            if (flag) {
                                tar.parentNode.parentNode.remove()
                            } else {
                                tar.nextElementSibling.innerHTML = 1
                            }
                        }
                        var num = tar.nextElementSibling.innerHTML //数量
                        var price = tar.parentNode.previousElementSibling.children[0].innerHTML //单价
                        tar.parentNode.nextElementSibling.innerHTML = price * num; //修改小计
                        break;
                    case "check-all":
                        console.log(that.table);
                        [...that.table.querySelectorAll(".check-one")].forEach(function (item) {
                            item.checked = tar.checked
                        })
                        break;
                    case "check-one":
                        that.checkAll.checked = [...that.table.querySelectorAll(".check-one")].every(function (item) {
                            return item.checked
                        })
                        break;
                }
                that.complete()
            })
        },
        complete: function () {
            var allPrice = 0, that = this;
            [...that.table.querySelectorAll(".check-one:checked")].forEach(function (item) {
                allPrice += +item.parentNode.parentNode.children[4].innerHTML
            })
            this.allPrice.innerHTML = "总价钱：" + allPrice;


            // this.allPrice.innerHTML = "总价钱：" + [...this.table.querySelectorAll(".check-one:checked")].reduce(function (a, item) {
            //     return a + +item.parentNode.parentNode.children[4].innerHTML
            // }, 0)

        }
    }

    return N;
})
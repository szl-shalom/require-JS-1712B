define(function () {
    function Car(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Car.prototype = {
        constructor: Car,
        init: function () {
            // 渲染数据
            this.render();
            this.bindEvent();
            this.complete()
        },
        render() {
            this.tbody.innerHTML = this.data.map(function (item) {
                return `
                <tr>
                    <td>
                        <input type="checkbox" class="check-one" ${item.flag ? "checked" : ""}>
                    </td>
                    <td>${item.name}</td>
                    <td>
                        <img src=${item.img} alt="">
                    </td>
                    <td>${item.price}</td>
                    <td>
                        <button class="red">-</button>
                        <span>${item.count}</span>
                        <button class="add">+</button>
                    </td>
                    <td>${item.count * item.price}</td>
                    <td>
                        <button class="del">删除</button>
                    </td>
                </tr>
                `
            }).join("");
        },
        bindEvent: function () {
            var that = this;
            this.table.addEventListener('click', function (e) {
                var tar = e.target;
                switch (tar.className) {
                    case 'add':
                        tar.previousElementSibling.innerHTML++
                        var count = tar.previousElementSibling.innerHTML
                        var price = tar.parentNode.previousElementSibling.innerHTML
                        tar.parentNode.nextElementSibling.innerHTML = count * price
                        break;
                    case "red":
                        if (tar.nextElementSibling.innerHTML <= 0) {
                            return
                        }
                        tar.nextElementSibling.innerHTML--
                        var count = tar.nextElementSibling.innerHTML
                        var price = tar.parentNode.previousElementSibling.innerHTML
                        tar.parentNode.nextElementSibling.innerHTML = count * price
                        break;
                    case "del":
                        tar.parentNode.parentNode.remove()
                        break;
                    case "check-all":
                        var all = [...that.tbody.querySelectorAll(".check-one")];
                        all.forEach(function (item) {
                            item.checked = tar.checked;
                        })
                        break;
                    case "check-one":
                        var all = [...that.tbody.querySelectorAll(".check-one")];
                        var flag = all.some(function (item) {
                            return item.checked
                        })
                        that.checkAll.checked = flag;
                        break;
                }
                that.complete()
            })

        },
        complete: function () {
            var p = 0, c = 0;
            var res = [...this.tbody.querySelectorAll("input:checked")];
            res.forEach(function (item) {
                p += +item.parentNode.parentNode.children[5].innerHTML
                c += +item.parentNode.parentNode.children[4].children[1].innerHTML
            })
            this.priceAll.innerHTML = `总价：${p}`
            this.countAll.innerHTML = `总数量：${c}`
        }
    }
    return Car;
})


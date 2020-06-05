define(["V"], function (V) {
    function Page(opt) {
        Object.assign(this, {
            index: 0,
            num: 5,
        }, opt)
        this.init()
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            this.change()
            this.bindEvent()
        },
        render: function (data) {
            this.tbody.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.height}</td>
                    <td>${item.weight}</td>
                    <td>${item.sex}</td>
                </tr>
                `
            }).join("")
        },
        renderList: function () {
            var str = ""
            for (var i = 1; i <= this.maxLength; i++) {
                str += `<li>${i}</li>`
            }
            this.list.innerHTML = str
            V(this.mask, {
                left: this.index * 34 + this.list.offsetLeft
            })
        },
        bindEvent: function () {
            var that = this;
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1
                    that.change()
                }
                if (tar.className === "next") {
                    that.index++
                    that.change()
                }

                if (tar.className === "prev") {
                    that.index--
                    that.change()
                }

                if (tar.className === "first") {
                    that.index = 0
                    that.change()
                }

                if (tar.className === "end") {
                    that.index = that.maxLength - 1
                    that.change()
                }

                if (tar.className === "btn") {
                    if (!(that.code.value - 1 >= 0 && that.code.value - 1 <= that.maxLength - 1)) {
                        alert("非法的页码")
                        return
                    }
                    that.index = that.code.value - 1
                    that.change()

                }

            })
            this.sel.addEventListener("change", function () {
                that.num = +this.value
                that.index = 0
                that.change()
            })

        },
        change: function () {
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num)
            this.render(data)
            this.maxLength = Math.ceil(this.data.length / this.num)
            this.renderList()

            this.first.disabled = this.index === 0
            this.prev.disabled = this.index === 0
            this.next.disabled = this.index === this.maxLength - 1
            this.end.disabled = this.index === this.maxLength - 1
        }
    }

    return Page;
})
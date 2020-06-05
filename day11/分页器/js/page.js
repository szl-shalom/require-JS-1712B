define(function () {
    function Page(opt) {
        Object.assign(this, {
            index: 0,
            num: 10,
        }, opt)
        this.init()
    }

    Page.prototype = {
        constructor: Page,
        init: function () {

            this.change()
            // 调用事件函数
            this.bindEvent()
        },
        renderCon: function (data) {
            this.con.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.sex}</td>
                </tr>
                `
            }).join("")
        },
        renderPage() {
            var str = ""
            // for (var i = 1; i <= this.maxLength; i++) {
            //     str += `<li class=${this.index + 1 === i ? "active" : ""}>${i}</li>`
            // }

            if (this.index <= 2) {
                for (var i = 1; i <= 7; i++) {
                    str += `<li class=${this.index + 1 === i ? "active" : ""}>${i}</li>`
                }
            } else if (this.index >= this.maxLength - 3) {
                for (var i = this.maxLength - 7 + 1; i <= this.maxLength; i++) {
                    str += `<li class=${this.index + 1 === i ? "active" : ""}>${i}</li>`
                }
            } else {
                str = `
                <li>${this.index - 2}</li>
                <li>${this.index - 1}</li>
                <li>${this.index}</li>
                <li class="active">${this.index + 1}</li>
                <li>${this.index + 2}</li>
                <li>${this.index + 3}</li>
                <li>${this.index + 4}</li>
                `
            }
            this.pageUl.innerHTML = str;
        },
        bindEvent: function () {
            var that = this;
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    // 获取下标
                    that.index = tar.innerHTML - 1
                    that.change()
                }

                if (tar.className === "prev") {
                    that.index--
                    that.change()
                }

                if (tar.className === "next") {
                    that.index++
                    that.change()
                }

                if (tar.className === "go") {
                    if (that.code.value - 1 >= 0 && that.code.value - 1 <= that.maxLength - 1) {
                        that.index = that.code.value - 1
                        that.change()
                    } else {
                        alert("输入不合法")
                    }

                }
            })
            this.numDom.addEventListener("change", function () {
                that.num = +that.numDom.value
                that.change()
            })
        },
        change: function () {
            var that = this;
            // 获取分页器最大值
            this.maxLength = Math.ceil(this.data.length / this.num)
            // 获取对应的数据
            var data = that.data.slice(that.index * that.num, (that.index + 1) * that.num)
            // 渲染内容
            that.renderCon(data)
            // 渲染分页器
            that.renderPage()
            // 是否禁用
            that.index === 0 ? that.prev.disabled = true : that.prev.disabled = false
            that.index === that.maxLength - 1 ? that.next.disabled = true : that.next.disabled = false
        }
    }
    return Page;
})
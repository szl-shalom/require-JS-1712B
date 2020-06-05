define(function () {
    function Page(opt) {
        Object.assign(this, {
            index: 1,
            num: 15,
        }, opt)
        this.init()
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            // 获取对应的数据
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num)
            // 渲染数据
            this.renderCon(data)
            // 获取分页的长度
            this.maxLength = Math.ceil(this.data.length / this.num);
            // 渲染分页器
            this.renderPage()
            // 事件函数
            this.bindEvent()
        },
        renderCon: function (data) {
            this.tbody.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.age}</td>
                    <td>${item.sex}</td>
                    <td>${item.name}</td>
                </tr>
                `
            }).join("")
        },
        renderPage: function () {
            var str = ""
            for (var i = 1; i <= this.maxLength; i++) {
                str += `<li class="${this.index + 1 === i ? "active" : ""}">${i}</li>`
            }
            this.pageUl.innerHTML = str;
        },
        bindEvent: function () {
            var that = this;
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1

                    // 获取对应的数据
                    var data = that.data.slice(that.index * that.num, (that.index + 1) * that.num)
                    // 渲染数据
                    that.renderCon(data)
                    // 渲染分页器
                    that.renderPage()
                }
            })
        }
    }

    return Page;
})
define(function () {
    function Page(opt) {
        Object.assign(this, {

        }, opt)
        this.init()
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            // 获取对应的数据
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num)
            // 渲染数据
            this.render(data)
            // 获取分页器长度
            this.maxLength = Math.ceil(this.data.length / this.num)
            // 渲染页码
            this.renderList()
            // 执行时间函数
            this.bindEvent()
        },
        render: function (data) {
            this.content.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dt>
                        <img src=${item.url} alt="">
                        <div class="buy">
                            <button>立即购买</button>
                        </div>
                    </dt>

                    <dd>
                        <p>${item.title}</p>
                        <p>${item.price}$</p>
                    </dd>
                    <ul>
                      ${item.imgs.map(function (item) {
                    return `
                        <li><img src=${item} alt=""></li>
                        `
                }).join("")}
                    </ul>
                </dl>
                `
            }).join("")
        },
        renderList: function () {
            var str = "";
            for (var i = 1; i <= this.maxLength; i++) {
                str += `<li class=${this.index + 1 === i ? "active" : ""}>${i}</li>`
            }
            this.page.innerHTML = str;
        },
        bindEvent: function () {
            // [...this.page.children].forEach(function (item, index) {

            // })
            var that = this;
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1
                    // 获取对应的数据
                    var data = that.data.slice(that.index * that.num, (that.index + 1) * that.num)
                    // 渲染数据
                    that.render(data)
                    // 渲染页码
                    that.renderList()
                }
            })
        }

    }

    return Page;
})
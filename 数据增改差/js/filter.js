define(["dialog"], function (Dialog) {
    function Filter(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Filter.prototype = {
        constructor: Filter,
        init: function () {
            this.render(this.data)

            this.bindEvent()
        },
        render: function (data) {
            this.content.innerHTML = data.map(function (item, index) {
                return `
                <dl>
                    <dt>
                        <img src="${item.url}" alt="">
                    </dt>
                    <dd>
                        <span>昵称：${item.nickname}</span>
                        <p>
                            ${item.mes}
                        </p>
                        <div>
                            <button class="del" ind=${index}>删除</button>
                            <button class="mod" ind=${index}>编辑</button>
                        </div>
                    </dd>
                </dl>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            // Tab切换  
            [...this.pic.children].forEach(function (item) {
                item.addEventListener("click", function () {
                    that.pic.querySelector(".active") && that.pic.querySelector(".active").classList.remove("active")
                    item.classList.add("active")
                })
            })
            // 提交数据
            this.submit.addEventListener("click", function () {
                var obj = {
                    nickname: that.nickname.value,
                    mes: that.mes.value,
                    url: that.pic.querySelector(".active").src
                }
                that.data.push(obj)
                that.render(that.data)
            })
            // 事件委托
            this.content.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.className === "del") {
                    var index = +tar.getAttribute("ind")
                    that.data.splice(index, 1)
                    that.render(that.data)
                }

                if (tar.className === "mod") {
                    var index = +tar.getAttribute("ind")
                    var obj = that.data[index]
                    new Dialog({
                        mes: obj.mes,
                        okclick: function (val) {
                            that.data[index].mes = val
                            that.render(that.data)
                        }
                    })
                }
            })
            // 模糊搜索
            this.search.addEventListener("click", function () {
                var val = that.userSearch.value
                var data = that.data.filter(function (item) {
                    return item.nickname.includes(val) || item.mes.includes(val)
                })
                that.render(data)
            })
        }
    }

    return Filter;
})
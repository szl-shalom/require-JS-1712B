define(function () {
    function Filter(opt) {
        Object.assign(this, opt)
        this.init()

    }


    Filter.prototype = {
        constructor: Filter,
        init: function () {
            // 渲染数据
            this.render(this.data)
            // 调用事件函数
            this.bindEvent()
        },
        render: function (data) {
            var that = this
            this.tbody.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.nickname}</td>
                    <td>${item.like}</td>
                    <td>${item.sex}</td>
                    <td>
                        ${item.mes.map(function (item) {
                    return `
                                <span>${item}</span><br>
                            `
                }).join("")}
                    </td>
                    <td>${item.age}</td>
                    <td>
                        <button data-id="${item.ID}" class="del">删除</button>
                    </td>
                </tr>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this
            this.submit.onclick = function () {
                var res = that.data.filter(function (item) {
                    return item.name.includes(that.input.value) || item.nickname.includes(that.input.value) || item.like.includes(that.input.value) || item.sex.includes(that.input.value)
                })
                that.render(res)
            }
            this.tbody.onclick = function (e) {
                var tar = e.target;
                if (tar.className === "del") {
                    // 获取自定义属性
                    var ID = +tar.getAttribute("data-id");
                    // 获取ID对应的下标
                    var index = that.data.findIndex(function (item) {
                        return item.ID === ID
                    })
                    // 删除对应的数据
                    that.data.splice(index, 1)
                    // 重新渲染
                    // that.render(that.data)
                    that.submit.click()
                }
            }
        }
    }
    return Filter;
})


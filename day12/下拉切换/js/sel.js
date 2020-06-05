define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            // 添加事件函数
            this.bindEvent()
            // 渲染标题
            this.renderTitle()
            // 渲染热门数据
            this.renderHot()

        },
        bindEvent: function () {
            var that = this;
            // 聚焦事件
            this.search.addEventListener("focus", function () {
                V(that.con, "fadeIn")
            });
            // 事件委托
            this.title.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    // 控制下划线移动
                    V(that.underLine, {
                        left: tar.offsetLeft,
                        width: tar.offsetWidth
                    })
                    // 判断是不是热门
                    if (tar.innerHTML === "热门") {
                        // 热门数据
                        that.renderHot()
                    } else {
                        // 英文字母
                        var str = ""
                        tar.innerHTML.split("").forEach(function (key) {
                            str += `<li><b>${key}</b>`
                            var arr = that.data.data.citylist[key]
                            arr.forEach(function (item) {
                                for (var key1 in item) {
                                   str+=`<span>${key1}</span>`
                                }
                            })
                            str += '</li>'
                        })
                        that.ul.innerHTML = str;
                    }
                }
            })

        },
        renderTitle: function () {
            var obj = this.data.data.citylist, arr = [], str = "<span>热门</span>"
            // 循环遍历对象 获取一个键值 并且放到数组中
            for (var key in obj) {
                arr.push(key)
            }
            // 循环遍历数组  每4位进行切割数组并转化为字符串 最后字符串拼接
            while (arr.length > 0) {
                str += "<span>" + arr.splice(0, 4).join("") + "</span>"
            }
            this.title.innerHTML = str;
        },
        renderHot: function () {
            this.ul.innerHTML = this.data.data.hotcitylist.map(function (item) {
                return `
                    <span>${item.name}</span>
                `
            }).join("")
        }
    }

    return Sel;
})
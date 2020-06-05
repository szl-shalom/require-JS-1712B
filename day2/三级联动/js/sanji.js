define(function () {
    function S(opt) {
        Object.assign(this, opt)
        this.init()
    }
    S.prototype = {
        constructor: S,
        init: function () {
            // 渲染省  默认渲染
            this.render(this.province, this.data)
            // 调用事件函数
            this.bindEvent()
        },
        render: function (ele, data) {
            ele.innerHTML = data.map(function (item) {
                return `
                    <option>${item.name}</option>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            // 添加省的改变事件
            this.province.addEventListener("change", function () {
                // 注意:当前函数this指向 指向绑定的元素  就是省select标签
                // 获取select标签中当前被选中option的位于兄弟中的下标 => select.selectedIndex
                that.i = this.selectedIndex; //获取下标
                var data = that.data[that.i].children //获取对应数据
                that.render(that.city, data) //渲染市
            })
            // 添加市的改变事件
            this.city.addEventListener("change", function () {
                // data[1].children[1].children
                that.ind = this.selectedIndex; //获取下标
                var data = that.data[that.i].children[that.ind].children //获取数据
                that.render(that.area, data) //渲染地区
            })
        }

    }
    return S;
})
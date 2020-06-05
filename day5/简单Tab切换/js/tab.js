/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-04 14:33:34
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-04 15:06:11
 */
define(function () {
    function Tab(opt) {
        Object.assign(this, {
            type:"click",
            className:"active"
        }, opt);
        this.init()
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            // 调用事件函数
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener(that.type, function () {
                    // 标题
                    // 移除原来的类名
                    that.title.querySelector(`.${that.className}`) && that.title.querySelector(`.${that.className}`).classList.remove(that.className)
                    // 给当前事件元素添加类名
                    item.classList.add(that.className)

                    // 内容
                    // 移除原来的类名
                    that.content && that.content.querySelector(`.${that.className}`) && that.content.querySelector(`.${that.className}`).classList.remove(that.className)
                    // 给当前事件元素添加类名
                    that.content && that.content.children[index].classList.add(that.className)
                })
            })
        }
    }

    return Tab;
})
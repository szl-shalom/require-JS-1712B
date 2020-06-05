/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-03 15:34:34
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-03 16:03:26
 */
define(function () {
    function Add(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Add.prototype = {
        constructor: Add,
        init: function () {
            // 调用事件函数
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            // 给btn添加点击事件
            this.btn.addEventListener("click", function () {
                // 非空验证
                if (that.username.value.trim()=== "" || that.age.value.trim() === "" || that.date.value.trim() === "") {
                    alert("不允许为空")
                    return;
                }
                // 获取三个input的值
                that.username.value
                that.age.value
                that.date.value
                //  创建对应的dom结构 或者 字符串
                var str = `<tr>
                <td>${that.username.value}</td>
                <td>${that.age.value}</td>
                <td>${that.date.value}</td>
                <td>
                    <button>编辑</button>
                </td>
            </tr>`
                //  追加的tbody中
                that.tbody.innerHTML += str;
            })
        }
    }

    return Add;
})
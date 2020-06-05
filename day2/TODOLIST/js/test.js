// 定义模块
define(function () {
    function test(opt) {
        Object.assign(this, opt) // 合并参数
        this.init() //初始化
        // console.log(this)
    }

    test.prototype = {
        constructor: test,
        init: function () {
            // 调用事件函数
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            // 给input绑定回车事件
            this.input.addEventListener("keydown", function (e) {
                // 判断是不是回车
                if (e.keyCode === 13) {
                    var val = this.value // 获取input的值

                    // 拼接字符串 方式一
                    // var html = `
                    // <li>
                    //     <input type="checkbox">
                    //     <span>${val}</span>
                    //     <button>删除</button>
                    // </li>
                    // `
                    // that.ulHeader.innerHTML += html;

                    // 创建对应dom结构 方式二
                    var ele = document.createElement("li");
                    ele.innerHTML = `
                        <input type="checkbox" class="check">
                        <span>${val}</span>
                        <button>删除</button>
                    `
                    that.ulHeader.appendChild(ele)
                    that.complete()//计算数量

                }
            })

            //删除ulHeader操作
            document.addEventListener("click", function (e) {
                var tar = e.target; //获取事件源
                // 点击botton按钮
                if (tar.tagName === "BUTTON") {
                    tar.parentNode.remove() //删除自己的父元素
                }
                if (tar.className === "check") {
                   tar.checked ?  that.ulFooter.appendChild(tar.parentNode) :  that.ulHeader.appendChild(tar.parentNode) // 移动li
                }
                that.complete() //计算数量
            })
        },
        complete: function () {
            this.doing.innerHTML = this.ulHeader.children.length
            this.finish.innerHTML = this.ulFooter.children.length
        }
    }

    return test;
})
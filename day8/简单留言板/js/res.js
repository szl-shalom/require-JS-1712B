define(function () {
    function R(opt) {
        Object.assign(this, opt)
        this.init()
    }

    R.prototype = {
        constructor: R,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            [...this.header.children].forEach(function (item, index) {
                item.onclick = function () {
                    that.header.querySelector(".active") && that.header.querySelector(".active").classList.remove("active")
                    item.classList.add("active")
                }
            })
            this.submit.onclick = function () {
                if (that.username.value.trim() === "" || that.mes.value.trim() === "") {
                    alert("不可以为空")
                    return;
                }
                var resUsername = /^[\u4e00-\u9fa5\w]{2,8}$/
                if (!resUsername.test(that.username.value)) {
                    alert("用户名必须是2-8个汉字，数字，下划线，字母组成")
                    return;
                }

                that.content.innerHTML = `
                <dl>
                    <dd>
                        <img src="${that.header.querySelector(".active").src}" alt="">
                    </dd>
                    <dt>
                        <p>
                            <span>${that.username.value}</span>：
                            <span>${that.mes.value}</span>

                        </p>
                        <p>
                            ${new Date().toLocaleString()}
                        </p>
                        <button class="del">删除</button>
                    </dt>
                </dl>
                `+ that.content.innerHTML
            }
            this.mes.oninput = function () {
                that.count.innerHTML = 140 - this.value.length
            }
            this.content.onclick = function (e) {
                var tar = e.target;
                if (tar.className === "del") {
                    tar.parentNode.parentNode.remove()
                }
            }
        }
    }

    return R
})
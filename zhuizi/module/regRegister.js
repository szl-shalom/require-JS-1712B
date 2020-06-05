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
            // 循环绑定失去焦点事件
            this.data.forEach(function (item) {
                item.input.onblur = function () {
                    if (this.value.trim() === "") {
                        this.nextElementSibling.innerHTML = item.emptyInfo;
                        return;
                    }

                    if (!item.reg.test(this.value)) {
                        this.nextElementSibling.innerHTML = item.cancelInfo;
                        return;
                    }
                    this.nextElementSibling.innerHTML = item.okInfo;
                    return true;
                }
            })
            // 注册验证
            this.btn.onclick = function () {
                var flag = that.data.every(function (item) {
                    return item.input.onblur()
                })

                if (flag && that.code.innerHTML.trim() === that.usercode.value.trim()) {
                    var res = that.data.map(function (item) {
                        return `${item.input.className}=${item.input.value}`
                    }).join("&")

                    location.href = `./login.html?${res}`
                } else {
                    alert("信息不正确")
                }
            }
            // 随机验证码
            this.code.onclick = function () {
                this.innerHTML = Math.random().toString(36).substr(2, 4)
            }
        }
    }

    return R;

    // username=张三&passwrod=12312312&age=13&sex=男
})
define(function () {
    function N(opt) {
        Object.assign(this, {}, opt)
        this.init()
    }

    N.prototype = {
        constructor: N,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this
            this.data.forEach(function (item) {
                item.input.onblur = function () {
                    if (this.value === "") {
                        this.nextElementSibling.innerHTML = item.emptyInfo;
                        return;
                    }
                    if (!item.reg.test(this.value)) {
                        this.nextElementSibling.innerHTML = item.errorInfo;
                        this.nextElementSibling.style.color = "red"
                        return;
                    }
                    this.nextElementSibling.style.color = ""
                    this.nextElementSibling.innerHTML = "√"
                    return true;
                }

            })

            this.stus.onclick = function () {
                that.btn.disabled = !this.checked
            }

            this.btn.onclick = function () {
                that.data.forEach(function (item) {
                    item.input.onblur()
                })
            }
        }
    }

    return N;
})
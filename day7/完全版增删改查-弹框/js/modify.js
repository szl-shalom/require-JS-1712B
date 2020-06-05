define(function () {
    function Dialog(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create()
            this.bindEvent()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                position:fixed;
                left:0;
                top:0;
                background:rgba(0,0,0,.3);
                width:100%;
                height:100%;
            `
            document.body.appendChild(this.mask);
            this.content = document.createElement("div")
            this.content.style = `
                position:fixed;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                padding:20px;
                background:white;
                text-align:center;
            `
            this.content.innerHTML = `
                <input type="text" value=${this.username}>
                <input type="text" value=${this.password}>
                <button class="ok">修改</button>
                <button class="no">取消</button>
            `
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var that = this;

            this.content.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.className === "ok") {
                    var p1 = that.content.children[0].value,
                        p2 = that.content.children[1].value;

                    that.mask.remove()
                    that.content.remove()
                    that.okClick && that.okClick(p1, p2)
                }

                if (tar.className === "no") {
                    that.mask.remove()
                    that.content.remove()
                }
            })
        }
    }

    return Dialog
})
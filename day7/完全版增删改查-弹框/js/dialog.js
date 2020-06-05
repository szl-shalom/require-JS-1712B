define(function () {
    function Dialog(opt) {
        Object.assign(this, {
            title: "我是默认标题",
            okValue: "ok",
            noValue: "no"
        }, opt)
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
                <h1>${this.title}</h1>
                <button class="ok">${this.okValue}</button>
                <button class="no">${this.noValue}</button>
            `
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var that = this;
            this.content.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.className === "ok") {
                    that.mask.remove()
                    that.content.remove()
                    that.okClick && that.okClick()
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
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
            this.mask = document.createElement("div")
            this.mask.style = `
                width:100%;
                height:100%;
                position:fixed;
                left:0;
                top:0;
                background:rgba(0,0,0,.5);
            `
            document.body.appendChild(this.mask)
            this.con = document.createElement("div")
            this.con.style = `
                position:fixed;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                background:#fff;
                padding:20px;
            `
            this.con.innerHTML = `
                <input type="text" value=${this.mes} />
                <button>提交</button>
                <button>取消</button>
            `
            document.body.appendChild(this.con)
        },
        bindEvent: function () {
            var btns = this.con.querySelectorAll("button"), that = this;

            btns[0].addEventListener("click", function () {
                that.okclick && that.okclick(that.con.querySelector("input").value)

                that.mask.remove()
                that.con.remove()
            })

            btns[1].addEventListener("click", function () {
                that.mask.remove()
                that.con.remove()
            })
        }
    }
    return Dialog
})


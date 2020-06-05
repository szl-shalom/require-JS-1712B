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
            // this.mask = document.createElement("div")
            // this.mask.style = `
            //     position:fixed;
            //     left:0;
            //     top:0;
            //     background:rgba(0,0,0,.3);
            //     width:100%;
            //     height:100%;
            // `
            // document.body.appendChild(this.mask)

            this.content = document.createElement("div");
            this.content.style = `
                position:absolute;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                background:white;
                padding:20px;
            `
            this.content.innerHTML = `
                <h1>${this.title}</h1>
                <button>${this.okValue}</button>
                <button>${this.noValue}</button>
            `
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var that = this;
            var btns = this.content.querySelectorAll("button");
            btns[0].onclick = function () {
                // that.mask.remove()
                that.content.remove()
                that.okclick && that.okclick()
            }
            btns[1].onclick = function () {
                // that.mask.remove()
                that.content.remove()
                that.noclick && that.noclick()
            }
        }
    }

    return Dialog;
})

define(function () {
    function Dialog(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            // this.create()
            this.bindEvent()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                position:fixed;
                left:0;
                top:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3)
            `
            this.mask.innerHTML = `
                <div style="
                    position:absolute;
                    left:50%;
                    top:50%;
                    transform:translate(-50%,-50%);
                    background:white;
                    padding:20px;
                    width:200px;
                    height:200px;
                    text-align:center;
                ">
                    <h2>${this.title}</h2>
                    <button>${this.okValue}</button>
                    <button>${this.cancelValue}</button>
                </div>
                
            `
            document.body.appendChild(this.mask)
        },
        bindEvent: function () {
            var btns = this.mask.querySelectorAll("button");
            var that = this;
            btns[0].onclick = function () {
                that.mask.remove()
                that.onclick && that.onclick()
            }

            btns[1].onclick = function () {
                that.mask.remove()

            }

            
        }
    }
    return Dialog;
})
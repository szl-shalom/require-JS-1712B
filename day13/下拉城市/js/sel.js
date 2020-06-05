define(function () {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            console.log(this.data)

            this.create()
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            this.content.addEventListener("click", function (e) {
                var tar = e.target;
                switch (tar.className) {
                    case "check-all":
                        [...that.content.querySelectorAll("input")].forEach(function (item) {
                            item.checked = true;
                        })
                        break;
                    case "check-clear":
                        [...that.content.querySelectorAll("input")].forEach(function (item) {
                            item.checked = false;
                        })
                        break;
                    case "close":
                        that.content.remove()
                        that.mask.remove()
                        break

                    case "ok":
                        var inputs = [...that.content.querySelectorAll(".two:checked")]
                        var res = inputs.map(function (item) {
                            return item.nextElementSibling.innerHTML
                        })
                        that.con.innerHTML = res.join("||")

                        that.content.remove()
                        that.mask.remove()
                        break
                    case "one":
                        var res = [...tar.parentNode.querySelectorAll(".two")]
                        res.forEach(function (item) {
                            item.checked = tar.checked
                        })
                        break;
                    case "two":
                        var par = tar.parentNode.parentNode
                        var res = par.querySelectorAll("input:checked")
                        par.parentNode.children[0].checked = res.length === 0 ? false : true
                        break;
                }

            })


        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .3);`
            document.body.appendChild(this.mask)
            this.content = document.createElement("div");
            this.content.className = "content"
            this.content.innerHTML = `
                <button class="check-all">全选</button>
                <button class="check-clear">清空</button>
                <ul class="clearfix">
                    ${this.data.map(function (item) {
                return `
                        <li>
                            <input type="checkbox" class="one">
                            <span>${item.name}</span>
                            <ol>
                              ${item.children.map(function (item) {
                    return `
                                <li>
                                    <input type="checkbox" class="two">
                                    <span>${item.name}</span>
                                </li>
                                `

                }).join("")}
                            </ol>
                        </li>
                        `
            }).join("")}
                </ul>

                <button class="close">关闭</button>
                <button class="ok">确定</button>
            `
            document.body.appendChild(this.content)
        },

    }


    return Sel;
})
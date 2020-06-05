define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.render(this.data)
            this.bindEvent()
        },
        render: function (data) {
            this.ul.innerHTML = data.map(function (item, index) {
                return `<li index=${index}>${item}</li>`
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            this.search.addEventListener("focus", function () {
                that.ul.style.display = "block"
            })
            this.ul.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.con.innerHTML += `
                    <span>
                       ${ tar.innerHTML}
                        <b>X</b>
                    </span>
                    `
                    var index = +tar.getAttribute("index")
                    that.data.splice(index, 1)
                    that.render(that.data)
                    that.ul.style.display = "none"
                }
            })
            this.con.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "B") {
                    tar.parentNode.remove()
                }
            })
            this.search.addEventListener("input", function () {
                var data = that.data.filter(function (item) {
                    return item.includes(that.search.value)
                })
                that.render(data)
            })
        }

    }

    return Sel;
})
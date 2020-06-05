define(["V"], function (V) {
    function Sel(opt) {

        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            this.con.addEventListener("click", function () {
                // that.ul.style.display="block";
                if (that.ul.style.display !== "block")
                    V(that.ul, "slideDown")
            });
            this.ul.addEventListener("click", function (e) {

                var tar = e.target;
                if (tar.nodeName === "INPUT") {
                    that.con.innerHTML = [...that.ul.querySelectorAll("input:checked")].map(function (item) {
                        return item.nextElementSibling.innerHTML
                    }).join(",")
                }
                e.stopPropagation()
            });
            document.addEventListener("click", function () {
                if (that.ul.style.display === "block")
                    V(that.ul, "slideUp")
            })
            this.btn.addEventListener("click", function (e) {
                alert(that.con.innerHTML)
            })

        }
    }

    return Sel;
})
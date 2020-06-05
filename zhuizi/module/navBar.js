define(["V"], function (V) {
    function N(opt) {
        Object.assign(this, {}, opt)
        this.init()
    }

    N.prototype = {
        constructor: N,
        init: function () {
            this.render();
            this.bindEvent()
        },
        render: function () {
            console.log(this.data)
            this.ul.innerHTML = this.data.map(function (item) {
                return `
                    <li>${item.title}</li>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            [...this.ul.children].forEach(function (item, index) {
                item.addEventListener("mouseenter", function () {
                    if (that.con.style.display != "block")
                        V(that.con, "slideDown")
                    that.con.innerHTML = that.data[index].children.map(function (item) {
                        return `
                        <dl>
                            <dt>
                                <img src=${item.url} alt="">
                            </dt>
                            <dd>
                                <p>${item.desc}</p>
                                <p>${item.price}$</p>
                            </dd>
                        </dl>
                        `
                    }).join("")
                })
            })

            this.navBar.addEventListener("mouseleave", function () {
                V(that.con, "slideUp")
            })
            var offsetTop = that.navBar.offsetTop;
            document.addEventListener("scroll", function () {
                var scrollTop = document.documentElement.scrollTop;
                if (scrollTop > offsetTop) {
                    that.navBar.style.position = "fixed";
                    that.navBar.style.top = "0";
                    that.navBar.style.left = "50%";
                    that.navBar.style.transform = "translate(-50%,0)";
                    that.navBar.nextElementSibling.style.marginTop = that.navBar.offsetHeight + "px"
                } else {
                    that.navBar.style.position = "";
                    that.navBar.style.left = "0";
                    that.navBar.style.transform = "";
                    that.navBar.nextElementSibling.style.marginTop = 0
                }
            })
        }
    }

    return N;
})
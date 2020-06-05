define(function () {
    function Nav(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Nav.prototype = {
        constructor: Nav,
        init: function () {
            this.render()
            this.bindEvent()
        },
        render: function () {
            this.ul.innerHTML = this.data.map(function (item) {
                return `
                <li>
                    ${item.name}
                    <ol>
                       ${item.children.map(function (item) {
                    return `
                            <li>
                            ${item.name}
                            <ul class="three">
                                ${item.children.map(function () {
                        return `
                                        <li>${item.name}</li>
                                    `
                    }).join("")}
                            </ul>
                            </li>
                        `
                }).join("")}
                    </ol>
                </li>
                `
            }).join("")
        },
        bindEvent: function () {
            [...this.ul.children].forEach(function (item) {
                item.onmouseenter = function () {
                    item.lastElementChild.style.display = "block"
                }

                item.onmouseleave = function () {
                    item.lastElementChild.style.display = "none"
                };
            });

            [...this.ul.querySelectorAll("ol>li")].forEach(function (item) {
                item.onmouseenter = function () {
                    item.lastElementChild.style.display = "block"
                }

                item.onmouseleave = function () {
                    item.lastElementChild.style.display = "none"
                };
            })
        }
    }

    return Nav;
})
define(function () {
    function N(opt) {
        Object.assign(this, {}, opt)
        this.init()
    }

    N.prototype = {
        constructor: N,
        init: function () {
            this.render()
        },
        render: function () {
            console.log(this.data)
            this.ul.innerHTML = this.data.map(function (item) {
                return `
                    <li>
                    ${item.title}
                    <div class="con">
                        ${item.children.map(function (item) {
                            return `
                            <dl>
                                <dt>
                                    <img src=${item.url} alt="">
                                </dt>
                                <dd>
                                    ${item.desc}
                                </dd>
                            </dl>
                            `
                            }).join("")}
                    
                    </div>
                    </li>
                `
            }).join("")
        },
    }

    return N;
})
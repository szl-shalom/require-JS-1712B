define(function () {
    function S(opt) {
        Object.assign(this, opt)
        this.init()
        console.log(this.data)
    }

    S.prototype = {
        constructor: S,
        init: function () {
            this.render(this.province, this.data)
            this.bindEvent()
        },
        render: function (el, data) {
            el.innerHTML = data.map(function (item) {
                return `
                    <option>${item.name}</option>
                `
            }).join("");
        },
        bindEvent: function () {
            var that = this;

            this.province.addEventListener("change", function () {
                that.indexProvince = this.selectedIndex
                var data = that.data[that.indexProvince].children
                that.render(that.city, data)
            })
            this.city.addEventListener("change", function () {
                var indexCity = this.selectedIndex
                var data = that.data[that.indexProvince].children[indexCity].children
                that.render(that.area, data)
            })
        }
    }

    return S;
})
/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-04 09:57:43
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-04 10:43:57
 */
define(function () {
    function Gift(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Gift.prototype = {
        constructor: Gift,
        init: function () {
            // 调用倒计时函数
            this.cartDownTime()
        },
        cartDownTime: function () {
            var that = this;
            this.timer1 = setInterval(function () {
                var t = that.furTime - new Date() //获取差
                var sec = Math.floor(t / 1000 % 60) //获取秒
                var min = Math.floor(t / 1000 / 60 % 60) //获取秒
                var hour = Math.floor(t / 1000 / 60 / 60 % 24) //获取秒
                var day = Math.floor(t / 1000 / 60 / 60 / 24) //获取秒
                that.header.innerHTML = `倒计时还有${day}天${hour}小时${min}分钟${sec}秒`
                if (t <= 0) {
                    that.header.innerHTML = `抽奖中`
                    clearInterval(that.timer1)
                    // 调用抽奖抽奖
                    that.getGift()
                    that.timer3 = setInterval(function () {
                        that.getGift()
                        that.data.length === 0 && clearInterval(that.timer3)
                    }, 4000)
                }
            }, 1000);
        },
        getGift: function () {
            var that = this;
            this.timer2 = setInterval(function () {
                // 生成随机数组下标
                that.index = Math.floor(Math.random() * that.data.length);
                // 获取对应数据
                var obj = that.data[that.index]
                // 渲染
                that.name.innerHTML = obj.name
                that.tel.innerHTML = obj.phone
            }, 200)
            setTimeout(function () {
                clearInterval(that.timer2)
                var html = `
                 <li>
                    ${ that.name.innerHTML} --- ${that.tel.innerHTML}
                 </li>
                `
                that.list.innerHTML += html
                that.data.splice(that.index, 1)
            }, 2000)

        }
    }
    return Gift;
})
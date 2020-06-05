/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-04 09:57:31
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-04 10:20:57
 */
require.config({
    baseUrl: "js/",
    paths: {
        g: "gift",
        d: "data"
    }
})

require(["g", "d"], function (Gift, data) {
    new Gift({
        furTime: +new Date() + 5555,//未来时间
        header: document.querySelector(".header"),
        data: data,
        name: document.querySelector(".name"),
        tel: document.querySelector(".tel"),
        list: document.querySelector(".list")
    })
})
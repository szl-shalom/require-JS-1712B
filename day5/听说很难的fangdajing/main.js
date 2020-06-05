/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-04 15:25:13
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-04 15:40:47
 */
require.config({
    paths: {
        b: "bigImg"
    },
    baseUrl: "js/"
})

require(["b"], function (B) {
    new B({
        left: document.querySelector(".left"),
        right: document.querySelector(".right"),
        mask: document.querySelector(".mask"),
    })
})
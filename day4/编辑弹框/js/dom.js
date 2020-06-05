/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-03 15:33:50
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-03 15:42:24
 */
define(function () {
    return {
        get: function (el) {
            return document.querySelector(el)
        },
        gets: function (el) {
            return document.querySelectorAll(el)
        },
    }
})
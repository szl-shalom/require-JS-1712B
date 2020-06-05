/*
 * @Description: This is a JS program !s
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-04 11:15:17
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-04 11:15:54
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
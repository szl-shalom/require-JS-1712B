/*
 * @Description: This is a JS program !,
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-03 10:53:04
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-03 10:56:14
 */
define(function () {
    return {
        get: function (el) {
            return document.querySelector(el)
        },
        gets: function (el) {
            return document.querySelectorAll(el)
        }
    }
})
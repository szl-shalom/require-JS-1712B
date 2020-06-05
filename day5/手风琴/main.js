/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-12-04 11:07:50
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-12-04 11:17:18
 */
require.config({
    baseUrl: "js/",
    paths: {
        a: "acc",
        V: "../lib/velocity.min",
        $: "dom"
    }
})

require(["a", "V", "$"], function (Acc, V, $) {
    new Acc({
        list: $.get(".list"),
        
    })
})
// 定义模块  获取节点

define(function () {
    function get(el) {
        return document.querySelector(el)
    }

    return get;
})
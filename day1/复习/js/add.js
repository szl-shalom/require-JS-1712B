// 定义模块
define(["./cdd"], function (b) {
    // 声明一个求和函数
    function add(x, y) {
        return x + y
    }

    return {
        add: add,
        b: b
    }
})
// 定义模块
define(function () {
    //封装函数内部的代码块
    function drag(el) {
        var flag = 0,//开关变量
            pos = null; // 记录位置
        // 鼠标按下事件
        el.addEventListener("mousedown", function (e) {
            flag = 12312312;//开启开关变量
            pos = {
                x: e.offsetX, //鼠标点距离元素的左边距
                y: e.offsetY, //鼠标点距离元素的上边距
            }
            el.style.position = "absolute";// 开启定位
            e.preventDefault() //阻止默认行为

        })
        // 鼠标移动事件
        document.addEventListener("mousemove", function (e) {
            if (flag) {
                var x = e.pageX - pos.x,
                    y = e.pageY - pos.y
                // 边界判断
                if (x < 0) x = 0
                if (y < 0) y = 0
                if (x > document.documentElement.clientWidth - el.offsetWidth) x = document.documentElement.clientWidth - el.offsetWidth
                if (y > document.documentElement.clientHeight - el.offsetHeight) y = document.documentElement.clientHeight - el.offsetHeight
                // 赋值
                el.style.left = x + "px"
                el.style.top = y + "px"


            }
        })
        // 鼠标抬起事件
        document.addEventListener("mouseup", function () {
            flag = ""
        })
    }


    // 抛出模块
    return drag
})
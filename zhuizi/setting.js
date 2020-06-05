require.config({
    baseUrl: "./",
    paths: {
        r: "module/regRegister", // 注册模块
        $: "module/dom", // 节点操作模块
        g: "module/getUrlPar", //获取地址栏参数模块 
        d1: "mock/navBarData", // 吸顶数据模块
        navBar: "module/navBar", // 吸顶数据渲染+二级菜单
        V: "lib/velocity.min",
        leftBar: "module/leftBar", // 左侧菜单来数据渲染
        swiper: "module/swiper", // 轮播
        listData: "mock/listData", //列表页数据
        filter: "module/filter",//模糊搜索模块
        tab: "module/tab", //tab切换段
        bigImg: "module/bigImg", //放大镜模块
        car: "module/car", //购物车模块
        page: "module/page", //分页器模块
        dialog: "module/dialog",//弹框登录

    }
})


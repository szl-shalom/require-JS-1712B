require.config({
    baseUrl: "js/", //基址路径*
    paths: { // 起外号*
        $: "dom",
        data: "data"
    },
    shim: [{
        deps: ["路径"],// 模块依赖
        exports: "抛出模块名称" // 抛出模块接口
    }] // 配置第三方非AMD模块依赖
})



require(["$", "data"], function () {

})
// 引入模块

require(["js/test", "js/dom"], function (Test, get) {

    new Test({
        input: get(".ipt"),
        ulHeader: get(".ul-header"),
        ulFooter: get(".ul-footer"),
        doing: get(".doing"),
        finish: get(".finish"),
    })
})
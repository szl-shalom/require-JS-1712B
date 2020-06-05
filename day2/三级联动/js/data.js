define(function () {
    var arr = [{
        name: "河北省",
        children: [{
            name: "邯郸",
            children: [{
                name: "复兴区"
            },
            {
                name: "丛台区"
            }]
        },
        {
            name: "石家庄",
            children: [{
                name: "不知名的地区"
            }]
        }]
    }, {
        name: "河南省",
        children: [{
            name: "濮阳",
            children: [{
                name: "清风"
            }]
        }, {
            name: "洛阳",
            children: [{
                name: "牡丹区"
            }]
        }]
    }]
    window.data = arr
    return arr;
})



define(function () {
    function Add(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Add.prototype = {
        constructor: Add,
        init: function () {
            if (this.username === '' || this.password === '') {
                alert("不能为空")
                return;
            }

            if (this.username.length >= 4 && this.username.length <= 12 && this.password.length >= 4 && this.password.length <= 12) {
                this.tbody.innerHTML+=`
                <tr>
                    <td>${this.username}</td>
                    <td>${this.password}</td>
                    <td>
                        <button class="del">删除</button>
                        <button class="mod">修改</button>
                    </td>
                </tr>
                `


            } else {
                alert("长度必须在4-12为之间")
            }

        },


    }

    return Add
})
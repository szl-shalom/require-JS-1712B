# 引入reuqire

```javascript
    <script src="./lib/require.js" data-main="入口文件"></script>
```


# 怎么定义模块

```javascript
    define(["模块的路径1","模块的路径2"...],function (a,b){
        // a是模块路径1抛出的接口

        // ToDoList 
        // 模块内的功能


        // 抛出模块
        return 模块名称        
    })
```

## 引入模块

```javascript
    require(["模块路径1","模块路径2","模块路径3"...],function(a,b,c){
        // a是模块路径1对应的JS文件抛出的接口
    })
```
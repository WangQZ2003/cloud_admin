import Mock from "mockjs"

const data = Mock.mock({
    // +1, 1-10, 5
    "list|5": [
        {
            "id|+1": 1, //id+1
            "name|3": "jack", // 生成3条数据
            "username|1-3": "哈哈哈 ",// 随机生成1-3条数据
            "phone|11": "5",//string生成11个
            "age|1-100": 1,//number
            "age1|20": 1, //number
            "salary|4500-5500.1-3": 0,// number 随机生成小数的位数
            "salary1|4500-5500.2": 0,// number 随机生成小数的位数
            "status|1": true,// 1/2
            "status|2-4": true, //2/(2+4)=3/1 true 3/2 false
            "order|2": {
                id: 1,
                name: "11",
                price: 69.9
            },
            "order1|1-3": {
                id: 1,
                name: "11",
                price: 69.9
            },
            idCart:/\d{15}|\d{18}/
        }
    ]
})

console.log(JSON.stringify(data, null, 2));


// 流程：
/*
1.引入 mockjs
2.调用mockjs方法生成数据
3.返回数据
*/


// mockjs
// 数据模板定义规范 "list|10"
// 数据占位符定义规范"@ctitle()"
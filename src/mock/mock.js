// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
let backBase = "/businessBack"

const base = "/mock" + backBase
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})


const getOrderList = function(status) {
    let data = {
        "result":[],
        code: 0,
        message:"success"
    }
    
    return data

}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(`${base}/getOrderList`, 'post', getOrderList())


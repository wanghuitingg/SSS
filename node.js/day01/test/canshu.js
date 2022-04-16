//1.创建url对象（引入nodejs内置url模块）
var url = require("url");

// url 内置模块
// 其中的parse 会分割参数


// console.log(url);
//定义链接

var wangzhi = "http://www.baidu.com?name=张三&age=18";

console.log(url.parse(wangzhi));

// 如果我的parse第二个参数  为true  会自动的把字符串 转化成对象
var param = url.parse(wangzhi,true).query;
console.log(param);

console.log(param.name);
console.log(param.age);
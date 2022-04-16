//1.创建url对象（引入nodejs内置url模块）
var url = require("url");
//2.调用url对象方法
var wangzhi = "http://itcast.cn?name=张三&age=18";
console.log(url.parse(wangzhi));
console.log(url.parse(wangzhi, true));

var param = url.parse(wangzhi, true).query;
console.log(param);
console.log(param.name);
console.log(param.age);

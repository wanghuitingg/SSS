//1.创建path对象（引入nodejs内置path模块）
var path = require("path");
//2.调用path对象方法
//  赋值给一个路径
var testData = 'c:/app/view/godos/add.html';
// 获取文件尾缀  也就是后缀名  文件的后缀名
// .vue  .html .php .....
// 获取文件尾缀  也就是后缀名
console.log(path.extname(testData));
// 获取最后一层
console.log(path.basename(testData));
// 去除以后一层
console.log(path.dirname(testData));
//  去除最后两层
console.log(path.dirname(path.dirname(testData)));

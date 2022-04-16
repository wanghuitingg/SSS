//1.创建fs对象（引入node内置的fs模块）
var fs = require('fs');

//2.调用函数写数据进文件
fs.writeFile('./a.txt', '小黑你真帅', function(err) {
    // err  为null - 则写入成功
    // err不为null - 则写入失败
    if (err) {
    	console.log(err);
    	return;
    }

    console.log('写入成功');
});






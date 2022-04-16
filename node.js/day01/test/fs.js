var fs = require('fs');
// console.log(fs);
// write file
// 第一个就是文件地址
// data  就是文件所需要写入的内容
// 回调函数

//通过fs板块  写入文件

// fs.writeFile('./a.txt', '啦啦啦啦啦啦啦', function(err) {
//     // err  为null - 则写入成功
//     // err不为null - 则写入失败
//     if (err) {
//     	console.log(err);
//     	return;
//     }

//     console.log('写入成功');
// });


// 通过fs 读取文件
// err 是读取成功还是失败的信息
// data 是读取的结果
fs.readFile('a.txt', function(err, data) {
	if (err) {
		console.log(err)
		return;
	}
	console.log(data)
})

//<Buffer e5 b0 8f e9 bb 91 e4 bd a0 e7 9c 9f e5 b8 85>
// 我能读取成功  只是这块咱们看不懂  十六进制


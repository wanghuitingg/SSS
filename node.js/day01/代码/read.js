var fs = require('fs')
//2.练习：读取a.txt内容
fs.readFile('a.txt', function(err, data){
	if (err) {
		console.log(err)
		return;
	}
	console.log(data)
})
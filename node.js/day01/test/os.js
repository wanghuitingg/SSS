//内置  读取操作系统的os模块
// 内置模块的情况下  不需要写./  ../ 直接引用即可

// 你想使用一个模块  不管是内置模块 还是自定义模块  都需要先require 才能进行使用


const os = require("os");
console.log(os)

console.log('hello，'		 + os.EOL		    + '四幅科技');
console.log('主机名: '		 + os.hostname());
console.log('操作系统名: ' 	 + os.type());
console.log('操作系统平台: ' + os.platform());
console.log('内存总量: ' 	 + os.totalmem() 	+ " 字节.");
console.log('空闲内存: ' 	 + os.freemem() 	+ " 字节.");

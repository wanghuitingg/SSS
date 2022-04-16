//引入内置模块
var http = require('http');
// console.log(http);
// 使用http 内置模块的createServer 创建属于自己的服务器
var server = http.createServer();
// server.on 监听的意思  请求
// 请求  一个叫响应
// request 请求
// response 响应
server.on('request', function(request, response) {

	// request 里面有一个内置的url
	// 通过这个url获取当前的这个链接
	var url = request.url;
	// 通过不同的地址  访问不同的组件
	if (url == '/') {
		var content = 'this is index';
	} else if (url == '/login') {
		var content = 'this is login';
	} else {
		var content = '404 Not Found';
	}
	
	response.write(content);
	response.end();


});

//4.启动服务器
// 端口  执行的函数 
server.listen(8080, function() {
	console.log('服务已启动，可以通过：http://localhost:8080 访问测试')
});


// 1、引入http模块
// 2、创建自己的服务器
/*

// 是有回调的request,response
// 请求  响应
server.on('request', function(request,response) {
	response.write('hello');
	// 终止的意思
 	response.end();
});

*/

/*
server.listen  注意服务器端口 可以自己定义  尽量定义一些软件上没有
8888  8001

*/


/*
一个js文件  就是一个模块
什么是包  包和我模块之间的关系是什么呢

我可不可以理解为 文件夹   就是一个包  包里面存放了模块  有可能是一个模块 多个模块呢

node_modules  每一个文件夹  都是包

*/
// npm init 是干嘛的 初始化


// 配置cnpm c就是中国的意思  淘宝镜像


// mysql sql语句
// 数据库

// 手撕koa2框架 
// 用封装好的框架  写api接口

// 全栈  后端自己写接口  前端就拿vue_shop的界面搭建
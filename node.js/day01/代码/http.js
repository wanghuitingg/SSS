//说明
//nodejs作用：1-提供JS运行环境，2-提供N多模块(API)让JS更强大

//1.创建http对象（引入node内置的http模块）
var http = require('http');

//2.创建http服务器（调用http对象的createServer）
var server = http.createServer();

//3.监听用户请求
server.on('request', function() {
	console.log('收到客户端请求了');
});

//4.启动服务器
server.listen(8080, function(){
	console.log('服务已启动，可以通过：http://localhost:8080 访问测试')
});
// ------------------------------------------

// //1.创建http对象（引入node内置的http模块）
// var http = require('http');

// //2.创建http服务器（调用http对象的createServer）
// var server = http.createServer();

// //3.监听用户请求
// server.on('request', function(request,response) {
// 	console.log('收到客户端请求了');
// 	response.write('hello');
// 	response.end();
// });

// //4.启动服务器
// server.listen(8080, function(){
// 	console.log('服务已启动，可以通过：http://localhost:8080 访问测试')
// });
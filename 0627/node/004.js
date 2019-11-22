//get请求
const http = require('http');
const url = require('url');
const querystring = require('querystring');


const server = http.createServer((req,res)=>{
	//req 可读
	//res 可写
	// console.log('url=>',req.url);
	// console.log('method=>',req.method);

	// const myUrl = url.parse(req.url);
	// console.log(myUrl.query)
	// const obj = querystring.parse(myUrl.query);
	// console.log(obj)

	const myUrl2 = url.parse(req.url,true);
	console.log(myUrl2);
	const obj2 = myUrl2.query;
	console.log(obj2)

	res.setHeader('Content-Type',"text/html;charset=utf-8");
	res.end('kuazhu');

})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})























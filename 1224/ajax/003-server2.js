
//可以相应并返回
//"GET请求"

var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
	console.log(req.url);
	var urlStr = req.url;
	console.log("1:::",urlStr);
	if(urlStr == '/favicon.ico'){
		res.end("/favicon.ico")
	}
	var filePath = './'+urlStr;
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data)
		}else{
			res.statusCode = 404;
			res.end('nod Found')
		}
	})
});



server.listen(3000,'127.0.0.1',function(){
	console.log("Server running at http://127.0.0.1:3000")
})
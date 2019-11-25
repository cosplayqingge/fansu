//托管静态文件

const express = require('express');
const app = express();

// let server = app.use(express.static('public'));
// server.listen('3000',()=>{
// 	console.log('127.0.0.1:3000')
// })



//优化
app.use(express.static('public'));
app.listen('3000',()=>{
	console.log('127.0.0.1:30001')
})

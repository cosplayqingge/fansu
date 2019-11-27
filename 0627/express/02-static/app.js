const express = require('express')
const app = express();



app.use(express.static('public'));//静态文件的第一种方法;

//虚拟路径
app.use('/static', express.static('public'))







app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log("Example app listening on port 3000!"))
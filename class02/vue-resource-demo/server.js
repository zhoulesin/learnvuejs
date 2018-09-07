var express = require('express')

var app = express()

app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))

app.get('/getData',function(res,rsp){
	console.log('get req')
	rsp.send(JSON.stringify({errcode:0,msg:'get success'}))
})

app.post('/postData',function(res,rsp){
	console.log('post req')
	rsp.send(JSON.stringify({errcode:0,msg:'post success'}))
})

app.listen(3000,function(){
	console.log('express is running at port 3000...')
})
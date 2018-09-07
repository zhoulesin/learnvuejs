var express = require('express')

var app = express()

app.get('/jsonpReq',function(res,rsp){

	// jsonp的原理就是通过调用callback方法,需要的数据通过参数传过去
	// 例如请求是 http://localhost:5000/jsonpReq?callback=_jsonptdvlgg6fmh
	// 客户端会在本地生成一个方法名为_jsonptdvlgg6fmh(data)的方法
	// 那么服务端需要响应给客户端的数据就是 _jsonptdvlgg6fmh({errcode:0,msg:'jsonp success'})
	// 所以需要如下拼接
	// 
	// 详情见/public/jsonp.ht

	console.log(res.query)
	var str = JSON.stringify({errcode:0,msg:'jsonp success'})
	// console.log('jsonp req' + str)
	rsp.send(res.query.callback + '('+str+')')
})

app.listen(5000,function(){
	console.log('server2 is running 5000...')
})
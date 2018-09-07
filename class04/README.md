# vue中的组件和路由

## 组件的传值

### 子组件中使用父组件的数据
html代码
```html

<div id='app'>
	<comp v-bind:parentmsg='msg'><comp>
</div>

```

javascrip代码
```javascript

var comp = {
	template:'<h1> {{ parentmsg }} </h1>',
	data(){
		return {
		}
	},
	props:['parentmsg'] 			
}

var app = new Vue({
	el:'#app',
	data:{
		msg:'this is parent msg'
	},
	components:{
		comp	
	}	
})

```
步骤
- 添加子组件
- 给子组件添加props属性,有这个属性后,vue会找到v-bind中该属性对应的值从父组件中获取数据赋值给改属性
	comp.parentmsg = app.msg
- 子组件引用自己的parentmsg属性
- props属性只读,不可改

### 子组件中调用父组件的方法
html代码

```html

<div id='app'>
	<comp v-on:func='pclick'></comp>
<div>

```

javascript代码

```javascript

var comp = {
	template:'<button @click='sclick'>点击</button>',
	methods:{
		sclick(){
			this.$emit('func',param1,param2)
		}
	}
}

var app = new Vue({
	el:'#app',
	data:{},
	methods:{
		pclick(param1,param2){
			console.log('parent method')			
		}
	},
	components:{
		comp
	}
})


```
步骤
- 添加子组件
- vue会找到v-on中该属性对应的值从父组件中获取方法
	comp.func = app.pclick
- 子组件在自己的方法中触发func方法,this.$emit('func')
- 通过$emit方法也可以进行传值

## VUE中使用refs获取Dom及子组件
html代码

```html

<div id='app'>
	<comp ref='compa'></comp>
	<div ref='diva'>{{ msg }}</div>
	<button @click='getDom'>点击</button>
</div>

```

javascript代码

```javascript

var comp = {
	template:"<div ref='sd'>{{ msg }}</div>",
	data(){
		return {
			msg:'子组件msg'
		}
	},
	methods:{
		show(){
			console.log('子组件show')
		}
	}
}

var app = new Vue({
	el:'#app',
	data:{
		msg:'parent msg'
	},
	methods:{
		getDom(){
			console.log(this.$refs.diva.innerText)
			console.log(this.$refs.compa)
			this.$refs.compa.show()
			console.log(this.$refs.compa.$refs.sd.innerText)
		}
	},
	components:{
		comp
	}
})

```


# VUE基本指令

https://cn.vuejs.org/v2/api/#%E6%8C%87%E4%BB%A4

## v-text

```html
<span v-text='msg'></span>
和下面一样
<span>{{msg}}</span>
```



## v-html

```html
<div v-html='html'>
    
</div>
```



## v-show

```html
<div v-show='flag'>
    根据真假值切换元素的display css属性
</div>
```

## v-if

```html
<div v-if='flag'>
    
</div>
```

## v-else

```html
<div v-if='flag'>
    flag is true
</div>
<div v-else>
    flag is flase
</div>
```

## v-for

```html
<div v-for='item in items'>
    {{ item.text }}
</div>
多种写法
v-for='item in items'
v-for='(item,idx) in items'
v-for='(val,key) in object'
v-for='(val,key,idx) in object'

如果重新排列,需要提供key属性
<div v-for='item in items' :key='item.id'>
    {{ item.text }}
</div>
```

## v-on

- 缩写 @
- 监听事件@click='fn'
- 修饰符
  - .stop 调用event.stopPropagation()阻止冒泡
  - .prevent 调用event.preventDefault() 阻止默认事件
  - .capture 添加事件侦听器时使用capture模式
  - .self 
  - .keyCode
  - .native
  - .once
  - .left
  - .right
  - .middle
  - .passive

## v-bind

## v-model

## v-pre

## v-cloak

## v-once


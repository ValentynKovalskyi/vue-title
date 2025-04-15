# Vue title directive

![demo](<https://github.com/ValentynKovalskyi/vue-title-directive/blob/master/demo.gif?raw=true>)

## Installation

```bash
npm install vue-title-directive
```

## Usage

main.js
```js
import App from './App.vue'
import vTitle from 'vue-title-directive'

const app = createApp(App)
app.use(vTitle)
app.mount('#app')
```

Component

```html
<template>
    <p v-title>Long <span>text</span></p>
</template>
<style scoped>
p {
    width: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
```
 
 ## Arguments

|Argument|Description|Example|
|--------|-----------|-------|
|always|Title showed instantly. Default value|```v-title.always```|
|overflow|Title showed only when content horizontally overflows container|```v-title.overflow```|

### You can also specify title value explicitly:

```html
<p v-title.always="Long version of name">Short name<p>
```

Using on Components is not recommended, since using of custom directives on components [is not recommended in official vue guide](https://vuejs.org/guide/reusability/custom-directives.html#usage-on-components). But if you have to use it on Component, be sure that component have only one root node.
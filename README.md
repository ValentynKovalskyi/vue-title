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

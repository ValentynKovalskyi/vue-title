# Vue title directive

![alt text](<demo.gif>)

## Installation

```bash
npm install vue-title-directive
```

## Usage

main.js
```js
import vTitle from 'vue-title-directive'

const app = createApp(App)
app.use(vTitle)
app.mount('#app')
```

Component

```html
<template>
    <p v-title>Long text</p>
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

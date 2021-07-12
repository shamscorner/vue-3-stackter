# vue-3-stackter

![Cover Image](https://github.com/shamscorner/images/blob/master/vite-vue-3-tailwind.png)

A Vue3 starter project setup with

-   Vite
-   vue-meta-3.0.0-alpha.8
-   Router
-   Vuex
-   Eslint
-   Prettier
-   Tailwind CSS
-   and some custom preferences.

### Run this project:

```
yarn
yarn dev
```

### Change site name

In `App.vue` change the following,

```Javascript
const siteName = 'Vite App' // add your site name here
```

### Layouts

You can add layouts in your project if you want. You will find a `default.vue` layout example in this project.

### Pages

You can add pages to your project. You will find two example pages in the `pages` directory (`Home.vue` and `About.vue`). **Do not forget to register the pages in the `router`**. You will also find a `router/index.js` file to register your pages.

### Meta info

You can add meta information in your pages. Here is an example,

```Javascript
<script setup>
import { useMeta } from 'vue-meta'

useMeta({
    title: 'Homepage',
})
...

</script>
```

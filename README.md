# vue-3-stackter

![Cover Image](https://raw.githubusercontent.com/shamscorner/images/main/vite-vue-3-tailwind.png)

A Vue3 starter project setup with these following components,

-   [Vite](https://vitejs.dev/)
-   vue-meta-3.0.0-alpha.8
-   Router
-   [Pinia](https://pinia.vuejs.org/) (Vue 3 default)
-   Eslint
-   Prettier
-   [Tailwind CSS](https://tailwindcss.com/)
-   File based routing with [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages). (Like [Nuxt file system routing](https://nuxtjs.org/docs/2.x/features/file-system-routing))
-   Layout system with [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts). (Like [Nuxt layouts](https://nuxtjs.org/docs/2.x/directory-structure/layouts))
- Components auto importing with [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)
-   `~/` alias for `/src`. So we don't have to write something like `../../../SomeModule` to import modules.
-   and some custom setups.

[Check out Typescript version here](https://github.com/shamscorner/vitesse-stackter-clean-architect)

[Check out Nuxt 3 starter template](https://github.com/shamscorner/nuxt-3-stackter)

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

You can add layouts in your project if you want. You will find `default.vue` and `404.vue` layout examples in this project. For more details, check out [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts). (Like [Nuxt layouts](https://nuxtjs.org/docs/2.x/directory-structure/layouts) system).

### Pages

You can add pages to your project. You will find some example pages in the `pages` directory (`index.vue`, `about/[name].vue`, and `[...all].vue`). For more details, check out [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages). (Like [Nuxt file system routing](https://nuxtjs.org/docs/2.x/features/file-system-routing)).

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

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar). Make sure to:
- Disable [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) for the current workspace
- Disable built in `TypeScript and JavaScript Language Features` for the current workspace to enable take-over mode.

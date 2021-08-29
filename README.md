# vue-3-stackter

![Cover Image](https://raw.githubusercontent.com/shamscorner/images/main/vite-vue-3-tailwind.png)

A Vue3 starter project setup with these following components,

-   Vite
-   vue-meta-3.0.0-alpha.8
-   Router
-   Vuex
-   Eslint
-   Prettier
-   Tailwind CSS
-   File based routing with [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages). (Like [Nuxt file system routing](https://nuxtjs.org/docs/2.x/features/file-system-routing))
-   Layout system with [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts). (Like [Nuxt layouts](https://nuxtjs.org/docs/2.x/directory-structure/layouts))
-   Components auto importing with [vite-plugin-components](https://github.com/antfu/vite-plugin-components)
-   `~/` alias for `/src`. So we don't have to write something like `../../../SomeModule` to import modules.
-   and some custom setups.

[Check out Typescript version here](https://github.com/shamscorner/vue-3-stackter/tree/vue-3-with-typescript)

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

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

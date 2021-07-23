<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a
            href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
            target="_blank"
        >
            Vetur
        </a>
        or
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
        (if using
        <code>&lt;script setup&gt;</code>)
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<script lang="ts">
export default {
    name: 'HelloWorld',
}
</script>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    msg: {
        type: String,
        required: true,
    },
})

const count = ref(0)
</script>

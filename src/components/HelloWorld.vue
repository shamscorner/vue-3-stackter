<template>
    <h1>{{ msg }}</h1>

    <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
export default {
    name: 'HelloWorld',
}
</script>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

defineProps({
    msg: {
        type: String,
        required: true,
    },
})

const count = ref(0)
</script>

<template>
    <default-layout>
        <h1 class="text-2xl font-bold">Welcome to Vue3Stackter</h1>
    </default-layout>
</template>

<script lang="ts" setup>
import { useMeta } from 'vue-meta'

import DefaultLayout from '../layouts/Default.vue'

useMeta({
    title: 'Home Page',
})
</script>

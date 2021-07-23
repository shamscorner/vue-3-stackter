<template>
    <default-layout>
        <h1 class="text-2xl font-bold">Welcome to Vue3Stackter, {{ name }}</h1>
    </default-layout>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useMeta } from 'vue-meta'
import { useStore } from 'vuex'

import DefaultLayout from '../layouts/Default.vue'

useMeta({
    title: 'Home Page',
})

const store = useStore()

const name = computed(() => store.getters['user/getNameAsUppercased'])
</script>

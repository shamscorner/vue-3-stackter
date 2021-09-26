<template>
    <main>
        <router-view />
        <div>
            <v-button @click="router.back()"> Go Back </v-button>
        </div>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useMeta } from 'vue-meta'

useMeta({
    title: '404 - Not found!',
})

const router = useRouter()
</script>

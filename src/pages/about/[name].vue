<template>
    <div>
        <h1 class="text-2xl font-bold">About {{ usersStore.name }}</h1>

        <p class="my-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            voluptatem consequuntur molestiae cumque recusandae eos non,
            consectetur, repellat architecto illo nobis, voluptatum dolor!
            Reprehenderit, nam veniam quibusdam ab nulla rem.
        </p>
        <router-link to="/">
            <v-button>Back to home</v-button>
        </router-link>
    </div>
</template>

<script setup>
import { useMeta } from 'vue-meta'
import { useUsersStore } from '~/stores/useUsersStore'

useMeta({
    title: 'About Page',
})

const usersStore = useUsersStore()
</script>

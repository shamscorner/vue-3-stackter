<template>
    <default-layout>
        <h1 class="text-2xl font-bold">About {{ name }}</h1>

        <p class="my-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            voluptatem consequuntur molestiae cumque recusandae eos non,
            consectetur, repellat architecto illo nobis, voluptatum dolor!
            Reprehenderit, nam veniam quibusdam ab nulla rem.
        </p>
        <router-link to="/">
            <v-button>Back to home</v-button>
        </router-link>
    </default-layout>
</template>

<script setup>
import VButton from '../components/VButton.vue'

import { computed } from 'vue'

import DefaultLayout from '../layouts/DefaultLayout.vue'

import { useStore } from 'vuex'
const store = useStore()

// name
const name = computed(() => store.state.user.name)
</script>

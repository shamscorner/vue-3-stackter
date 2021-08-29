<template>
    <div>
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
    </div>
</template>

<script setup>
import { useMeta } from 'vue-meta'
import { computed } from 'vue'
import { useStore } from 'vuex'

useMeta({
    title: 'About Page',
})

const store = useStore()

// name
const name = computed(() => store.state.user.name)
</script>

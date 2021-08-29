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

<script lang="ts" setup>
import { computed } from 'vue'
import { useMeta } from 'vue-meta'
import { useStore } from 'vuex'
import { UserGetterTypes } from '../../store/modules/user/getter-types'

useMeta({
    title: 'About Page',
})

const store = useStore()

const name = computed(
    (): string =>
        store.getters[`user/${UserGetterTypes.GET_NAME_AS_UPPERCASED}`]
)
</script>

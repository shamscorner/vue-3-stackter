<template>
    <h1 class="text-2xl font-bold">Welcome to Vue3Stackter, {{ name }}</h1>

    <div class="mt-8">
        <input
            v-model="newName"
            type="text"
            class="p-2 border border-gray-300 rounded focus:ring-2"
        />
        <v-button
            :class="{ 'pointer-events-none opacity-40': !newName }"
            @click.native="saveName"
        >
            Save
        </v-button>
    </div>
</template>

<script setup>
import { useMeta } from 'vue-meta'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

useMeta({
    title: 'Homepage',
})

const router = useRouter()

const store = useStore()

// name
// const name = computed(() => store.state.user.name)
const name = computed(() => store.getters['user/nameUppercased'])
const newName = ref('')
function saveName() {
    if (newName.value === '') {
        return
    }
    store.dispatch('user/saveName', newName.value)
    newName.value = ''
    router.push(`/about/${name.value}`)
}
</script>

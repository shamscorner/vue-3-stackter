<template>
    <h1 class="text-2xl font-bold">Welcome to Vue-3-Stackter, {{ usersStore.name }}</h1>

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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from '~/stores/useUsersStore'

useMeta({
    title: 'Homepage',
})

const router = useRouter()

const usersStore = useUsersStore()

const newName = ref('')

function saveName() {
    if (newName.value === '') {
        return
    }

    usersStore.saveName(newName.value)
    router.push(`/about/${newName.value}`)
    newName.value = ''
}
</script>

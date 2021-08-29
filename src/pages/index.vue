<template>
    <default-layout>
        <h1 class="text-2xl font-bold">
            Welcome to Vue3StackterTS, {{ name }}!
        </h1>

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
    </default-layout>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useMeta } from 'vue-meta'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { UserGetterTypes } from '../store/modules/user/getter-types'
import { UserActionTypes } from '../store/modules/user/action-types'

import DefaultLayout from '~/layouts/Default.vue'
import VButton from '../components/VButton.vue'

useMeta({
    title: 'Home Page',
})

const router = useRouter()

const store = useStore()

const name = computed(
    (): string =>
        store.getters[`user/${UserGetterTypes.GET_NAME_AS_UPPERCASED}`]
)

const newName = ref('')
function saveName() {
    if (newName.value === '') {
        return
    }
    store.dispatch(`user/${UserActionTypes.SAVE_NAME}`, newName.value)
    newName.value = ''
    router.push(`/about/${name.value}`)
}
</script>

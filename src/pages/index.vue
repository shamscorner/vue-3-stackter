<template>
    <div class="max-w-2xl mx-auto">
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

        <div class="flex flex-col gap-5 mt-10 text-left">
            <div>A Vue3 starter project setup with these following components,</div>

            <ul class="flex flex-col gap-2 ml-5 list-disc">
                <li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
                <li>vue-meta-3.0.0-alpha.10</li>
                <li>Router</li>
                <li><a href="https://pinia.vuejs.org/" target="_blank">Pinia</a> (Vue 3 default)</li>
                <li>Eslint</li>
                <li>Prettier</li>
                <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a></li>
                <li>
                    File based routing with 
                    <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank">vite-plugin-pages</a> 
                    (Like <a href="https://nuxtjs.org/docs/2.x/features/file-system-routing" target="_blank">Nuxt file system routing</a>)
                </li>
                <li>
                    Layout system with 
                    <a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts" target="_blank">vite-plugin-vue-layouts</a> 
                    (Like  <a href="https://nuxtjs.org/docs/2.x/directory-structure/layouts" target="_blank">Nuxt layouts</a>)
                </li>
                <li>
                    Components auto importing with 
                    <a href="https://github.com/antfu/unplugin-vue-components" target="_blank">
                        unplugin-vue-components
                    </a>
                </li>
                <li><code>~/</code> alias for <code>/src</code>. So we don't have to write something like <code>../../../SomeModule</code> to import modules.</li>
                <li>and some custom setups.</li>
            </ul>

            <div>
                <a href="https://github.com/shamscorner/vitesse-stackter-clean-architect" target="_blank">
                    Check out Typescript version here
                </a>
            </div>
        </div>
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

<style>
a {
    text-decoration: underline;
    transition: color 0.3s;
}

a:hover {
    color: cadetblue;
}
</style>

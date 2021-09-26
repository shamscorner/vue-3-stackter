<template>
    <!-- Product item -->
    <li class="job" :class="{ 'job--featured' : job.featured}">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img :src="fixImagePath(job.logo)" :alt="job.company" class="w-full h-full object-center object-cover group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
            {{ job.position }}
        </h3>
        <span v-if="job.new" class="">New!</span>
        <span v-if="job.featured" class="">Featured</span>
        <p class="mt-1 text-lg font-medium text-gray-900">
            {{ job.company }}
        </p>
        
        <!-- Tags -->
        <div class="mt-4 leading-8">
            <button @click="filterClick(tag)" v-for="tag in job.filterOptions" :key="tag" class="group inline">
                <div class="relative hover:bg-white inline-flex items-center rounded-full border border-gray-300 shadow-sm px-3 py-0.5">
                    <div class="absolute flex-shrink-0 flex items-center justify-center">
                    <span class="h-1.5 w-1.5 bg-rose-500 rounded-full" aria-hidden="true" />
                    </div>
                    <div class="ml-3.5 text-sm tracking-wide text-blue-900 hover:text-gray-900">{{ tag }}</div>
                </div>
                {{ ' ' }}
            </button>
        </div>
    </li>
</template>

<script>
import { useStore } from 'vuex';

export default {
    props: {
        job: {
            type: Object,
            required: true
        }
    },
    emits: ['filterClick'],
    setup() {
        const store = useStore();

        function fixImagePath(src) {
            const path = src.replace('./', '');
            //return require(`~/assets/${path}`);
        }

        function filterClick(name) {
            store.commit('toggleFilter', name);
        }

        return {
            fixImagePath,
            filterClick
        }
    },
}
</script>
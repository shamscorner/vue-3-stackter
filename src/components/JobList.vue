<template>
    <!-- Product grid -->
    <section aria-labelledby="products-heading" class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <ul v-if="jobs" class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            <JobListItem v-for="job in jobs" :job="job" :key="job.id" class="group" />
        </ul>
    </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import JobListItem from '~/components/JobListItem.vue';
export default {
    components: {
        JobListItem
    },
    setup() {
        const store = useStore();

		store.dispatch('fetchData');
		const jobs = computed(() => store.state.jobsToDisplay);

		return {
			jobs
		}
    }
}
</script>
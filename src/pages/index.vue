<template>
	<Header />
	<main class="main">
		<JobFilter />
		<JobList />
	</main>
    <Footer />
</template>

<script>
import Header from '~/components/Header.vue';
import JobList from '~/components/JobList.vue';
import JobFilter from '~/components/JobFilter.vue';
import Footer from '~/components/Footer.vue';

export default {
	name: 'App',
	components: {
        Header,
		JobList,
		JobFilter,
        Footer
	}
}
</script>

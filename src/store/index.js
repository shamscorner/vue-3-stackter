import { createStore } from "vuex";

export default createStore({
    state: {
        jobs: [],
        jobsToDisplay: [],
        filters: []
    },
    mutations: {
        setJobs(state, val) {
            state.jobs = val;
            state.jobsToDisplay = val;
        },
        toggleFilter(state, name) {
            if(state.filters.indexOf(name) >= 0) {
                this.commit('removeFilter', name);
            } else {
                this.commit('addFilter', name);
            }
        },
        addFilter(state, val) {
            state.filters.push(val); 
        },
        removeFilter(state, val) {
            const index = state.filters.indexOf(val)
            state.filters.splice(index, 1);
        },
        clearFilter(state) {
            state.filters = [];
        },
        filtersJobs(state) {
            let jobs;
            console.log(state.filters.length);
            if(state.filters.length > 0) {
                jobs = state.jobs.filter(j => state.filters.every(f => j.filterOptions.includes(f)));
            } else {
                jobs = state.jobs;
            }
            state.jobsToDisplay = jobs;
        }
    },
    actions: {
        async fetchData({ commit }) {
			const result = await fetch('./data.json');
			const data = await result.json();
            const obj = data.map(j => {
                const filterOptions = [j.role, j.level, ...j.languages, ...j.tools];
                return {
                    ...j,
                    filterOptions
                };
            })
            commit('setJobs', obj);
		}
    },
})

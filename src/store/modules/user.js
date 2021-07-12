const state = () => ({
    name: 'John Doe',
})

const getters = {
    nameUppercased: (state) => {
        return state.name.toUpperCase()
    },
}

const actions = {
    saveName({ commit }, data) {
        commit('SET_NAME', data)
    },
}

const mutations = {
    SET_NAME(state, payload) {
        state.name = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

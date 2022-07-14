import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      name: 'John Doe'
    }
  },

	getters: {
    nameUppercased: (state) => state.name.toUpperCase()
  },

	actions: {
    saveName(name) {
			this.name = name
    }
  },
})


if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))


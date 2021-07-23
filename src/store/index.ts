// look into this sandbox for more detailed setup
// https://codesandbox.io/s/using-vuex-4-modules-in-vue-3-with-typescript-7ygvy?file=/src/store/index.ts

import { createStore, createLogger } from 'vuex'

import {
	store as user,
	UserStore,
	State as UserState
} from './modules/user'

export type RootState = {
	user: UserState
}

export type Store = UserStore<Pick<RootState, 'user'>>;

const debug = true
// todo: solve later: process not finding here
// const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
    modules: {
        user,
    },
    strict: debug,
    plugins: debug ? [createLogger({})] : [],
})

export function useStore(): Store {
  return store as Store;
}
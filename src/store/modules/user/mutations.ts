import { MutationTree } from 'vuex';

import { State } from './state';
import { UserMutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [UserMutationTypes.SET_NAME](state: S, payload: String): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [UserMutationTypes.SET_NAME](state: State, name: String) {
    state.user!.name = name;
  },
};

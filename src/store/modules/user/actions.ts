import { ActionTree, ActionContext } from 'vuex';

import { RootState } from '../../../store';

import { State } from './state';
import { Mutations } from './mutations';
import { UserMutationTypes } from './mutation-types';
import { UserActionTypes } from './action-types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [UserActionTypes.SAVE_NAME](
    { commit }: AugmentedActionContext,
    name: string,
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [UserActionTypes.SAVE_NAME]({ commit }, name: string) {
    commit(UserMutationTypes.SET_NAME, name);
  },
};

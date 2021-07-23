import { GetterTree } from 'vuex';

import { RootState } from '../../../store';

import { State } from './state';

export type Getters = {
  getNameAsUppercased(state: State): String | undefined;
}

export const getters: GetterTree<State, RootState> & Getters = {
  getNameAsUppercased: (state) => state.user?.name.toUpperCase(),
};
import { GetterTree } from 'vuex';

import { RootState } from '../../../store';

import { State } from './state';

import { UserGetterTypes } from './getter-types'

export type Getters = {
  [UserGetterTypes.GET_NAME_AS_UPPERCASED](state: State): String | undefined;
}

export const getters: GetterTree<State, RootState> & Getters = {
  [UserGetterTypes.GET_NAME_AS_UPPERCASED]: (state) => state.user?.name.toUpperCase(),
};
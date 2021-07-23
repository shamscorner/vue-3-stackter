import { User } from '../../../@types';

export type State = {
  user: User | null;
}

export const state: State = {
  user: {
	  name: 'John Doe'
  },
};

import * as constants from './constants';
import { ReduxCall } from './types';

import User from '@models/User';

export const fetchUsers = (): ReduxCall => ({
  type: constants.USERS_REQUEST,
  payload: {},
});
export const fetchUsersSuccess = (users: User[]): ReduxCall => ({
  type: constants.USERS_SUCCESS,
  payload: { users },
});
export const fetchUsersError = (error: string): ReduxCall => ({
  type: constants.USERS_ERROR,
  payload: { error },
});

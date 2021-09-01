import { call, put, take } from 'redux-saga/effects';

import UsersService from '@services/usersService';
import User from '@models/User';

import * as actions from './actions';
import * as constants from './constants';

function* usersFetch() {
  while (true) {
    yield take(constants.USERS_REQUEST);

    try {
      const response: { data: { data: User[] } } = yield call(UsersService.getUsers);

      yield put(actions.fetchUsersSuccess(response.data.data));
    } catch (errorResponse) {
      let errorMessage = 'Network error';

      if (errorResponse?.response?.data?.error) {
        const {
          response: {
            data: { error },
          },
        } = errorResponse;

        if (typeof error === 'string') {
          errorMessage = error;
        }
      }

      yield put(actions.fetchUsersError(errorMessage));
    }
  }
}

export default [usersFetch];

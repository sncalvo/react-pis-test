import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { ReduxCall, State } from './types';
import * as constants from './constants';

const initialState: State = { users: [], error: '', loading: false };

const usersReducer = (state = initialState, { type, payload }: ReduxCall): State => {
  switch (type) {
    case constants.USERS_REQUEST: {
      return { ...state, users: [], loading: true };
    }
    case constants.USERS_SUCCESS: {
      return { ...state, loading: false, error: '', ...payload };
    }
    case constants.USERS_ERROR: {
      return { ...state, loading: false, ...payload };
    }
  }

  return state;
};

const authPersistConfig = {
  key: 'usersReducer',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(authPersistConfig, usersReducer);

import authSagas from '../authReducer/sagas';
import usersSagas from '../usersReducer/sagas';

export default [...authSagas, ...usersSagas];

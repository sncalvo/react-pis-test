import axiosClient from './httpClient';

import User from '@models/User';

class UsersService {
  static getUsers = () => axiosClient().get<User[]>('users');
}

export default UsersService;

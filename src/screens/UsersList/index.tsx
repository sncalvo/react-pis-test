import React from 'react';
import { ScrollView } from 'react-native';

import { AuthNavParams } from '@navigation/AuthStackNavigator/AuthStackParamsList';

import * as usersActions from '@store/usersReducer/actions';
import { RootState } from '@store';

import Text from '@components/Text';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '@components/UserCard';

const UsersList: React.FC<AuthNavParams<'UsersList'>> = () => {
  const { users, loading, error } = useSelector(
    ({ usersReducer: { users, loading, error } }: RootState) => ({
      users,
      loading,
      error,
    }),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.fetchUsers());
  }, [dispatch]);

  return (
    <ScrollView>
      {error !== '' && <Text>{error}</Text>}
      {loading ? (
        <Text>Loading</Text>
      ) : (
        users?.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </ScrollView>
  );
};

export default UsersList;

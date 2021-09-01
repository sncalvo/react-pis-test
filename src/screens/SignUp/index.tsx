import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store';
import * as authActions from '@store/authReducer/actions';

import { AuthNavParams } from '@navigation/AuthStackNavigator/AuthStackParamsList';

import SignInInfo from '@models/SignInInfo';

import Text from '@components/Text';
import TextInput from '@components/TextInput';
import Button from '@components/Button';

import layoutStyles from '@styles/layout';
import textStyles from '@styles/text';

const SignUp: React.FC<AuthNavParams<'SignUp'>> = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState<SignInInfo>({ email: '', password: '' });

  const { loading, error } = useSelector(({ authReducer: { loading, error } }: RootState) => ({
    loading,
    error,
  }));

  const dispatch = useDispatch();

  const onSubmit = () => dispatch(authActions.signUp(userInfo));

  return (
    <View>
      <Text style={textStyles.secondary}>Sign up</Text>
      {error !== '' && <Text style={[textStyles.error, textStyles.tertiary]}>{error}</Text>}
      <TextInput value={userInfo.email} onChange={(email) => setUserInfo({ ...userInfo, email })} />
      <TextInput
        value={userInfo.password}
        onChange={(password) => setUserInfo({ ...userInfo, password })}
        secure
      />
      <View style={layoutStyles.rowDirection}>
        <Button onPress={onSubmit} loading={loading}>
          <Text>Sign up</Text>
        </Button>
        <Button onPress={() => navigation.navigate('SignUp')} loading={loading}>
          <Text>Sign in</Text>
        </Button>
      </View>
    </View>
  );
};

export default SignUp;

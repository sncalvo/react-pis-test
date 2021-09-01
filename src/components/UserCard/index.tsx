import React from 'react';

import User from '@models/User';
import Text from '@components/Text';
import Image from '@components/Image';
import Card from '@components/Card';

import layoutStyles from '@styles/layout';
import styles from './style';

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => (
  <Card
    style={[
      layoutStyles.alignCenter,
      layoutStyles.justifyBetween,
      layoutStyles.rowDirection,
      layoutStyles.p10,
      layoutStyles.boxShadow,
      layoutStyles.m5,
    ]}
  >
    <Image style={styles.profileImage} source={{ uri: user.avatar }} />
    <Text style={styles.profileEmail}>{user.email}</Text>
  </Card>
);

export default UserCard;

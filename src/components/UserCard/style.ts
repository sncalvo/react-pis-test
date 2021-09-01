import { StyleSheet, TextStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';

interface Styles {
  profileImage: ImageStyle;
  profileEmail: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileEmail: {
    textTransform: 'lowercase',
    textAlign: 'center',
  },
});

export default styles;

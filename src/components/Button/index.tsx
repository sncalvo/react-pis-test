import React from 'react';
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import LoadingIndicator from '@components/LoadingIndicator';

import layoutStyles from '@styles/layout';
import textStyles from '@styles/text';
import styles from './styles';

enum ButtonType {
  Primary,
  Secondary,
  Danger,
}

const BUTTON_STYLES: Map<
  ButtonType,
  {
    container: ViewStyle;
    text: TextStyle;
  }
> = new Map([
  [ButtonType.Primary, { container: styles.primary, text: textStyles.black }],
  [ButtonType.Secondary, { container: styles.secondary, text: textStyles.white }],
  [ButtonType.Danger, { container: styles.tertiary, text: textStyles.white }],
]);

interface TextButtonProps {
  children?: React.ReactChild;
  outline?: boolean;
  type?: ButtonType;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  invert?: boolean;
  disabled?: boolean;
  small?: boolean;
  testID?: string;
  loading?: boolean;
}

const Button: React.FC<TextButtonProps> = ({
  children = '',
  outline = false,
  type = ButtonType.Primary,
  style,
  onPress,
  invert,
  disabled,
  small = false,
  testID,
  loading = false,
}) => {
  const outlineColor = invert ? styles.buttonOutlineWhite : styles.buttonOutlineBlack;
  const fillColor = invert ? styles.buttonFillWhite : styles.buttonFillBlack;
  const buttonStyle = [outline ? outlineColor : fillColor, styles.buttonContainer, style];

  const { container } = BUTTON_STYLES.get(type) ?? {};

  return (
    <TouchableOpacity
      style={[
        buttonStyle,
        disabled && styles.buttonDisabled,
        small && styles.small,
        layoutStyles.rowDirection,
        layoutStyles.alignCenter,
        layoutStyles.justifyCenter,
        container,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
    >
      {loading ? <LoadingIndicator /> : children}
    </TouchableOpacity>
  );
};

export { ButtonType };
export default Button;

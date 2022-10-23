import {
  Button as ThemedButton,
  ButtonProps as ThemedButtonProps,
} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {mainColor} from '../../theme/themeConstants';

interface ButtonProps {
  size?: ThemedButtonProps['size'];
  disabled?: boolean;
  title: string;
  height?: number;
}

export const Button = ({
  disabled = false,
  title = '',
  size = 'md',
  height = 70,
}: ButtonProps) => {
  return (
    <ThemedButton
      buttonStyle={{...styles.button, height: height}}
      titleStyle={styles.text}
      disabled={disabled}
      size={size}
      title={title}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: mainColor,
    display:'flex',
    justifyContent:'center',
    alignContent:'flex-start'
  },
  text: {
    fontSize: 26,
  },
});

import React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

interface IProps extends TouchableOpacityProps {
  inverted?: boolean;
  text?: string;
  fullWidth?: boolean;
}

const Button = ({
  children,
  inverted,
  text,
  fullWidth = true,
  style,
  ...props
}: React.PropsWithChildren<IProps>) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.baseButton,
        inverted && styles.invertedButton,
        fullWidth && styles.fullWidth,
        style,
      ]}
    >
      {!!text && (
        <Text style={[styles.baseText, inverted && styles.invertedText]}>
          {text}
        </Text>
      )}
      {!text && children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    backgroundColor: 'darkblue',
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
  },
  fullWidth: {
    width: '100%',
  },
  invertedButton: {
    backgroundColor: 'transparent',
    borderColor: 'darkblue',
  },
  baseText: {
    color: 'white',
    fontSize: 18,
  },
  invertedText: {
    color: 'darkblue',
  },
});

export default Button;

import React, {FC} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

import {useStore} from '../context/useStore';

export const ButtonFontSizeDecrease: FC = () => {
  const {fontSize, setFontSize, darkSwitch} = useStore();

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  };

  return (
    <Pressable
      disabled={fontSize <= -5}
      style={[styles.button, fontSize <= -5 && styles.buttonDisabled]}
      onPress={decreaseFontSize}>
      <Text style={{color: darkSwitch ? '#fff' : '#212121'}}>-</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#eee',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

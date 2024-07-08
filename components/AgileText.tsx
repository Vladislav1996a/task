import React, {FC, ReactNode} from 'react';
import {Text, StyleSheet} from 'react-native';
import {useStore} from '../context/useStore';

type AgileTextProps = {
  children: ReactNode;
  baseFontSize: number;
};

export const AgileText: FC<AgileTextProps> = ({children, baseFontSize}) => {
  const {fontSize, darkSwitch} = useStore();
  return (
    <Text
      style={[
        styles.baseStyle,
        {fontSize: baseFontSize + fontSize},
        darkSwitch ? styles.lightTheme : styles.darkTheme,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  darkTheme: {
    color: '#212121',
  },
  lightTheme: {
    color: '#fff',
  },
  baseStyle: {
    flex: 1,
  },
});

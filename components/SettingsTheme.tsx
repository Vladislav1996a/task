import React, {FC} from 'react';
import {StyleSheet, View, Switch, Pressable, Button} from 'react-native';
import {AgileText} from './AgileText';
import {PickerColor} from './PickerColor';
import {Dropdown} from './Dropdown';
import {ButtonFontSizeDecrease} from './ButtonFontSizeDecrease';
import {ButtonFontSizeIncrease} from './ButtonFontSizeIncrease';
import {ThemeSwitch} from './ThemeSwitch';
import {RangeIconSize} from './RangeIconSize';
import {SelectImageBackground} from './SelectImageBackground';

export const SettingsTheme: FC = () => {
  return (
    <View>
      <View style={{justifyContent: 'flex-start', flexDirection: 'column'}}>
        <View>
          <AgileText baseFontSize={18}>Theme: Dark/Light</AgileText>
        </View>
        <ThemeSwitch />
      </View>
      <View>
        <View style={styles.row}>
          <AgileText baseFontSize={18}>Font Size:</AgileText>
          <View style={styles.buttonWrap}>
            <ButtonFontSizeDecrease />
            <ButtonFontSizeIncrease />
          </View>
        </View>
        <View style={{marginTop: 24}}>
          <AgileText baseFontSize={18}>Size Icon:</AgileText>
          <RangeIconSize />
        </View>
        <View>
          <View>
            <AgileText baseFontSize={18}>Icon Color:</AgileText>
            <PickerColor />
          </View>
        </View>
        <View style={{marginTop: 18}}>
          <AgileText baseFontSize={18}>Icon Type:</AgileText>
          <Dropdown />
        </View>
        <View style={{marginTop: 24}}>
          <SelectImageBackground />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrap: {
    flexDirection: 'row',
    marginLeft: 10,
    gap: 7,
  },
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  darkTheme: {
    backgroundColor: '#212121',
  },
});

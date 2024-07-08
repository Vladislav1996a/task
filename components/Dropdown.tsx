import React, {FC, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useStore} from '../context/useStore';

export const Dropdown: FC = () => {
  const {darkSwitch, iconType, setIconType} = useStore();

  return (
    <View
      style={[
        styles.container,
        {borderColor: darkSwitch ? '#fff' : '#212121'},
      ]}>
      <Picker
        selectedValue={iconType}
        dropdownIconColor={darkSwitch ? '#fff' : '#212121'}
        onValueChange={itemValue => setIconType(itemValue)}>
        <Picker.Item
          style={{
            color: darkSwitch ? '#fff' : '#212121',
            backgroundColor: darkSwitch ? '#212121' : '',
          }}
          label="Icon type 1"
          value="react"
        />
        <Picker.Item
          style={{
            color: darkSwitch ? '#fff' : '#212121',
            backgroundColor: darkSwitch ? '#212121' : '',
          }}
          label="Icon type 2"
          value="helix"
        />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#212121',
    borderStyle: 'solid',
    padding: 4,
    borderRadius: 8,
  },
});

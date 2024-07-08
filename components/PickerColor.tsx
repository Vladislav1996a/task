import React, {FC} from 'react';
import {View} from 'react-native';
import ColorPicker, {HueSlider, Preview} from 'reanimated-color-picker';
import {useStore} from '../context/useStore';

export const PickerColor: FC = () => {
  const {iconColor, setIconColor} = useStore();

  return (
    <View>
      <ColorPicker
        value={iconColor}
        onComplete={value => setIconColor(value.hex)}>
        <HueSlider />
      </ColorPicker>
    </View>
  );
};

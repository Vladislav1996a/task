import {AgileText} from './AgileText';
import {Button, View} from 'react-native';
import {useStore} from '../context/useStore';

export const SelectImageBackground = () => {
  const {
    selectImageLightTheme,
    backgroundImageLight,
    clearBackgroundImageLight,
    clearBackgroundImageDark,
    darkSwitch,
    selectImageDarkTheme,
    backgroundImageDark,
  } = useStore();
  return (
    <>
      {darkSwitch && (
        <View>
          <AgileText baseFontSize={18}>Upload Background Image Dark:</AgileText>
          <Button onPress={selectImageDarkTheme} title="Select File" />
          {backgroundImageDark && (
            <View style={{marginTop: 8}}>
              <Button onPress={clearBackgroundImageDark} title="Clear" />
            </View>
          )}
        </View>
      )}
      {!darkSwitch && (
        <View>
          <AgileText baseFontSize={18}>
            Upload Background Image Light:
          </AgileText>
          <Button onPress={selectImageLightTheme} title="Select File" />
          {backgroundImageLight && (
            <View style={{marginTop: 8}}>
              <Button onPress={clearBackgroundImageLight} title="Clear" />
            </View>
          )}
        </View>
      )}
    </>
  );
};

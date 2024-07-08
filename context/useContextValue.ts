import {useCallback, useMemo, useState} from 'react';
import {ContextValue} from './context';
import {IconType} from '../Types';
import * as DocumentPicker from 'expo-document-picker';

export const useContextValue = () => {
  const [fontSize, setFontSize] = useState(0);
  const [darkSwitch, setToggleSwitch] = useState(false);
  const [iconSize, setIconSize] = useState<number>(30);
  const [iconColor, setIconColor] = useState('red');
  const [iconType, setIconType] = useState<IconType>('react');
  const [backgroundImageLight, setBackgroundImageLight] = useState<
    null | string
  >(null);
  const [backgroundImageDark, setBackgroundImageDark] = useState<null | string>(
    null,
  );

  const selectImageLightTheme = useCallback(async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync();
      setBackgroundImageLight(file.assets?.[0].uri || null);
    } catch (error) {
      console.log(error);
    }
  }, [backgroundImageLight, setBackgroundImageLight]);

  const selectImageDarkTheme = useCallback(async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync();
      setBackgroundImageDark(file.assets?.[0].uri || null);
    } catch (error) {
      console.log(error);
    }
  }, [backgroundImageLight, setBackgroundImageDark]);

  const clearBackgroundImageLight = () => {
    setBackgroundImageLight(null);
  };
  const clearBackgroundImageDark = () => {
    setBackgroundImageDark(null);
  };

  return useMemo<ContextValue>(
    () => ({
      fontSize,
      setFontSize,
      darkSwitch,
      setToggleSwitch,
      iconSize,
      setIconSize,
      iconColor,
      setIconColor,
      iconType,
      setIconType,
      backgroundImageLight,
      selectImageLightTheme,
      clearBackgroundImageLight,
      backgroundImageDark,
      selectImageDarkTheme,
      clearBackgroundImageDark,
    }),
    [
      fontSize,
      setFontSize,
      darkSwitch,
      setToggleSwitch,
      iconSize,
      setIconSize,
      iconColor,
      setIconColor,
      iconType,
      setIconType,
      backgroundImageLight,
      selectImageLightTheme,
      clearBackgroundImageLight,
      backgroundImageDark,
      selectImageDarkTheme,
      clearBackgroundImageDark,
    ],
  );
};

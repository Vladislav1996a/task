import {createContext} from 'react';
import {IconType} from '../Types';

export const Context = createContext<ContextValue>({
  fontSize: 0,
  setFontSize: () => {},
  darkSwitch: false,
  setToggleSwitch: () => {},
  iconSize: 30,
  setIconSize: () => {},
  iconColor: 'red',
  setIconColor: () => {},
  iconType: 'react',
  setIconType: () => {},
  backgroundImageLight: null,
  selectImageLightTheme: () => {},
  clearBackgroundImageLight: () => {},
  backgroundImageDark: null,
  selectImageDarkTheme: () => {},
  clearBackgroundImageDark: () => {},
});

export type ContextValue = {
  fontSize: number;
  setFontSize: (value: number) => void;
  darkSwitch: boolean;
  setToggleSwitch: (value: boolean) => void;
  iconSize: number;
  setIconSize: (value: number) => void;
  iconColor: string;
  setIconColor: (value: string) => void;
  iconType: IconType;
  setIconType: (value: IconType) => void;
  backgroundImageLight: null | string;
  selectImageLightTheme: () => void;
  clearBackgroundImageLight: () => void;
  backgroundImageDark: null | string;
  selectImageDarkTheme: () => void;
  clearBackgroundImageDark: () => void;
};

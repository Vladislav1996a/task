import {Switch} from 'react-native';
import {useStore} from '../context/useStore';

export const ThemeSwitch = () => {
  const {darkSwitch, setToggleSwitch} = useStore();
  return (
    <Switch
      style={{alignSelf: 'flex-start'}}
      value={darkSwitch}
      onValueChange={setToggleSwitch}
    />
  );
};

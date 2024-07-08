import {Slider} from '@miblanchard/react-native-slider';
import {useStore} from '../context/useStore';

export const RangeIconSize = () => {
  const {iconSize, setIconSize} = useStore();
  return (
    <Slider
      value={iconSize}
      onValueChange={(value: number | number[]) => setIconSize(value as number)}
      minimumValue={20}
      maximumValue={40}
      step={1}
    />
  );
};

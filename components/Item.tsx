import {View, StyleSheet} from 'react-native';
import {AgileText} from './AgileText';
import {IconReactSvg} from './Svg/IconReactSvg';
import {FC, ReactNode} from 'react';
import {IconHelixSvg} from './Svg/IconHelixSvg';
import {useStore} from '../context/useStore';

type ItemProps = {
  children: ReactNode;
};

export const Item: FC<ItemProps> = ({children}) => {
  const {iconType} = useStore();
  return (
    <View style={styles.container}>
      {iconType === 'react' && <IconReactSvg />}
      {iconType === 'helix' && <IconHelixSvg />}

      <AgileText baseFontSize={13}>{children}</AgileText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
});

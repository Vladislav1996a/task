import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Image} from 'expo-image';
import {Item} from '../components/Item';
import {SettingsTheme} from '../components/SettingsTheme';
import {useStore} from '../context/useStore';

export const Home = () => {
  const {backgroundImageLight, backgroundImageDark, darkSwitch} = useStore();
  return (
    <View style={{flex: 1}}>
      {backgroundImageLight && (
        <Image
          style={styles.image}
          source={backgroundImageLight}
          contentFit="cover"
        />
      )}
      {darkSwitch && backgroundImageDark && (
        <Image
          style={styles.image}
          source={backgroundImageDark}
          contentFit="cover"
        />
      )}
      <ScrollView
        style={[darkSwitch && !backgroundImageDark && styles.darkTheme]}>
        <View style={styles.container}>
          <SettingsTheme />
          <View style={{marginTop: 44}}>
            <Item>1 Lorem ipsum dolor sit amet, consectetur </Item>
            <Item>2 Lorem ipsum dolor sit amet, consectetur 2</Item>
            <Item>3 Lorem ipsum dolor sit amet, consectetur 3</Item>
          </View>

          <StatusBar
            backgroundColor={darkSwitch ? '#212121' : '#fff'}
            style={darkSwitch ? 'light' : 'dark'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    width: '100%',
  },
  darkTheme: {
    backgroundColor: '#212121',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    flex: 1,
    zIndex: 10,
  },
});

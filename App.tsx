import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { Main } from './src/Main';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: '#D73035' }}>
        <ActivityIndicator color="#fff" size={32} />
      </View>
    );
  }

  return (
    <>
      <StatusBar style='dark' />
      <Main />
    </>
  );
}

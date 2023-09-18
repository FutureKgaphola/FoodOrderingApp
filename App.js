import { View } from 'react-native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import Navigator from './routes/HomeStack';
import { styles } from './Styles';
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  const [fontsLoaded, setfont] = useState(null);
  let customFonts = {
    'kanit': require('./assets/fonts/kanit/Kanit-Bold.ttf'),
    'KantumruyPro': require('./assets/fonts/Kantumruy/KantumruyPro-Regular.ttf'),
    'KaushanScript': require(`./assets/fonts/KaushanScript/KaushanScript-Regular.ttf`),
    'KeaniaOne': require(`./assets/fonts/Keania_One/KeaniaOne-Regular.ttf`)
  };
  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setfont(true);
  }
  useEffect(() => {
    loadFontsAsync();
  }, []);
  if (!fontsLoaded) {
    return null;//equivalent to returning the splashscreen
  }
  return (
    <SafeAreaProvider>
<View style={styles.container}>
      <Navigator />
    </View>
    </SafeAreaProvider>
    
  );
}


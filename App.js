import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function App() {
  const [fontsLoaded,setfont]=useState(null);
  
  let customFonts = {
    'KaushanScript': require('./assets/fonts/KaushanScript/KaushanScript-Regular.ttf')
  };
  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setfont({ fontsLoaded: true });
  }
  useEffect(()=>{
    loadFontsAsync();
  },[]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    
    <View style={styles.container}>
<ImageBackground
    source={require('./assets/chicken.jpg')} style={styles.container}>
      <Text style={{ fontFamily: 'KaushanScript', fontSize: 60 ,color:'white'}}>Rosted</Text>

      </ImageBackground>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  }
  
});

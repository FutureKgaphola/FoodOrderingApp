import { View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from "./Styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import Preview from './screens/Preview';
import Cart from './screens/Cart';
import Receipts from './screens/Receipts';
import { CartProvider, CartContext } from "./Global/CartManager";
import Forgotpassword from "./screens/Forgotpassword";
import Profile from "./screens/Profile";
import Register from "./screens/Register";

export default function App() {

  const [fontsLoaded, setfont] = useState(null);
  let customFonts = {
    kanit: require("./assets/fonts/kanit/Kanit-Bold.ttf"),
    KantumruyPro: require("./assets/fonts/Kantumruy/KantumruyPro-Regular.ttf"),
    KaushanScript: require(`./assets/fonts/KaushanScript/KaushanScript-Regular.ttf`),
    KeaniaOne: require(`./assets/fonts/Keania_One/KeaniaOne-Regular.ttf`),
  };
  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setfont(true);
  }
  useEffect(() => {
    loadFontsAsync();
  }, []);
  if (!fontsLoaded) {
    return null; //equivalent to returning the splashscreen
  }
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <CartProvider>

          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login} options={{ title: '', headerShown: false }} /> 
              <Stack.Screen name="Profile" component={Profile} options={{ title: '', headerShown: false }} />
              <Stack.Screen name="Register" component={Register} options={{ title: '', headerShown: false }} />
              <Stack.Screen name="Forgotpassword" component={Forgotpassword} options={{ title: '', headerShown: false }} />
              <Stack.Screen name="Home" component={Home} options={{
                title: '', headerShown: false, headerLeft: () => null,
                headerStyle: {
                  backgroundColor: 'black',
                }
              }} />
              <Stack.Screen name="Preview" component={Preview} options={{
                title: '', headerShown: false, headerLeft: () => null,
                headerStyle: {
                  backgroundColor: 'black',
                }
              }} />
              <Stack.Screen name="Cart" component={Cart} options={{
                title: '', headerShown: false, headerLeft: () => null,
                headerStyle: {
                  backgroundColor: 'black',
                }
              }} />
              <Stack.Screen name="Receipts" component={Receipts} options={{
                title: '', headerShown: false, headerLeft: () => null,
                headerStyle: {
                  backgroundColor: 'black',
                }
              }} />
            </Stack.Navigator>

          </NavigationContainer>

        </CartProvider>

      </View>
    </SafeAreaProvider>
  );
}

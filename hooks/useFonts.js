import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
const useFonts = () => {
    const [fontsLoaded, setfont] = useState(null);

    let customFonts = {
        'kanit':require('../assets/fonts/kanit/Kanit-Bold.ttf'),
        'KantumruyPro': require('../assets/fonts/Kantumruy/KantumruyPro-Regular.ttf'),
        'KaushanScript': require(`../assets/fonts/KaushanScript/KaushanScript-Regular.ttf`)
    };
    async function loadFontsAsync() {
        await Font.loadAsync(customFonts);
        setfont({ fontsLoaded: true });
    }
    useEffect(() => {
        console.log('loading app');
        loadFontsAsync();
    }, []);

    return {fontsLoaded};
}
 
export default useFonts;
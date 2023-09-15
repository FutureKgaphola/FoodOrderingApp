import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
const useKantumruyPro=()=>{
    const [fontsLoaded, setfont] = useState(null);

    let customFonts = {
        'KantumruyPro': require('../assets/fonts/Kantumruy/KantumruyPro-Regular.ttf')
    };
    async function loadFontsAsync() {
        await Font.loadAsync(customFonts);
        setfont({ fontsLoaded: true });
    }
    useEffect(() => {
        loadFontsAsync();
    }, []);

    return {fontsLoaded};
}
export default useKantumruyPro;
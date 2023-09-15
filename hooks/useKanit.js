import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
const useKanit=()=>{
    const [fontsLoaded, setfont] = useState(null);

    let customFonts = {
        'kanit':require('../assets/fonts/kanit/Kanit-Bold.ttf')
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
export default useKanit;
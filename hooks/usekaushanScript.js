import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
const useKaushanScript=(location,fontType)=>{
    const [fontsLoaded, setfont] = useState(null);

    let customFonts = {
        'KaushanScript': require(`../assets/fonts/${location}/${fontType}`)
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
export default useKaushanScript;
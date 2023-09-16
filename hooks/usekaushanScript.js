import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
const useKaushanScript=()=>{
    const [fontsLoaded, setfont] = useState(null);

    let customFonts = {
        'KaushanScript': require(`../assets/fonts/KaushanScript/KaushanScript-Regular.ttf`)
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
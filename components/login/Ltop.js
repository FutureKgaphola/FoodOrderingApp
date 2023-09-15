import { Image, View } from "react-native";
import { styles } from "../../Styles";


const Ltop = () => {
    return ( 
        <View style={styles.Ltop}>
            <Image
            source={require('../../assets/Rosted.png')}
            />
            <View style={{display:"flex",overflow:"hidden",height:68,flexDirection:"row",flexWrap:"wrap",backgroundColor:'rgba(255, 248, 248,0.7)',borderTopLeftRadius:150,borderBottomLeftRadius:150}}>
            <Image  style={{width:65,height:65}}
            source={require('../../assets/plate3.png')}
            />
            <Image style={{width:65,height:65}}
            source={require('../../assets/plate2.png')}
            />
            </View>
        </View>
     );
}
 
export default Ltop;
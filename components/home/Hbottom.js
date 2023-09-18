import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles";
import { Fontisto } from '@expo/vector-icons';

const Hbottom = () => {
    return ( 
        <View style={styles.Hbottom}>
            <View style={{flexDirection:'row',borderRadius:20,overflow:"hidden",elevation:5,padding:7,margin:2,backgroundColor:'black',alignItems:"center"}}>
            <Fontisto name="mastercard" size={24} color="white" />
                <TouchableOpacity style={styles.tastyshake}>
                    <Text style={{ fontFamily: 'KeaniaOne', color: 'white', fontSize:18,padding:2 }}>checkout 2 products</Text>
                </TouchableOpacity>
                </View>
                
        </View>
     );
}
 
export default Hbottom;
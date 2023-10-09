import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles";
import { Fontisto } from '@expo/vector-icons';

const Hbottom = (props) => {
    const {msg,navigation,cartItems,SetCart}=props;
    console.log(navigation);
    return ( 
        <View style={styles.Hbottom}>
            <View style={{flexDirection:'row',borderRadius:20,overflow:"hidden",elevation:5,padding:7,margin:2,backgroundColor:'black',alignItems:"center"}}>
            {msg=='back to meals' ? '' : <Fontisto name="mastercard" size={24} color="white" />}
            
                <TouchableOpacity style={styles.tastyshake}
                onPress={() => msg=='back to meals' ? navigation.navigate("Home") : navigation.navigate("Receipts",{
                    cartItems:cartItems,
                    SetCart:SetCart
                })}>
                    <Text style={{ fontFamily: 'KeaniaOne', color: 'white', fontSize:18,padding:2 }}>{msg=='back to meals'? msg : msg+(cartItems.length)+" products"}</Text>
                </TouchableOpacity>
                </View>
                
        </View>
     );
}
 
export default Hbottom;
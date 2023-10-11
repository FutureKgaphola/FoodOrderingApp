import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles";
import { Fontisto } from '@expo/vector-icons';
import { useContext } from "react";
import { CartContext } from "../../Global/CartManager";

const Hbottom = (props) => {
    const {msg,navigation}=props;
    const {
        cartItems,SetCartitems,
        receipt, SetReceipt
    }=useContext(CartContext);

    const SetReceiptItems=()=>{
        if(cartItems.length>0){
            SetReceipt([...receipt,...cartItems]);
            navigation.navigate("Receipts");
        }else{
            Alert.alert('Notification','No items in cart, please add items first');
        }
        
    }

    return ( 
        <View style={styles.Hbottom}>
            <View style={{flexDirection:'row',borderRadius:20,overflow:"hidden",elevation:5,padding:7,margin:2,backgroundColor:'black',alignItems:"center"}}>
            {msg=='back to meals' ? '' : <Fontisto name="mastercard" size={24} color="white" />}
            
                <TouchableOpacity style={styles.tastyshake}
                onPress={() => msg=='back to meals' ? navigation.navigate("Home") : SetReceiptItems()}>
                    <Text style={{ fontFamily: 'KeaniaOne', color: 'white', fontSize:18,padding:2 }}>{msg=='back to meals'? msg : msg+(cartItems.length)+" products"}</Text>
                </TouchableOpacity>
                </View>
                
        </View>
     );
}
 
export default Hbottom;
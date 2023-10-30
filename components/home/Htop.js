import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from "../../Styles";
import Tasty from "./Tasty";
import VisitCart from "../../shared/VisitCart";
import { useContext } from "react";
import { CartContext } from "../../Global/CartManager";


const Htop = (props) => {
    const{navigation}=props;
    const {
        cartItems,SetCartitems,
    }=useContext(CartContext);
    
    return (
        <View style={styles.Htop}>

            <View
                style={{
                    borderBottomLeftRadius: 22,
                    borderBottomRightRadius: 22,
                    flex: 1.5,
                    justifyContent: 'flex-end',
                    padding: 6,
                    backgroundColor: '#2C3135', flexDirection: "column",

                }}>
                <View style={{
                    flexDirection: "row", justifyContent: "space-between", marginTop: 10
                }}>
                    <Text style={{ fontFamily: 'KaushanScript', fontSize: 35, color: 'white' }}>Rosted</Text>
                    <VisitCart navigation={navigation} cartItems={cartItems} SetCart={SetCartitems}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", marginBottom: 5,gap:5 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                        <Ionicons style={{ backgroundColor: 'white', borderRadius: 5 }} name="md-exit-outline" size={30} color="black" />

                    </TouchableOpacity> 
                    <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                        <Feather style={{ backgroundColor: 'white', borderRadius: 5 }} name="user-check" size={30} color="black" />
                    </TouchableOpacity> 

                </View>

            </View>

            <Tasty navigation={navigation}/> 


        </View>
    );
}

export default Htop;
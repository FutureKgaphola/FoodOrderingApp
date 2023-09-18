import { Ionicons } from "@expo/vector-icons";
import { Text,View, TouchableOpacity } from "react-native";

const VisitCart = ({navigation}) => {
    return ( 
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "rgba(204,255,0,0.8)",
                  borderRadius: 5,
                  alignItems: "center",
                  padding: 3,
                }}
              >
                <Ionicons name="cart" size={26} color="black" />
                <Text>2</Text>
              </View>
            </TouchableOpacity>
     );
}
 
export default VisitCart;
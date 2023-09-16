import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../Styles";
import useKaushanScript from "../hooks/usekaushanScript";
const Header = () => {
    const { fontsLoaded } = useKaushanScript();
    if (!fontsLoaded) {
        return null;
    }
    return (
        
<View style={styles.Htop}>
            <View
                style={{
                    borderBottomLeftRadius: 22,
                    borderBottomRightRadius: 22,
                    flex:0.6,
                    justifyContent:'flex-end',
                    padding:5,
                    backgroundColor: 'black', flexDirection: "column",

                }}>
                <View style={{
                    flexDirection: "row", justifyContent: "space-between"
                }}>
                    <Text style={{ fontFamily: 'KaushanScript', fontSize: 35,color:'white' }}>Rosted</Text>
                    <TouchableOpacity>
                        <View style={{
                             flexDirection: "row",
                              backgroundColor: "rgba(204,255,0,0.8)",
                              borderRadius:5,
                              alignItems:'center',
                               padding: 3 }}>
                            <Ionicons name="cart" size={26} color="black" />
                            <Text>2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <TouchableOpacity>
                    <Ionicons style={{backgroundColor:'white',borderRadius:5}} name="md-exit-outline" size={30} color="black" />
                     
                    </TouchableOpacity>
                    <View style={styles.containerinput}>
                        <Ionicons name="search-outline" size={24} color="black" />

                        <TextInput

                            style={{ marginLeft: 2, marginRight: 2 }}
                            numberOfLines={1}
                            placeholder="search for something tasty..."
                            keyboardType="default"
                            cursorColor={"black"}
                        />
                    </View>

                </View>




            </View>
        </View>
        
     );
}
 
export default Header;
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles";
import { FontAwesome5 } from '@expo/vector-icons';


const Wbottom = ({ navigation }) => {

    return (
        <View style={styles.Wbottom}>

            <View style={{ backgroundColor: '#2C3135', borderRadius: 15, margin: 15, padding: 12, maxWidth: '100%' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: "white", borderRadius: 80, margin: 5 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <FontAwesome5 style={{ marginLeft: 8 }} name="hamburger" size={28} color="black" />
                        <Text style={{ marginRight: 30, fontFamily: 'kanit', margin: 5, fontSize: 24, }}>Dig in</Text>
                        <View>{/**/}</View>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Wbottom;
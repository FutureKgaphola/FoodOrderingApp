import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles";
import { FontAwesome5, MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import useKantumruyPro from "../../hooks/useKantumruyPro";


const Lbottom = ({navigation}) => {
    const { fontsLoaded } = useKantumruyPro('Kantumruy','KantumruyPro-Regular.ttf');
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.Wbottom}>
{/**log in design here*/}

            <View style={{borderRadius:15,marginLeft:10,marginRight:10,marginTop:10,backgroundColor:'#afc91c'}}>

                <View style={{flexDirection:"row",padding:5,marginLeft:19,marginRight:18, marginTop:10,borderRadius:25,backgroundColor:'white'}}>
                <FontAwesome name="user-circle-o" style={{alignSelf:"center",marginLeft:10}} size={27} color="black" />
                    <TextInput
                    keyboardType="email-address"
                    style={{margin:5,alignSelf:"center"}}
                    placeholder="someone@mail.com"/>
                </View>

                <View style={{flexDirection:"row",padding:5,marginLeft:19,marginRight:18, marginTop:10,marginBottom:8,borderRadius:25,backgroundColor:'white'}}>
                <FontAwesome5 name="unlock-alt" style={{alignSelf:"center",marginLeft:10}} size={27} color="black"/>
                    <TextInput
                    secureTextEntry={true}
                    style={{margin:5,alignSelf:"center"}}
                    placeholder="password"/>
                </View>
                
                <View style={{ backgroundColor: '#2C3135', borderRadius: 15, padding: 12, maxWidth: '100%' }}>
                    <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 80, margin: 5 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <FontAwesome5 style={{ marginLeft: 8 }} name="hamburger" size={28} color="black" />
                            <Text style={{ marginRight: 30, fontFamily: 'kanit', margin: 5, fontSize: 24, }}>Log in</Text>
                            <View>{/**/}</View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('Welcome')} style={{ backgroundColor: "rgba(204,255,0,0.8)", borderRadius: 80, margin: 5 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <MaterialCommunityIcons style={{ marginLeft: 8 }} name="compass" size={30} color="white" />
                            <Text style={{ marginRight: 30, fontFamily: 'kanit', margin: 5, fontSize: 24, color: 'white' }}>Just Browse</Text>
                            <View>{/**/}</View>
                        </View>

                    </TouchableOpacity>
                    <Text style={{fontWeight:'600',textAlign:"right",fontFamily:"KantumruyPro",fontSize: 18, color: 'white',marginRight:5 }}>forgot password</Text>
                </View>

            </View>

        </View>
    );
}

export default Lbottom;
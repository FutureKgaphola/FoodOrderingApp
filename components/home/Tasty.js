import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tasty = ({navigation}) => {
    return (
        <View style={styles.tastycontainer}>
            <View style={{ flex: 1,marginLeft:5 }}>
                 <Text onPress={()=>navigation.navigate('Receipts')} style={styles.txt}>history</Text>
                <Text style={{lineHeight: 2,fontWeight:'bold'}}>____________________________</Text>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.tastyshake}>
                    <Image style={{width:115,height:35}}
                        source={require('../../assets/Rosted.png')}
                        />
                </TouchableOpacity>
                </View>
                
            </View>
            <View style={{ flex: 1,justifyContent:"center",alignItems:"flex-end" }}>
                <View style={{display:"flex",overflow:"hidden",height:75,flexDirection:"row",flexWrap:"wrap",backgroundColor:'rgba(255, 248, 248,0.7)',borderTopLeftRadius:150,borderBottomLeftRadius:150}}>
            <Image  style={{width:75,height:75}}
            source={require('../../assets/plate3.png')}
            />
            <Image style={{width:75,height:75}}
            source={require('../../assets/plate2.png')}
            />
            </View>
            </View>
        </View>
    );
}

export default Tasty;
const styles = StyleSheet.create({
    tastycontainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding:5
    },
    txt: {
        fontFamily: 'KaushanScript',
        fontSize: 18,
        padding: 3,
        letterSpacing: 3,
    },
    tastyshake: {
        paddingLeft: 6,
        paddingRight: 6,
        marginTop:8,
        margin:5,
    }
})
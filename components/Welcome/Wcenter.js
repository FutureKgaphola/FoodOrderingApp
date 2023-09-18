import { Text, View } from "react-native";
import { styles } from "../../Styles";


const Wcenter = () => {
    
    return (
        <View style={styles.Wcenter}>
            <View
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    margin: 10,
                    display: "flex",
                    borderRadius: 6,
                    padding: 8
                }}>
                <Text style={{ margin: 5,fontFamily: 'KantumruyPro', fontSize: 24, color: 'white' }}>
                    Lorem Ipsum is  typesetting industry. Lorem been the industry's
                </Text>
            </View>

        </View>
    );
}

export default Wcenter;
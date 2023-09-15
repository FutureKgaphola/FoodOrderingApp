import { View,ImageBackground } from "react-native";
import Lbottom from "../components/login/Lbottom";
import { styles } from "../Styles";
import L_top from "../components/login/L_top";


const Login = ({navigation}) => {
    return ( 
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/chicken.jpg')} style={styles.container}>

                    <L_top/>
  
                    <Lbottom navigation={navigation}/>
                {/*<Text style={{ fontFamily: 'KaushanScript', fontSize: 60, color: 'white' }}>Rosted</Text>
                */}
            </ImageBackground>
        </View>
     );
}
 
export default Login;
import { View,ImageBackground, TouchableWithoutFeedback, Keyboard } from "react-native";
import Lbottom from "../components/login/Lbottom";
import { styles } from "../Styles";
import L_top from "../components/login/L_top";


const Login = ({navigation}) => {
    return ( 
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/chicken.jpg')} style={styles.container}>

                    <L_top/>
  
                    <Lbottom navigation={navigation}/>
            </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
     );
}
 
export default Login;
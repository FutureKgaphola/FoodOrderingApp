import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "../Styles";
import Htop from "../components/home/Htop";
import Hcenter from "../components/home/Hcenter";
import Hbottom from "../components/home/Hbottom";

const Home = ({navigation}) => {
    return (
        <View style={styles.Homecontainer}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Htop navigation={navigation}/>
           </TouchableWithoutFeedback>
            <Hcenter navigation={navigation}/>
            <Hbottom msg={'checkout 2 products'} navigation={navigation}/>
        </View> 
        
    );
}

export default Home;
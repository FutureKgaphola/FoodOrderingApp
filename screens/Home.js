import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "../Styles";
import Htop from "../components/home/Htop";
import Hcenter from "../components/home/Hcenter";
import Hbottom from "../components/home/Hbottom";

const Home = () => {
    return (
        <View style={styles.Homecontainer}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Htop />
           </TouchableWithoutFeedback>
            <Hcenter />

            <Hbottom/>
        </View> 
        
    );
}

export default Home;
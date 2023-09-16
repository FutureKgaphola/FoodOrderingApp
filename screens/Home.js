import { ScrollView, Text,Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "../Styles";
import Htop from "../components/home/Htop";
import Hcenter from "../components/home/Hcenter";
import Hbottom from "../components/home/Hbottom";

const Home = () => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
           <View style={styles.Homecontainer}>
            <ScrollView
                bounces={false}
            ><Htop />
            </ScrollView>
            
            <Hcenter />
            <Hbottom />
        </View> 
        </TouchableWithoutFeedback>
    );
}

export default Home;
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "../Styles";
import Htop from "../components/home/Htop";
import Hcenter from "../components/home/Hcenter";
import Hbottom from "../components/home/Hbottom";
import { useState } from "react";

const Home = ({navigation}) => {
    const [cartItems,SetCart]=useState([]);

    return (
        <View style={styles.Homecontainer}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Htop navigation={navigation} cartItems={cartItems} SetCart={SetCart}/>
           </TouchableWithoutFeedback>
            <Hcenter navigation={navigation} SetCart={SetCart} cartItems={cartItems}/>
            <Hbottom msg={'checkout '} navigation={navigation} cartItems={cartItems} SetCart={SetCart}/>
        </View> 
        
    );
}

export default Home;
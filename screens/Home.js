import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "../Styles";
import Htop from "../components/home/Htop";
import Hcenter from "../components/home/Hcenter";
import Hbottom from "../components/home/Hbottom";
import { useContext, useState } from "react";
import { CartContext } from "../Global/CartManager";


const Home = ({navigation}) => {
    const {
        cartItems,SetCartitems,
    }=useContext(CartContext);
    //const [cartItems,SetCart]=useState([]);
    //console.log(val2);


    return (
        <View style={styles.Homecontainer}>
            
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Htop navigation={navigation} />
           </TouchableWithoutFeedback>
            <Hcenter navigation={navigation} />
            <Hbottom msg={'checkout '} navigation={navigation} />
        </View> 
        
    );
}

export default Home;
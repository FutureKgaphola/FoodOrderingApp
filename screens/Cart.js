import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Hbottom from "../components/home/Hbottom";
import { useState } from "react";
import CartItemsGenrator from "../shared/CartItemsGenrator";
import Header from "../shared/Header";

const Cart = ({ navigation }) => {
    const[cartitems,SetCart]=useState(
        [
        { foodurl: require('../assets/fries2.png'), id: 1, item_name: 'Extra hot fries', description: 'lorems...' },
        { foodurl: require('../assets/fries1.png'), id: 2, item_name: 'Tasty fries', description: 'lorems...' },
        { foodurl: require('../assets/plate2.png'), id: 3, item_name: 'Full chicken', description: 'lorems...' },
        { foodurl: require('../assets/plate3.png'), id: 4, item_name: 'Full chicken', description: 'lorems...' }
        ]
    );
  return (
    <View style={styles.parent}>
      <View style={styles.childone}>
        <Header msgcaption={'max fee'} navigation={navigation}/>
        <CartItemsGenrator cartitems={cartitems}/>
          <Hbottom msg={'accept and pay'} navigation={navigation}/>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "#2C3135",
  },
  childone: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column",
  },
});

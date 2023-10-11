
import {
  StyleSheet,
  View,
} from "react-native";
import Hbottom from "../components/home/Hbottom";
import { useContext, useState } from "react";
import CartItemsGenrator from "../shared/CartItemsGenrator";
import Header from "../shared/Header";
import { CartContext } from "../Global/CartManager";

const Cart = (props) => {
  const {navigation}=props;
  const {cartItems,SetCartitems}=useContext(CartContext);
  return (
    <View style={styles.parent}>
      <View style={styles.childone}>
        <Header navigation={navigation}/>
        <CartItemsGenrator cartitems={cartItems}/>
          <Hbottom msg={'accept and pay '} navigation={navigation} cartItems={cartItems} SetCart={SetCartitems}/>
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

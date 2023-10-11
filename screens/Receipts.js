import { StyleSheet, View } from "react-native";
import Header from "../shared/Header";
import ReceiptsGenrator from "../shared/ReceiptsGenrator";
import Hbottom from "../components/home/Hbottom";
import { useContext, useState } from "react";
import { CartContext } from "../Global/CartManager";

const Receipts = (props) => {
  const {navigation}=props;
  const {
    cartItems,SetCartitems,
    receipt, SetReceipt
}=useContext(CartContext);

  const [recepits, SetReceipts] = useState(receipt);
  return (
    <View style={styles.parent}>
      <View style={styles.childone}>
        <Header navigation={navigation} />

        <ReceiptsGenrator recepits={recepits} />
        <Hbottom msg={"back to meals"} navigation={navigation} cartItems={cartItems} SetCart={SetCartitems}/>
      </View>
    </View>
  );
};

export default Receipts;

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

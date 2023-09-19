import { StyleSheet, View } from "react-native";
import Header from "../shared/Header";
import ReceiptsGenrator from "../shared/ReceiptsGenrator";
import Hbottom from "../components/home/Hbottom";
import { useState } from "react";

const Receipts = ({ navigation }) => {
  const [recepits, SetReceipts] = useState([
    {
      id: 1,
      itemOncard: ["full chicken", "small fries", "full chicken"],
      date: "12/06/2023",
    },
    {
      id: 2,
      itemOncard: ["full chicken", "small fries"],
      date: "19/03/2023",
    },
    {
      id: 3,
      itemOncard: [ "small fries"],
      date: "16/07/2023",
    },
    {
      id: 4,
      itemOncard: ["full chicken", "small fries", "full chicken"],
      date: "13/06/2023",
    },
  ]);
  return (
    <View style={styles.parent}>
      <View style={styles.childone}>
        <Header msgcaption={"status"} navigation={navigation} />

        <ReceiptsGenrator recepits={recepits} />
        <Hbottom msg={"back to meals"} navigation={navigation} />
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

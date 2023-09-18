import { StyleSheet, View } from "react-native";
import Header from "../shared/Header";
import ReceiptsGenrator from "../shared/ReceiptsGenrator";
import Hbottom from "../components/home/Hbottom";

const Receipts = ({ navigation }) => {
    return ( 
        <View style={styles.parent}>
        <View style={styles.childone}>
          <Header msgcaption={'status'} navigation={navigation}/>
  
          <ReceiptsGenrator/>
              <Hbottom msg={'back to meals'} navigation={navigation}/>
        </View>
      </View>
       );
}
 
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
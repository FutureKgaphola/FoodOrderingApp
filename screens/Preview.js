import { AntDesign } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-elements";

import Suggested from "../shared/Suggested";
import Hbottom from "../components/home/Hbottom";
import Header from "../shared/Header";
import { useContext } from "react";
import { CartContext } from "../Global/CartManager";
import uuid from 'react-native-uuid';

const Preview = ({ route, navigation }) => {


  const {
    cartItems, SetCartitems,
    previewName, SetPreviewName,
    previewPrice, SetPreviewPrice,
    previewImage, SetPreviewImage,
    previewDesc, SetPreviewDescription
  } = useContext(CartContext);

  return (
    <View style={styles.parent}>
      <View style={styles.childone}>
        <Header navigation={navigation} />

        <ScrollView>
          <View>
            <Image
              style={{ width: 200, height: 200, alignSelf: "center",objectFit:"contain" }}
              source={{uri:previewImage}}
            />
            <Card elevation={7} containerStyle={{ borderRadius: 9 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontFamily: "kanit", fontSize: 20 }}>
                  {previewName}
                </Text>
                <TouchableOpacity
                  style={{
                    borderRadius: 5,
                    padding: 5,
                    justifyContent: "center",
                    backgroundColor: "#FAF9F6",
                  }}
                >
                  <AntDesign name="heart" size={24} color="red" />
                </TouchableOpacity>
              </View>
              <Text style={{ fontFamily: "KantumruyPro" }}>⭐4.9 ratings</Text>
              <Text style={{ fontFamily: "KantumruyPro" }}>
                {previewDesc}
              </Text>
              <Text>R{previewPrice} 💳</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => SetCartitems(
                    [

                      ...cartItems, { foodurl: previewImage, id: uuid.v4(), item_name: previewName, description: previewDesc, price: previewPrice }
                    ]

                  )}
                  style={{
                    borderRadius: 18,
                    flexDirection: "row",
                    overflow: "hidden",
                    elevation: 5,
                    padding: 2,
                    backgroundColor: "black",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "KantumruyPro",
                      color: "white",
                      alignSelf: "center",
                      textAlign: "center",
                      paddingRight: 5,
                      paddingLeft: 5
                    }}
                  >
                    Add to my cart
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: "KeaniaOne",
                        color: "black",
                        borderRadius: 15,
                        fontSize: 14,
                        backgroundColor: "white",
                        padding: 2,
                        alignSelf: "flex-end",
                      }}
                    >
                      R{previewPrice}
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </Card>

            <Text style={{ fontFamily: "kanit", fontSize: 21, marginLeft: 5 }}>
              You may also like this..
            </Text>

            <Suggested/>

            <Hbottom msg={'checkout '} navigation={navigation} cartItems={cartItems} SetCart={SetCartitems} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Preview;

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

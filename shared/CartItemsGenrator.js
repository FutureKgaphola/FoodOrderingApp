import { Feather } from "@expo/vector-icons";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";

const CartItemsGenrator = ({ cartitems }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={cartitems}
      renderItem={({ item }) => (
        <Card elevation={7} containerStyle={{ borderRadius: 9 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontFamily: "kanit", fontSize: 20 }}>
              {item.item_name}
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                padding: 5,
                justifyContent: "center",
                backgroundColor: "#FAF9F6",
              }}
            >
              <Image
                style={{ width: 40, height: 40, marginTop: 1 }}
                source={item.foodurl}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: "KantumruyPro" }}>⭐4.9 ratings</Text>
          <Text style={{ fontFamily: "KantumruyPro" }}>{item.description}</Text>
          <Text>R235.99 💳</Text>
          <View style={{ flexDirection: "row" }}>
            <View
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
              <TouchableOpacity>
                <Feather
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                  }}
                  name="minus-circle"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>

              <Text
                style={{
                  fontFamily: "KantumruyPro",
                  color: "white",
                  alignSelf: "center",
                  textAlign: "center",
                  marginLeft: 6,
                  marginRight: 6,
                }}
              >
                1
              </Text>
              <TouchableOpacity>
                <Feather
                  style={{
                    borderRadius: 15,

                    backgroundColor: "white",
                    padding: 2,
                    alignSelf: "flex-end",
                  }}
                  name="plus-circle"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      )}
    />
  );
};

export default CartItemsGenrator;

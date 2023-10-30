import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import uuid from 'react-native-uuid';
import { CartContext } from "../Global/CartManager";
import { useEffect } from "react";
import { db } from "../Connection/dbconfig";
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const Suggested = () => {
  const {
    cartItems, SetCartitems,
  } = useContext(CartContext);
  const [food, setfood] = useState([]);

    const q = query(collection(db, "Food"), where("category", "==", "suggestions"));
    useEffect(() => {
      onSnapshot(q,(querySnapshot) => {
          const Store = [];
          querySnapshot.forEach((doc) => {
            Store.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setfood(Store);
        });
      
  
    }, []);
  return (
    <View>
      {food.length > 0 ? (
        <FlatList
          horizontal
          keyExtractor={(item) => item.id}
          data={food}
          scrollEnabled
          style={{
            flexGrow: 0,
            marginTop: 5,
            marginBottom: 160,
          }}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Card elevation={7} containerStyle={{ borderRadius: 9 }}>
                <TouchableOpacity
                  onPress={() => SetCartitems(
                    [
                      ...cartItems, item
                    ]

                  )}>
                  <AntDesign
                    style={{ elevation: 5 }}
                    name="pluscircle"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                >
                  <Image
                    style={{ width: 100, height: 100, marginTop: 1 }}
                    source={{uri:item.foodurl}}
                  />
                </TouchableOpacity>
                <Text style={{ fontFamily: "KaushanScript", fontSize: 16 }}>
                  {item.item_name}
                </Text>

                <View
                  style={{
                    borderRadius: 18,
                    overflow: "hidden",
                    elevation: 5,
                    padding: 2,
                    backgroundColor: "black",
                    justifyContent: "flex-end",
                  }}
                >
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
                      R{item.price}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          )}
        />
      ) : (
        <Text> No suggesstion for this meal</Text>
      )}
    </View>
  );
};

export default Suggested;

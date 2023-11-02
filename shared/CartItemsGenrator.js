import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import { CartContext } from "../Global/CartManager";

const CartItemsGenrator = ({ cartitems }) => {
  const {
    cartItems,SetCartitems,
}=useContext(CartContext);
  const Removeitem=(id)=>{

    cartItems.forEach(element => {
      if(element.id==id){
        element.quantity=1;
      }
  });
    SetCartitems(cartItems.filter((item)=>item.id!==id));
  }
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
                source={{uri:item.foodurl}}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: "KantumruyPro" }}>⭐4.9 ratings</Text>
          <Text style={{ fontFamily: "KantumruyPro" }}>{item.description}</Text>
          <Text>R{item.price} 💳</Text>
          
          <Text>Quantity : {item.quantity==undefined ?  "1" : item.quantity}</Text>
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
              <TouchableOpacity onPress={()=>Removeitem(item.id)}>
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
            </View>

          </View>
        </Card>
      )}
    />
  );
};

export default CartItemsGenrator;

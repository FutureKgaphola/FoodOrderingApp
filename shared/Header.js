import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Header = (props) => {
  const { msgcaption, navigation } = props;
  return (
    <View
      style={{
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        padding: 6,
        backgroundColor: "#2C3135",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "KaushanScript",
            fontSize: 35,
            color: "white",
          }}
        >
          Rosted
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "rgba(204,255,0,0.8)",
              borderRadius: 5,
              alignItems: "center",
              padding: 3,
            }}
          >
            <Ionicons name="cart" size={26} color="black" />
            <Text>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 5,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity>
            <Ionicons
              style={{ backgroundColor: "white", borderRadius: 5 }}
              name="arrow-back"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={{ backgroundColor: "white", borderRadius: 5 }}
              name="md-exit-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              borderRadius: 18,
              flexDirection: "row",
              overflow: "hidden",
              elevation: 5,
              padding: 2,
              backgroundColor: "rgba(204,255,0,0.8)",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: "KantumruyPro",
                color: "white",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              {" " + msgcaption + " "}
            </Text>
            <View>
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
                R135.99
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

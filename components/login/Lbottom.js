import { Alert, Text, TextInput, View } from "react-native";
import { styles } from "../../Styles";
import {
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Connection/dbconfig";
import { useContext, useState } from "react";
import { CartContext } from "../../Global/CartManager";
import { Button } from "react-native-paper";
const Lbottom = ({ navigation }) => {
  const { key, SetKey } = useContext(CartContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      setisLoading(true);
      signInWithEmailAndPassword(auth, username.trim().toLowerCase(), password)
        .then((res) => {
          SetKey(res.user.uid);
          setPassword("");
          setUsername("");
          setisLoading(false);
          navigation.navigate("Home");
        })
        .catch((err) => {
          setPassword("");
          setisLoading(false);
          Alert.alert("Notification", err.message);
        });
    } else {
      Alert.alert("Notification", "Please fill the required fields.");
    }
  };

  return (
    <View style={styles.Wbottom}>
      <View
        style={{
          borderRadius: 15,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          backgroundColor: "#afc91c",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 5,
            marginLeft: 19,
            marginRight: 18,
            marginTop: 10,
            borderRadius: 25,
            backgroundColor: "white",
          }}
        >
          <FontAwesome
            name="user-circle-o"
            style={{ alignSelf: "center", marginLeft: 10 }}
            size={27}
            color="black"
          />
          <TextInput
            onChangeText={(text) => setUsername(text)}
            value={username}
            keyboardType="email-address"
            style={{ margin: 5, alignSelf: "center" }}
            placeholder="someone@mail.com"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            padding: 5,
            marginLeft: 19,
            marginRight: 18,
            marginTop: 10,
            marginBottom: 8,
            borderRadius: 25,
            backgroundColor: "white",
          }}
        >
          <FontAwesome5
            name="unlock-alt"
            style={{ alignSelf: "center", marginLeft: 10 }}
            size={27}
            color="black"
          />
          <TextInput
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            style={{ margin: 5, alignSelf: "center" }}
            placeholder="password"
          />
        </View>

        <View
          style={{
            backgroundColor: "#2C3135",
            borderRadius: 15,
            padding: 12,
            maxWidth: "100%",
          }}
        >
          <Button
                  onPress={() => handleLogin()}
                  disabled={isLoading ? true : false}
                  style={{
                    backgroundColor: "#2C3135",
                    borderColor: "white",
                    borderWidth: 1,
                  }}
                  loading={isLoading}
                  mode="contained"
                >
                  Login
                </Button>

          <Button
            style={{
              backgroundColor: "rgba(204,255,0,0.8)",
              borderRadius: 80,
              margin: 5,
            }}
            onPress={() => navigation.navigate("Register")}
            mode="contained"
          >
            Register
          </Button>

          <Text
            onPress={() => navigation.navigate("Forgotpassword")}
            style={{
              fontWeight: "600",
              textAlign: "right",
              fontFamily: "KantumruyPro",
              fontSize: 18,
              color: "white",
              marginRight: 5,
            }}
          >
            forgot password
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Lbottom;

import { styles } from "../Styles";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Alert,
} from "react-native";
import L_top from "../components/login/L_top";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Connection/dbconfig";
import { useState } from "react";
import { Button } from "react-native-paper";
const Forgotpassword = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [Username, setUsername] = useState("");

  const handleSubmit = async () => {
    if (Username !== "") {
      try {
        setisLoading(true);
        sendPasswordResetEmail(auth, Username.trim().toLocaleLowerCase())
          .then(() => {
            setisLoading(false);
            setUsername("");
            Alert.alert(
              "Notification",
              "We have send you a reset passwork link to the provided email",
              [{ text: "OK", onPress: () => navigation.navigate("Login") }]
            );
          })
          .catch((err) => {
            console.log(error);
            setisLoading(false);
            Alert.alert("Notification", err.message);
          });
      } catch (error) {
        console.log(error);
        setisLoading(false);
        Alert.alert("Notification", error.message);
      }
    } else {
      Alert.alert("notification", "Please provide an email below");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/chicken.jpg")}
          style={styles.container}
        >
          <L_top />

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
                  marginBottom: 5,
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
                  keyboardType="email-address"
                  style={{ margin: 5, alignSelf: "center" }}
                  placeholder="someone@mail.com"
                  onChangeText={(text) => setUsername(text)}
                  value={Username}
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
                  onPress={() => handleSubmit()}
                  disabled={isLoading ? true : false}
                  style={{
                    backgroundColor: "#2C3135",
                    borderColor: "white",
                    borderWidth: 1,
                  }}
                  loading={isLoading}
                  mode="contained"
                >
                  Sent reset link
                </Button>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Forgotpassword;

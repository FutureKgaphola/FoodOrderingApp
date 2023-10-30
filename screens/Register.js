import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { doc, setDoc } from "firebase/firestore";
import { db,auth } from "../Connection/dbconfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Register = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (Password !== '' && Username !== '' && Name!=='' && Phone!=='') {

      try {
        let data = {
          Username: Username,
          memberDate:(new Date().toLocaleDateString()).toString(),
          address:[],
          Name:Name.trim(),
          Phone:Phone,
          membership:'customer'
        }
        setisLoading(true);
        const result = await createUserWithEmailAndPassword(auth, Username.trim().toLocaleLowerCase(), Password);
        setDoc(doc(db, "Users", result.user.uid.trim()), data).then(() => {
          setisLoading(false);
          setName('');
          setPassword('');
          setPhone('');
          setUsername('');
          Alert.alert('Notification', 'Successfull registration',
          [
            {text: 'OK', onPress: () =>navigation.navigate("Login")},
          ]);
        }).catch((err) => {
          console.log(err);
          setisLoading(false);
          Alert.alert('Notification', err.message);
        })
      } catch (error) {
        console.log(error);
        setisLoading(false);
        Alert.alert('Notification', error.message);
      }
    }else{
      Alert.alert('Notification', 'Please fill the required fields.');
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={{
          flex: 1,
          backgroundColor: "#EDEADE",
          justifyContent: "center",
        }}>
        <View
        style={{
          flex: 1,
          backgroundColor: "#EDEADE",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "95%", padding: 5 }}>
          <View>
            <Text style={{ fontFamily: "kanit", fontSize: 25 }}>
              Register your account
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Image
                style={{ width: 140, height: 40 }}
                source={require("../assets/Rosted.png")}
              />
              <View
                style={{
                  display: "flex",
                  overflow: "hidden",
                  height: 68,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  backgroundColor: "rgba(255, 248, 248,0.7)",
                  borderTopLeftRadius: 150,
                  borderBottomLeftRadius: 150,
                }}
              >
                <Image
                  style={{ width: 55, height: 55 }}
                  source={require("../assets/plate3.png")}
                />
                <Image
                  style={{ width: 55, height: 55 }}
                  source={require("../assets/plate2.png")}
                />
              </View>
            </View>

            <TextInput
              label="Name"
              value={Name}
              mode="outlined"
              inputMode="text"
              outlineColor="black"
              selectionColor="black"
              activeOutlineColor="black"
              onChangeText={(text) => setName(text)}
              left={
                <TextInput.Icon
                  icon={() => (
                    <Feather
                      style={{ backgroundColor: "white", margin: 0 }}
                      name="user-check"
                      size={24}
                      color="black"
                    />
                  )}
                />
              }
            />

            <TextInput
              label="Phone"
              value={Phone}
              mode="outlined"
              maxLength={10}
              inputMode="tel"
              outlineColor="black"
              selectionColor="black"
              activeOutlineColor="black"
              onChangeText={(text) => setPhone(text)}
              left={
                <TextInput.Icon
                  icon={() => (
                    <Feather
                      style={{ backgroundColor: "white", margin: 0 }}
                      name="phone"
                      size={24}
                      color="black"
                    />
                  )}
                />
              }
            />
            <TextInput
              label="Email"
              value={Username}
              mode="outlined"
              inputMode="email"
              outlineColor="black"
              selectionColor="black"
              activeOutlineColor="black"
              onChangeText={(text) => setUsername(text)}
              left={
                <TextInput.Icon
                  icon={() => (
                    <Feather
                      style={{ backgroundColor: "white", margin: 0 }}
                      name="mail"
                      size={24}
                      color="black"
                    />
                  )}
                />
              }
            />
            <TextInput
              label="Password"
              value={Password}
              mode="outlined"
              inputMode="text"
              secureTextEntry={true}
              outlineColor="black"
              selectionColor="black"
              activeOutlineColor="black"
              onChangeText={(text) => setPassword(text)}
              left={
                <TextInput.Icon
                  icon={() => (
                    <Feather
                      style={{ backgroundColor: "white", margin: 0 }}
                      name="key"
                      size={24}
                      color="black"
                    />
                  )}
                />
              }
            />

            <Button onPress={() => handleSubmit()}
              style={{
                backgroundColor: "#2C3135",
                borderRadius: 15,
                marginTop: 20,
              }}
              icon={() => (
                <Ionicons name="person-add" size={24} color="white" />
              )}
              mode="contained"
              loading={isLoading}
            >
              Add account
            </Button>
          </View>
        </Card>
      </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

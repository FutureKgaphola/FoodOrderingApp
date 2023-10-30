import { StyleSheet, View, Text, Alert } from "react-native";
import Header from "../shared/Header";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Global/CartManager";
import { TextInput,Button  } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../Connection/dbconfig";
const Profile = ({ navigation }) => {
  const [text, setText] = useState("");
  const {
    key
} = useContext(CartContext);

const [Name, setName] = useState('');
const [Phone,setPhone]=useState('');
const [membershipDate,setMemberDate]=useState('');
const [isLoading, setisLoading] = useState(false);

useEffect(() => {
    var document = doc(db, "Users", key)
    onSnapshot(document, (snapshot) => {
        setName(snapshot.data().Name);
        setMemberDate(snapshot.data().memberDate);
        setPhone(snapshot.data().Phone)
    })
}, []);
const updateCurrentUser = () => {

  if (Name!=='' && Phone!=='' && Phone.length==10) {
      let update = { 
          Name: Name,
          Phone:Phone
       }
      setisLoading(true);
      setDoc(doc(db, 'Users', key.trim()), update, { merge: true }).then(() => {
          setisLoading(false);
          Alert.alert('Notification', 'Successfully Updated');
      }).catch((err) => {
          setisLoading(false);
          console.log(String(err));
          Alert.alert('Notification', String(err));
      });
  }else{
      Alert.alert('Notification', 'Please fill the required fields. make sure phone number consist of 10 digits.');
  }   
}
  return (
    <View style={styles.parent}>
      <View style={styles.childone}>
        <Header navigation={navigation} />
        <View style={{margin:10,padding:5}}>
          <Text style={{fontFamily:'kanit'}}>Member since : {membershipDate}</Text>
        <TextInput
          label="Name"
          value={Name}
          mode="outlined"
          inputMode="text"
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
          inputMode="tel"
          maxLength={10}
          left={
            <TextInput.Icon
              icon={() => (
                <FontAwesome name="mobile-phone" size={24} color="black" />
              )}
            />
          }
          onChangeText={(text) => setPhone(text)}
        />
        <Button disabled={isLoading ? true : false}
         style={{backgroundColor:'#2C3135',borderRadius:15,marginTop:20}}
          icon={()=>(<MaterialIcons name="save-alt" size={24} color="white" />)}
          loading={isLoading} mode="contained" onPress={() => updateCurrentUser()}>
    Update
  </Button>
        </View>
      </View>
    </View>
  );
};

export default Profile;

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

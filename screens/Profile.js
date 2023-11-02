import { StyleSheet, View, Text, Alert, Image, Pressable } from "react-native";
import Header from "../shared/Header";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Global/CartManager";
import { TextInput, Button, Card, List } from "react-native-paper";
import { addDoc, collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../Connection/dbconfig";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons,FontAwesome,MaterialIcons,Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import * as FileSystem from 'expo-file-system';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const Profile = ({ navigation }) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const { key,membership } = useContext(CartContext);
  const [image, setImage] = useState(null);
  const [Name, setName] = useState("");
  const [ItemName, setItemName] = useState("");
  const [ItemPrice, setItemPrice] = useState('');
  const [ItemDesc, setItemDesc] = useState("");
  const [Phone, setPhone] = useState('');
  const [membershipDate, setMemberDate] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [selected,setSelected]=useState(false);
  const [isuploading,setUploading]=useState(false);
  useEffect(() => {
    var document = doc(db, "Users", key);
    onSnapshot(document, (snapshot) => {
      setName(snapshot.data().Name);
      setMemberDate(snapshot.data().memberDate);
      setPhone(snapshot.data().Phone);
    });
  }, []);
  const updateCurrentUser = () => {
    if (Name !== "" && Phone !== "" && Phone.length == 10) {
      let update = {
        Name: Name,
        Phone: Phone,
      };
      setisLoading(true);
      setDoc(doc(db, "Users", key.trim()), update, { merge: true })
        .then(() => {
          setisLoading(false);
          Alert.alert("Notification", "Successfully Updated");
        })
        .catch((err) => {
          setisLoading(false);
          console.log(String(err));
          Alert.alert("Notification", String(err));
        });
    } else {
      Alert.alert(
        "Notification",
        "Please fill the required fields. make sure phone number consist of 10 digits."
      );
    }
  };
  const reset=()=>{
    setImage(null);
    setItemName('');
    setItemPrice(0.00);
    setItemDesc('');
    setUploading(false);
    setSelected(false);
  }
  const isReady=()=>{
    var ok=true;
    if(selected==false || ItemName=='' || ItemPrice==0.00 || ItemDesc=='' || image==null){
      ok=false;
    }
    return ok;
  }
  const uploadProduct = async () => {
    if(isReady()){
      try {
        setUploading(true);
        const {uri}=await FileSystem.getInfoAsync(image);
        const blob=await new Promise((resolve,reject)=>{
          const xhr =new XMLHttpRequest();
          xhr.onload=()=>{
            resolve(xhr.response);
          };
          xhr.onerror=()=>{
            reject(new TypeError('Network request failed'))
          };
          xhr.responseType='blob';
          xhr.open('GET',uri,true);
          xhr.send(null);
        });
        const filename=image.substring(image.lastIndexOf('/')+1);
        const storage = getStorage();
        const storageRef = ref(storage, filename);
        uploadBytes(storageRef, blob).then((snapshot) => {
          getDownloadURL(storageRef).then(url=>{
            setUploading(false);
            food={
              category:selected,
              description:ItemDesc,
              foodurl:url,
              item_name:ItemName,
              price:ItemPrice,
              fileName:filename
            }
            addDoc(collection(db, "Food"),food).then(res=>{
              reset();
              if(res){
                Alert.alert('Notification','Upload succesful');
              }
            }).catch(err=>{Alert.alert('Notification',String(err));});
          }).catch(err=>{
            setUploading(false);
            Alert.alert('Error',String(err));
          });
        }).catch(err=>{
          setUploading(false);
          Alert.alert('Error',String(err));
        });
        setImage(null);
      } catch (error) {
        console.log(error);
        setImage(null);
        setUploading(false);
        Alert.alert('Error',String(error));
      }
    }
  };
 
  const pickImage = async () => {
    if(isuploading==false){
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0,
      });
  
      if (result.canceled === false) {
        setImage(result.assets[0].uri);
      } else {
        return;
      }
    }
  };
  return (
    <View style={styles.parent}>
      <View style={styles.childone}>
        <Header navigation={navigation} />
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{ margin: 10, padding: 5 }}>
          <Text style={{ fontFamily: "kanit" }}>
            Member since : {membershipDate}
          </Text>
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
          <Button
            disabled={isLoading ? true : false}
            style={{
              backgroundColor: "#2C3135",
              borderRadius: 15,
              marginTop: 20,
            }}
            icon={() => (
              <MaterialIcons name="save-alt" size={24} color="white" />
            )}
            loading={isLoading}
            mode="contained"
            onPress={() => updateCurrentUser()}
          >
            Update
          </Button>

          {membership.trim().toLowerCase()=='administrator' ? 
          <Card style={{ backgroundColor: "white", margin: 5 }}>
          <View
            style={{
              justifyContent: "center",
              
              padding: 10,
            }}
          >
            <Pressable onPress={() => pickImage()}>
              <Image
                style={{ width: 100, height: 100, objectFit: "contain" }}
                source={
                  image !== null
                    ? { uri: image }
                    : require("../assets/Rosted.png")
                }
              />
            </Pressable>

            <List.Section title={selected? selected : "Category"}>
              <List.Accordion
                title="select food category"
                left={(props) => <List.Icon {...props} icon="folder" />}
              >
                <List.Item title="chicken" onPress={()=>setSelected('chicken')}/>
                <List.Item title="suggestions" onPress={()=>setSelected('suggestions')}/>
              </List.Accordion>
            </List.Section>

            <TextInput
              label="Price"
              value={ItemPrice}
              mode="outlined"
              inputMode="numeric"
              onChangeText={(text) => setItemPrice(text.toString())}
              left={
                <TextInput.Icon
                  icon={() => (
                    <FontAwesome style={{ backgroundColor: "white", margin: 0 }} name="money" size={24} color="black" />
                    
                  )}
                />
              }
            />

            <TextInput
              label="Item Name"
              value={ItemName}
              mode="outlined"
              inputMode="text"
              onChangeText={(text) => setItemName(text)}
              left={
                <TextInput.Icon
                  icon={() => (
                    <MaterialCommunityIcons style={{ backgroundColor: "white", margin: 0 }} name="food-turkey" size={24} color="black" />
                  )}
                />
              }
            />
            <TextInput
              label="Description"
              value={ItemDesc}
              mode="outlined"
              inputMode="text"
              multiline
              numberOfLines={4}
              onChangeText={(text) => setItemDesc(text)}
              left={
                <TextInput.Icon
                  icon={() => (
                    <MaterialIcons style={{ backgroundColor: "white", margin: 0 }} name="notes" size={24} color="black" />
                  )}
                />
              }
            />

            <Button
              
              style={{
                backgroundColor: "#2C3135",
                borderRadius: 15,
                marginTop: 20,
              }}
              icon={() => (
                <MaterialIcons name="upload-file" size={24} color="white" />
              )}
              loading={isuploading}
              mode="contained"
              onPress={() => uploadProduct()}
            >
              {isuploading ? 'Uploading...' : 'Upload'}
            </Button>
          </View>
        </Card> : null}

          
        </ScrollView>
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

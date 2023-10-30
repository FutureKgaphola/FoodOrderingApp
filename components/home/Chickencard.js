import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { useContext, useEffect, useState } from "react";
import { CartContext } from '../../Global/CartManager';
import uuid from 'react-native-uuid';
import { db } from "../../Connection/dbconfig";
import { collection,onSnapshot,query, where } from "firebase/firestore";

const Chickencard = (props) => {

    const {
        previewName,SetPreviewName,
        previewPrice,SetPreviewPrice,
        previewImage,SetPreviewImage,
        previewDesc,SetPreviewDescription
    } = useContext(CartContext);

    const { navigation, SetCart, cartItems } = props;
    const [food, setfood] = useState([]);

  const q = query(collection(db, "Food"), where("category", "==", "chicken"));
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
    
    const previewitem=(item)=>{
    SetPreviewName(item.item_name);
    SetPreviewPrice(item.price);
    SetPreviewImage(item.foodurl);
    SetPreviewDescription(item.description);
    navigation.navigate('Preview');

    }

    const chechIfExist=(item,productName)=>{
        var found=false;
        cartItems.forEach(element => {
            if(element.item_name==productName){
                if(element.quantity===NaN || element.quantity==undefined){
                    element.quantity=0;
                    element.quantity++;
                }else{
                    element.quantity++;
                }
                found=true;
            }
        });

        if(found !==true){
            SetCart(
                [...cartItems, item]
            )
        }
    }
    return (
        <View>
            {food.length > 0 ?

                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={food}
                    scrollEnabled
                    style={{
                        flexGrow: 0,
                        marginTop: 5,
                        marginBottom: 160
                    }}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row' }}>
                            <Card elevation={7}
                                containerStyle={{ borderRadius: 9 }}>
                                <TouchableOpacity onPress={() => chechIfExist(item,item.item_name)}>
                                    <AntDesign style={{ elevation: 5 }} name="pluscircle" size={24} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => previewitem(item)}>
                                    <Image style={{ width: 105, height: 105, marginTop: 1 }}
                                        source={{uri:item.foodurl}}
                                    />
                                </TouchableOpacity>
                                <Text style={{ fontFamily: 'KaushanScript', fontSize: 16 }}>{item.item_name}</Text>

                                <View style={{ borderRadius: 18, overflow: "hidden", elevation: 5, padding: 2, backgroundColor: 'black', justifyContent: 'flex-end' }}>

                                    <TouchableOpacity>
                                        <Text style={{ fontFamily: 'KeaniaOne', color: 'black', borderRadius: 15, fontSize: 14, backgroundColor: 'white', padding: 2, alignSelf: 'flex-end' }}>R{item.price}</Text>
                                    </TouchableOpacity>
                                </View>

                            </Card>
                        </View>
                    )}

                />

                : <Text>No chicken available</Text>
            }


        </View>

    );
}

export default Chickencard;
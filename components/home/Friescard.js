import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { db } from "../../Connection/dbconfig";
import { collection, onSnapshot, query, where } from 'firebase/firestore';
const Friescard = (props) => {
    const{navigation,SetCart,cartItems}=props;
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
            {food.length>0 ?
            
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
                                <TouchableOpacity onPress={()=>SetCart(
                                    [...cartItems,item]
                                )}>
                                <AntDesign style={{ elevation: 5 }} name="pluscircle" size={24} color="black" />
                                </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('Preview')}>
                                <Image style={{ width: 105, height: 105, marginTop: 1 }}
                                    source={item.foodurl}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontFamily: 'KaushanScript', fontSize: 16 }}>{item.item_name}</Text>

                            <View style={{ borderRadius: 18, overflow: "hidden", elevation: 5, padding: 2, backgroundColor: 'black', justifyContent: 'flex-end' }}>

                                <TouchableOpacity>
                                    <Text style={{ fontFamily: 'KeaniaOne', color: 'black', borderRadius: 15, fontSize: 14, backgroundColor: 'white', padding: 2, alignSelf: 'flex-end' }}>R135.99</Text>
                                </TouchableOpacity>
                            </View>

                        </Card>
                    </View>
                )}

            />

            :<Text>No fries available</Text>
        }
            

        </View>

    );
}

export default Friescard;
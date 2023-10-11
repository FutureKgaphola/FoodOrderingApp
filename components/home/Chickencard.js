import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { useContext, useState } from "react";
import { CartContext } from '../../Global/CartManager';
import uuid from 'react-native-uuid';
const Chickencard = (props) => {

    const {
        previewName,SetPreviewName,
        previewPrice,SetPreviewPrice,
        previewImage,SetPreviewImage,
        previewDesc,SetPreviewDescription
    } = useContext(CartContext);

    const { navigation, SetCart, cartItems } = props;

    const [food, setfood] = useState([
        { foodurl: require('../../assets/plate3.png'), id: uuid.v4(), item_name: 'full chicken', description: `In publishing and graphic design, Lorem ipsum is a placeholder
        text commonly used to demonstrate the visual form of a document
        or a typefacd as a placeholder before final`,price:'123.22' },
        { foodurl: require('../../assets/plate2.png'), id: uuid.v4(), item_name: 'full chicken', description: `In publishing and graphic design, Lorem ipsum is a placeholder
        text commonly used to demonstrate the visual form of a document
        or a typefacd as a placeholder before final`,price:'423.66' },
        { foodurl: require('../../assets/plate1.png'), id: uuid.v4(), item_name: 'full chicken', description: `In publishing and graphic design, Lorem ipsum is a placeholder
        text commonly used to demonstrate the visual form of a document
        or a typefacd as a placeholder before final`,price:'123.33' },
        { foodurl: require('../../assets/plate3.png'), id: uuid.v4(), item_name: 'full chicken', description: `In publishing and graphic design, Lorem ipsum is a placeholder
        text commonly used to demonstrate the visual form of a document
        or a typefacd as a placeholder before final`,price:'123.66' },
        { foodurl: require('../../assets/plate2.png'), id: uuid.v4(), item_name: 'full chicken', description: `In publishing and graphic design, Lorem ipsum is a placeholder
        text commonly used to demonstrate the visual form of a document
        or a typefacd as a placeholder before final`,price:'623.00' },
        { foodurl: require('../../assets/plate1.png'), id: uuid.v4(), item_name: 'full chicken', description: `In publishing and graphic design, Lorem ipsum is a placeholder
        text commonly used to demonstrate the visual form of a document
        or a typefacd as a placeholder before final`,price:'723.66' },
        { foodurl: require('../../assets/plate3.png'), id: uuid.v4(), item_name: 'full chicken', description: `In publishing and graphic design, Lorem ipsum is a placeholder
        text commonly used to demonstrate the visual form of a document
        or a typefacd as a placeholder before final`,price:'523.36' }
    ]);

    const previewitem=(item)=>{
    SetPreviewName(item.item_name);
    SetPreviewPrice(item.price);
    SetPreviewImage(item.foodurl);
    SetPreviewDescription(item.description);
    navigation.navigate('Preview');

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
                                <TouchableOpacity onPress={() => SetCart(
                                    [...cartItems, item]
                                )}>
                                    <AntDesign style={{ elevation: 5 }} name="pluscircle" size={24} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => previewitem(item)}>
                                    <Image style={{ width: 105, height: 105, marginTop: 1 }}
                                        source={item.foodurl}
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
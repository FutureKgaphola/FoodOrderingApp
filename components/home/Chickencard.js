import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
const Chickencard = () => {
    const [food, setfood] = useState([
        { foodurl: require('../../assets/plate3.png'), id: 1, item_name: 'full chicken', description: 'lorems...' },
        { foodurl: require('../../assets/plate2.png'), id: 2, item_name: 'full chicken', description: 'lorems...' },
        { foodurl: require('../../assets/plate1.png'), id: 3, item_name: 'full chicken', description: 'lorems...' },
        { foodurl: require('../../assets/plate3.png'), id: 4, item_name: 'full chicken', description: 'lorems...' },
        { foodurl: require('../../assets/plate2.png'), id: 5, item_name: 'full chicken', description: 'lorems...' },
        { foodurl: require('../../assets/plate1.png'), id: 6, item_name: 'full chicken', description: 'lorems...' },
        { foodurl: require('../../assets/plate3.png'), id: 7, item_name: 'full chicken', description: 'lorems...' }
    ]);
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
                                <TouchableOpacity>
                                    <AntDesign style={{ elevation: 5 }} name="pluscircle" size={24} color="black" />
                                </TouchableOpacity><View>
                                    <Image style={{ width: 105, height: 105, marginTop: 1 }}
                                        source={item.foodurl}
                                    />
                                </View>
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

                : <Text>No chicken available</Text>
            }


        </View>

    );
}

export default Chickencard;
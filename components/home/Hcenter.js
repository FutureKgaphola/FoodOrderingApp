import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { styles } from "../../Styles";
import Chickencard from "./Chickencard";
import { useState } from "react";
import Friescard from "./Friescard";

const Hcenter = (props) => {
    const{navigation,SetCart,cartItems}=props;
    const [categories, setCategory] = useState('chicken');
    return (
        <View style={styles.Hcenter}>
            <View>
                <Text style={{ fontFamily: 'KaushanScript', fontSize: 25 }}>categories</Text>
                <View style={local.categories}>
                    <TouchableOpacity onPress={() => setCategory('chicken')} style={styles.btn}>
                        <View style={local.btn}>
                            <Text style={{ fontFamily: 'KaushanScript', color: 'black', fontSize: 20, padding: 1 }}>🍗 chicken </Text>
                        </View>

                    </TouchableOpacity>

                    {/*
                    <TouchableOpacity onPress={() => setCategory('fries')} style={styles.btn}>
                        <View style={local.btn}>
                            <Text style={{ fontFamily: 'KaushanScript', color: 'black', fontSize: 20, padding: 1 }}>🍟 fries </Text>
                        </View>

                    </TouchableOpacity>
                    */}
                </View>

                {/*categories === "chicken" ? <Chickencard navigation={navigation} SetCart={SetCart} cartItems={cartItems}/> : <Friescard navigation={navigation} SetCart={SetCart} cartItems={cartItems}/>*/}
                <Chickencard navigation={navigation} SetCart={SetCart} cartItems={cartItems}/> 
            </View>
        </View>
    );
}

export default Hcenter;
const local = StyleSheet.create({
    categories: {
        flexDirection: "row",
        gap: 5
    },
    btn: {
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 30,
        padding: 2,
        elevation: 5,
        backgroundColor: 'white',

    }
})

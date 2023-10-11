import { FlatList, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const ReceiptsGenrator = ({ recepits }) => {
  return (
    <FlatList
        keyExtractor={(item) => item.id}
        data={recepits}
        renderItem={({ item }) => (
          <Card elevation={7} containerStyle={{ borderRadius: 9 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor:'black'
              }}
            >
              <Text style={{ fontFamily: "kanit", fontSize: 25,color:'white' }}>Rosted</Text>
              <Text style={{color:'white'}}>{new Date().toLocaleDateString()}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
            <Text style={{ fontFamily: "KantumruyPro" }}>Product</Text>
            <Text style={{ fontFamily: "KantumruyPro" }}>Price</Text>
            </View>

            <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                        >
                        <Text style={{ fontFamily: "KantumruyPro" }}>{item.item_name}</Text>
                        <Text style={{ fontFamily: "KantumruyPro" }}>R{item.price}</Text>
                    </View>

            

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
                <Text style={{ fontFamily: "KantumruyPro" }}>Status : </Text>
                <Text style={{ fontFamily: "KantumruyPro" }}>Preparing</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                    }}
                    >
                <Text style={{ fontFamily: "KantumruyPro" }}>Total : </Text>
                <Text style={{ fontFamily: "KantumruyPro" }}>R{item.price}</Text>
            </View>

            </View>

          </Card>
        )}
      />
  );
};

export default ReceiptsGenrator;

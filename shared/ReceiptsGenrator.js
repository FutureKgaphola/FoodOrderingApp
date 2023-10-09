import { FlatList, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const ReceiptsGenrator = ({ recepits }) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div style="display: flex;justify-content:space-between; background-color: black;flex-direction: row;">
            <h3 style="color: white;">Rosted</h3>
            <p style="color: white;font-size: medium">12/06/2023</p>
        </div>
        <div style="display: flex;justify-content:space-between;flex-direction: row;">
            <h3 style="color: black;font-size: medium">Product</h3>
            <h3 style="color: black;font-size: medium">Price</h3>
        </div>
        <div style="display: flex;justify-content:space-between;flex-direction: row;">
            <p style="color: black;font-size: medium">full chicken</p>
            <p style="color: black;font-size: medium">R24.00</p>
        </div>
        <div style="display: flex;justify-content:space-between;flex-direction: row;">
            <p style="color: black;font-size: medium">full chicken</p>
            <p style="color: black;font-size: medium">R24.00</p>
        </div>
        <div style="display: flex;justify-content:flex-start;flex-direction: row;">
            <p style="color: black;font-size: medium">Status : </p>
            <p style="color: black;font-size: medium">Preparing</p>
        </div>
        <div style="display: flex;justify-content:flex-start;flex-direction: row;">
            <p style="color: black;font-size: medium">Total : </p>
            <p style="color: black;font-size: medium">R136.00</p>
        </div>
        <img
        src="https://firebasestorage.googleapis.com/v0/b/ledet-lab.appspot.com/o/Rosted.png?alt=media&token=7d25ae30-1bd0-4b21-b472-ec52e948f621"
        style="width: 140px; height:80px" />
    </body>
    </html>
`;

const print = async () => {
  // On iOS/android prints the given html. On web prints the HTML from the current page.
  const file=await Print.printAsync({
    html:html
  });
  await shareAsync(file.uri, { UTI: '.pdf', mimeType: 'application/pdf' });
};

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
              <Text style={{color:'white'}}>{item.date.toString()}</Text>
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

            {
                item.itemOncard?.map((s,index)=>(
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                        key={index}
                        >
                        <Text style={{ fontFamily: "KantumruyPro" }}>{s}</Text>
                        <Text style={{ fontFamily: "KantumruyPro" }}>R23.00</Text>
                    </View>
                ))
            }

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
                <Text style={{ fontFamily: "KantumruyPro" }}>R134.99</Text>
            </View>

            <TouchableOpacity onPress={print} style={{backgroundColor:'black',borderRadius:5,padding:1}}>
            <Text style={{ fontFamily: "KantumruyPro",color:'white' }}> print out </Text>
            </TouchableOpacity>

            </View>

          </Card>
        )}
      />
  );
};

export default ReceiptsGenrator;

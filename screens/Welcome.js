
import { ImageBackground,View } from 'react-native';
import { styles } from '../Styles';
import Wtop from '../components/Welcome/Wtop';
import Wcenter from '../components/Welcome/Wcenter';
import Wbottom from '../components/Welcome/Wbottom';
const Welcome = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/chicken.jpg')} style={styles.container}>

                    <Wtop/>
                    <Wcenter/>
                    <Wbottom navigation={navigation}/>
            </ImageBackground>
        </View>
    );
}

export default Welcome;

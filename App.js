import { View } from 'react-native';

import Navigator from './routes/HomeStack';
import { styles } from './Styles';
export default function App() {
  return (
    <View style={styles.container}>
      <Navigator/>
    </View>
  );
}


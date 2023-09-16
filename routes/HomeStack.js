import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Header from '../shared/Header';

const screens={
    Welcome:{
        screen: Welcome,
        navigationOptions:{
            title:'',
            headerShown: false,
        }
    },
    Login:{
        screen: Login,
        navigationOptions:{
            title:'',
            headerShown: false,
        }
    },
    Home:{
        screen: Home,
        navigationOptions:{
            title:'',
            headerShown: false,
            headerLeft: ()=> null,
            headerStyle: {
                backgroundColor: 'black',
             }
        }
    }
}
const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack);
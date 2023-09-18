import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Preview from '../screens/Preview';
import Cart from '../screens/Cart';
import Receipts from '../screens/Receipts';

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
    },
    Preview:{
        screen:Preview,
        title:'',
        navigationOptions:{
            title:'',
            headerShown: false,
            headerLeft: ()=> null,
            headerStyle: {
                backgroundColor: 'black',
             }
        }
    },
    Cart:{
        screen:Cart,
        title:'',
        navigationOptions:{
            title:'',
            headerShown: false,
            headerLeft: ()=> null,
            headerStyle: {
                backgroundColor: 'black',
             }
        }
    },
    Receipts:{
        screen:Receipts,
        title:'',
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
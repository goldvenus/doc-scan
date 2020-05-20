import { createStackNavigator } from 'react-navigation';

import Home from '../screens/home';


const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});

export default HomeNavigator;

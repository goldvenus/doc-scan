import { createStackNavigator } from 'react-navigation';
import ScanPassport from '../screens/scanDoc';

const ScanPassportNavigator = createStackNavigator({
  ScanPassCam: {
    screen: ScanPassport,
    navigationOptions: {
      header: null,
    },
  },
});

export default ScanPassportNavigator;

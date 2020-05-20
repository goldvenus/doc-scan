import { createStackNavigator } from 'react-navigation';
import Document from '../screens/document';
import DocDetail from '../screens/document/doc-detail';

const DocumentNavigator = createStackNavigator({
  Document: {
    screen: Document,
    navigationOptions: {
      header: null,
    },
  },
  DocDetail: {
    screen: DocDetail,
    navigationOptions: {
      header: null,
    },
  }
});

export default DocumentNavigator;

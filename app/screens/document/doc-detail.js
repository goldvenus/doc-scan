import React from 'react';
import { View, Image } from 'react-native';
import GlobalStyle from '@theme/global-style';
import { DetailHeader, DocToolBar } from '@components/document';
import docTempImage from '@images/doc/temp_doc.png';
import listItemIcon from '@images/icons/ic_list.png';

function DocDetail({ navigation }) {
  const { title, docId } = navigation.state.params;
  return (
      <View style={GlobalStyle.screenContainer}>
        <DetailHeader title={title} docId={docId} image={listItemIcon} Back={() => navigation.navigate('Document')} />
        <Image
            source={docTempImage}
            style={{
              width: '100%',
              height: '100%'
            }} />
        <DocToolBar />
      </View>
  );
}

export default DocDetail;

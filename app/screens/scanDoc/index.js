import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {normalizeSize} from '@theme/layout';
import ScanPassportAndroid from "./android";
import ScanPassportIOS from "./ios";

export default function ScanPassport(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      {
        Platform.OS === 'android' ?
          <ScanPassportIOS navigation={navigation}/> :
          <ScanPassportIOS navigation={navigation}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingRight: normalizeSize(27),
    paddingBottom: normalizeSize(15)
  },
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  backButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  takePhoto: {
    alignSelf: 'flex-end',
    alignItems: 'center'
  }
});

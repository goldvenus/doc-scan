import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {normalizeSize} from '@theme/layout';
import {Icon} from '@components/icon';
import scanViewBorderImage from '@images/camera/scanview_border.png';
import scanViewBackButton from '@images/icons/scanview_back_button.png';
import scanViewCameraButton from '@images/icons/scanview_camera_button.png';
import DocumentScanner from "@woonivers/react-native-document-scanner"

export default function ScanPassportAndroid(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <View>
        <DocumentScanner
          style={styles.scanner}
          overlayColor="rgba(255,130,0, 0.7)"
          enableTorch={false}
          quality={0.5}
          detectionCountBeforeCapture={5}
          detectionRefreshRateInMS={50}
        />
      </View>
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

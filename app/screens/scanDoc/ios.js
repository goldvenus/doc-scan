import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {normalizeSize} from '@theme/layout';
import {Icon} from '@components/icon';
import scanViewBorderImage from '@images/camera/scanview_border.png';
import scanViewBackButton from '@images/icons/scanview_back_button.png';
import scanViewCameraButton from '@images/icons/scanview_camera_button.png';

class ScanPassportIOS extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <DocumentScanner
          useBase64
          saveInAppDocument={false}
          overlayColor="rgba(255,130,0, 0.7)"
          enableTorch={false}
          brightness={0.3}
          saturation={1}
          contrast={1.1}
          quality={0.5}
          detectionCountBeforeCapture={5}
          detectionRefreshRateInMS={50}
          onPermissionsDenied={() => console.log("Permissions Denied")}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={scanViewBorderImage}
              style={{
                height: '76%',
                resizeMode: 'contain',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: normalizeSize(40)
              }}/>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Icon imageUrl={scanViewBackButton} width={96} height={68}/>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.takePhoto}
              >
                <Icon imageUrl={scanViewCameraButton} width={85} height={85}/>
              </TouchableOpacity>
            </View>
          </View>
        </DocumentScanner>
      </View>
    );
  }


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

export default ScanPassportIOS;

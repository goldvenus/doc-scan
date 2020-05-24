import React, {useRef, useState, useEffect} from "react"
import {View, StyleSheet, Text, TouchableOpacity, Image, Platform, Dimensions} from "react-native"
import Permissions from 'react-native-permissions';
import PDFScanner from "@woonivers/react-native-document-scanner"
import {normalizeSize} from '@theme/layout';
import {Icon} from '@components/icon';
import scanViewBorderImage from '@images/camera/scanview_border.png';
import scanViewBackButton from '@images/icons/scanview_back_button.png';
import scanViewCameraButton from '@images/icons/scanview_camera_button.png';
const { width, height } = Dimensions.get('window');
export default function ScanPassportAndroid({navigation}) {
  const pdfScannerElement = useRef(null)
  const [data, setData] = useState({})
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    async function requestCamera() {
      const result = await Permissions.request(Platform.OS === "android" ? "android.permission.CAMERA" : "ios.permission.CAMERA")
      if (result === "granted") setAllowed(true)
    }

    requestCamera()
    console.log('dimentions', width, height)
  }, [])

  function handleOnPressRetry() {
    setData({})
  }

  function handleOnPress() {
    pdfScannerElement.current.capture()
  }

  if (!allowed) {
    console.log("You must accept camera permission")
    return (<View style={styles.permissions}>
      <Text>You must accept camera permission</Text>
    </View>)
  }
  if (data.croppedImage) {
    console.log("data", data)
    return (
      <React.Fragment>
        <Image source={{uri: data.croppedImage}} style={styles.preview}/>
        <TouchableOpacity onPress={handleOnPressRetry} style={styles.button}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <PDFScanner
        ref={pdfScannerElement}
        style={styles.scanner}
        onPictureTaken={setData}
        overlayColor="rgba(255,130,0, 0.7)"
        enableTorch={false}
        quality={0.5}
        detectionCountBeforeCapture={5}
        detectionRefreshRateInMS={50}
      />
      <View style={{
        position: "absolute",
        flex:1,
        width: '100%'
      }}>
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
              height: height * 0.8,
              width: width * 0.9,
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              marginTop: normalizeSize(40),
              marginBottom: normalizeSize(20)
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
              onPress={handleOnPress}
            >
              <Icon imageUrl={scanViewCameraButton} width={85} height={85}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
    aspectRatio: undefined
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 32,
  },
  buttonText: {
    backgroundColor: "rgba(245, 252, 255, 0.7)",
    fontSize: 32,
  },
  preview: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  permissions: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
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
})
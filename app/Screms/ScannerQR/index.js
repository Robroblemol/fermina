import React, {useState} from 'react';
import { Text, View, Linking, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet, Alert} from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';

const ScannerQR = () => {
    const [qrvalue, setQrvalue] = useState('');
    const [opneScanner, setOpneScanner] = useState(false);

   const onOpenlink = () => {
        //Function to open URL, If scanned 
        Linking.openURL(this.state.qrvalue);
        //Linking used to open the URL in any browser that you have installed
    }
    const onBarcodeScan = (qrvalue) => {

        setOpneScanner(false);
        setQrvalue(qrvalue);
    }
    const onOpenScanner = ()=> {
       if(Platform.OS === 'android'){
         async function namrequestCameraPermissione() {
             try{
                    const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,{
                    'title': 'CameraExample App Camera Permission',
                    'message': 'CameraExample App needs access to your camera '
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //If CAMERA Permission is granted
                    setQrvalue('')
                    setOpneScanner(true);
            
                } else {
                   Alert.alert("CAMERA permission denied");
                }
             }
             catch (err) {
                Alert.alert("Camera permission err",err);
                console.warn(err);
            }
         }
         namrequestCameraPermissione();
       } else {
            setQrvalue('')
            setOpneScanner(true);
       }
    }
    if(!opneScanner){

        return (
             <View style={styles.container}>
            <Text style={styles.heading}>React Native QR Code Example</Text>
            <Text style={styles.simpleText}>{qrvalue ? 'Scanned QR Code: '+qrvalue : ''}</Text>
            {qrvalue.includes("http") ? 
              <TouchableHighlight
                onPress={() => onOpenlink()}
                style={styles.button}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
              </TouchableHighlight>
              : null
            }
            <TouchableHighlight
              onPress={() => onOpenScanner()}
              style={styles.button}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                Open QR Scanner
                </Text>
            </TouchableHighlight>
        </View>

        )
    }else{
         return (
        <View style={{ flex: 1 }}>
            <CameraKitCameraScreen
            showFrame={false}
            //Show/hide scan frame
            scanBarcode={true}
            //Can restrict for the QR Code only
            laserColor={'blue'}
            //Color can be of your choice
            frameColor={'yellow'}
            //If frame is visible then frame color
            colorForScannerFrame={'black'}
            //Scanner Frame color
            onReadCode={event =>
                onBarcodeScan(event.nativeEvent.codeStringValue)
            }
            />
        </View>
    );
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2c3539',
    padding: 10,
    width:300,
    marginTop:16
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  },
  simpleText: { 
    color: 'black', 
    fontSize: 20, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 16
  }
});
export default ScannerQR;
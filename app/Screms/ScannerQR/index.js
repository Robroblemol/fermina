import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet, Alert} from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import { Actions } from 'react-native-router-flux'
import { getWritings } from '../../services/writings';
import CardView from 'react-native-cardview'
const ScannerQR = () => {
    const [ qrvalue, setQrvalue ] = useState('');
    const [ opneScanner, setOpneScanner ] = useState(false);
    const [ addresse, setAddress ] = useState('');
    const [ dataLetter, setDataLetter ] = useState({});
 
     const reducers = useSelector(state => state);
     const token = reducers.authReducer.token;
    console.log(token);

   const onOpenlink = async () => {
    //Function to open URL, If scanned      
    Actions.writing(dataLetter);

    }
    const onBarcodeScan = async (qrvalue) => {
      if(qrvalue.search('writings?')){
        const index = qrvalue.search('id=');
        const id = parseInt(qrvalue.slice(index+3));
        console.log(qrvalue.slice(index+3));
        const writing = await getWritings(
            token,
            {id} 
        );
        if (writing.ok){
          console.log(writing.data.data.lettersWritings.addresse);
          setAddress(writing.data.data.lettersWritings.addresse)
          setOpneScanner(false);
          setQrvalue(qrvalue);
          setDataLetter(writing.data.data);
       }
       else {
        console.log(writing);
        Alert.alert('Error',writing.problem,[{text: 'ok'}])
      }
    } 
       

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
            
            
            {qrvalue.includes("http") ? 
            <CardView
            style={styles.cardView}
            cardElevation={4}
            cardMaxElevation={2}
            cornerRadius={5}>
              <Text style={styles.simpleText}>QR leido!</Text>
              <Text style={styles.simpleText}>Destinatario: {addresse}</Text>
              <TouchableHighlight
                onPress={() => onOpenlink()}
                style={styles.buttonCardView}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Abrir carta</Text>
              </TouchableHighlight>

            </CardView>
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
            actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
            onBottonButtonPressed = {(event) => console.log(event)}
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
    backgroundColor: '#FCAC17',
    borderRadius: 45,
    padding: 9,
    width:300,
    marginTop:16
  },
  buttonCardView: {
    alignItems: 'center',
    backgroundColor: '#FCAC17',
    borderRadius: 45,
    padding: 9,
    width:250,
    marginTop:16,
    marginBottom: 8,
  },
  cardView:{
    backgroundColor: '#F4DFB8',
    borderColor: 'chocolate',
    padding:10,
    borderWidth: 10,
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  },
  simpleText: { 
    color: 'chocolate', 
    fontSize: 20, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 16
  }
});
export default ScannerQR;
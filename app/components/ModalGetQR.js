import React,{useState} from 'react';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
import QRCode from 'react-native-qrcode-svg';
import { Modal, 
        View, 
        Text, 
        StyleSheet, 
        TouchableOpacity,
        Dimensions,
        SafeAreaView,
        ScrollView,
    } from 'react-native';
import Share from 'react-native-share';


const {width: WIDTH } = Dimensions.get('window');
const ModalGetQR = ({isVisible, setIsVisible, id}) => {
    const [svg, setSvg]=useState();


    const saveQRCode = () => {
        svg.toDataURL(callback);
      };

    const callback = async (dataURL) => {
        console.log(dataURL);
        const shareImageBase64 = {
          type: 'image/jpg',  
          title: '',
          url: `data:image/png;base64,${dataURL}`,
          subject: 'Share Letter', //  for email
          message:dataURL
        };
        await Share.open(shareImageBase64).catch(error => console.log(error));
      }
   return(
    <View>
                
        <Modal  
        animationType = {"slide"} transparent = {false}
        visible = {isVisible}
        onRequestClose = {() => { console.log("Modal has been closed.") } }>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style ={styles.codeQR}>
                    <Text style = {styles.textQR}>QR</Text>
                    <QRCode
                        value = {`http://192.168.1.13:5000/writings?id=${id}`}
                        backgroundColor={'#FFF'}
                        getRef={c => setSvg(c) }
                        color={'black'}
                        size={150}
                    />
                </View>
                

                <TouchableOpacity 
                    style={styles.btnAdd}
                    onPress = {() => saveQRCode()}
                    >
                        <Text style={styles.btnText}>
                            Compartir!
                        </Text>
                    </TouchableOpacity>  
                    <TouchableOpacity 
                    style={styles.btnCancel}
                    onPress = {() => setIsVisible(false)}>
                        <Text style={styles.btnText}>
                            Cancelar
                        </Text>
                </TouchableOpacity>    
                
                </ScrollView>
            </SafeAreaView>    
        </Modal>
    </View>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: null,
      backgroundColor: '#F4DFB8',
    },
    codeQR:{
        alignItems: 'center', 
        paddingTop: 110,
        paddingBottom: 80,
    },
    textQR:{
        color:'chocolate',
        fontSize: 20,
        padding: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnCancel: {
        width: WIDTH - 40,
        height: 45,
        alignItems: 'center',
        borderRadius: 45,
        backgroundColor:'#F4DFB8',
        borderColor:'chocolate',
        borderWidth: 2,
        justifyContent: 'center',
        left: 15,
        top: 2,
        marginTop: 10,
        marginBottom:10,
      },
    btnAdd: {
        width: WIDTH - 40,
        height: 45,
        alignItems: 'center',
        borderRadius: 45,
        backgroundColor:'#FCAC17',
        borderColor:'chocolate',
        borderWidth: 2,
        justifyContent: 'center',
        left: 15,
        top: 2,
      },
      btnText:{
        color:'chocolate',
        fontSize: 20,
        textAlign: 'center',
      },
  })

export default ModalGetQR;
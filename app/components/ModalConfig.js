import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ModalConfig = ({isVisible, setIsVisible}) => {
    return (
        <View>
            
            <Modal  
            animationType = {"slide"} transparent = {false}
            visible = {isVisible}
            onRequestClose = {() => { console.log("Modal has been closed.") } }>
                <View>
                <Text>Modal is open!</Text>
                    <TouchableOpacity 
                    onPress = {() => setIsVisible(false)}>
                        <Text> Cerrar </Text>
                    </TouchableOpacity>   

                </View>
            </Modal>
        </View>
    );
}
export default ModalConfig;
import React, {useState} from 'react';
import { View, 
    SafeAreaView,
    ScrollView,
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput,
    Alert,
    Dimensions,
    AsyncStorage
  } from 'react-native';
  import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
  import { Actions } from 'react-native-router-flux'

  const Writing = (writing) => {
    // console.log(writing);
    const body = writing.data.body.replace(/<br>/gi,'\n\n')
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>
            {writing.data.title}
            {"\n"}
          </Text>
          <Text>
            De: {writing.data.mailer}
          </Text>
          <Text style={styles.body}>
          {body}
          </Text>
        </ScrollView>

      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#F4DFB8',
      marginHorizontal: 20,
    },
    container:{
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      backgroundColor: '#F4DFB8',
      alignItems: 'center'
    },
    title:{
      color:'chocolate',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      },
    body:{
      color:'chocolate',
      fontSize: 20,
      textAlign: 'center',
    },
  })
  export default Writing;
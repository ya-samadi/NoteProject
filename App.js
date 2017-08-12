import React from 'react';
import { StyleSheet, Text, View, Image,KeyboardAvoidingView } from 'react-native';

import LoginForm from './src/component/LoginForm';

export default class App extends React.Component {
  render() {
    
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./src/img/main-qimg-493d56d850a9a93b435ca91abda60956.png')}/>
          <Text style={styles.title}>An app made for having notes</Text>  
        </View>  

        <View style={styles.formContainer}>
          <LoginForm />
        </View>    

      </KeyboardAvoidingView>
    );
  }
  
  
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor :'#0b38a8',
  },
  logoContainer :{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center',
  },
  logo :{
    width:130,
    height:130,
 
  },
  title:{
    color:'white',
    marginTop:10, //fait une distance entre logo et le text
    textAlign:'center',
    opacity:0.7,  // consantration du text
    // textAlign:'center',  pour center le text 
  }

 

});

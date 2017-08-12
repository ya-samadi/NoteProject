import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,StatusBar } from 'react-native';

export default class LoginForm extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput 
        
        placeholder="username or email" 
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="rgba(255,255,255,0.7)" 
        style={styles.input} 
        onSubmitEditing={()=> this.passwordInput.focus()} 
         />
        <TextInput 
        placeholder="password" 
        secureTextEntry 
        returnKeyType="go"
        placeholderTextColor="rgba(255,255,255,0.7)" 
        style={styles.input}
        ref={(input) =>this.passwordInput=input} // faire un réference 
        />
        <TouchableOpacity style={styles.bottonContainer}>
          <Text style={styles.bottonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}


const styles= StyleSheet.create({
    container:{
      padding:40,
    },
    input:{
      height : 35,
      marginBottom:20, // separer les input.
      backgroundColor :'rgba(255,255,255,0.2)',
      color:'white',
      paddingHorizontal:10,
    },
    bottonContainer:{
      backgroundColor :'#2980b9',
      paddingVertical:10,
    },
    bottonText:{
      textAlign:'center',
      color :'#FFFFFF',
    },
});

import React from 'react';
import { StyleSheet, Text, View ,TextInput,
   ScrollView, TouchableOpacity} from 'react-native';

import Note from './Note';

export default class Notment extends React.Component {
  state ={
      noteArray:[],
      noteText:'',
  }
  
  
  
  render() {
      let notes =this.state.noteArray.map((val,key)=> {
          return <Note key={key} keyval={key} val={val} deleteNote={ () => this.deleteNote(key)} />
      });

    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <View style={{width:350,height:23,backgroundColor:'white'}}/>
          <Text style={styles.headerText} >---  NOTER  ---</Text>  
        </View>  
        

        <ScrollView style={styles.scollContainer}>
            {notes}
        </ScrollView>


        <View style={styles.footer}>
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addBoutton}>
            <Text style={styles.addBouttonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
          placeholder="> Note"
          onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}
          placeholderTextColor='white' underlineColorAndroid='transparent'>
          </TextInput>
        </View>    

      </View>
    );
  }
  addNote(){
        if(this.state.noteText){
          var d=new Date();
          this.state.noteArray.push({'date':d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear(),'note': this.state.noteText} );
          this.setState({noteArray : this.state.noteArray});
          this.setState({ noteText: ''});
          
        }
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header:{
    backgroundColor: '#0b38a8',
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth : 10,
    borderBottomColor:'#ddd',
  },
  headerText:{
    color:'white',
    fontSize:18,
    padding:26,
  },
  scollContainer:{
    flex:1,
    marginBottom:100,

  },
  footer:{
    position:'absolute',
    alignItems :'center',
    bottom:0, 
    left:0,
    right:0,
  },
  addBoutton:{
    backgroundColor: '#0b38a8',
    width:80,
    height:80,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems: 'center',
    justifyContent:'center',
    elevation:8,
    marginBottom:-45,
    zIndex:1,   
  },
  addBouttonText:{
    color:'#fff',
    fontSize:30,
  },
  textInput:{
    alignSelf :'stretch',
    padding:20,
    paddingTop:46,
    color:'white',
    backgroundColor:'#000000', //black "was #252525"
    borderTopWidth:2,
    borderTopColor:'#ededed',
  },

});

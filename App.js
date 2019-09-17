import React ,{Component}from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends Component {

  state={
    placeName:''
  }

  placeNameInputChangeHandler=val=>{
    this.setState({
      placeName:val
    });
  };

  
  render(){
  return (
    <View style={styles.container}>
      <Text>Vid 24</Text>
      
      <View style={styles.inputContainer}>
      <TextInput 
        value={this.state.placeName}
        onChangeText={this.placeNameInputChangeHandler}
        placeholder="This is a placeholder!"
        style={styles.placeInput}
      />
      <Button title="add" style={styles.placeButton}/>
      </View>
    </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:20,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer:{
    //flex:1,/* take full space*/
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  placeInput:{
    width:"70%"
  },
  placeButton:{
    width:"30%"
  }
});

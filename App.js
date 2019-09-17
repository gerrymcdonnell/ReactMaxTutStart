import React ,{Component}from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

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
      
      <TextInput 
        value={this.state.placeName}
        onChangeText={this.placeNameInputChangeHandler}
        placeholder="This is a placeholder!"
        style={styles.textinput}
      />
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
  textinput:{
    width:300, borderColor:"black",borderWidth:2
  }
});

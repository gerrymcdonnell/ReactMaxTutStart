import React ,{Component}from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

import ListItem from './src/components/Listitem/ListItem'

export default class App extends Component {

  state={
    placeName:'',
    places:['test','test2']
  }

  placeNameInputChangeHandler=(val)=>{
    this.setState({
      placeName:val
    });
  };

  //submit button handler
  placeSubmitHandler=()=>{
    
    //if the entered string is not empty
    if(this.state.placeName.trim()===""){
      return;
    }

    this.setState(prevState=>{
      return {
        places:prevState.places.concat(prevState.placeName)
      }
    })
  }

  
  render(){

    const placesOutput=this.state.places.map((place,i)=>
      
      // <Text key={i}>{place}</Text>

      <ListItem key={i} placeName={place}/>
    )

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
      <Button title="add" onPress={this.placeSubmitHandler} style={styles.placeButton}/>
      </View>

      <View>{placesOutput}</View>

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

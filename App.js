import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {

  state={
    placeName:''
  }

  placeNameInputChangedHandler=(event)=>{
    alert(event);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
      <TextInput 
      value={this.state.placeName}
        onChangeText={this.placeNameInputChangedHandler}
        style={
        {width:300, borderColor:"black",borderWidth:1}
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

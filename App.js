import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Streams from './component/Streams'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Twitch Live Streams </Text>
        <Streams/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#5e7aa9',
  },
  title:{

    color:'#f3f3f3',
    fontSize:30,
    backgroundColor:'#8cb8c9',
    marginTop:30,
    textAlign:'center',
    height: 40,
    width:'100%'
    }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stream from '../containers/Stream';


export default class Streams extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[],
      isLoading: true
    };
  }
  onAfterLoad(){
    try{
      const response= await fetch('http://localhost:8080/streams/top')
      const responseJson= await response.json()
      const filterdJson= responseJson.filter(data=>{
        if (data.type=="live"){
          return data
        }
      })


        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        });

      }
      catch((error) =>{
        console.error(error);
      });
    
  };

  renderStreams(){
    if (this.state.data==[]){
      const myStreams =this.state.data.map((stream,i)=>{
        return  <Stream key={i} data={stream} />
      })
    return myStreams;
    }
    
    else{
      return  <Text> Streams failed to load. Please check internet connection and retry </Text>
    }
  }

  render(){
   if (!this.state.isLoading) {
    return (
      <ActivityIndicator
        animating={true}
        style={styles.indicator}
        size="large"
      />
    );

    return(
      <View style={styles.streams}>
        {this.renderStreams()} 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  streams:{
    flex: 1,
  }
});

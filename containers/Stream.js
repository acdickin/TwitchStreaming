
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native'
//import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const Stream = (props) => {
   return (
     <View style={styles.stream}>
       <TwitchEmbedVideo width="100%" height:"100%" id={props.data.id} layout="video" />
       <View style={styles.steaminfo}>
         <Text>{props.data.title}</Text>
         <Text>{props.data.user}</Text>
         <Text>{props.data.gamename}</Text>
         <Text>{props.data.started_at}</Text>
       </View>
     </View>
   )
}
export default Stream


const styles = StyleSheet.create({
  stream:{
    flex:1,

  },
  mainimg:{
    width:100,
    height:100,
  },
  steaminfo:{
    backgroundColor:'#9edbca',
  }
});

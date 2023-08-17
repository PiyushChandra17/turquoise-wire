import { StyleSheet, Text, View, ScrollView, Button,Alert } from 'react-native'
import React, { useState, useCallback } from 'react'
import ContentShow from '../../../../utils/contentShow'
import YouTube from  'react-native-youtube'
import YoutubePlayer from "react-native-youtube-iframe";

const VideoScreen = ({ route }) => {
  const { id, postData } = route.params
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView>
      <View>
        {/* <YouTube
          apiKey="AIzaSyDlJynKRtp54WmepF5NlmXkvZCFlr_1iHo"
          videoId="hC4UOyTOAdI" // The YouTube video ID
          play={false}
          onReady={e => console.log('ready')}
          onChangeState={e => console.log(e)}
          onError={error => console.log(error)}
          style={{ alignSelf: 'stretch', height: 300 }}
        /> */}
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={postData.videoId}
          onChangeState={onStateChange}
        />
        {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
        <ContentShow params={route.params}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default VideoScreen

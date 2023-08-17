import { StyleSheet,Text,View,ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import ContentShow from '../../../../utils/contentShow'
import { useRoute } from '@react-navigation/native'

const ArticleScreen = ({ route }) => {
  const { id, postData } = route.params

  return (
    <ScrollView>
      <View>
        <Image 
          source={{ uri: postData.images }}
          style={{ width: '100%', height: 200 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <ContentShow params={route.params}/>
      </View>
    </ScrollView>
  )
}

export default ArticleScreen


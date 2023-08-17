import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Appbar, TextInput, Divider, Button, Title } from 'react-native-paper'
import UserData from './userData'

const ProfileScreen = ({ navigation }) => {
  const goBack = () => navigation.navigate('Home_Screen')

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack}/>
        <Appbar.Content title="Profile" subtitle="TurqWire"/>
      </Appbar.Header>
      <View style={{ padding: 20 }}>
        <Title>Your user Login data</Title>
        <TextInput 
          label="email"
          value={""}
          onChangeText={text => console.log('hey')}
          mode="outlined"
        />
        <TextInput 
          label="password"
          value={""}
          onChangeText={text => console.log('hey')}
          mode="outlined"
        />
        <Button 
          mode="contained"
          onPress={() => console.log('pressed')} 
        >
          Update
        </Button>
      </View>
      <Divider />
      <UserData />
    </ScrollView>
  )
}

export default ProfileScreen
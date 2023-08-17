import React from 'react'
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/home/articles';
import ArticleScreen from '../components/home/articles/article';
import VideosScreen from '../components/home/videos';
import VideoScreen from '../components/home/videos/video';

import { Colors, LogoText } from '../utils/tools';

import Icon  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export const Stack = createNativeStackNavigator();

const LeftIcon = () => {
    const navigation = useNavigation()
    return (
        <View style={{ margin: 10 }}>
            <Icon 
                name="menufold"
                size={30}
                color={Colors.white}
                onPress={() => navigation.openDrawer()}
            />
        </View>
    )
}

export const screenOptions = {
    headerTitleAlign: "center",
        headerTintColor: Colors.turquoise,
        headerStyle: {
            backgroundColor: Colors.black,
            borderBottomWidth: 6
        },
        headerTitle: () => <LogoText style={{fontSize: 25, color: "turquoise"}}/>
}

export const HomeStack = () => (
    <Stack.Navigator
         screenOptions={{
            headerLeft: () => <LeftIcon />,
            ...screenOptions
         }}
        initialRouteName="Home_Screen"
    >
        <Stack.Screen 
            name="Home_Screen"
            component={HomeScreen}
        />
        <Stack.Screen 
            name="Article_Screen"
            component={ArticleScreen}
        />
    </Stack.Navigator>
)

export const VideosStack = () => (
    <Stack.Navigator
        screenOptions={{
            // headerLeft: () => <LeftIcon />,
            ...screenOptions
        }} 
        initialRouteName="Videos_Screen"
    >
        <Stack.Screen 
            name="Videos_Screen"
            component={VideosScreen}
        />
        <Stack.Screen 
            name="Video_Screen"
            component={VideoScreen}
        />
    </Stack.Navigator>
)

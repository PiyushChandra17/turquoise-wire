import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';

import { Stack, HomeStack, VideosStack } from './routes/stacks';

const Drawer = createDrawerNavigator();

import AuthScreen from './components/auth';
import ProfileScreen from './components/user/profile/profile';
import SideDrawerCustom from './utils/customDrawer';
import SplashScreen from './components/auth/Splash';

import { Colors } from './utils/tools';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { autoSignIn } from './store/api';
import { useDispatch,useSelector } from 'react-redux';

const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <SideDrawerCustom {...props}/>}
    screenOptions={{
      drawerStyle: {
        backgroundColor: Colors.turquoise
      },
      headerShown: false
    }}
  >
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Videos" component={VideosStack} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
)

const App = () => {
  const dispatch = useDispatch()

  const [loading,setLoading] = useState(false) // true

  const { isAuth } = useSelector((state) => state.auth)

  console.log(isAuth)

  useEffect(() => {
    dispatch(autoSignIn()).then(() => {
      setLoading(false)
    })
  },[])

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            {
              isAuth ? (
                <>
                  <Stack.Screen 
                    name="Main"
                    component={MainDrawer}
                    options={{ headerShown: false }}
                  />
                </> 
              )
                
              : (
                loading ? 
                  <Stack.Screen 
                    options={{ headerShown: false }}
                    name="Splash"
                    component={SplashScreen}
                  /> 
                    :
                  <Stack.Screen 
                    options={{ headerShown: false }}
                    name="AuthScreen"
                    component={AuthScreen}
                  /> 
              )
                
            }
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    );
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App);
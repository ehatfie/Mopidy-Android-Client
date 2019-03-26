import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'

import Playlists from '../Containers/Playlists'



// drawer stack
const DrawerStack = DrawerNavigator({
  Home: { screen: HomeScreen },
  Playlists: { screen: Playlists }
  //screen3: { screen: Screen3 },
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'Logged In to your app!',
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: HomeScreen},
  //signupScreen: { screen: SignupScreen },
  //forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Playlists: { screen: Playlists },
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'drawerStack'
})

export default PrimaryNav
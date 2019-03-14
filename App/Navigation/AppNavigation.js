// import { createStackNavigator, createAppContainer, DrawerNavigator, createDrawerNavigator } from 'react-navigation'
// import { Dimensions, TouchableOpacity, IOSIcon, Icon} from 'react-native'
// import LaunchScreen from '../Containers/LaunchScreen'
// import HomeScreen from '../Containers/HomeScreen'
// import SideMenu from '../Components/SideMenu/SideMenu'
// import {Text} from 'native-base'
// import React from 'react'
// import styles from './Styles/NavigationStyles'


// // drawer stack
// const DrawerStack = createDrawerNavigator({
//   //launchScreen: {screen: LaunchScreen},
//   HomeScreen: {screen: HomeScreen},
//   // screen3: { screen: Screen3 },
// })

// const DrawerNavigation = createStackNavigator({
//   DrawerStack: {screen: DrawerStack}
// }, {
//   //headerMode: "float",
//   //drawerWidth: 300,
//   //navigationOptions : ({navigation}) => ({
//     // headerStyle: {backgroundColor: '#4C90E2'},
//     // title: 'Welcome',
//     // gesturesEnabled: true,
//      contentComponent: SideMenu,
//     // drawerOpenRoute: 'DrawerOpen',
//     // drawerCloseRoute: 'DrawerClose',
//     // drawerToggleRoute: 'DrawerToggle',
//     // headerLeft: <Text onPress={() => {
//     //   // Coming soon: navigation.navigate('DrawerToggle')
//     //   // https://github.com/react-community/react-navigation/pull/2492
//     //   if (this.props.navigation.state.index === 0) {
//     //     navigation.navigate('DrawerOpen')
//     //   } else {
//     //     navigation.navigate('DrawerClose')

//     //   }
//     // }}>Menu</Text>

//   //})
// })

// handleNavigation = (nav) => {
//   nav.navigate('DrawerOpen');
// }

// // Manifest of possible screens
// const PrimaryNav = createStackNavigator({
//   HomeScreen: { screen: HomeScreen },
//   LaunchScreen: { screen: LaunchScreen },
//   DrawerStack: {screen: DrawerNavigation}
//   //DrawerScreen: { screen: DrawerStack}
// }, {
//   // Default config for all screens
//   //headerMode: 'none',
//   initialRouteName: 'DrawerStack',
//   title: 'Main',
//   // navigationOptions: {
//   //   headerStyle: styles.header,
//   //  },
//   // contentComponent: SideMenu,
//   // drawerWidth: 300,
//   // drawerOpenRoute: 'DrawerOpen',
//   // drawerCloseRoute: 'DrawerClose',
//   // drawerToggleRoute: 'DrawerToggle',
//   // headerMode: 'float',
// })


// //export default PrimaryNav
// export default createAppContainer(PrimaryNav)
import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
//import LoginScreen from '../Containers/LoginScreen'
//import SignupScreen from '../Containers/SignupScreen'
//import ForgottenPasswordScreen from '../Containers/ForgottenPasswordScreen'
import Screen1 from '../Containers/Screen1'
//import Screen2 from '../Containers/Screen2'
//import Screen3 from '../Containers/Screen3'


// drawer stack
const DrawerStack = DrawerNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: HomeScreen }
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
  loginScreen: { screen: Screen1 },
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
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'drawerStack'
})

export default PrimaryNav
import { createStackNavigator, createAppContainer, DrawerNavigator, createDrawerNavigator } from 'react-navigation'
import { Dimensions, TouchableOpacity, IOSIcon, Icon} from 'react-native'
import LaunchScreen from '../Containers/LaunchScreen'
import HomeScreen from '../Containers/HomeScreen'
import SideMenu from '../Components/SideMenu/SideMenu'
import {Text} from 'native-base'
import React from 'react'
import styles from './Styles/NavigationStyles'


// drawer stack
const DrawerStack = createDrawerNavigator({
  launchScreen: {screen: HomeScreen},
  HomeScreen: {screen: HomeScreen},
  // screen3: { screen: Screen3 },
})

const DrawerNavigation = createStackNavigator({
  DrawerStack: {screen: DrawerStack}
}, {
  headerMode: "float",
  drawerWidth: 300,
  navigationOptions : ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C90E2'},
    title: 'Welcome',
    gesturesEnabled: true,
    contentComponent: SideMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    headerLeft: <Text onPress={() => {
      // Coming soon: navigation.navigate('DrawerToggle')
      // https://github.com/react-community/react-navigation/pull/2492
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')

      }
    }}>Menu</Text>

  })
})

handleNavigation = (nav) => {
  nav.navigate('DrawerOpen');
}

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen },
  DrawerStack: {screen: DrawerNavigation}
  //DrawerScreen: { screen: DrawerStack}
}, {
  // Default config for all screens
  //headerMode: 'none',
  initialRouteName: 'DrawerStack',
  title: 'Main',
  // navigationOptions: {
  //   headerStyle: styles.header,
  //  },
  // contentComponent: SideMenu,
  // drawerWidth: 300,
  // drawerOpenRoute: 'DrawerOpen',
  // drawerCloseRoute: 'DrawerClose',
  // drawerToggleRoute: 'DrawerToggle',
  // headerMode: 'float',
})



//export default PrimaryNav
export default createAppContainer(PrimaryNav)

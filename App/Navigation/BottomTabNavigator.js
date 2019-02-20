import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen'
//import { ir } from '../Images'

// const BottomTabNavigator = createBottomTabNavigator (
//   {
//     //Home: HomeScreen
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         return <Image style={{
//           width: 24,
//           height: 24
//         }} source={require('../Images/ir.png') }/>;
//       },
//     }),
//     tabBarLabel: {
//     },
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//       // showLabel: false,
//     }
//   }
// );

// export default BottomTabNavigator;
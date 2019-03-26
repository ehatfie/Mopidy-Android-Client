import React, { Component } from 'react'
import { Card, CardItem } from 'native-base'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from '../Styles/Playlist/PlaylistCardStyle'

export default class PlaylistCard extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
       <Card>
         <Text>{this.props.name}</Text>
       </Card>
      </View>
    )
  }
}

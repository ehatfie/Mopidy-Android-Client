import React, { Component } from 'react'
import { FlatList } from 'react-native'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from '../Styles/Playlist/PlaylistListStyle'
import ListItem from './ListItem'

export default class PlaylistList extends Component {
  // constructor (props) {
  //   super(props)
  //   let initialMap = new Map()
  // }


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
  _keyExtractor = (item, index) => item.id;
  _onPressItem = (item => {
    this.setState((state) => {
      let selected = new Map(state.selected)
      selected.set(item.id, item.selected)
      return {selected}
    })
  });

  _renderItem = ({item}) => {
    <ListItem
      id={item.id}
      onPressItem={{this._onPressItem}
      selected={!this.state.selected.get(item.id)}
      title=item.title}
      />
  };


  render () {
    return (
      <View style={styles.container}>
        <Text>PlaylistList Component</Text>
      </View>
    )
  }
}

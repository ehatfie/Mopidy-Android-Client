import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import PlaylistCard from '../Components/Playlist/PlaylistCard'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PlaylistsStyle'

class Playlists extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  test = () => {
    let val = new Map(this.props.test)
    let playlistsMap = this.props.test.map((playlist) => <PlaylistCard name={playlist.name} />)
    console.log(val)
    return (playlistsMap)

  }


  render () {
    //this.test()
    return (
      <View style={styles.container}>
        <Text>Playlists Container</Text>
        <Text>{JSON.stringify(this.props.test)}</Text>
        {this.test()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.mopidy,
    test: state.mopidy.playlists,
    message2: state.github
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)

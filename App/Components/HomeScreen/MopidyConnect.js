import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { Button, Card } from 'native-base'
//import MopidyActions from '../Redux/MopidyRedux'

import ConvertPlaylistObject from '../../Transforms/ConvertPlaylistObject'

import styles from '../Styles/HomeScreen/MopidyConnectStyle'

export default class MopidyConnect extends Component {
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
  constructor() {
    super();

    this.state = {
      open: false,
      message: "NOPE"
    }
    
    this.socket = new WebSocket('http://192.168.1.208:6680/mopidy/ws');
    //this.socket = new WebSocket('ws://echo.websocket.org/');

    this.emit = this.emit.bind(this);
  }

  emit() {
    this.setState(prevState => ({
      open: !prevState.open,
      message: "WE TRIED"
    }))
    //this.socket.onopen = () => this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "backend.PlaylistsProvider.as_list()", "id": 1}))

    //this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.playlists.as_list()", "id": 1}));

    //this.socket.onMessage = ({data}) => this.props.sendResponse(data)
  }
  translate(response) {
    this.props.sendResponse(ConvertPlaylistObject(response))
  }

  componentDidMount() {
    //this.socket.onopen = () => this.socket.send(JSON.stringify({type: 'greet', payload: 'Hello Mr.Server!'}));
    //this.socket.onopen = () => this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.TracklistController.get_tracks()", "id": 2}));
    //this.socket.onopen = () => this.socket.send(JSON.stringify({"jsonrpc": "2.0", "id": 1, "method": "core.playback.get_state"}));

    //this.socket.onopen = () => this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.playback.get_current_track", "id": 1}));
    //this.socket.onopen = () => this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.tracklist.get_tl_tracks()", "id": 1}));
    this.socket.onopen = () => this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.playlists.as_list", "id": 1}));


    //this.socket.onmessage = ({data}) => this.props.sendResponse(data)
  }

  render () {
    this.socket.onmessage = ({data}) => this.translate(data)
    return (
      <Card>
        <Text>MopidyConnect Component {this.state.message}</Text>
        <Button onPress={this.emit} title={this.state.open ? "Turn Off" : "Turn On"}>
          <Text> HELLO #### </Text>
        </Button>
      </Card>
    )
  }
}

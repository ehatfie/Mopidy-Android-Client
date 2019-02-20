import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button, Container, Card, CardBody, View } from 'native-base';

import SideMenu from '../Components/SideMenu/SideMenu'
import MopidyConnect from '../Components/HomeScreen/MopidyConnect.js';
import MopidyActions from '../Redux/MopidyRedux';
//import Mopidy from 'mopidy'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isPlaying: "bbbbbb",
      track: "NUTTIN",
      message3: "We Havent Tried",
    }

    this.testFunction = this.testFunction.bind(this)
    this.buttonFunction = this.buttonFunction.bind(this)
    this.printCurrentTrack = this.printCurrentTrack.bind(this)

  }

  testFunction(){
    // call api and update state
    if(this.state.isPlaying == "bbbbbb"){
      this.setState({isPlaying: "aaaaaa"});
    } else {
      this.setState({isPlaying: "bbbbbb"});
    }
  }

  buttonFunction(){
    
  }

  printCurrentTrack(track) {
    this.props.setPlaylists(track)
    this.setState({message3: track, isPlaying: "WE TRIED"})
  }



  render () {
    
    return (
      <View style={styles.container}>
        <Card>
          <Text>HomeScreen Container {JSON.stringify(this.props.message)} AND {JSON.stringify(this.props.message2)}</Text>
          <Text>Response: {this.state.message3} AND {this.state.isPlaying}</Text>
        </Card>
        <Card>
          <Button onPress={this.props.testDispatch} title={"PRESS ME"}>
            <Text>
              Press Me
            </Text>
          </Button>
        </Card>
        <MopidyConnect sendResponse={this.printCurrentTrack}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.mopidy,
    message2: state.github
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testDispatch: () => {
      dispatch(MopidyActions.updateMessage("HHHH"))
    },
    callSaga: () => {
      dispatch(MopidyActions.updateMessage("YYYY"))
    },
    setPlaylists: (data) => {
      dispatch(MopidyActions.setPlaylists(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

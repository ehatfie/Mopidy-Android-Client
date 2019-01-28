/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { take, takeLatest, call, put } from 'redux-saga/effects'
import MopidyActions from '../Redux/MopidyRedux'
import { MopidyTypes } from '../Redux/MopidyRedux'

import ConvertPlaylistObject from '../Transforms/ConvertPlaylistObject'

// import { MopidySelectors } from '../Redux/MopidyRedux'

export function * getMopidy () {
  console.log("MopidySagas")
  //let socket = new WebSocket('http://192.168.1.209:6680/mopidy/ws');
  //this.socket.onopen = () => this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.playlists.as_list", "id": 1}));

  //this.socket.onopen = () => this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.playback.get_current_track", "id": 1}));
  var response;
  //this.socket.onmessage = ({data}) => response = data

  //let filteredResponse = ConvertPlaylistObject(response)


  //yield put(MopidyActions.setPlaylists(data))
  // success?
  // if (response.ok) {
  //   // You might need to change the response here - do this with a 'transform',
  //   // located in ../Transforms/. Otherwise, just pass the data back from the api.
  //   yield put(MopidyActions.mopidySuccess("val"))
  // } else {
  //   yield put(MopidyActions.mopidyFailure())
  // }
}

export function * startSocket () {
  //var socket = new WebSocket('http://192.168.1.209:6680/mopidy/ws');
  //this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.playlists.as_list", "id": 1}));

  //this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "backend.playlistsprovider.as_list()", "id": 1}))
  //yield put(MopidyActions.setWatcher(socket))
  
  //yield put(MopidyActions.setMessage("ggg"))
  //yield put(this.watcher);
  yield call(watcher)
}

export function * endSocket () {

}

export function * watcher () {
  var sendValue
  var sendMessage
  
  //var socket = new WebSocket('http://192.168.1.209:6680/mopidy/ws');
  //this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.playlists.as_list", "id": 1}));
  //yield put(MopidyActions.setMessage("ggg")
  // while (true) {
  //   const action = yield take(MopidyTypes.CLOSE_SOCKET)
  //   //this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.playlists.as_list", "id": 2}));
  //   yield call(taker)
    
  // }

  while (true) {
    yield take(MopidyTypes.UPDATE_MESSAGE)
    yield call(taker)
  }
}

export function * taker() {
  yield put(MopidyActions.setMessage("BBB")) 
}
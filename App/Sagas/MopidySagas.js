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

import { call, put } from 'redux-saga/effects'
import MopidyActions from '../Redux/MopidyRedux'
// import { MopidySelectors } from '../Redux/MopidyRedux'

export function * getMopidy () {
  //const { data } = action
  // get current data from Store
  // const currentData = yield select(MopidySelectors.getData)
  // make the call to the api
  //const response = yield call(api.testApi)
  //let response = {ok: true}
  console.log("MopidySagas")
  //yield put(MopidyActions.mopidySucess("Val"))
  //let socket = new WebSocket('http://192.168.1.209:6680/mopidy/ws');
  //this.socket.onopen = () => this.socket.send(JSON.stringify({"jsonrpc": "2.0", "method": "core.playback.get_current_track", "id": 1}));
  var response;
  //this.socket.onmessage = ({data}) => {response = data}


  yield put(MopidyActions.mopidySuccess("val"))
  // success?
  // if (response.ok) {
  //   // You might need to change the response here - do this with a 'transform',
  //   // located in ../Transforms/. Otherwise, just pass the data back from the api.
  //   yield put(MopidyActions.mopidySuccess("val"))
  // } else {
  //   yield put(MopidyActions.mopidyFailure())
  // }
}

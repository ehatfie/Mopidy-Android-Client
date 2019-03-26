import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  mopidyRequest: ['data'],
  mopidySuccess: ['payload'],
  mopidyFailure: null,
  openSocket: null,
  closeSocket: null,
  setWatcher: ['watcherObj'],
  updateMessage: ['message2'],
  setPlaylists: ['data'],
  setMessage: ['message2']

})

export const MopidyTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  track: null,
  message: null,
  watcherRunning: false,
  watcherObject: null,
  playlists: null
})

/* ------------- Selectors ------------- */

export const MopidySelectors = {
  getData: state => state.data,
  //getWatcher: state => state.watcherObject
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => 
  state.merge({ fetching: true, message: "val val val "  })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  //console.log('success: ', JSON.stringify(action))
  return state.merge({ fetching: false, error: null, message: "suck sess"})
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: "bitch", payload: null, message: "you did it"  })

export const openWatcher = state =>
  state.merge({watcherRunning: true, message: "OPENED"})

export const setWatchers = (state, {watcherObj}) => {
  //const { watcherObj } = watcher
  return state.merge({ message: "setWatcher" })
}

export const closeWatcher = state => 
  state.merge({watcherRunning: false, message: "CLOSED"})

export const updateMessages = (state, newMessage) => {
  const { message2 } = newMessage;

  return state.merge({message: "update Messages"})
}

export const setMessages = (state, newMessage) => {
  const { message2 } = newMessage;

  return state.merge({message: "MESSAGE SET"})
}
export const setPlaylists = (state, response) => {
  const { data } = response;

  return state.merge({ playlists: JSON.parse(data), message:"BIG BOY"})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MOPIDY_REQUEST]: request,
  [Types.MOPIDY_SUCCESS]: success,
  [Types.MOPIDY_FAILURE]: failure,
  [Types.OPEN_SOCKET]: openWatcher,
  [Types.CLOSE_SOCKET]: closeWatcher,
  [Types.SET_WATCHER]: setWatchers,
  [Types.UPDATE_MESSAGE]: updateMessages,
  [Types.SET_MESSAGE]: setMessages,
  [Types.SET_PLAYLISTS]: setPlaylists
})

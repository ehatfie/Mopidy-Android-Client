import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  mopidyRequest: ['data'],
  mopidySuccess: ['payload'],
  mopidyFailure: null,

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
  message: null
})

/* ------------- Selectors ------------- */

export const MopidySelectors = {
  getData: state => state.data
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

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MOPIDY_REQUEST]: request,
  [Types.MOPIDY_SUCCESS]: success,
  [Types.MOPIDY_FAILURE]: failure
})

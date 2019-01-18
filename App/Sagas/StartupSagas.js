import { put, select } from 'redux-saga/effects'
import GithubActions, { GithubSelectors } from '../Redux/GithubRedux'
import MopidyActions, { MopidySelectors } from '../Redux/MopidyRedux'
import { is } from 'ramda'

// exported to make available for tests
export const selectAvatar = GithubSelectors.selectAvatar

// process STARTUP actions
export function * startup (action) {
  // //const avatar = yield select(selectAvatar)
  // // only get if we don't have it yet
  // if (!is(String, avatar)) {
  //   //yield put(GithubActions.userRequest('GantMan'))
  // }
  //yield put(GithubActions.userRequest('GantMan'))
  yield put(MopidyActions.mopidyRequest())
}

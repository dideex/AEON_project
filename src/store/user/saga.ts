import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

import * as actions from './actions'
import { authenticate, IUserRequest } from '../../api'
import { RootStore } from '..'

export const thunkAction = (
  delay: number,
): ThunkAction<void, RootStore, void, AnyAction> => dispatch => {
  setTimeout(() => {
    dispatch(actions.reset())
  }, delay)
}

export const authUser = (
  data: IUserRequest,
): ThunkAction<void, RootStore, void, AnyAction> => dispatch => {
  dispatch(actions.getUserDataRequest())
  authenticate(data)
    .then(response => {
      console.log('authUser -> response', response)
      if (response.data) {
        dispatch(actions.getUserDataSuccess(response.data))
      }
    })
    .catch(err => {
      if (err.errorText) {
        dispatch(actions.getUserDataFail(err))
      }
    })
}

import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

import * as actions from './actions'
import { authenticate } from '../../api'
import { RootStore } from '..'
import { IUserRequest } from '../../types'

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
    .then((response: any) => {
      if (response.data) {
        dispatch(actions.getUserDataSuccess(response.data))
      }
    })
    .catch((err: any) => {
      if (err.errorText) {
        dispatch(actions.getUserDataFail(err))
      }
    })
}

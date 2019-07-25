import config from '../config'
import { incorrect_login_or_password, IAuthResponse } from './types'
import { IUserRequest } from '../types'

const checkCredentials = (data: IUserRequest): boolean => {
  if (
    data.username.toLowerCase().trim() === 'admin' &&
    data.password.toLowerCase().trim() === '12345'
  ) {
    return true
  } else {
    return false
  }
}

export const authenticate = (data: IUserRequest): Promise<IAuthResponse> => {
  const promise = new Promise<IAuthResponse>((resolve, reject) => {
    setTimeout(() => {
      if (!checkCredentials(data)) {
        reject({
          status: 500,
          errorText: incorrect_login_or_password,
        })
      }
      window.localStorage.setItem(config.tokenKey, 'true')
      resolve({
        status: 200,
        data: {
          userName: 'Admin',
          avatar: 'avatar.jpg',
          age: 23,
          email: 'myemail@mail.com',
          gender: 'man',
        },
      })
    }, 3000)
  })

  return promise
}

export const checkAuthStatus = (): boolean => {
  if (localStorage.getItem(config.tokenKey)) {
    return true
  } else {
    return false
  }
}

export const logout = (): void => {
  window.localStorage.removeItem(config.tokenKey)
}

export const loadInitialData = () => {}

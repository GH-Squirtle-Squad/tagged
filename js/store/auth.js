import axios from "axios"
import { AsyncStorage } from 'react-native'

const serverURL = 'https://tagged-backend.herokuapp.com/'
const TOKEN = "token"
/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH"
/**
 * ACTION CREATORS
 */
const setAuth = auth => ({ type: SET_AUTH, auth })
/**
 * THUNK CREATORS
 */
export const me = history => async dispatch => {
  const token = await AsyncStorage.getItem(TOKEN)
  console.log("this is token inside me: ", token)
  if (token) {
    const res = await axios.get(`${serverURL}auth/me`, {
      headers: {
        authorization: token
      }
    })
    console.log("this is res inside me: ", res)
    dispatch(setAuth(res.data))
    history.push("/test")
  }
}
export const authenticate =
  (username, password, method, history) => async dispatch => {
    try {
      console.log('authenticate is trying its best\n', method)
      const res = await axios.post(`${serverURL}auth/${method}`, { username, password })
      console.log('res is: ', res)
      await AsyncStorage.setItem(TOKEN, res.data.token)
      console.log("this is token: ", res.data.token)
      dispatch(me(history))
    } catch (authError) {
      return dispatch(setAuth({ error: authError }))
    }
  }

export const logout = () => {
  AsyncStorage.removeItem(TOKEN)
  return {
    type: SET_AUTH,
    auth: {}
  }
}
/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth
    default:
      return state
  }
}

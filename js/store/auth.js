import axios from "axios"
import { AsyncStorage } from "react-native"
const SERVERURL = "https://tagged-backend.herokuapp.com/"
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
  if (token) {
    const res = await axios.get(`${SERVERURL}auth/me`, {
      headers: {
        authorization: token
      }
    })
    dispatch(setAuth(res.data))
    history.push("/homebase")
  }
}
export const authenticate =
  (username, password, method, history) => async dispatch => {
    try {
      const res = await axios.post(`${SERVERURL}auth/${method}`, {
        username,
        password
      })
      await AsyncStorage.setItem(TOKEN, res.data.token)
      dispatch(me(history))
    } catch (authError) {
      return dispatch(setAuth({ error: authError }))
    }
  }

export const logout = history => {
  AsyncStorage.removeItem(TOKEN)
  history.push("/")
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

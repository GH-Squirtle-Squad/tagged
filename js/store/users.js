import axios from "axios"
import { AsyncStorage } from "react-native"
const serverURL = "https://tagged-backend.herokuapp.com/"

const GET_USERS = "GET_USERS"
const REMOVE_USER = "REMOVE_USER"

const getUsers = users => ({
  type: GET_USERS,
  users
})

const removeUser = user => ({
  type: REMOVE_USER,
  user
})

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem(TOKEN)
      if (token) {
        const { data } = await axios.get(`${serverUrl}api/users`, {
          headers: {
            authorization: token
          }
        })
        dispatch(getUsers(data))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteUser = id => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem(TOKEN)
      if (token) {
        const { data } = await axios.delete(`${serverUrl}api/users/${id}`, {
          headers: {
            authorization: token
          }
        })
        dispatch(removeUser(data))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users
    case REMOVE_USER:
      return state.filter(user => user.id !== action.user.id)
    default:
      return state
  }
}

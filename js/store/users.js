import axios from "axios"
import { AsyncStorage } from "react-native"

//Rando Variables
const SERVERURL = "https://tagged-backend.herokuapp.com/"
const TOKEN = "token"


//Action Constants
const GET_USERS = "GET_USERS"
const REMOVE_USER = "REMOVE_USER"


//Action Creators
const getUsers = users => ({
  type: GET_USERS,
  users
})

const removeUser = user => ({
  type: REMOVE_USER,
  user
})



//Thunks
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem(TOKEN)
      if (token) {
        const { data } = await axios.get(`${SERVERURL}api/users`, {
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
        const { data } = await axios.delete(`${SERVERURL}api/users/${id}`, {
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


//Reducer
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

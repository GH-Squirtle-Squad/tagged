import axios from "axios"
import { AsyncStorage } from "react-native"
const serverURL = "https://tagged-backend.herokuapp.com/"

const GET_USERS = "GET_USERS"

const getUsers = users => ({
  type: GET_USERS,
  users
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

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}

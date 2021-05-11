import axios from "axios"
const serverURL = "https://tagged-backend.herokuapp.com/"

const GET_TAGS = "GET_TAGS"

const getTags = tags => ({
  type: GET_TAGS,
  tags
})

export const fetchTags = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${serverURL}api/tags`)
      dispatch(getTags(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function tagsReducer(state = [], action) {
  switch (action.type) {
    case GET_TAGS:
      return action.tags
    default:
      return state
  }
}

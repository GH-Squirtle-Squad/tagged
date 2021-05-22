import axios from "axios"
const SERVERURL = "https://tagged-backend.herokuapp.com/"
import { AsyncStorage } from "react-native"
import { uploadImage } from "../s3"

//Action Constants
const TOKEN = "token"
const GET_TAGS = "GET_TAGS"
const REMOVE_TAG = "REMOVE_TAG"
const ADD_TAG = "ADD_TAG"

//Action Creators
const getTags = tags => ({
  type: GET_TAGS,
  tags
})

const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
})

function addTag(tag) {
  return {
    type: ADD_TAG,
    tag
  }
}

//Thunks
export const fetchTags = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${SERVERURL}api/tags`)
      dispatch(getTags(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteTag = id => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem(TOKEN)
      if (token) {
        const { data } = await axios.delete(`${SERVERURL}api/tags/${id}`, {
          headers: {
            authorization: token
          }
        })
        dispatch(removeTag(data))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const uploadTagThunk = (data, props) => {
  return async dispatch => {
    try {
      const result = await uploadImage(data)
      const tag = {
        imageUrl: result.body.postResponse.location,
        title: data.title,
        userId: data.userId
      }
      const { data: uploadedTag } = await axios.post(
        `${SERVERURL}api/tags/`,
        tag
      )
      dispatch(addTag(uploadedTag))
      return true
    } catch (error) {
      console.log(error)
      console.error("error in the uploadTagThunk")
      return false
    }
  }
}

//Reducer
export default function tagsReducer(state = [], action) {
  switch (action.type) {
    case ADD_TAG:
      return [...state, action.tag]
    case GET_TAGS:
      return action.tags
    case REMOVE_TAG:
      return state.filter(tag => tag.id !== action.tag.id)
    default:
      return state
  }
}

import axios from "axios"
const serverURL = "https://tagged-backend.herokuapp.com/"

const UPLOAD_TAG = "UPLOAD_TAG"

export function uploadTag(tag) {
  return {
    type: UPLOAD_TAG,
    tag
  }
}

const config = {
  headers: {
    "content-type": "multipart/form-data"
  }
}

export const uploadTagThunk = (data, props) => {
  return async dispatch => {
    try {
      const { info } = await axios.post(`${serverURL}api/tags/`, data, config)
      dispatch(uploadTag(info))
    } catch (error) {
      console.log(error)
      console.error("error in the uploadTagThunk")
    }
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_TAG:
      return action.tag
    default:
      return state
  }
}

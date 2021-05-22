//Action Constant
const ADD_MY_TAG = "ADD_MY_TAG"
const REMOVE_MY_TAG = "REMOVE_MY_TAG"

//Action Creator
export const addMyTag = tag => ({
  type: ADD_MY_TAG,
  tag
})

export const removeMyTag = tag => ({
  type: REMOVE_MY_TAG,
  tag
})

//Reducer
export default (state = [], action) => {
  switch (action.type) {
    case ADD_MY_TAG:
      return [...state, action.tag]
    case REMOVE_MY_TAG:
      return state.filter(tag => tag.uri !== action.tag.uri)
    default:
      return state
  }
}

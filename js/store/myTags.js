const ADD_TAG = "ADD_TAG"

export const addTag = tag => ({
  type: ADD_TAG,
  tag
})

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TAG:
      return [...state, action.tag]
    default:
      return state
  }
}


//Action Constant
const ADD_TAG = "ADD_TAG"

//Action Creator
export const addTag = tag => ({
  type: ADD_TAG,
  tag
})

//Reducer
export default (state = [], action) => {
  switch (action.type) {
    case ADD_TAG:
      return [...state, action.tag]
    default:
      return state
  }
}

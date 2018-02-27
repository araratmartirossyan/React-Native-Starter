import { combineReducers } from 'redux-loop'
import { reducer as form } from 'redux-form'
import user from './user'

const appReducers = combineReducers({
  user,
  form
})

// const reducers = (state, action) => {
//   const {
//     type,
//     exclude = []
//   } = action
//   let newState = state
//   // if (type === resetType) {
//   //   newState = undefined
//   //   if (exclude.length) {
//   //     newState = {}
//   //     exclude.forEach(name => {
//   //       newState[name] = state[name]
//   //     })
//   //   }
//   // }

//   return appReducers(newState, action)
// }

export default appReducers

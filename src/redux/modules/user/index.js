import { createAction, createReducer } from 'redux-act'
import { loop, Cmd } from 'redux-loop'
import { clientApi } from '../../../utils/clientApi'
import axios from 'axios'
import R from 'ramda'

const initialState = {
  isWorking: false
}

export const fetch = createAction('makesafe/user/FETCH')
export const fetchSuccess = createAction('makesafe/user/FETCH_SUCCESS')
export const fetchFailure = createAction('makesafe/user/FETCH_FAILURE')

export const request = () => 
  clientApi('get', 'api/music_albums')
    .then(fetchSuccess)
    .catch(fetchFailure)

export const handleFetch = state =>
  loop(
    {
      ...state,
      isLoading: true,
      isLoaded: false,
      
    }, Cmd.run(request, {
      successActionCreator: fetchSuccess,
      failActionCreator: fetchFailure,
    })
  )
  
export const handleFetchSuccess = (state, { payload }) =>
  ({
    ...state,
    isLoading: false,
    isLoaded: true,
    posts: R.pathOr([], ['data'], payload)
  })

  export const handleFetchFailure = (state, payload) =>
    ({
      ...state,
      isLoading: false,
      isLoaded: false,
      isError: payload
      // errors: getErrorMessage(payload) 
      // need to create utils function for getting error 
      // all error need to make in one format
    })

const reducer = createReducer(on => {
  on(fetch, handleFetch)
  on(fetchSuccess, handleFetchSuccess)
  on(fetchFailure, handleFetchFailure)
}, initialState)

export default reducer
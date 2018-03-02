import { createAction, createReducer } from 'redux-act'
import { loop, Cmd } from 'redux-loop'
import { clientApi } from '../../../utils/clientApi'
import axios from 'axios'
import { pathOr } from 'ramda'

const initialState = {
  isWorking: false
}

export const fetch = createAction('makesafe/vinDecoder/FETCH')
export const fetchSuccess = createAction('makesafe/vinDecoder/FETCH_SUCCESS')
export const fetchFailure = createAction('makesafe/vinDecoder/FETCH_FAILURE')

const selector = item => {
  const carInfo = {}
  if (item.Value !== null) {
    carInfo[item.Variable] = {
      ...item
    }
  }
  return carInfo
}

export const request = (payload) =>
  clientApi('get', `${payload}?format=json`)
  .then(fetchSuccess)
  .catch(fetchFailure)

export const handleFetch = (state, { vinCode }) =>
  loop({
    ...state,
    isLoading: true,
    isLoaded: false,

  }, Cmd.run(request, {
    successActionCreator: fetchSuccess,
    failActionCreator: fetchFailure,
    args: [vinCode]
  }))

export const handleFetchSuccess = (state, { payload }) => {
  const data = R.pathOr([], ['data', 'Results'], payload)
  const carInfo = data.filter(item => item.Value !== null)

  return ({
    ...state,
    isLoading: false,
    isLoaded: true,
    carInfo
  })
}

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
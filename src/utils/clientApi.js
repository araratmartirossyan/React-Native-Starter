import axios from 'axios'

const URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/'

const clientApi = (type, url, params) => {
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  const requestPromise = axios[type](`${URL}/${url}`, params)
  return requestPromise
}

export {
  clientApi
}



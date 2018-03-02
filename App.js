import React, { Component } from 'react'
import connect from 'redux-connect-decorator'
import appReducers from './src/redux/modules/reducer'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { createStore, applyMiddleware, compose } from 'redux'
import { install } from 'redux-loop'
import { View } from 'react-native'
import { routes } from './src/helpers/routes'


const enhancer = compose(
  applyMiddleware(logger),
  install()
)
const store = createStore(appReducers, enhancer)

const navigate = item => {
  const { route, component } = item

  Navigation.registerComponent(
    `msapp.${route}`,
    () => component,
    store,
    Provider
  )
}

export const registerScreens = () => routes.map(item => navigate(item))


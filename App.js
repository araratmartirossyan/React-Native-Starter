import React, { Component } from 'react'
import connect from 'redux-connect-decorator'
import appReducers from './src/redux/modules/reducer'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import {
  Navigation
} from 'react-native-navigation'
import { createStore, applyMiddleware, compose } from 'redux'
import { install } from 'redux-loop'
import {
  View
} from 'react-native'
import Root from './src/containers/Root/Root'
import Login from './src/containers/Login/Login'
import SignUp from './src/containers/SignUp/SignUp'
import Drawer from './src/components/Drawer'

const enhancer = compose(
  applyMiddleware(logger),
  install()
)
const store = createStore(appReducers, enhancer)

export function registerScreens() {
  Navigation.registerComponent('msapp.Login', () => Login, store, Provider)
  Navigation.registerComponent('msapp.Root', () => Root, store, Provider)
  Navigation.registerComponent('msapp.SignUp', () => SignUp, store, Provider)
  Navigation.registerComponent('msapp.Types.Drawer', () => Drawer)
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Root />
        </View>
      </Provider>
    )
  }
}

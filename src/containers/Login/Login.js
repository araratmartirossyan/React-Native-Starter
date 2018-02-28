import React, { Component } from 'react'
import connect from 'redux-connect-decorator'
// import { styles } from './Style'
import {
  Text,
  View,
} from 'react-native'

export default class Login extends Component {

  static defaultProps = {
  }

  render() {
    console.log('render')
    return (
      <View>
        <Text>This is Login Page</Text>
      </View>
    )
  }
}

import React, { Component } from 'react'
import connect from 'redux-connect-decorator'
// import { styles } from './Style'
import {
  Text,
  View,
} from 'react-native'


export default class SignUp extends Component {

  static defaultProps = {
  }

  render() {
    return (
      <View>
        <Text>Sign Up</Text>
      </View>
    )
  }
}

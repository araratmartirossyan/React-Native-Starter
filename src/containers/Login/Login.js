import React, { Component } from 'react'
import connect from 'redux-connect-decorator'
// import { styles } from './Style'
import {
  Text,
  View,
  Button
} from 'react-native'

export default class Login extends Component {

  static defaultProps = {
  }

  goTo = () => {
    this.props.navigator.push({
      screen: 'msapp.Root',
      title: 'Pushed Screen'
    })

  }


  render() {
    console.log('render')
    return (
      <View>
        <Text>This is Login Page</Text>
        <Button
          onPress={this.goTo}
          title={'Go'}
          color="#000"
        />
      </View>
    )
  }
}

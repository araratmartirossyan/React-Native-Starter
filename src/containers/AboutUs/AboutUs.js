import React, { Component } from 'react'
import connect from 'redux-connect-decorator'
import {
  Text,
  View,
} from 'react-native'


export default class AboutUs extends Component {
  render() {
    const { text } = this.props
    return (
      <View>
        <Text>{text}</Text>
      </View>
    )
  }
}

AboutUs.defaultProps = {
    text: 'About Us'
}

AboutUs.propTypes = {

}
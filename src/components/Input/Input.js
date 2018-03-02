import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import R from 'ramda'

export default class Input extends Component {
  static defaultProps = {
    onChangeFunc: () => {}
  }

  handleChange = event => {
    const { onChangeFunc } = this.props
    const { value } = event.currentTarget

    onChangeFunc(value)
  }

  render() {
    const {
      placeholder,
      error,
      success,
      mask,
      mode,
      component,
      ...rest
    } = this.props
    const Tag = mask ? InputMask : component || 'input'
    const props = component ? {} : {
      placeholder,
      onChange: this.handleChange
    }

    return (
      <TextInput
        style={styles.input}
        {...props}
        {...R.omit(['onChangeFunc', 'items', 'valuePostfix', 'renderItem', 'meta'], rest)}
      />
    )
  }
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 45,
      width: 255,
      borderWidth: 1,
      paddingLeft: 10,
      borderColor: '#ddd',
      shadowOffset: { width: 0.1,  height: 0.1 },
      shadowColor: 'gray',
      shadowOpacity: 0.2,
    }
})

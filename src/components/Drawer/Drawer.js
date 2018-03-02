import React from 'react';
import { StyleSheet, View, Button } from 'react-native'
import { menu } from './menu.mock'
import { homeNavigator } from '../../containers/Root/Root.js'

export default class Drawer extends React.Component {
  goTo = link => () => {
    const { navigator } = this.props
    this.toggleDrawer()
    homeNavigator.push({
      screen: `msapp.${link}`
    })
  }

  toggleDrawer = () =>
    this.props.navigator.toggleDrawer({
      side: 'left'
    })

  renderButton = ({ action, title, link }, key) =>
    <View
      key={key}
      style={styles.button}
    >
      <Button
        onPress={this.goTo(link)}
        title={title}
        color="#fff"
      />
    </View>

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        {menu.map((item, key) => this.renderButton(item, key))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#1b84e9'
  },
  button: {
    marginTop: 16
  }
})

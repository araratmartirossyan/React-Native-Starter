import React from 'react';
import { StyleSheet, View, Button } from 'react-native'
import { menu } from './menu.mock'



export default class Drawer extends React.Component {

  goTo = () => {
    this.toggleDrawer()
    this.props.navigator.handleDeepLink({
      link: 'msapp.Login',
      title: 'Pushed Screen'
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
        onPress={this.goTo}
        title={title}
        color="#fff"
      />
    </View>

  render() {
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

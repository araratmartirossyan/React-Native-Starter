import React from 'react';
import { StyleSheet, View, Button } from 'react-native'
import { menu } from './menu.mock'
export default class Drawer extends React.Component {

  onShowModal = () => {
    this.toggleDrawer()
    this.props.navigator.showModal({
      screen: 'example.Modal',
      title: `Modal`
    })
  }

  goToProfile = () => console.log('we will go to profile')

  onPushToFirstTab = () => {
    this.toggleDrawer()
    this.props.navigator.handleDeepLink({
      link: 'tab1/example.Types.Push'
    })
  }

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    })
  }

  renderButton = item =>
    <View style={styles.button}>
      <Button
        onPress={this[item.action]}
        title={item.title}
        color="#fff"
      />
    </View>


  render() {
    return (
      <View style={styles.container}>
        {menu.map(item => this.renderButton(item))}
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

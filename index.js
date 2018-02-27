import { AppRegistry, Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './App'
import App from './App'

AppRegistry.registerComponent('msapp', () => App)

registerScreens()


Navigation.startSingleScreenApp({
  screen: {
    screen: 'msapp.App',
    title: 'Welcome',
    navigatorStyle: {
      navBarBackgroundColor: '#1b84e9'
    },
    navigatorButtons: {}
  },
  drawer: {
    left: {
      screen: 'msapp.Types.Drawer',
      passProps: {},
      disableOpenGesture: false,
      fixedWidth: 500
    },
    style: {
      drawerShadow: false,
      leftDrawerWidth: 50,
      rightDrawerWidth: 50
    },
    type: 'MMDrawer',
    animationType: 'none',
    disableOpenGesture: false
  },
  passProps: {},
  animationType: 'none'
});

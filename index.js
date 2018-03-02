import { AppRegistry, Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './App'
import App from './App'

AppRegistry.registerComponent('msapp', () => App)

registerScreens()

Navigation.startSingleScreenApp({
  screen: {
    screen: 'msapp.Root',
    title: 'MakeSafe',
    navigatorStyle: {
      navBarBackgroundColor: '#1b84e9',
      navBarTextColor: '#fff',
      navBarNoBorder: true,
      statusBarTextColorSchemeSingleScreen: 'light',
      statusBarTextColorScheme: 'light',
      navBarButtonColor: '#fff'
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

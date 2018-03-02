import Root from '../containers/Root/Root'
import Login from '../containers/Login/Login'
import SignUp from '../containers/SignUp/SignUp'
import Drawer from '../components/Drawer'
import AboutUs from '../containers/AboutUs'

export const routes = [{
    route: 'Login',
    component: Login
  },
  {
    route: 'Root',
    component: Root
  },
  {
    route: 'Types.Drawer',
    component: Drawer
  },
  {
    route: 'SignUp',
    component: SignUp
  },
  {
    route: 'AboutUs',
    component: AboutUs
  }
]
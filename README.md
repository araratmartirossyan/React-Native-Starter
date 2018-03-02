# React Native Starter

## Include
- Redux
- React-native-navigation
- Redux-loop
- Redux-form
- Redux-act
- Redux-logger
- Redux-thunk
- Redux-connect-decorator
- Ramda
- Axios

## Routes

Inside `src/helpers/` folder, you can find the routes file where you want to import the finished component and add the desired path to the route object.

```
import MyComponent from '../containers/Component'

export const routes = [{
    route: 'MyComponent',
    component: MyComponents
  }
]
```


## Api

To connect to the API, there is a clientApi file, inside you can specify your path to the API and use it in the Reducers

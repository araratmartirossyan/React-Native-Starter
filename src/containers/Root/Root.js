import React, { Component, PropTypes as pt } from 'react'
import connect from 'redux-connect-decorator'
import { pathOr, isEmpty } from 'ramda'
import { fetch } from '../../redux/modules/vinDecoder'
import { Field, reduxForm } from 'redux-form'
import Input from './../../components/Input'
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Card,
  ListItem,
  Dimensions,
  Form
} from 'react-native'

const { width, height } = Dimensions.get('window');

const title = 'Проверьте отчеты о машине просто введя Vin-код'

@connect(state => {
  const { vinDecoder } = state
  const carInfo = pathOr({}, ['carInfo'], vinDecoder)
  const error = pathOr('', ['isError'], vinDecoder)
  return {
    carInfo
  }
}, {
  fetch
})
@reduxForm({
  form: 'vinCode'
})
export default class Root extends Component {

  callReducer = values => this.props.fetch(values)

  static defaultProps = {
    posts: []
  }

  renderInput = field => {
    const {
      type,
      placeholder,
      input,
      meta: { error, touched }
    } = field
    const isError = error && touched

    return (
      <View>
        <Input
          type={type}
          error={isError}
          placeholder={placeholder}
          {...input}
        />
      </View>
    )
  }

  renderText = (style, text) =>
    <Text
      style={styles[style]}
    >
      {text}
    </Text>

  renderButton = () =>
    <TouchableOpacity
      style={styles.button}
      onPress={this.props.handleSubmit(this.callReducer)}
    >
    {this.renderText('buttonText', 'Проверить')}
    </TouchableOpacity>

  renderCarInfo = () => {
    const { carInfo } = this.props
    const data = Object.values(carInfo).splice(4, 12)

    console.log('we will render', carInfo)

    return (
      <View style={styles.block}>
        {data.map(item => this.renderText('title', item.Value))}
      </View>
    )
  }
    

  render() {
    const { carInfo, error, handleSubmit } = this.props
    const showForm = isEmpty(carInfo)

    return (
      <View style={styles.container}>
        <View style={styles.divider} />
        {showForm && <View style={styles.block}>
          {this.renderText('title', title)}
          <Field
            style={styles.field}
            name='vinCode'
            component={this.renderInput}
            placeholder='введите ВИН-код'
          />
          {this.renderButton()}
        </View>}
        {!showForm && this.renderCarInfo()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  divider: {
    backgroundColor: "#1b84e9",
    height: (height / 2) - 50,
    width: width
  },
  block: {
    shadowOffset: { width: 1,  height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    width: 300,
    height: 205,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: (height / 2) / 2
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  button: {
    backgroundColor: "#1b84e9",
    width: 255,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 20
  },
  title: {
    width: 240,
    marginLeft: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    paddingTop: 15
  }
})

import React, { Component } from 'react'
import connect from 'redux-connect-decorator'
import { pathOr } from 'ramda'
import { fetch } from '../../redux/modules/user'
// import { styles } from './Style'
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Button,
  Card,
  ListItem
} from 'react-native'

@connect(state => {
  const { user } = state
  const posts = pathOr([], ['posts'], user)
  const error = pathOr('', ['isError'], user)
  return {
    posts
  }
}, {
  fetch
})

export default class Root extends Component {

  callReducer = () => this.props.fetch()

  static defaultProps = {
    posts: [],
  }

  renderCard = item =>
    <Card
      title={item.title}
      image={{ uri: item.thumbnail_image }}
    >
      {this.renderText(item)}
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW'
      />
    </Card>

  renderText = item =>
    <Text
      key={item.title}
    >
      {item.title}
    </Text>

  render() {
    const { posts, error } = this.props

    return (
      <View style={styles.container}>
        {posts.map(item => this.renderText(item))}
        <Button
          title="Fetch"
          onPress={this.callReducer}
          textStyle={{ color: 'white' }}
          buttonStyle={styles.button}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingTop: 60
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
      backgroundColor: "rgba(92, 99,216, 1)",
      width: 300,
      height: 45,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 5
    }
})

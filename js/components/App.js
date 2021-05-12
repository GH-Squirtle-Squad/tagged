import React, { Component } from "react"
import { connect } from "react-redux"
import { Button } from "react-native-elements"
import background from "../res/image.png"
import { View, Text, ImageBackground, TextInput, Image } from "react-native"
import { authenticate } from "../store/auth"
import styles from "../styles"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(method) {
    const { username, password } = this.state
    this.props.authenticate(username, password, method, this.props.history)
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={background}>
          <View style={styles.logoContainer}></View>
        </ImageBackground>
        <View style={styles.outer}>
          <Image
            style={styles.logo}
            source={require("../res/welcomelogo.png")}
          />
          <View style={styles.inner}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#000000"
              autoCapitalize="none"
              onChangeText={text => this.setState({ username: text})}
            />
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#000000"
              autoCapitalize="none"
              onChangeText={text => this.setState({ password: text})}
            />
          </View>
          <Button
            buttonStyle={styles.button}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#00F"
            }}
            disabledTitleStyle={{ color: "#00F" }}
            linearGradientProps={null}
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={() => this._handleSubmit("signup")}
            title="Sign Up"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5 }}
          />
          <Button
            buttonStyle={styles.button}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#00F"
            }}
            disabledTitleStyle={{ color: "#00F" }}
            linearGradientProps={null}
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={() => this._handleSubmit("login")}
            title="Login"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5 }}
          />
        </View>
      </View>
    )
  }
}

const mapDispatch = dispatch => ({
  authenticate: (username, password, method, history) =>
    dispatch(authenticate(username, password, method, history))
})

export default connect(null, mapDispatch)(App)

import React, { Component } from "react"
import { connect } from "react-redux"
import { Button } from "react-native-elements"
import background from "../res/image.png"
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableHighlight
} from "react-native"
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
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../res/bg.png")}
        ></ImageBackground>
        <View style={styles.outer}>
          {/* logo  */}
          <Image
            style={styles.logo}
            source={require("../res/welcomelogo.png")}
          />

          {/* username input         */}
          <View style={styles.inner}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#000000"
              autoCapitalize="none"
              onChangeText={text => this.setState({ username: text })}
            />

            {/* password input           */}
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#000000"
              autoCapitalize="none"
              onChangeText={text => this.setState({ password: text })}
            />
            {/*... login or try again button */}
            {!this.props.auth.error ? (
              <View style={styles.container}>
                <TouchableHighlight
                  underlayColor={"#00000000"}
                  onPress={() => this._handleSubmit("login")}
                >
                  <Image
                    style={styles.signButton}
                    source={require("../res/login.png")}
                  />
                </TouchableHighlight>
              </View>
            ) : (
              <View style={styles.container}>
                <TouchableHighlight
                  underlayColor={"#00000000"}
                  onPress={() => this._handleSubmit("login")}
                >
                  <Image
                    style={styles.signButton}
                    source={require("../res/tryagain.png")}
                  />
                </TouchableHighlight>
              </View>
            )}
            {/* signup button         */}
            <View style={styles.container}>
              <TouchableHighlight
                underlayColor={"#00000000"}
                onPress={() => this._handleSubmit("signup")}
              >
                <Image
                  style={styles.signButton}
                  source={require("../res/signup.png")}
                />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const mapState = state => ({
  auth: state.auth
})

const mapDispatch = dispatch => ({
  authenticate: (username, password, method, history) =>
    dispatch(authenticate(username, password, method, history))
})
export default connect(mapState, mapDispatch)(App)

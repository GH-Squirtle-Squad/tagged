import React, { Component } from "react"
import { connect } from "react-redux"
import { Button } from "react-native-elements"
import { View, Image, ImageBackground } from "react-native"
import background from "../res/image.png"
import styles from "../styles"
import { logout } from "../store/auth"

class Homebase extends Component {
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
            onPress={() => this.props.history.push("/tag")}
            title="Throw Up!"
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
            onPress={() => this.props.history.push("/gallery")}
            title="Check Pieces Out!"
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
            onPress={() => this.props.logout(this.props.history)}
            title="Log Out :("
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5 }}
          />
        </View>
      </View>
    )
  }
}

const mapDispatch = dispatch => ({
  logout: history => dispatch(logout(history))
})

export default connect(null, mapDispatch)(Homebase)

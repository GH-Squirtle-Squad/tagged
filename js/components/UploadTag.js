import React, { Component } from "react"
import { View, TextInput, Image, ImageBackground } from "react-native"
import background from "../res/image.png"
import { Button } from "react-native-elements"
import styles from "../styles"

class UploadTag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      image: ""
    }
    this._handleSubmit = this._handleSubmit.bind(this)
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
          {this.state.image.length > 1 ? (
            <Image style={styles.preview} source={{ uri: this.state.image }} />
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Title"
            autocapitalize="none"
            placeholderTextColor="#000000"
          />
          <Button
            buttonStyle={styles.signButton}
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
            onPress={() => this._handleSubmit()}
            title="Upload"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5 }}
          />
        </View>
      </View>
    )
  }

  _handleSubmit() {}
}

export default UploadTag

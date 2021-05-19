import React, { Component } from "react"
import { View, TextInput, Image, ImageBackground, TouchableHighlight } from "react-native"
import background from "../res/image.png"
import { Button } from "react-native-elements"
import styles from "../styles"

class UploadTag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      image: null
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  render() {
    return (
      <View style={styles.container}>
              <ImageBackground style={styles.backgroundImage} source={require('../res/bg.png')}>
            </ImageBackground>
        <View style={styles.outer}>
          <Image
            style={styles.logo}
            source={require("../res/welcomelogo.png")}
          />
          {this.state.image ? (
            <Image
              style={styles.preview}
              source={{ uri: this.state.image.uri }}
            />
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Title"
            autocapitalize="none"
            placeholderTextColor="#000000"
          />
          {/* <Button
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
            onPress={() => console.log("Button clicked")}
            title="Choose Photo"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5 }}
          /> */}
           <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={this._reset}
          >
            <Image
              style={styles.img}
              source={require("../res/choosephoto.png")}
            />
          </TouchableHighlight>

          {/* <Button
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
          /> */}
              <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={this._reset}
          >
            <Image
              style={styles.img}
              source={require("../res/uploadimage.png")}
            />
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={"#00000000"}
            onPress={() => this.props.history.push("/homebase")}
          >
            <Image
              source={require("../res/gobackhome.png")}
              style={styles.img}
            />
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  _handleSubmit() {}
}

export default UploadTag

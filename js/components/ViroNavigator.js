import React, { Component } from "react"
import {
  View,
  Image,
  TouchableHighlight,
  Platform,
  PermissionsAndroid
} from "react-native"
import { ViroARSceneNavigator } from "react-viro"
import SketchSceneAR from "./SketchSceneAR"
import styles from "../styles"

export default class ViroNavigator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: "white",
      drawing: false
    }

    this._getARSketch = this._getARSketch.bind(this)
    this._goHome = this._goHome.bind(this)
    this._reset = this._reset.bind(this)
    this._setARNavigatorRef = this._setARNavigatorRef.bind(this)
    this._takeScreenshot = this._takeScreenshot.bind(this)
    this._toggleColor = this._toggleColor.bind(this)
  }

  render() {
    return this._getARSketch()
  }

  _getARSketch() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ViroARSceneNavigator
          style={{ flex: 1 }}
          initialScene={{ scene: SketchSceneAR }}
          viroAppProps={{
            _goHome: this._goHome,
            color: this.state.color,
            drawing: this.state.drawing,
            _reset: this._reset,
            _takeScreenshot: this._takeScreenshot
          }}
          ref={this._setARNavigatorRef}
        />

        <View
          style={{
            position: "absolute",
            bottom: 700,
            left: 0,
            right: 0,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={this._reset}
          >
            <Image
              style={styles.nevermind}
              source={require("../res/nevermind.png")}
            />
          </TouchableHighlight>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 120,
            left: 0,
            right: 0,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={this._goHome}
          >
            <Image
              style={styles.goHome}
              source={require("../res/gohome.png")}
            />
          </TouchableHighlight>
        </View>
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 77,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={() => this._toggleColor("red")}
          >
            <Image
              style={styles.sprayCan}
              source={require("../res/redbutton.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={() => {
              this._toggleColor("orange")
            }}
          >
            <Image
              style={styles.sprayCan}
              source={require("../res/orangebutton.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={() => this._toggleColor("green")}
          >
            <Image
              style={styles.sprayCan}
              source={require("../res/greenbutton.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={() => this._toggleColor("blue")}
          >
            <Image
              style={styles.sprayCan}
              source={require("../res/bluebutton.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={() => this._toggleColor("purple")}
          >
            <Image
              style={styles.sprayCan}
              source={require("../res/purplebutton.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  _goHome() {
    this.props.history.push("/homebase")
  }

  _reset() {
    this.setState({
      drawing: false
    })
  }

  _setARNavigatorRef(ARNavigator) {
    this._arNavigator = ARNavigator
  }

  async _takeScreenshot() {
    if (Platform.OS === "android") {
      // this.requestWriteAccessPermission()
      console.log("i am an android")
    }
    await this._arNavigator._takeScreenshot("tag", true)
    alert("Piece saved to camera roll!")
  }

  _toggleColor(colorName) {
    this.setState({
      drawing: true,
      color: colorName
    })
  }
}

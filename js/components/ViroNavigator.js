import React, { Component } from "react"
import { View, Image, TouchableHighlight, Platform } from "react-native"
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
            color: this.state.color,
            drawing: this.state.drawing
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
            bottom: 600,
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
            onPress={this._takeScreenshot}
          >
            <Image
              style={styles.nevermind}
              source={require("../res/camerabutton.png")}
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
      alert("Screenshot feature for Android devices coming soon.")
    } else {
      await this._arNavigator._takeScreenshot("tag", true)
      alert("Piece saved to camera roll!")
    }
  }

  _toggleColor(colorName) {
    this.setState({
      drawing: true,
      color: colorName
    })
  }
}

//SAMPLE PERMISSIONS CODE:

//import { PermissionsAndroid } from "react-native"

// async requestWriteAccessPermission() {
//   try {
//     const granted = await PermissionsAndroid.requestMultiple(
//       [
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
//       ],
//       {
//         title: "<tagged/> Write Permission",
//         message:
//           "<tagged/> needs to access your photos" +
//           "so you can record photos of" +
//           "your tags.",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK"
//       }
//     )
//     if (granted == PermissionsAndroid.RESULTS.GRANTED) {
//       this.setState({
//         writeAccessPermission: true,
//         readAccessPermission: true
//       })
//     } else {
//       this.setState({
//         writeAccessPermission: false
//       })
//     }
//   } catch (err) {
//     console.warn("[PermissionsAndroid]" + err)
//   }
// }

// async requestReadAccessPermission() {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       {
//         title: "<tagged/> File Permission",
//         message:
//           "<tagged/> needs to access your file " +
//           "so you can view your tags in the gallery.",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK"
//       }
//     )
//     if (granted == PermissionsAndroid.RESULTS.GRANTED) {
//       this.setState({
//         readAccessPermission: true
//       })
//     } else {
//       this.setState({
//         readAccessPermission: false
//       })
//     }
//   } catch (err) {
//     console.warn("[PermissionsAndroid]" + err)
//   }
// }

import React, { Component } from "react"
import { View, Image, TouchableHighlight, Platform } from "react-native"
import { ViroARSceneNavigator } from "react-viro"
import { connect } from "react-redux"
import { addMyTag } from "../store/myTags"
import SketchSceneAR from "./SketchSceneAR"
import styles from "../styles"

class ViroNavigator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: "white",
      drawing: false,
      screenshots: 1
    }

    this._getARSketch = this._getARSketch.bind(this)
    this._goHome = this._goHome.bind(this)
    this._pause = this._pause.bind(this)
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
        {/* renders the scene       */}
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
          {/* clear and stop drawing buttons        */}
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={() => this._pause(false)}
          >
            <Image
              style={styles.nevermind}
              source={require("../res/nevermind.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={() => this._pause("paused")}
          >
            <Image
              style={styles.nevermind}
              source={require("../res/stopdrawing.png")}
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
          {/* screenshot button for iOS only */}

          {Platform.OS !== "android" ? (
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
          ) : null}
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
          {/* go home button         */}
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
          {/* spray cans to change color of lines         */}
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

  // method to return home
  _goHome() {
    this.props.history.push("/homebase")
  }

  // method to clear lines
  _pause(str) {
    console.log(str)
    this.setState({
      drawing: str
    })
  }

  //method to allow screenshot button to be located outside scene
  _setARNavigatorRef(ARNavigator) {
    this._arNavigator = ARNavigator
  }

  //async method to take screenshot for iOS
  async _takeScreenshot() {
    const tag = await this._arNavigator._takeScreenshot(
      `tag${this.state.screenshots}`,
      true
    )
    alert("Piece saved to camera roll!")
    this.props.addMyTag({ uri: "file://" + tag.url })
    this.setState({
      screenshots: this.state.screenshots + 1
    })
  }

  //method to change color of lines
  _toggleColor(colorName) {
    this.setState({
      drawing: true,
      color: colorName
    })
  }
}

const mapDispatch = dispatch => ({
  addMyTag: tag => dispatch(addMyTag(tag))
})

export default connect(null, mapDispatch)(ViroNavigator)

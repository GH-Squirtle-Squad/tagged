"use strict"

import React, { Component } from "react"

import {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  PixelRatio,
  TouchableHighlight,
  Button
} from "react-native"

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroFlexView,
  ViroImage,
  ViroPolyline,
  ViroMaterials,
  ViroButton
} from "react-viro"

//add texture
ViroMaterials.createMaterials({
  red: { diffuseColor: "red" },
  blue: { diffuseColor: "blue" },
  yellow: { diffuseColor: "yellow" },
  green: { diffuseColor: "green" },
  purple: { diffuseColor: "purple" },
  black: { diffuseColor: "black" },
  white: { diffuseColor: "white" },
  orange: { diffuseColor: "orange" }
})

export default class SketchSceneAR extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      thickness: 0.1,
      points: [[0, 0, 0]],
      drawing: false,
      polyline: [],
      color: "white"
    }

    // bind 'this' to functions
    this._onCameraARHitTest = this._onCameraARHitTest.bind(this)
    this._onInitialized = this._onInitialized.bind(this)
    this._toggleDraw = this._toggleDraw.bind(this)
    this._toggleColor = this._toggleColor.bind(this)
  }

  render() {
    return (
      <ViroARScene
        onCameraARHitTest={this._onCameraARHitTest}
        onTrackingUpdated={this._onInitialized}
      >
        <ViroButton
          source={
            !this.state.drawing
              ? require("./res/startdrawing.png")
              : require("./res/stopdrawing.png")
          }
          // gazeSource={require("./res/startdrawing.png")}
          // tapSource={require("./res/stopdrawing.png")}
          position={[1, 3, -5]}
          height={1}
          width={1}
          onClick={this._toggleDraw}
          onGaze={this._onButtonGaze}
        />

        <ViroButton
          source={require("./res/purple.png")}
          // gazeSource={require("./res/purple.png")}
          // tapSource={require("./res/purple.png")}
          position={[2, 3, -6]}
          height={1}
          width={1}
          onClick={() => this._toggleColor("purple")}
          onGaze={this._onButtonGaze}
        />

        <ViroPolyline
          position={[0, 0, -2]}
          points={this.state.points}
          thickness={this.state.thickness}
          materials={this.state.color}
        />

        {/*<ViroPolyline
          position={[-1, -1, -0.9]}
          points={[
            [0, 0, 0],
            [0.5, 0.5, 0.5],
            [1, 0, 0]
          ]}
          thickness={0.1}
          materials={["yellow"]}
        /> */}
        {/* <ViroFlexView
          style={{
            flexDirection: "row",
            padding: 0.1,
            backgroundColor: "white"
          }}
          width={1}
          height={1}
          position={[0, 0, -1]}
        ></ViroFlexView> */}
      </ViroARScene>
    )
  }

  _toggleDraw() {
    const current = this.state.drawing
    this.setState({
      drawing: !current
    })
  }

  _toggleColor(colorName) {
    // console.log("color", colorName)
    this.setState({
      color: colorName
    })
  }

  _onCameraARHitTest(results) {
    if (this.state.drawing) {
      if (results.hitTestResults.length > 0) {
        for (var i = 0; i < results.hitTestResults.length; i++) {
          let result = results.hitTestResults[i]
          if (
            result.type == "ExistingPlaneUsingExtent" ||
            result.type == "FeaturePoint" ||
            result.type == "ExistingPlane"
          ) {
            this.setState({
              points: [...this.state.points, result.transform.position]
            })
            break
          }
        }
      }
    }
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      })
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
})

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black"
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
})

module.exports = SketchSceneAR

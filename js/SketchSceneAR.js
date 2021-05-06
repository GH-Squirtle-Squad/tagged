"use strict"

import React, { Component } from "react"

import { StyleSheet } from "react-native"

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroFlexView,
  ViroImage,
  ViroPolyline,
  ViroMaterials
} from "react-viro"

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
      points: [[0, 0, 0]]
    }

    // bind 'this' to functions
    this._onCameraARHitTest = this._onCameraARHitTest.bind(this)
    this._onInitialized = this._onInitialized.bind(this)
  }

  render() {
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        onCameraARHitTest={this._onCameraARHitTest}
      >
        <ViroPolyline
          position={[0, 0, -2]}
          points={this.state.points}
          thickness={this.state.thickness}
          materials={"white"}
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

  _onCameraARHitTest(results) {
    if (results.hitTestResults.length > 0) {
      for (var i = 0; i < results.hitTestResults.length; i++) {
        let result = results.hitTestResults[i]
        if (
          result.type == "ExistingPlaneUsingExtent" ||
          result.type == "FeaturePoint"
        ) {
          this.setState({
            points: [...this.state.points, result.transform.position]
          })
          break
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

module.exports = SketchSceneAR

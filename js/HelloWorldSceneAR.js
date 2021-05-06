"use strict"

import React, { Component } from "react"

import { StyleSheet } from "react-native"

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroFlexView,
  ViroImage
} from "react-viro"

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {

      drawing: true,
      text: "Initializing AR..."
    }

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this)
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroText
          text={this.state.text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />


        <ViroFlexView
          style={{ flexDirection: "row", padding: 0.1 }}
          width={5.0}
          height={5.0}
          position={[-5.0, 0.0, -2.0]}
          rotation={[0, 45, 0]}
        >
          <ViroImage
            source={require("./res/guadalupe_360.jpg")}
            style={{ flex: 0.5 }}
          />
        </ViroFlexView>

      </ViroARScene>
    )
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

module.exports = HelloWorldSceneAR

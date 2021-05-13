"use strict"

import React, { Component } from "react"

import {
  ViroARScene,
  ViroPolyline,
  ViroMaterials,
  ViroButton,
  ViroCamera
} from "react-viro"

import { Platform, PermissionsAndroid } from "react-native"

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
      polylines: [],
      drawing: false,
      color: "white",
      writeAccessPermission: false,
      readAccessPermission: false
    }

    // bind 'this' to functions
    this._onCameraARHitTest = this._onCameraARHitTest.bind(this)
    this._reset = this._reset.bind(this)
    this._takeScreenshot = this._takeScreenshot.bind(this)
    this._toggleDraw = this._toggleDraw.bind(this)
    this._toggleColor = this._toggleColor.bind(this)
    this.requestWriteAccessPermission =
      this.requestWriteAccessPermission.bind(this)
    this.requestReadAccessPermission =
      this.requestReadAccessPermission.bind(this)
  }

  render() {
    console.log(this.props)
    return (
      <ViroARScene onCameraARHitTest={this._onCameraARHitTest}>
        <ViroCamera position={[0, 0, 0]} active={true}>
          <ViroButton
            source={
              !this.state.drawing
                ? require("../res/startdrawing.png")
                : require("../res/stopdrawing.png")
            }
            position={[0.3, 1, -2]}
            height={0.5}
            width={0.5}
            onClick={this._toggleDraw}
          />

          <ViroButton
            source={require("../res/nevermind.png")}
            position={[-0.3, 1, -2]}
            height={0.5}
            width={0.5}
            onClick={this._reset}
          />

          <ViroButton
            source={require("../res/camerabutton.png")}
            position={[-0, 0.6, -2]}
            height={0.3}
            width={0.3}
            onClick={this._takeScreenshot}
          />

          <ViroButton
            source={require("../res/gohome.png")}
            position={[0, -0.6, -2]}
            height={0.4}
            width={0.4}
            onClick={() => this.props.arSceneNavigator.viroAppProps._goHome()}
          />

          <ViroButton
            source={require("../res/purplebutton.png")}
            position={[0.5, -1, -2]}
            height={0.3}
            width={0.3}
            onClick={() => this._toggleColor("purple")}
          />

          <ViroButton
            source={require("../res/greenbutton.png")}
            position={[-0.5, -1, -2]}
            height={0.3}
            width={0.3}
            onClick={() => this._toggleColor("green")}
          />

          <ViroButton
            source={require("../res/orangebutton.png")}
            position={[0.25, -1, -2]}
            height={0.3}
            width={0.3}
            onClick={() => this._toggleColor("orange")}
          />

          <ViroButton
            source={require("../res/redbutton.png")}
            position={[-0.25, -1, -2]}
            height={0.3}
            width={0.3}
            onClick={() => this._toggleColor("red")}
          />

          <ViroButton
            source={require("../res/bluebutton.png")}
            position={[0, -1, -2]}
            height={0.3}
            width={0.3}
            onClick={() => this._toggleColor("blue")}
          />
        </ViroCamera>
        {this.state.polylines.map((line, i) => (
          <ViroPolyline
            key={i}
            position={[0, 0, -3]}
            points={line.points}
            thickness={this.state.thickness}
            materials={line.color}
          />
        ))}
        <ViroPolyline
          position={[0, 0, -3]}
          points={this.state.points}
          thickness={this.state.thickness}
          materials={this.state.color}
        />
      </ViroARScene>
    )
  }

  _reset() {
    this.setState({
      polylines: [],
      points: [[0, 0, 0]],
      drawing: false
    })
  }

  async requestWriteAccessPermission() {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        ],
        {
          title: "<tagged/> Write Permission",
          message:
            "<tagged/> needs to access your photos" +
            "so you can record photos of" +
            "your tags.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      )
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
          writeAccessPermission: true,
          readAccessPermission: true
        })
      } else {
        this.setState({
          writeAccessPermission: false
        })
      }
    } catch (err) {
      console.warn("[PermissionsAndroid]" + err)
    }
  }

  async requestReadAccessPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "<tagged/> File Permission",
          message:
            "<tagged/> needs to access your file " +
            "so you can view your tags in the gallery.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      )
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
          readAccessPermission: true
        })
      } else {
        this.setState({
          readAccessPermission: false
        })
      }
    } catch (err) {
      console.warn("[PermissionsAndroid]" + err)
    }
  }

  async _takeScreenshot() {
    if (Platform.OS !== "ios" && !this.state.writeAccessPermission) {
      this.requestWriteAccessPermission()
    }
    await this.props.arSceneNavigator.takeScreenshot("tag", true)
    alert("Piece saved to camera roll!")
  }

  _toggleDraw() {
    const current = this.state.drawing
    const points = [...this.state.points]
    if (current) {
      this.setState({
        polylines: [
          ...this.state.polylines,
          { points: points, color: this.state.color }
        ],
        points: [[0, 0, 0]]
      })
    }
    this.setState({
      drawing: !current
    })
  }

  _toggleColor(colorName) {
    const current = this.state.color
    const points = [...this.state.points]
    if (this.state.color !== colorName) {
      this.setState({
        polylines: [
          ...this.state.polylines,
          { points: points, color: current }
        ],
        points: [[0, 0, 0]]
      })

      this.setState({
        color: colorName
      })
    }
  }

  _onCameraARHitTest(results) {
    if (this.state.drawing) {
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
  }
}

module.exports = SketchSceneAR
